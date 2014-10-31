package org.kevoree.modeling.api;

import org.kevoree.modeling.api.trace.TraceSequence;

/**
 * Created by duke on 9/30/14.
 */

public interface ModelCompare {

    public void diff(KObject origin, KObject target, Callback<TraceSequence> callback);

    public void union(KObject origin, KObject target, Callback<TraceSequence> callback);

    public void intersection(KObject origin, KObject target, Callback<TraceSequence> callback);

}