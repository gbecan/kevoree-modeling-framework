package org.kevoree.test;

import org.junit.Test;
import org.kevoree.ContainerNode;
import org.kevoree.ContainerRoot;
import org.kevoree.KevoreeFactory;
import org.kevoree.cloner.ModelCloner;
import org.kevoree.impl.DefaultKevoreeFactory;
import org.kevoree.trace.ModelTrace;

import java.util.List;

/**
 * Created by duke on 26/07/13.
 */
public class TraceDiffTest {

    @Test
    public void difftest() {

        KevoreeFactory factory = new DefaultKevoreeFactory();
        ModelComparator compare = new ModelComparator();
        ModelCloner cloner = new ModelCloner();

        ContainerRoot model = factory.createContainerRoot();
        ContainerNode node1 = factory.createContainerNode();
        node1.setName("node1");
        ContainerNode node2 = factory.createContainerNode();
        node2.setName("node2");
        model.addNodes(node1);
        model.addNodes(node2);

        ContainerRoot model2 = cloner.clone(model);

        List<ModelTrace> traces = compare.diff(model, model2);
        assert(traces.size() == 0);


        ContainerNode node3 = factory.createContainerNode();
        node3.setName("node3");
        model.addNodes(node3);
        traces = compare.diff(model, model2);
        System.out.println(traces);

    }

}