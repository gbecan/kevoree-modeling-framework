package org.kevoree.modeling.api.data.manager;

import org.kevoree.modeling.api.KConfig;
import org.kevoree.modeling.api.abs.AbstractMetaAttribute;
import org.kevoree.modeling.api.abs.AbstractMetaReference;
import org.kevoree.modeling.api.data.cache.KCacheEntry;
import org.kevoree.modeling.api.json.*;
import org.kevoree.modeling.api.meta.Meta;
import org.kevoree.modeling.api.meta.MetaAttribute;
import org.kevoree.modeling.api.meta.MetaClass;
import org.kevoree.modeling.api.meta.MetaModel;
import org.kevoree.modeling.api.meta.MetaReference;
import org.kevoree.modeling.api.meta.MetaType;
import org.kevoree.modeling.api.meta.PrimitiveTypes;

/**
 * Created by duke on 11/25/14.
 */
public class JsonRaw {

    public static final String SEP = "@";

    public static boolean decode(String payload, long now, MetaModel metaModel, final KCacheEntry entry) {
        if (payload == null) {
            return false;
        }
        JsonObjectReader objectReader = new JsonObjectReader();
        objectReader.parseObject(payload);
        //Consistency check
        if (objectReader.get(JsonModelSerializer.KEY_META) == null) {
            return false;
        } else {
            //Init metaClass before everything
            entry.metaClass = metaModel.metaClass(objectReader.get(JsonModelSerializer.KEY_META).toString());
            //Init the Raw manager
            entry.initRaw(Index.RESERVED_INDEXES + entry.metaClass.metaElements().length);
            //Now Fill the Raw Storage
            String[] metaKeys = objectReader.keys();
            for (int i = 0; i < metaKeys.length; i++) {
                if (metaKeys[i].equals(JsonModelSerializer.INBOUNDS_META)) {
                    try {
                        String[] raw_keys = objectReader.getAsStringArray(metaKeys[i]);
                        long[] inbounds = new long[raw_keys.length];
                        for (int j = 0; j < raw_keys.length; j++) {
                            try {
                                inbounds[j] = Long.parseLong(raw_keys[j]);
                            } catch (Exception e) {
                                e.printStackTrace();
                            }
                        }
                        entry.set(Index.INBOUNDS_INDEX, inbounds);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                } else if (metaKeys[i].equals(JsonModelSerializer.PARENT_META)) {
                    try {
                        String[] parentKeyStrings = objectReader.getAsStringArray(metaKeys[i]);
                        long[] parentKey = new long[1];
                        for (int k = 0; k < parentKeyStrings.length; k++) {
                            parentKey[0] = Long.parseLong(parentKeyStrings[k]);
                        }
                        entry.set(Index.PARENT_INDEX, parentKey);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                } else if (metaKeys[i].equals(JsonModelSerializer.PARENT_REF_META)) {
                    try {
                        String raw_payload_ref = objectReader.get(metaKeys[i]).toString();
                        String[] elemsRefs = raw_payload_ref.split(SEP);
                        if (elemsRefs.length == 2) {
                            MetaClass foundMeta = metaModel.metaClass(elemsRefs[0].trim());
                            if (foundMeta != null) {
                                Meta metaReference = foundMeta.metaByName(elemsRefs[1].trim());
                                if (metaReference != null && metaReference instanceof AbstractMetaReference) {
                                    entry.set(Index.REF_IN_PARENT_INDEX, metaReference);
                                }
                            }
                        }
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                } else {
                    Meta metaElement = entry.metaClass.metaByName(metaKeys[i]);
                    Object insideContent = objectReader.get(metaKeys[i]);
                    if (insideContent != null) {
                        if (metaElement != null && metaElement.metaType().equals(MetaType.ATTRIBUTE)) {
                            entry.set(metaElement.index(), ((AbstractMetaAttribute) metaElement).strategy().load(insideContent.toString(), (AbstractMetaAttribute) metaElement, now));
                        } else if (metaElement != null && metaElement instanceof AbstractMetaReference) {

                            try {
                                String[] plainRawSet = objectReader.getAsStringArray(metaKeys[i]);
                                long[] convertedRaw = new long[plainRawSet.length];
                                for (int l = 0; l < plainRawSet.length; l++) {
                                    try {
                                        convertedRaw[l] = Long.parseLong(plainRawSet[l]);
                                    } catch (Exception e) {
                                        e.printStackTrace();
                                    }
                                }
                                entry.set(metaElement.index(), convertedRaw);
                            } catch (Exception e) {
                                e.printStackTrace();
                            }
                        }
                    }
                }
            }
            entry.setClean();
            return true;
        }
    }

    public static String encode(KCacheEntry raw, long uuid, MetaClass p_metaClass, boolean endline, boolean isRoot) {
        Meta[] metaElements = p_metaClass.metaElements();
        StringBuilder builder = new StringBuilder();
        builder.append("\t{\n");
        builder.append("\t\t\"" + JsonModelSerializer.KEY_META + "\": \"");
        builder.append(p_metaClass.metaName());
        builder.append("\"");
        if (uuid != KConfig.NULL_LONG) {
            builder.append(",\n");
            builder.append("\t\t\"" + JsonModelSerializer.KEY_UUID + "\": \"");
            builder.append(uuid);
            builder.append("\"");
        }
        if (isRoot) {
            builder.append(",\n");
            builder.append("\t\t\"" + JsonModelSerializer.KEY_ROOT + "\": \"");
            builder.append("true");
            builder.append("\"");
        }
        long[] parentKey = raw.getRef(Index.PARENT_INDEX);
        if (parentKey != null) {
            builder.append(",\n");
            builder.append("\t\t\"" + JsonModelSerializer.PARENT_META + "\": [");
            boolean isFirst = true;
            for (int j = 0; j < parentKey.length; j++) {
                if (!isFirst) {
                    builder.append(",");
                }
                builder.append("\"");
                builder.append(parentKey[j]);
                builder.append("\"");
                isFirst = false;
            }
            builder.append("]");
        }
        if (raw.get(Index.REF_IN_PARENT_INDEX) != null) {
            builder.append(",\n");
            builder.append("\t\t\"" + JsonModelSerializer.PARENT_REF_META + "\": \"");
            try {
                builder.append(((MetaReference) raw.get(Index.REF_IN_PARENT_INDEX)).origin().metaName());
                builder.append(SEP);
                builder.append(((MetaReference) raw.get(Index.REF_IN_PARENT_INDEX)).metaName());
            } catch (Exception e) {
                e.printStackTrace();
            }
            builder.append("\"");
        }
        if (raw.get(Index.INBOUNDS_INDEX) != null) {
            builder.append(",\n");
            builder.append("\t\t\"" + JsonModelSerializer.INBOUNDS_META + "\": [");
            try {
                long[] elemsInRaw = (long[]) raw.get(Index.INBOUNDS_INDEX);
                boolean isFirst = true;
                for (int j = 0; j < elemsInRaw.length; j++) {
                    if (!isFirst) {
                        builder.append(",");
                    }
                    builder.append("\"");
                    builder.append(elemsInRaw[j]);
                    builder.append("\"");
                    isFirst = false;
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
            builder.append("]");
        }
        for (int i = 0; i < metaElements.length; i++) {
            if (metaElements[i] != null && metaElements[i].metaType().equals(MetaType.ATTRIBUTE)) {
                Object payload_res = raw.get(metaElements[i].index());
                if (payload_res != null) {
                    if (((MetaAttribute) metaElements[i]).attributeType() != PrimitiveTypes.TRANSIENT) {
                        String attrsPayload = ((MetaAttribute) metaElements[i]).strategy().save(payload_res, (MetaAttribute) metaElements[i]);
                        if (attrsPayload != null) {
                            builder.append(",\n");
                            builder.append("\t\t");
                            builder.append("\"");
                            builder.append(metaElements[i].metaName());
                            builder.append("\": \"");
                            builder.append(attrsPayload);
                            builder.append("\"");
                        }
                    }
                }
            } else if (metaElements[i] != null && metaElements[i].metaType().equals(MetaType.REFERENCE)) {
                Object refPayload = raw.get(metaElements[i].index());
                if (refPayload != null) {
                    builder.append(",\n");
                    builder.append("\t\t");
                    builder.append("\"");
                    builder.append(metaElements[i].metaName());
                    builder.append("\":");
                    long[] elems = (long[]) refPayload;
                    builder.append(" [");
                    for (int j = 0; j < elems.length; j++) {
                        builder.append("\"");
                        builder.append(elems[j]);
                        builder.append("\"");
                        if (j != elems.length - 1) {
                            builder.append(",");
                        }
                    }
                    builder.append("]");
                }
            }
        }
        builder.append("\n");
        if (endline) {
            builder.append("\t}\n");
        } else {
            builder.append("\t}");
        }
        return builder.toString();
    }


}
