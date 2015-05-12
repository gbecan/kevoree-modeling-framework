package org.kevoree.modeling.api.extrapolation;

import org.kevoree.modeling.api.KObject;
import org.kevoree.modeling.api.abs.AbstractKObject;
import org.kevoree.modeling.api.data.cache.KCacheEntry;
import org.kevoree.modeling.api.data.manager.AccessMode;
import org.kevoree.modeling.api.meta.MetaAttribute;
import org.kevoree.modeling.api.meta.PrimitiveTypes;
import org.kevoree.modeling.api.polynomial.doublepolynomial.DoublePolynomialModel;
import org.kevoree.modeling.api.polynomial.PolynomialModel;
import org.kevoree.modeling.api.polynomial.simplepolynomial.SimplePolynomialModel;
import org.kevoree.modeling.api.polynomial.util.Prioritization;

public class PolynomialExtrapolation implements Extrapolation {

    @Override
    public Object extrapolate(KObject current, MetaAttribute attribute) {
        PolynomialModel pol = (PolynomialModel) ((AbstractKObject)current)._manager.entry(current, AccessMode.READ).get(attribute.index());
        if (pol != null) {
            Double extrapolatedValue = pol.extrapolate(current.now());
            if (attribute.attributeType() == PrimitiveTypes.DOUBLE) {
                return extrapolatedValue;
            } else if (attribute.attributeType() == PrimitiveTypes.LONG) {
                return extrapolatedValue.longValue();
            } else if (attribute.attributeType() == PrimitiveTypes.FLOAT) {
                return extrapolatedValue.floatValue();
            } else if (attribute.attributeType() == PrimitiveTypes.INT) {
                return extrapolatedValue.intValue();
            } else if (attribute.attributeType() == PrimitiveTypes.SHORT) {
                return extrapolatedValue.shortValue();
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    @Override
    public void mutate(KObject current, MetaAttribute attribute, Object payload) {
        KCacheEntry raw = ((AbstractKObject)current)._manager.entry(current, AccessMode.READ);
        Object previous = raw.get(attribute.index());
        if (previous == null) {
            PolynomialModel pol = createPolynomialModel(current.now(), attribute.precision());
            pol.insert(current.now(), castNumber(payload));
            ((AbstractKObject)current)._manager.entry(current, AccessMode.WRITE).set(attribute.index(), pol);
        } else {
            PolynomialModel previousPol = (PolynomialModel) previous;
            if (!previousPol.insert(current.now(), castNumber(payload))) {
                PolynomialModel pol = createPolynomialModel(previousPol.lastIndex(), attribute.precision());
                pol.insert(previousPol.lastIndex(), previousPol.extrapolate(previousPol.lastIndex()));
                pol.insert(current.now(), castNumber(payload));
                ((AbstractKObject)current)._manager.entry(current, AccessMode.WRITE).set(attribute.index(), pol);
            } else {
                //Value fit the previous polynomial, but if degrees has changed we have to set the object to dirty for the next save batch
                if (previousPol.isDirty()) {
                    raw.set(attribute.index(), previousPol);//this re-set operation trigger the set dirty operation
                }
            }
        }
    }


    /** @native ts
     * return +payload;
     */
    private Double castNumber(Object payload){
        if(payload instanceof Double){
           return (Double) payload;
        } else {
            return Double.parseDouble(payload.toString());
        }
    }

    @Override
    public String save(Object cache, MetaAttribute attribute) {
        try {
            return ((PolynomialModel) cache).save();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Object load(String payload, MetaAttribute attribute, long now) {
        PolynomialModel pol = createPolynomialModel(now, attribute.precision());
        pol.load(payload);
        return pol;
    }

    private static PolynomialExtrapolation INSTANCE;

    public static Extrapolation instance() {
        if (INSTANCE == null) {
            INSTANCE = new PolynomialExtrapolation();
        }
        return INSTANCE;
    }

    private PolynomialModel createPolynomialModel(long origin, double precision) {
        //return new SimplePolynomialModel(origin, precision, 20, Prioritization.LOWDEGREES);
        return new DoublePolynomialModel(origin, precision, 20, Prioritization.LOWDEGREES);
    }

}
