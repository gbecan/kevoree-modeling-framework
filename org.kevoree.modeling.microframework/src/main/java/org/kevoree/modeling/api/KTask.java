package org.kevoree.modeling.api;

/**
 * Created by duke on 20/01/15.
 */
public interface KTask<A> {

    public KTask<A> wait(KTask previous);

    public A getResult() throws Exception;

    public boolean isDone();

    public KTask<A> setJob(KJob kjob);

    public KTask<A> ready();

    public KTask<Object> next();

    public void then(Callback<A> callback);

}
