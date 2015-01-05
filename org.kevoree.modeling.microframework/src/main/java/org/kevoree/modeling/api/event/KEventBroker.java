package org.kevoree.modeling.api.event;

import org.kevoree.modeling.api.Callback;
import org.kevoree.modeling.api.KEvent;
import org.kevoree.modeling.api.ModelListener;

/**
 * Created by gregory.nain on 11/11/14.
 */
public interface KEventBroker {

    public void connect(Callback<Throwable> callback);

    public void close(Callback<Throwable> callback);

    void registerListener(Object origin, ModelListener listener, Object scope);

    void unregister(ModelListener listener);

    void notify(KEvent event);

    void flush(Long dimensionKey);

}
