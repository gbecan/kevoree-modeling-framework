package org.kevoree.modeling.api.abs;

import org.kevoree.modeling.api.*;
import org.kevoree.modeling.api.data.manager.DefaultKDataManager;
import org.kevoree.modeling.api.data.cdn.KContentDeliveryDriver;
import org.kevoree.modeling.api.data.manager.KDataManager;
import org.kevoree.modeling.api.meta.MetaClass;
import org.kevoree.modeling.api.meta.MetaModel;
import org.kevoree.modeling.api.meta.MetaOperation;
import org.kevoree.modeling.api.util.Checker;

public abstract class AbstractKModel<A extends KUniverse> implements KModel<A> {

    protected final KDataManager _manager;

    public abstract MetaModel metaModel();

    private long _key;

    protected AbstractKModel() {
        _manager = new DefaultKDataManager(this);
        _key = _manager.nextModelKey();
    }

    @Override
    public KDefer<Throwable> connect() {
        AbstractKDeferWrapper<Throwable> task = new AbstractKDeferWrapper<Throwable>();
        _manager.connect(task.initCallback());
        return task;
    }

    @Override
    public KDefer<Throwable> close() {
        AbstractKDeferWrapper<Throwable> task = new AbstractKDeferWrapper<Throwable>();
        _manager.close(task.initCallback());
        return task;
    }

    @Override
    public KDataManager manager() {
        return _manager;
    }

    @Override
    public A newUniverse() {
        long nextKey = _manager.nextUniverseKey();
        final A newDimension = internalCreateUniverse(nextKey);
        manager().initUniverse(newDimension, null);
        return newDimension;
    }

    protected abstract A internalCreateUniverse(long universe);

    protected abstract KObject internalCreateObject(long universe, long time, long uuid, MetaClass clazz);

    public KObject createProxy(long universe, long time, long uuid, MetaClass clazz) {
        return internalCreateObject(universe, time, uuid, clazz);
    }

    @Override
    public A universe(long key) {
        A newDimension = internalCreateUniverse(key);
        manager().initUniverse(newDimension, null);
        return newDimension;
    }

    @Override
    public KDefer<Throwable> save() {
        AbstractKDeferWrapper<Throwable> task = new AbstractKDeferWrapper<Throwable>();
        _manager.save(task.initCallback());
        return task;
    }

    @Override
    public KDefer<Throwable> discard() {
        AbstractKDeferWrapper<Throwable> task = new AbstractKDeferWrapper<Throwable>();
        _manager.discard(null, task.initCallback());
        return task;
    }

    @Override
    public KModel<A> setContentDeliveryDriver(KContentDeliveryDriver p_driver) {
        manager().setContentDeliveryDriver(p_driver);
        return this;
    }

    @Override
    public KModel<A> setScheduler(KScheduler p_scheduler) {
        manager().setScheduler(p_scheduler);
        return this;
    }

    @Override
    public void setOperation(MetaOperation metaOperation, KOperation operation) {
        manager().operationManager().registerOperation(metaOperation, operation, null);
    }

    @Override
    public void setInstanceOperation(MetaOperation metaOperation, KObject target, KOperation operation) {
        manager().operationManager().registerOperation(metaOperation, operation, target);
    }

    @Override
    public KDefer defer() {
        return new AbstractKDefer();
    }

    @Override
    public long key() {
        return this._key;
    }

    @Override
    public void clearListenerGroup(long groupID) {
        manager().cdn().unregisterGroup(groupID);
    }

    @Override
    public long nextGroup() {
        return this.manager().nextGroupKey();
    }

    @Override
    public KObject create(MetaClass clazz, long universe, long time) {
        if (!Checker.isDefined(clazz)) {
            return null;
        }
        KObject newObj = internalCreateObject(universe, time, _manager.nextObjectKey(), clazz);
        if (newObj != null) {
            _manager.initKObject(newObj);
        }
        return newObj;
    }

    @Override
    public KObject createByName(String metaClassName, long universe, long time) {
        return create(_manager.model().metaModel().metaClass(metaClassName), universe, time);
    }

}
