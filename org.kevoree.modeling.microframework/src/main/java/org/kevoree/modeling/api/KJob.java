package org.kevoree.modeling.api;

/**
 * Created by duke on 21/01/15.
 */
public interface KJob {

    public void run(KCurrentDefer currentTask);

}
