///<reference path="../../../../junit/Test.ts"/>
///<reference path="../../api/Callback.ts"/>
///<reference path="../../api/KObject.ts"/>
///<reference path="../../api/data/MemoryKDataBase.ts"/>
///<reference path="cloud/CloudDimension.ts"/>
///<reference path="cloud/CloudUniverse.ts"/>
///<reference path="cloud/CloudView.ts"/>
///<reference path="cloud/Node.ts"/>
// TODO Resolve static imports
///<reference path="../../../../junit/Assert.ts"/>

class LookupTest {

  public lookupTest(): void {
    var dataBase: MemoryKDataBase = new MemoryKDataBase();
    var universe: CloudUniverse = new CloudUniverse(dataBase);
    universe.newDimension({on:function(dimension0: CloudDimension){
    var t0: CloudView = dimension0.time(0l);
    var node: Node = t0.createNode();
    node.setName("n0");
    t0.setRoot(node);
    assertTrue(node.isRoot());
    universe.storage().getRoot(t0, {on:function(resolvedRoot: KObject){
    assertEquals(node, resolvedRoot);
}});
    assertTrue(node.isRoot());
    dimension0.save({on:function(e: Throwable){
    var universe2: CloudUniverse = new CloudUniverse(dataBase);
    universe2.dimension(dimension0.key(), {on:function(dimension0_2: CloudDimension){
    var t0_2: CloudView = dimension0_2.time(0l);
    t0_2.lookup(node.uuid(), {on:function(resolved: KObject){
    t0_2.lookup(node.uuid(), {on:function(resolved2: KObject){
    assertEquals(resolved, resolved2);
}});
    universe2.storage().getRoot(t0_2, {on:function(resolvedRoot: KObject){
    assertEquals(resolved, resolvedRoot);
}});
    assertTrue(resolved.isRoot());
}});
}});
}});
}});
  }

}

