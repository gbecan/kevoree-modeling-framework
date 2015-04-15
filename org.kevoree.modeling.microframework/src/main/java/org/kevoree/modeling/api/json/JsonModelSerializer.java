package org.kevoree.modeling.api.json;

import org.kevoree.modeling.api.Callback;
import org.kevoree.modeling.api.KObject;
import org.kevoree.modeling.api.ModelVisitor;
import org.kevoree.modeling.api.VisitRequest;
import org.kevoree.modeling.api.VisitResult;
import org.kevoree.modeling.api.data.cache.KCacheEntry;
import org.kevoree.modeling.api.data.manager.AccessMode;
import org.kevoree.modeling.api.data.manager.JsonRaw;

public class JsonModelSerializer {

    public static final String KEY_META = "@meta";

    public static final String KEY_UUID = "@uuid";

    public static final String KEY_ROOT = "@root";

    public static final String PARENT_META = "@parent";

    public static final String PARENT_REF_META = "@ref";

    public static final String INBOUNDS_META = "@inbounds";

    public static void serialize(final KObject model, final Callback<String> callback) {
        model.view().getRoot().then(new Callback<KObject>() {
            @Override
            public void on(final KObject rootObj) {
                boolean isRoot = false;
                if (rootObj != null) {
                    isRoot = rootObj.uuid() == model.uuid();
                }
                final StringBuilder builder = new StringBuilder();
                builder.append("[\n");
                printJSON(model, builder, isRoot);
                model.visit(VisitRequest.ALL,new ModelVisitor() {
                    @Override
                    public VisitResult visit(KObject elem) {
                        boolean isRoot2 = false;
                        if (rootObj != null) {
                            isRoot2 = rootObj.uuid() == elem.uuid();
                        }
                        builder.append(",\n");
                        try {
                            printJSON(elem, builder, isRoot2);
                        } catch (Exception e) {
                            e.printStackTrace();
                            builder.append("{}");
                        }
                        return VisitResult.CONTINUE;
                    }
                }).then(new Callback<Throwable>() {
                    @Override
                    public void on(Throwable throwable) {
                        builder.append("\n]\n");
                        callback.on(builder.toString());
                    }
                });
            }
        });
    }

    public static void printJSON(KObject elem, StringBuilder builder, boolean isRoot) {
        if (elem != null) {
            KCacheEntry raw = elem.view().universe().model().manager().entry(elem, AccessMode.READ);
            if (raw != null) {
                builder.append(JsonRaw.encode(raw, elem.uuid(), elem.metaClass(), false, isRoot));
            }
        }
    }

}

