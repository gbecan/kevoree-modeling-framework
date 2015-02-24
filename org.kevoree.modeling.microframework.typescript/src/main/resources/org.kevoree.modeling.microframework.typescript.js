var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var org;
(function (org) {
    var kevoree;
    (function (kevoree) {
        var modeling;
        (function (modeling) {
            var api;
            (function (api) {
                var InboundReference = (function () {
                    function InboundReference(p_reference, p_source) {
                        this._reference = p_reference;
                        this._source = p_source;
                    }
                    InboundReference.prototype.reference = function () {
                        return this._reference;
                    };
                    InboundReference.prototype.source = function () {
                        return this._source;
                    };
                    return InboundReference;
                })();
                api.InboundReference = InboundReference;
                var KActionType = (function () {
                    function KActionType(code) {
                        this._code = "";
                        this._code = code;
                    }
                    KActionType.prototype.toString = function () {
                        return this._code;
                    };
                    KActionType.prototype.code = function () {
                        return this._code;
                    };
                    KActionType.parse = function (s) {
                        for (var i = 0; i < org.kevoree.modeling.api.KActionType.values().length; i++) {
                            var current = org.kevoree.modeling.api.KActionType.values()[i];
                            if (current.code().equals(s)) {
                                return current;
                            }
                        }
                        return null;
                    };
                    KActionType.prototype.equals = function (other) {
                        return this == other;
                    };
                    KActionType.values = function () {
                        return KActionType._KActionTypeVALUES;
                    };
                    KActionType.CALL = new KActionType("CALL");
                    KActionType.CALL_RESPONSE = new KActionType("CALL_RESPONSE");
                    KActionType.SET = new KActionType("SET");
                    KActionType.ADD = new KActionType("ADD");
                    KActionType.REMOVE = new KActionType("DEL");
                    KActionType.NEW = new KActionType("NEW");
                    KActionType._KActionTypeVALUES = [
                        KActionType.CALL,
                        KActionType.CALL_RESPONSE,
                        KActionType.SET,
                        KActionType.ADD,
                        KActionType.REMOVE,
                        KActionType.NEW
                    ];
                    return KActionType;
                })();
                api.KActionType = KActionType;
                var KInferState = (function () {
                    function KInferState() {
                    }
                    KInferState.prototype.save = function () {
                        throw "Abstract method";
                    };
                    KInferState.prototype.load = function (payload) {
                        throw "Abstract method";
                    };
                    KInferState.prototype.isDirty = function () {
                        throw "Abstract method";
                    };
                    KInferState.prototype.cloneState = function () {
                        throw "Abstract method";
                    };
                    return KInferState;
                })();
                api.KInferState = KInferState;
                var TraceRequest = (function () {
                    function TraceRequest() {
                    }
                    TraceRequest.prototype.equals = function (other) {
                        return this == other;
                    };
                    TraceRequest.values = function () {
                        return TraceRequest._TraceRequestVALUES;
                    };
                    TraceRequest.ATTRIBUTES_ONLY = new TraceRequest();
                    TraceRequest.REFERENCES_ONLY = new TraceRequest();
                    TraceRequest.ATTRIBUTES_REFERENCES = new TraceRequest();
                    TraceRequest._TraceRequestVALUES = [
                        TraceRequest.ATTRIBUTES_ONLY,
                        TraceRequest.REFERENCES_ONLY,
                        TraceRequest.ATTRIBUTES_REFERENCES
                    ];
                    return TraceRequest;
                })();
                api.TraceRequest = TraceRequest;
                var VisitRequest = (function () {
                    function VisitRequest() {
                    }
                    VisitRequest.prototype.equals = function (other) {
                        return this == other;
                    };
                    VisitRequest.values = function () {
                        return VisitRequest._VisitRequestVALUES;
                    };
                    VisitRequest.CHILDREN = new VisitRequest();
                    VisitRequest.CONTAINED = new VisitRequest();
                    VisitRequest.ALL = new VisitRequest();
                    VisitRequest._VisitRequestVALUES = [
                        VisitRequest.CHILDREN,
                        VisitRequest.CONTAINED,
                        VisitRequest.ALL
                    ];
                    return VisitRequest;
                })();
                api.VisitRequest = VisitRequest;
                var VisitResult = (function () {
                    function VisitResult() {
                    }
                    VisitResult.prototype.equals = function (other) {
                        return this == other;
                    };
                    VisitResult.values = function () {
                        return VisitResult._VisitResultVALUES;
                    };
                    VisitResult.CONTINUE = new VisitResult();
                    VisitResult.SKIP = new VisitResult();
                    VisitResult.STOP = new VisitResult();
                    VisitResult._VisitResultVALUES = [
                        VisitResult.CONTINUE,
                        VisitResult.SKIP,
                        VisitResult.STOP
                    ];
                    return VisitResult;
                })();
                api.VisitResult = VisitResult;
                var abs;
                (function (abs) {
                    var AbstractKDataType = (function () {
                        function AbstractKDataType(p_name, p_isEnum) {
                            this._isEnum = false;
                            this._name = p_name;
                            this._isEnum = p_isEnum;
                        }
                        AbstractKDataType.prototype.name = function () {
                            return this._name;
                        };
                        AbstractKDataType.prototype.isEnum = function () {
                            return this._isEnum;
                        };
                        AbstractKDataType.prototype.save = function (src) {
                            if (src != null && this != org.kevoree.modeling.api.meta.PrimitiveMetaTypes.TRANSIENT) {
                                if (this == org.kevoree.modeling.api.meta.PrimitiveMetaTypes.STRING) {
                                    return org.kevoree.modeling.api.json.JsonString.encode(src.toString());
                                }
                                else {
                                    return src.toString();
                                }
                            }
                            return "";
                        };
                        AbstractKDataType.prototype.load = function (payload) {
                            if (this == org.kevoree.modeling.api.meta.PrimitiveMetaTypes.TRANSIENT) {
                                return null;
                            }
                            if (this == org.kevoree.modeling.api.meta.PrimitiveMetaTypes.STRING) {
                                return org.kevoree.modeling.api.json.JsonString.unescape(payload);
                            }
                            if (this == org.kevoree.modeling.api.meta.PrimitiveMetaTypes.LONG) {
                                return java.lang.Long.parseLong(payload);
                            }
                            if (this == org.kevoree.modeling.api.meta.PrimitiveMetaTypes.INT) {
                                return java.lang.Integer.parseInt(payload);
                            }
                            if (this == org.kevoree.modeling.api.meta.PrimitiveMetaTypes.BOOL) {
                                return payload.equals("true");
                            }
                            if (this == org.kevoree.modeling.api.meta.PrimitiveMetaTypes.SHORT) {
                                return java.lang.Short.parseShort(payload);
                            }
                            if (this == org.kevoree.modeling.api.meta.PrimitiveMetaTypes.DOUBLE) {
                                return java.lang.Double.parseDouble(payload);
                            }
                            if (this == org.kevoree.modeling.api.meta.PrimitiveMetaTypes.FLOAT) {
                                return java.lang.Float.parseFloat(payload);
                            }
                            return null;
                        };
                        return AbstractKDataType;
                    })();
                    abs.AbstractKDataType = AbstractKDataType;
                    var AbstractKDefer = (function () {
                        function AbstractKDefer() {
                            this._name = null;
                            this._isDone = false;
                            this._isReady = false;
                            this._nbRecResult = 0;
                            this._nbExpectedResult = 0;
                            this._results = new java.util.HashMap();
                            this._nextTasks = new java.util.HashSet();
                            this._result = null;
                        }
                        AbstractKDefer.prototype.setDoneOrRegister = function (next) {
                            if (next != null) {
                                this._nextTasks.add(next);
                                return this._isDone;
                            }
                            else {
                                this._isDone = true;
                                var childrenTasks = this._nextTasks.toArray(new Array());
                                for (var i = 0; i < childrenTasks.length; i++) {
                                    childrenTasks[i].informParentEnd(this);
                                }
                                return this._isDone;
                            }
                        };
                        AbstractKDefer.prototype.informParentEnd = function (end) {
                            if (end == null) {
                                this._nbRecResult = this._nbRecResult + this._nbExpectedResult;
                            }
                            else {
                                if (end != this) {
                                    var castedEnd = end;
                                    var keys = castedEnd._results.keySet().toArray(new Array());
                                    for (var i = 0; i < keys.length; i++) {
                                        this._results.put(keys[i], castedEnd._results.get(keys[i]));
                                    }
                                    this._results.put(end.getName(), castedEnd._result);
                                    this._nbRecResult--;
                                }
                            }
                            if (this._nbRecResult == 0 && this._isReady) {
                                if (this._job != null) {
                                    this._job(this);
                                }
                                this.setDoneOrRegister(null);
                            }
                        };
                        AbstractKDefer.prototype.wait = function (p_previous) {
                            if (p_previous != this) {
                                if (!p_previous.setDoneOrRegister(this)) {
                                    this._nbExpectedResult++;
                                }
                                else {
                                    var castedEnd = p_previous;
                                    var keys = castedEnd._results.keySet().toArray(new Array());
                                    for (var i = 0; i < keys.length; i++) {
                                        this._results.put(keys[i], castedEnd._results.get(keys[i]));
                                    }
                                    this._results.put(p_previous.getName(), castedEnd._result);
                                }
                            }
                            return this;
                        };
                        AbstractKDefer.prototype.ready = function () {
                            if (!this._isReady) {
                                this._isReady = true;
                                this.informParentEnd(null);
                            }
                            return this;
                        };
                        AbstractKDefer.prototype.next = function () {
                            var nextTask = new org.kevoree.modeling.api.abs.AbstractKDefer();
                            nextTask.wait(this);
                            return nextTask;
                        };
                        AbstractKDefer.prototype.then = function (p_callback) {
                            var _this = this;
                            this.next().setJob(function (currentTask) {
                                try {
                                    p_callback(_this.getResult());
                                }
                                catch ($ex$) {
                                    if ($ex$ instanceof java.lang.Exception) {
                                        var e = $ex$;
                                        e.printStackTrace();
                                        p_callback(null);
                                    }
                                }
                            }).ready();
                        };
                        AbstractKDefer.prototype.setName = function (p_taskName) {
                            this._name = p_taskName;
                            return this;
                        };
                        AbstractKDefer.prototype.getName = function () {
                            if (this._name == null) {
                                return this.toString();
                            }
                            else {
                                return this._name;
                            }
                        };
                        AbstractKDefer.prototype.resultKeys = function () {
                            return this._results.keySet().toArray(new Array());
                        };
                        AbstractKDefer.prototype.resultByName = function (p_name) {
                            return this._results.get(p_name);
                        };
                        AbstractKDefer.prototype.resultByTask = function (p_task) {
                            return this._results.get(p_task.getName());
                        };
                        AbstractKDefer.prototype.addTaskResult = function (p_result) {
                            this._result = p_result;
                        };
                        AbstractKDefer.prototype.clearResults = function () {
                            this._results.clear();
                        };
                        AbstractKDefer.prototype.getResult = function () {
                            if (this._isDone) {
                                return this._result;
                            }
                            else {
                                throw new java.lang.Exception("Task is not executed yet !");
                            }
                        };
                        AbstractKDefer.prototype.isDone = function () {
                            return this._isDone;
                        };
                        AbstractKDefer.prototype.setJob = function (p_kjob) {
                            this._job = p_kjob;
                            return this;
                        };
                        return AbstractKDefer;
                    })();
                    abs.AbstractKDefer = AbstractKDefer;
                    var AbstractKDeferWrapper = (function (_super) {
                        __extends(AbstractKDeferWrapper, _super);
                        function AbstractKDeferWrapper() {
                            _super.call(this);
                            this._callback = null;
                            var selfPointer = this;
                            this._callback = function (a) {
                                selfPointer._isReady = true;
                                selfPointer.addTaskResult(a);
                                selfPointer.setDoneOrRegister(null);
                            };
                        }
                        AbstractKDeferWrapper.prototype.initCallback = function () {
                            return this._callback;
                        };
                        AbstractKDeferWrapper.prototype.wait = function (previous) {
                            throw new java.lang.RuntimeException("Wait action is forbidden on wrapped tasks, please create a sub defer");
                        };
                        AbstractKDeferWrapper.prototype.setJob = function (p_kjob) {
                            throw new java.lang.RuntimeException("setJob action is forbidden on wrapped tasks, please create a sub defer");
                        };
                        AbstractKDeferWrapper.prototype.ready = function () {
                            return this;
                        };
                        return AbstractKDeferWrapper;
                    })(org.kevoree.modeling.api.abs.AbstractKDefer);
                    abs.AbstractKDeferWrapper = AbstractKDeferWrapper;
                    var AbstractKModel = (function () {
                        function AbstractKModel() {
                            this._manager = new org.kevoree.modeling.api.data.manager.DefaultKDataManager(this);
                        }
                        AbstractKModel.prototype.metaModel = function () {
                            throw "Abstract method";
                        };
                        AbstractKModel.prototype.connect = function () {
                            var task = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            this._manager.connect(task.initCallback());
                            return task;
                        };
                        AbstractKModel.prototype.close = function () {
                            var task = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            this._manager.close(task.initCallback());
                            return task;
                        };
                        AbstractKModel.prototype.manager = function () {
                            return this._manager;
                        };
                        AbstractKModel.prototype.newUniverse = function () {
                            var nextKey = this._manager.nextUniverseKey();
                            var newDimension = this.internal_create(nextKey);
                            this.manager().initUniverse(newDimension, null);
                            return newDimension;
                        };
                        AbstractKModel.prototype.internal_create = function (key) {
                            throw "Abstract method";
                        };
                        AbstractKModel.prototype.universe = function (key) {
                            var newDimension = this.internal_create(key);
                            this.manager().initUniverse(newDimension, null);
                            return newDimension;
                        };
                        AbstractKModel.prototype.save = function () {
                            var task = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            this._manager.save(task.initCallback());
                            return task;
                        };
                        AbstractKModel.prototype.discard = function () {
                            var task = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            this._manager.discard(null, task.initCallback());
                            return task;
                        };
                        AbstractKModel.prototype.disable = function (listener) {
                            this.manager().cdn().unregister(listener);
                        };
                        AbstractKModel.prototype.listen = function (listener) {
                            this.manager().cdn().registerListener(this, listener, null);
                        };
                        AbstractKModel.prototype.setContentDeliveryDriver = function (p_driver) {
                            this.manager().setContentDeliveryDriver(p_driver);
                            return this;
                        };
                        AbstractKModel.prototype.setScheduler = function (p_scheduler) {
                            this.manager().setScheduler(p_scheduler);
                            return this;
                        };
                        AbstractKModel.prototype.setOperation = function (metaOperation, operation) {
                            this.manager().operationManager().registerOperation(metaOperation, operation, null);
                        };
                        AbstractKModel.prototype.setInstanceOperation = function (metaOperation, target, operation) {
                            this.manager().operationManager().registerOperation(metaOperation, operation, target);
                        };
                        AbstractKModel.prototype.defer = function () {
                            return new org.kevoree.modeling.api.abs.AbstractKDefer();
                        };
                        return AbstractKModel;
                    })();
                    abs.AbstractKModel = AbstractKModel;
                    var AbstractKObject = (function () {
                        function AbstractKObject(p_view, p_uuid, p_universeTree, p_metaClass) {
                            this._view = p_view;
                            this._uuid = p_uuid;
                            this._metaClass = p_metaClass;
                            this._universeTree = p_universeTree;
                        }
                        AbstractKObject.prototype.view = function () {
                            return this._view;
                        };
                        AbstractKObject.prototype.uuid = function () {
                            return this._uuid;
                        };
                        AbstractKObject.prototype.metaClass = function () {
                            return this._metaClass;
                        };
                        AbstractKObject.prototype.now = function () {
                            return this._view.now();
                        };
                        AbstractKObject.prototype.universeTree = function () {
                            return this._universeTree;
                        };
                        AbstractKObject.prototype.universe = function () {
                            return this._view.universe();
                        };
                        AbstractKObject.prototype.path = function () {
                            var _this = this;
                            var task = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            this.parent().then(function (parent) {
                                if (parent == null) {
                                    task.initCallback()("/");
                                }
                                else {
                                    parent.path().then(function (parentPath) {
                                        task.initCallback()(org.kevoree.modeling.api.util.PathHelper.path(parentPath, _this.referenceInParent(), _this));
                                    });
                                }
                            });
                            return task;
                        };
                        AbstractKObject.prototype.parentUuid = function () {
                            var raw = this._view.universe().model().manager().entry(this, org.kevoree.modeling.api.data.manager.AccessMode.READ);
                            if (raw == null) {
                                return null;
                            }
                            else {
                                return raw.get(org.kevoree.modeling.api.data.manager.Index.PARENT_INDEX);
                            }
                        };
                        AbstractKObject.prototype.timeWalker = function () {
                            return new org.kevoree.modeling.api.util.TimeWalker(this);
                        };
                        AbstractKObject.prototype.parent = function () {
                            var parentKID = this.parentUuid();
                            if (parentKID == null) {
                                var task = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                                task.initCallback()(null);
                                return task;
                            }
                            else {
                                return this._view.lookup(parentKID);
                            }
                        };
                        AbstractKObject.prototype.referenceInParent = function () {
                            var raw = this._view.universe().model().manager().entry(this, org.kevoree.modeling.api.data.manager.AccessMode.READ);
                            if (raw == null) {
                                return null;
                            }
                            else {
                                return raw.get(org.kevoree.modeling.api.data.manager.Index.REF_IN_PARENT_INDEX);
                            }
                        };
                        AbstractKObject.prototype.delete = function () {
                            var task = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            var toRemove = this;
                            var rawPayload = this._view.universe().model().manager().entry(this, org.kevoree.modeling.api.data.manager.AccessMode.DELETE);
                            if (rawPayload == null) {
                                task.initCallback()(new java.lang.Exception("Out of cache Error"));
                            }
                            else {
                                var payload = rawPayload.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX);
                                if (payload != null) {
                                    var inboundsKeys = payload;
                                    var refArr = inboundsKeys.toArray(new Array());
                                    this.view().internalLookupAll(refArr, function (resolved) {
                                        for (var i = 0; i < resolved.length; i++) {
                                            if (resolved[i] != null) {
                                                var linkedReferences = resolved[i].referencesWith(toRemove);
                                                for (var j = 0; j < linkedReferences.length; j++) {
                                                    resolved[i].internal_mutate(org.kevoree.modeling.api.KActionType.REMOVE, linkedReferences[j], toRemove, false, true);
                                                }
                                            }
                                        }
                                        task.initCallback()(null);
                                    });
                                }
                                else {
                                    task.initCallback()(new java.lang.Exception("Out of cache error"));
                                }
                            }
                            return task;
                        };
                        AbstractKObject.prototype.select = function (query) {
                            var task = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            if (!org.kevoree.modeling.api.util.Checker.isDefined(query)) {
                                task.initCallback()(new Array());
                            }
                            else {
                                var cleanedQuery = query;
                                if (cleanedQuery.startsWith("/")) {
                                    cleanedQuery = cleanedQuery.substring(1);
                                }
                                if (query.startsWith("/")) {
                                    var finalCleanedQuery = cleanedQuery;
                                    this.universe().model().manager().getRoot(this.view(), function (rootObj) {
                                        if (rootObj == null) {
                                            task.initCallback()(new Array());
                                        }
                                        else {
                                            org.kevoree.modeling.api.traversal.selector.KSelector.select(rootObj, finalCleanedQuery, task.initCallback());
                                        }
                                    });
                                }
                                else {
                                    org.kevoree.modeling.api.traversal.selector.KSelector.select(this, query, task.initCallback());
                                }
                            }
                            return task;
                        };
                        AbstractKObject.prototype.listen = function (listener) {
                            this.universe().model().manager().cdn().registerListener(this, listener, null);
                        };
                        AbstractKObject.prototype.domainKey = function () {
                            var builder = new java.lang.StringBuilder();
                            var atts = this.metaClass().metaAttributes();
                            for (var i = 0; i < atts.length; i++) {
                                var att = atts[i];
                                if (att.key()) {
                                    if (builder.length != 0) {
                                        builder.append(",");
                                    }
                                    builder.append(att.metaName());
                                    builder.append("=");
                                    var payload = this.get(att);
                                    if (payload != null) {
                                        builder.append(payload.toString());
                                    }
                                }
                            }
                            var result = builder.toString();
                            if (result.equals("")) {
                                return this.uuid() + "";
                            }
                            else {
                                return result;
                            }
                        };
                        AbstractKObject.prototype.get = function (p_attribute) {
                            var transposed = this.internal_transpose_att(p_attribute);
                            if (transposed == null) {
                                throw new java.lang.RuntimeException("Bad KMF usage, the attribute named " + p_attribute.metaName() + " is not part of " + this.metaClass().metaName());
                            }
                            else {
                                return transposed.strategy().extrapolate(this, transposed);
                            }
                        };
                        AbstractKObject.prototype.set = function (p_attribute, payload) {
                            var transposed = this.internal_transpose_att(p_attribute);
                            if (transposed == null) {
                                throw new java.lang.RuntimeException("Bad KMF usage, the attribute named " + p_attribute.metaName() + " is not part of " + this.metaClass().metaName());
                            }
                            else {
                                transposed.strategy().mutate(this, transposed, payload);
                            }
                        };
                        AbstractKObject.prototype.removeFromContainer = function (param) {
                            if (param != null && param.parentUuid() != null && param.parentUuid() != this._uuid) {
                                this.view().lookup(param.parentUuid()).then(function (parent) {
                                    parent.internal_mutate(org.kevoree.modeling.api.KActionType.REMOVE, param.referenceInParent(), param, true, false);
                                });
                            }
                        };
                        AbstractKObject.prototype.mutate = function (actionType, metaReference, param) {
                            this.internal_mutate(actionType, metaReference, param, true, false);
                        };
                        AbstractKObject.prototype.internal_mutate = function (actionType, metaReferenceP, param, setOpposite, inDelete) {
                            var _this = this;
                            var metaReference = this.internal_transpose_ref(metaReferenceP);
                            if (metaReference == null) {
                                if (metaReferenceP == null) {
                                    throw new java.lang.RuntimeException("Bad KMF usage, the reference " + " is null in metaClass named " + this.metaClass().metaName());
                                }
                                else {
                                    throw new java.lang.RuntimeException("Bad KMF usage, the reference named " + metaReferenceP.metaName() + " is not part of " + this.metaClass().metaName());
                                }
                            }
                            if (actionType.equals(org.kevoree.modeling.api.KActionType.ADD)) {
                                if (metaReference.single()) {
                                    this.internal_mutate(org.kevoree.modeling.api.KActionType.SET, metaReference, param, setOpposite, inDelete);
                                }
                                else {
                                    var raw = this.view().universe().model().manager().entry(this, org.kevoree.modeling.api.data.manager.AccessMode.WRITE);
                                    var previousList;
                                    if (raw.get(metaReference.index()) != null && raw.get(metaReference.index()) instanceof java.util.Set) {
                                        previousList = raw.get(metaReference.index());
                                    }
                                    else {
                                        if (raw.get(metaReference.index()) != null) {
                                            try {
                                                throw new java.lang.Exception("Bad cache values in KMF, " + raw.get(metaReference.index()) + " is not an instance of Set for the reference " + metaReference.metaName() + ", index:" + metaReference.index());
                                            }
                                            catch ($ex$) {
                                                if ($ex$ instanceof java.lang.Exception) {
                                                    var e = $ex$;
                                                    e.printStackTrace();
                                                }
                                            }
                                        }
                                        previousList = new java.util.HashSet();
                                        raw.set(metaReference.index(), previousList);
                                    }
                                    previousList.add(param.uuid());
                                    if (metaReference.opposite() != null && setOpposite) {
                                        param.internal_mutate(org.kevoree.modeling.api.KActionType.ADD, metaReference.opposite(), this, false, inDelete);
                                    }
                                    if (metaReference.contained()) {
                                        this.removeFromContainer(param);
                                        param.set_parent(this._uuid, metaReference);
                                    }
                                    var rawParam = this.view().universe().model().manager().entry(param, org.kevoree.modeling.api.data.manager.AccessMode.WRITE);
                                    var previousInbounds;
                                    if (rawParam.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX) != null && rawParam.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX) instanceof java.util.Set) {
                                        previousInbounds = rawParam.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX);
                                    }
                                    else {
                                        if (rawParam.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX) != null) {
                                            try {
                                                throw new java.lang.Exception("Bad cache values in KMF, " + rawParam.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX) + " is not an instance of Set for the INBOUNDS manager");
                                            }
                                            catch ($ex$) {
                                                if ($ex$ instanceof java.lang.Exception) {
                                                    var e = $ex$;
                                                    e.printStackTrace();
                                                }
                                            }
                                        }
                                        previousInbounds = new java.util.HashSet();
                                        rawParam.set(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX, previousInbounds);
                                    }
                                    previousInbounds.add(this.uuid());
                                }
                            }
                            else {
                                if (actionType.equals(org.kevoree.modeling.api.KActionType.SET)) {
                                    if (!metaReference.single()) {
                                        this.internal_mutate(org.kevoree.modeling.api.KActionType.ADD, metaReference, param, setOpposite, inDelete);
                                    }
                                    else {
                                        if (param == null) {
                                            this.internal_mutate(org.kevoree.modeling.api.KActionType.REMOVE, metaReference, null, setOpposite, inDelete);
                                        }
                                        else {
                                            var payload = this.view().universe().model().manager().entry(this, org.kevoree.modeling.api.data.manager.AccessMode.WRITE);
                                            var previous = payload.get(metaReference.index());
                                            if (previous != null) {
                                                this.internal_mutate(org.kevoree.modeling.api.KActionType.REMOVE, metaReference, null, setOpposite, inDelete);
                                            }
                                            payload.set(metaReference.index(), param.uuid());
                                            if (metaReference.contained()) {
                                                this.removeFromContainer(param);
                                                param.set_parent(this._uuid, metaReference);
                                            }
                                            var rawParam = this.view().universe().model().manager().entry(param, org.kevoree.modeling.api.data.manager.AccessMode.WRITE);
                                            var previousInbounds;
                                            if (rawParam.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX) != null && rawParam.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX) instanceof java.util.Set) {
                                                previousInbounds = rawParam.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX);
                                            }
                                            else {
                                                if (rawParam.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX) != null) {
                                                    try {
                                                        throw new java.lang.Exception("Bad cache values in KMF, " + rawParam.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX) + " is not an instance of Set for the INBOUNDS manager");
                                                    }
                                                    catch ($ex$) {
                                                        if ($ex$ instanceof java.lang.Exception) {
                                                            var e = $ex$;
                                                            e.printStackTrace();
                                                        }
                                                    }
                                                }
                                                previousInbounds = new java.util.HashSet();
                                                rawParam.set(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX, previousInbounds);
                                            }
                                            previousInbounds.add(this.uuid());
                                            var self = this;
                                            if (metaReference.opposite() != null && setOpposite) {
                                                if (previous != null) {
                                                    this.view().lookup(previous).then(function (resolved) {
                                                        resolved.internal_mutate(org.kevoree.modeling.api.KActionType.REMOVE, metaReference.opposite(), self, false, inDelete);
                                                    });
                                                }
                                                param.internal_mutate(org.kevoree.modeling.api.KActionType.ADD, metaReference.opposite(), this, false, inDelete);
                                            }
                                        }
                                    }
                                }
                                else {
                                    if (actionType.equals(org.kevoree.modeling.api.KActionType.REMOVE)) {
                                        if (metaReference.single()) {
                                            var raw = this.view().universe().model().manager().entry(this, org.kevoree.modeling.api.data.manager.AccessMode.WRITE);
                                            var previousKid = raw.get(metaReference.index());
                                            raw.set(metaReference.index(), null);
                                            if (previousKid != null) {
                                                var self = this;
                                                this._view.universe().model().manager().lookup(this._view, previousKid, function (resolvedParam) {
                                                    if (resolvedParam != null) {
                                                        if (metaReference.contained()) {
                                                            resolvedParam.set_parent(null, null);
                                                        }
                                                        if (metaReference.opposite() != null && setOpposite) {
                                                            resolvedParam.internal_mutate(org.kevoree.modeling.api.KActionType.REMOVE, metaReference.opposite(), self, false, inDelete);
                                                        }
                                                        var rawParam = _this.view().universe().model().manager().entry(resolvedParam, org.kevoree.modeling.api.data.manager.AccessMode.WRITE);
                                                        var previousInbounds = null;
                                                        if (rawParam != null && rawParam.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX) != null && rawParam.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX) instanceof java.util.Set) {
                                                            previousInbounds = rawParam.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX);
                                                        }
                                                        else {
                                                            if (rawParam != null) {
                                                                if (rawParam.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX) != null) {
                                                                    try {
                                                                        throw new java.lang.Exception("Bad cache values in KMF, " + rawParam.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX) + " is not an instance of Set for the INBOUNDS manager");
                                                                    }
                                                                    catch ($ex$) {
                                                                        if ($ex$ instanceof java.lang.Exception) {
                                                                            var e = $ex$;
                                                                            e.printStackTrace();
                                                                        }
                                                                    }
                                                                }
                                                                previousInbounds = new java.util.HashSet();
                                                                rawParam.set(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX, previousInbounds);
                                                            }
                                                        }
                                                        if (previousInbounds != null) {
                                                            previousInbounds.remove(_this._uuid);
                                                        }
                                                    }
                                                });
                                            }
                                        }
                                        else {
                                            var payload = this.view().universe().model().manager().entry(this, org.kevoree.modeling.api.data.manager.AccessMode.WRITE);
                                            var previous = payload.get(metaReference.index());
                                            if (previous != null) {
                                                var previousList = previous;
                                                previousList.remove(param.uuid());
                                                if (!inDelete && metaReference.contained()) {
                                                    param.set_parent(null, null);
                                                }
                                                if (metaReference.opposite() != null && setOpposite) {
                                                    param.internal_mutate(org.kevoree.modeling.api.KActionType.REMOVE, metaReference.opposite(), this, false, inDelete);
                                                }
                                            }
                                            if (!inDelete) {
                                                var rawParam = this.view().universe().model().manager().entry(param, org.kevoree.modeling.api.data.manager.AccessMode.WRITE);
                                                if (rawParam != null && rawParam.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX) != null && rawParam.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX) instanceof java.util.Set) {
                                                    var previousInbounds = rawParam.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX);
                                                    previousInbounds.remove(this._uuid);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        };
                        AbstractKObject.prototype.size = function (p_metaReference) {
                            var transposed = this.internal_transpose_ref(p_metaReference);
                            if (transposed == null) {
                                throw new java.lang.RuntimeException("Bad KMF usage, the attribute named " + p_metaReference.metaName() + " is not part of " + this.metaClass().metaName());
                            }
                            else {
                                var raw = this.view().universe().model().manager().entry(this, org.kevoree.modeling.api.data.manager.AccessMode.READ);
                                if (raw != null) {
                                    var ref = raw.get(transposed.index());
                                    if (ref == null) {
                                        return 0;
                                    }
                                    else {
                                        var refSet = ref;
                                        return refSet.size();
                                    }
                                }
                                else {
                                    return 0;
                                }
                            }
                        };
                        AbstractKObject.prototype.internal_ref = function (p_metaReference, callback) {
                            var transposed = this.internal_transpose_ref(p_metaReference);
                            if (transposed == null) {
                                throw new java.lang.RuntimeException("Bad KMF usage, the reference named " + p_metaReference.metaName() + " is not part of " + this.metaClass().metaName());
                            }
                            else {
                                var raw = this.view().universe().model().manager().entry(this, org.kevoree.modeling.api.data.manager.AccessMode.READ);
                                if (raw == null) {
                                    callback(new Array());
                                }
                                else {
                                    var o = raw.get(transposed.index());
                                    if (o == null) {
                                        callback(new Array());
                                    }
                                    else {
                                        if (o instanceof java.util.Set) {
                                            var objs = o;
                                            var setContent = objs.toArray(new Array());
                                            this.view().internalLookupAll(setContent, callback);
                                        }
                                        else {
                                            var content = [o];
                                            this.view().internalLookupAll(content, callback);
                                        }
                                    }
                                }
                            }
                        };
                        AbstractKObject.prototype.ref = function (p_metaReference) {
                            var task = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            this.internal_ref(p_metaReference, task.initCallback());
                            return task;
                        };
                        AbstractKObject.prototype.inferRef = function (p_metaReference) {
                            var task = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            return task;
                        };
                        AbstractKObject.prototype.visitAttributes = function (visitor) {
                            if (!org.kevoree.modeling.api.util.Checker.isDefined(visitor)) {
                                return;
                            }
                            var metaAttributes = this.metaClass().metaAttributes();
                            for (var i = 0; i < metaAttributes.length; i++) {
                                visitor(metaAttributes[i], this.get(metaAttributes[i]));
                            }
                        };
                        AbstractKObject.prototype.visit = function (p_visitor, p_request) {
                            var task = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            if (p_request.equals(org.kevoree.modeling.api.VisitRequest.CHILDREN)) {
                                this.internal_visit(p_visitor, task.initCallback(), false, false, null, null);
                            }
                            else {
                                if (p_request.equals(org.kevoree.modeling.api.VisitRequest.ALL)) {
                                    this.internal_visit(p_visitor, task.initCallback(), true, false, new java.util.HashSet(), new java.util.HashSet());
                                }
                                else {
                                    if (p_request.equals(org.kevoree.modeling.api.VisitRequest.CONTAINED)) {
                                        this.internal_visit(p_visitor, task.initCallback(), true, true, null, null);
                                    }
                                }
                            }
                            return task;
                        };
                        AbstractKObject.prototype.internal_visit = function (visitor, end, deep, containedOnly, visited, traversed) {
                            if (!org.kevoree.modeling.api.util.Checker.isDefined(visitor)) {
                                return;
                            }
                            if (traversed != null) {
                                traversed.add(this._uuid);
                            }
                            var toResolveIds = new java.util.HashSet();
                            for (var i = 0; i < this.metaClass().metaReferences().length; i++) {
                                var reference = this.metaClass().metaReferences()[i];
                                if (!(containedOnly && !reference.contained())) {
                                    var raw = this.view().universe().model().manager().entry(this, org.kevoree.modeling.api.data.manager.AccessMode.READ);
                                    var obj = null;
                                    if (raw != null) {
                                        obj = raw.get(reference.index());
                                    }
                                    if (obj != null) {
                                        if (obj instanceof java.util.Set) {
                                            var ids = obj;
                                            var idArr = ids.toArray(new Array());
                                            for (var k = 0; k < idArr.length; k++) {
                                                if (traversed == null || !traversed.contains(idArr[k])) {
                                                    toResolveIds.add(idArr[k]);
                                                }
                                            }
                                        }
                                        else {
                                            if (traversed == null || !traversed.contains(obj)) {
                                                toResolveIds.add(obj);
                                            }
                                        }
                                    }
                                }
                            }
                            if (toResolveIds.isEmpty()) {
                                if (org.kevoree.modeling.api.util.Checker.isDefined(end)) {
                                    end(null);
                                }
                            }
                            else {
                                var toResolveIdsArr = toResolveIds.toArray(new Array());
                                this.view().internalLookupAll(toResolveIdsArr, function (resolvedArr) {
                                    var nextDeep = new java.util.ArrayList();
                                    for (var i = 0; i < resolvedArr.length; i++) {
                                        var resolved = resolvedArr[i];
                                        var result = org.kevoree.modeling.api.VisitResult.CONTINUE;
                                        if (visitor != null && (visited == null || !visited.contains(resolved.uuid()))) {
                                            result = visitor(resolved);
                                        }
                                        if (visited != null) {
                                            visited.add(resolved.uuid());
                                        }
                                        if (result != null && result.equals(org.kevoree.modeling.api.VisitResult.STOP)) {
                                            if (org.kevoree.modeling.api.util.Checker.isDefined(end)) {
                                                end(null);
                                            }
                                        }
                                        else {
                                            if (deep) {
                                                if (result.equals(org.kevoree.modeling.api.VisitResult.CONTINUE)) {
                                                    if (traversed == null || !traversed.contains(resolved.uuid())) {
                                                        nextDeep.add(resolved);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    if (!nextDeep.isEmpty()) {
                                        var index = new Array();
                                        index[0] = 0;
                                        var next = new java.util.ArrayList();
                                        next.add(function (throwable) {
                                            index[0] = index[0] + 1;
                                            if (index[0] == nextDeep.size()) {
                                                if (org.kevoree.modeling.api.util.Checker.isDefined(end)) {
                                                    end(null);
                                                }
                                            }
                                            else {
                                                var abstractKObject = nextDeep.get(index[0]);
                                                if (containedOnly) {
                                                    abstractKObject.internal_visit(visitor, next.get(0), true, true, visited, traversed);
                                                }
                                                else {
                                                    abstractKObject.internal_visit(visitor, next.get(0), true, false, visited, traversed);
                                                }
                                            }
                                        });
                                        var abstractKObject = nextDeep.get(index[0]);
                                        if (containedOnly) {
                                            abstractKObject.internal_visit(visitor, next.get(0), true, true, visited, traversed);
                                        }
                                        else {
                                            abstractKObject.internal_visit(visitor, next.get(0), true, false, visited, traversed);
                                        }
                                    }
                                    else {
                                        if (org.kevoree.modeling.api.util.Checker.isDefined(end)) {
                                            end(null);
                                        }
                                    }
                                });
                            }
                        };
                        AbstractKObject.prototype.toJSON = function () {
                            var raw = this.view().universe().model().manager().entry(this, org.kevoree.modeling.api.data.manager.AccessMode.READ);
                            if (raw != null) {
                                return org.kevoree.modeling.api.data.manager.JsonRaw.encode(raw, this._uuid, this._metaClass, true, false);
                            }
                            else {
                                return "";
                            }
                        };
                        AbstractKObject.prototype.toString = function () {
                            return this.toJSON();
                        };
                        AbstractKObject.prototype.traces = function (request) {
                            if (!org.kevoree.modeling.api.util.Checker.isDefined(request)) {
                                return null;
                            }
                            var traces = new java.util.ArrayList();
                            if (org.kevoree.modeling.api.TraceRequest.ATTRIBUTES_ONLY.equals(request) || org.kevoree.modeling.api.TraceRequest.ATTRIBUTES_REFERENCES.equals(request)) {
                                for (var i = 0; i < this.metaClass().metaAttributes().length; i++) {
                                    var current = this.metaClass().metaAttributes()[i];
                                    var payload = this.get(current);
                                    if (payload != null) {
                                        traces.add(new org.kevoree.modeling.api.trace.ModelSetTrace(this._uuid, current, payload));
                                    }
                                }
                            }
                            if (org.kevoree.modeling.api.TraceRequest.REFERENCES_ONLY.equals(request) || org.kevoree.modeling.api.TraceRequest.ATTRIBUTES_REFERENCES.equals(request)) {
                                for (var i = 0; i < this.metaClass().metaReferences().length; i++) {
                                    var ref = this.metaClass().metaReferences()[i];
                                    var raw = this.view().universe().model().manager().entry(this, org.kevoree.modeling.api.data.manager.AccessMode.READ);
                                    var o = null;
                                    if (raw != null) {
                                        o = raw.get(ref.index());
                                    }
                                    if (o instanceof java.util.Set) {
                                        var contents = o;
                                        var contentsArr = contents.toArray(new Array());
                                        for (var j = 0; j < contentsArr.length; j++) {
                                            traces.add(new org.kevoree.modeling.api.trace.ModelAddTrace(this._uuid, ref, contentsArr[j]));
                                        }
                                    }
                                    else {
                                        if (o != null) {
                                            traces.add(new org.kevoree.modeling.api.trace.ModelAddTrace(this._uuid, ref, o));
                                        }
                                    }
                                }
                            }
                            return traces.toArray(new Array());
                        };
                        AbstractKObject.prototype.inbounds = function () {
                            var rawPayload = this.view().universe().model().manager().entry(this, org.kevoree.modeling.api.data.manager.AccessMode.READ);
                            if (rawPayload != null) {
                                var payload = rawPayload.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX);
                                if (payload != null) {
                                    var inboundsKeys = payload;
                                    var keysArr = inboundsKeys.toArray(new Array());
                                    return this._view.lookupAll(keysArr);
                                }
                                else {
                                    var task = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                                    task.initCallback()(new Array());
                                    return task;
                                }
                            }
                            else {
                                var task = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                                task.initCallback()(new Array());
                                return task;
                            }
                        };
                        AbstractKObject.prototype.set_parent = function (p_parentKID, p_metaReference) {
                            var raw = this._view.universe().model().manager().entry(this, org.kevoree.modeling.api.data.manager.AccessMode.WRITE);
                            if (raw != null) {
                                raw.set(org.kevoree.modeling.api.data.manager.Index.PARENT_INDEX, p_parentKID);
                                raw.set(org.kevoree.modeling.api.data.manager.Index.REF_IN_PARENT_INDEX, p_metaReference);
                            }
                        };
                        AbstractKObject.prototype.equals = function (obj) {
                            if (!(obj instanceof org.kevoree.modeling.api.abs.AbstractKObject)) {
                                return false;
                            }
                            else {
                                var casted = obj;
                                return (casted.uuid() == this._uuid) && this._view.equals(casted._view);
                            }
                        };
                        AbstractKObject.prototype.hashCode = function () {
                            var hashString = this.uuid() + "-" + this.view().now() + "-" + this.view().universe().key();
                            return hashString.hashCode();
                        };
                        AbstractKObject.prototype.diff = function (target) {
                            var task = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            org.kevoree.modeling.api.operation.DefaultModelCompare.diff(this, target, task.initCallback());
                            return task;
                        };
                        AbstractKObject.prototype.merge = function (target) {
                            var task = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            org.kevoree.modeling.api.operation.DefaultModelCompare.merge(this, target, task.initCallback());
                            return task;
                        };
                        AbstractKObject.prototype.intersection = function (target) {
                            var task = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            org.kevoree.modeling.api.operation.DefaultModelCompare.intersection(this, target, task.initCallback());
                            return task;
                        };
                        AbstractKObject.prototype.jump = function (time) {
                            var task = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            this.view().universe().time(time).lookup(this._uuid).then(function (kObject) {
                                var casted = null;
                                try {
                                    casted = kObject;
                                }
                                catch ($ex$) {
                                    if ($ex$ instanceof java.lang.Throwable) {
                                        var e = $ex$;
                                        e.printStackTrace();
                                    }
                                }
                                task.initCallback()(casted);
                            });
                            return task;
                        };
                        AbstractKObject.prototype.internal_transpose_ref = function (p) {
                            if (!org.kevoree.modeling.api.util.Checker.isDefined(p)) {
                                return null;
                            }
                            else {
                                return this.metaClass().metaReference(p.metaName());
                            }
                        };
                        AbstractKObject.prototype.internal_transpose_att = function (p) {
                            if (!org.kevoree.modeling.api.util.Checker.isDefined(p)) {
                                return null;
                            }
                            else {
                                return this.metaClass().metaAttribute(p.metaName());
                            }
                        };
                        AbstractKObject.prototype.internal_transpose_op = function (p) {
                            if (!org.kevoree.modeling.api.util.Checker.isDefined(p)) {
                                return null;
                            }
                            else {
                                return this.metaClass().metaOperation(p.metaName());
                            }
                        };
                        AbstractKObject.prototype.traverse = function (p_metaReference) {
                            return new org.kevoree.modeling.api.traversal.DefaultKTraversal(this, new org.kevoree.modeling.api.traversal.actions.KTraverseAction(p_metaReference));
                        };
                        AbstractKObject.prototype.traverseQuery = function (metaReferenceQuery) {
                            return new org.kevoree.modeling.api.traversal.DefaultKTraversal(this, new org.kevoree.modeling.api.traversal.actions.KTraverseQueryAction(metaReferenceQuery));
                        };
                        AbstractKObject.prototype.traverseInbounds = function (metaReferenceQuery) {
                            return new org.kevoree.modeling.api.traversal.DefaultKTraversal(this, new org.kevoree.modeling.api.traversal.actions.KReverseQueryAction(metaReferenceQuery));
                        };
                        AbstractKObject.prototype.traverseParent = function () {
                            return new org.kevoree.modeling.api.traversal.DefaultKTraversal(this, new org.kevoree.modeling.api.traversal.actions.KParentsAction());
                        };
                        AbstractKObject.prototype.referencesWith = function (o) {
                            if (org.kevoree.modeling.api.util.Checker.isDefined(o)) {
                                var raw = this._view.universe().model().manager().entry(this, org.kevoree.modeling.api.data.manager.AccessMode.READ);
                                if (raw != null) {
                                    var allReferences = this.metaClass().metaReferences();
                                    var selected = new java.util.ArrayList();
                                    for (var i = 0; i < allReferences.length; i++) {
                                        var rawI = raw.get(allReferences[i].index());
                                        if (rawI instanceof java.util.Set) {
                                            try {
                                                var castedSet = rawI;
                                                if (castedSet.contains(o.uuid())) {
                                                    selected.add(allReferences[i]);
                                                }
                                            }
                                            catch ($ex$) {
                                                if ($ex$ instanceof java.lang.Exception) {
                                                    var e = $ex$;
                                                    e.printStackTrace();
                                                }
                                            }
                                        }
                                        else {
                                            if (rawI != null) {
                                                try {
                                                    var casted = rawI;
                                                    if (casted == o.uuid()) {
                                                        selected.add(allReferences[i]);
                                                    }
                                                }
                                                catch ($ex$) {
                                                    if ($ex$ instanceof java.lang.Exception) {
                                                        var e = $ex$;
                                                        e.printStackTrace();
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    return selected.toArray(new Array());
                                }
                                else {
                                    return new Array();
                                }
                            }
                            else {
                                return new Array();
                            }
                        };
                        AbstractKObject.prototype.call = function (p_operation, p_params) {
                            var temp_task = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            this.view().universe().model().manager().operationManager().call(this, p_operation, p_params, temp_task.initCallback());
                            return temp_task;
                        };
                        AbstractKObject.prototype.inferObjects = function () {
                            var task = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            return task;
                        };
                        AbstractKObject.prototype.inferAttribute = function (attribute) {
                            return null;
                        };
                        AbstractKObject.prototype.inferCall = function (operation, params) {
                            var temp_task = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            return temp_task;
                        };
                        return AbstractKObject;
                    })();
                    abs.AbstractKObject = AbstractKObject;
                    var AbstractKObjectInfer = (function (_super) {
                        __extends(AbstractKObjectInfer, _super);
                        function AbstractKObjectInfer(p_view, p_uuid, p_universeTree, p_metaClass) {
                            _super.call(this, p_view, p_uuid, p_universeTree, p_metaClass);
                        }
                        AbstractKObjectInfer.prototype.readOnlyState = function () {
                            var raw = this.view().universe().model().manager().entry(this, org.kevoree.modeling.api.data.manager.AccessMode.READ);
                            if (raw != null) {
                                if (raw.get(org.kevoree.modeling.api.meta.MetaInferClass.getInstance().getCache().index()) == null) {
                                    this.internal_load(raw);
                                }
                                return raw.get(org.kevoree.modeling.api.meta.MetaInferClass.getInstance().getCache().index());
                            }
                            else {
                                return null;
                            }
                        };
                        AbstractKObjectInfer.prototype.modifyState = function () {
                            var raw = this.view().universe().model().manager().entry(this, org.kevoree.modeling.api.data.manager.AccessMode.WRITE);
                            if (raw != null) {
                                if (raw.get(org.kevoree.modeling.api.meta.MetaInferClass.getInstance().getCache().index()) == null) {
                                    this.internal_load(raw);
                                }
                                return raw.get(org.kevoree.modeling.api.meta.MetaInferClass.getInstance().getCache().index());
                            }
                            else {
                                return null;
                            }
                        };
                        AbstractKObjectInfer.prototype.internal_load = function (raw) {
                            if (raw.get(org.kevoree.modeling.api.meta.MetaInferClass.getInstance().getCache().index()) == null) {
                                var currentState = this.createEmptyState();
                                currentState.load(raw.get(org.kevoree.modeling.api.meta.MetaInferClass.getInstance().getRaw().index()).toString());
                                raw.set(org.kevoree.modeling.api.meta.MetaInferClass.getInstance().getCache().index(), currentState);
                            }
                        };
                        AbstractKObjectInfer.prototype.train = function (trainingSet, expectedResultSet, callback) {
                            throw "Abstract method";
                        };
                        AbstractKObjectInfer.prototype.infer = function (features) {
                            throw "Abstract method";
                        };
                        AbstractKObjectInfer.prototype.accuracy = function (testSet, expectedResultSet) {
                            throw "Abstract method";
                        };
                        AbstractKObjectInfer.prototype.clear = function () {
                            throw "Abstract method";
                        };
                        AbstractKObjectInfer.prototype.createEmptyState = function () {
                            throw "Abstract method";
                        };
                        return AbstractKObjectInfer;
                    })(org.kevoree.modeling.api.abs.AbstractKObject);
                    abs.AbstractKObjectInfer = AbstractKObjectInfer;
                    var AbstractKUniverse = (function () {
                        function AbstractKUniverse(p_model, p_key) {
                            this._model = p_model;
                            this._key = p_key;
                        }
                        AbstractKUniverse.prototype.key = function () {
                            return this._key;
                        };
                        AbstractKUniverse.prototype.model = function () {
                            return this._model;
                        };
                        AbstractKUniverse.prototype.delete = function () {
                            var task = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            this.model().manager().delete(this, task.initCallback());
                            return task;
                        };
                        AbstractKUniverse.prototype.time = function (timePoint) {
                            return this.internal_create(timePoint);
                        };
                        AbstractKUniverse.prototype.listen = function (listener) {
                            this.model().manager().cdn().registerListener(this, listener, null);
                        };
                        AbstractKUniverse.prototype.listenAllTimes = function (target, listener) {
                            this.model().manager().cdn().registerListener(this, listener, target);
                        };
                        AbstractKUniverse.prototype.internal_create = function (timePoint) {
                            throw "Abstract method";
                        };
                        AbstractKUniverse.prototype.equals = function (obj) {
                            if (!(obj instanceof org.kevoree.modeling.api.abs.AbstractKUniverse)) {
                                return false;
                            }
                            else {
                                var casted = obj;
                                return casted._key == this._key;
                            }
                        };
                        AbstractKUniverse.prototype.origin = function () {
                            return this._model.universe(this._model.manager().parentUniverseKey(this._key));
                        };
                        AbstractKUniverse.prototype.diverge = function () {
                            var casted = this._model;
                            var nextKey = this._model.manager().nextUniverseKey();
                            var newUniverse = casted.internal_create(nextKey);
                            this._model.manager().initUniverse(newUniverse, this);
                            return newUniverse;
                        };
                        AbstractKUniverse.prototype.descendants = function () {
                            var descendentsKey = this._model.manager().descendantsUniverseKeys(this._key);
                            var childs = new java.util.ArrayList();
                            for (var i = 0; i < descendentsKey.length; i++) {
                                childs.add(this._model.universe(descendentsKey[i]));
                            }
                            return childs;
                        };
                        return AbstractKUniverse;
                    })();
                    abs.AbstractKUniverse = AbstractKUniverse;
                    var AbstractKView = (function () {
                        function AbstractKView(p_now, p_universe) {
                            this._now = p_now;
                            this._universe = p_universe;
                        }
                        AbstractKView.prototype.now = function () {
                            return this._now;
                        };
                        AbstractKView.prototype.universe = function () {
                            return this._universe;
                        };
                        AbstractKView.prototype.createFQN = function (metaClassName) {
                            return this.create(this.universe().model().metaModel().metaClass(metaClassName));
                        };
                        AbstractKView.prototype.setRoot = function (elem) {
                            var task = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            elem.set_parent(null, null);
                            this.universe().model().manager().setRoot(elem, task.initCallback());
                            return task;
                        };
                        AbstractKView.prototype.getRoot = function () {
                            var task = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            this.universe().model().manager().getRoot(this, task.initCallback());
                            return task;
                        };
                        AbstractKView.prototype.select = function (query) {
                            var task = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            if (query == null) {
                                task.initCallback()(new Array());
                            }
                            this.universe().model().manager().getRoot(this, function (rootObj) {
                                if (rootObj == null) {
                                    task.initCallback()(new Array());
                                }
                                else {
                                    var cleanedQuery = query;
                                    if (cleanedQuery.equals("/")) {
                                        var param = new Array();
                                        param[0] = rootObj;
                                        task.initCallback()(param);
                                    }
                                    else {
                                        if (cleanedQuery.startsWith("/")) {
                                            cleanedQuery = cleanedQuery.substring(1);
                                        }
                                        org.kevoree.modeling.api.traversal.selector.KSelector.select(rootObj, cleanedQuery, task.initCallback());
                                    }
                                }
                            });
                            return task;
                        };
                        AbstractKView.prototype.lookup = function (kid) {
                            var task = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            this.universe().model().manager().lookup(this, kid, task.initCallback());
                            return task;
                        };
                        AbstractKView.prototype.lookupAll = function (keys) {
                            var task = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            this.universe().model().manager().lookupAll(this, keys, task.initCallback());
                            return task;
                        };
                        AbstractKView.prototype.internalLookupAll = function (keys, callback) {
                            this.universe().model().manager().lookupAll(this, keys, callback);
                        };
                        AbstractKView.prototype.createProxy = function (clazz, universeTree, key) {
                            return this.internalCreate(clazz, universeTree, key);
                        };
                        AbstractKView.prototype.create = function (clazz) {
                            if (!org.kevoree.modeling.api.util.Checker.isDefined(clazz)) {
                                return null;
                            }
                            var newUniverseTree = new org.kevoree.modeling.api.rbtree.LongRBTree();
                            newUniverseTree.insert(this.universe().key(), this.now());
                            var newObj = this.internalCreate(clazz, newUniverseTree, this.universe().model().manager().nextObjectKey());
                            if (newObj != null) {
                                this.universe().model().manager().initKObject(newObj, this);
                            }
                            return newObj;
                        };
                        AbstractKView.prototype.listen = function (listener) {
                            this.universe().model().manager().cdn().registerListener(this, listener, null);
                        };
                        AbstractKView.prototype.internalCreate = function (clazz, universeTree, key) {
                            throw "Abstract method";
                        };
                        AbstractKView.prototype.json = function () {
                            return new org.kevoree.modeling.api.json.JsonFormat(this);
                        };
                        AbstractKView.prototype.xmi = function () {
                            return new org.kevoree.modeling.api.xmi.XmiFormat(this);
                        };
                        AbstractKView.prototype.equals = function (obj) {
                            if (!org.kevoree.modeling.api.util.Checker.isDefined(obj)) {
                                return false;
                            }
                            if (!(obj instanceof org.kevoree.modeling.api.abs.AbstractKView)) {
                                return false;
                            }
                            else {
                                var casted = obj;
                                return (casted._now == this._now) && this._universe.equals(casted._universe);
                            }
                        };
                        return AbstractKView;
                    })();
                    abs.AbstractKView = AbstractKView;
                    var AbstractMetaAttribute = (function () {
                        function AbstractMetaAttribute(p_name, p_index, p_precision, p_key, p_metaType, p_extrapolation) {
                            this._name = p_name;
                            this._index = p_index;
                            this._precision = p_precision;
                            this._key = p_key;
                            this._metaType = p_metaType;
                            this._extrapolation = p_extrapolation;
                        }
                        AbstractMetaAttribute.prototype.metaType = function () {
                            return this._metaType;
                        };
                        AbstractMetaAttribute.prototype.index = function () {
                            return this._index;
                        };
                        AbstractMetaAttribute.prototype.metaName = function () {
                            return this._name;
                        };
                        AbstractMetaAttribute.prototype.precision = function () {
                            return this._precision;
                        };
                        AbstractMetaAttribute.prototype.key = function () {
                            return this._key;
                        };
                        AbstractMetaAttribute.prototype.strategy = function () {
                            return this._extrapolation;
                        };
                        AbstractMetaAttribute.prototype.setExtrapolation = function (extrapolation) {
                            this._extrapolation = extrapolation;
                        };
                        return AbstractMetaAttribute;
                    })();
                    abs.AbstractMetaAttribute = AbstractMetaAttribute;
                    var AbstractMetaClass = (function () {
                        function AbstractMetaClass(p_name, p_index) {
                            this._atts_indexes = new java.util.HashMap();
                            this._refs_indexes = new java.util.HashMap();
                            this._ops_indexes = new java.util.HashMap();
                            this._name = p_name;
                            this._index = p_index;
                        }
                        AbstractMetaClass.prototype.index = function () {
                            return this._index;
                        };
                        AbstractMetaClass.prototype.metaName = function () {
                            return this._name;
                        };
                        AbstractMetaClass.prototype.init = function (p_atts, p_refs, p_operations) {
                            this._atts = p_atts;
                            for (var i = 0; i < this._atts.length; i++) {
                                this._atts_indexes.put(this._atts[i].metaName(), i);
                            }
                            this._refs = p_refs;
                            for (var i = 0; i < this._refs.length; i++) {
                                this._refs_indexes.put(this._refs[i].metaName(), i);
                            }
                            this._operations = p_operations;
                            for (var i = 0; i < this._operations.length; i++) {
                                this._ops_indexes.put(this._operations[i].metaName(), i);
                            }
                        };
                        AbstractMetaClass.prototype.metaAttributes = function () {
                            return this._atts;
                        };
                        AbstractMetaClass.prototype.metaReferences = function () {
                            return this._refs;
                        };
                        AbstractMetaClass.prototype.metaOperations = function () {
                            return this._operations;
                        };
                        AbstractMetaClass.prototype.metaAttribute = function (name) {
                            var resolved = this._atts_indexes.get(name);
                            if (resolved == null) {
                                return null;
                            }
                            else {
                                return this._atts[resolved];
                            }
                        };
                        AbstractMetaClass.prototype.metaReference = function (name) {
                            var resolved = this._refs_indexes.get(name);
                            if (resolved == null) {
                                return null;
                            }
                            else {
                                return this._refs[resolved];
                            }
                        };
                        AbstractMetaClass.prototype.metaOperation = function (name) {
                            var resolved = this._ops_indexes.get(name);
                            if (resolved == null) {
                                return null;
                            }
                            else {
                                return this._operations[resolved];
                            }
                        };
                        return AbstractMetaClass;
                    })();
                    abs.AbstractMetaClass = AbstractMetaClass;
                    var AbstractMetaModel = (function () {
                        function AbstractMetaModel(p_name, p_index) {
                            this._metaClasses_indexes = new java.util.HashMap();
                            this._name = p_name;
                            this._index = p_index;
                        }
                        AbstractMetaModel.prototype.index = function () {
                            return this._index;
                        };
                        AbstractMetaModel.prototype.metaName = function () {
                            return this._name;
                        };
                        AbstractMetaModel.prototype.metaClasses = function () {
                            return this._metaClasses;
                        };
                        AbstractMetaModel.prototype.metaClass = function (name) {
                            var resolved = this._metaClasses_indexes.get(name);
                            if (resolved == null) {
                                return null;
                            }
                            else {
                                return this._metaClasses[resolved];
                            }
                        };
                        AbstractMetaModel.prototype.init = function (p_metaClasses) {
                            this._metaClasses_indexes.clear();
                            this._metaClasses = p_metaClasses;
                            for (var i = 0; i < this._metaClasses.length; i++) {
                                this._metaClasses_indexes.put(this._metaClasses[i].metaName(), i);
                            }
                        };
                        return AbstractMetaModel;
                    })();
                    abs.AbstractMetaModel = AbstractMetaModel;
                    var AbstractMetaOperation = (function () {
                        function AbstractMetaOperation(p_name, p_index, p_lazyMetaClass) {
                            this._name = p_name;
                            this._index = p_index;
                            this._lazyMetaClass = p_lazyMetaClass;
                        }
                        AbstractMetaOperation.prototype.index = function () {
                            return this._index;
                        };
                        AbstractMetaOperation.prototype.metaName = function () {
                            return this._name;
                        };
                        AbstractMetaOperation.prototype.origin = function () {
                            if (this._lazyMetaClass != null) {
                                return this._lazyMetaClass();
                            }
                            return null;
                        };
                        return AbstractMetaOperation;
                    })();
                    abs.AbstractMetaOperation = AbstractMetaOperation;
                    var AbstractMetaReference = (function () {
                        function AbstractMetaReference(p_name, p_index, p_contained, p_single, p_lazyMetaType, p_lazyMetaOpposite, p_lazyMetaOrigin) {
                            this._name = p_name;
                            this._index = p_index;
                            this._contained = p_contained;
                            this._single = p_single;
                            this._lazyMetaType = p_lazyMetaType;
                            this._lazyMetaOpposite = p_lazyMetaOpposite;
                            this._lazyMetaOrigin = p_lazyMetaOrigin;
                        }
                        AbstractMetaReference.prototype.single = function () {
                            return this._single;
                        };
                        AbstractMetaReference.prototype.metaType = function () {
                            if (this._lazyMetaType != null) {
                                return this._lazyMetaType();
                            }
                            else {
                                return null;
                            }
                        };
                        AbstractMetaReference.prototype.opposite = function () {
                            if (this._lazyMetaOpposite != null) {
                                return this._lazyMetaOpposite();
                            }
                            return null;
                        };
                        AbstractMetaReference.prototype.origin = function () {
                            if (this._lazyMetaOrigin != null) {
                                return this._lazyMetaOrigin();
                            }
                            return null;
                        };
                        AbstractMetaReference.prototype.index = function () {
                            return this._index;
                        };
                        AbstractMetaReference.prototype.metaName = function () {
                            return this._name;
                        };
                        AbstractMetaReference.prototype.contained = function () {
                            return this._contained;
                        };
                        return AbstractMetaReference;
                    })();
                    abs.AbstractMetaReference = AbstractMetaReference;
                })(abs = api.abs || (api.abs = {}));
                var data;
                (function (data) {
                    var cache;
                    (function (cache) {
                        var KCacheDirty = (function () {
                            function KCacheDirty(key, object) {
                                this.key = key;
                                this.object = object;
                            }
                            return KCacheDirty;
                        })();
                        cache.KCacheDirty = KCacheDirty;
                        var KCacheEntry = (function () {
                            function KCacheEntry() {
                                this._modifiedIndexes = null;
                                this._dirty = false;
                            }
                            KCacheEntry.prototype.isDirty = function () {
                                return this._dirty;
                            };
                            KCacheEntry.prototype.modifiedIndexes = function () {
                                if (this._modifiedIndexes == null) {
                                    return new Array();
                                }
                                else {
                                    var nbModified = 0;
                                    for (var i = 0; i < this._modifiedIndexes.length; i++) {
                                        if (this._modifiedIndexes[i]) {
                                            nbModified = nbModified + 1;
                                        }
                                    }
                                    var result = new Array();
                                    var inserted = 0;
                                    for (var i = 0; i < this._modifiedIndexes.length; i++) {
                                        if (this._modifiedIndexes[i]) {
                                            result[inserted] = i;
                                            inserted = inserted + 1;
                                        }
                                    }
                                    return result;
                                }
                            };
                            KCacheEntry.prototype.serialize = function () {
                                return org.kevoree.modeling.api.data.manager.JsonRaw.encode(this, null, this.metaClass, true, false);
                            };
                            KCacheEntry.prototype.setClean = function () {
                                this._dirty = false;
                                this._modifiedIndexes = null;
                            };
                            KCacheEntry.prototype.get = function (index) {
                                if (this.raw != null) {
                                    return this.raw[index];
                                }
                                else {
                                    return null;
                                }
                            };
                            KCacheEntry.prototype.set = function (index, content) {
                                this.raw[index] = content;
                                this._dirty = true;
                                if (this._modifiedIndexes == null) {
                                    this._modifiedIndexes = new Array();
                                }
                                this._modifiedIndexes[index] = true;
                            };
                            KCacheEntry.prototype.sizeRaw = function () {
                                return this.raw.length;
                            };
                            KCacheEntry.prototype.clone = function () {
                                var cloned = new Array();
                                for (var i = 0; i < this.raw.length; i++) {
                                    var resolved = this.raw[i];
                                    if (resolved != null) {
                                        if (resolved instanceof java.util.Set) {
                                            var clonedSet = new java.util.HashSet();
                                            clonedSet.addAll(resolved);
                                            cloned[i] = clonedSet;
                                        }
                                        else {
                                            if (resolved instanceof java.util.List) {
                                                var clonedList = new java.util.ArrayList();
                                                clonedList.addAll(resolved);
                                                cloned[i] = clonedList;
                                            }
                                            else {
                                                if (resolved instanceof org.kevoree.modeling.api.KInferState) {
                                                    cloned[i] = resolved.cloneState();
                                                }
                                                else {
                                                    cloned[i] = resolved;
                                                }
                                            }
                                        }
                                    }
                                }
                                var clonedEntry = new org.kevoree.modeling.api.data.cache.KCacheEntry();
                                clonedEntry._dirty = true;
                                clonedEntry.raw = cloned;
                                clonedEntry.metaClass = this.metaClass;
                                clonedEntry.universeTree = this.universeTree;
                                return clonedEntry;
                            };
                            return KCacheEntry;
                        })();
                        cache.KCacheEntry = KCacheEntry;
                        var KCacheLayer = (function () {
                            function KCacheLayer() {
                            }
                            KCacheLayer.prototype.resolve = function (p_key, current) {
                                if (p_key.part(current) == null) {
                                    if (current == org.kevoree.modeling.api.data.cache.KContentKey.ELEM_SIZE - 1) {
                                        return this._cachedNullObject;
                                    }
                                    else {
                                        if (this._nestedNullLayer != null) {
                                            return this._nestedNullLayer.resolve(p_key, current + 1);
                                        }
                                        else {
                                            return null;
                                        }
                                    }
                                }
                                else {
                                    if (current == org.kevoree.modeling.api.data.cache.KContentKey.ELEM_SIZE - 1) {
                                        return this._cachedObjects.get(p_key.part(current));
                                    }
                                    else {
                                        if (this._nestedLayers != null) {
                                            var nextLayer = this._nestedLayers.get(p_key.part(current));
                                            if (nextLayer != null) {
                                                return nextLayer.resolve(p_key, current + 1);
                                            }
                                            else {
                                                return null;
                                            }
                                        }
                                        else {
                                            return null;
                                        }
                                    }
                                }
                            };
                            KCacheLayer.prototype.insert = function (p_key, current, p_obj_insert) {
                                if (p_key.part(current) == null) {
                                    if (current == org.kevoree.modeling.api.data.cache.KContentKey.ELEM_SIZE - 1) {
                                        this._cachedNullObject = p_obj_insert;
                                    }
                                    else {
                                        if (this._nestedNullLayer == null) {
                                            this._nestedNullLayer = new org.kevoree.modeling.api.data.cache.KCacheLayer();
                                        }
                                        this._nestedNullLayer.insert(p_key, current + 1, p_obj_insert);
                                    }
                                }
                                else {
                                    if (current == org.kevoree.modeling.api.data.cache.KContentKey.ELEM_SIZE - 1) {
                                        if (this._cachedObjects == null) {
                                            this._cachedObjects = new java.util.HashMap();
                                        }
                                        this._cachedObjects.put(p_key.part(current), p_obj_insert);
                                    }
                                    else {
                                        if (this._nestedLayers == null) {
                                            this._nestedLayers = new java.util.HashMap();
                                        }
                                        var previousLayer = this._nestedLayers.get(p_key.part(current));
                                        if (previousLayer == null) {
                                            previousLayer = new org.kevoree.modeling.api.data.cache.KCacheLayer();
                                            this._nestedLayers.put(p_key.part(current), previousLayer);
                                        }
                                        previousLayer.insert(p_key, current + 1, p_obj_insert);
                                    }
                                }
                            };
                            KCacheLayer.prototype.dirties = function (result, prefixKeys, current) {
                                if (current == org.kevoree.modeling.api.data.cache.KContentKey.ELEM_SIZE - 1) {
                                    if (this._cachedNullObject != null && this._cachedNullObject.isDirty()) {
                                        var nullKey = new org.kevoree.modeling.api.data.cache.KContentKey(prefixKeys[0], prefixKeys[1], prefixKeys[2], null);
                                        result.add(new org.kevoree.modeling.api.data.cache.KCacheDirty(nullKey, this._cachedNullObject));
                                    }
                                    if (this._cachedObjects != null) {
                                        var objKeys = this._cachedObjects.keySet().toArray(new Array());
                                        for (var i = 0; i < objKeys.length; i++) {
                                            var loopCached = this._cachedObjects.get(objKeys[i]);
                                            if (loopCached.isDirty()) {
                                                var loopKey = new org.kevoree.modeling.api.data.cache.KContentKey(prefixKeys[0], prefixKeys[1], prefixKeys[2], objKeys[i]);
                                                result.add(new org.kevoree.modeling.api.data.cache.KCacheDirty(loopKey, loopCached));
                                            }
                                        }
                                    }
                                }
                                else {
                                    if (this._nestedNullLayer != null) {
                                        this._nestedNullLayer.dirties(result, prefixKeys, current + 1);
                                    }
                                    if (this._nestedLayers != null) {
                                        var nestedKeys = this._nestedLayers.keySet().toArray(new Array());
                                        for (var i = 0; i < nestedKeys.length; i++) {
                                            var prefixKeysCloned = new Array();
                                            for (var j = 0; j < current; j++) {
                                                prefixKeysCloned[j] = prefixKeys[j];
                                            }
                                            prefixKeysCloned[current] = nestedKeys[i];
                                            this._nestedLayers.get(nestedKeys[i]).dirties(result, prefixKeysCloned, current + 1);
                                        }
                                    }
                                }
                            };
                            return KCacheLayer;
                        })();
                        cache.KCacheLayer = KCacheLayer;
                        var KContentKey = (function () {
                            function KContentKey(p_prefixID, p_universeID, p_timeID, p_objID) {
                                this.elem = new Array();
                                this.elem[0] = p_prefixID;
                                this.elem[1] = p_universeID;
                                this.elem[2] = p_timeID;
                                this.elem[3] = p_objID;
                            }
                            KContentKey.prototype.part0 = function () {
                                return this.elem[0];
                            };
                            KContentKey.prototype.part1 = function () {
                                return this.elem[1];
                            };
                            KContentKey.prototype.part2 = function () {
                                return this.elem[2];
                            };
                            KContentKey.prototype.part3 = function () {
                                return this.elem[3];
                            };
                            KContentKey.prototype.part = function (i) {
                                if (i >= 0 && i < KContentKey.ELEM_SIZE) {
                                    return this.elem[i];
                                }
                                else {
                                    return null;
                                }
                            };
                            KContentKey.createGlobal = function (p_prefixID) {
                                return new org.kevoree.modeling.api.data.cache.KContentKey(p_prefixID, null, null, null);
                            };
                            KContentKey.createGlobalUniverseTree = function () {
                                return new org.kevoree.modeling.api.data.cache.KContentKey(KContentKey.GLOBAL_SEGMENT_UNIVERSE_TREE, null, null, null);
                            };
                            KContentKey.createUniverseTree = function (p_objectID) {
                                return new org.kevoree.modeling.api.data.cache.KContentKey(KContentKey.GLOBAL_SEGMENT_DATA, null, null, p_objectID);
                            };
                            KContentKey.createRootUniverseTree = function () {
                                return new org.kevoree.modeling.api.data.cache.KContentKey(KContentKey.GLOBAL_SEGMENT_ROOT, null, null, null);
                            };
                            KContentKey.createRootTimeTree = function (universeID) {
                                return new org.kevoree.modeling.api.data.cache.KContentKey(KContentKey.GLOBAL_SEGMENT_ROOT, universeID, null, null);
                            };
                            KContentKey.createTimeTree = function (p_universeID, p_objectID) {
                                return new org.kevoree.modeling.api.data.cache.KContentKey(KContentKey.GLOBAL_SEGMENT_DATA, p_universeID, null, p_objectID);
                            };
                            KContentKey.createObject = function (p_universeID, p_quantaID, p_objectID) {
                                return new org.kevoree.modeling.api.data.cache.KContentKey(KContentKey.GLOBAL_SEGMENT_DATA, p_universeID, p_quantaID, p_objectID);
                            };
                            KContentKey.createLastPrefix = function () {
                                return new org.kevoree.modeling.api.data.cache.KContentKey(KContentKey.GLOBAL_SEGMENT_PREFIX, null, null, null);
                            };
                            KContentKey.createLastObjectIndexFromPrefix = function (prefix) {
                                return new org.kevoree.modeling.api.data.cache.KContentKey(KContentKey.GLOBAL_SEGMENT_PREFIX, KContentKey.GLOBAL_SUB_SEGMENT_PREFIX_OBJ, null, java.lang.Long.parseLong(prefix.toString()));
                            };
                            KContentKey.createLastUniverseIndexFromPrefix = function (prefix) {
                                return new org.kevoree.modeling.api.data.cache.KContentKey(KContentKey.GLOBAL_SEGMENT_PREFIX, KContentKey.GLOBAL_SUB_SEGMENT_PREFIX_UNI, null, java.lang.Long.parseLong(prefix.toString()));
                            };
                            KContentKey.create = function (payload) {
                                if (payload == null || payload.length == 0) {
                                    return null;
                                }
                                else {
                                    var temp = new Array();
                                    var maxRead = payload.length;
                                    var indexStartElem = -1;
                                    var indexElem = 0;
                                    for (var i = 0; i < maxRead; i++) {
                                        if (payload.charAt(i) == KContentKey.KEY_SEP) {
                                            if (indexStartElem != -1) {
                                                try {
                                                    temp[indexElem] = java.lang.Long.parseLong(payload.substring(indexStartElem, i));
                                                }
                                                catch ($ex$) {
                                                    if ($ex$ instanceof java.lang.Exception) {
                                                        var e = $ex$;
                                                        e.printStackTrace();
                                                    }
                                                }
                                            }
                                            indexStartElem = -1;
                                            indexElem = indexElem + 1;
                                        }
                                        else {
                                            if (indexStartElem == -1) {
                                                indexStartElem = i;
                                            }
                                        }
                                    }
                                    if (indexStartElem != -1) {
                                        try {
                                            temp[indexElem] = java.lang.Long.parseLong(payload.substring(indexStartElem, maxRead));
                                        }
                                        catch ($ex$) {
                                            if ($ex$ instanceof java.lang.Exception) {
                                                var e = $ex$;
                                                e.printStackTrace();
                                            }
                                        }
                                    }
                                    return new org.kevoree.modeling.api.data.cache.KContentKey(temp[0], temp[1], temp[2], temp[3]);
                                }
                            };
                            KContentKey.prototype.toString = function () {
                                var buffer = new java.lang.StringBuilder();
                                for (var i = 0; i < KContentKey.ELEM_SIZE; i++) {
                                    if (i != 0) {
                                        buffer.append(KContentKey.KEY_SEP);
                                    }
                                    if (this.elem[i] != null) {
                                        buffer.append(this.elem[i]);
                                    }
                                }
                                return buffer.toString();
                            };
                            KContentKey.ELEM_SIZE = 4;
                            KContentKey.KEY_SEP = '/';
                            KContentKey.GLOBAL_SEGMENT_META = 0;
                            KContentKey.GLOBAL_SEGMENT_DATA = 1;
                            KContentKey.GLOBAL_SEGMENT_UNIVERSE_TREE = 2;
                            KContentKey.GLOBAL_SEGMENT_PREFIX = 3;
                            KContentKey.GLOBAL_SEGMENT_ROOT = 4;
                            KContentKey.GLOBAL_SUB_SEGMENT_PREFIX_OBJ = 0;
                            KContentKey.GLOBAL_SUB_SEGMENT_PREFIX_UNI = 1;
                            return KContentKey;
                        })();
                        cache.KContentKey = KContentKey;
                        var MultiLayeredMemoryCache = (function () {
                            function MultiLayeredMemoryCache() {
                                this._nestedLayers = new java.util.HashMap();
                            }
                            MultiLayeredMemoryCache.prototype.get = function (key) {
                                if (key == null) {
                                    if (MultiLayeredMemoryCache.DEBUG) {
                                        System.out.println("KMF_DEBUG_CACHE_GET:NULL->NULL)");
                                    }
                                    return null;
                                }
                                else {
                                    var nextLayer = this._nestedLayers.get(key.part(0));
                                    if (nextLayer != null) {
                                        var resolved = nextLayer.resolve(key, 1);
                                        if (MultiLayeredMemoryCache.DEBUG) {
                                            System.out.println("KMF_DEBUG_CACHE_GET:" + key + "->" + resolved + ")");
                                        }
                                        return resolved;
                                    }
                                    else {
                                        if (MultiLayeredMemoryCache.DEBUG) {
                                            System.out.println("KMF_DEBUG_CACHE_GET:" + key + "->NULL)");
                                        }
                                        return null;
                                    }
                                }
                            };
                            MultiLayeredMemoryCache.prototype.put = function (key, payload) {
                                if (key == null) {
                                    if (MultiLayeredMemoryCache.DEBUG) {
                                        System.out.println("KMF_DEBUG_CACHE_PUT:NULL->" + payload + ")");
                                    }
                                }
                                else {
                                    var nextLayer = this._nestedLayers.get(key.part(0));
                                    if (nextLayer == null) {
                                        nextLayer = new org.kevoree.modeling.api.data.cache.KCacheLayer();
                                        this._nestedLayers.put(key.part(0), nextLayer);
                                    }
                                    nextLayer.insert(key, 1, payload);
                                    if (MultiLayeredMemoryCache.DEBUG) {
                                        System.out.println("KMF_DEBUG_CACHE_PUT:" + key + "->" + payload + ")");
                                    }
                                }
                            };
                            MultiLayeredMemoryCache.prototype.dirties = function () {
                                var result = new java.util.ArrayList();
                                var L0_KEYS = this._nestedLayers.keySet().toArray(new Array());
                                for (var i = 0; i < L0_KEYS.length; i++) {
                                    var layer = this._nestedLayers.get(L0_KEYS[i]);
                                    if (layer != null) {
                                        var prefixKey = new Array();
                                        prefixKey[0] = L0_KEYS[i];
                                        layer.dirties(result, prefixKey, 1);
                                    }
                                }
                                if (MultiLayeredMemoryCache.DEBUG) {
                                    System.out.println("KMF_DEBUG_CACHE_DIRTIES:" + result.size());
                                }
                                return result.toArray(new Array());
                            };
                            MultiLayeredMemoryCache.prototype.clearDataSegment = function () {
                                this._nestedLayers.remove(org.kevoree.modeling.api.data.cache.KContentKey.GLOBAL_SEGMENT_DATA);
                            };
                            MultiLayeredMemoryCache.DEBUG = false;
                            return MultiLayeredMemoryCache;
                        })();
                        cache.MultiLayeredMemoryCache = MultiLayeredMemoryCache;
                    })(cache = data.cache || (data.cache = {}));
                    var cdn;
                    (function (cdn) {
                        var KContentPutRequest = (function () {
                            function KContentPutRequest(requestSize) {
                                this._size = 0;
                                this._content = new Array();
                            }
                            KContentPutRequest.prototype.put = function (p_key, p_payload) {
                                var newLine = new Array();
                                newLine[KContentPutRequest.KEY_INDEX] = p_key;
                                newLine[KContentPutRequest.CONTENT_INDEX] = p_payload;
                                this._content[this._size] = newLine;
                                this._size = this._size + 1;
                            };
                            KContentPutRequest.prototype.getKey = function (index) {
                                if (index < this._content.length) {
                                    return this._content[index][0];
                                }
                                else {
                                    return null;
                                }
                            };
                            KContentPutRequest.prototype.getContent = function (index) {
                                if (index < this._content.length) {
                                    return this._content[index][1];
                                }
                                else {
                                    return null;
                                }
                            };
                            KContentPutRequest.prototype.size = function () {
                                return this._size;
                            };
                            KContentPutRequest.KEY_INDEX = 0;
                            KContentPutRequest.CONTENT_INDEX = 1;
                            KContentPutRequest.SIZE_INDEX = 2;
                            return KContentPutRequest;
                        })();
                        cdn.KContentPutRequest = KContentPutRequest;
                        var MemoryKContentDeliveryDriver = (function () {
                            function MemoryKContentDeliveryDriver() {
                                this.backend = new java.util.HashMap();
                                this._cache = new org.kevoree.modeling.api.data.cache.MultiLayeredMemoryCache();
                                this.localEventListeners = new org.kevoree.modeling.api.util.LocalEventListeners();
                            }
                            MemoryKContentDeliveryDriver.prototype.atomicGetMutate = function (key, operation, callback) {
                                var result = this.backend.get(key.toString());
                                var mutated = operation(result);
                                if (MemoryKContentDeliveryDriver.DEBUG) {
                                    System.out.println("ATOMIC GET " + key + "->" + result);
                                    System.out.println("ATOMIC PUT " + key + "->" + mutated);
                                }
                                this.backend.put(key.toString(), mutated);
                                callback(result, null);
                            };
                            MemoryKContentDeliveryDriver.prototype.get = function (keys, callback) {
                                var values = new Array();
                                for (var i = 0; i < keys.length; i++) {
                                    values[i] = this.backend.get(keys[i].toString());
                                    if (MemoryKContentDeliveryDriver.DEBUG) {
                                        System.out.println("GET " + keys[i] + "->" + values[i]);
                                    }
                                }
                                if (callback != null) {
                                    callback(values, null);
                                }
                            };
                            MemoryKContentDeliveryDriver.prototype.put = function (p_request, p_callback) {
                                for (var i = 0; i < p_request.size(); i++) {
                                    this.backend.put(p_request.getKey(i).toString(), p_request.getContent(i));
                                    if (MemoryKContentDeliveryDriver.DEBUG) {
                                        System.out.println("PUT " + p_request.getKey(i).toString() + "->" + p_request.getContent(i));
                                    }
                                }
                                if (p_callback != null) {
                                    p_callback(null);
                                }
                            };
                            MemoryKContentDeliveryDriver.prototype.remove = function (keys, callback) {
                                for (var i = 0; i < keys.length; i++) {
                                    this.backend.remove(keys[i]);
                                }
                                if (callback != null) {
                                    callback(null);
                                }
                            };
                            MemoryKContentDeliveryDriver.prototype.connect = function (callback) {
                                if (callback != null) {
                                    callback(null);
                                }
                            };
                            MemoryKContentDeliveryDriver.prototype.close = function (callback) {
                                this.localEventListeners.clear();
                                this.backend.clear();
                            };
                            MemoryKContentDeliveryDriver.prototype.cache = function () {
                                return this._cache;
                            };
                            MemoryKContentDeliveryDriver.prototype.registerListener = function (p_origin, p_listener, p_scope) {
                                this.localEventListeners.registerListener(p_origin, p_listener, p_scope);
                            };
                            MemoryKContentDeliveryDriver.prototype.unregister = function (p_listener) {
                                this.localEventListeners.unregister(p_listener);
                            };
                            MemoryKContentDeliveryDriver.prototype.send = function (msgs) {
                            };
                            MemoryKContentDeliveryDriver.prototype.setManager = function (manager) {
                            };
                            MemoryKContentDeliveryDriver.DEBUG = false;
                            return MemoryKContentDeliveryDriver;
                        })();
                        cdn.MemoryKContentDeliveryDriver = MemoryKContentDeliveryDriver;
                    })(cdn = data.cdn || (data.cdn = {}));
                    var manager;
                    (function (manager) {
                        var AccessMode = (function () {
                            function AccessMode() {
                            }
                            AccessMode.prototype.equals = function (other) {
                                return this == other;
                            };
                            AccessMode.values = function () {
                                return AccessMode._AccessModeVALUES;
                            };
                            AccessMode.READ = new AccessMode();
                            AccessMode.WRITE = new AccessMode();
                            AccessMode.DELETE = new AccessMode();
                            AccessMode._AccessModeVALUES = [
                                AccessMode.READ,
                                AccessMode.WRITE,
                                AccessMode.DELETE
                            ];
                            return AccessMode;
                        })();
                        manager.AccessMode = AccessMode;
                        var DefaultKDataManager = (function () {
                            function DefaultKDataManager(model) {
                                this._objectKeyCalculator = null;
                                this._universeKeyCalculator = null;
                                this.isConnected = false;
                                this.UNIVERSE_INDEX = 0;
                                this.OBJ_INDEX = 1;
                                this.GLO_TREE_INDEX = 2;
                                this._db = new org.kevoree.modeling.api.data.cdn.MemoryKContentDeliveryDriver();
                                this._operationManager = new org.kevoree.modeling.api.util.DefaultOperationManager(this);
                                this._scheduler = new org.kevoree.modeling.api.scheduler.DirectScheduler();
                                this._model = model;
                            }
                            DefaultKDataManager.prototype.model = function () {
                                return this._model;
                            };
                            DefaultKDataManager.prototype.close = function (callback) {
                                this.isConnected = false;
                                if (this._db != null) {
                                    this._db.close(callback);
                                }
                                else {
                                    callback(null);
                                }
                            };
                            DefaultKDataManager.prototype.nextUniverseKey = function () {
                                if (this._universeKeyCalculator == null) {
                                    throw new java.lang.RuntimeException(DefaultKDataManager.UNIVERSE_NOT_CONNECTED_ERROR);
                                }
                                return this._universeKeyCalculator.nextKey();
                            };
                            DefaultKDataManager.prototype.nextObjectKey = function () {
                                if (this._objectKeyCalculator == null) {
                                    throw new java.lang.RuntimeException(DefaultKDataManager.UNIVERSE_NOT_CONNECTED_ERROR);
                                }
                                return this._objectKeyCalculator.nextKey();
                            };
                            DefaultKDataManager.prototype.initUniverse = function (p_universe, p_parent) {
                                var key = org.kevoree.modeling.api.data.cache.KContentKey.createGlobalUniverseTree();
                                var cachedTree = this._db.cache().get(key);
                                if (cachedTree != null && cachedTree.lookup(p_universe.key()) == null) {
                                    if (p_parent == null) {
                                        cachedTree.insert(p_universe.key(), p_universe.key());
                                    }
                                    else {
                                        cachedTree.insert(p_universe.key(), p_parent.key());
                                    }
                                }
                            };
                            DefaultKDataManager.prototype.parentUniverseKey = function (currentUniverseKey) {
                                var key = org.kevoree.modeling.api.data.cache.KContentKey.createGlobalUniverseTree();
                                var cachedTree = this._db.cache().get(key);
                                if (cachedTree != null) {
                                    return cachedTree.lookup(currentUniverseKey);
                                }
                                else {
                                    return null;
                                }
                            };
                            DefaultKDataManager.prototype.descendantsUniverseKeys = function (currentUniverseKey) {
                                var key = org.kevoree.modeling.api.data.cache.KContentKey.createGlobalUniverseTree();
                                var cachedTree = this._db.cache().get(key);
                                if (cachedTree != null) {
                                    var nextElems = new java.util.ArrayList();
                                    var elem = cachedTree.first();
                                    while (elem != null) {
                                        if (elem.value == currentUniverseKey && elem.key != currentUniverseKey) {
                                            nextElems.add(elem.key);
                                        }
                                        elem = elem.next();
                                    }
                                    return nextElems.toArray(new Array());
                                }
                                else {
                                    return new Array();
                                }
                            };
                            DefaultKDataManager.prototype.save = function (callback) {
                                var _this = this;
                                var dirtiesEntries = this._db.cache().dirties();
                                var request = new org.kevoree.modeling.api.data.cdn.KContentPutRequest(dirtiesEntries.length + 2);
                                var nbCacheEntry = 0;
                                for (var i = 0; i < dirtiesEntries.length; i++) {
                                    if (dirtiesEntries[i].object instanceof org.kevoree.modeling.api.data.cache.KCacheEntry) {
                                        nbCacheEntry = nbCacheEntry + 1;
                                    }
                                }
                                var notificationMessages = new Array();
                                var nbInsertedMsg = 0;
                                for (var i = 0; i < dirtiesEntries.length; i++) {
                                    var cachedObject = dirtiesEntries[i].object;
                                    if (dirtiesEntries[i].object instanceof org.kevoree.modeling.api.data.cache.KCacheEntry) {
                                        var newMessage = new org.kevoree.modeling.api.msg.KEventMessage();
                                        newMessage.meta = dirtiesEntries[i].object.modifiedIndexes();
                                        newMessage.universeID = dirtiesEntries[i].key.part1();
                                        newMessage.timeID = dirtiesEntries[i].key.part2();
                                        newMessage.objID = dirtiesEntries[i].key.part3();
                                        notificationMessages[nbInsertedMsg] = newMessage;
                                        nbInsertedMsg = nbInsertedMsg + 1;
                                    }
                                    cachedObject.setClean();
                                    request.put(dirtiesEntries[i].key, cachedObject.serialize());
                                }
                                request.put(org.kevoree.modeling.api.data.cache.KContentKey.createLastObjectIndexFromPrefix(this._objectKeyCalculator.prefix()), "" + this._objectKeyCalculator.lastComputedIndex());
                                request.put(org.kevoree.modeling.api.data.cache.KContentKey.createLastUniverseIndexFromPrefix(this._universeKeyCalculator.prefix()), "" + this._universeKeyCalculator.lastComputedIndex());
                                this._db.put(request, function (throwable) {
                                    if (throwable != null) {
                                        _this._db.send(notificationMessages);
                                    }
                                    callback(throwable);
                                });
                            };
                            DefaultKDataManager.prototype.initKObject = function (obj, originView) {
                                var cacheEntry = new org.kevoree.modeling.api.data.cache.KCacheEntry();
                                cacheEntry.raw = new Array();
                                cacheEntry._dirty = true;
                                cacheEntry.metaClass = obj.metaClass();
                                cacheEntry.universeTree = obj.universeTree();
                                var timeTree = new org.kevoree.modeling.api.rbtree.IndexRBTree();
                                timeTree.insert(obj.now());
                                this._db.cache().put(org.kevoree.modeling.api.data.cache.KContentKey.createTimeTree(obj.universe().key(), obj.uuid()), timeTree);
                                this._db.cache().put(org.kevoree.modeling.api.data.cache.KContentKey.createUniverseTree(obj.uuid()), cacheEntry.universeTree);
                                this._db.cache().put(org.kevoree.modeling.api.data.cache.KContentKey.createObject(obj.universe().key(), obj.now(), obj.uuid()), cacheEntry);
                            };
                            DefaultKDataManager.prototype.connect = function (connectCallback) {
                                var _this = this;
                                if (this.isConnected) {
                                    if (connectCallback != null) {
                                        connectCallback(null);
                                    }
                                }
                                if (this._db == null) {
                                    if (connectCallback != null) {
                                        connectCallback(new java.lang.Exception("Please attach a KDataBase AND a KBroker first !"));
                                    }
                                }
                                else {
                                    this._db.connect(function (throwable) {
                                        if (throwable == null) {
                                            _this._db.atomicGetMutate(org.kevoree.modeling.api.data.cache.KContentKey.createLastPrefix(), function (previous) {
                                                try {
                                                    var previousPrefix;
                                                    if (previous != null) {
                                                        previousPrefix = java.lang.Short.parseShort(previous);
                                                    }
                                                    else {
                                                        previousPrefix = java.lang.Short.parseShort("0");
                                                    }
                                                    if (previousPrefix == java.lang.Short.MAX_VALUE) {
                                                        return "" + java.lang.Short.MIN_VALUE;
                                                    }
                                                    else {
                                                        return "" + (previousPrefix + 1);
                                                    }
                                                }
                                                catch ($ex$) {
                                                    if ($ex$ instanceof java.lang.Exception) {
                                                        var e = $ex$;
                                                        e.printStackTrace();
                                                        return "" + java.lang.Short.MIN_VALUE;
                                                    }
                                                }
                                            }, function (payloadPrefix, error) {
                                                if (error != null) {
                                                    if (connectCallback != null) {
                                                        connectCallback(error);
                                                    }
                                                }
                                                else {
                                                    var cleanedPrefixPayload = payloadPrefix;
                                                    if (cleanedPrefixPayload == null || cleanedPrefixPayload.equals("")) {
                                                        cleanedPrefixPayload = "0";
                                                    }
                                                    var newPrefix;
                                                    try {
                                                        newPrefix = java.lang.Short.parseShort(cleanedPrefixPayload);
                                                    }
                                                    catch ($ex$) {
                                                        if ($ex$ instanceof java.lang.Exception) {
                                                            var e = $ex$;
                                                            newPrefix = java.lang.Short.parseShort("0");
                                                        }
                                                    }
                                                    var connectionElemKeys = new Array();
                                                    connectionElemKeys[_this.UNIVERSE_INDEX] = org.kevoree.modeling.api.data.cache.KContentKey.createLastUniverseIndexFromPrefix(newPrefix);
                                                    connectionElemKeys[_this.OBJ_INDEX] = org.kevoree.modeling.api.data.cache.KContentKey.createLastObjectIndexFromPrefix(newPrefix);
                                                    connectionElemKeys[_this.GLO_TREE_INDEX] = org.kevoree.modeling.api.data.cache.KContentKey.createGlobalUniverseTree();
                                                    var finalNewPrefix = newPrefix;
                                                    _this._db.get(connectionElemKeys, function (strings, errorL2) {
                                                        if (errorL2 != null) {
                                                            if (connectCallback != null) {
                                                                connectCallback(errorL2);
                                                            }
                                                        }
                                                        else {
                                                            if (strings.length == 3) {
                                                                var detected = null;
                                                                try {
                                                                    var uniIndexPayload = strings[_this.UNIVERSE_INDEX];
                                                                    if (uniIndexPayload == null || uniIndexPayload.equals("")) {
                                                                        uniIndexPayload = "0";
                                                                    }
                                                                    var objIndexPayload = strings[_this.OBJ_INDEX];
                                                                    if (objIndexPayload == null || objIndexPayload.equals("")) {
                                                                        objIndexPayload = "0";
                                                                    }
                                                                    var globalUniverseTreePayload = strings[_this.GLO_TREE_INDEX];
                                                                    var globalUniverseTree = new org.kevoree.modeling.api.rbtree.LongRBTree();
                                                                    if (globalUniverseTreePayload != null) {
                                                                        try {
                                                                            globalUniverseTree.unserialize(globalUniverseTreePayload);
                                                                        }
                                                                        catch ($ex$) {
                                                                            if ($ex$ instanceof java.lang.Exception) {
                                                                                var e = $ex$;
                                                                                e.printStackTrace();
                                                                            }
                                                                        }
                                                                    }
                                                                    _this._db.cache().put(org.kevoree.modeling.api.data.cache.KContentKey.createGlobalUniverseTree(), globalUniverseTree);
                                                                    var newUniIndex = java.lang.Long.parseLong(uniIndexPayload);
                                                                    var newObjIndex = java.lang.Long.parseLong(objIndexPayload);
                                                                    _this._universeKeyCalculator = new org.kevoree.modeling.api.data.manager.KeyCalculator(finalNewPrefix, newUniIndex);
                                                                    _this._objectKeyCalculator = new org.kevoree.modeling.api.data.manager.KeyCalculator(finalNewPrefix, newObjIndex);
                                                                    _this.isConnected = true;
                                                                }
                                                                catch ($ex$) {
                                                                    if ($ex$ instanceof java.lang.Exception) {
                                                                        var e = $ex$;
                                                                        detected = e;
                                                                    }
                                                                }
                                                                if (connectCallback != null) {
                                                                    connectCallback(detected);
                                                                }
                                                            }
                                                            else {
                                                                if (connectCallback != null) {
                                                                    connectCallback(new java.lang.Exception("Error while connecting the KDataStore..."));
                                                                }
                                                            }
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                        else {
                                            connectCallback(throwable);
                                        }
                                    });
                                }
                            };
                            DefaultKDataManager.prototype.entry = function (origin, accessMode) {
                                var dimensionTree = origin.universeTree();
                                var resolvedUniverse = this.internal_resolve_universe(dimensionTree, origin.now(), origin.view().universe().key());
                                var timeTree = this._db.cache().get(org.kevoree.modeling.api.data.cache.KContentKey.createTimeTree(resolvedUniverse, origin.uuid()));
                                if (timeTree == null) {
                                    throw new java.lang.RuntimeException(DefaultKDataManager.OUT_OF_CACHE_MESSAGE + " : TimeTree not found for " + org.kevoree.modeling.api.data.cache.KContentKey.createTimeTree(resolvedUniverse, origin.uuid()) + " from " + origin.universe().key() + "/" + resolvedUniverse);
                                }
                                var resolvedNode = timeTree.previousOrEqual(origin.now());
                                var resolvedTime;
                                if (resolvedNode != null) {
                                    resolvedTime = resolvedNode.getKey();
                                }
                                else {
                                    System.err.println(DefaultKDataManager.OUT_OF_CACHE_MESSAGE + " Time not resolved " + origin.now());
                                    return null;
                                }
                                var needTimeCopy = accessMode.equals(org.kevoree.modeling.api.data.manager.AccessMode.WRITE) && (resolvedTime != origin.now());
                                var needUniverseCopy = accessMode.equals(org.kevoree.modeling.api.data.manager.AccessMode.WRITE) && (resolvedUniverse != origin.universe().key());
                                var entry = this._db.cache().get(org.kevoree.modeling.api.data.cache.KContentKey.createObject(resolvedUniverse, resolvedTime, origin.uuid()));
                                if (entry == null) {
                                    System.err.println(DefaultKDataManager.OUT_OF_CACHE_MESSAGE);
                                    return null;
                                }
                                var payload = entry.raw;
                                if (accessMode.equals(org.kevoree.modeling.api.data.manager.AccessMode.DELETE)) {
                                    timeTree.delete(origin.now());
                                    var clonedEntry = entry.clone();
                                    entry.raw = null;
                                    return clonedEntry;
                                }
                                if (payload == null) {
                                    return null;
                                }
                                else {
                                    if (!needTimeCopy && !needUniverseCopy) {
                                        if (accessMode.equals(org.kevoree.modeling.api.data.manager.AccessMode.WRITE)) {
                                            entry._dirty = true;
                                        }
                                        return entry;
                                    }
                                    else {
                                        var clonedEntry = entry.clone();
                                        clonedEntry._dirty = true;
                                        if (!needUniverseCopy) {
                                            timeTree.insert(origin.now());
                                        }
                                        else {
                                            var newTemporalTree = new org.kevoree.modeling.api.rbtree.IndexRBTree();
                                            newTemporalTree.insert(origin.now());
                                            this._db.cache().put(org.kevoree.modeling.api.data.cache.KContentKey.createTimeTree(origin.universe().key(), origin.uuid()), newTemporalTree);
                                            dimensionTree.insert(origin.universe().key(), origin.now());
                                        }
                                        this._db.cache().put(org.kevoree.modeling.api.data.cache.KContentKey.createObject(origin.universe().key(), origin.now(), origin.uuid()), clonedEntry);
                                        return clonedEntry;
                                    }
                                }
                            };
                            DefaultKDataManager.prototype.discard = function (p_universe, callback) {
                                this._db.cache().clearDataSegment();
                                if (callback != null) {
                                    callback(null);
                                }
                            };
                            DefaultKDataManager.prototype.delete = function (p_universe, callback) {
                                throw new java.lang.RuntimeException("Not implemented yet !");
                            };
                            DefaultKDataManager.prototype.lookup = function (originView, key, callback) {
                                var keys = new Array();
                                keys[0] = key;
                                this.lookupAll(originView, keys, function (kObjects) {
                                    if (kObjects.length == 1) {
                                        if (callback != null) {
                                            callback(kObjects[0]);
                                        }
                                    }
                                    else {
                                        if (callback != null) {
                                            callback(null);
                                        }
                                    }
                                });
                            };
                            DefaultKDataManager.prototype.lookupAll = function (originView, keys, callback) {
                                this._scheduler.dispatch(new org.kevoree.modeling.api.data.manager.LookupAllRunnable(originView, keys, callback, this));
                            };
                            DefaultKDataManager.prototype.cdn = function () {
                                return this._db;
                            };
                            DefaultKDataManager.prototype.setContentDeliveryDriver = function (p_dataBase) {
                                this._db = p_dataBase;
                            };
                            DefaultKDataManager.prototype.setScheduler = function (p_scheduler) {
                                if (p_scheduler != null) {
                                    this._scheduler = p_scheduler;
                                }
                            };
                            DefaultKDataManager.prototype.operationManager = function () {
                                return this._operationManager;
                            };
                            DefaultKDataManager.prototype.internal_resolve_universe_time = function (originView, uuids, callback) {
                                var _this = this;
                                var tempResult = new Array();
                                var toLoadIndexUniverse = null;
                                var toLoadUniverseTrees = null;
                                for (var i = 0; i < uuids.length; i++) {
                                    if (tempResult[i] == null) {
                                        tempResult[i] = new org.kevoree.modeling.api.data.manager.ResolutionResult();
                                    }
                                    var universeObjectTreeKey = org.kevoree.modeling.api.data.cache.KContentKey.createUniverseTree(uuids[i]);
                                    var cachedUniverseTree = this._db.cache().get(universeObjectTreeKey);
                                    if (cachedUniverseTree != null) {
                                        tempResult[i].universeTree = cachedUniverseTree;
                                    }
                                    else {
                                        if (toLoadIndexUniverse == null) {
                                            toLoadIndexUniverse = new java.util.ArrayList();
                                        }
                                        if (toLoadUniverseTrees == null) {
                                            toLoadUniverseTrees = new java.util.ArrayList();
                                        }
                                        toLoadIndexUniverse.add(i);
                                        toLoadUniverseTrees.add(universeObjectTreeKey);
                                    }
                                }
                                if (toLoadUniverseTrees != null) {
                                    var toLoadKeys = toLoadUniverseTrees.toArray(new Array());
                                    var finalToLoadIndexUniverse = toLoadIndexUniverse;
                                    var finalToLoadUniverseTrees = toLoadUniverseTrees;
                                    this._db.get(toLoadKeys, function (resolvedContents, error) {
                                        if (error != null) {
                                            error.printStackTrace();
                                            callback(tempResult);
                                        }
                                        else {
                                            for (var i = 0; i < resolvedContents.length; i++) {
                                                var newLoadedTree = new org.kevoree.modeling.api.rbtree.LongRBTree();
                                                if (resolvedContents[i] != null) {
                                                    try {
                                                        newLoadedTree.unserialize(resolvedContents[i]);
                                                    }
                                                    catch ($ex$) {
                                                        if ($ex$ instanceof java.lang.Exception) {
                                                            var e = $ex$;
                                                            e.printStackTrace();
                                                        }
                                                    }
                                                }
                                                tempResult[finalToLoadIndexUniverse.get(i)].universeTree = newLoadedTree;
                                                _this._db.cache().put(finalToLoadUniverseTrees.get(i), newLoadedTree);
                                            }
                                            _this.internal_resolve_times(originView, uuids, tempResult, callback);
                                        }
                                    });
                                }
                                else {
                                    this.internal_resolve_times(originView, uuids, tempResult, callback);
                                }
                            };
                            DefaultKDataManager.prototype.internal_resolve_times = function (originView, uuids, tempResult, callback) {
                                var _this = this;
                                var toLoadIndexTimes = null;
                                var toLoadTimeTrees = null;
                                for (var i = 0; i < uuids.length; i++) {
                                    if (tempResult[i].universeTree != null) {
                                        var closestUniverse = this.internal_resolve_universe(tempResult[i].universeTree, originView.now(), originView.universe().key());
                                        if (closestUniverse != null) {
                                            tempResult[i].resolvedUniverse = closestUniverse;
                                            var timeObjectTreeKey = org.kevoree.modeling.api.data.cache.KContentKey.createTimeTree(closestUniverse, uuids[i]);
                                            var cachedIndexTree = this._db.cache().get(timeObjectTreeKey);
                                            if (cachedIndexTree != null) {
                                                tempResult[i].timeTree = cachedIndexTree;
                                                var resolvedNode = cachedIndexTree.previousOrEqual(originView.now());
                                                if (resolvedNode != null) {
                                                    tempResult[i].resolvedQuanta = resolvedNode.getKey();
                                                }
                                            }
                                            else {
                                                if (toLoadIndexTimes == null) {
                                                    toLoadIndexTimes = new java.util.ArrayList();
                                                }
                                                if (toLoadTimeTrees == null) {
                                                    toLoadTimeTrees = new java.util.ArrayList();
                                                }
                                                toLoadIndexTimes.add(i);
                                                toLoadTimeTrees.add(timeObjectTreeKey);
                                            }
                                        }
                                        else {
                                            System.err.println("KMF ERROR on object:" + uuids[i]);
                                        }
                                    }
                                }
                                if (toLoadTimeTrees != null) {
                                    var toLoadKeys = toLoadTimeTrees.toArray(new Array());
                                    var finalToLoadIndexTimes = toLoadIndexTimes;
                                    var finalToLoadTimeTrees = toLoadTimeTrees;
                                    this._db.get(toLoadKeys, function (resolvedContents, error) {
                                        if (error != null) {
                                            error.printStackTrace();
                                            callback(tempResult);
                                        }
                                        else {
                                            for (var i = 0; i < resolvedContents.length; i++) {
                                                var newLoadedTree = new org.kevoree.modeling.api.rbtree.IndexRBTree();
                                                if (resolvedContents[i] != null) {
                                                    try {
                                                        newLoadedTree.unserialize(resolvedContents[i]);
                                                    }
                                                    catch ($ex$) {
                                                        if ($ex$ instanceof java.lang.Exception) {
                                                            var e = $ex$;
                                                            e.printStackTrace();
                                                        }
                                                    }
                                                }
                                                var initialIndex = finalToLoadIndexTimes.get(i);
                                                tempResult[initialIndex].timeTree = newLoadedTree;
                                                var resolvedNode = newLoadedTree.previousOrEqual(originView.now());
                                                if (resolvedNode != null) {
                                                    tempResult[initialIndex].resolvedQuanta = resolvedNode.getKey();
                                                }
                                                _this._db.cache().put(finalToLoadTimeTrees.get(i), newLoadedTree);
                                            }
                                            callback(tempResult);
                                        }
                                    });
                                }
                                else {
                                    callback(tempResult);
                                }
                            };
                            DefaultKDataManager.prototype.internal_resolve_universe = function (universeTree, timeToResolve, currentUniverse) {
                                return currentUniverse;
                            };
                            DefaultKDataManager.prototype.internal_root_load = function (contentKey, callback) {
                                var _this = this;
                                var rootUniverseTree = this._db.cache().get(contentKey);
                                if (rootUniverseTree == null) {
                                    var requestKeys = new Array();
                                    requestKeys[0] = contentKey;
                                    this._db.get(requestKeys, function (strings, error) {
                                        if (error != null) {
                                            error.printStackTrace();
                                            callback(null);
                                        }
                                        else {
                                            var newRootUniverseTree = new org.kevoree.modeling.api.rbtree.LongRBTree();
                                            try {
                                                newRootUniverseTree.unserialize(strings[0]);
                                            }
                                            catch ($ex$) {
                                                if ($ex$ instanceof java.lang.Exception) {
                                                    var e = $ex$;
                                                    e.printStackTrace();
                                                }
                                            }
                                            _this._db.cache().put(contentKey, newRootUniverseTree);
                                            callback(newRootUniverseTree);
                                        }
                                    });
                                }
                                else {
                                    callback(rootUniverseTree);
                                }
                            };
                            DefaultKDataManager.prototype.getRoot = function (originView, callback) {
                                var _this = this;
                                var universeTreeRootKey = org.kevoree.modeling.api.data.cache.KContentKey.createRootUniverseTree();
                                this.internal_root_load(universeTreeRootKey, function (longRBTree) {
                                    if (longRBTree == null) {
                                        callback(null);
                                    }
                                    else {
                                        var closestUniverse = _this.internal_resolve_universe(longRBTree, originView.now(), originView.universe().key());
                                        if (closestUniverse == null) {
                                            callback(null);
                                        }
                                        else {
                                            var universeTreeRootKey = org.kevoree.modeling.api.data.cache.KContentKey.createRootTimeTree(closestUniverse);
                                            _this.internal_root_load(universeTreeRootKey, function (longRBTree) {
                                                if (longRBTree == null) {
                                                    callback(null);
                                                }
                                                else {
                                                    var resolvedNode = longRBTree.previousOrEqual(originView.now());
                                                    if (resolvedNode == null) {
                                                        callback(null);
                                                    }
                                                    else {
                                                        _this.lookup(originView, resolvedNode.value, callback);
                                                    }
                                                }
                                            });
                                        }
                                    }
                                });
                            };
                            DefaultKDataManager.prototype.setRoot = function (newRoot, callback) {
                                var _this = this;
                                var universeTreeRootKey = org.kevoree.modeling.api.data.cache.KContentKey.createRootUniverseTree();
                                this.internal_root_load(universeTreeRootKey, function (longRBTree) {
                                    if (longRBTree == null) {
                                        callback(new java.lang.Exception("KMF ERROR, ROOT TREE CANNOT BE CREATED"));
                                    }
                                    else {
                                        var closestUniverse = _this.internal_resolve_universe(longRBTree, newRoot.now(), newRoot.universe().key());
                                        if (closestUniverse != newRoot.universe().key()) {
                                            longRBTree.insert(newRoot.universe().key(), newRoot.now());
                                            var newTimeTree = new org.kevoree.modeling.api.rbtree.LongRBTree();
                                            newTimeTree.insert(newRoot.now(), newRoot.uuid());
                                            var universeTreeRootKey = org.kevoree.modeling.api.data.cache.KContentKey.createRootTimeTree(newRoot.universe().key());
                                            _this._db.cache().put(universeTreeRootKey, newTimeTree);
                                            if (callback != null) {
                                                callback(null);
                                            }
                                        }
                                        else {
                                            var universeTreeRootKey = org.kevoree.modeling.api.data.cache.KContentKey.createRootTimeTree(closestUniverse);
                                            _this.internal_root_load(universeTreeRootKey, function (longRBTree) {
                                                if (longRBTree == null) {
                                                    if (callback != null) {
                                                        callback(new java.lang.Exception("KMF ERROR, ROOT TREE CANNOT BE CREATED"));
                                                    }
                                                }
                                                else {
                                                    longRBTree.insert(newRoot.now(), newRoot.uuid());
                                                    if (callback != null) {
                                                        callback(null);
                                                    }
                                                }
                                            });
                                        }
                                    }
                                });
                            };
                            DefaultKDataManager.prototype.timeTrees = function (origin, start, end, callback) {
                            };
                            DefaultKDataManager.OUT_OF_CACHE_MESSAGE = "KMF Error: your object is out of cache, you probably kept an old reference. Please reload it with a lookup";
                            DefaultKDataManager.UNIVERSE_NOT_CONNECTED_ERROR = "Please connect your model prior to create a universe or an object";
                            return DefaultKDataManager;
                        })();
                        manager.DefaultKDataManager = DefaultKDataManager;
                        var Index = (function () {
                            function Index() {
                            }
                            Index.PARENT_INDEX = 0;
                            Index.INBOUNDS_INDEX = 1;
                            Index.REF_IN_PARENT_INDEX = 2;
                            Index.INFER_CHILDREN = 3;
                            Index.RESERVED_INDEXES = 4;
                            return Index;
                        })();
                        manager.Index = Index;
                        var JsonRaw = (function () {
                            function JsonRaw() {
                            }
                            JsonRaw.decode = function (payload, currentView, now) {
                                if (payload == null) {
                                    return null;
                                }
                                var lexer = new org.kevoree.modeling.api.json.Lexer(payload);
                                var currentAttributeName = null;
                                var arrayPayload = null;
                                var content = new java.util.HashMap();
                                var currentToken = lexer.nextToken();
                                while (currentToken.tokenType() != org.kevoree.modeling.api.json.Type.EOF) {
                                    if (currentToken.tokenType().equals(org.kevoree.modeling.api.json.Type.LEFT_BRACKET)) {
                                        arrayPayload = new java.util.HashSet();
                                    }
                                    else {
                                        if (currentToken.tokenType().equals(org.kevoree.modeling.api.json.Type.RIGHT_BRACKET)) {
                                            content.put(currentAttributeName, arrayPayload);
                                            arrayPayload = null;
                                            currentAttributeName = null;
                                        }
                                        else {
                                            if (currentToken.tokenType().equals(org.kevoree.modeling.api.json.Type.LEFT_BRACE)) {
                                            }
                                            else {
                                                if (currentToken.tokenType().equals(org.kevoree.modeling.api.json.Type.RIGHT_BRACE)) {
                                                }
                                                else {
                                                    if (currentToken.tokenType().equals(org.kevoree.modeling.api.json.Type.VALUE)) {
                                                        if (currentAttributeName == null) {
                                                            currentAttributeName = currentToken.value().toString();
                                                        }
                                                        else {
                                                            if (arrayPayload == null) {
                                                                content.put(currentAttributeName, currentToken.value().toString());
                                                                currentAttributeName = null;
                                                            }
                                                            else {
                                                                arrayPayload.add(currentToken.value().toString());
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    currentToken = lexer.nextToken();
                                }
                                if (content.get(org.kevoree.modeling.api.json.JsonModelSerializer.KEY_META) == null) {
                                    return null;
                                }
                                else {
                                    var entry = new org.kevoree.modeling.api.data.cache.KCacheEntry();
                                    var metaModel = currentView.universe().model().metaModel();
                                    entry.metaClass = metaModel.metaClass(content.get(org.kevoree.modeling.api.json.JsonModelSerializer.KEY_META).toString());
                                    entry.raw = new Array();
                                    entry._dirty = false;
                                    var metaKeys = content.keySet().toArray(new Array());
                                    for (var i = 0; i < metaKeys.length; i++) {
                                        if (metaKeys[i].equals(org.kevoree.modeling.api.json.JsonModelSerializer.INBOUNDS_META)) {
                                            var inbounds = new java.util.HashSet();
                                            entry.raw[org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX] = inbounds;
                                            var raw_payload = content.get(metaKeys[i]);
                                            try {
                                                var raw_keys = raw_payload;
                                                var raw_keys_p = raw_keys.toArray(new Array());
                                                for (var j = 0; j < raw_keys_p.length; j++) {
                                                    try {
                                                        var parsed = java.lang.Long.parseLong(raw_keys_p[j]);
                                                        inbounds.add(parsed);
                                                    }
                                                    catch ($ex$) {
                                                        if ($ex$ instanceof java.lang.Exception) {
                                                            var e = $ex$;
                                                            e.printStackTrace();
                                                        }
                                                    }
                                                }
                                            }
                                            catch ($ex$) {
                                                if ($ex$ instanceof java.lang.Exception) {
                                                    var e = $ex$;
                                                    e.printStackTrace();
                                                }
                                            }
                                        }
                                        else {
                                            if (metaKeys[i].equals(org.kevoree.modeling.api.json.JsonModelSerializer.PARENT_META)) {
                                                try {
                                                    entry.raw[org.kevoree.modeling.api.data.manager.Index.PARENT_INDEX] = java.lang.Long.parseLong(content.get(metaKeys[i]).toString());
                                                }
                                                catch ($ex$) {
                                                    if ($ex$ instanceof java.lang.Exception) {
                                                        var e = $ex$;
                                                        e.printStackTrace();
                                                    }
                                                }
                                            }
                                            else {
                                                if (metaKeys[i].equals(org.kevoree.modeling.api.json.JsonModelSerializer.PARENT_REF_META)) {
                                                    try {
                                                        var raw_payload_ref = content.get(metaKeys[i]).toString();
                                                        var elemsRefs = raw_payload_ref.split(JsonRaw.SEP);
                                                        if (elemsRefs.length == 2) {
                                                            var foundMeta = metaModel.metaClass(elemsRefs[0].trim());
                                                            if (foundMeta != null) {
                                                                var metaReference = foundMeta.metaReference(elemsRefs[1].trim());
                                                                if (metaReference != null) {
                                                                    entry.raw[org.kevoree.modeling.api.data.manager.Index.REF_IN_PARENT_INDEX] = metaReference;
                                                                }
                                                            }
                                                        }
                                                    }
                                                    catch ($ex$) {
                                                        if ($ex$ instanceof java.lang.Exception) {
                                                            var e = $ex$;
                                                            e.printStackTrace();
                                                        }
                                                    }
                                                }
                                                else {
                                                    if (metaKeys[i].equals(org.kevoree.modeling.api.json.JsonModelSerializer.KEY_ROOT)) {
                                                        try {
                                                        }
                                                        catch ($ex$) {
                                                            if ($ex$ instanceof java.lang.Exception) {
                                                                var e = $ex$;
                                                                e.printStackTrace();
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (metaKeys[i].equals(org.kevoree.modeling.api.json.JsonModelSerializer.KEY_META)) {
                                                        }
                                                        else {
                                                            var metaAttribute = entry.metaClass.metaAttribute(metaKeys[i]);
                                                            var metaReference = entry.metaClass.metaReference(metaKeys[i]);
                                                            var insideContent = content.get(metaKeys[i]);
                                                            if (insideContent != null) {
                                                                if (metaAttribute != null) {
                                                                    entry.raw[metaAttribute.index()] = metaAttribute.strategy().load(insideContent.toString(), metaAttribute, now);
                                                                }
                                                                else {
                                                                    if (metaReference != null) {
                                                                        if (metaReference.single()) {
                                                                            try {
                                                                                entry.raw[metaReference.index()] = java.lang.Long.parseLong(insideContent.toString());
                                                                            }
                                                                            catch ($ex$) {
                                                                                if ($ex$ instanceof java.lang.Exception) {
                                                                                    var e = $ex$;
                                                                                    e.printStackTrace();
                                                                                }
                                                                            }
                                                                        }
                                                                        else {
                                                                            try {
                                                                                var convertedRaw = new java.util.HashSet();
                                                                                var plainRawSet = insideContent;
                                                                                var plainRawList = plainRawSet.toArray(new Array());
                                                                                for (var l = 0; l < plainRawList.length; l++) {
                                                                                    var plainRaw = plainRawList[l];
                                                                                    try {
                                                                                        var converted = java.lang.Long.parseLong(plainRaw);
                                                                                        convertedRaw.add(converted);
                                                                                    }
                                                                                    catch ($ex$) {
                                                                                        if ($ex$ instanceof java.lang.Exception) {
                                                                                            var e = $ex$;
                                                                                            e.printStackTrace();
                                                                                        }
                                                                                    }
                                                                                }
                                                                                entry.raw[metaReference.index()] = convertedRaw;
                                                                            }
                                                                            catch ($ex$) {
                                                                                if ($ex$ instanceof java.lang.Exception) {
                                                                                    var e = $ex$;
                                                                                    e.printStackTrace();
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    return entry;
                                }
                            };
                            JsonRaw.encode = function (raw, uuid, p_metaClass, endline, isRoot) {
                                var metaReferences = p_metaClass.metaReferences();
                                var metaAttributes = p_metaClass.metaAttributes();
                                var builder = new java.lang.StringBuilder();
                                builder.append("\t{\n");
                                builder.append("\t\t\"" + org.kevoree.modeling.api.json.JsonModelSerializer.KEY_META + "\": \"");
                                builder.append(p_metaClass.metaName());
                                if (uuid != null) {
                                    builder.append("\",\n");
                                    builder.append("\t\t\"" + org.kevoree.modeling.api.json.JsonModelSerializer.KEY_UUID + "\": \"");
                                    builder.append(uuid);
                                }
                                if (isRoot) {
                                    builder.append("\",\n");
                                    builder.append("\t\t\"" + org.kevoree.modeling.api.json.JsonModelSerializer.KEY_ROOT + "\": \"");
                                    builder.append("true");
                                }
                                if (raw.get(org.kevoree.modeling.api.data.manager.Index.PARENT_INDEX) != null) {
                                    builder.append("\",\n");
                                    builder.append("\t\t\"" + org.kevoree.modeling.api.json.JsonModelSerializer.PARENT_META + "\": \"");
                                    builder.append(raw.get(org.kevoree.modeling.api.data.manager.Index.PARENT_INDEX).toString());
                                }
                                if (raw.get(org.kevoree.modeling.api.data.manager.Index.REF_IN_PARENT_INDEX) != null) {
                                    builder.append("\",\n");
                                    builder.append("\t\t\"" + org.kevoree.modeling.api.json.JsonModelSerializer.PARENT_REF_META + "\": \"");
                                    try {
                                        builder.append(raw.get(org.kevoree.modeling.api.data.manager.Index.REF_IN_PARENT_INDEX).origin().metaName());
                                        builder.append(JsonRaw.SEP);
                                        builder.append(raw.get(org.kevoree.modeling.api.data.manager.Index.REF_IN_PARENT_INDEX).metaName());
                                    }
                                    catch ($ex$) {
                                        if ($ex$ instanceof java.lang.Exception) {
                                            var e = $ex$;
                                            e.printStackTrace();
                                        }
                                    }
                                }
                                if (raw.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX) != null) {
                                    builder.append("\",\n");
                                    builder.append("\t\t\"" + org.kevoree.modeling.api.json.JsonModelSerializer.INBOUNDS_META + "\": [");
                                    try {
                                        var elemsInRaw = raw.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX);
                                        var elemsArr = elemsInRaw.toArray(new Array());
                                        var isFirst = true;
                                        for (var j = 0; j < elemsArr.length; j++) {
                                            if (!isFirst) {
                                                builder.append(",");
                                            }
                                            builder.append("\"");
                                            builder.append(elemsArr[j]);
                                            builder.append("\"");
                                            isFirst = false;
                                        }
                                    }
                                    catch ($ex$) {
                                        if ($ex$ instanceof java.lang.Exception) {
                                            var e = $ex$;
                                            e.printStackTrace();
                                        }
                                    }
                                    builder.append("]");
                                    builder.append(",\n");
                                }
                                else {
                                    builder.append("\",\n");
                                }
                                var nbElemToPrint = 0;
                                for (var i = org.kevoree.modeling.api.data.manager.Index.RESERVED_INDEXES; i < raw.sizeRaw(); i++) {
                                    if (raw.get(i) != null) {
                                        nbElemToPrint++;
                                    }
                                }
                                var nbElemPrinted = 0;
                                for (var i = 0; i < metaAttributes.length; i++) {
                                    var payload_res = raw.get(metaAttributes[i].index());
                                    if (payload_res != null) {
                                        if (metaAttributes[i].metaType() != org.kevoree.modeling.api.meta.PrimitiveMetaTypes.TRANSIENT) {
                                            var attrsPayload = metaAttributes[i].strategy().save(payload_res, metaAttributes[i]);
                                            if (attrsPayload != null) {
                                                builder.append("\t\t");
                                                builder.append("\"");
                                                builder.append(metaAttributes[i].metaName());
                                                builder.append("\": \"");
                                                builder.append(attrsPayload);
                                                builder.append("\"");
                                                nbElemPrinted++;
                                                if (nbElemPrinted < nbElemToPrint) {
                                                    builder.append(",");
                                                }
                                                builder.append("\n");
                                            }
                                        }
                                    }
                                }
                                for (var i = 0; i < metaReferences.length; i++) {
                                    var refPayload = raw.get(metaReferences[i].index());
                                    if (refPayload != null) {
                                        builder.append("\t\t");
                                        builder.append("\"");
                                        builder.append(metaReferences[i].metaName());
                                        builder.append("\":");
                                        if (metaReferences[i].single()) {
                                            builder.append("\"");
                                            builder.append(refPayload);
                                            builder.append("\"");
                                        }
                                        else {
                                            var elems = refPayload;
                                            var elemsArr = elems.toArray(new Array());
                                            builder.append(" [");
                                            for (var j = 0; j < elemsArr.length; j++) {
                                                builder.append("\"");
                                                builder.append(elemsArr[j]);
                                                builder.append("\"");
                                                if (j != elemsArr.length - 1) {
                                                    builder.append(",");
                                                }
                                            }
                                            builder.append("]");
                                        }
                                        nbElemPrinted++;
                                        if (nbElemPrinted < nbElemToPrint) {
                                            builder.append(",");
                                        }
                                        builder.append("\n");
                                    }
                                }
                                if (endline) {
                                    builder.append("\t}\n");
                                }
                                else {
                                    builder.append("\t}");
                                }
                                return builder.toString();
                            };
                            JsonRaw.SEP = "@";
                            return JsonRaw;
                        })();
                        manager.JsonRaw = JsonRaw;
                        var KeyCalculator = (function () {
                            function KeyCalculator(prefix, currentIndex) {
                                this._prefix = "0x" + prefix.toString(16);
                                this._currentIndex = currentIndex;
                            }
                            KeyCalculator.prototype.nextKey = function () {
                                if (this._currentIndex == KeyCalculator.INDEX_LIMIT) {
                                    throw new java.lang.IndexOutOfBoundsException("Object Index could not be created because it exceeded the capacity of the current prefix. Ask for a new prefix.");
                                }
                                this._currentIndex++;
                                var indexHex = this._currentIndex.toString(16);
                                var objectKey = parseInt(this._prefix + "000000000".substring(0, 9 - indexHex.length) + indexHex, 16);
                                if (objectKey > KeyCalculator.LONG_LIMIT_JS) {
                                    throw new java.lang.IndexOutOfBoundsException("Object Index exceeds teh maximum JavaScript number capacity. (2^53)");
                                }
                                return objectKey;
                            };
                            KeyCalculator.prototype.lastComputedIndex = function () {
                                return this._currentIndex;
                            };
                            KeyCalculator.prototype.prefix = function () {
                                return parseInt(this._prefix, 16);
                            };
                            KeyCalculator.LONG_LIMIT_JS = 0x001FFFFFFFFFFFFF;
                            KeyCalculator.INDEX_LIMIT = 0x0000001FFFFFFFFF;
                            return KeyCalculator;
                        })();
                        manager.KeyCalculator = KeyCalculator;
                        var LookupAllRunnable = (function () {
                            function LookupAllRunnable(p_originView, p_keys, p_callback, p_store) {
                                this._originView = p_originView;
                                this._keys = p_keys;
                                this._callback = p_callback;
                                this._store = p_store;
                            }
                            LookupAllRunnable.prototype.run = function () {
                                var _this = this;
                                this._store.internal_resolve_universe_time(this._originView, this._keys, function (objects) {
                                    var resolved = new Array();
                                    var toLoadIndexes = new java.util.ArrayList();
                                    for (var i = 0; i < objects.length; i++) {
                                        if (objects[i] != null && objects[i].resolvedQuanta != null && objects[i].resolvedUniverse != null) {
                                            var contentKey = org.kevoree.modeling.api.data.cache.KContentKey.createObject(objects[i].resolvedUniverse, objects[i].resolvedQuanta, _this._keys[i]);
                                            var entry = _this._store.cdn().cache().get(contentKey);
                                            if (entry == null) {
                                                toLoadIndexes.add(i);
                                            }
                                            else {
                                                resolved[i] = _this._originView.createProxy(entry.metaClass, entry.universeTree, _this._keys[i]);
                                            }
                                        }
                                    }
                                    if (toLoadIndexes.isEmpty()) {
                                        _this._callback(resolved);
                                    }
                                    else {
                                        var toLoadKeys = new Array();
                                        for (var i = 0; i < toLoadIndexes.size(); i++) {
                                            var toLoadIndex = toLoadIndexes.get(i);
                                            toLoadKeys[i] = org.kevoree.modeling.api.data.cache.KContentKey.createObject(objects[toLoadIndex].resolvedUniverse, objects[toLoadIndex].resolvedQuanta, _this._keys[i]);
                                        }
                                        _this._store.cdn().get(toLoadKeys, function (strings, error) {
                                            if (error != null) {
                                                error.printStackTrace();
                                                _this._callback(null);
                                            }
                                            else {
                                                for (var i = 0; i < strings.length; i++) {
                                                    if (strings[i] != null) {
                                                        var index = toLoadIndexes.get(i);
                                                        var entry = org.kevoree.modeling.api.data.manager.JsonRaw.decode(strings[i], _this._originView, objects[i].resolvedQuanta);
                                                        if (entry != null) {
                                                            entry.universeTree = objects[i].universeTree;
                                                            resolved[index] = _this._originView.createProxy(entry.metaClass, entry.universeTree, _this._keys[i]);
                                                            _this._store.cdn().cache().put(org.kevoree.modeling.api.data.cache.KContentKey.createObject(objects[i].resolvedUniverse, objects[i].resolvedQuanta, _this._keys[i]), entry);
                                                        }
                                                    }
                                                }
                                                _this._callback(resolved);
                                            }
                                        });
                                    }
                                });
                            };
                            return LookupAllRunnable;
                        })();
                        manager.LookupAllRunnable = LookupAllRunnable;
                        var ResolutionResult = (function () {
                            function ResolutionResult() {
                                this.resolvedUniverse = null;
                                this.universeTree = null;
                                this.resolvedQuanta = null;
                                this.timeTree = null;
                            }
                            return ResolutionResult;
                        })();
                        manager.ResolutionResult = ResolutionResult;
                    })(manager = data.manager || (data.manager = {}));
                })(data = api.data || (api.data = {}));
                var extrapolation;
                (function (extrapolation) {
                    var DiscreteExtrapolation = (function () {
                        function DiscreteExtrapolation() {
                        }
                        DiscreteExtrapolation.instance = function () {
                            if (DiscreteExtrapolation.INSTANCE == null) {
                                DiscreteExtrapolation.INSTANCE = new org.kevoree.modeling.api.extrapolation.DiscreteExtrapolation();
                            }
                            return DiscreteExtrapolation.INSTANCE;
                        };
                        DiscreteExtrapolation.prototype.extrapolate = function (current, attribute) {
                            var payload = current.view().universe().model().manager().entry(current, org.kevoree.modeling.api.data.manager.AccessMode.READ);
                            if (payload != null) {
                                return payload.get(attribute.index());
                            }
                            else {
                                return null;
                            }
                        };
                        DiscreteExtrapolation.prototype.mutate = function (current, attribute, payload) {
                            var internalPayload = current.view().universe().model().manager().entry(current, org.kevoree.modeling.api.data.manager.AccessMode.WRITE);
                            if (internalPayload != null) {
                                internalPayload.set(attribute.index(), payload);
                            }
                        };
                        DiscreteExtrapolation.prototype.save = function (cache, attribute) {
                            if (cache != null) {
                                return attribute.metaType().save(cache);
                            }
                            else {
                                return null;
                            }
                        };
                        DiscreteExtrapolation.prototype.load = function (payload, attribute, now) {
                            if (payload != null) {
                                return attribute.metaType().load(payload);
                            }
                            return null;
                        };
                        return DiscreteExtrapolation;
                    })();
                    extrapolation.DiscreteExtrapolation = DiscreteExtrapolation;
                    var PolynomialExtrapolation = (function () {
                        function PolynomialExtrapolation() {
                        }
                        PolynomialExtrapolation.prototype.extrapolate = function (current, attribute) {
                            var pol = current.view().universe().model().manager().entry(current, org.kevoree.modeling.api.data.manager.AccessMode.READ).get(attribute.index());
                            if (pol != null) {
                                var extrapolatedValue = pol.extrapolate(current.now());
                                if (attribute.metaType() == org.kevoree.modeling.api.meta.PrimitiveMetaTypes.DOUBLE) {
                                    return extrapolatedValue;
                                }
                                else {
                                    if (attribute.metaType() == org.kevoree.modeling.api.meta.PrimitiveMetaTypes.LONG) {
                                        return extrapolatedValue.longValue();
                                    }
                                    else {
                                        if (attribute.metaType() == org.kevoree.modeling.api.meta.PrimitiveMetaTypes.FLOAT) {
                                            return extrapolatedValue.floatValue();
                                        }
                                        else {
                                            if (attribute.metaType() == org.kevoree.modeling.api.meta.PrimitiveMetaTypes.INT) {
                                                return extrapolatedValue.intValue();
                                            }
                                            else {
                                                if (attribute.metaType() == org.kevoree.modeling.api.meta.PrimitiveMetaTypes.SHORT) {
                                                    return extrapolatedValue.shortValue();
                                                }
                                                else {
                                                    return null;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            else {
                                return null;
                            }
                        };
                        PolynomialExtrapolation.prototype.mutate = function (current, attribute, payload) {
                            var raw = current.view().universe().model().manager().entry(current, org.kevoree.modeling.api.data.manager.AccessMode.READ);
                            var previous = raw.get(attribute.index());
                            if (previous == null) {
                                var pol = this.createPolynomialModel(current.now(), attribute.precision());
                                pol.insert(current.now(), java.lang.Double.parseDouble(payload.toString()));
                                current.view().universe().model().manager().entry(current, org.kevoree.modeling.api.data.manager.AccessMode.WRITE).set(attribute.index(), pol);
                            }
                            else {
                                var previousPol = previous;
                                if (!previousPol.insert(current.now(), java.lang.Double.parseDouble(payload.toString()))) {
                                    var pol = this.createPolynomialModel(previousPol.lastIndex(), attribute.precision());
                                    pol.insert(previousPol.lastIndex(), previousPol.extrapolate(previousPol.lastIndex()));
                                    pol.insert(current.now(), java.lang.Double.parseDouble(payload.toString()));
                                    current.view().universe().model().manager().entry(current, org.kevoree.modeling.api.data.manager.AccessMode.WRITE).set(attribute.index(), pol);
                                }
                                else {
                                    if (previousPol.isDirty()) {
                                        raw.set(attribute.index(), previousPol);
                                    }
                                }
                            }
                        };
                        PolynomialExtrapolation.prototype.save = function (cache, attribute) {
                            try {
                                return cache.save();
                            }
                            catch ($ex$) {
                                if ($ex$ instanceof java.lang.Exception) {
                                    var e = $ex$;
                                    e.printStackTrace();
                                    return null;
                                }
                            }
                        };
                        PolynomialExtrapolation.prototype.load = function (payload, attribute, now) {
                            var pol = this.createPolynomialModel(now, attribute.precision());
                            pol.load(payload);
                            return pol;
                        };
                        PolynomialExtrapolation.instance = function () {
                            if (PolynomialExtrapolation.INSTANCE == null) {
                                PolynomialExtrapolation.INSTANCE = new org.kevoree.modeling.api.extrapolation.PolynomialExtrapolation();
                            }
                            return PolynomialExtrapolation.INSTANCE;
                        };
                        PolynomialExtrapolation.prototype.createPolynomialModel = function (origin, precision) {
                            return new org.kevoree.modeling.api.polynomial.doublepolynomial.DoublePolynomialModel(origin, precision, 20, org.kevoree.modeling.api.polynomial.util.Prioritization.LOWDEGREES);
                        };
                        return PolynomialExtrapolation;
                    })();
                    extrapolation.PolynomialExtrapolation = PolynomialExtrapolation;
                })(extrapolation = api.extrapolation || (api.extrapolation = {}));
                var infer;
                (function (infer) {
                    var AnalyticKInfer = (function (_super) {
                        __extends(AnalyticKInfer, _super);
                        function AnalyticKInfer(p_view, p_uuid, p_universeTree) {
                            _super.call(this, p_view, p_uuid, p_universeTree, null);
                        }
                        AnalyticKInfer.prototype.train = function (trainingSet, expectedResultSet, callback) {
                            var currentState = this.modifyState();
                            for (var i = 0; i < expectedResultSet.length; i++) {
                                var value = java.lang.Double.parseDouble(expectedResultSet[i].toString());
                                currentState.train(value);
                            }
                        };
                        AnalyticKInfer.prototype.infer = function (features) {
                            var currentState = this.readOnlyState();
                            return currentState.getAverage();
                        };
                        AnalyticKInfer.prototype.accuracy = function (testSet, expectedResultSet) {
                            return null;
                        };
                        AnalyticKInfer.prototype.clear = function () {
                            var currentState = this.modifyState();
                            currentState.clear();
                        };
                        AnalyticKInfer.prototype.createEmptyState = function () {
                            return new org.kevoree.modeling.api.infer.states.AnalyticKInferState();
                        };
                        return AnalyticKInfer;
                    })(org.kevoree.modeling.api.abs.AbstractKObjectInfer);
                    infer.AnalyticKInfer = AnalyticKInfer;
                    var GaussianClassificationKInfer = (function (_super) {
                        __extends(GaussianClassificationKInfer, _super);
                        function GaussianClassificationKInfer(p_view, p_uuid, p_universeTree, p_metaClass) {
                            _super.call(this, p_view, p_uuid, p_universeTree, p_metaClass);
                            this.alpha = 0.05;
                        }
                        GaussianClassificationKInfer.prototype.getAlpha = function () {
                            return this.alpha;
                        };
                        GaussianClassificationKInfer.prototype.setAlpha = function (alpha) {
                            this.alpha = alpha;
                        };
                        GaussianClassificationKInfer.prototype.train = function (trainingSet, expectedResultSet, callback) {
                            var currentState = this.modifyState();
                            var featuresize = trainingSet[0].length;
                            var features = new Array();
                            var results = new Array();
                            for (var i = 0; i < trainingSet.length; i++) {
                                features[i] = new Array();
                                for (var j = 0; j < featuresize; j++) {
                                    features[i][j] = trainingSet[i][j];
                                }
                                results[i] = expectedResultSet[i];
                                currentState.train(features[i], results[i], this.alpha);
                            }
                        };
                        GaussianClassificationKInfer.prototype.infer = function (features) {
                            var currentState = this.readOnlyState();
                            var ft = new Array();
                            for (var i = 0; i < features.length; i++) {
                                ft[i] = features[i];
                            }
                            return currentState.infer(ft);
                        };
                        GaussianClassificationKInfer.prototype.accuracy = function (testSet, expectedResultSet) {
                            return null;
                        };
                        GaussianClassificationKInfer.prototype.clear = function () {
                        };
                        GaussianClassificationKInfer.prototype.createEmptyState = function () {
                            return null;
                        };
                        return GaussianClassificationKInfer;
                    })(org.kevoree.modeling.api.abs.AbstractKObjectInfer);
                    infer.GaussianClassificationKInfer = GaussianClassificationKInfer;
                    var LinearRegressionKInfer = (function (_super) {
                        __extends(LinearRegressionKInfer, _super);
                        function LinearRegressionKInfer(p_view, p_uuid, p_universeTree, p_metaClass) {
                            _super.call(this, p_view, p_uuid, p_universeTree, p_metaClass);
                            this.alpha = 0.0001;
                            this.iterations = 100;
                        }
                        LinearRegressionKInfer.prototype.getAlpha = function () {
                            return this.alpha;
                        };
                        LinearRegressionKInfer.prototype.setAlpha = function (alpha) {
                            this.alpha = alpha;
                        };
                        LinearRegressionKInfer.prototype.getIterations = function () {
                            return this.iterations;
                        };
                        LinearRegressionKInfer.prototype.setIterations = function (iterations) {
                            this.iterations = iterations;
                        };
                        LinearRegressionKInfer.prototype.calculate = function (weights, features) {
                            var result = 0;
                            for (var i = 0; i < features.length; i++) {
                                result += weights[i] * features[i];
                            }
                            result += weights[features.length];
                            return result;
                        };
                        LinearRegressionKInfer.prototype.train = function (trainingSet, expectedResultSet, callback) {
                            var currentState = this.modifyState();
                            var weights = currentState.getWeights();
                            var featuresize = trainingSet[0].length;
                            if (weights == null) {
                                weights = new Array();
                            }
                            var features = new Array();
                            var results = new Array();
                            for (var i = 0; i < trainingSet.length; i++) {
                                features[i] = new Array();
                                for (var j = 0; j < featuresize; j++) {
                                    features[i][j] = trainingSet[i][j];
                                }
                                results[i] = expectedResultSet[i];
                            }
                            for (var j = 0; j < this.iterations; j++) {
                                for (var i = 0; i < trainingSet.length; i++) {
                                    var h = this.calculate(weights, features[i]);
                                    var err = -this.alpha * (h - results[i]);
                                    for (var k = 0; k < featuresize; k++) {
                                        weights[k] = weights[k] + err * features[i][k];
                                    }
                                    weights[featuresize] = weights[featuresize] + err;
                                }
                            }
                            currentState.setWeights(weights);
                        };
                        LinearRegressionKInfer.prototype.infer = function (features) {
                            var currentState = this.readOnlyState();
                            var weights = currentState.getWeights();
                            var ft = new Array();
                            for (var i = 0; i < features.length; i++) {
                                ft[i] = features[i];
                            }
                            return this.calculate(weights, ft);
                        };
                        LinearRegressionKInfer.prototype.accuracy = function (testSet, expectedResultSet) {
                            return null;
                        };
                        LinearRegressionKInfer.prototype.clear = function () {
                            var currentState = this.modifyState();
                            currentState.setWeights(null);
                        };
                        LinearRegressionKInfer.prototype.createEmptyState = function () {
                            return new org.kevoree.modeling.api.infer.states.DoubleArrayKInferState();
                        };
                        return LinearRegressionKInfer;
                    })(org.kevoree.modeling.api.abs.AbstractKObjectInfer);
                    infer.LinearRegressionKInfer = LinearRegressionKInfer;
                    var PerceptronClassificationKInfer = (function (_super) {
                        __extends(PerceptronClassificationKInfer, _super);
                        function PerceptronClassificationKInfer(p_view, p_uuid, p_universeTree, p_metaClass) {
                            _super.call(this, p_view, p_uuid, p_universeTree, p_metaClass);
                            this.alpha = 0.001;
                            this.iterations = 100;
                        }
                        PerceptronClassificationKInfer.prototype.getAlpha = function () {
                            return this.alpha;
                        };
                        PerceptronClassificationKInfer.prototype.setAlpha = function (alpha) {
                            this.alpha = alpha;
                        };
                        PerceptronClassificationKInfer.prototype.getIterations = function () {
                            return this.iterations;
                        };
                        PerceptronClassificationKInfer.prototype.setIterations = function (iterations) {
                            this.iterations = iterations;
                        };
                        PerceptronClassificationKInfer.prototype.calculate = function (weights, features) {
                            var res = 0;
                            for (var i = 0; i < features.length; i++) {
                                res = res + weights[i] * (features[i]);
                            }
                            res = res + weights[features.length];
                            if (res >= 0) {
                                return 1;
                            }
                            else {
                                return 0;
                            }
                        };
                        PerceptronClassificationKInfer.prototype.train = function (trainingSet, expectedResultSet, callback) {
                            var currentState = this.modifyState();
                            var weights = currentState.getWeights();
                            var featuresize = trainingSet[0].length;
                            if (weights == null) {
                                weights = new Array();
                            }
                            var features = new Array();
                            var results = new Array();
                            for (var i = 0; i < trainingSet.length; i++) {
                                features[i] = new Array();
                                for (var j = 0; j < featuresize; j++) {
                                    features[i][j] = trainingSet[i][j];
                                }
                                results[i] = expectedResultSet[i];
                                if (results[i] == 0) {
                                    results[i] = -1;
                                }
                            }
                            for (var j = 0; j < this.iterations; j++) {
                                for (var i = 0; i < trainingSet.length; i++) {
                                    var h = this.calculate(weights, features[i]);
                                    if (h == 0) {
                                        h = -1;
                                    }
                                    if (h * results[i] <= 0) {
                                        for (var k = 0; k < featuresize; k++) {
                                            weights[k] = weights[k] + this.alpha * (results[i] * features[i][k]);
                                        }
                                        weights[featuresize] = weights[featuresize] + this.alpha * (results[i]);
                                    }
                                }
                            }
                            currentState.setWeights(weights);
                        };
                        PerceptronClassificationKInfer.prototype.infer = function (features) {
                            var currentState = this.readOnlyState();
                            var weights = currentState.getWeights();
                            var ft = new Array();
                            for (var i = 0; i < features.length; i++) {
                                ft[i] = features[i];
                            }
                            return this.calculate(weights, ft);
                        };
                        PerceptronClassificationKInfer.prototype.accuracy = function (testSet, expectedResultSet) {
                            return null;
                        };
                        PerceptronClassificationKInfer.prototype.clear = function () {
                            var currentState = this.modifyState();
                            currentState.setWeights(null);
                        };
                        PerceptronClassificationKInfer.prototype.createEmptyState = function () {
                            return new org.kevoree.modeling.api.infer.states.DoubleArrayKInferState();
                        };
                        return PerceptronClassificationKInfer;
                    })(org.kevoree.modeling.api.abs.AbstractKObjectInfer);
                    infer.PerceptronClassificationKInfer = PerceptronClassificationKInfer;
                    var PolynomialOfflineKInfer = (function (_super) {
                        __extends(PolynomialOfflineKInfer, _super);
                        function PolynomialOfflineKInfer(p_view, p_uuid, p_universeTree, p_metaClass) {
                            _super.call(this, p_view, p_uuid, p_universeTree, p_metaClass);
                            this.maxDegree = 20;
                            this.toleratedErr = 0.01;
                        }
                        PolynomialOfflineKInfer.prototype.getToleratedErr = function () {
                            return this.toleratedErr;
                        };
                        PolynomialOfflineKInfer.prototype.setToleratedErr = function (toleratedErr) {
                            this.toleratedErr = toleratedErr;
                        };
                        PolynomialOfflineKInfer.prototype.getMaxDegree = function () {
                            return this.maxDegree;
                        };
                        PolynomialOfflineKInfer.prototype.setMaxDegree = function (maxDegree) {
                            this.maxDegree = maxDegree;
                        };
                        PolynomialOfflineKInfer.prototype.calculateLong = function (time, weights, timeOrigin, unit) {
                            var t = (time - timeOrigin) / unit;
                            return this.calculate(weights, t);
                        };
                        PolynomialOfflineKInfer.prototype.calculate = function (weights, t) {
                            var result = 0;
                            var power = 1;
                            for (var j = 0; j < weights.length; j++) {
                                result += weights[j] * power;
                                power = power * t;
                            }
                            return result;
                        };
                        PolynomialOfflineKInfer.prototype.train = function (trainingSet, expectedResultSet, callback) {
                            var currentState = this.modifyState();
                            var weights;
                            var featuresize = trainingSet[0].length;
                            var times = new Array();
                            var results = new Array();
                            for (var i = 0; i < trainingSet.length; i++) {
                                times[i] = trainingSet[i][0];
                                results[i] = expectedResultSet[i];
                            }
                            if (times.length == 0) {
                                return;
                            }
                            if (times.length == 1) {
                                weights = new Array();
                                weights[0] = results[0];
                                currentState.setWeights(weights);
                                return;
                            }
                            var maxcurdeg = Math.min(times.length, this.maxDegree);
                            var timeOrigin = times[0];
                            var unit = times[1] - times[0];
                            var normalizedTimes = new Array();
                            for (var i = 0; i < times.length; i++) {
                                normalizedTimes[i] = (times[i] - times[0]) / unit;
                            }
                            for (var deg = 0; deg < maxcurdeg; deg++) {
                                var pf = new org.kevoree.modeling.api.polynomial.util.PolynomialFitEjml(deg);
                                pf.fit(normalizedTimes, results);
                                if (org.kevoree.modeling.api.infer.states.PolynomialKInferState.maxError(pf.getCoef(), normalizedTimes, results) <= this.toleratedErr) {
                                    currentState.setUnit(unit);
                                    currentState.setTimeOrigin(timeOrigin);
                                    currentState.setWeights(pf.getCoef());
                                    return;
                                }
                            }
                        };
                        PolynomialOfflineKInfer.prototype.infer = function (features) {
                            var currentState = this.readOnlyState();
                            var time = features[0];
                            return currentState.infer(time);
                        };
                        PolynomialOfflineKInfer.prototype.accuracy = function (testSet, expectedResultSet) {
                            return null;
                        };
                        PolynomialOfflineKInfer.prototype.clear = function () {
                            var currentState = this.modifyState();
                            currentState.setWeights(null);
                        };
                        PolynomialOfflineKInfer.prototype.createEmptyState = function () {
                            return new org.kevoree.modeling.api.infer.states.DoubleArrayKInferState();
                        };
                        return PolynomialOfflineKInfer;
                    })(org.kevoree.modeling.api.abs.AbstractKObjectInfer);
                    infer.PolynomialOfflineKInfer = PolynomialOfflineKInfer;
                    var PolynomialOnlineKInfer = (function (_super) {
                        __extends(PolynomialOnlineKInfer, _super);
                        function PolynomialOnlineKInfer(p_view, p_uuid, p_universeTree, p_metaClass) {
                            _super.call(this, p_view, p_uuid, p_universeTree, p_metaClass);
                            this.maxDegree = 20;
                            this.toleratedErr = 0.01;
                        }
                        PolynomialOnlineKInfer.prototype.getToleratedErr = function () {
                            return this.toleratedErr;
                        };
                        PolynomialOnlineKInfer.prototype.setToleratedErr = function (toleratedErr) {
                            this.toleratedErr = toleratedErr;
                        };
                        PolynomialOnlineKInfer.prototype.getMaxDegree = function () {
                            return this.maxDegree;
                        };
                        PolynomialOnlineKInfer.prototype.setMaxDegree = function (maxDegree) {
                            this.maxDegree = maxDegree;
                        };
                        PolynomialOnlineKInfer.prototype.calculateLong = function (time, weights, timeOrigin, unit) {
                            var t = (time - timeOrigin) / unit;
                            return this.calculate(weights, t);
                        };
                        PolynomialOnlineKInfer.prototype.calculate = function (weights, t) {
                            var result = 0;
                            var power = 1;
                            for (var j = 0; j < weights.length; j++) {
                                result += weights[j] * power;
                                power = power * t;
                            }
                            return result;
                        };
                        PolynomialOnlineKInfer.prototype.train = function (trainingSet, expectedResultSet, callback) {
                            var currentState = this.modifyState();
                            var weights;
                            var featuresize = trainingSet[0].length;
                            var times = new Array();
                            var results = new Array();
                            for (var i = 0; i < trainingSet.length; i++) {
                                times[i] = trainingSet[i][0];
                                results[i] = expectedResultSet[i];
                            }
                            if (times.length == 0) {
                                return;
                            }
                            if (times.length == 1) {
                                weights = new Array();
                                weights[0] = results[0];
                                currentState.setWeights(weights);
                                return;
                            }
                            var maxcurdeg = Math.min(times.length, this.maxDegree);
                            var timeOrigin = times[0];
                            var unit = times[1] - times[0];
                            var normalizedTimes = new Array();
                            for (var i = 0; i < times.length; i++) {
                                normalizedTimes[i] = (times[i] - times[0]) / unit;
                            }
                            for (var deg = 0; deg < maxcurdeg; deg++) {
                                var pf = new org.kevoree.modeling.api.polynomial.util.PolynomialFitEjml(deg);
                                pf.fit(normalizedTimes, results);
                                if (org.kevoree.modeling.api.infer.states.PolynomialKInferState.maxError(pf.getCoef(), normalizedTimes, results) <= this.toleratedErr) {
                                    currentState.setUnit(unit);
                                    currentState.setTimeOrigin(timeOrigin);
                                    currentState.setWeights(pf.getCoef());
                                    return;
                                }
                            }
                        };
                        PolynomialOnlineKInfer.prototype.infer = function (features) {
                            var currentState = this.readOnlyState();
                            var time = features[0];
                            return currentState.infer(time);
                        };
                        PolynomialOnlineKInfer.prototype.accuracy = function (testSet, expectedResultSet) {
                            return null;
                        };
                        PolynomialOnlineKInfer.prototype.clear = function () {
                            var currentState = this.modifyState();
                            currentState.setWeights(null);
                        };
                        PolynomialOnlineKInfer.prototype.createEmptyState = function () {
                            return new org.kevoree.modeling.api.infer.states.DoubleArrayKInferState();
                        };
                        return PolynomialOnlineKInfer;
                    })(org.kevoree.modeling.api.abs.AbstractKObjectInfer);
                    infer.PolynomialOnlineKInfer = PolynomialOnlineKInfer;
                    var WinnowClassificationKInfer = (function (_super) {
                        __extends(WinnowClassificationKInfer, _super);
                        function WinnowClassificationKInfer(p_view, p_uuid, p_universeTree, p_metaClass) {
                            _super.call(this, p_view, p_uuid, p_universeTree, p_metaClass);
                            this.alpha = 2;
                            this.beta = 2;
                        }
                        WinnowClassificationKInfer.prototype.getAlpha = function () {
                            return this.alpha;
                        };
                        WinnowClassificationKInfer.prototype.setAlpha = function (alpha) {
                            this.alpha = alpha;
                        };
                        WinnowClassificationKInfer.prototype.getBeta = function () {
                            return this.beta;
                        };
                        WinnowClassificationKInfer.prototype.setBeta = function (beta) {
                            this.beta = beta;
                        };
                        WinnowClassificationKInfer.prototype.calculate = function (weights, features) {
                            var result = 0;
                            for (var i = 0; i < features.length; i++) {
                                result += weights[i] * features[i];
                            }
                            if (result >= features.length) {
                                return 1.0;
                            }
                            else {
                                return 0.0;
                            }
                        };
                        WinnowClassificationKInfer.prototype.train = function (trainingSet, expectedResultSet, callback) {
                            var currentState = this.modifyState();
                            var weights = currentState.getWeights();
                            var featuresize = trainingSet[0].length;
                            if (weights == null) {
                                weights = new Array();
                                for (var i = 0; i < weights.length; i++) {
                                    weights[i] = 2;
                                }
                            }
                            var features = new Array();
                            var results = new Array();
                            for (var i = 0; i < trainingSet.length; i++) {
                                features[i] = new Array();
                                for (var j = 0; j < featuresize; j++) {
                                    features[i][j] = trainingSet[i][j];
                                }
                                results[i] = expectedResultSet[i];
                            }
                            for (var i = 0; i < trainingSet.length; i++) {
                                if (this.calculate(weights, features[i]) == results[i]) {
                                    continue;
                                }
                                if (results[i] == 0) {
                                    for (var j = 0; j < features[i].length; j++) {
                                        if (features[i][j] != 0) {
                                            weights[j] = weights[j] / this.beta;
                                        }
                                    }
                                }
                                else {
                                    for (var j = 0; i < features[i].length; j++) {
                                        if (features[i][j] != 0) {
                                            weights[j] = weights[j] * this.alpha;
                                        }
                                    }
                                }
                            }
                            currentState.setWeights(weights);
                        };
                        WinnowClassificationKInfer.prototype.infer = function (features) {
                            var currentState = this.readOnlyState();
                            var weights = currentState.getWeights();
                            var ft = new Array();
                            for (var i = 0; i < features.length; i++) {
                                ft[i] = features[i];
                            }
                            return this.calculate(weights, ft);
                        };
                        WinnowClassificationKInfer.prototype.accuracy = function (testSet, expectedResultSet) {
                            return null;
                        };
                        WinnowClassificationKInfer.prototype.clear = function () {
                            var currentState = this.modifyState();
                            currentState.setWeights(null);
                        };
                        WinnowClassificationKInfer.prototype.createEmptyState = function () {
                            return new org.kevoree.modeling.api.infer.states.DoubleArrayKInferState();
                        };
                        return WinnowClassificationKInfer;
                    })(org.kevoree.modeling.api.abs.AbstractKObjectInfer);
                    infer.WinnowClassificationKInfer = WinnowClassificationKInfer;
                    var states;
                    (function (states) {
                        var AnalyticKInferState = (function (_super) {
                            __extends(AnalyticKInferState, _super);
                            function AnalyticKInferState() {
                                _super.apply(this, arguments);
                                this._isDirty = false;
                                this.sumSquares = 0;
                                this.sum = 0;
                                this.nb = 0;
                            }
                            AnalyticKInferState.prototype.getSumSquares = function () {
                                return this.sumSquares;
                            };
                            AnalyticKInferState.prototype.setSumSquares = function (sumSquares) {
                                this.sumSquares = sumSquares;
                            };
                            AnalyticKInferState.prototype.getMin = function () {
                                return this.min;
                            };
                            AnalyticKInferState.prototype.setMin = function (min) {
                                this._isDirty = true;
                                this.min = min;
                            };
                            AnalyticKInferState.prototype.getMax = function () {
                                return this.max;
                            };
                            AnalyticKInferState.prototype.setMax = function (max) {
                                this._isDirty = true;
                                this.max = max;
                            };
                            AnalyticKInferState.prototype.getNb = function () {
                                return this.nb;
                            };
                            AnalyticKInferState.prototype.setNb = function (nb) {
                                this._isDirty = true;
                                this.nb = nb;
                            };
                            AnalyticKInferState.prototype.getSum = function () {
                                return this.sum;
                            };
                            AnalyticKInferState.prototype.setSum = function (sum) {
                                this._isDirty = true;
                                this.sum = sum;
                            };
                            AnalyticKInferState.prototype.getAverage = function () {
                                if (this.nb != 0) {
                                    return this.sum / this.nb;
                                }
                                else {
                                    return null;
                                }
                            };
                            AnalyticKInferState.prototype.train = function (value) {
                                if (this.nb == 0) {
                                    this.max = value;
                                    this.min = value;
                                }
                                else {
                                    if (value < this.min) {
                                        this.min = value;
                                    }
                                    if (value > this.max) {
                                        this.max = value;
                                    }
                                }
                                this.sum += value;
                                this.sumSquares += value * value;
                                this.nb++;
                                this._isDirty = true;
                            };
                            AnalyticKInferState.prototype.getVariance = function () {
                                if (this.nb != 0) {
                                    var avg = this.sum / this.nb;
                                    var newvar = this.sumSquares / this.nb - avg * avg;
                                    return newvar;
                                }
                                else {
                                    return null;
                                }
                            };
                            AnalyticKInferState.prototype.clear = function () {
                                this.nb = 0;
                                this.sum = 0;
                                this.sumSquares = 0;
                                this._isDirty = true;
                            };
                            AnalyticKInferState.prototype.save = function () {
                                return this.sum + "/" + this.nb + "/" + this.min + "/" + this.max + "/" + this.sumSquares;
                            };
                            AnalyticKInferState.prototype.load = function (payload) {
                                try {
                                    var previousState = payload.split("/");
                                    this.sum = java.lang.Double.parseDouble(previousState[0]);
                                    this.nb = java.lang.Integer.parseInt(previousState[1]);
                                    this.min = java.lang.Double.parseDouble(previousState[2]);
                                    this.max = java.lang.Double.parseDouble(previousState[3]);
                                    this.sumSquares = java.lang.Double.parseDouble(previousState[4]);
                                }
                                catch ($ex$) {
                                    if ($ex$ instanceof java.lang.Exception) {
                                        var e = $ex$;
                                        this.sum = 0;
                                        this.nb = 0;
                                    }
                                }
                                this._isDirty = false;
                            };
                            AnalyticKInferState.prototype.isDirty = function () {
                                return this._isDirty;
                            };
                            AnalyticKInferState.prototype.cloneState = function () {
                                var cloned = new org.kevoree.modeling.api.infer.states.AnalyticKInferState();
                                cloned.setSumSquares(this.getSumSquares());
                                cloned.setNb(this.getNb());
                                cloned.setSum(this.getSum());
                                cloned.setMax(this.getMax());
                                cloned.setMin(this.getMin());
                                return cloned;
                            };
                            return AnalyticKInferState;
                        })(org.kevoree.modeling.api.KInferState);
                        states.AnalyticKInferState = AnalyticKInferState;
                        var BayesianClassificationState = (function (_super) {
                            __extends(BayesianClassificationState, _super);
                            function BayesianClassificationState() {
                                _super.apply(this, arguments);
                            }
                            BayesianClassificationState.prototype.initialize = function (metaFeatures, MetaClassification) {
                                this.numOfFeatures = metaFeatures.length;
                                this.numOfClasses = 0;
                                this.states = new Array(new Array());
                                this.classStats = new org.kevoree.modeling.api.infer.states.Bayesian.EnumSubstate();
                                this.classStats.initialize(this.numOfClasses);
                                for (var i = 0; i < this.numOfFeatures; i++) {
                                }
                            };
                            BayesianClassificationState.prototype.predict = function (features) {
                                var temp;
                                var prediction = -1;
                                var max = 0;
                                for (var i = 0; i < this.numOfClasses; i++) {
                                    temp = this.classStats.calculateProbability(i);
                                    for (var j = 0; j < this.numOfFeatures; j++) {
                                        temp = temp * this.states[i][j].calculateProbability(features[j]);
                                    }
                                    if (temp >= max) {
                                        max = temp;
                                        prediction = i;
                                    }
                                }
                                return prediction;
                            };
                            BayesianClassificationState.prototype.train = function (features, classNum) {
                                for (var i = 0; i < this.numOfFeatures; i++) {
                                    this.states[classNum][i].train(features[i]);
                                    this.states[this.numOfClasses][i].train(features[i]);
                                }
                                this.classStats.train(classNum);
                            };
                            BayesianClassificationState.prototype.save = function () {
                                var sb = new java.lang.StringBuilder();
                                sb.append(this.numOfClasses + BayesianClassificationState.interStateSep);
                                sb.append(this.numOfFeatures + BayesianClassificationState.interStateSep);
                                for (var i = 0; i < this.numOfClasses + 1; i++) {
                                    for (var j = 0; j < this.numOfFeatures; j++) {
                                        sb.append(this.states[i][j].save(BayesianClassificationState.stateSep));
                                        sb.append(BayesianClassificationState.interStateSep);
                                    }
                                }
                                sb.append(this.classStats.save(BayesianClassificationState.stateSep));
                                return sb.toString();
                            };
                            BayesianClassificationState.prototype.load = function (payload) {
                                var st = payload.split(BayesianClassificationState.interStateSep);
                                this.numOfClasses = java.lang.Integer.parseInt(st[0]);
                                this.numOfFeatures = java.lang.Integer.parseInt(st[1]);
                                this.states = new Array(new Array());
                                var counter = 2;
                                for (var i = 0; i < this.numOfClasses + 1; i++) {
                                    for (var j = 0; j < this.numOfFeatures; j++) {
                                        var s = st[counter].split(BayesianClassificationState.stateSep)[0];
                                        if (s.equals("EnumSubstate")) {
                                            this.states[i][j] = new org.kevoree.modeling.api.infer.states.Bayesian.EnumSubstate();
                                        }
                                        else {
                                            if (s.equals("GaussianSubState")) {
                                                this.states[i][j] = new org.kevoree.modeling.api.infer.states.Bayesian.GaussianSubState();
                                            }
                                        }
                                        s = st[counter].substring(s.length + 1);
                                        this.states[i][j].load(s, BayesianClassificationState.stateSep);
                                        counter++;
                                    }
                                }
                                var s = st[counter].split(BayesianClassificationState.stateSep)[0];
                                s = st[counter].substring(s.length + 1);
                                this.classStats = new org.kevoree.modeling.api.infer.states.Bayesian.EnumSubstate();
                                this.classStats.load(s, BayesianClassificationState.stateSep);
                            };
                            BayesianClassificationState.prototype.isDirty = function () {
                                return false;
                            };
                            BayesianClassificationState.prototype.cloneState = function () {
                                return null;
                            };
                            BayesianClassificationState.stateSep = "/";
                            BayesianClassificationState.interStateSep = "|";
                            return BayesianClassificationState;
                        })(org.kevoree.modeling.api.KInferState);
                        states.BayesianClassificationState = BayesianClassificationState;
                        var DoubleArrayKInferState = (function (_super) {
                            __extends(DoubleArrayKInferState, _super);
                            function DoubleArrayKInferState() {
                                _super.apply(this, arguments);
                                this._isDirty = false;
                            }
                            DoubleArrayKInferState.prototype.save = function () {
                                var s = "";
                                var sb = new java.lang.StringBuilder();
                                if (this.weights != null) {
                                    for (var i = 0; i < this.weights.length; i++) {
                                        sb.append(this.weights[i] + "/");
                                    }
                                    s = sb.toString();
                                }
                                return s;
                            };
                            DoubleArrayKInferState.prototype.load = function (payload) {
                                try {
                                    var previousState = payload.split("/");
                                    if (previousState.length > 0) {
                                        this.weights = new Array();
                                        for (var i = 0; i < previousState.length; i++) {
                                            this.weights[i] = java.lang.Double.parseDouble(previousState[i]);
                                        }
                                    }
                                }
                                catch ($ex$) {
                                    if ($ex$ instanceof java.lang.Exception) {
                                        var e = $ex$;
                                    }
                                }
                                this._isDirty = false;
                            };
                            DoubleArrayKInferState.prototype.isDirty = function () {
                                return this._isDirty;
                            };
                            DoubleArrayKInferState.prototype.set_isDirty = function (value) {
                                this._isDirty = value;
                            };
                            DoubleArrayKInferState.prototype.cloneState = function () {
                                var cloned = new org.kevoree.modeling.api.infer.states.DoubleArrayKInferState();
                                var clonearray = new Array();
                                for (var i = 0; i < this.weights.length; i++) {
                                    clonearray[i] = this.weights[i];
                                }
                                cloned.setWeights(clonearray);
                                return cloned;
                            };
                            DoubleArrayKInferState.prototype.getWeights = function () {
                                return this.weights;
                            };
                            DoubleArrayKInferState.prototype.setWeights = function (weights) {
                                this.weights = weights;
                                this._isDirty = true;
                            };
                            return DoubleArrayKInferState;
                        })(org.kevoree.modeling.api.KInferState);
                        states.DoubleArrayKInferState = DoubleArrayKInferState;
                        var GaussianArrayKInferState = (function (_super) {
                            __extends(GaussianArrayKInferState, _super);
                            function GaussianArrayKInferState() {
                                _super.apply(this, arguments);
                                this._isDirty = false;
                                this.sumSquares = null;
                                this.sum = null;
                                this.epsilon = 0;
                                this.nb = 0;
                            }
                            GaussianArrayKInferState.prototype.getSumSquares = function () {
                                return this.sumSquares;
                            };
                            GaussianArrayKInferState.prototype.setSumSquares = function (sumSquares) {
                                this.sumSquares = sumSquares;
                            };
                            GaussianArrayKInferState.prototype.getNb = function () {
                                return this.nb;
                            };
                            GaussianArrayKInferState.prototype.setNb = function (nb) {
                                this._isDirty = true;
                                this.nb = nb;
                            };
                            GaussianArrayKInferState.prototype.getSum = function () {
                                return this.sum;
                            };
                            GaussianArrayKInferState.prototype.setSum = function (sum) {
                                this._isDirty = true;
                                this.sum = sum;
                            };
                            GaussianArrayKInferState.prototype.calculateProbability = function (features) {
                                var size = this.sum.length;
                                var avg = new Array();
                                var variances = new Array();
                                var p = 1;
                                for (var i = 0; i < size; i++) {
                                    avg[i] = this.sum[i] / this.nb;
                                    variances[i] = this.sumSquares[i] / this.nb - avg[i] * avg[i];
                                    p = p * (1 / Math.sqrt(2 * Math.PI * variances[i])) * Math.exp(-((features[i] - avg[i]) * (features[i] - avg[i])) / (2 * variances[i]));
                                }
                                return p;
                            };
                            GaussianArrayKInferState.prototype.infer = function (features) {
                                return (this.calculateProbability(features) <= this.epsilon);
                            };
                            GaussianArrayKInferState.prototype.getAverage = function () {
                                if (this.nb != 0) {
                                    var size = this.sum.length;
                                    var avg = new Array();
                                    for (var i = 0; i < size; i++) {
                                        avg[i] = this.sum[i] / this.nb;
                                    }
                                    return avg;
                                }
                                else {
                                    return null;
                                }
                            };
                            GaussianArrayKInferState.prototype.train = function (features, result, alpha) {
                                var size = features.length;
                                if (this.nb == 0) {
                                    this.sumSquares = new Array();
                                    this.sum = new Array();
                                }
                                for (var i = 0; i < size; i++) {
                                    this.sum[i] += features[i];
                                    this.sumSquares[i] += features[i] * features[i];
                                }
                                this.nb++;
                                var proba = this.calculateProbability(features);
                                var diff = proba - this.epsilon;
                                if ((proba < this.epsilon && result == false) || (proba > this.epsilon && result == true)) {
                                    this.epsilon = this.epsilon + alpha * diff;
                                }
                                this._isDirty = true;
                            };
                            GaussianArrayKInferState.prototype.getVariance = function () {
                                if (this.nb != 0) {
                                    var size = this.sum.length;
                                    var avg = new Array();
                                    var newvar = new Array();
                                    for (var i = 0; i < size; i++) {
                                        avg[i] = this.sum[i] / this.nb;
                                        newvar[i] = this.sumSquares[i] / this.nb - avg[i] * avg[i];
                                    }
                                    return newvar;
                                }
                                else {
                                    return null;
                                }
                            };
                            GaussianArrayKInferState.prototype.clear = function () {
                                this.nb = 0;
                                this.sum = null;
                                this.sumSquares = null;
                                this._isDirty = true;
                            };
                            GaussianArrayKInferState.prototype.save = function () {
                                var sb = new java.lang.StringBuilder();
                                sb.append(this.nb + "/");
                                sb.append(this.epsilon + "/");
                                var size = this.sumSquares.length;
                                for (var i = 0; i < size; i++) {
                                    sb.append(this.sum[i] + "/");
                                }
                                for (var i = 0; i < size; i++) {
                                    sb.append(this.sumSquares[i] + "/");
                                }
                                return sb.toString();
                            };
                            GaussianArrayKInferState.prototype.load = function (payload) {
                                try {
                                    var previousState = payload.split("/");
                                    this.nb = java.lang.Integer.parseInt(previousState[0]);
                                    this.epsilon = java.lang.Double.parseDouble(previousState[1]);
                                    var size = (previousState.length - 2) / 2;
                                    this.sum = new Array();
                                    this.sumSquares = new Array();
                                    for (var i = 0; i < size; i++) {
                                        this.sum[i] = java.lang.Double.parseDouble(previousState[i + 2]);
                                    }
                                    for (var i = 0; i < size; i++) {
                                        this.sumSquares[i] = java.lang.Double.parseDouble(previousState[i + 2 + size]);
                                    }
                                }
                                catch ($ex$) {
                                    if ($ex$ instanceof java.lang.Exception) {
                                        var e = $ex$;
                                        this.sum = null;
                                        this.sumSquares = null;
                                        this.nb = 0;
                                    }
                                }
                                this._isDirty = false;
                            };
                            GaussianArrayKInferState.prototype.isDirty = function () {
                                return this._isDirty;
                            };
                            GaussianArrayKInferState.prototype.cloneState = function () {
                                var cloned = new org.kevoree.modeling.api.infer.states.GaussianArrayKInferState();
                                cloned.setNb(this.getNb());
                                if (this.nb != 0) {
                                    var newSum = new Array();
                                    var newSumSquares = new Array();
                                    for (var i = 0; i < this.sum.length; i++) {
                                        newSum[i] = this.sum[i];
                                        newSumSquares[i] = this.sumSquares[i];
                                    }
                                    cloned.setSum(newSum);
                                    cloned.setSumSquares(newSumSquares);
                                }
                                return cloned;
                            };
                            GaussianArrayKInferState.prototype.getEpsilon = function () {
                                return this.epsilon;
                            };
                            return GaussianArrayKInferState;
                        })(org.kevoree.modeling.api.KInferState);
                        states.GaussianArrayKInferState = GaussianArrayKInferState;
                        var PolynomialKInferState = (function (_super) {
                            __extends(PolynomialKInferState, _super);
                            function PolynomialKInferState() {
                                _super.apply(this, arguments);
                                this._isDirty = false;
                            }
                            PolynomialKInferState.prototype.getTimeOrigin = function () {
                                return this.timeOrigin;
                            };
                            PolynomialKInferState.prototype.setTimeOrigin = function (timeOrigin) {
                                this.timeOrigin = timeOrigin;
                            };
                            PolynomialKInferState.prototype.is_isDirty = function () {
                                return this._isDirty;
                            };
                            PolynomialKInferState.prototype.getUnit = function () {
                                return this.unit;
                            };
                            PolynomialKInferState.prototype.setUnit = function (unit) {
                                this.unit = unit;
                            };
                            PolynomialKInferState.maxError = function (coef, normalizedTimes, results) {
                                var maxErr = 0;
                                var temp = 0;
                                for (var i = 0; i < normalizedTimes.length; i++) {
                                    var val = org.kevoree.modeling.api.infer.states.PolynomialKInferState.internal_extrapolate(normalizedTimes[i], coef);
                                    temp = Math.abs(val - results[i]);
                                    if (temp > maxErr) {
                                        maxErr = temp;
                                    }
                                }
                                return maxErr;
                            };
                            PolynomialKInferState.internal_extrapolate = function (normalizedTime, coef) {
                                var result = 0;
                                var power = 1;
                                for (var j = 0; j < coef.length; j++) {
                                    result += coef[j] * power;
                                    power = power * normalizedTime;
                                }
                                return result;
                            };
                            PolynomialKInferState.prototype.save = function () {
                                var s = "";
                                var sb = new java.lang.StringBuilder();
                                sb.append(this.timeOrigin + "/");
                                sb.append(this.unit + "/");
                                if (this.weights != null) {
                                    for (var i = 0; i < this.weights.length; i++) {
                                        sb.append(this.weights[i] + "/");
                                    }
                                    s = sb.toString();
                                }
                                return s;
                            };
                            PolynomialKInferState.prototype.load = function (payload) {
                                try {
                                    var previousState = payload.split("/");
                                    if (previousState.length > 0) {
                                        this.timeOrigin = java.lang.Long.parseLong(previousState[0]);
                                        this.unit = java.lang.Long.parseLong(previousState[1]);
                                        var size = previousState.length - 2;
                                        this.weights = new Array();
                                        for (var i = 0; i < size; i++) {
                                            this.weights[i] = java.lang.Double.parseDouble(previousState[i - 2]);
                                        }
                                    }
                                }
                                catch ($ex$) {
                                    if ($ex$ instanceof java.lang.Exception) {
                                        var e = $ex$;
                                    }
                                }
                                this._isDirty = false;
                            };
                            PolynomialKInferState.prototype.isDirty = function () {
                                return this._isDirty;
                            };
                            PolynomialKInferState.prototype.set_isDirty = function (value) {
                                this._isDirty = value;
                            };
                            PolynomialKInferState.prototype.cloneState = function () {
                                var cloned = new org.kevoree.modeling.api.infer.states.PolynomialKInferState();
                                var clonearray = new Array();
                                for (var i = 0; i < this.weights.length; i++) {
                                    clonearray[i] = this.weights[i];
                                }
                                cloned.setWeights(clonearray);
                                cloned.setTimeOrigin(this.getTimeOrigin());
                                cloned.setUnit(this.getUnit());
                                return cloned;
                            };
                            PolynomialKInferState.prototype.getWeights = function () {
                                return this.weights;
                            };
                            PolynomialKInferState.prototype.setWeights = function (weights) {
                                this.weights = weights;
                                this._isDirty = true;
                            };
                            PolynomialKInferState.prototype.infer = function (time) {
                                var t = (time - this.timeOrigin) / this.unit;
                                return org.kevoree.modeling.api.infer.states.PolynomialKInferState.internal_extrapolate(t, this.weights);
                            };
                            return PolynomialKInferState;
                        })(org.kevoree.modeling.api.KInferState);
                        states.PolynomialKInferState = PolynomialKInferState;
                        var Bayesian;
                        (function (Bayesian) {
                            var BayesianSubstate = (function () {
                                function BayesianSubstate() {
                                }
                                BayesianSubstate.prototype.calculateProbability = function (feature) {
                                    throw "Abstract method";
                                };
                                BayesianSubstate.prototype.train = function (feature) {
                                    throw "Abstract method";
                                };
                                BayesianSubstate.prototype.save = function (separator) {
                                    throw "Abstract method";
                                };
                                BayesianSubstate.prototype.load = function (payload, separator) {
                                    throw "Abstract method";
                                };
                                BayesianSubstate.prototype.cloneState = function () {
                                    throw "Abstract method";
                                };
                                return BayesianSubstate;
                            })();
                            Bayesian.BayesianSubstate = BayesianSubstate;
                            var EnumSubstate = (function (_super) {
                                __extends(EnumSubstate, _super);
                                function EnumSubstate() {
                                    _super.apply(this, arguments);
                                    this.total = 0;
                                }
                                EnumSubstate.prototype.getCounter = function () {
                                    return this.counter;
                                };
                                EnumSubstate.prototype.setCounter = function (counter) {
                                    this.counter = counter;
                                };
                                EnumSubstate.prototype.getTotal = function () {
                                    return this.total;
                                };
                                EnumSubstate.prototype.setTotal = function (total) {
                                    this.total = total;
                                };
                                EnumSubstate.prototype.initialize = function (number) {
                                    this.counter = new Array();
                                };
                                EnumSubstate.prototype.calculateProbability = function (feature) {
                                    var res = feature;
                                    var p = this.counter[res];
                                    if (this.total != 0) {
                                        return p / this.total;
                                    }
                                    else {
                                        return 0;
                                    }
                                };
                                EnumSubstate.prototype.train = function (feature) {
                                    var res = feature;
                                    this.counter[res]++;
                                    this.total++;
                                };
                                EnumSubstate.prototype.save = function (separator) {
                                    if (this.counter == null || this.counter.length == 0) {
                                        return "EnumSubstate" + separator;
                                    }
                                    var sb = new java.lang.StringBuilder();
                                    sb.append("EnumSubstate" + separator);
                                    for (var i = 0; i < this.counter.length; i++) {
                                        sb.append(this.counter[i] + separator);
                                    }
                                    return sb.toString();
                                };
                                EnumSubstate.prototype.load = function (payload, separator) {
                                    var res = payload.split(separator);
                                    this.counter = new Array();
                                    this.total = 0;
                                    for (var i = 0; i < res.length; i++) {
                                        this.counter[i] = java.lang.Integer.parseInt(res[i]);
                                        this.total += this.counter[i];
                                    }
                                };
                                EnumSubstate.prototype.cloneState = function () {
                                    var cloned = new org.kevoree.modeling.api.infer.states.Bayesian.EnumSubstate();
                                    var newCounter = new Array();
                                    for (var i = 0; i < this.counter.length; i++) {
                                        newCounter[i] = this.counter[i];
                                    }
                                    cloned.setCounter(newCounter);
                                    cloned.setTotal(this.total);
                                    return cloned;
                                };
                                return EnumSubstate;
                            })(org.kevoree.modeling.api.infer.states.Bayesian.BayesianSubstate);
                            Bayesian.EnumSubstate = EnumSubstate;
                            var GaussianSubState = (function (_super) {
                                __extends(GaussianSubState, _super);
                                function GaussianSubState() {
                                    _super.apply(this, arguments);
                                    this.sumSquares = 0;
                                    this.sum = 0;
                                    this.nb = 0;
                                }
                                GaussianSubState.prototype.getSumSquares = function () {
                                    return this.sumSquares;
                                };
                                GaussianSubState.prototype.setSumSquares = function (sumSquares) {
                                    this.sumSquares = sumSquares;
                                };
                                GaussianSubState.prototype.getNb = function () {
                                    return this.nb;
                                };
                                GaussianSubState.prototype.setNb = function (nb) {
                                    this.nb = nb;
                                };
                                GaussianSubState.prototype.getSum = function () {
                                    return this.sum;
                                };
                                GaussianSubState.prototype.setSum = function (sum) {
                                    this.sum = sum;
                                };
                                GaussianSubState.prototype.calculateProbability = function (feature) {
                                    var fet = feature;
                                    var avg = this.sum / this.nb;
                                    var variances = this.sumSquares / this.nb - avg * avg;
                                    return (1 / Math.sqrt(2 * Math.PI * variances)) * Math.exp(-((fet - avg) * (fet - avg)) / (2 * variances));
                                };
                                GaussianSubState.prototype.getAverage = function () {
                                    if (this.nb != 0) {
                                        var avg = this.sum / this.nb;
                                        return avg;
                                    }
                                    else {
                                        return null;
                                    }
                                };
                                GaussianSubState.prototype.train = function (feature) {
                                    var fet = feature;
                                    this.sum += fet;
                                    this.sumSquares += fet * fet;
                                    this.nb++;
                                };
                                GaussianSubState.prototype.getVariance = function () {
                                    if (this.nb != 0) {
                                        var avg = this.sum / this.nb;
                                        var newvar = this.sumSquares / this.nb - avg * avg;
                                        return newvar;
                                    }
                                    else {
                                        return null;
                                    }
                                };
                                GaussianSubState.prototype.clear = function () {
                                    this.nb = 0;
                                    this.sum = 0;
                                    this.sumSquares = 0;
                                };
                                GaussianSubState.prototype.save = function (separator) {
                                    var sb = new java.lang.StringBuilder();
                                    sb.append("GaussianSubState" + separator);
                                    sb.append(this.nb + separator);
                                    sb.append(this.sum + separator);
                                    sb.append(this.sumSquares);
                                    return sb.toString();
                                };
                                GaussianSubState.prototype.load = function (payload, separator) {
                                    try {
                                        var previousState = payload.split(separator);
                                        this.nb = java.lang.Integer.parseInt(previousState[0]);
                                        this.sum = java.lang.Double.parseDouble(previousState[1]);
                                        this.sumSquares = java.lang.Double.parseDouble(previousState[2]);
                                    }
                                    catch ($ex$) {
                                        if ($ex$ instanceof java.lang.Exception) {
                                            var e = $ex$;
                                            this.sum = 0;
                                            this.sumSquares = 0;
                                            this.nb = 0;
                                        }
                                    }
                                };
                                GaussianSubState.prototype.cloneState = function () {
                                    var cloned = new org.kevoree.modeling.api.infer.states.Bayesian.GaussianSubState();
                                    cloned.setNb(this.getNb());
                                    cloned.setSum(this.getSum());
                                    cloned.setSumSquares(this.getSumSquares());
                                    return cloned;
                                };
                                return GaussianSubState;
                            })(org.kevoree.modeling.api.infer.states.Bayesian.BayesianSubstate);
                            Bayesian.GaussianSubState = GaussianSubState;
                        })(Bayesian = states.Bayesian || (states.Bayesian = {}));
                    })(states = infer.states || (infer.states = {}));
                })(infer = api.infer || (api.infer = {}));
                var json;
                (function (json) {
                    var JsonFormat = (function () {
                        function JsonFormat(p_view) {
                            this._view = p_view;
                        }
                        JsonFormat.prototype.save = function (model) {
                            if (org.kevoree.modeling.api.util.Checker.isDefined(model)) {
                                var wrapper = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                                org.kevoree.modeling.api.json.JsonModelSerializer.serialize(model, wrapper.initCallback());
                                return wrapper;
                            }
                            else {
                                throw new java.lang.RuntimeException("one parameter is null");
                            }
                        };
                        JsonFormat.prototype.saveRoot = function () {
                            var wrapper = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            this._view.universe().model().manager().getRoot(this._view, function (root) {
                                if (root == null) {
                                    wrapper.initCallback()(null);
                                }
                                else {
                                    org.kevoree.modeling.api.json.JsonModelSerializer.serialize(root, wrapper.initCallback());
                                }
                            });
                            return wrapper;
                        };
                        JsonFormat.prototype.load = function (payload) {
                            if (org.kevoree.modeling.api.util.Checker.isDefined(payload)) {
                                var wrapper = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                                org.kevoree.modeling.api.json.JsonModelLoader.load(this._view, payload, wrapper.initCallback());
                                return wrapper;
                            }
                            else {
                                throw new java.lang.RuntimeException("one parameter is null");
                            }
                        };
                        return JsonFormat;
                    })();
                    json.JsonFormat = JsonFormat;
                    var JsonModelLoader = (function () {
                        function JsonModelLoader() {
                        }
                        JsonModelLoader.load = function (factory, payload, callback) {
                            if (payload == null) {
                                callback(null);
                            }
                            else {
                                var metaModel = factory.universe().model().metaModel();
                                var lexer = new org.kevoree.modeling.api.json.Lexer(payload);
                                var currentToken = lexer.nextToken();
                                if (currentToken.tokenType() != org.kevoree.modeling.api.json.Type.LEFT_BRACKET) {
                                    callback(null);
                                }
                                else {
                                    var alls = new java.util.ArrayList();
                                    var content = new java.util.HashMap();
                                    var currentAttributeName = null;
                                    var arrayPayload = null;
                                    currentToken = lexer.nextToken();
                                    while (currentToken.tokenType() != org.kevoree.modeling.api.json.Type.EOF) {
                                        if (currentToken.tokenType().equals(org.kevoree.modeling.api.json.Type.LEFT_BRACKET)) {
                                            arrayPayload = new java.util.HashSet();
                                        }
                                        else {
                                            if (currentToken.tokenType().equals(org.kevoree.modeling.api.json.Type.RIGHT_BRACKET)) {
                                                content.put(currentAttributeName, arrayPayload);
                                                arrayPayload = null;
                                                currentAttributeName = null;
                                            }
                                            else {
                                                if (currentToken.tokenType().equals(org.kevoree.modeling.api.json.Type.LEFT_BRACE)) {
                                                    content = new java.util.HashMap();
                                                }
                                                else {
                                                    if (currentToken.tokenType().equals(org.kevoree.modeling.api.json.Type.RIGHT_BRACE)) {
                                                        alls.add(content);
                                                        content = new java.util.HashMap();
                                                    }
                                                    else {
                                                        if (currentToken.tokenType().equals(org.kevoree.modeling.api.json.Type.VALUE)) {
                                                            if (currentAttributeName == null) {
                                                                currentAttributeName = currentToken.value().toString();
                                                            }
                                                            else {
                                                                if (arrayPayload == null) {
                                                                    content.put(currentAttributeName, currentToken.value().toString());
                                                                    currentAttributeName = null;
                                                                }
                                                                else {
                                                                    arrayPayload.add(currentToken.value().toString());
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        currentToken = lexer.nextToken();
                                    }
                                    var rootElem = null;
                                    var mappedKeys = new java.util.HashMap();
                                    for (var i = 0; i < alls.size(); i++) {
                                        try {
                                            var elem = alls.get(i);
                                            var kid = java.lang.Long.parseLong(elem.get(org.kevoree.modeling.api.json.JsonModelSerializer.KEY_UUID).toString());
                                            mappedKeys.put(kid, factory.universe().model().manager().nextObjectKey());
                                        }
                                        catch ($ex$) {
                                            if ($ex$ instanceof java.lang.Exception) {
                                                var e = $ex$;
                                                e.printStackTrace();
                                            }
                                        }
                                    }
                                    for (var i = 0; i < alls.size(); i++) {
                                        try {
                                            var elem = alls.get(i);
                                            var kid = java.lang.Long.parseLong(elem.get(org.kevoree.modeling.api.json.JsonModelSerializer.KEY_UUID).toString());
                                            var meta = elem.get(org.kevoree.modeling.api.json.JsonModelSerializer.KEY_META).toString();
                                            var universeTree = new org.kevoree.modeling.api.rbtree.LongRBTree();
                                            universeTree.insert(factory.universe().key(), factory.now());
                                            var metaClass = metaModel.metaClass(meta);
                                            var current = factory.createProxy(metaClass, universeTree, mappedKeys.get(kid));
                                            factory.universe().model().manager().initKObject(current, factory);
                                            var raw = factory.universe().model().manager().entry(current, org.kevoree.modeling.api.data.manager.AccessMode.WRITE);
                                            var metaKeys = elem.keySet().toArray(new Array());
                                            for (var h = 0; h < metaKeys.length; h++) {
                                                var metaKey = metaKeys[h];
                                                var payload_content = elem.get(metaKey);
                                                if (metaKey.equals(org.kevoree.modeling.api.json.JsonModelSerializer.INBOUNDS_META)) {
                                                    var inbounds = new java.util.HashSet();
                                                    raw.set(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX, inbounds);
                                                    try {
                                                        var raw_keys = payload_content;
                                                        var raw_keys_p = raw_keys.toArray(new Array());
                                                        for (var hh = 0; hh < raw_keys_p.length; hh++) {
                                                            try {
                                                                var converted = java.lang.Long.parseLong(raw_keys_p[hh]);
                                                                if (mappedKeys.containsKey(converted)) {
                                                                    converted = mappedKeys.get(converted);
                                                                }
                                                                inbounds.add(converted);
                                                            }
                                                            catch ($ex$) {
                                                                if ($ex$ instanceof java.lang.Exception) {
                                                                    var e = $ex$;
                                                                    e.printStackTrace();
                                                                }
                                                            }
                                                        }
                                                    }
                                                    catch ($ex$) {
                                                        if ($ex$ instanceof java.lang.Exception) {
                                                            var e = $ex$;
                                                            e.printStackTrace();
                                                        }
                                                    }
                                                }
                                                else {
                                                    if (metaKey.equals(org.kevoree.modeling.api.json.JsonModelSerializer.PARENT_META)) {
                                                        try {
                                                            var raw_k = java.lang.Long.parseLong(payload_content.toString());
                                                            if (mappedKeys.containsKey(raw_k)) {
                                                                raw_k = mappedKeys.get(raw_k);
                                                            }
                                                            raw.set(org.kevoree.modeling.api.data.manager.Index.PARENT_INDEX, raw_k);
                                                        }
                                                        catch ($ex$) {
                                                            if ($ex$ instanceof java.lang.Exception) {
                                                                var e = $ex$;
                                                                e.printStackTrace();
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (metaKey.equals(org.kevoree.modeling.api.json.JsonModelSerializer.PARENT_REF_META)) {
                                                            try {
                                                                var parentRef_payload = payload_content.toString();
                                                                var elems = parentRef_payload.split(org.kevoree.modeling.api.data.manager.JsonRaw.SEP);
                                                                if (elems.length == 2) {
                                                                    var foundMeta = metaModel.metaClass(elems[0].trim());
                                                                    if (foundMeta != null) {
                                                                        var metaReference = foundMeta.metaReference(elems[1].trim());
                                                                        if (metaReference != null) {
                                                                            raw.set(org.kevoree.modeling.api.data.manager.Index.REF_IN_PARENT_INDEX, metaReference);
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                            catch ($ex$) {
                                                                if ($ex$ instanceof java.lang.Exception) {
                                                                    var e = $ex$;
                                                                    e.printStackTrace();
                                                                }
                                                            }
                                                        }
                                                        else {
                                                            if (metaKey.equals(org.kevoree.modeling.api.json.JsonModelSerializer.KEY_ROOT)) {
                                                                if ("true".equals(payload_content)) {
                                                                    rootElem = current;
                                                                }
                                                            }
                                                            else {
                                                                if (metaKey.equals(org.kevoree.modeling.api.json.JsonModelSerializer.KEY_META)) {
                                                                }
                                                                else {
                                                                    var metaAttribute = metaClass.metaAttribute(metaKey);
                                                                    var metaReference = metaClass.metaReference(metaKey);
                                                                    if (payload_content != null) {
                                                                        if (metaAttribute != null) {
                                                                            raw.set(metaAttribute.index(), metaAttribute.strategy().load(payload_content.toString(), metaAttribute, factory.now()));
                                                                        }
                                                                        else {
                                                                            if (metaReference != null) {
                                                                                if (metaReference.single()) {
                                                                                    try {
                                                                                        var converted = java.lang.Long.parseLong(payload_content.toString());
                                                                                        if (mappedKeys.containsKey(converted)) {
                                                                                            converted = mappedKeys.get(converted);
                                                                                        }
                                                                                        raw.set(metaReference.index(), converted);
                                                                                    }
                                                                                    catch ($ex$) {
                                                                                        if ($ex$ instanceof java.lang.Exception) {
                                                                                            var e = $ex$;
                                                                                            e.printStackTrace();
                                                                                        }
                                                                                    }
                                                                                }
                                                                                else {
                                                                                    try {
                                                                                        var convertedRaw = new java.util.HashSet();
                                                                                        var plainRawSet = payload_content;
                                                                                        var plainRawList = plainRawSet.toArray(new Array());
                                                                                        for (var l = 0; l < plainRawList.length; l++) {
                                                                                            var plainRaw = plainRawList[l];
                                                                                            try {
                                                                                                var converted = java.lang.Long.parseLong(plainRaw);
                                                                                                if (mappedKeys.containsKey(converted)) {
                                                                                                    converted = mappedKeys.get(converted);
                                                                                                }
                                                                                                convertedRaw.add(converted);
                                                                                            }
                                                                                            catch ($ex$) {
                                                                                                if ($ex$ instanceof java.lang.Exception) {
                                                                                                    var e = $ex$;
                                                                                                    e.printStackTrace();
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                        raw.set(metaReference.index(), convertedRaw);
                                                                                    }
                                                                                    catch ($ex$) {
                                                                                        if ($ex$ instanceof java.lang.Exception) {
                                                                                            var e = $ex$;
                                                                                            e.printStackTrace();
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        catch ($ex$) {
                                            if ($ex$ instanceof java.lang.Exception) {
                                                var e = $ex$;
                                                e.printStackTrace();
                                            }
                                        }
                                    }
                                    if (rootElem != null) {
                                        factory.setRoot(rootElem).then(function (throwable) {
                                            if (callback != null) {
                                                callback(throwable);
                                            }
                                        });
                                    }
                                    else {
                                        if (callback != null) {
                                            callback(null);
                                        }
                                    }
                                }
                            }
                        };
                        return JsonModelLoader;
                    })();
                    json.JsonModelLoader = JsonModelLoader;
                    var JsonModelSerializer = (function () {
                        function JsonModelSerializer() {
                        }
                        JsonModelSerializer.serialize = function (model, callback) {
                            model.view().getRoot().then(function (rootObj) {
                                var isRoot = false;
                                if (rootObj != null) {
                                    isRoot = rootObj.uuid() == model.uuid();
                                }
                                var builder = new java.lang.StringBuilder();
                                builder.append("[\n");
                                org.kevoree.modeling.api.json.JsonModelSerializer.printJSON(model, builder, isRoot);
                                model.visit(function (elem) {
                                    var isRoot2 = false;
                                    if (rootObj != null) {
                                        isRoot2 = rootObj.uuid() == elem.uuid();
                                    }
                                    builder.append(",\n");
                                    try {
                                        org.kevoree.modeling.api.json.JsonModelSerializer.printJSON(elem, builder, isRoot2);
                                    }
                                    catch ($ex$) {
                                        if ($ex$ instanceof java.lang.Exception) {
                                            var e = $ex$;
                                            e.printStackTrace();
                                            builder.append("{}");
                                        }
                                    }
                                    return org.kevoree.modeling.api.VisitResult.CONTINUE;
                                }, org.kevoree.modeling.api.VisitRequest.ALL).then(function (throwable) {
                                    builder.append("\n]\n");
                                    callback(builder.toString());
                                });
                            });
                        };
                        JsonModelSerializer.printJSON = function (elem, builder, isRoot) {
                            if (elem != null) {
                                var raw = elem.view().universe().model().manager().entry(elem, org.kevoree.modeling.api.data.manager.AccessMode.READ);
                                if (raw != null) {
                                    builder.append(org.kevoree.modeling.api.data.manager.JsonRaw.encode(raw, elem.uuid(), elem.metaClass(), false, isRoot));
                                }
                            }
                        };
                        JsonModelSerializer.KEY_META = "@meta";
                        JsonModelSerializer.KEY_UUID = "@uuid";
                        JsonModelSerializer.KEY_ROOT = "@root";
                        JsonModelSerializer.PARENT_META = "@parent";
                        JsonModelSerializer.PARENT_REF_META = "@ref";
                        JsonModelSerializer.INBOUNDS_META = "@inbounds";
                        JsonModelSerializer.TIME_META = "@time";
                        JsonModelSerializer.DIM_META = "@universe";
                        return JsonModelSerializer;
                    })();
                    json.JsonModelSerializer = JsonModelSerializer;
                    var JsonString = (function () {
                        function JsonString() {
                        }
                        JsonString.encodeBuffer = function (buffer, chain) {
                            if (chain == null) {
                                return;
                            }
                            var i = 0;
                            while (i < chain.length) {
                                var ch = chain.charAt(i);
                                if (ch == '"') {
                                    buffer.append(JsonString.ESCAPE_CHAR);
                                    buffer.append('"');
                                }
                                else {
                                    if (ch == JsonString.ESCAPE_CHAR) {
                                        buffer.append(JsonString.ESCAPE_CHAR);
                                        buffer.append(JsonString.ESCAPE_CHAR);
                                    }
                                    else {
                                        if (ch == '\n') {
                                            buffer.append(JsonString.ESCAPE_CHAR);
                                            buffer.append('n');
                                        }
                                        else {
                                            if (ch == '\r') {
                                                buffer.append(JsonString.ESCAPE_CHAR);
                                                buffer.append('r');
                                            }
                                            else {
                                                if (ch == '\t') {
                                                    buffer.append(JsonString.ESCAPE_CHAR);
                                                    buffer.append('t');
                                                }
                                                else {
                                                    if (ch == '\u2028') {
                                                        buffer.append(JsonString.ESCAPE_CHAR);
                                                        buffer.append('u');
                                                        buffer.append('2');
                                                        buffer.append('0');
                                                        buffer.append('2');
                                                        buffer.append('8');
                                                    }
                                                    else {
                                                        if (ch == '\u2029') {
                                                            buffer.append(JsonString.ESCAPE_CHAR);
                                                            buffer.append('u');
                                                            buffer.append('2');
                                                            buffer.append('0');
                                                            buffer.append('2');
                                                            buffer.append('9');
                                                        }
                                                        else {
                                                            buffer.append(ch);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                i = i + 1;
                            }
                        };
                        JsonString.encode = function (chain) {
                            var sb = new java.lang.StringBuilder();
                            org.kevoree.modeling.api.json.JsonString.encodeBuffer(sb, chain);
                            return sb.toString();
                        };
                        JsonString.unescape = function (src) {
                            if (src == null) {
                                return null;
                            }
                            if (src.length == 0) {
                                return src;
                            }
                            var builder = null;
                            var i = 0;
                            while (i < src.length) {
                                var current = src.charAt(i);
                                if (current == JsonString.ESCAPE_CHAR) {
                                    if (builder == null) {
                                        builder = new java.lang.StringBuilder();
                                        builder.append(src.substring(0, i));
                                    }
                                    i++;
                                    var current2 = src.charAt(i);
                                    switch (current2) {
                                        case '"':
                                            builder.append('\"');
                                            break;
                                        case '\\':
                                            builder.append(current2);
                                            break;
                                        case '/':
                                            builder.append(current2);
                                            break;
                                        case 'b':
                                            builder.append('\b');
                                            break;
                                        case 'f':
                                            builder.append('\f');
                                            break;
                                        case 'n':
                                            builder.append('\n');
                                            break;
                                        case 'r':
                                            builder.append('\r');
                                            break;
                                        case 't':
                                            builder.append('\t');
                                            break;
                                    }
                                }
                                else {
                                    if (builder != null) {
                                        builder = builder.append(current);
                                    }
                                }
                                i++;
                            }
                            if (builder != null) {
                                return builder.toString();
                            }
                            else {
                                return src;
                            }
                        };
                        JsonString.ESCAPE_CHAR = '\\';
                        return JsonString;
                    })();
                    json.JsonString = JsonString;
                    var JsonToken = (function () {
                        function JsonToken(p_tokenType, p_value) {
                            this._tokenType = p_tokenType;
                            this._value = p_value;
                        }
                        JsonToken.prototype.toString = function () {
                            var v;
                            if (this._value != null) {
                                v = " (" + this._value + ")";
                            }
                            else {
                                v = "";
                            }
                            var result = this._tokenType.toString() + v;
                            return result;
                        };
                        JsonToken.prototype.tokenType = function () {
                            return this._tokenType;
                        };
                        JsonToken.prototype.value = function () {
                            return this._value;
                        };
                        return JsonToken;
                    })();
                    json.JsonToken = JsonToken;
                    var Lexer = (function () {
                        function Lexer(payload) {
                            this.BOOLEAN_LETTERS = null;
                            this.DIGIT = null;
                            this.index = 0;
                            this.bytes = payload;
                            this.EOF = new org.kevoree.modeling.api.json.JsonToken(org.kevoree.modeling.api.json.Type.EOF, null);
                        }
                        Lexer.prototype.isSpace = function (c) {
                            return c == ' ' || c == '\r' || c == '\n' || c == '\t';
                        };
                        Lexer.prototype.nextChar = function () {
                            return this.bytes.charAt(this.index++);
                        };
                        Lexer.prototype.peekChar = function () {
                            return this.bytes.charAt(this.index);
                        };
                        Lexer.prototype.isDone = function () {
                            return this.index >= this.bytes.length;
                        };
                        Lexer.prototype.isBooleanLetter = function (c) {
                            if (this.BOOLEAN_LETTERS == null) {
                                this.BOOLEAN_LETTERS = new java.util.HashSet();
                                this.BOOLEAN_LETTERS.add('f');
                                this.BOOLEAN_LETTERS.add('a');
                                this.BOOLEAN_LETTERS.add('l');
                                this.BOOLEAN_LETTERS.add('s');
                                this.BOOLEAN_LETTERS.add('e');
                                this.BOOLEAN_LETTERS.add('t');
                                this.BOOLEAN_LETTERS.add('r');
                                this.BOOLEAN_LETTERS.add('u');
                            }
                            return this.BOOLEAN_LETTERS.contains(c);
                        };
                        Lexer.prototype.isDigit = function (c) {
                            if (this.DIGIT == null) {
                                this.DIGIT = new java.util.HashSet();
                                this.DIGIT.add('0');
                                this.DIGIT.add('1');
                                this.DIGIT.add('2');
                                this.DIGIT.add('3');
                                this.DIGIT.add('4');
                                this.DIGIT.add('5');
                                this.DIGIT.add('6');
                                this.DIGIT.add('7');
                                this.DIGIT.add('8');
                                this.DIGIT.add('9');
                            }
                            return this.DIGIT.contains(c);
                        };
                        Lexer.prototype.isValueLetter = function (c) {
                            return c == '-' || c == '+' || c == '.' || this.isDigit(c) || this.isBooleanLetter(c);
                        };
                        Lexer.prototype.nextToken = function () {
                            if (this.isDone()) {
                                return this.EOF;
                            }
                            var tokenType = org.kevoree.modeling.api.json.Type.EOF;
                            var c = this.nextChar();
                            var currentValue = new java.lang.StringBuilder();
                            var jsonValue = null;
                            while (!this.isDone() && this.isSpace(c)) {
                                c = this.nextChar();
                            }
                            if ('"' == c) {
                                tokenType = org.kevoree.modeling.api.json.Type.VALUE;
                                if (!this.isDone()) {
                                    c = this.nextChar();
                                    while (this.index < this.bytes.length && c != '"') {
                                        currentValue.append(c);
                                        if (c == '\\' && this.index < this.bytes.length) {
                                            c = this.nextChar();
                                            currentValue.append(c);
                                        }
                                        c = this.nextChar();
                                    }
                                    jsonValue = currentValue.toString();
                                }
                            }
                            else {
                                if ('{' == c) {
                                    tokenType = org.kevoree.modeling.api.json.Type.LEFT_BRACE;
                                }
                                else {
                                    if ('}' == c) {
                                        tokenType = org.kevoree.modeling.api.json.Type.RIGHT_BRACE;
                                    }
                                    else {
                                        if ('[' == c) {
                                            tokenType = org.kevoree.modeling.api.json.Type.LEFT_BRACKET;
                                        }
                                        else {
                                            if (']' == c) {
                                                tokenType = org.kevoree.modeling.api.json.Type.RIGHT_BRACKET;
                                            }
                                            else {
                                                if (':' == c) {
                                                    tokenType = org.kevoree.modeling.api.json.Type.COLON;
                                                }
                                                else {
                                                    if (',' == c) {
                                                        tokenType = org.kevoree.modeling.api.json.Type.COMMA;
                                                    }
                                                    else {
                                                        if (!this.isDone()) {
                                                            while (this.isValueLetter(c)) {
                                                                currentValue.append(c);
                                                                if (!this.isValueLetter(this.peekChar())) {
                                                                    break;
                                                                }
                                                                else {
                                                                    c = this.nextChar();
                                                                }
                                                            }
                                                            var v = currentValue.toString();
                                                            if ("true".equals(v.toLowerCase())) {
                                                                jsonValue = true;
                                                            }
                                                            else {
                                                                if ("false".equals(v.toLowerCase())) {
                                                                    jsonValue = false;
                                                                }
                                                                else {
                                                                    jsonValue = v.toLowerCase();
                                                                }
                                                            }
                                                            tokenType = org.kevoree.modeling.api.json.Type.VALUE;
                                                        }
                                                        else {
                                                            tokenType = org.kevoree.modeling.api.json.Type.EOF;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return new org.kevoree.modeling.api.json.JsonToken(tokenType, jsonValue);
                        };
                        Lexer.DEFAULT_BUFFER_SIZE = 1024 * 4;
                        return Lexer;
                    })();
                    json.Lexer = Lexer;
                    var Type = (function () {
                        function Type(p_value) {
                            this._value = p_value;
                        }
                        Type.prototype.equals = function (other) {
                            return this == other;
                        };
                        Type.values = function () {
                            return Type._TypeVALUES;
                        };
                        Type.VALUE = new Type(0);
                        Type.LEFT_BRACE = new Type(1);
                        Type.RIGHT_BRACE = new Type(2);
                        Type.LEFT_BRACKET = new Type(3);
                        Type.RIGHT_BRACKET = new Type(4);
                        Type.COMMA = new Type(5);
                        Type.COLON = new Type(6);
                        Type.EOF = new Type(42);
                        Type._TypeVALUES = [
                            Type.VALUE,
                            Type.LEFT_BRACE,
                            Type.RIGHT_BRACE,
                            Type.LEFT_BRACKET,
                            Type.RIGHT_BRACKET,
                            Type.COMMA,
                            Type.COLON,
                            Type.EOF
                        ];
                        return Type;
                    })();
                    json.Type = Type;
                })(json = api.json || (api.json = {}));
                var meta;
                (function (meta) {
                    var MetaInferClass = (function () {
                        function MetaInferClass() {
                            this._attributes = null;
                            this._references = new Array();
                            this._operations = new Array();
                            this._attributes = new Array();
                            this._attributes[0] = new org.kevoree.modeling.api.abs.AbstractMetaAttribute("RAW", org.kevoree.modeling.api.data.manager.Index.RESERVED_INDEXES, -1, false, org.kevoree.modeling.api.meta.PrimitiveMetaTypes.STRING, new org.kevoree.modeling.api.extrapolation.DiscreteExtrapolation());
                            this._attributes[1] = new org.kevoree.modeling.api.abs.AbstractMetaAttribute("CACHE", org.kevoree.modeling.api.data.manager.Index.RESERVED_INDEXES + 1, -1, false, org.kevoree.modeling.api.meta.PrimitiveMetaTypes.TRANSIENT, new org.kevoree.modeling.api.extrapolation.DiscreteExtrapolation());
                        }
                        MetaInferClass.getInstance = function () {
                            if (MetaInferClass._INSTANCE == null) {
                                MetaInferClass._INSTANCE = new org.kevoree.modeling.api.meta.MetaInferClass();
                            }
                            return MetaInferClass._INSTANCE;
                        };
                        MetaInferClass.prototype.getRaw = function () {
                            return this._attributes[0];
                        };
                        MetaInferClass.prototype.getCache = function () {
                            return this._attributes[1];
                        };
                        MetaInferClass.prototype.metaAttributes = function () {
                            return this._attributes;
                        };
                        MetaInferClass.prototype.metaReferences = function () {
                            return this._references;
                        };
                        MetaInferClass.prototype.metaOperations = function () {
                            return this._operations;
                        };
                        MetaInferClass.prototype.metaAttribute = function (name) {
                            return null;
                        };
                        MetaInferClass.prototype.metaReference = function (name) {
                            return null;
                        };
                        MetaInferClass.prototype.metaOperation = function (name) {
                            return null;
                        };
                        MetaInferClass.prototype.metaName = function () {
                            return "KInfer";
                        };
                        MetaInferClass.prototype.index = function () {
                            return -1;
                        };
                        MetaInferClass._INSTANCE = null;
                        return MetaInferClass;
                    })();
                    meta.MetaInferClass = MetaInferClass;
                    var PrimitiveMetaTypes = (function () {
                        function PrimitiveMetaTypes() {
                        }
                        PrimitiveMetaTypes.STRING = new org.kevoree.modeling.api.abs.AbstractKDataType("STRING", false);
                        PrimitiveMetaTypes.LONG = new org.kevoree.modeling.api.abs.AbstractKDataType("LONG", false);
                        PrimitiveMetaTypes.INT = new org.kevoree.modeling.api.abs.AbstractKDataType("INT", false);
                        PrimitiveMetaTypes.BOOL = new org.kevoree.modeling.api.abs.AbstractKDataType("BOOL", false);
                        PrimitiveMetaTypes.SHORT = new org.kevoree.modeling.api.abs.AbstractKDataType("SHORT", false);
                        PrimitiveMetaTypes.DOUBLE = new org.kevoree.modeling.api.abs.AbstractKDataType("DOUBLE", false);
                        PrimitiveMetaTypes.FLOAT = new org.kevoree.modeling.api.abs.AbstractKDataType("FLOAT", false);
                        PrimitiveMetaTypes.TRANSIENT = new org.kevoree.modeling.api.abs.AbstractKDataType("TRANSIENT", false);
                        return PrimitiveMetaTypes;
                    })();
                    meta.PrimitiveMetaTypes = PrimitiveMetaTypes;
                })(meta = api.meta || (api.meta = {}));
                var msg;
                (function (msg) {
                    var KEventMessage = (function () {
                        function KEventMessage() {
                        }
                        KEventMessage.prototype.json = function () {
                            var builder = new java.lang.StringBuilder();
                            return builder.toString();
                        };
                        KEventMessage.prototype.type = function () {
                            return 0;
                        };
                        return KEventMessage;
                    })();
                    msg.KEventMessage = KEventMessage;
                    var KMessageLoader = (function () {
                        function KMessageLoader() {
                        }
                        KMessageLoader.load = function (payload) {
                            return null;
                        };
                        return KMessageLoader;
                    })();
                    msg.KMessageLoader = KMessageLoader;
                    var KOperationCallMessage = (function () {
                        function KOperationCallMessage() {
                        }
                        KOperationCallMessage.prototype.json = function () {
                            return null;
                        };
                        KOperationCallMessage.prototype.type = function () {
                            return 0;
                        };
                        return KOperationCallMessage;
                    })();
                    msg.KOperationCallMessage = KOperationCallMessage;
                    var KOperationResultMessage = (function () {
                        function KOperationResultMessage() {
                        }
                        KOperationResultMessage.prototype.json = function () {
                            return null;
                        };
                        KOperationResultMessage.prototype.type = function () {
                            return 0;
                        };
                        return KOperationResultMessage;
                    })();
                    msg.KOperationResultMessage = KOperationResultMessage;
                })(msg = api.msg || (api.msg = {}));
                var operation;
                (function (operation) {
                    var DefaultModelCompare = (function () {
                        function DefaultModelCompare() {
                        }
                        DefaultModelCompare.diff = function (origin, target, callback) {
                            org.kevoree.modeling.api.operation.DefaultModelCompare.internal_diff(origin, target, false, false, callback);
                        };
                        DefaultModelCompare.merge = function (origin, target, callback) {
                            org.kevoree.modeling.api.operation.DefaultModelCompare.internal_diff(origin, target, false, true, callback);
                        };
                        DefaultModelCompare.intersection = function (origin, target, callback) {
                            org.kevoree.modeling.api.operation.DefaultModelCompare.internal_diff(origin, target, true, false, callback);
                        };
                        DefaultModelCompare.internal_diff = function (origin, target, inter, merge, callback) {
                            var traces = new java.util.ArrayList();
                            var tracesRef = new java.util.ArrayList();
                            var objectsMap = new java.util.HashMap();
                            traces.addAll(org.kevoree.modeling.api.operation.DefaultModelCompare.internal_createTraces(origin, target, inter, merge, false, true));
                            tracesRef.addAll(org.kevoree.modeling.api.operation.DefaultModelCompare.internal_createTraces(origin, target, inter, merge, true, false));
                            origin.visit(function (elem) {
                                objectsMap.put(elem.uuid(), elem);
                                return org.kevoree.modeling.api.VisitResult.CONTINUE;
                            }, org.kevoree.modeling.api.VisitRequest.CONTAINED).then(function (throwable) {
                                if (throwable != null) {
                                    throwable.printStackTrace();
                                    callback(null);
                                }
                                else {
                                    target.visit(function (elem) {
                                        var childUUID = elem.uuid();
                                        if (objectsMap.containsKey(childUUID)) {
                                            if (inter) {
                                                traces.add(new org.kevoree.modeling.api.trace.ModelNewTrace(elem.uuid(), elem.metaClass()));
                                                traces.add(new org.kevoree.modeling.api.trace.ModelAddTrace(elem.parentUuid(), elem.referenceInParent(), elem.uuid()));
                                            }
                                            traces.addAll(org.kevoree.modeling.api.operation.DefaultModelCompare.internal_createTraces(objectsMap.get(childUUID), elem, inter, merge, false, true));
                                            tracesRef.addAll(org.kevoree.modeling.api.operation.DefaultModelCompare.internal_createTraces(objectsMap.get(childUUID), elem, inter, merge, true, false));
                                            objectsMap.remove(childUUID);
                                        }
                                        else {
                                            if (!inter) {
                                                traces.add(new org.kevoree.modeling.api.trace.ModelNewTrace(elem.uuid(), elem.metaClass()));
                                                traces.add(new org.kevoree.modeling.api.trace.ModelAddTrace(elem.parentUuid(), elem.referenceInParent(), elem.uuid()));
                                                traces.addAll(org.kevoree.modeling.api.operation.DefaultModelCompare.internal_createTraces(elem, elem, true, merge, false, true));
                                                tracesRef.addAll(org.kevoree.modeling.api.operation.DefaultModelCompare.internal_createTraces(elem, elem, true, merge, true, false));
                                            }
                                        }
                                        return org.kevoree.modeling.api.VisitResult.CONTINUE;
                                    }, org.kevoree.modeling.api.VisitRequest.CONTAINED).then(function (throwable) {
                                        if (throwable != null) {
                                            throwable.printStackTrace();
                                            callback(null);
                                        }
                                        else {
                                            traces.addAll(tracesRef);
                                            if (!inter && !merge) {
                                                var diffChildKeys = objectsMap.keySet().toArray(new Array());
                                                for (var i = 0; i < diffChildKeys.length; i++) {
                                                    var diffChildKey = diffChildKeys[i];
                                                    var diffChild = objectsMap.get(diffChildKey);
                                                    var src = diffChild.parentUuid();
                                                    traces.add(new org.kevoree.modeling.api.trace.ModelRemoveTrace(src, diffChild.referenceInParent(), diffChild.uuid()));
                                                }
                                            }
                                            callback(new org.kevoree.modeling.api.trace.TraceSequence().populate(traces));
                                        }
                                    });
                                }
                            });
                        };
                        DefaultModelCompare.internal_createTraces = function (current, sibling, inter, merge, references, attributes) {
                            var traces = new java.util.ArrayList();
                            var values = new java.util.HashMap();
                            if (attributes) {
                                if (current != null) {
                                    current.visitAttributes(function (metaAttribute, value) {
                                        if (value == null) {
                                            values.put(metaAttribute, null);
                                        }
                                        else {
                                            values.put(metaAttribute, value.toString());
                                        }
                                    });
                                }
                                if (sibling != null) {
                                    sibling.visitAttributes(function (metaAttribute, value) {
                                        var flatAtt2 = null;
                                        if (value != null) {
                                            flatAtt2 = value.toString();
                                        }
                                        var flatAtt1 = values.get(metaAttribute);
                                        var isEquals = true;
                                        if (flatAtt1 == null) {
                                            if (flatAtt2 == null) {
                                                isEquals = true;
                                            }
                                            else {
                                                isEquals = false;
                                            }
                                        }
                                        else {
                                            isEquals = flatAtt1.equals(flatAtt2);
                                        }
                                        if (isEquals) {
                                            if (inter) {
                                                traces.add(new org.kevoree.modeling.api.trace.ModelSetTrace(current.uuid(), metaAttribute, flatAtt2));
                                            }
                                        }
                                        else {
                                            if (!inter) {
                                                traces.add(new org.kevoree.modeling.api.trace.ModelSetTrace(current.uuid(), metaAttribute, flatAtt2));
                                            }
                                        }
                                        values.remove(metaAttribute);
                                    });
                                }
                                if (!inter && !merge && !values.isEmpty()) {
                                    var mettaAttributes = values.keySet().toArray(new Array());
                                    for (var i = 0; i < mettaAttributes.length; i++) {
                                        var hashLoopRes = mettaAttributes[i];
                                        traces.add(new org.kevoree.modeling.api.trace.ModelSetTrace(current.uuid(), hashLoopRes, null));
                                        values.remove(hashLoopRes);
                                    }
                                }
                            }
                            var valuesRef = new java.util.HashMap();
                            if (references) {
                                for (var i = 0; i < current.metaClass().metaReferences().length; i++) {
                                    var reference = current.metaClass().metaReferences()[i];
                                    var payload = current.view().universe().model().manager().entry(current, org.kevoree.modeling.api.data.manager.AccessMode.READ).get(reference.index());
                                    valuesRef.put(reference, payload);
                                }
                                if (sibling != null) {
                                    for (var i = 0; i < sibling.metaClass().metaReferences().length; i++) {
                                        var reference = sibling.metaClass().metaReferences()[i];
                                        var payload2 = sibling.view().universe().model().manager().entry(sibling, org.kevoree.modeling.api.data.manager.AccessMode.READ).get(reference.index());
                                        var payload1 = valuesRef.get(reference);
                                        if (reference.single()) {
                                            var isEquals = true;
                                            if (payload1 == null) {
                                                if (payload2 == null) {
                                                    isEquals = true;
                                                }
                                                else {
                                                    isEquals = false;
                                                }
                                            }
                                            else {
                                                isEquals = payload1.equals(payload2);
                                            }
                                            if (isEquals) {
                                                if (inter) {
                                                    if (payload2 != null) {
                                                        traces.add(new org.kevoree.modeling.api.trace.ModelAddTrace(current.uuid(), reference, payload2));
                                                    }
                                                }
                                            }
                                            else {
                                                if (!inter) {
                                                    traces.add(new org.kevoree.modeling.api.trace.ModelAddTrace(current.uuid(), reference, payload2));
                                                }
                                            }
                                        }
                                        else {
                                            if (payload1 == null && payload2 != null) {
                                                var siblingToAdd = payload2.toArray(new Array());
                                                for (var j = 0; j < siblingToAdd.length; j++) {
                                                    var siblingElem = siblingToAdd[j];
                                                    if (!inter) {
                                                        traces.add(new org.kevoree.modeling.api.trace.ModelAddTrace(current.uuid(), reference, siblingElem));
                                                    }
                                                }
                                            }
                                            else {
                                                if (payload1 != null) {
                                                    var currentPaths = payload1.toArray(new Array());
                                                    for (var j = 0; j < currentPaths.length; j++) {
                                                        var currentPath = currentPaths[j];
                                                        var isFound = false;
                                                        if (payload2 != null) {
                                                            var siblingPaths = payload2;
                                                            isFound = siblingPaths.contains(currentPath);
                                                        }
                                                        if (isFound) {
                                                            if (inter) {
                                                                traces.add(new org.kevoree.modeling.api.trace.ModelAddTrace(current.uuid(), reference, currentPath));
                                                            }
                                                        }
                                                        else {
                                                            if (!inter) {
                                                                traces.add(new org.kevoree.modeling.api.trace.ModelRemoveTrace(current.uuid(), reference, currentPath));
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        valuesRef.remove(reference);
                                    }
                                    if (!inter && !merge && !valuesRef.isEmpty()) {
                                        var metaReferences = valuesRef.keySet().toArray(new Array());
                                        for (var i = 0; i < metaReferences.length; i++) {
                                            var hashLoopResRef = metaReferences[i];
                                            var payload = valuesRef.get(hashLoopResRef);
                                            if (payload != null) {
                                                if (payload instanceof java.util.Set) {
                                                    var toRemoveSet = payload.toArray(new Array());
                                                    for (var j = 0; j < toRemoveSet.length; j++) {
                                                        var toRemovePath = toRemoveSet[j];
                                                        traces.add(new org.kevoree.modeling.api.trace.ModelRemoveTrace(current.uuid(), hashLoopResRef, toRemovePath));
                                                    }
                                                }
                                                else {
                                                    traces.add(new org.kevoree.modeling.api.trace.ModelRemoveTrace(current.uuid(), hashLoopResRef, payload));
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return traces;
                        };
                        return DefaultModelCompare;
                    })();
                    operation.DefaultModelCompare = DefaultModelCompare;
                })(operation = api.operation || (api.operation = {}));
                var polynomial;
                (function (polynomial) {
                    var doublepolynomial;
                    (function (doublepolynomial) {
                        var DoublePolynomialModel = (function () {
                            function DoublePolynomialModel(p_timeOrigin, p_toleratedError, p_maxDegree, p_prioritization) {
                                this._isDirty = false;
                                this._polyTime = new org.kevoree.modeling.api.polynomial.doublepolynomial.TimePolynomial(p_timeOrigin);
                                this._prioritization = p_prioritization;
                                this._maxDegree = p_maxDegree;
                                this._toleratedError = p_toleratedError;
                            }
                            DoublePolynomialModel.prototype.degree = function () {
                                if (this._weights == null) {
                                    return -1;
                                }
                                else {
                                    return this._weights.length - 1;
                                }
                            };
                            DoublePolynomialModel.prototype.timeOrigin = function () {
                                return this._polyTime.timeOrigin();
                            };
                            DoublePolynomialModel.prototype.comparePolynome = function (p2, err) {
                                if (this._weights.length != p2._weights.length) {
                                    return false;
                                }
                                for (var i = 0; i < this._weights.length; i++) {
                                    if (Math.abs(this._weights[i] - this._weights[i]) > err) {
                                        return false;
                                    }
                                }
                                return true;
                            };
                            DoublePolynomialModel.prototype.extrapolate = function (time) {
                                return this.test_extrapolate(this._polyTime.denormalize(time), this._weights);
                            };
                            DoublePolynomialModel.prototype.insert = function (time, value) {
                                if (this._weights == null) {
                                    this.internal_feed(time, value);
                                    this._isDirty = true;
                                    return true;
                                }
                                if (this._polyTime.insert(time)) {
                                    var maxError = this.maxErr();
                                    if (Math.abs(this.extrapolate(time) - value) <= maxError) {
                                        return true;
                                    }
                                    var deg = this.degree();
                                    var newMaxDegree = Math.min(this._polyTime.nbSamples() - 1, this._maxDegree);
                                    if (deg < newMaxDegree) {
                                        deg++;
                                        var ss = Math.min(deg * 2, this._polyTime.nbSamples() - 1);
                                        var times = new Array();
                                        var values = new Array();
                                        var current = this._polyTime.nbSamples() - 1;
                                        for (var i = 0; i < ss; i++) {
                                            times[i] = this._polyTime.getNormalizedTime((i * current / ss));
                                            values[i] = this.test_extrapolate(times[i], this._weights);
                                        }
                                        times[ss] = this._polyTime.denormalize(time);
                                        values[ss] = value;
                                        var pf = new org.kevoree.modeling.api.polynomial.util.PolynomialFitEjml(deg);
                                        pf.fit(times, values);
                                        if (this.maxError(pf.getCoef(), time, value) <= maxError) {
                                            this._weights = new Array();
                                            for (var i = 0; i < pf.getCoef().length; i++) {
                                                this._weights[i] = pf.getCoef()[i];
                                            }
                                            this._isDirty = true;
                                            return true;
                                        }
                                    }
                                    this._polyTime.removeLast();
                                    return false;
                                }
                                else {
                                    return false;
                                }
                            };
                            DoublePolynomialModel.prototype.lastIndex = function () {
                                return this._polyTime.lastIndex();
                            };
                            DoublePolynomialModel.prototype.save = function () {
                                var builder = new java.lang.StringBuilder();
                                for (var i = 0; i < this._weights.length; i++) {
                                    if (i != 0) {
                                        builder.append(DoublePolynomialModel.sepW);
                                    }
                                    builder.append(this._weights[i] + "");
                                }
                                builder.append(DoublePolynomialModel.sep);
                                builder.append(this._polyTime.save());
                                this._isDirty = false;
                                return builder.toString();
                            };
                            DoublePolynomialModel.prototype.load = function (payload) {
                                var parts = payload.split(DoublePolynomialModel.sep);
                                if (parts.length == 2) {
                                    var welems = parts[0].split(DoublePolynomialModel.sepW);
                                    this._weights = new Array();
                                    for (var i = 0; i < welems.length; i++) {
                                        this._weights[i] = java.lang.Double.parseDouble(welems[i]);
                                    }
                                    this._polyTime.load(parts[1]);
                                }
                                else {
                                    System.err.println("Bad Polynomial String " + payload);
                                }
                                this._isDirty = false;
                            };
                            DoublePolynomialModel.prototype.isDirty = function () {
                                return this._isDirty || this._polyTime.isDirty();
                            };
                            DoublePolynomialModel.prototype.maxErr = function () {
                                var tol = this._toleratedError;
                                if (this._prioritization == org.kevoree.modeling.api.polynomial.util.Prioritization.HIGHDEGREES) {
                                    tol = this._toleratedError / Math.pow(2, this._maxDegree - this.degree());
                                }
                                else {
                                    if (this._prioritization == org.kevoree.modeling.api.polynomial.util.Prioritization.LOWDEGREES) {
                                        tol = this._toleratedError / Math.pow(2, this.degree() + 0.5);
                                    }
                                    else {
                                        if (this._prioritization == org.kevoree.modeling.api.polynomial.util.Prioritization.SAMEPRIORITY) {
                                            tol = this._toleratedError * this.degree() * 2 / (2 * this._maxDegree);
                                        }
                                    }
                                }
                                return tol;
                            };
                            DoublePolynomialModel.prototype.internal_feed = function (time, value) {
                                if (this._weights == null) {
                                    this._weights = new Array();
                                    this._weights[0] = value;
                                    this._polyTime.insert(time);
                                }
                            };
                            DoublePolynomialModel.prototype.maxError = function (computedWeights, time, value) {
                                var maxErr = 0;
                                var temp;
                                var ds;
                                for (var i = 0; i < this._polyTime.nbSamples() - 1; i++) {
                                    ds = this._polyTime.getNormalizedTime(i);
                                    var val = this.test_extrapolate(ds, computedWeights);
                                    temp = Math.abs(val - this.test_extrapolate(ds, this._weights));
                                    if (temp > maxErr) {
                                        maxErr = temp;
                                    }
                                }
                                temp = Math.abs(this.test_extrapolate(this._polyTime.denormalize(time), computedWeights) - value);
                                if (temp > maxErr) {
                                    maxErr = temp;
                                }
                                return maxErr;
                            };
                            DoublePolynomialModel.prototype.test_extrapolate = function (time, weights) {
                                var result = 0;
                                var power = 1;
                                for (var j = 0; j < weights.length; j++) {
                                    result += weights[j] * power;
                                    power = power * time;
                                }
                                return result;
                            };
                            DoublePolynomialModel.sep = "/";
                            DoublePolynomialModel.sepW = "%";
                            return DoublePolynomialModel;
                        })();
                        doublepolynomial.DoublePolynomialModel = DoublePolynomialModel;
                        var TimePolynomial = (function () {
                            function TimePolynomial(p_timeOrigin) {
                                this._isDirty = false;
                                this._timeOrigin = p_timeOrigin;
                            }
                            TimePolynomial.prototype.timeOrigin = function () {
                                return this._timeOrigin;
                            };
                            TimePolynomial.prototype.samplingPeriod = function () {
                                return this._samplingPeriod;
                            };
                            TimePolynomial.prototype.weights = function () {
                                return this._weights;
                            };
                            TimePolynomial.prototype.degree = function () {
                                if (this._weights == null) {
                                    return -1;
                                }
                                else {
                                    return this._weights.length - 1;
                                }
                            };
                            TimePolynomial.prototype.denormalize = function (p_time) {
                                return (p_time - this._timeOrigin) / this._samplingPeriod;
                            };
                            TimePolynomial.prototype.getNormalizedTime = function (id) {
                                var result = 0;
                                var power = 1;
                                for (var j = 0; j < this._weights.length; j++) {
                                    result += this._weights[j] * power;
                                    power = power * id;
                                }
                                return result;
                            };
                            TimePolynomial.prototype.extrapolate = function (id) {
                                return this.test_extrapolate(id, this._weights);
                            };
                            TimePolynomial.prototype.nbSamples = function () {
                                return this._nbSamples;
                            };
                            TimePolynomial.prototype.insert = function (time) {
                                if (this._weights == null) {
                                    this._timeOrigin = time;
                                    this._weights = new Array();
                                    this._weights[0] = 0;
                                    this._nbSamples = 1;
                                    this._isDirty = true;
                                    return true;
                                }
                                if (this._nbSamples == 1) {
                                    this._samplingPeriod = time - this._timeOrigin;
                                    this._weights = new Array();
                                    this._weights[0] = 0;
                                    this._weights[1] = 1;
                                    this._nbSamples = 2;
                                    this._isDirty = true;
                                    return true;
                                }
                                if (time > this.extrapolate(this._nbSamples - 1)) {
                                    var maxError = this._samplingPeriod / TimePolynomial.toleratedErrorRatio;
                                    if (Math.abs(this.extrapolate(this._nbSamples) - time) <= maxError) {
                                        this._nbSamples++;
                                        this._isDirty = true;
                                        return true;
                                    }
                                    var deg = this.degree();
                                    var newMaxDegree = Math.min(this._nbSamples, TimePolynomial.maxTimeDegree);
                                    while (deg < newMaxDegree) {
                                        deg++;
                                        var ss = Math.min(deg * 2, this._nbSamples);
                                        var ids = new Array();
                                        var times = new Array();
                                        var idtemp;
                                        for (var i = 0; i < ss; i++) {
                                            idtemp = (i * this._nbSamples / ss);
                                            ids[i] = idtemp;
                                            times[i] = (this.extrapolate(idtemp) - this._timeOrigin) / (this._samplingPeriod);
                                        }
                                        ids[ss] = this._nbSamples;
                                        times[ss] = (time - this._timeOrigin) / (this._samplingPeriod);
                                        var pf = new org.kevoree.modeling.api.polynomial.util.PolynomialFitEjml(deg);
                                        pf.fit(ids, times);
                                        if (this.maxError(pf.getCoef(), this._nbSamples, time) <= maxError) {
                                            this._weights = new Array();
                                            for (var i = 0; i < pf.getCoef().length; i++) {
                                                this._weights[i] = pf.getCoef()[i];
                                            }
                                            this._nbSamples++;
                                            this._isDirty = true;
                                            return true;
                                        }
                                    }
                                    return false;
                                }
                                else {
                                }
                                return false;
                            };
                            TimePolynomial.prototype.maxError = function (computedWeights, lastId, newtime) {
                                var maxErr = 0;
                                var time;
                                var temp;
                                for (var i = 0; i < lastId; i++) {
                                    time = this.test_extrapolate(i, computedWeights);
                                    temp = Math.abs(time - this.extrapolate(i));
                                    if (temp > maxErr) {
                                        maxErr = temp;
                                    }
                                }
                                temp = Math.abs(this.test_extrapolate(this._nbSamples, computedWeights) - newtime);
                                if (temp > maxErr) {
                                    maxErr = temp;
                                }
                                return maxErr;
                            };
                            TimePolynomial.prototype.test_extrapolate = function (id, newWeights) {
                                var result = 0;
                                var power = 1;
                                for (var j = 0; j < newWeights.length; j++) {
                                    result += newWeights[j] * power;
                                    power = power * id;
                                }
                                result = result * (this._samplingPeriod) + this._timeOrigin;
                                return result;
                            };
                            TimePolynomial.prototype.removeLast = function () {
                                this._nbSamples = this._nbSamples - 1;
                            };
                            TimePolynomial.prototype.lastIndex = function () {
                                if (this._nbSamples > 0) {
                                    return this.extrapolate(this._nbSamples - 1);
                                }
                                return -1;
                            };
                            TimePolynomial.prototype.save = function () {
                                var builder = new java.lang.StringBuilder();
                                for (var i = 0; i < this._weights.length; i++) {
                                    if (i != 0) {
                                        builder.append(org.kevoree.modeling.api.polynomial.doublepolynomial.DoublePolynomialModel.sepW);
                                    }
                                    builder.append(this._weights[i] + "");
                                }
                                builder.append(org.kevoree.modeling.api.polynomial.doublepolynomial.DoublePolynomialModel.sepW);
                                builder.append(this._nbSamples);
                                builder.append(org.kevoree.modeling.api.polynomial.doublepolynomial.DoublePolynomialModel.sepW);
                                builder.append(this._samplingPeriod);
                                this._isDirty = false;
                                return builder.toString();
                            };
                            TimePolynomial.prototype.load = function (payload) {
                                var parts = payload.split(org.kevoree.modeling.api.polynomial.doublepolynomial.DoublePolynomialModel.sepW);
                                this._weights = new Array();
                                for (var i = 0; i < parts.length - 2; i++) {
                                    this._weights[i] = java.lang.Double.parseDouble(parts[i]);
                                }
                                this._nbSamples = java.lang.Integer.parseInt(parts[parts.length - 1]);
                                this._samplingPeriod = java.lang.Integer.parseInt(parts[parts.length - 2]);
                                this._isDirty = false;
                            };
                            TimePolynomial.prototype.isDirty = function () {
                                return this._isDirty;
                            };
                            TimePolynomial.toleratedErrorRatio = 10;
                            TimePolynomial.maxTimeDegree = 20;
                            return TimePolynomial;
                        })();
                        doublepolynomial.TimePolynomial = TimePolynomial;
                    })(doublepolynomial = polynomial.doublepolynomial || (polynomial.doublepolynomial = {}));
                    var simplepolynomial;
                    (function (simplepolynomial) {
                        var SimplePolynomialModel = (function () {
                            function SimplePolynomialModel(timeOrigin, toleratedError, maxDegree, prioritization) {
                                this.samples = new java.util.ArrayList();
                                this._lastIndex = -1;
                                this._isDirty = false;
                                this.timeOrigin = timeOrigin;
                                this.degradeFactor = 1;
                                this.prioritization = prioritization;
                                this.maxDegree = maxDegree;
                                this.toleratedError = toleratedError;
                            }
                            SimplePolynomialModel.prototype.getSamples = function () {
                                return this.samples;
                            };
                            SimplePolynomialModel.prototype.getDegree = function () {
                                if (this.weights == null) {
                                    return -1;
                                }
                                else {
                                    return this.weights.length - 1;
                                }
                            };
                            SimplePolynomialModel.prototype.getTimeOrigin = function () {
                                return this.timeOrigin;
                            };
                            SimplePolynomialModel.prototype.getMaxErr = function (degree, toleratedError, maxDegree, prioritization) {
                                var tol = toleratedError;
                                if (prioritization == org.kevoree.modeling.api.polynomial.util.Prioritization.HIGHDEGREES) {
                                    tol = toleratedError / Math.pow(2, maxDegree - degree);
                                }
                                else {
                                    if (prioritization == org.kevoree.modeling.api.polynomial.util.Prioritization.LOWDEGREES) {
                                        tol = toleratedError / Math.pow(2, degree + 0.5);
                                    }
                                    else {
                                        if (prioritization == org.kevoree.modeling.api.polynomial.util.Prioritization.SAMEPRIORITY) {
                                            tol = toleratedError * degree * 2 / (2 * maxDegree);
                                        }
                                    }
                                }
                                return tol;
                            };
                            SimplePolynomialModel.prototype.internal_feed = function (time, value) {
                                if (this.weights == null) {
                                    this.weights = new Array();
                                    this.weights[0] = value;
                                    this.timeOrigin = time;
                                    this.samples.add(new org.kevoree.modeling.api.polynomial.util.DataSample(time, value));
                                }
                            };
                            SimplePolynomialModel.prototype.maxError = function (computedWeights, time, value) {
                                var maxErr = 0;
                                var temp = 0;
                                var ds;
                                for (var i = 0; i < this.samples.size(); i++) {
                                    ds = this.samples.get(i);
                                    var val = this.internal_extrapolate(ds.time, computedWeights);
                                    temp = Math.abs(val - ds.value);
                                    if (temp > maxErr) {
                                        maxErr = temp;
                                    }
                                }
                                temp = Math.abs(this.internal_extrapolate(time, computedWeights) - value);
                                if (temp > maxErr) {
                                    maxErr = temp;
                                }
                                return maxErr;
                            };
                            SimplePolynomialModel.prototype.comparePolynome = function (p2, err) {
                                if (this.weights.length != p2.weights.length) {
                                    return false;
                                }
                                for (var i = 0; i < this.weights.length; i++) {
                                    if (Math.abs(this.weights[i] - this.weights[i]) > err) {
                                        return false;
                                    }
                                }
                                return true;
                            };
                            SimplePolynomialModel.prototype.internal_extrapolate = function (time, weights) {
                                var result = 0;
                                var t = (time - this.timeOrigin) / this.degradeFactor;
                                var power = 1;
                                for (var j = 0; j < weights.length; j++) {
                                    result += weights[j] * power;
                                    power = power * t;
                                }
                                return result;
                            };
                            SimplePolynomialModel.prototype.extrapolate = function (time) {
                                return this.internal_extrapolate(time, this.weights);
                            };
                            SimplePolynomialModel.prototype.insert = function (time, value) {
                                if (this.weights == null) {
                                    this.internal_feed(time, value);
                                    this._lastIndex = time;
                                    this._isDirty = true;
                                    return true;
                                }
                                var maxError = this.getMaxErr(this.getDegree(), this.toleratedError, this.maxDegree, this.prioritization);
                                if (Math.abs(this.extrapolate(time) - value) <= maxError) {
                                    this.samples.add(new org.kevoree.modeling.api.polynomial.util.DataSample(time, value));
                                    this._lastIndex = time;
                                    return true;
                                }
                                var deg = this.getDegree();
                                if (deg < this.maxDegree) {
                                    deg++;
                                    var ss = Math.min(deg * 2, this.samples.size());
                                    var times = new Array();
                                    var values = new Array();
                                    var current = this.samples.size();
                                    for (var i = 0; i < ss; i++) {
                                        var index = Math.round(i * current / ss);
                                        var ds = this.samples.get(index);
                                        times[i] = (ds.time - this.timeOrigin) / this.degradeFactor;
                                        values[i] = ds.value;
                                    }
                                    times[ss] = (time - this.timeOrigin) / this.degradeFactor;
                                    values[ss] = value;
                                    var pf = new org.kevoree.modeling.api.polynomial.util.PolynomialFitEjml(deg);
                                    pf.fit(times, values);
                                    if (this.maxError(pf.getCoef(), time, value) <= maxError) {
                                        this.weights = new Array();
                                        for (var i = 0; i < pf.getCoef().length; i++) {
                                            this.weights[i] = pf.getCoef()[i];
                                        }
                                        this.samples.add(new org.kevoree.modeling.api.polynomial.util.DataSample(time, value));
                                        this._lastIndex = time;
                                        this._isDirty = true;
                                        return true;
                                    }
                                }
                                return false;
                            };
                            SimplePolynomialModel.prototype.lastIndex = function () {
                                return this._lastIndex;
                            };
                            SimplePolynomialModel.prototype.save = function () {
                                var builder = new java.lang.StringBuilder();
                                for (var i = 0; i < this.weights.length; i++) {
                                    if (i != 0) {
                                        builder.append(SimplePolynomialModel.sep);
                                    }
                                    builder.append(this.weights[i] + "");
                                }
                                this._isDirty = false;
                                return builder.toString();
                            };
                            SimplePolynomialModel.prototype.load = function (payload) {
                                var elems = payload.split(SimplePolynomialModel.sep);
                                this.weights = new Array();
                                for (var i = 0; i < elems.length; i++) {
                                    this.weights[i] = java.lang.Double.parseDouble(elems[i]);
                                }
                                this._isDirty = false;
                            };
                            SimplePolynomialModel.prototype.isDirty = function () {
                                return this._isDirty;
                            };
                            SimplePolynomialModel.sep = "/";
                            return SimplePolynomialModel;
                        })();
                        simplepolynomial.SimplePolynomialModel = SimplePolynomialModel;
                    })(simplepolynomial = polynomial.simplepolynomial || (polynomial.simplepolynomial = {}));
                    var util;
                    (function (util) {
                        var AdjLinearSolverQr = (function () {
                            function AdjLinearSolverQr() {
                                this.maxRows = -1;
                                this.maxCols = -1;
                                this.decomposer = new org.kevoree.modeling.api.polynomial.util.QRDecompositionHouseholderColumn_D64();
                            }
                            AdjLinearSolverQr.prototype.setA = function (A) {
                                if (A.numRows > this.maxRows || A.numCols > this.maxCols) {
                                    this.setMaxSize(A.numRows, A.numCols);
                                }
                                this.numRows = A.numRows;
                                this.numCols = A.numCols;
                                if (!this.decomposer.decompose(A)) {
                                    return false;
                                }
                                this.Q.reshape(this.numRows, this.numRows, false);
                                this.R.reshape(this.numRows, this.numCols, false);
                                this.decomposer.getQ(this.Q, false);
                                this.decomposer.getR(this.R, false);
                                return true;
                            };
                            AdjLinearSolverQr.prototype.solveU = function (U, b, n) {
                                for (var i = n - 1; i >= 0; i--) {
                                    var sum = b[i];
                                    var indexU = i * n + i + 1;
                                    for (var j = i + 1; j < n; j++) {
                                        sum -= U[indexU++] * b[j];
                                    }
                                    b[i] = sum / U[i * n + i];
                                }
                            };
                            AdjLinearSolverQr.prototype.solve = function (B, X) {
                                var BnumCols = B.numCols;
                                this.Y.reshape(this.numRows, 1, false);
                                this.Z.reshape(this.numRows, 1, false);
                                for (var colB = 0; colB < BnumCols; colB++) {
                                    for (var i = 0; i < this.numRows; i++) {
                                        this.Y.data[i] = B.unsafe_get(i, colB);
                                    }
                                    org.kevoree.modeling.api.polynomial.util.DenseMatrix64F.multTransA(this.Q, this.Y, this.Z);
                                    this.solveU(this.R.data, this.Z.data, this.numCols);
                                    for (var i = 0; i < this.numCols; i++) {
                                        X.cset(i, colB, this.Z.data[i]);
                                    }
                                }
                            };
                            AdjLinearSolverQr.prototype.setMaxSize = function (maxRows, maxCols) {
                                maxRows += 5;
                                this.maxRows = maxRows;
                                this.maxCols = maxCols;
                                this.Q = new org.kevoree.modeling.api.polynomial.util.DenseMatrix64F(maxRows, maxRows);
                                this.R = new org.kevoree.modeling.api.polynomial.util.DenseMatrix64F(maxRows, maxCols);
                                this.Y = new org.kevoree.modeling.api.polynomial.util.DenseMatrix64F(maxRows, 1);
                                this.Z = new org.kevoree.modeling.api.polynomial.util.DenseMatrix64F(maxRows, 1);
                            };
                            return AdjLinearSolverQr;
                        })();
                        util.AdjLinearSolverQr = AdjLinearSolverQr;
                        var DataSample = (function () {
                            function DataSample(time, value) {
                                this.time = time;
                                this.value = value;
                            }
                            return DataSample;
                        })();
                        util.DataSample = DataSample;
                        var DenseMatrix64F = (function () {
                            function DenseMatrix64F(numRows, numCols) {
                                this.data = new Array();
                                this.numRows = numRows;
                                this.numCols = numCols;
                            }
                            DenseMatrix64F.multTransA_smallMV = function (A, B, C) {
                                var cIndex = 0;
                                for (var i = 0; i < A.numCols; i++) {
                                    var total = 0.0;
                                    var indexA = i;
                                    for (var j = 0; j < A.numRows; j++) {
                                        total += A.get(indexA) * B.get(j);
                                        indexA += A.numCols;
                                    }
                                    C.set(cIndex++, total);
                                }
                            };
                            DenseMatrix64F.multTransA_reorderMV = function (A, B, C) {
                                if (A.numRows == 0) {
                                    org.kevoree.modeling.api.polynomial.util.DenseMatrix64F.fill(C, 0);
                                    return;
                                }
                                var B_val = B.get(0);
                                for (var i = 0; i < A.numCols; i++) {
                                    C.set(i, A.get(i) * B_val);
                                }
                                var indexA = A.numCols;
                                for (var i = 1; i < A.numRows; i++) {
                                    B_val = B.get(i);
                                    for (var j = 0; j < A.numCols; j++) {
                                        C.plus(j, A.get(indexA++) * B_val);
                                    }
                                }
                            };
                            DenseMatrix64F.multTransA_reorderMM = function (a, b, c) {
                                if (a.numCols == 0 || a.numRows == 0) {
                                    org.kevoree.modeling.api.polynomial.util.DenseMatrix64F.fill(c, 0);
                                    return;
                                }
                                var valA;
                                for (var i = 0; i < a.numCols; i++) {
                                    var indexC_start = i * c.numCols;
                                    valA = a.get(i);
                                    var indexB = 0;
                                    var end = indexB + b.numCols;
                                    var indexC = indexC_start;
                                    while (indexB < end) {
                                        c.set(indexC++, valA * b.get(indexB++));
                                    }
                                    for (var k = 1; k < a.numRows; k++) {
                                        valA = a.unsafe_get(k, i);
                                        end = indexB + b.numCols;
                                        indexC = indexC_start;
                                        while (indexB < end) {
                                            c.plus(indexC++, valA * b.get(indexB++));
                                        }
                                    }
                                }
                            };
                            DenseMatrix64F.multTransA_smallMM = function (a, b, c) {
                                var cIndex = 0;
                                for (var i = 0; i < a.numCols; i++) {
                                    for (var j = 0; j < b.numCols; j++) {
                                        var indexA = i;
                                        var indexB = j;
                                        var end = indexB + b.numRows * b.numCols;
                                        var total = 0;
                                        for (; indexB < end; indexB += b.numCols) {
                                            total += a.get(indexA) * b.get(indexB);
                                            indexA += a.numCols;
                                        }
                                        c.set(cIndex++, total);
                                    }
                                }
                            };
                            DenseMatrix64F.multTransA = function (a, b, c) {
                                if (b.numCols == 1) {
                                    if (a.numCols >= org.kevoree.modeling.api.polynomial.util.DenseMatrix64F.MULT_COLUMN_SWITCH) {
                                        org.kevoree.modeling.api.polynomial.util.DenseMatrix64F.multTransA_reorderMV(a, b, c);
                                    }
                                    else {
                                        org.kevoree.modeling.api.polynomial.util.DenseMatrix64F.multTransA_smallMV(a, b, c);
                                    }
                                }
                                else {
                                    if (a.numCols >= org.kevoree.modeling.api.polynomial.util.DenseMatrix64F.MULT_COLUMN_SWITCH || b.numCols >= org.kevoree.modeling.api.polynomial.util.DenseMatrix64F.MULT_COLUMN_SWITCH) {
                                        org.kevoree.modeling.api.polynomial.util.DenseMatrix64F.multTransA_reorderMM(a, b, c);
                                    }
                                    else {
                                        org.kevoree.modeling.api.polynomial.util.DenseMatrix64F.multTransA_smallMM(a, b, c);
                                    }
                                }
                            };
                            DenseMatrix64F.setIdentity = function (mat) {
                                var width = mat.numRows < mat.numCols ? mat.numRows : mat.numCols;
                                java.util.Arrays.fill(mat.data, 0, mat.getNumElements(), 0);
                                var index = 0;
                                for (var i = 0; i < width; i++) {
                                    mat.data[index] = 1;
                                    index += mat.numCols + 1;
                                }
                            };
                            DenseMatrix64F.widentity = function (width) {
                                var ret = new org.kevoree.modeling.api.polynomial.util.DenseMatrix64F(width, width);
                                for (var i = 0; i < width; i++) {
                                    ret.cset(i, i, 1.0);
                                }
                                return ret;
                            };
                            DenseMatrix64F.identity = function (numRows, numCols) {
                                var ret = new org.kevoree.modeling.api.polynomial.util.DenseMatrix64F(numRows, numCols);
                                var small = numRows < numCols ? numRows : numCols;
                                for (var i = 0; i < small; i++) {
                                    ret.cset(i, i, 1.0);
                                }
                                return ret;
                            };
                            DenseMatrix64F.fill = function (a, value) {
                                java.util.Arrays.fill(a.data, 0, a.getNumElements(), value);
                            };
                            DenseMatrix64F.prototype.get = function (index) {
                                return this.data[index];
                            };
                            DenseMatrix64F.prototype.set = function (index, val) {
                                return this.data[index] = val;
                            };
                            DenseMatrix64F.prototype.plus = function (index, val) {
                                return this.data[index] += val;
                            };
                            DenseMatrix64F.prototype.reshape = function (numRows, numCols, saveValues) {
                                if (this.data.length < numRows * numCols) {
                                    var d = new Array();
                                    if (saveValues) {
                                        System.arraycopy(this.data, 0, d, 0, this.getNumElements());
                                    }
                                    this.data = d;
                                }
                                this.numRows = numRows;
                                this.numCols = numCols;
                            };
                            DenseMatrix64F.prototype.cset = function (row, col, value) {
                                this.data[row * this.numCols + col] = value;
                            };
                            DenseMatrix64F.prototype.unsafe_get = function (row, col) {
                                return this.data[row * this.numCols + col];
                            };
                            DenseMatrix64F.prototype.getNumElements = function () {
                                return this.numRows * this.numCols;
                            };
                            DenseMatrix64F.MULT_COLUMN_SWITCH = 15;
                            return DenseMatrix64F;
                        })();
                        util.DenseMatrix64F = DenseMatrix64F;
                        var PolynomialFitEjml = (function () {
                            function PolynomialFitEjml(degree) {
                                this.coef = new org.kevoree.modeling.api.polynomial.util.DenseMatrix64F(degree + 1, 1);
                                this.A = new org.kevoree.modeling.api.polynomial.util.DenseMatrix64F(1, degree + 1);
                                this.y = new org.kevoree.modeling.api.polynomial.util.DenseMatrix64F(1, 1);
                                this.solver = new org.kevoree.modeling.api.polynomial.util.AdjLinearSolverQr();
                            }
                            PolynomialFitEjml.prototype.getCoef = function () {
                                return this.coef.data;
                            };
                            PolynomialFitEjml.prototype.fit = function (samplePoints, observations) {
                                this.y.reshape(observations.length, 1, false);
                                System.arraycopy(observations, 0, this.y.data, 0, observations.length);
                                this.A.reshape(this.y.numRows, this.coef.numRows, false);
                                for (var i = 0; i < observations.length; i++) {
                                    var obs = 1;
                                    for (var j = 0; j < this.coef.numRows; j++) {
                                        this.A.cset(i, j, obs);
                                        obs *= samplePoints[i];
                                    }
                                }
                                this.solver.setA(this.A);
                                this.solver.solve(this.y, this.coef);
                            };
                            return PolynomialFitEjml;
                        })();
                        util.PolynomialFitEjml = PolynomialFitEjml;
                        var Prioritization = (function () {
                            function Prioritization() {
                            }
                            Prioritization.prototype.equals = function (other) {
                                return this == other;
                            };
                            Prioritization.values = function () {
                                return Prioritization._PrioritizationVALUES;
                            };
                            Prioritization.SAMEPRIORITY = new Prioritization();
                            Prioritization.HIGHDEGREES = new Prioritization();
                            Prioritization.LOWDEGREES = new Prioritization();
                            Prioritization._PrioritizationVALUES = [
                                Prioritization.SAMEPRIORITY,
                                Prioritization.HIGHDEGREES,
                                Prioritization.LOWDEGREES
                            ];
                            return Prioritization;
                        })();
                        util.Prioritization = Prioritization;
                        var QRDecompositionHouseholderColumn_D64 = (function () {
                            function QRDecompositionHouseholderColumn_D64() {
                            }
                            QRDecompositionHouseholderColumn_D64.prototype.setExpectedMaxSize = function (numRows, numCols) {
                                this.numCols = numCols;
                                this.numRows = numRows;
                                this.minLength = Math.min(numCols, numRows);
                                var maxLength = Math.max(numCols, numRows);
                                if (this.dataQR == null || this.dataQR.length < numCols || this.dataQR[0].length < numRows) {
                                    this.dataQR = new Array(new Array());
                                    for (var i = 0; i < numCols; i++) {
                                        this.dataQR[i] = new Array();
                                    }
                                    this.v = new Array();
                                    this.gammas = new Array();
                                }
                                if (this.v.length < maxLength) {
                                    this.v = new Array();
                                }
                                if (this.gammas.length < this.minLength) {
                                    this.gammas = new Array();
                                }
                            };
                            QRDecompositionHouseholderColumn_D64.prototype.getQ = function (Q, compact) {
                                if (compact) {
                                    if (Q == null) {
                                        Q = org.kevoree.modeling.api.polynomial.util.DenseMatrix64F.identity(this.numRows, this.minLength);
                                    }
                                    else {
                                        org.kevoree.modeling.api.polynomial.util.DenseMatrix64F.setIdentity(Q);
                                    }
                                }
                                else {
                                    if (Q == null) {
                                        Q = org.kevoree.modeling.api.polynomial.util.DenseMatrix64F.widentity(this.numRows);
                                    }
                                    else {
                                        org.kevoree.modeling.api.polynomial.util.DenseMatrix64F.setIdentity(Q);
                                    }
                                }
                                for (var j = this.minLength - 1; j >= 0; j--) {
                                    var u = this.dataQR[j];
                                    var vv = u[j];
                                    u[j] = 1;
                                    org.kevoree.modeling.api.polynomial.util.QRDecompositionHouseholderColumn_D64.rank1UpdateMultR(Q, u, this.gammas[j], j, j, this.numRows, this.v);
                                    u[j] = vv;
                                }
                                return Q;
                            };
                            QRDecompositionHouseholderColumn_D64.prototype.getR = function (R, compact) {
                                if (R == null) {
                                    if (compact) {
                                        R = new org.kevoree.modeling.api.polynomial.util.DenseMatrix64F(this.minLength, this.numCols);
                                    }
                                    else {
                                        R = new org.kevoree.modeling.api.polynomial.util.DenseMatrix64F(this.numRows, this.numCols);
                                    }
                                }
                                else {
                                    for (var i = 0; i < R.numRows; i++) {
                                        var min = Math.min(i, R.numCols);
                                        for (var j = 0; j < min; j++) {
                                            R.cset(i, j, 0);
                                        }
                                    }
                                }
                                for (var j = 0; j < this.numCols; j++) {
                                    var colR = this.dataQR[j];
                                    var l = Math.min(j, this.numRows - 1);
                                    for (var i = 0; i <= l; i++) {
                                        var val = colR[i];
                                        R.cset(i, j, val);
                                    }
                                }
                                return R;
                            };
                            QRDecompositionHouseholderColumn_D64.prototype.decompose = function (A) {
                                this.setExpectedMaxSize(A.numRows, A.numCols);
                                this.convertToColumnMajor(A);
                                this.error = false;
                                for (var j = 0; j < this.minLength; j++) {
                                    this.householder(j);
                                    this.updateA(j);
                                }
                                return !this.error;
                            };
                            QRDecompositionHouseholderColumn_D64.prototype.convertToColumnMajor = function (A) {
                                for (var x = 0; x < this.numCols; x++) {
                                    var colQ = this.dataQR[x];
                                    for (var y = 0; y < this.numRows; y++) {
                                        colQ[y] = A.data[y * this.numCols + x];
                                    }
                                }
                            };
                            QRDecompositionHouseholderColumn_D64.prototype.householder = function (j) {
                                var u = this.dataQR[j];
                                var max = org.kevoree.modeling.api.polynomial.util.QRDecompositionHouseholderColumn_D64.findMax(u, j, this.numRows - j);
                                if (max == 0.0) {
                                    this.gamma = 0;
                                    this.error = true;
                                }
                                else {
                                    this.tau = org.kevoree.modeling.api.polynomial.util.QRDecompositionHouseholderColumn_D64.computeTauAndDivide(j, this.numRows, u, max);
                                    var u_0 = u[j] + this.tau;
                                    org.kevoree.modeling.api.polynomial.util.QRDecompositionHouseholderColumn_D64.divideElements(j + 1, this.numRows, u, u_0);
                                    this.gamma = u_0 / this.tau;
                                    this.tau *= max;
                                    u[j] = -this.tau;
                                }
                                this.gammas[j] = this.gamma;
                            };
                            QRDecompositionHouseholderColumn_D64.prototype.updateA = function (w) {
                                var u = this.dataQR[w];
                                for (var j = w + 1; j < this.numCols; j++) {
                                    var colQ = this.dataQR[j];
                                    var val = colQ[w];
                                    for (var k = w + 1; k < this.numRows; k++) {
                                        val += u[k] * colQ[k];
                                    }
                                    val *= this.gamma;
                                    colQ[w] -= val;
                                    for (var i = w + 1; i < this.numRows; i++) {
                                        colQ[i] -= u[i] * val;
                                    }
                                }
                            };
                            QRDecompositionHouseholderColumn_D64.findMax = function (u, startU, length) {
                                var max = -1;
                                var index = startU;
                                var stopIndex = startU + length;
                                for (; index < stopIndex; index++) {
                                    var val = u[index];
                                    val = (val < 0.0) ? -val : val;
                                    if (val > max) {
                                        max = val;
                                    }
                                }
                                return max;
                            };
                            QRDecompositionHouseholderColumn_D64.divideElements = function (j, numRows, u, u_0) {
                                for (var i = j; i < numRows; i++) {
                                    u[i] /= u_0;
                                }
                            };
                            QRDecompositionHouseholderColumn_D64.computeTauAndDivide = function (j, numRows, u, max) {
                                var tau = 0;
                                for (var i = j; i < numRows; i++) {
                                    var d = u[i] /= max;
                                    tau += d * d;
                                }
                                tau = Math.sqrt(tau);
                                if (u[j] < 0) {
                                    tau = -tau;
                                }
                                return tau;
                            };
                            QRDecompositionHouseholderColumn_D64.rank1UpdateMultR = function (A, u, gamma, colA0, w0, w1, _temp) {
                                for (var i = colA0; i < A.numCols; i++) {
                                    _temp[i] = u[w0] * A.data[w0 * A.numCols + i];
                                }
                                for (var k = w0 + 1; k < w1; k++) {
                                    var indexA = k * A.numCols + colA0;
                                    var valU = u[k];
                                    for (var i = colA0; i < A.numCols; i++) {
                                        _temp[i] += valU * A.data[indexA++];
                                    }
                                }
                                for (var i = colA0; i < A.numCols; i++) {
                                    _temp[i] *= gamma;
                                }
                                for (var i = w0; i < w1; i++) {
                                    var valU = u[i];
                                    var indexA = i * A.numCols + colA0;
                                    for (var j = colA0; j < A.numCols; j++) {
                                        A.data[indexA++] -= valU * _temp[j];
                                    }
                                }
                            };
                            return QRDecompositionHouseholderColumn_D64;
                        })();
                        util.QRDecompositionHouseholderColumn_D64 = QRDecompositionHouseholderColumn_D64;
                    })(util = polynomial.util || (polynomial.util = {}));
                })(polynomial = api.polynomial || (api.polynomial = {}));
                var rbtree;
                (function (rbtree) {
                    var Color = (function () {
                        function Color() {
                        }
                        Color.prototype.equals = function (other) {
                            return this == other;
                        };
                        Color.values = function () {
                            return Color._ColorVALUES;
                        };
                        Color.RED = new Color();
                        Color.BLACK = new Color();
                        Color._ColorVALUES = [
                            Color.RED,
                            Color.BLACK
                        ];
                        return Color;
                    })();
                    rbtree.Color = Color;
                    var IndexRBTree = (function () {
                        function IndexRBTree() {
                            this.root = null;
                            this._size = 0;
                            this._dirty = false;
                        }
                        IndexRBTree.prototype.size = function () {
                            return this._size;
                        };
                        IndexRBTree.prototype.isDirty = function () {
                            return this._dirty;
                        };
                        IndexRBTree.prototype.serialize = function () {
                            var builder = new java.lang.StringBuilder();
                            builder.append(this._size);
                            if (this.root != null) {
                                this.root.serialize(builder);
                            }
                            return builder.toString();
                        };
                        IndexRBTree.prototype.setClean = function () {
                            this._dirty = false;
                        };
                        IndexRBTree.prototype.toString = function () {
                            return this.serialize();
                        };
                        IndexRBTree.prototype.unserialize = function (payload) {
                            if (payload == null || payload.length == 0) {
                                return;
                            }
                            var i = 0;
                            var buffer = new java.lang.StringBuilder();
                            var ch = payload.charAt(i);
                            while (i < payload.length && ch != '|') {
                                buffer.append(ch);
                                i = i + 1;
                                ch = payload.charAt(i);
                            }
                            this._size = java.lang.Integer.parseInt(buffer.toString());
                            var ctx = new org.kevoree.modeling.api.rbtree.TreeReaderContext();
                            ctx.index = i;
                            ctx.payload = payload;
                            this.root = org.kevoree.modeling.api.rbtree.TreeNode.unserialize(ctx);
                        };
                        IndexRBTree.prototype.previousOrEqual = function (key) {
                            var p = this.root;
                            if (p == null) {
                                return null;
                            }
                            while (p != null) {
                                if (key == p.key) {
                                    return p;
                                }
                                if (key > p.key) {
                                    if (p.getRight() != null) {
                                        p = p.getRight();
                                    }
                                    else {
                                        return p;
                                    }
                                }
                                else {
                                    if (p.getLeft() != null) {
                                        p = p.getLeft();
                                    }
                                    else {
                                        var parent = p.getParent();
                                        var ch = p;
                                        while (parent != null && ch == parent.getLeft()) {
                                            ch = parent;
                                            parent = parent.getParent();
                                        }
                                        return parent;
                                    }
                                }
                            }
                            return null;
                        };
                        IndexRBTree.prototype.nextOrEqual = function (key) {
                            var p = this.root;
                            if (p == null) {
                                return null;
                            }
                            while (p != null) {
                                if (key == p.key) {
                                    return p;
                                }
                                if (key < p.key) {
                                    if (p.getLeft() != null) {
                                        p = p.getLeft();
                                    }
                                    else {
                                        return p;
                                    }
                                }
                                else {
                                    if (p.getRight() != null) {
                                        p = p.getRight();
                                    }
                                    else {
                                        var parent = p.getParent();
                                        var ch = p;
                                        while (parent != null && ch == parent.getRight()) {
                                            ch = parent;
                                            parent = parent.getParent();
                                        }
                                        return parent;
                                    }
                                }
                            }
                            return null;
                        };
                        IndexRBTree.prototype.previous = function (key) {
                            var p = this.root;
                            if (p == null) {
                                return null;
                            }
                            while (p != null) {
                                if (key < p.key) {
                                    if (p.getLeft() != null) {
                                        p = p.getLeft();
                                    }
                                    else {
                                        return p.previous();
                                    }
                                }
                                else {
                                    if (key > p.key) {
                                        if (p.getRight() != null) {
                                            p = p.getRight();
                                        }
                                        else {
                                            return p;
                                        }
                                    }
                                    else {
                                        return p.previous();
                                    }
                                }
                            }
                            return null;
                        };
                        IndexRBTree.prototype.next = function (key) {
                            var p = this.root;
                            if (p == null) {
                                return null;
                            }
                            while (p != null) {
                                if (key < p.key) {
                                    if (p.getLeft() != null) {
                                        p = p.getLeft();
                                    }
                                    else {
                                        return p;
                                    }
                                }
                                else {
                                    if (key > p.key) {
                                        if (p.getRight() != null) {
                                            p = p.getRight();
                                        }
                                        else {
                                            return p.next();
                                        }
                                    }
                                    else {
                                        return p.next();
                                    }
                                }
                            }
                            return null;
                        };
                        IndexRBTree.prototype.first = function () {
                            var p = this.root;
                            if (p == null) {
                                return null;
                            }
                            while (p != null) {
                                if (p.getLeft() != null) {
                                    p = p.getLeft();
                                }
                                else {
                                    return p;
                                }
                            }
                            return null;
                        };
                        IndexRBTree.prototype.last = function () {
                            var p = this.root;
                            if (p == null) {
                                return null;
                            }
                            while (p != null) {
                                if (p.getRight() != null) {
                                    p = p.getRight();
                                }
                                else {
                                    return p;
                                }
                            }
                            return null;
                        };
                        IndexRBTree.prototype.lookupNode = function (key) {
                            var n = this.root;
                            if (n == null) {
                                return null;
                            }
                            while (n != null) {
                                if (key == n.key) {
                                    return n;
                                }
                                else {
                                    if (key < n.key) {
                                        n = n.getLeft();
                                    }
                                    else {
                                        n = n.getRight();
                                    }
                                }
                            }
                            return n;
                        };
                        IndexRBTree.prototype.lookup = function (key) {
                            var n = this.lookupNode(key);
                            if (n == null) {
                                return null;
                            }
                            else {
                                return n.key;
                            }
                        };
                        IndexRBTree.prototype.rotateLeft = function (n) {
                            var r = n.getRight();
                            this.replaceNode(n, r);
                            n.setRight(r.getLeft());
                            if (r.getLeft() != null) {
                                r.getLeft().setParent(n);
                            }
                            r.setLeft(n);
                            n.setParent(r);
                        };
                        IndexRBTree.prototype.rotateRight = function (n) {
                            var l = n.getLeft();
                            this.replaceNode(n, l);
                            n.setLeft(l.getRight());
                            if (l.getRight() != null) {
                                l.getRight().setParent(n);
                            }
                            l.setRight(n);
                            n.setParent(l);
                        };
                        IndexRBTree.prototype.replaceNode = function (oldn, newn) {
                            if (oldn.getParent() == null) {
                                this.root = newn;
                            }
                            else {
                                if (oldn == oldn.getParent().getLeft()) {
                                    oldn.getParent().setLeft(newn);
                                }
                                else {
                                    oldn.getParent().setRight(newn);
                                }
                            }
                            if (newn != null) {
                                newn.setParent(oldn.getParent());
                            }
                        };
                        IndexRBTree.prototype.insert = function (key) {
                            this._dirty = true;
                            var insertedNode = new org.kevoree.modeling.api.rbtree.TreeNode(key, org.kevoree.modeling.api.rbtree.Color.RED, null, null);
                            if (this.root == null) {
                                this._size++;
                                this.root = insertedNode;
                            }
                            else {
                                var n = this.root;
                                while (true) {
                                    if (key == n.key) {
                                        return;
                                    }
                                    else {
                                        if (key < n.key) {
                                            if (n.getLeft() == null) {
                                                n.setLeft(insertedNode);
                                                this._size++;
                                                break;
                                            }
                                            else {
                                                n = n.getLeft();
                                            }
                                        }
                                        else {
                                            if (n.getRight() == null) {
                                                n.setRight(insertedNode);
                                                this._size++;
                                                break;
                                            }
                                            else {
                                                n = n.getRight();
                                            }
                                        }
                                    }
                                }
                                insertedNode.setParent(n);
                            }
                            this.insertCase1(insertedNode);
                        };
                        IndexRBTree.prototype.insertCase1 = function (n) {
                            if (n.getParent() == null) {
                                n.color = org.kevoree.modeling.api.rbtree.Color.BLACK;
                            }
                            else {
                                this.insertCase2(n);
                            }
                        };
                        IndexRBTree.prototype.insertCase2 = function (n) {
                            if (this.nodeColor(n.getParent()) == org.kevoree.modeling.api.rbtree.Color.BLACK) {
                                return;
                            }
                            else {
                                this.insertCase3(n);
                            }
                        };
                        IndexRBTree.prototype.insertCase3 = function (n) {
                            if (this.nodeColor(n.uncle()) == org.kevoree.modeling.api.rbtree.Color.RED) {
                                n.getParent().color = org.kevoree.modeling.api.rbtree.Color.BLACK;
                                n.uncle().color = org.kevoree.modeling.api.rbtree.Color.BLACK;
                                n.grandparent().color = org.kevoree.modeling.api.rbtree.Color.RED;
                                this.insertCase1(n.grandparent());
                            }
                            else {
                                this.insertCase4(n);
                            }
                        };
                        IndexRBTree.prototype.insertCase4 = function (n_n) {
                            var n = n_n;
                            if (n == n.getParent().getRight() && n.getParent() == n.grandparent().getLeft()) {
                                this.rotateLeft(n.getParent());
                                n = n.getLeft();
                            }
                            else {
                                if (n == n.getParent().getLeft() && n.getParent() == n.grandparent().getRight()) {
                                    this.rotateRight(n.getParent());
                                    n = n.getRight();
                                }
                            }
                            this.insertCase5(n);
                        };
                        IndexRBTree.prototype.insertCase5 = function (n) {
                            n.getParent().color = org.kevoree.modeling.api.rbtree.Color.BLACK;
                            n.grandparent().color = org.kevoree.modeling.api.rbtree.Color.RED;
                            if (n == n.getParent().getLeft() && n.getParent() == n.grandparent().getLeft()) {
                                this.rotateRight(n.grandparent());
                            }
                            else {
                                this.rotateLeft(n.grandparent());
                            }
                        };
                        IndexRBTree.prototype.delete = function (key) {
                            var n = this.lookupNode(key);
                            if (n == null) {
                                return;
                            }
                            else {
                                this._size--;
                                if (n.getLeft() != null && n.getRight() != null) {
                                    var pred = n.getLeft();
                                    while (pred.getRight() != null) {
                                        pred = pred.getRight();
                                    }
                                    n.key = pred.key;
                                    n = pred;
                                }
                                var child;
                                if (n.getRight() == null) {
                                    child = n.getLeft();
                                }
                                else {
                                    child = n.getRight();
                                }
                                if (this.nodeColor(n) == org.kevoree.modeling.api.rbtree.Color.BLACK) {
                                    n.color = this.nodeColor(child);
                                    this.deleteCase1(n);
                                }
                                this.replaceNode(n, child);
                            }
                        };
                        IndexRBTree.prototype.deleteCase1 = function (n) {
                            if (n.getParent() == null) {
                                return;
                            }
                            else {
                                this.deleteCase2(n);
                            }
                        };
                        IndexRBTree.prototype.deleteCase2 = function (n) {
                            if (this.nodeColor(n.sibling()) == org.kevoree.modeling.api.rbtree.Color.RED) {
                                n.getParent().color = org.kevoree.modeling.api.rbtree.Color.RED;
                                n.sibling().color = org.kevoree.modeling.api.rbtree.Color.BLACK;
                                if (n == n.getParent().getLeft()) {
                                    this.rotateLeft(n.getParent());
                                }
                                else {
                                    this.rotateRight(n.getParent());
                                }
                            }
                            this.deleteCase3(n);
                        };
                        IndexRBTree.prototype.deleteCase3 = function (n) {
                            if (this.nodeColor(n.getParent()) == org.kevoree.modeling.api.rbtree.Color.BLACK && this.nodeColor(n.sibling()) == org.kevoree.modeling.api.rbtree.Color.BLACK && this.nodeColor(n.sibling().getLeft()) == org.kevoree.modeling.api.rbtree.Color.BLACK && this.nodeColor(n.sibling().getRight()) == org.kevoree.modeling.api.rbtree.Color.BLACK) {
                                n.sibling().color = org.kevoree.modeling.api.rbtree.Color.RED;
                                this.deleteCase1(n.getParent());
                            }
                            else {
                                this.deleteCase4(n);
                            }
                        };
                        IndexRBTree.prototype.deleteCase4 = function (n) {
                            if (this.nodeColor(n.getParent()) == org.kevoree.modeling.api.rbtree.Color.RED && this.nodeColor(n.sibling()) == org.kevoree.modeling.api.rbtree.Color.BLACK && this.nodeColor(n.sibling().getLeft()) == org.kevoree.modeling.api.rbtree.Color.BLACK && this.nodeColor(n.sibling().getRight()) == org.kevoree.modeling.api.rbtree.Color.BLACK) {
                                n.sibling().color = org.kevoree.modeling.api.rbtree.Color.RED;
                                n.getParent().color = org.kevoree.modeling.api.rbtree.Color.BLACK;
                            }
                            else {
                                this.deleteCase5(n);
                            }
                        };
                        IndexRBTree.prototype.deleteCase5 = function (n) {
                            if (n == n.getParent().getLeft() && this.nodeColor(n.sibling()) == org.kevoree.modeling.api.rbtree.Color.BLACK && this.nodeColor(n.sibling().getLeft()) == org.kevoree.modeling.api.rbtree.Color.RED && this.nodeColor(n.sibling().getRight()) == org.kevoree.modeling.api.rbtree.Color.BLACK) {
                                n.sibling().color = org.kevoree.modeling.api.rbtree.Color.RED;
                                n.sibling().getLeft().color = org.kevoree.modeling.api.rbtree.Color.BLACK;
                                this.rotateRight(n.sibling());
                            }
                            else {
                                if (n == n.getParent().getRight() && this.nodeColor(n.sibling()) == org.kevoree.modeling.api.rbtree.Color.BLACK && this.nodeColor(n.sibling().getRight()) == org.kevoree.modeling.api.rbtree.Color.RED && this.nodeColor(n.sibling().getLeft()) == org.kevoree.modeling.api.rbtree.Color.BLACK) {
                                    n.sibling().color = org.kevoree.modeling.api.rbtree.Color.RED;
                                    n.sibling().getRight().color = org.kevoree.modeling.api.rbtree.Color.BLACK;
                                    this.rotateLeft(n.sibling());
                                }
                            }
                            this.deleteCase6(n);
                        };
                        IndexRBTree.prototype.deleteCase6 = function (n) {
                            n.sibling().color = this.nodeColor(n.getParent());
                            n.getParent().color = org.kevoree.modeling.api.rbtree.Color.BLACK;
                            if (n == n.getParent().getLeft()) {
                                n.sibling().getRight().color = org.kevoree.modeling.api.rbtree.Color.BLACK;
                                this.rotateLeft(n.getParent());
                            }
                            else {
                                n.sibling().getLeft().color = org.kevoree.modeling.api.rbtree.Color.BLACK;
                                this.rotateRight(n.getParent());
                            }
                        };
                        IndexRBTree.prototype.nodeColor = function (n) {
                            if (n == null) {
                                return org.kevoree.modeling.api.rbtree.Color.BLACK;
                            }
                            else {
                                return n.color;
                            }
                        };
                        return IndexRBTree;
                    })();
                    rbtree.IndexRBTree = IndexRBTree;
                    var LongRBTree = (function () {
                        function LongRBTree() {
                            this.root = null;
                            this._size = 0;
                            this._dirty = false;
                        }
                        LongRBTree.prototype.size = function () {
                            return this._size;
                        };
                        LongRBTree.prototype.toString = function () {
                            return this.serialize();
                        };
                        LongRBTree.prototype.isDirty = function () {
                            return this._dirty;
                        };
                        LongRBTree.prototype.serialize = function () {
                            var builder = new java.lang.StringBuilder();
                            builder.append(this._size);
                            if (this.root != null) {
                                this.root.serialize(builder);
                            }
                            return builder.toString();
                        };
                        LongRBTree.prototype.setClean = function () {
                            this._dirty = false;
                        };
                        LongRBTree.prototype.unserialize = function (payload) {
                            if (payload == null || payload.length == 0) {
                                return;
                            }
                            var i = 0;
                            var buffer = new java.lang.StringBuilder();
                            var ch = payload.charAt(i);
                            while (i < payload.length && ch != '|') {
                                buffer.append(ch);
                                i = i + 1;
                                ch = payload.charAt(i);
                            }
                            this._size = java.lang.Integer.parseInt(buffer.toString());
                            var ctx = new org.kevoree.modeling.api.rbtree.TreeReaderContext();
                            ctx.index = i;
                            ctx.payload = payload;
                            ctx.buffer = new Array();
                            this.root = org.kevoree.modeling.api.rbtree.LongTreeNode.unserialize(ctx);
                            this._dirty = false;
                        };
                        LongRBTree.prototype.previousOrEqual = function (key) {
                            var p = this.root;
                            if (p == null) {
                                return null;
                            }
                            while (p != null) {
                                if (key == p.key) {
                                    return p;
                                }
                                if (key > p.key) {
                                    if (p.getRight() != null) {
                                        p = p.getRight();
                                    }
                                    else {
                                        return p;
                                    }
                                }
                                else {
                                    if (p.getLeft() != null) {
                                        p = p.getLeft();
                                    }
                                    else {
                                        var parent = p.getParent();
                                        var ch = p;
                                        while (parent != null && ch == parent.getLeft()) {
                                            ch = parent;
                                            parent = parent.getParent();
                                        }
                                        return parent;
                                    }
                                }
                            }
                            return null;
                        };
                        LongRBTree.prototype.nextOrEqual = function (key) {
                            var p = this.root;
                            if (p == null) {
                                return null;
                            }
                            while (p != null) {
                                if (key == p.key) {
                                    return p;
                                }
                                if (key < p.key) {
                                    if (p.getLeft() != null) {
                                        p = p.getLeft();
                                    }
                                    else {
                                        return p;
                                    }
                                }
                                else {
                                    if (p.getRight() != null) {
                                        p = p.getRight();
                                    }
                                    else {
                                        var parent = p.getParent();
                                        var ch = p;
                                        while (parent != null && ch == parent.getRight()) {
                                            ch = parent;
                                            parent = parent.getParent();
                                        }
                                        return parent;
                                    }
                                }
                            }
                            return null;
                        };
                        LongRBTree.prototype.previous = function (key) {
                            var p = this.root;
                            if (p == null) {
                                return null;
                            }
                            while (p != null) {
                                if (key < p.key) {
                                    if (p.getLeft() != null) {
                                        p = p.getLeft();
                                    }
                                    else {
                                        return p.previous();
                                    }
                                }
                                else {
                                    if (key > p.key) {
                                        if (p.getRight() != null) {
                                            p = p.getRight();
                                        }
                                        else {
                                            return p;
                                        }
                                    }
                                    else {
                                        return p.previous();
                                    }
                                }
                            }
                            return null;
                        };
                        LongRBTree.prototype.previousWhileNot = function (key, until) {
                            var elm = this.previousOrEqual(key);
                            if (elm.value == until) {
                                return null;
                            }
                            else {
                                if (elm.key == key) {
                                    elm = elm.previous();
                                }
                            }
                            if (elm == null || elm.value == until) {
                                return null;
                            }
                            else {
                                return elm;
                            }
                        };
                        LongRBTree.prototype.next = function (key) {
                            var p = this.root;
                            if (p == null) {
                                return null;
                            }
                            while (p != null) {
                                if (key < p.key) {
                                    if (p.getLeft() != null) {
                                        p = p.getLeft();
                                    }
                                    else {
                                        return p;
                                    }
                                }
                                else {
                                    if (key > p.key) {
                                        if (p.getRight() != null) {
                                            p = p.getRight();
                                        }
                                        else {
                                            return p.next();
                                        }
                                    }
                                    else {
                                        return p.next();
                                    }
                                }
                            }
                            return null;
                        };
                        LongRBTree.prototype.nextWhileNot = function (key, until) {
                            var elm = this.nextOrEqual(key);
                            if (elm.value == until) {
                                return null;
                            }
                            else {
                                if (elm.key == key) {
                                    elm = elm.next();
                                }
                            }
                            if (elm == null || elm.value == until) {
                                return null;
                            }
                            else {
                                return elm;
                            }
                        };
                        LongRBTree.prototype.first = function () {
                            var p = this.root;
                            if (p == null) {
                                return null;
                            }
                            while (p != null) {
                                if (p.getLeft() != null) {
                                    p = p.getLeft();
                                }
                                else {
                                    return p;
                                }
                            }
                            return null;
                        };
                        LongRBTree.prototype.last = function () {
                            var p = this.root;
                            if (p == null) {
                                return null;
                            }
                            while (p != null) {
                                if (p.getRight() != null) {
                                    p = p.getRight();
                                }
                                else {
                                    return p;
                                }
                            }
                            return null;
                        };
                        LongRBTree.prototype.firstWhileNot = function (key, until) {
                            var elm = this.previousOrEqual(key);
                            if (elm == null) {
                                return null;
                            }
                            else {
                                if (elm.value == until) {
                                    return null;
                                }
                            }
                            var prev = null;
                            do {
                                prev = elm.previous();
                                if (prev == null || prev.value == until) {
                                    return elm;
                                }
                                else {
                                    elm = prev;
                                }
                            } while (elm != null);
                            return prev;
                        };
                        LongRBTree.prototype.lastWhileNot = function (key, until) {
                            var elm = this.previousOrEqual(key);
                            if (elm == null) {
                                return null;
                            }
                            else {
                                if (elm.value == until) {
                                    return null;
                                }
                            }
                            var next;
                            do {
                                next = elm.next();
                                if (next == null || next.value == until) {
                                    return elm;
                                }
                                else {
                                    elm = next;
                                }
                            } while (elm != null);
                            return next;
                        };
                        LongRBTree.prototype.lookupNode = function (key) {
                            var n = this.root;
                            if (n == null) {
                                return null;
                            }
                            while (n != null) {
                                if (key == n.key) {
                                    return n;
                                }
                                else {
                                    if (key < n.key) {
                                        n = n.getLeft();
                                    }
                                    else {
                                        n = n.getRight();
                                    }
                                }
                            }
                            return n;
                        };
                        LongRBTree.prototype.lookup = function (key) {
                            var n = this.lookupNode(key);
                            if (n == null) {
                                return null;
                            }
                            else {
                                return n.value;
                            }
                        };
                        LongRBTree.prototype.rotateLeft = function (n) {
                            var r = n.getRight();
                            this.replaceNode(n, r);
                            n.setRight(r.getLeft());
                            if (r.getLeft() != null) {
                                r.getLeft().setParent(n);
                            }
                            r.setLeft(n);
                            n.setParent(r);
                        };
                        LongRBTree.prototype.rotateRight = function (n) {
                            var l = n.getLeft();
                            this.replaceNode(n, l);
                            n.setLeft(l.getRight());
                            if (l.getRight() != null) {
                                l.getRight().setParent(n);
                            }
                            l.setRight(n);
                            n.setParent(l);
                        };
                        LongRBTree.prototype.replaceNode = function (oldn, newn) {
                            if (oldn.getParent() == null) {
                                this.root = newn;
                            }
                            else {
                                if (oldn == oldn.getParent().getLeft()) {
                                    oldn.getParent().setLeft(newn);
                                }
                                else {
                                    oldn.getParent().setRight(newn);
                                }
                            }
                            if (newn != null) {
                                newn.setParent(oldn.getParent());
                            }
                        };
                        LongRBTree.prototype.insert = function (key, value) {
                            this._dirty = true;
                            var insertedNode = new org.kevoree.modeling.api.rbtree.LongTreeNode(key, value, org.kevoree.modeling.api.rbtree.Color.RED, null, null);
                            if (this.root == null) {
                                this._size++;
                                this.root = insertedNode;
                            }
                            else {
                                var n = this.root;
                                while (true) {
                                    if (key == n.key) {
                                        n.value = value;
                                        return;
                                    }
                                    else {
                                        if (key < n.key) {
                                            if (n.getLeft() == null) {
                                                n.setLeft(insertedNode);
                                                this._size++;
                                                break;
                                            }
                                            else {
                                                n = n.getLeft();
                                            }
                                        }
                                        else {
                                            if (n.getRight() == null) {
                                                n.setRight(insertedNode);
                                                this._size++;
                                                break;
                                            }
                                            else {
                                                n = n.getRight();
                                            }
                                        }
                                    }
                                }
                                insertedNode.setParent(n);
                            }
                            this.insertCase1(insertedNode);
                        };
                        LongRBTree.prototype.insertCase1 = function (n) {
                            if (n.getParent() == null) {
                                n.color = org.kevoree.modeling.api.rbtree.Color.BLACK;
                            }
                            else {
                                this.insertCase2(n);
                            }
                        };
                        LongRBTree.prototype.insertCase2 = function (n) {
                            if (this.nodeColor(n.getParent()) == org.kevoree.modeling.api.rbtree.Color.BLACK) {
                                return;
                            }
                            else {
                                this.insertCase3(n);
                            }
                        };
                        LongRBTree.prototype.insertCase3 = function (n) {
                            if (this.nodeColor(n.uncle()) == org.kevoree.modeling.api.rbtree.Color.RED) {
                                n.getParent().color = org.kevoree.modeling.api.rbtree.Color.BLACK;
                                n.uncle().color = org.kevoree.modeling.api.rbtree.Color.BLACK;
                                n.grandparent().color = org.kevoree.modeling.api.rbtree.Color.RED;
                                this.insertCase1(n.grandparent());
                            }
                            else {
                                this.insertCase4(n);
                            }
                        };
                        LongRBTree.prototype.insertCase4 = function (n_n) {
                            var n = n_n;
                            if (n == n.getParent().getRight() && n.getParent() == n.grandparent().getLeft()) {
                                this.rotateLeft(n.getParent());
                                n = n.getLeft();
                            }
                            else {
                                if (n == n.getParent().getLeft() && n.getParent() == n.grandparent().getRight()) {
                                    this.rotateRight(n.getParent());
                                    n = n.getRight();
                                }
                            }
                            this.insertCase5(n);
                        };
                        LongRBTree.prototype.insertCase5 = function (n) {
                            n.getParent().color = org.kevoree.modeling.api.rbtree.Color.BLACK;
                            n.grandparent().color = org.kevoree.modeling.api.rbtree.Color.RED;
                            if (n == n.getParent().getLeft() && n.getParent() == n.grandparent().getLeft()) {
                                this.rotateRight(n.grandparent());
                            }
                            else {
                                this.rotateLeft(n.grandparent());
                            }
                        };
                        LongRBTree.prototype.delete = function (key) {
                            var n = this.lookupNode(key);
                            if (n == null) {
                                return;
                            }
                            else {
                                this._size--;
                                if (n.getLeft() != null && n.getRight() != null) {
                                    var pred = n.getLeft();
                                    while (pred.getRight() != null) {
                                        pred = pred.getRight();
                                    }
                                    n.key = pred.key;
                                    n.value = pred.value;
                                    n = pred;
                                }
                                var child;
                                if (n.getRight() == null) {
                                    child = n.getLeft();
                                }
                                else {
                                    child = n.getRight();
                                }
                                if (this.nodeColor(n) == org.kevoree.modeling.api.rbtree.Color.BLACK) {
                                    n.color = this.nodeColor(child);
                                    this.deleteCase1(n);
                                }
                                this.replaceNode(n, child);
                            }
                        };
                        LongRBTree.prototype.deleteCase1 = function (n) {
                            if (n.getParent() == null) {
                                return;
                            }
                            else {
                                this.deleteCase2(n);
                            }
                        };
                        LongRBTree.prototype.deleteCase2 = function (n) {
                            if (this.nodeColor(n.sibling()) == org.kevoree.modeling.api.rbtree.Color.RED) {
                                n.getParent().color = org.kevoree.modeling.api.rbtree.Color.RED;
                                n.sibling().color = org.kevoree.modeling.api.rbtree.Color.BLACK;
                                if (n == n.getParent().getLeft()) {
                                    this.rotateLeft(n.getParent());
                                }
                                else {
                                    this.rotateRight(n.getParent());
                                }
                            }
                            this.deleteCase3(n);
                        };
                        LongRBTree.prototype.deleteCase3 = function (n) {
                            if (this.nodeColor(n.getParent()) == org.kevoree.modeling.api.rbtree.Color.BLACK && this.nodeColor(n.sibling()) == org.kevoree.modeling.api.rbtree.Color.BLACK && this.nodeColor(n.sibling().getLeft()) == org.kevoree.modeling.api.rbtree.Color.BLACK && this.nodeColor(n.sibling().getRight()) == org.kevoree.modeling.api.rbtree.Color.BLACK) {
                                n.sibling().color = org.kevoree.modeling.api.rbtree.Color.RED;
                                this.deleteCase1(n.getParent());
                            }
                            else {
                                this.deleteCase4(n);
                            }
                        };
                        LongRBTree.prototype.deleteCase4 = function (n) {
                            if (this.nodeColor(n.getParent()) == org.kevoree.modeling.api.rbtree.Color.RED && this.nodeColor(n.sibling()) == org.kevoree.modeling.api.rbtree.Color.BLACK && this.nodeColor(n.sibling().getLeft()) == org.kevoree.modeling.api.rbtree.Color.BLACK && this.nodeColor(n.sibling().getRight()) == org.kevoree.modeling.api.rbtree.Color.BLACK) {
                                n.sibling().color = org.kevoree.modeling.api.rbtree.Color.RED;
                                n.getParent().color = org.kevoree.modeling.api.rbtree.Color.BLACK;
                            }
                            else {
                                this.deleteCase5(n);
                            }
                        };
                        LongRBTree.prototype.deleteCase5 = function (n) {
                            if (n == n.getParent().getLeft() && this.nodeColor(n.sibling()) == org.kevoree.modeling.api.rbtree.Color.BLACK && this.nodeColor(n.sibling().getLeft()) == org.kevoree.modeling.api.rbtree.Color.RED && this.nodeColor(n.sibling().getRight()) == org.kevoree.modeling.api.rbtree.Color.BLACK) {
                                n.sibling().color = org.kevoree.modeling.api.rbtree.Color.RED;
                                n.sibling().getLeft().color = org.kevoree.modeling.api.rbtree.Color.BLACK;
                                this.rotateRight(n.sibling());
                            }
                            else {
                                if (n == n.getParent().getRight() && this.nodeColor(n.sibling()) == org.kevoree.modeling.api.rbtree.Color.BLACK && this.nodeColor(n.sibling().getRight()) == org.kevoree.modeling.api.rbtree.Color.RED && this.nodeColor(n.sibling().getLeft()) == org.kevoree.modeling.api.rbtree.Color.BLACK) {
                                    n.sibling().color = org.kevoree.modeling.api.rbtree.Color.RED;
                                    n.sibling().getRight().color = org.kevoree.modeling.api.rbtree.Color.BLACK;
                                    this.rotateLeft(n.sibling());
                                }
                            }
                            this.deleteCase6(n);
                        };
                        LongRBTree.prototype.deleteCase6 = function (n) {
                            n.sibling().color = this.nodeColor(n.getParent());
                            n.getParent().color = org.kevoree.modeling.api.rbtree.Color.BLACK;
                            if (n == n.getParent().getLeft()) {
                                n.sibling().getRight().color = org.kevoree.modeling.api.rbtree.Color.BLACK;
                                this.rotateLeft(n.getParent());
                            }
                            else {
                                n.sibling().getLeft().color = org.kevoree.modeling.api.rbtree.Color.BLACK;
                                this.rotateRight(n.getParent());
                            }
                        };
                        LongRBTree.prototype.nodeColor = function (n) {
                            if (n == null) {
                                return org.kevoree.modeling.api.rbtree.Color.BLACK;
                            }
                            else {
                                return n.color;
                            }
                        };
                        return LongRBTree;
                    })();
                    rbtree.LongRBTree = LongRBTree;
                    var LongTreeNode = (function () {
                        function LongTreeNode(key, value, color, left, right) {
                            this.parent = null;
                            this.key = key;
                            this.value = value;
                            this.color = color;
                            this.left = left;
                            this.right = right;
                            if (left != null) {
                                left.parent = this;
                            }
                            if (right != null) {
                                right.parent = this;
                            }
                            this.parent = null;
                        }
                        LongTreeNode.prototype.grandparent = function () {
                            if (this.parent != null) {
                                return this.parent.parent;
                            }
                            else {
                                return null;
                            }
                        };
                        LongTreeNode.prototype.sibling = function () {
                            if (this.parent == null) {
                                return null;
                            }
                            else {
                                if (this == this.parent.left) {
                                    return this.parent.right;
                                }
                                else {
                                    return this.parent.left;
                                }
                            }
                        };
                        LongTreeNode.prototype.uncle = function () {
                            if (this.parent != null) {
                                return this.parent.sibling();
                            }
                            else {
                                return null;
                            }
                        };
                        LongTreeNode.prototype.getLeft = function () {
                            return this.left;
                        };
                        LongTreeNode.prototype.setLeft = function (left) {
                            this.left = left;
                        };
                        LongTreeNode.prototype.getRight = function () {
                            return this.right;
                        };
                        LongTreeNode.prototype.setRight = function (right) {
                            this.right = right;
                        };
                        LongTreeNode.prototype.getParent = function () {
                            return this.parent;
                        };
                        LongTreeNode.prototype.setParent = function (parent) {
                            this.parent = parent;
                        };
                        LongTreeNode.prototype.serialize = function (builder) {
                            builder.append("|");
                            if (this.color == org.kevoree.modeling.api.rbtree.Color.BLACK) {
                                builder.append(LongTreeNode.BLACK);
                            }
                            else {
                                builder.append(LongTreeNode.RED);
                            }
                            builder.append(this.key);
                            builder.append("@");
                            builder.append(this.value);
                            if (this.left == null && this.right == null) {
                                builder.append("%");
                            }
                            else {
                                if (this.left != null) {
                                    this.left.serialize(builder);
                                }
                                else {
                                    builder.append("#");
                                }
                                if (this.right != null) {
                                    this.right.serialize(builder);
                                }
                                else {
                                    builder.append("#");
                                }
                            }
                        };
                        LongTreeNode.prototype.next = function () {
                            var p = this;
                            if (p.right != null) {
                                p = p.right;
                                while (p.left != null) {
                                    p = p.left;
                                }
                                return p;
                            }
                            else {
                                if (p.parent != null) {
                                    if (p == p.parent.left) {
                                        return p.parent;
                                    }
                                    else {
                                        while (p.parent != null && p == p.parent.right) {
                                            p = p.parent;
                                        }
                                        return p.parent;
                                    }
                                }
                                else {
                                    return null;
                                }
                            }
                        };
                        LongTreeNode.prototype.previous = function () {
                            var p = this;
                            if (p.left != null) {
                                p = p.left;
                                while (p.right != null) {
                                    p = p.right;
                                }
                                return p;
                            }
                            else {
                                if (p.parent != null) {
                                    if (p == p.parent.right) {
                                        return p.parent;
                                    }
                                    else {
                                        while (p.parent != null && p == p.parent.left) {
                                            p = p.parent;
                                        }
                                        return p.parent;
                                    }
                                }
                                else {
                                    return null;
                                }
                            }
                        };
                        LongTreeNode.unserialize = function (ctx) {
                            return org.kevoree.modeling.api.rbtree.LongTreeNode.internal_unserialize(true, ctx);
                        };
                        LongTreeNode.internal_unserialize = function (rightBranch, ctx) {
                            if (ctx.index >= ctx.payload.length) {
                                return null;
                            }
                            var ch = ctx.payload.charAt(ctx.index);
                            if (ch == '%') {
                                if (rightBranch) {
                                    ctx.index = ctx.index + 1;
                                }
                                return null;
                            }
                            if (ch == '#') {
                                ctx.index = ctx.index + 1;
                                return null;
                            }
                            if (ch != '|') {
                                throw new java.lang.Exception("Error while loading BTree");
                            }
                            ctx.index = ctx.index + 1;
                            ch = ctx.payload.charAt(ctx.index);
                            var color = org.kevoree.modeling.api.rbtree.Color.BLACK;
                            if (ch == LongTreeNode.RED) {
                                color = org.kevoree.modeling.api.rbtree.Color.RED;
                            }
                            ctx.index = ctx.index + 1;
                            ch = ctx.payload.charAt(ctx.index);
                            var i = 0;
                            while (ctx.index + 1 < ctx.payload.length && ch != '|' && ch != '#' && ch != '%' && ch != '@') {
                                ctx.buffer[i] = ch;
                                i++;
                                ctx.index = ctx.index + 1;
                                ch = ctx.payload.charAt(ctx.index);
                            }
                            if (ch != '|' && ch != '#' && ch != '%' && ch != '@') {
                                ctx.buffer[i] = ch;
                                i++;
                            }
                            var key = java.lang.Long.parseLong(StringUtils.copyValueOf(ctx.buffer, 0, i));
                            i = 0;
                            ctx.index = ctx.index + 1;
                            ch = ctx.payload.charAt(ctx.index);
                            while (ctx.index + 1 < ctx.payload.length && ch != '|' && ch != '#' && ch != '%' && ch != '@') {
                                ctx.buffer[i] = ch;
                                i++;
                                ctx.index = ctx.index + 1;
                                ch = ctx.payload.charAt(ctx.index);
                            }
                            if (ch != '|' && ch != '#' && ch != '%' && ch != '@') {
                                ctx.buffer[i] = ch;
                                i++;
                            }
                            var value = java.lang.Long.parseLong(StringUtils.copyValueOf(ctx.buffer, 0, i));
                            var p = new org.kevoree.modeling.api.rbtree.LongTreeNode(key, value, color, null, null);
                            var left = org.kevoree.modeling.api.rbtree.LongTreeNode.internal_unserialize(false, ctx);
                            if (left != null) {
                                left.setParent(p);
                            }
                            var right = org.kevoree.modeling.api.rbtree.LongTreeNode.internal_unserialize(true, ctx);
                            if (right != null) {
                                right.setParent(p);
                            }
                            p.setLeft(left);
                            p.setRight(right);
                            return p;
                        };
                        LongTreeNode.BLACK = '0';
                        LongTreeNode.RED = '2';
                        return LongTreeNode;
                    })();
                    rbtree.LongTreeNode = LongTreeNode;
                    var TreeNode = (function () {
                        function TreeNode(key, color, left, right) {
                            this.parent = null;
                            this.key = key;
                            this.color = color;
                            this.left = left;
                            this.right = right;
                            if (left != null) {
                                left.parent = this;
                            }
                            if (right != null) {
                                right.parent = this;
                            }
                            this.parent = null;
                        }
                        TreeNode.prototype.getKey = function () {
                            return this.key;
                        };
                        TreeNode.prototype.grandparent = function () {
                            if (this.parent != null) {
                                return this.parent.parent;
                            }
                            else {
                                return null;
                            }
                        };
                        TreeNode.prototype.sibling = function () {
                            if (this.parent == null) {
                                return null;
                            }
                            else {
                                if (this == this.parent.left) {
                                    return this.parent.right;
                                }
                                else {
                                    return this.parent.left;
                                }
                            }
                        };
                        TreeNode.prototype.uncle = function () {
                            if (this.parent != null) {
                                return this.parent.sibling();
                            }
                            else {
                                return null;
                            }
                        };
                        TreeNode.prototype.getLeft = function () {
                            return this.left;
                        };
                        TreeNode.prototype.setLeft = function (left) {
                            this.left = left;
                        };
                        TreeNode.prototype.getRight = function () {
                            return this.right;
                        };
                        TreeNode.prototype.setRight = function (right) {
                            this.right = right;
                        };
                        TreeNode.prototype.getParent = function () {
                            return this.parent;
                        };
                        TreeNode.prototype.setParent = function (parent) {
                            this.parent = parent;
                        };
                        TreeNode.prototype.serialize = function (builder) {
                            builder.append("|");
                            if (this.color == org.kevoree.modeling.api.rbtree.Color.BLACK) {
                                builder.append(TreeNode.BLACK);
                            }
                            else {
                                builder.append(TreeNode.RED);
                            }
                            builder.append(this.key);
                            if (this.left == null && this.right == null) {
                                builder.append("%");
                            }
                            else {
                                if (this.left != null) {
                                    this.left.serialize(builder);
                                }
                                else {
                                    builder.append("#");
                                }
                                if (this.right != null) {
                                    this.right.serialize(builder);
                                }
                                else {
                                    builder.append("#");
                                }
                            }
                        };
                        TreeNode.prototype.next = function () {
                            var p = this;
                            if (p.right != null) {
                                p = p.right;
                                while (p.left != null) {
                                    p = p.left;
                                }
                                return p;
                            }
                            else {
                                if (p.parent != null) {
                                    if (p == p.parent.left) {
                                        return p.parent;
                                    }
                                    else {
                                        while (p.parent != null && p == p.parent.right) {
                                            p = p.parent;
                                        }
                                        return p.parent;
                                    }
                                }
                                else {
                                    return null;
                                }
                            }
                        };
                        TreeNode.prototype.previous = function () {
                            var p = this;
                            if (p.left != null) {
                                p = p.left;
                                while (p.right != null) {
                                    p = p.right;
                                }
                                return p;
                            }
                            else {
                                if (p.parent != null) {
                                    if (p == p.parent.right) {
                                        return p.parent;
                                    }
                                    else {
                                        while (p.parent != null && p == p.parent.left) {
                                            p = p.parent;
                                        }
                                        return p.parent;
                                    }
                                }
                                else {
                                    return null;
                                }
                            }
                        };
                        TreeNode.unserialize = function (ctx) {
                            return org.kevoree.modeling.api.rbtree.TreeNode.internal_unserialize(true, ctx);
                        };
                        TreeNode.internal_unserialize = function (rightBranch, ctx) {
                            if (ctx.index >= ctx.payload.length) {
                                return null;
                            }
                            var tokenBuild = new java.lang.StringBuilder();
                            var ch = ctx.payload.charAt(ctx.index);
                            if (ch == '%') {
                                if (rightBranch) {
                                    ctx.index = ctx.index + 1;
                                }
                                return null;
                            }
                            if (ch == '#') {
                                ctx.index = ctx.index + 1;
                                return null;
                            }
                            if (ch != '|') {
                                throw new java.lang.Exception("Error while loading BTree");
                            }
                            ctx.index = ctx.index + 1;
                            ch = ctx.payload.charAt(ctx.index);
                            var color;
                            if (ch == org.kevoree.modeling.api.rbtree.TreeNode.BLACK) {
                                color = org.kevoree.modeling.api.rbtree.Color.BLACK;
                            }
                            else {
                                color = org.kevoree.modeling.api.rbtree.Color.RED;
                            }
                            ctx.index = ctx.index + 1;
                            ch = ctx.payload.charAt(ctx.index);
                            while (ctx.index + 1 < ctx.payload.length && ch != '|' && ch != '#' && ch != '%') {
                                tokenBuild.append(ch);
                                ctx.index = ctx.index + 1;
                                ch = ctx.payload.charAt(ctx.index);
                            }
                            if (ch != '|' && ch != '#' && ch != '%') {
                                tokenBuild.append(ch);
                            }
                            var p = new org.kevoree.modeling.api.rbtree.TreeNode(java.lang.Long.parseLong(tokenBuild.toString()), color, null, null);
                            var left = org.kevoree.modeling.api.rbtree.TreeNode.internal_unserialize(false, ctx);
                            if (left != null) {
                                left.setParent(p);
                            }
                            var right = org.kevoree.modeling.api.rbtree.TreeNode.internal_unserialize(true, ctx);
                            if (right != null) {
                                right.setParent(p);
                            }
                            p.setLeft(left);
                            p.setRight(right);
                            return p;
                        };
                        TreeNode.BLACK = '0';
                        TreeNode.RED = '1';
                        return TreeNode;
                    })();
                    rbtree.TreeNode = TreeNode;
                    var TreeReaderContext = (function () {
                        function TreeReaderContext() {
                        }
                        return TreeReaderContext;
                    })();
                    rbtree.TreeReaderContext = TreeReaderContext;
                })(rbtree = api.rbtree || (api.rbtree = {}));
                var reflexive;
                (function (reflexive) {
                    var DynamicKModel = (function (_super) {
                        __extends(DynamicKModel, _super);
                        function DynamicKModel() {
                            _super.apply(this, arguments);
                            this._metaModel = null;
                        }
                        DynamicKModel.prototype.setMetaModel = function (p_metaModel) {
                            this._metaModel = p_metaModel;
                        };
                        DynamicKModel.prototype.metaModel = function () {
                            return this._metaModel;
                        };
                        DynamicKModel.prototype.internal_create = function (key) {
                            return new org.kevoree.modeling.api.reflexive.DynamicKUniverse(this, key);
                        };
                        return DynamicKModel;
                    })(org.kevoree.modeling.api.abs.AbstractKModel);
                    reflexive.DynamicKModel = DynamicKModel;
                    var DynamicKObject = (function (_super) {
                        __extends(DynamicKObject, _super);
                        function DynamicKObject(p_view, p_uuid, p_universeTree, p_metaClass) {
                            _super.call(this, p_view, p_uuid, p_universeTree, p_metaClass);
                        }
                        return DynamicKObject;
                    })(org.kevoree.modeling.api.abs.AbstractKObject);
                    reflexive.DynamicKObject = DynamicKObject;
                    var DynamicKUniverse = (function (_super) {
                        __extends(DynamicKUniverse, _super);
                        function DynamicKUniverse(p_universe, p_key) {
                            _super.call(this, p_universe, p_key);
                        }
                        DynamicKUniverse.prototype.internal_create = function (timePoint) {
                            return new org.kevoree.modeling.api.reflexive.DynamicKView(timePoint, this);
                        };
                        return DynamicKUniverse;
                    })(org.kevoree.modeling.api.abs.AbstractKUniverse);
                    reflexive.DynamicKUniverse = DynamicKUniverse;
                    var DynamicKView = (function (_super) {
                        __extends(DynamicKView, _super);
                        function DynamicKView(p_now, p_dimension) {
                            _super.call(this, p_now, p_dimension);
                        }
                        DynamicKView.prototype.internalCreate = function (clazz, p_universeTree, key) {
                            return new org.kevoree.modeling.api.reflexive.DynamicKObject(this, key, p_universeTree, clazz);
                        };
                        return DynamicKView;
                    })(org.kevoree.modeling.api.abs.AbstractKView);
                    reflexive.DynamicKView = DynamicKView;
                    var DynamicMetaClass = (function (_super) {
                        __extends(DynamicMetaClass, _super);
                        function DynamicMetaClass(p_name, p_index) {
                            _super.call(this, p_name, p_index);
                            this.cached_attributes = new java.util.HashMap();
                            this.cached_references = new java.util.HashMap();
                            this.cached_methods = new java.util.HashMap();
                            this._globalIndex = -1;
                            this._globalIndex = org.kevoree.modeling.api.data.manager.Index.RESERVED_INDEXES;
                        }
                        DynamicMetaClass.prototype.addAttribute = function (p_name, p_type) {
                            var tempAttribute = new org.kevoree.modeling.api.abs.AbstractMetaAttribute(p_name, this._globalIndex, -1, false, p_type, org.kevoree.modeling.api.extrapolation.DiscreteExtrapolation.instance());
                            this.cached_attributes.put(tempAttribute.metaName(), tempAttribute);
                            this._globalIndex = this._globalIndex + 1;
                            this.internalInit();
                            return this;
                        };
                        DynamicMetaClass.prototype.addReference = function (p_name, p_metaClass, contained) {
                            var tempOrigin = this;
                            var tempReference = new org.kevoree.modeling.api.abs.AbstractMetaReference(p_name, this._globalIndex, contained, false, function () {
                                return p_metaClass;
                            }, null, function () {
                                return tempOrigin;
                            });
                            this.cached_references.put(tempReference.metaName(), tempReference);
                            this._globalIndex = this._globalIndex + 1;
                            this.internalInit();
                            return this;
                        };
                        DynamicMetaClass.prototype.addOperation = function (p_name) {
                            var tempOrigin = this;
                            var tempOperation = new org.kevoree.modeling.api.abs.AbstractMetaOperation(p_name, this._globalIndex, function () {
                                return tempOrigin;
                            });
                            this.cached_methods.put(tempOperation.metaName(), tempOperation);
                            this._globalIndex = this._globalIndex + 1;
                            this.internalInit();
                            return this;
                        };
                        DynamicMetaClass.prototype.internalInit = function () {
                            var tempAttributes = new Array();
                            var tempReference = new Array();
                            var tempOperation = new Array();
                            var keysAttributes = this.cached_attributes.keySet().toArray(new Array());
                            for (var i = 0; i < keysAttributes.length; i++) {
                                var resAtt = this.cached_attributes.get(keysAttributes[i]);
                                tempAttributes[i] = resAtt;
                            }
                            var keysReferences = this.cached_references.keySet().toArray(new Array());
                            for (var i = 0; i < keysReferences.length; i++) {
                                var resRef = this.cached_references.get(keysReferences[i]);
                                tempReference[i] = resRef;
                            }
                            var keysOperations = this.cached_methods.keySet().toArray(new Array());
                            for (var i = 0; i < keysOperations.length; i++) {
                                var resOp = this.cached_methods.get(keysOperations[i]);
                                tempOperation[i] = resOp;
                            }
                            this.init(tempAttributes, tempReference, tempOperation);
                        };
                        return DynamicMetaClass;
                    })(org.kevoree.modeling.api.abs.AbstractMetaClass);
                    reflexive.DynamicMetaClass = DynamicMetaClass;
                    var DynamicMetaModel = (function () {
                        function DynamicMetaModel(p_metaName) {
                            this._metaName = null;
                            this._classes = new java.util.HashMap();
                            this._metaName = p_metaName;
                        }
                        DynamicMetaModel.prototype.metaClasses = function () {
                            var tempResult = new Array();
                            var keys = this._classes.keySet().toArray(new Array());
                            for (var i = 0; i < keys.length; i++) {
                                var res = this._classes.get(keys[i]);
                                tempResult[res.index()] = res;
                            }
                            return tempResult;
                        };
                        DynamicMetaModel.prototype.metaClass = function (name) {
                            return this._classes.get(name);
                        };
                        DynamicMetaModel.prototype.metaName = function () {
                            return this._metaName;
                        };
                        DynamicMetaModel.prototype.index = function () {
                            return -1;
                        };
                        DynamicMetaModel.prototype.createMetaClass = function (name) {
                            if (this._classes.containsKey(name)) {
                                return this._classes.get(name);
                            }
                            else {
                                var dynamicMetaClass = new org.kevoree.modeling.api.reflexive.DynamicMetaClass(name, this._classes.keySet().size());
                                this._classes.put(name, dynamicMetaClass);
                                return dynamicMetaClass;
                            }
                        };
                        DynamicMetaModel.prototype.model = function () {
                            var universe = new org.kevoree.modeling.api.reflexive.DynamicKModel();
                            universe.setMetaModel(this);
                            return universe;
                        };
                        return DynamicMetaModel;
                    })();
                    reflexive.DynamicMetaModel = DynamicMetaModel;
                })(reflexive = api.reflexive || (api.reflexive = {}));
                var scheduler;
                (function (scheduler) {
                    var DirectScheduler = (function () {
                        function DirectScheduler() {
                        }
                        DirectScheduler.prototype.dispatch = function (runnable) {
                            runnable.run();
                        };
                        DirectScheduler.prototype.stop = function () {
                        };
                        return DirectScheduler;
                    })();
                    scheduler.DirectScheduler = DirectScheduler;
                    var ExecutorServiceScheduler = (function () {
                        function ExecutorServiceScheduler() {
                        }
                        ExecutorServiceScheduler.prototype.dispatch = function (p_runnable) {
                            p_runnable.run();
                        };
                        ExecutorServiceScheduler.prototype.stop = function () {
                        };
                        return ExecutorServiceScheduler;
                    })();
                    scheduler.ExecutorServiceScheduler = ExecutorServiceScheduler;
                })(scheduler = api.scheduler || (api.scheduler = {}));
                var trace;
                (function (_trace) {
                    var ModelAddTrace = (function () {
                        function ModelAddTrace(p_srcUUID, p_reference, p_paramUUID) {
                            this._srcUUID = p_srcUUID;
                            this._reference = p_reference;
                            this._paramUUID = p_paramUUID;
                        }
                        ModelAddTrace.prototype.toString = function () {
                            var buffer = new java.lang.StringBuilder();
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.openJSON);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.traceType);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.dp);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.KActionType.ADD.toString());
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.coma);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.src);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.dp);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            org.kevoree.modeling.api.json.JsonString.encodeBuffer(buffer, this._srcUUID + "");
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            if (this._reference != null) {
                                buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.coma);
                                buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                                buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.meta);
                                buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                                buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.dp);
                                buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                                buffer.append(this._reference.origin().metaName());
                                buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.sep);
                                buffer.append(this._reference.metaName());
                                buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            }
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.coma);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.previouspath);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.dp);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            org.kevoree.modeling.api.json.JsonString.encodeBuffer(buffer, this._paramUUID + "");
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.closeJSON);
                            return buffer.toString();
                        };
                        ModelAddTrace.prototype.meta = function () {
                            return this._reference;
                        };
                        ModelAddTrace.prototype.traceType = function () {
                            return org.kevoree.modeling.api.KActionType.ADD;
                        };
                        ModelAddTrace.prototype.sourceUUID = function () {
                            return null;
                        };
                        ModelAddTrace.prototype.paramUUID = function () {
                            return this._paramUUID;
                        };
                        return ModelAddTrace;
                    })();
                    _trace.ModelAddTrace = ModelAddTrace;
                    var ModelNewTrace = (function () {
                        function ModelNewTrace(p_srcUUID, p_metaClass) {
                            this._srcUUID = p_srcUUID;
                            this._metaClass = p_metaClass;
                        }
                        ModelNewTrace.prototype.meta = function () {
                            return this._metaClass;
                        };
                        ModelNewTrace.prototype.traceType = function () {
                            return org.kevoree.modeling.api.KActionType.NEW;
                        };
                        ModelNewTrace.prototype.sourceUUID = function () {
                            return this._srcUUID;
                        };
                        return ModelNewTrace;
                    })();
                    _trace.ModelNewTrace = ModelNewTrace;
                    var ModelRemoveTrace = (function () {
                        function ModelRemoveTrace(p_srcUUID, p_reference, p_paramUUID) {
                            this._srcUUID = p_srcUUID;
                            this._reference = p_reference;
                            this._paramUUID = p_paramUUID;
                        }
                        ModelRemoveTrace.prototype.toString = function () {
                            var buffer = new java.lang.StringBuilder();
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.openJSON);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.traceType);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.dp);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.KActionType.REMOVE);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.coma);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.src);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.dp);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            org.kevoree.modeling.api.json.JsonString.encodeBuffer(buffer, this._srcUUID + "");
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.coma);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.meta);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.dp);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(this._reference.metaName());
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.coma);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.objpath);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.dp);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            org.kevoree.modeling.api.json.JsonString.encodeBuffer(buffer, this._paramUUID + "");
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.closeJSON);
                            return buffer.toString();
                        };
                        ModelRemoveTrace.prototype.meta = function () {
                            return this._reference;
                        };
                        ModelRemoveTrace.prototype.traceType = function () {
                            return org.kevoree.modeling.api.KActionType.REMOVE;
                        };
                        ModelRemoveTrace.prototype.sourceUUID = function () {
                            return this._srcUUID;
                        };
                        ModelRemoveTrace.prototype.paramUUID = function () {
                            return this._paramUUID;
                        };
                        return ModelRemoveTrace;
                    })();
                    _trace.ModelRemoveTrace = ModelRemoveTrace;
                    var ModelSetTrace = (function () {
                        function ModelSetTrace(p_srcUUID, p_attribute, p_content) {
                            this._srcUUID = p_srcUUID;
                            this._attribute = p_attribute;
                            this._content = p_content;
                        }
                        ModelSetTrace.prototype.toString = function () {
                            var buffer = new java.lang.StringBuilder();
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.openJSON);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.traceType);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.dp);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.KActionType.SET);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.coma);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.src);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.dp);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            org.kevoree.modeling.api.json.JsonString.encodeBuffer(buffer, this._srcUUID + "");
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.coma);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.meta);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.dp);
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            buffer.append(this._attribute.metaName());
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            if (this._content != null) {
                                buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.coma);
                                buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                                buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.content);
                                buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                                buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.dp);
                                buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                                org.kevoree.modeling.api.json.JsonString.encodeBuffer(buffer, this._content.toString());
                                buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.bb);
                            }
                            buffer.append(org.kevoree.modeling.api.trace.ModelTraceConstants.closeJSON);
                            return buffer.toString();
                        };
                        ModelSetTrace.prototype.meta = function () {
                            return this._attribute;
                        };
                        ModelSetTrace.prototype.traceType = function () {
                            return org.kevoree.modeling.api.KActionType.SET;
                        };
                        ModelSetTrace.prototype.sourceUUID = function () {
                            return this._srcUUID;
                        };
                        ModelSetTrace.prototype.content = function () {
                            return this._content;
                        };
                        return ModelSetTrace;
                    })();
                    _trace.ModelSetTrace = ModelSetTrace;
                    var ModelTraceApplicator = (function () {
                        function ModelTraceApplicator(p_targetModel) {
                            this._targetModel = p_targetModel;
                        }
                        ModelTraceApplicator.prototype.applyTraceSequence = function (traceSeq, callback) {
                            var _this = this;
                            try {
                                var traces = traceSeq.traces();
                                var dependencies = new java.util.HashSet();
                                for (var i = 0; i < traces.length; i++) {
                                    if (traces[i] instanceof org.kevoree.modeling.api.trace.ModelAddTrace) {
                                        dependencies.add(traces[i].paramUUID());
                                        dependencies.add(traces[i].sourceUUID());
                                    }
                                    if (traces[i] instanceof org.kevoree.modeling.api.trace.ModelRemoveTrace) {
                                        dependencies.add(traces[i].paramUUID());
                                        dependencies.add(traces[i].sourceUUID());
                                    }
                                    if (traces[i] instanceof org.kevoree.modeling.api.trace.ModelSetTrace) {
                                        if (traces[i].meta() instanceof org.kevoree.modeling.api.abs.AbstractMetaAttribute) {
                                            dependencies.add(traces[i].sourceUUID());
                                        }
                                        else {
                                            try {
                                                var paramUUID = java.lang.Long.parseLong(traces[i].content().toString());
                                                dependencies.add(paramUUID);
                                                dependencies.add(traces[i].sourceUUID());
                                            }
                                            catch ($ex$) {
                                                if ($ex$ instanceof java.lang.Exception) {
                                                    var e = $ex$;
                                                    e.printStackTrace();
                                                }
                                            }
                                        }
                                    }
                                }
                                var dependenciesArray = dependencies.toArray(new Array());
                                this._targetModel.view().lookupAll(dependenciesArray).then(function (kObjects) {
                                    var cached = new java.util.HashMap();
                                    for (var i = 0; i < traces.length; i++) {
                                        try {
                                            var trace = traces[i];
                                            var sourceObject = cached.get(trace.sourceUUID());
                                            if (sourceObject != null) {
                                                if (trace instanceof org.kevoree.modeling.api.trace.ModelRemoveTrace) {
                                                    var removeTrace = trace;
                                                    var param = cached.get(removeTrace.paramUUID());
                                                    if (param != null) {
                                                        sourceObject.mutate(org.kevoree.modeling.api.KActionType.REMOVE, removeTrace.meta(), param);
                                                    }
                                                }
                                                else {
                                                    if (trace instanceof org.kevoree.modeling.api.trace.ModelAddTrace) {
                                                        var addTrace = trace;
                                                        var param = cached.get(addTrace.paramUUID());
                                                        if (param != null) {
                                                            sourceObject.mutate(org.kevoree.modeling.api.KActionType.ADD, addTrace.meta(), param);
                                                        }
                                                    }
                                                    else {
                                                        if (trace instanceof org.kevoree.modeling.api.trace.ModelSetTrace) {
                                                            var setTrace = trace;
                                                            if (trace.meta() instanceof org.kevoree.modeling.api.abs.AbstractMetaAttribute) {
                                                                sourceObject.set(trace.meta(), setTrace.content());
                                                            }
                                                            else {
                                                                try {
                                                                    var paramUUID = java.lang.Long.parseLong(traces[i].content().toString());
                                                                    var param = cached.get(paramUUID);
                                                                    if (param != null) {
                                                                        sourceObject.mutate(org.kevoree.modeling.api.KActionType.SET, trace.meta(), param);
                                                                    }
                                                                }
                                                                catch ($ex$) {
                                                                    if ($ex$ instanceof java.lang.Exception) {
                                                                        var e = $ex$;
                                                                        e.printStackTrace();
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        else {
                                                            if (trace instanceof org.kevoree.modeling.api.trace.ModelNewTrace) {
                                                                var universeTree = new org.kevoree.modeling.api.rbtree.LongRBTree();
                                                                universeTree.insert(_this._targetModel.universe().key(), _this._targetModel.now());
                                                                var newCreated = _this._targetModel.view().createProxy(trace.meta(), universeTree, trace.sourceUUID());
                                                                _this._targetModel.universe().model().manager().initKObject(newCreated, _this._targetModel.view());
                                                                cached.put(newCreated.uuid(), newCreated);
                                                            }
                                                            else {
                                                                System.err.println("Unknow traceType: " + trace);
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            else {
                                                System.err.println("Unknow object: " + trace);
                                            }
                                        }
                                        catch ($ex$) {
                                            if ($ex$ instanceof java.lang.Exception) {
                                                var e = $ex$;
                                                e.printStackTrace();
                                                System.err.println("Error " + e);
                                            }
                                        }
                                    }
                                    callback(null);
                                });
                            }
                            catch ($ex$) {
                                if ($ex$ instanceof java.lang.Exception) {
                                    var e = $ex$;
                                    callback(e);
                                }
                            }
                        };
                        return ModelTraceApplicator;
                    })();
                    _trace.ModelTraceApplicator = ModelTraceApplicator;
                    var ModelTraceConstants = (function () {
                        function ModelTraceConstants(p_code) {
                            this._code = "";
                            this._code = p_code;
                        }
                        ModelTraceConstants.prototype.toString = function () {
                            return this._code;
                        };
                        ModelTraceConstants.prototype.equals = function (other) {
                            return this == other;
                        };
                        ModelTraceConstants.values = function () {
                            return ModelTraceConstants._ModelTraceConstantsVALUES;
                        };
                        ModelTraceConstants.traceType = new ModelTraceConstants("type");
                        ModelTraceConstants.src = new ModelTraceConstants("src");
                        ModelTraceConstants.meta = new ModelTraceConstants("meta");
                        ModelTraceConstants.previouspath = new ModelTraceConstants("prev");
                        ModelTraceConstants.typename = new ModelTraceConstants("class");
                        ModelTraceConstants.objpath = new ModelTraceConstants("orig");
                        ModelTraceConstants.content = new ModelTraceConstants("val");
                        ModelTraceConstants.openJSON = new ModelTraceConstants("{");
                        ModelTraceConstants.closeJSON = new ModelTraceConstants("}");
                        ModelTraceConstants.bb = new ModelTraceConstants("\"");
                        ModelTraceConstants.sep = new ModelTraceConstants("@");
                        ModelTraceConstants.coma = new ModelTraceConstants(",");
                        ModelTraceConstants.dp = new ModelTraceConstants(":");
                        ModelTraceConstants._ModelTraceConstantsVALUES = [
                            ModelTraceConstants.traceType,
                            ModelTraceConstants.src,
                            ModelTraceConstants.meta,
                            ModelTraceConstants.previouspath,
                            ModelTraceConstants.typename,
                            ModelTraceConstants.objpath,
                            ModelTraceConstants.content,
                            ModelTraceConstants.openJSON,
                            ModelTraceConstants.closeJSON,
                            ModelTraceConstants.bb,
                            ModelTraceConstants.sep,
                            ModelTraceConstants.coma,
                            ModelTraceConstants.dp
                        ];
                        return ModelTraceConstants;
                    })();
                    _trace.ModelTraceConstants = ModelTraceConstants;
                    var TraceSequence = (function () {
                        function TraceSequence() {
                            this._traces = new java.util.ArrayList();
                        }
                        TraceSequence.prototype.traces = function () {
                            return this._traces.toArray(new Array());
                        };
                        TraceSequence.prototype.populate = function (addtraces) {
                            this._traces.addAll(addtraces);
                            return this;
                        };
                        TraceSequence.prototype.append = function (seq) {
                            this._traces.addAll(seq._traces);
                            return this;
                        };
                        TraceSequence.prototype.toString = function () {
                            var buffer = new java.lang.StringBuilder();
                            buffer.append("[");
                            var isFirst = true;
                            for (var i = 0; i < this._traces.size(); i++) {
                                var trace = this._traces.get(i);
                                if (!isFirst) {
                                    buffer.append(",\n");
                                }
                                buffer.append(trace);
                                isFirst = false;
                            }
                            buffer.append("]");
                            return buffer.toString();
                        };
                        TraceSequence.prototype.applyOn = function (target, callback) {
                            var traceApplicator = new org.kevoree.modeling.api.trace.ModelTraceApplicator(target);
                            traceApplicator.applyTraceSequence(this, callback);
                            return true;
                        };
                        TraceSequence.prototype.reverse = function () {
                            java.util.Collections.reverse(this._traces);
                            return this;
                        };
                        TraceSequence.prototype.size = function () {
                            return this._traces.size();
                        };
                        return TraceSequence;
                    })();
                    _trace.TraceSequence = TraceSequence;
                })(trace = api.trace || (api.trace = {}));
                var traversal;
                (function (traversal) {
                    var DefaultKTraversal = (function () {
                        function DefaultKTraversal(p_root, p_initAction) {
                            this._terminated = false;
                            this._initAction = p_initAction;
                            this._initObjs = new Array();
                            this._initObjs[0] = p_root;
                            this._lastAction = this._initAction;
                        }
                        DefaultKTraversal.prototype.traverse = function (p_metaReference) {
                            if (this._terminated) {
                                throw new java.lang.RuntimeException("Promise is terminated by the call of then method, please create another promise");
                            }
                            var tempAction = new org.kevoree.modeling.api.traversal.actions.KTraverseAction(p_metaReference);
                            this._lastAction.chain(tempAction);
                            this._lastAction = tempAction;
                            return this;
                        };
                        DefaultKTraversal.prototype.traverseQuery = function (p_metaReferenceQuery) {
                            if (this._terminated) {
                                throw new java.lang.RuntimeException("Promise is terminated by the call of then method, please create another promise");
                            }
                            var tempAction = new org.kevoree.modeling.api.traversal.actions.KTraverseQueryAction(p_metaReferenceQuery);
                            this._lastAction.chain(tempAction);
                            this._lastAction = tempAction;
                            return this;
                        };
                        DefaultKTraversal.prototype.withAttribute = function (p_attribute, p_expectedValue) {
                            if (this._terminated) {
                                throw new java.lang.RuntimeException("Promise is terminated by the call of then method, please create another promise");
                            }
                            var tempAction = new org.kevoree.modeling.api.traversal.actions.KFilterAttributeAction(p_attribute, p_expectedValue);
                            this._lastAction.chain(tempAction);
                            this._lastAction = tempAction;
                            return this;
                        };
                        DefaultKTraversal.prototype.withoutAttribute = function (p_attribute, p_expectedValue) {
                            if (this._terminated) {
                                throw new java.lang.RuntimeException("Promise is terminated by the call of then method, please create another promise");
                            }
                            var tempAction = new org.kevoree.modeling.api.traversal.actions.KFilterNotAttributeAction(p_attribute, p_expectedValue);
                            this._lastAction.chain(tempAction);
                            this._lastAction = tempAction;
                            return this;
                        };
                        DefaultKTraversal.prototype.attributeQuery = function (p_attributeQuery) {
                            if (this._terminated) {
                                throw new java.lang.RuntimeException("Promise is terminated by the call of then method, please create another promise");
                            }
                            var tempAction = new org.kevoree.modeling.api.traversal.actions.KFilterAttributeQueryAction(p_attributeQuery);
                            this._lastAction.chain(tempAction);
                            this._lastAction = tempAction;
                            return this;
                        };
                        DefaultKTraversal.prototype.filter = function (p_filter) {
                            if (this._terminated) {
                                throw new java.lang.RuntimeException("Promise is terminated by the call of then method, please create another promise");
                            }
                            var tempAction = new org.kevoree.modeling.api.traversal.actions.KFilterAction(p_filter);
                            this._lastAction.chain(tempAction);
                            this._lastAction = tempAction;
                            return this;
                        };
                        DefaultKTraversal.prototype.reverse = function (p_metaReference) {
                            if (this._terminated) {
                                throw new java.lang.RuntimeException("Promise is terminated by the call of then method, please create another promise");
                            }
                            var tempAction = new org.kevoree.modeling.api.traversal.actions.KReverseAction(p_metaReference);
                            this._lastAction.chain(tempAction);
                            this._lastAction = tempAction;
                            return this;
                        };
                        DefaultKTraversal.prototype.reverseQuery = function (p_metaReferenceQuery) {
                            if (this._terminated) {
                                throw new java.lang.RuntimeException("Promise is terminated by the call of then method, please create another promise");
                            }
                            var tempAction = new org.kevoree.modeling.api.traversal.actions.KReverseQueryAction(p_metaReferenceQuery);
                            this._lastAction.chain(tempAction);
                            this._lastAction = tempAction;
                            return this;
                        };
                        DefaultKTraversal.prototype.parents = function () {
                            if (this._terminated) {
                                throw new java.lang.RuntimeException("Promise is terminated by the call of then method, please create another promise");
                            }
                            var tempAction = new org.kevoree.modeling.api.traversal.actions.KParentsAction();
                            this._lastAction.chain(tempAction);
                            this._lastAction = tempAction;
                            return this;
                        };
                        DefaultKTraversal.prototype.then = function (callback) {
                            this._terminated = true;
                            this._lastAction.chain(new org.kevoree.modeling.api.traversal.actions.KFinalAction(callback));
                            this._initAction.execute(this._initObjs);
                        };
                        DefaultKTraversal.prototype.map = function (attribute, callback) {
                            this._terminated = true;
                            this._lastAction.chain(new org.kevoree.modeling.api.traversal.actions.KMapAction(attribute, callback));
                            this._initAction.execute(this._initObjs);
                        };
                        DefaultKTraversal.prototype.taskThen = function () {
                            var task = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            this.then(task.initCallback());
                            return task;
                        };
                        DefaultKTraversal.prototype.taskMap = function (attribute) {
                            var task = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            this.map(attribute, task.initCallback());
                            return task;
                        };
                        return DefaultKTraversal;
                    })();
                    traversal.DefaultKTraversal = DefaultKTraversal;
                    var actions;
                    (function (actions) {
                        var KFilterAction = (function () {
                            function KFilterAction(p_filter) {
                                this._filter = p_filter;
                            }
                            KFilterAction.prototype.chain = function (p_next) {
                                this._next = p_next;
                            };
                            KFilterAction.prototype.execute = function (p_inputs) {
                                var nextStep = new java.util.HashSet();
                                for (var i = 0; i < p_inputs.length; i++) {
                                    try {
                                        if (this._filter(p_inputs[i])) {
                                            nextStep.add(p_inputs[i]);
                                        }
                                    }
                                    catch ($ex$) {
                                        if ($ex$ instanceof java.lang.Exception) {
                                            var e = $ex$;
                                            e.printStackTrace();
                                        }
                                    }
                                }
                                this._next.execute(nextStep.toArray(new Array()));
                            };
                            return KFilterAction;
                        })();
                        actions.KFilterAction = KFilterAction;
                        var KFilterAttributeAction = (function () {
                            function KFilterAttributeAction(p_attribute, p_expectedValue) {
                                this._attribute = p_attribute;
                                this._expectedValue = p_expectedValue;
                            }
                            KFilterAttributeAction.prototype.chain = function (p_next) {
                                this._next = p_next;
                            };
                            KFilterAttributeAction.prototype.execute = function (p_inputs) {
                                if (p_inputs == null || p_inputs.length == 0) {
                                    this._next.execute(p_inputs);
                                    return;
                                }
                                else {
                                    var currentView = p_inputs[0].view();
                                    var nextStep = new java.util.HashSet();
                                    for (var i = 0; i < p_inputs.length; i++) {
                                        try {
                                            var loopObj = p_inputs[i];
                                            var raw = currentView.universe().model().manager().entry(loopObj, org.kevoree.modeling.api.data.manager.AccessMode.READ);
                                            if (raw != null) {
                                                if (this._attribute == null) {
                                                    if (this._expectedValue == null) {
                                                        nextStep.add(loopObj);
                                                    }
                                                    else {
                                                        var addToNext = false;
                                                        for (var j = 0; j < loopObj.metaClass().metaAttributes().length; j++) {
                                                            var ref = loopObj.metaClass().metaAttributes()[j];
                                                            var resolved = raw.get(ref.index());
                                                            if (resolved == null) {
                                                                if (this._expectedValue.toString().equals("*")) {
                                                                    addToNext = true;
                                                                }
                                                            }
                                                            else {
                                                                if (resolved.equals(this._expectedValue)) {
                                                                    addToNext = true;
                                                                }
                                                                else {
                                                                    if (resolved.toString().matches(this._expectedValue.toString().replace("*", ".*"))) {
                                                                        addToNext = true;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        if (addToNext) {
                                                            nextStep.add(loopObj);
                                                        }
                                                    }
                                                }
                                                else {
                                                    var translatedAtt = loopObj.internal_transpose_att(this._attribute);
                                                    if (translatedAtt != null) {
                                                        var resolved = raw.get(translatedAtt.index());
                                                        if (this._expectedValue == null) {
                                                            if (resolved == null) {
                                                                nextStep.add(loopObj);
                                                            }
                                                        }
                                                        else {
                                                            if (resolved == null) {
                                                                if (this._expectedValue.toString().equals("*")) {
                                                                    nextStep.add(loopObj);
                                                                }
                                                            }
                                                            else {
                                                                if (resolved.equals(this._expectedValue)) {
                                                                    nextStep.add(loopObj);
                                                                }
                                                                else {
                                                                    if (resolved.toString().matches(this._expectedValue.toString().replace("*", ".*"))) {
                                                                        nextStep.add(loopObj);
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            else {
                                                System.err.println("WARN: Empty KObject " + loopObj.uuid());
                                            }
                                        }
                                        catch ($ex$) {
                                            if ($ex$ instanceof java.lang.Exception) {
                                                var e = $ex$;
                                                e.printStackTrace();
                                            }
                                        }
                                    }
                                    this._next.execute(nextStep.toArray(new Array()));
                                }
                            };
                            return KFilterAttributeAction;
                        })();
                        actions.KFilterAttributeAction = KFilterAttributeAction;
                        var KFilterAttributeQueryAction = (function () {
                            function KFilterAttributeQueryAction(p_attributeQuery) {
                                this._attributeQuery = p_attributeQuery;
                            }
                            KFilterAttributeQueryAction.prototype.chain = function (p_next) {
                                this._next = p_next;
                            };
                            KFilterAttributeQueryAction.prototype.execute = function (p_inputs) {
                                if (p_inputs == null || p_inputs.length == 0) {
                                    this._next.execute(p_inputs);
                                    return;
                                }
                                else {
                                    var nextStep = new java.util.HashSet();
                                    for (var i = 0; i < p_inputs.length; i++) {
                                        try {
                                            var loopObj = p_inputs[i];
                                            if (this._attributeQuery == null) {
                                                nextStep.add(loopObj);
                                            }
                                            else {
                                                var params = this.buildParams(this._attributeQuery);
                                                var selectedForNext = true;
                                                var paramKeys = params.keySet().toArray(new Array());
                                                for (var h = 0; h < paramKeys.length; h++) {
                                                    var param = params.get(paramKeys[h]);
                                                    for (var j = 0; j < loopObj.metaClass().metaAttributes().length; j++) {
                                                        var metaAttribute = loopObj.metaClass().metaAttributes()[j];
                                                        if (metaAttribute.metaName().matches(param.name())) {
                                                            var o_raw = loopObj.get(metaAttribute);
                                                            if (o_raw != null) {
                                                                if (param.value().equals("null")) {
                                                                    if (!param.isNegative()) {
                                                                        selectedForNext = false;
                                                                    }
                                                                }
                                                                else {
                                                                    if (o_raw.toString().matches(param.value())) {
                                                                        if (param.isNegative()) {
                                                                            selectedForNext = false;
                                                                        }
                                                                    }
                                                                    else {
                                                                        if (!param.isNegative()) {
                                                                            selectedForNext = false;
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                            else {
                                                                if (param.value().equals("null") || param.value().equals("*")) {
                                                                    if (param.isNegative()) {
                                                                        selectedForNext = false;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                if (selectedForNext) {
                                                    nextStep.add(loopObj);
                                                }
                                            }
                                        }
                                        catch ($ex$) {
                                            if ($ex$ instanceof java.lang.Exception) {
                                                var e = $ex$;
                                                e.printStackTrace();
                                            }
                                        }
                                    }
                                    this._next.execute(nextStep.toArray(new Array()));
                                }
                            };
                            KFilterAttributeQueryAction.prototype.buildParams = function (p_paramString) {
                                var params = new java.util.HashMap();
                                var iParam = 0;
                                var lastStart = iParam;
                                while (iParam < p_paramString.length) {
                                    if (p_paramString.charAt(iParam) == ',') {
                                        var p = p_paramString.substring(lastStart, iParam).trim();
                                        if (p.equals("") && !p.equals("*")) {
                                            if (p.endsWith("=")) {
                                                p = p + "*";
                                            }
                                            var pArray = p.split("=");
                                            var pObject;
                                            if (pArray.length > 1) {
                                                var paramKey = pArray[0].trim();
                                                var negative = paramKey.endsWith("!");
                                                pObject = new org.kevoree.modeling.api.traversal.selector.KQueryParam(paramKey.replace("!", "").replace("*", ".*"), pArray[1].trim().replace("*", ".*"), negative);
                                                params.put(pObject.name(), pObject);
                                            }
                                        }
                                        lastStart = iParam + 1;
                                    }
                                    iParam = iParam + 1;
                                }
                                var lastParam = p_paramString.substring(lastStart, iParam).trim();
                                if (!lastParam.equals("") && !lastParam.equals("*")) {
                                    if (lastParam.endsWith("=")) {
                                        lastParam = lastParam + "*";
                                    }
                                    var pArray = lastParam.split("=");
                                    var pObject;
                                    if (pArray.length > 1) {
                                        var paramKey = pArray[0].trim();
                                        var negative = paramKey.endsWith("!");
                                        pObject = new org.kevoree.modeling.api.traversal.selector.KQueryParam(paramKey.replace("!", "").replace("*", ".*"), pArray[1].trim().replace("*", ".*"), negative);
                                        params.put(pObject.name(), pObject);
                                    }
                                }
                                return params;
                            };
                            return KFilterAttributeQueryAction;
                        })();
                        actions.KFilterAttributeQueryAction = KFilterAttributeQueryAction;
                        var KFilterNotAttributeAction = (function () {
                            function KFilterNotAttributeAction(p_attribute, p_expectedValue) {
                                this._attribute = p_attribute;
                                this._expectedValue = p_expectedValue;
                            }
                            KFilterNotAttributeAction.prototype.chain = function (p_next) {
                                this._next = p_next;
                            };
                            KFilterNotAttributeAction.prototype.execute = function (p_inputs) {
                                if (p_inputs == null || p_inputs.length == 0) {
                                    this._next.execute(p_inputs);
                                }
                                else {
                                    var currentView = p_inputs[0].view();
                                    var nextStep = new java.util.HashSet();
                                    for (var i = 0; i < p_inputs.length; i++) {
                                        try {
                                            var loopObj = p_inputs[i];
                                            var raw = currentView.universe().model().manager().entry(loopObj, org.kevoree.modeling.api.data.manager.AccessMode.READ);
                                            if (raw != null) {
                                                if (this._attribute == null) {
                                                    if (this._expectedValue == null) {
                                                        nextStep.add(loopObj);
                                                    }
                                                    else {
                                                        var addToNext = true;
                                                        for (var j = 0; j < loopObj.metaClass().metaAttributes().length; j++) {
                                                            var ref = loopObj.metaClass().metaAttributes()[j];
                                                            var resolved = raw.get(ref.index());
                                                            if (resolved == null) {
                                                                if (this._expectedValue.toString().equals("*")) {
                                                                    addToNext = false;
                                                                }
                                                            }
                                                            else {
                                                                if (resolved.equals(this._expectedValue)) {
                                                                    addToNext = false;
                                                                }
                                                                else {
                                                                    if (resolved.toString().matches(this._expectedValue.toString().replace("*", ".*"))) {
                                                                        addToNext = false;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        if (addToNext) {
                                                            nextStep.add(loopObj);
                                                        }
                                                    }
                                                }
                                                else {
                                                    var translatedAtt = loopObj.internal_transpose_att(this._attribute);
                                                    if (translatedAtt != null) {
                                                        var resolved = raw.get(translatedAtt.index());
                                                        if (this._expectedValue == null) {
                                                            if (resolved != null) {
                                                                nextStep.add(loopObj);
                                                            }
                                                        }
                                                        else {
                                                            if (resolved == null) {
                                                                if (!this._expectedValue.toString().equals("*")) {
                                                                    nextStep.add(loopObj);
                                                                }
                                                            }
                                                            else {
                                                                if (resolved.equals(this._expectedValue)) {
                                                                }
                                                                else {
                                                                    if (resolved.toString().matches(this._expectedValue.toString().replace("*", ".*"))) {
                                                                    }
                                                                    else {
                                                                        nextStep.add(loopObj);
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            else {
                                                System.err.println("WARN: Empty KObject " + loopObj.uuid());
                                            }
                                        }
                                        catch ($ex$) {
                                            if ($ex$ instanceof java.lang.Exception) {
                                                var e = $ex$;
                                                e.printStackTrace();
                                            }
                                        }
                                    }
                                    this._next.execute(nextStep.toArray(new Array()));
                                }
                            };
                            return KFilterNotAttributeAction;
                        })();
                        actions.KFilterNotAttributeAction = KFilterNotAttributeAction;
                        var KFinalAction = (function () {
                            function KFinalAction(p_callback) {
                                this._finalCallback = p_callback;
                            }
                            KFinalAction.prototype.chain = function (next) {
                            };
                            KFinalAction.prototype.execute = function (inputs) {
                                this._finalCallback(inputs);
                            };
                            return KFinalAction;
                        })();
                        actions.KFinalAction = KFinalAction;
                        var KMapAction = (function () {
                            function KMapAction(p_attribute, p_callback) {
                                this._finalCallback = p_callback;
                                this._attribute = p_attribute;
                            }
                            KMapAction.prototype.chain = function (next) {
                            };
                            KMapAction.prototype.execute = function (inputs) {
                                var collected = new java.util.ArrayList();
                                for (var i = 0; i < inputs.length; i++) {
                                    if (inputs[i] != null) {
                                        var resolved = inputs[i].get(this._attribute);
                                        if (resolved != null) {
                                            collected.add(resolved);
                                        }
                                    }
                                }
                                this._finalCallback(collected.toArray(new Array()));
                            };
                            return KMapAction;
                        })();
                        actions.KMapAction = KMapAction;
                        var KParentsAction = (function () {
                            function KParentsAction() {
                            }
                            KParentsAction.prototype.chain = function (p_next) {
                                this._next = p_next;
                            };
                            KParentsAction.prototype.execute = function (p_inputs) {
                                var _this = this;
                                if (p_inputs == null || p_inputs.length == 0) {
                                    this._next.execute(p_inputs);
                                    return;
                                }
                                else {
                                    var currentView = p_inputs[0].view();
                                    var nextIds = new java.util.HashSet();
                                    for (var i = 0; i < p_inputs.length; i++) {
                                        try {
                                            var loopObj = p_inputs[i];
                                            var raw = currentView.universe().model().manager().entry(loopObj, org.kevoree.modeling.api.data.manager.AccessMode.READ);
                                            var resolved = raw.get(org.kevoree.modeling.api.data.manager.Index.PARENT_INDEX);
                                            if (resolved != null) {
                                                try {
                                                    nextIds.add(resolved);
                                                }
                                                catch ($ex$) {
                                                    if ($ex$ instanceof java.lang.Exception) {
                                                        var e = $ex$;
                                                        e.printStackTrace();
                                                    }
                                                }
                                            }
                                        }
                                        catch ($ex$) {
                                            if ($ex$ instanceof java.lang.Exception) {
                                                var e = $ex$;
                                                e.printStackTrace();
                                            }
                                        }
                                    }
                                    currentView.internalLookupAll(nextIds.toArray(new Array()), function (kObjects) {
                                        _this._next.execute(kObjects);
                                    });
                                }
                            };
                            return KParentsAction;
                        })();
                        actions.KParentsAction = KParentsAction;
                        var KReverseAction = (function () {
                            function KReverseAction(p_reference) {
                                this._reference = p_reference;
                            }
                            KReverseAction.prototype.chain = function (p_next) {
                                this._next = p_next;
                            };
                            KReverseAction.prototype.execute = function (p_inputs) {
                                var _this = this;
                                if (p_inputs == null || p_inputs.length == 0) {
                                    this._next.execute(p_inputs);
                                    return;
                                }
                                else {
                                    var currentView = p_inputs[0].view();
                                    var nextIds = new java.util.HashSet();
                                    var toFilter = new java.util.HashMap();
                                    for (var i = 0; i < p_inputs.length; i++) {
                                        try {
                                            var loopObj = p_inputs[i];
                                            var raw = currentView.universe().model().manager().entry(loopObj, org.kevoree.modeling.api.data.manager.AccessMode.READ);
                                            if (raw != null) {
                                                if (this._reference == null) {
                                                    if (raw.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX) != null && raw.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX) instanceof java.util.Set) {
                                                        var casted = raw.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX);
                                                        var castedArr = casted.toArray(new Array());
                                                        for (var j = 0; j < castedArr.length; j++) {
                                                            nextIds.add(castedArr[j]);
                                                        }
                                                    }
                                                }
                                                else {
                                                    if (raw.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX) != null && raw.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX) instanceof java.util.Set) {
                                                        var casted = raw.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX);
                                                        var castedArr = casted.toArray(new Array());
                                                        for (var j = 0; j < castedArr.length; j++) {
                                                            toFilter.put(castedArr[j], p_inputs[i]);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        catch ($ex$) {
                                            if ($ex$ instanceof java.lang.Exception) {
                                                var e = $ex$;
                                                e.printStackTrace();
                                            }
                                        }
                                    }
                                    if (toFilter.keySet().size() == 0) {
                                        currentView.internalLookupAll(nextIds.toArray(new Array()), function (kObjects) {
                                            _this._next.execute(kObjects);
                                        });
                                    }
                                    else {
                                        var toFilterKeys = toFilter.keySet().toArray(new Array());
                                        currentView.internalLookupAll(toFilterKeys, function (kObjects) {
                                            for (var i = 0; i < toFilterKeys.length; i++) {
                                                if (kObjects[i] != null) {
                                                    var references = kObjects[i].referencesWith(toFilter.get(toFilterKeys[i]));
                                                    for (var h = 0; h < references.length; h++) {
                                                        if (references[h].metaName().equals(_this._reference.metaName())) {
                                                            nextIds.add(kObjects[i].uuid());
                                                        }
                                                    }
                                                }
                                            }
                                            currentView.internalLookupAll(nextIds.toArray(new Array()), function (kObjects) {
                                                _this._next.execute(kObjects);
                                            });
                                        });
                                    }
                                }
                            };
                            return KReverseAction;
                        })();
                        actions.KReverseAction = KReverseAction;
                        var KReverseQueryAction = (function () {
                            function KReverseQueryAction(p_referenceQuery) {
                                if (this._referenceQuery != null) {
                                    this._referenceQuery = p_referenceQuery.replace("*", ".*");
                                }
                            }
                            KReverseQueryAction.prototype.chain = function (p_next) {
                                this._next = p_next;
                            };
                            KReverseQueryAction.prototype.execute = function (p_inputs) {
                                var _this = this;
                                if (p_inputs == null || p_inputs.length == 0) {
                                    this._next.execute(p_inputs);
                                    return;
                                }
                                else {
                                    var currentView = p_inputs[0].view();
                                    var nextIds = new java.util.HashSet();
                                    var toFilter = new java.util.HashMap();
                                    for (var i = 0; i < p_inputs.length; i++) {
                                        try {
                                            var loopObj = p_inputs[i];
                                            var raw = currentView.universe().model().manager().entry(loopObj, org.kevoree.modeling.api.data.manager.AccessMode.READ);
                                            if (raw != null) {
                                                if (this._referenceQuery == null) {
                                                    if (raw.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX) != null && raw.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX) instanceof java.util.Set) {
                                                        var casted = raw.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX);
                                                        var castedArr = casted.toArray(new Array());
                                                        for (var j = 0; j < castedArr.length; j++) {
                                                            nextIds.add(castedArr[j]);
                                                        }
                                                    }
                                                }
                                                else {
                                                    if (raw.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX) != null && raw.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX) instanceof java.util.Set) {
                                                        var casted = raw.get(org.kevoree.modeling.api.data.manager.Index.INBOUNDS_INDEX);
                                                        var castedArr = casted.toArray(new Array());
                                                        for (var j = 0; j < castedArr.length; j++) {
                                                            toFilter.put(castedArr[j], p_inputs[i]);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        catch ($ex$) {
                                            if ($ex$ instanceof java.lang.Exception) {
                                                var e = $ex$;
                                                e.printStackTrace();
                                            }
                                        }
                                    }
                                    if (toFilter.keySet().size() == 0) {
                                        currentView.internalLookupAll(nextIds.toArray(new Array()), function (kObjects) {
                                            _this._next.execute(kObjects);
                                        });
                                    }
                                    else {
                                        var toFilterKeys = toFilter.keySet().toArray(new Array());
                                        currentView.internalLookupAll(toFilterKeys, function (kObjects) {
                                            for (var i = 0; i < toFilterKeys.length; i++) {
                                                if (kObjects[i] != null) {
                                                    var references = kObjects[i].referencesWith(toFilter.get(toFilterKeys[i]));
                                                    for (var h = 0; h < references.length; h++) {
                                                        if (references[h].metaName().matches(_this._referenceQuery)) {
                                                            nextIds.add(kObjects[i].uuid());
                                                        }
                                                    }
                                                }
                                            }
                                            currentView.internalLookupAll(nextIds.toArray(new Array()), function (kObjects) {
                                                _this._next.execute(kObjects);
                                            });
                                        });
                                    }
                                }
                            };
                            return KReverseQueryAction;
                        })();
                        actions.KReverseQueryAction = KReverseQueryAction;
                        var KTraverseAction = (function () {
                            function KTraverseAction(p_reference) {
                                this._reference = p_reference;
                            }
                            KTraverseAction.prototype.chain = function (p_next) {
                                this._next = p_next;
                            };
                            KTraverseAction.prototype.execute = function (p_inputs) {
                                var _this = this;
                                if (p_inputs == null || p_inputs.length == 0) {
                                    this._next.execute(p_inputs);
                                    return;
                                }
                                else {
                                    var currentView = p_inputs[0].view();
                                    var nextIds = new java.util.HashSet();
                                    for (var i = 0; i < p_inputs.length; i++) {
                                        try {
                                            var loopObj = p_inputs[i];
                                            var raw = currentView.universe().model().manager().entry(loopObj, org.kevoree.modeling.api.data.manager.AccessMode.READ);
                                            if (raw != null) {
                                                if (this._reference == null) {
                                                    for (var j = 0; j < loopObj.metaClass().metaReferences().length; j++) {
                                                        var ref = loopObj.metaClass().metaReferences()[j];
                                                        var resolved = raw.get(ref.index());
                                                        if (resolved != null) {
                                                            if (resolved instanceof java.util.Set) {
                                                                var resolvedCasted = resolved;
                                                                var resolvedArr = resolvedCasted.toArray(new Array());
                                                                for (var k = 0; k < resolvedArr.length; k++) {
                                                                    var idResolved = resolvedArr[k];
                                                                    if (idResolved != null) {
                                                                        nextIds.add(idResolved);
                                                                    }
                                                                }
                                                            }
                                                            else {
                                                                try {
                                                                    nextIds.add(resolved);
                                                                }
                                                                catch ($ex$) {
                                                                    if ($ex$ instanceof java.lang.Exception) {
                                                                        var e = $ex$;
                                                                        e.printStackTrace();
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                else {
                                                    var translatedRef = loopObj.internal_transpose_ref(this._reference);
                                                    if (translatedRef != null) {
                                                        var resolved = raw.get(translatedRef.index());
                                                        if (resolved != null) {
                                                            if (resolved instanceof java.util.Set) {
                                                                var resolvedCasted = resolved;
                                                                var resolvedArr = resolvedCasted.toArray(new Array());
                                                                for (var j = 0; j < resolvedArr.length; j++) {
                                                                    var idResolved = resolvedArr[j];
                                                                    if (idResolved != null) {
                                                                        nextIds.add(idResolved);
                                                                    }
                                                                }
                                                            }
                                                            else {
                                                                try {
                                                                    nextIds.add(resolved);
                                                                }
                                                                catch ($ex$) {
                                                                    if ($ex$ instanceof java.lang.Exception) {
                                                                        var e = $ex$;
                                                                        e.printStackTrace();
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        catch ($ex$) {
                                            if ($ex$ instanceof java.lang.Exception) {
                                                var e = $ex$;
                                                e.printStackTrace();
                                            }
                                        }
                                    }
                                    currentView.internalLookupAll(nextIds.toArray(new Array()), function (kObjects) {
                                        _this._next.execute(kObjects);
                                    });
                                }
                            };
                            return KTraverseAction;
                        })();
                        actions.KTraverseAction = KTraverseAction;
                        var KTraverseQueryAction = (function () {
                            function KTraverseQueryAction(p_referenceQuery) {
                                this.SEP = ",";
                                this._referenceQuery = p_referenceQuery;
                            }
                            KTraverseQueryAction.prototype.chain = function (p_next) {
                                this._next = p_next;
                            };
                            KTraverseQueryAction.prototype.execute = function (p_inputs) {
                                var _this = this;
                                if (p_inputs == null || p_inputs.length == 0) {
                                    this._next.execute(p_inputs);
                                    return;
                                }
                                else {
                                    var currentView = p_inputs[0].view();
                                    var nextIds = new java.util.HashSet();
                                    for (var i = 0; i < p_inputs.length; i++) {
                                        try {
                                            var loopObj = p_inputs[i];
                                            var raw = currentView.universe().model().manager().entry(loopObj, org.kevoree.modeling.api.data.manager.AccessMode.READ);
                                            if (raw != null) {
                                                if (this._referenceQuery == null) {
                                                    for (var j = 0; j < loopObj.metaClass().metaReferences().length; j++) {
                                                        var ref = loopObj.metaClass().metaReferences()[j];
                                                        var resolved = raw.get(ref.index());
                                                        if (resolved != null) {
                                                            if (resolved instanceof java.util.Set) {
                                                                var resolvedCasted = resolved;
                                                                var resolvedArr = resolvedCasted.toArray(new Array());
                                                                for (var k = 0; k < resolvedArr.length; k++) {
                                                                    var idResolved = resolvedArr[k];
                                                                    if (idResolved != null) {
                                                                        nextIds.add(idResolved);
                                                                    }
                                                                }
                                                            }
                                                            else {
                                                                try {
                                                                    nextIds.add(resolved);
                                                                }
                                                                catch ($ex$) {
                                                                    if ($ex$ instanceof java.lang.Exception) {
                                                                        var e = $ex$;
                                                                        e.printStackTrace();
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                else {
                                                    var queries = this._referenceQuery.split(this.SEP);
                                                    for (var k = 0; k < queries.length; k++) {
                                                        queries[k] = queries[k].replace("*", ".*");
                                                    }
                                                    var loopRefs = loopObj.metaClass().metaReferences();
                                                    for (var h = 0; h < loopRefs.length; h++) {
                                                        var ref = loopRefs[h];
                                                        var selected = false;
                                                        for (var k = 0; k < queries.length; k++) {
                                                            if (ref.metaName().matches(queries[k])) {
                                                                selected = true;
                                                                break;
                                                            }
                                                        }
                                                        if (selected) {
                                                            var resolved = raw.get(ref.index());
                                                            if (resolved != null) {
                                                                if (resolved instanceof java.util.Set) {
                                                                    var resolvedCasted = resolved;
                                                                    var resolvedArr = resolvedCasted.toArray(new Array());
                                                                    for (var j = 0; j < resolvedArr.length; j++) {
                                                                        var idResolved = resolvedArr[j];
                                                                        if (idResolved != null) {
                                                                            nextIds.add(idResolved);
                                                                        }
                                                                    }
                                                                }
                                                                else {
                                                                    try {
                                                                        nextIds.add(resolved);
                                                                    }
                                                                    catch ($ex$) {
                                                                        if ($ex$ instanceof java.lang.Exception) {
                                                                            var e = $ex$;
                                                                            e.printStackTrace();
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        catch ($ex$) {
                                            if ($ex$ instanceof java.lang.Exception) {
                                                var e = $ex$;
                                                e.printStackTrace();
                                            }
                                        }
                                    }
                                    currentView.internalLookupAll(nextIds.toArray(new Array()), function (kObjects) {
                                        _this._next.execute(kObjects);
                                    });
                                }
                            };
                            return KTraverseQueryAction;
                        })();
                        actions.KTraverseQueryAction = KTraverseQueryAction;
                    })(actions = traversal.actions || (traversal.actions = {}));
                    var selector;
                    (function (selector) {
                        var KQuery = (function () {
                            function KQuery(relationName, params) {
                                this.relationName = relationName;
                                this.params = params;
                            }
                            KQuery.prototype.toString = function () {
                                return "KQuery{" + "relationName='" + this.relationName + '\'' + ", params='" + this.params + '\'' + '}';
                            };
                            KQuery.buildChain = function (query) {
                                var result = new java.util.ArrayList();
                                if (query == null || query.length == 0) {
                                    return null;
                                }
                                var i = 0;
                                var escaped = false;
                                var previousKQueryStart = 0;
                                var previousKQueryNameEnd = -1;
                                var previousKQueryAttributesEnd = -1;
                                var previousKQueryAttributesStart = 0;
                                while (i < query.length) {
                                    var notLastElem = (i + 1) != query.length;
                                    if (escaped && notLastElem) {
                                        escaped = false;
                                    }
                                    else {
                                        var currentChar = query.charAt(i);
                                        if (currentChar == KQuery.CLOSE_BRACKET && notLastElem) {
                                            previousKQueryAttributesEnd = i;
                                        }
                                        else {
                                            if (currentChar == '\\' && notLastElem) {
                                                escaped = true;
                                            }
                                            else {
                                                if (currentChar == KQuery.OPEN_BRACKET && notLastElem) {
                                                    previousKQueryNameEnd = i;
                                                    previousKQueryAttributesStart = i + 1;
                                                }
                                                else {
                                                    if (currentChar == KQuery.QUERY_SEP || !notLastElem) {
                                                        var relationName;
                                                        var atts = null;
                                                        if (previousKQueryNameEnd == -1) {
                                                            if (notLastElem) {
                                                                previousKQueryNameEnd = i;
                                                            }
                                                            else {
                                                                previousKQueryNameEnd = i + 1;
                                                            }
                                                        }
                                                        else {
                                                            if (previousKQueryAttributesStart != -1) {
                                                                if (previousKQueryAttributesEnd == -1) {
                                                                    if (notLastElem || currentChar == KQuery.QUERY_SEP || currentChar == KQuery.CLOSE_BRACKET) {
                                                                        previousKQueryAttributesEnd = i;
                                                                    }
                                                                    else {
                                                                        previousKQueryAttributesEnd = i + 1;
                                                                    }
                                                                }
                                                                atts = query.substring(previousKQueryAttributesStart, previousKQueryAttributesEnd);
                                                                if (atts.length == 0) {
                                                                    atts = null;
                                                                }
                                                            }
                                                        }
                                                        relationName = query.substring(previousKQueryStart, previousKQueryNameEnd);
                                                        var additionalQuery = new org.kevoree.modeling.api.traversal.selector.KQuery(relationName, atts);
                                                        result.add(additionalQuery);
                                                        previousKQueryStart = i + 1;
                                                        previousKQueryNameEnd = -1;
                                                        previousKQueryAttributesEnd = -1;
                                                        previousKQueryAttributesStart = -1;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    i = i + 1;
                                }
                                return result;
                            };
                            KQuery.OPEN_BRACKET = '[';
                            KQuery.CLOSE_BRACKET = ']';
                            KQuery.QUERY_SEP = '/';
                            return KQuery;
                        })();
                        selector.KQuery = KQuery;
                        var KQueryParam = (function () {
                            function KQueryParam(p_name, p_value, p_negative) {
                                this._name = p_name;
                                this._value = p_value;
                                this._negative = p_negative;
                            }
                            KQueryParam.prototype.name = function () {
                                return this._name;
                            };
                            KQueryParam.prototype.value = function () {
                                return this._value;
                            };
                            KQueryParam.prototype.isNegative = function () {
                                return this._negative;
                            };
                            return KQueryParam;
                        })();
                        selector.KQueryParam = KQueryParam;
                        var KSelector = (function () {
                            function KSelector() {
                            }
                            KSelector.select = function (root, query, callback) {
                                if (callback == null) {
                                    return;
                                }
                                var current = null;
                                var extracted = org.kevoree.modeling.api.traversal.selector.KQuery.buildChain(query);
                                for (var i = 0; i < extracted.size(); i++) {
                                    if (current == null) {
                                        if (extracted.get(i).relationName.equals("..")) {
                                            current = root.traverseInbounds("*");
                                        }
                                        else {
                                            if (extracted.get(i).relationName.startsWith("..")) {
                                                current = root.traverseInbounds(extracted.get(i).relationName.substring(2));
                                            }
                                            else {
                                                if (extracted.get(i).relationName.equals("@parent")) {
                                                    current = root.traverseParent();
                                                }
                                                else {
                                                    current = root.traverseQuery(extracted.get(i).relationName);
                                                }
                                            }
                                        }
                                    }
                                    else {
                                        if (extracted.get(i).relationName.equals("..")) {
                                            current = current.reverseQuery("*");
                                        }
                                        else {
                                            if (extracted.get(i).relationName.startsWith("..")) {
                                                current = current.reverseQuery(extracted.get(i).relationName.substring(2));
                                            }
                                            else {
                                                if (extracted.get(i).relationName.equals("@parent")) {
                                                    current = current.parents();
                                                }
                                                else {
                                                    current = current.traverseQuery(extracted.get(i).relationName);
                                                }
                                            }
                                        }
                                    }
                                    current = current.attributeQuery(extracted.get(i).params);
                                }
                                if (current != null) {
                                    current.then(callback);
                                }
                                else {
                                    callback(new Array());
                                }
                            };
                            return KSelector;
                        })();
                        selector.KSelector = KSelector;
                    })(selector = traversal.selector || (traversal.selector = {}));
                })(traversal = api.traversal || (api.traversal = {}));
                var util;
                (function (util) {
                    var Checker = (function () {
                        function Checker() {
                        }
                        Checker.isDefined = function (param) {
                            return param != undefined && param != null;
                        };
                        return Checker;
                    })();
                    util.Checker = Checker;
                    var DefaultOperationManager = (function () {
                        function DefaultOperationManager(p_manager) {
                            this.staticOperations = new java.util.HashMap();
                            this.instanceOperations = new java.util.HashMap();
                            this.remoteCallCallbacks = new java.util.HashMap();
                            this._manager = p_manager;
                        }
                        DefaultOperationManager.prototype.registerOperation = function (operation, callback, target) {
                            if (target == null) {
                                var clazzOperations = this.staticOperations.get(operation.origin().index());
                                if (clazzOperations == null) {
                                    clazzOperations = new java.util.HashMap();
                                    this.staticOperations.put(operation.origin().index(), clazzOperations);
                                }
                                clazzOperations.put(operation.index(), callback);
                            }
                            else {
                                var objectOperations = this.instanceOperations.get(target.uuid());
                                if (objectOperations == null) {
                                    objectOperations = new java.util.HashMap();
                                    this.instanceOperations.put(target.uuid(), objectOperations);
                                }
                                objectOperations.put(operation.index(), callback);
                            }
                        };
                        DefaultOperationManager.prototype.searchOperation = function (source, clazz, operation) {
                            var objectOperations = this.instanceOperations.get(source);
                            if (objectOperations != null) {
                                return objectOperations.get(operation);
                            }
                            var clazzOperations = this.staticOperations.get(clazz);
                            if (clazzOperations != null) {
                                return clazzOperations.get(operation);
                            }
                            return null;
                        };
                        DefaultOperationManager.prototype.call = function (source, operation, param, callback) {
                            var operationCore = this.searchOperation(source.uuid(), operation.origin().index(), operation.index());
                            if (operationCore != null) {
                                operationCore(source, param, callback);
                            }
                            else {
                                this.sendToRemote(source, operation, param, callback);
                            }
                        };
                        DefaultOperationManager.prototype.sendToRemote = function (source, operation, param, callback) {
                            var tuple = new Array();
                            tuple[DefaultOperationManager.DIM_INDEX] = source.universe().key();
                            tuple[DefaultOperationManager.TIME_INDEX] = source.now();
                            tuple[DefaultOperationManager.UUID_INDEX] = source.uuid();
                            tuple[DefaultOperationManager.OPERATION_INDEX] = operation.index();
                            this.remoteCallCallbacks.put(tuple, callback);
                            var sb = new java.lang.StringBuilder();
                            sb.append("[");
                            if (param.length > 0) {
                                sb.append("\"").append(this.protectString(param[0].toString())).append("\"");
                                for (var i = 1; i < param.length; i++) {
                                    sb.append(",").append("\"").append(this.protectString(param[i].toString())).append("\"");
                                }
                            }
                            sb.append("]");
                        };
                        DefaultOperationManager.prototype.protectString = function (input) {
                            var sb = new java.lang.StringBuilder();
                            for (var i = 0; i < input.length; i++) {
                                var c = input.charAt(i);
                                if (c == '{' || c == '}' || c == '[' || c == ']' || c == ',' || c == '\\' || c == '"') {
                                    sb.append('\\');
                                }
                                sb.append(c);
                            }
                            return sb.toString();
                        };
                        DefaultOperationManager.prototype.parseParams = function (inParams) {
                            var params = new java.util.ArrayList();
                            var sb = new java.lang.StringBuilder();
                            if (inParams.length > 2) {
                                if (inParams.charAt(0) == '[') {
                                    var i = 1;
                                    var c = inParams.charAt(i);
                                    var inParam = false;
                                    while (i < inParams.length && c != ']') {
                                        if (c == '\\') {
                                            i++;
                                            sb.append(inParams.charAt(i));
                                        }
                                        else {
                                            if (c == '"') {
                                                if (inParam) {
                                                    params.add(sb.toString());
                                                    sb = new java.lang.StringBuilder();
                                                }
                                                inParam = !inParam;
                                            }
                                            else {
                                                if (inParam) {
                                                    sb.append(c);
                                                }
                                            }
                                        }
                                        i++;
                                        c = inParams.charAt(i);
                                    }
                                }
                            }
                            return params.toArray(new Array());
                        };
                        DefaultOperationManager.DIM_INDEX = 0;
                        DefaultOperationManager.TIME_INDEX = 1;
                        DefaultOperationManager.UUID_INDEX = 2;
                        DefaultOperationManager.OPERATION_INDEX = 3;
                        DefaultOperationManager.TUPLE_SIZE = 4;
                        return DefaultOperationManager;
                    })();
                    util.DefaultOperationManager = DefaultOperationManager;
                    var LocalEventListeners = (function () {
                        function LocalEventListeners() {
                            this.listeners = new java.util.HashMap();
                        }
                        LocalEventListeners.prototype.registerListener = function (origin, listener, scope) {
                            var tuple = new Array();
                            if (origin instanceof org.kevoree.modeling.api.abs.AbstractKUniverse) {
                                tuple[LocalEventListeners.DIM_INDEX] = origin.key();
                            }
                            else {
                                if (origin instanceof org.kevoree.modeling.api.abs.AbstractKView) {
                                    tuple[LocalEventListeners.DIM_INDEX] = origin.universe().key();
                                    tuple[LocalEventListeners.TIME_INDEX] = origin.now();
                                }
                                else {
                                    if (origin instanceof org.kevoree.modeling.api.abs.AbstractKObject) {
                                        var casted = origin;
                                        if (scope == null) {
                                            tuple[LocalEventListeners.DIM_INDEX] = casted.universe().key();
                                            tuple[LocalEventListeners.TIME_INDEX] = casted.now();
                                            tuple[LocalEventListeners.UUID_INDEX] = casted.uuid();
                                        }
                                        else {
                                            tuple[LocalEventListeners.UUID_INDEX] = casted.uuid();
                                            if (scope instanceof org.kevoree.modeling.api.abs.AbstractKUniverse) {
                                                tuple[LocalEventListeners.DIM_INDEX] = scope.key();
                                            }
                                        }
                                    }
                                }
                            }
                            this.listeners.put(listener, tuple);
                        };
                        LocalEventListeners.prototype.dispatch = function (src, modications) {
                            var keys = this.listeners.keySet().toArray(new Array());
                            for (var i = 0; i < keys.length; i++) {
                                var tuple = this.listeners.get(keys[i]);
                                var match = true;
                                if (tuple[LocalEventListeners.DIM_INDEX] != null) {
                                    if (!tuple[LocalEventListeners.DIM_INDEX].equals(src.universe().key())) {
                                        match = false;
                                    }
                                }
                                if (tuple[LocalEventListeners.TIME_INDEX] != null) {
                                    if (!tuple[LocalEventListeners.TIME_INDEX].equals(src.view().now())) {
                                        match = false;
                                    }
                                }
                                if (tuple[LocalEventListeners.UUID_INDEX] != null) {
                                    if (!tuple[LocalEventListeners.UUID_INDEX].equals(src.uuid())) {
                                        match = false;
                                    }
                                }
                                if (match) {
                                    keys[i](src, modications);
                                }
                            }
                        };
                        LocalEventListeners.prototype.unregister = function (listener) {
                            this.listeners.remove(listener);
                        };
                        LocalEventListeners.prototype.clear = function () {
                            this.listeners.clear();
                        };
                        LocalEventListeners.DIM_INDEX = 0;
                        LocalEventListeners.TIME_INDEX = 1;
                        LocalEventListeners.UUID_INDEX = 2;
                        LocalEventListeners.TUPLE_SIZE = 3;
                        return LocalEventListeners;
                    })();
                    util.LocalEventListeners = LocalEventListeners;
                    var PathHelper = (function () {
                        function PathHelper() {
                        }
                        PathHelper.parentPath = function (currentPath) {
                            if (currentPath == null || currentPath.length == 0) {
                                return null;
                            }
                            if (currentPath.length == 1) {
                                return null;
                            }
                            var lastIndex = currentPath.lastIndexOf(PathHelper.pathSep);
                            if (lastIndex != -1) {
                                if (lastIndex == 0) {
                                    return PathHelper.rootPath;
                                }
                                else {
                                    return currentPath.substring(0, lastIndex);
                                }
                            }
                            else {
                                return null;
                            }
                        };
                        PathHelper.isRoot = function (path) {
                            return path.length == 1 && path.charAt(0) == org.kevoree.modeling.api.util.PathHelper.pathSep;
                        };
                        PathHelper.path = function (parent, reference, target) {
                            if (org.kevoree.modeling.api.util.PathHelper.isRoot(parent)) {
                                return PathHelper.pathSep + reference.metaName() + PathHelper.pathIDOpen + target.domainKey() + PathHelper.pathIDClose;
                            }
                            else {
                                return parent + PathHelper.pathSep + reference.metaName() + PathHelper.pathIDOpen + target.domainKey() + PathHelper.pathIDClose;
                            }
                        };
                        PathHelper.pathSep = '/';
                        PathHelper.pathIDOpen = '[';
                        PathHelper.pathIDClose = ']';
                        PathHelper.rootPath = "/";
                        return PathHelper;
                    })();
                    util.PathHelper = PathHelper;
                    var TimeWalker = (function () {
                        function TimeWalker(p_origin) {
                            this._origin = null;
                            this._origin = p_origin;
                        }
                        TimeWalker.prototype.walk = function (walker) {
                            return this.walkAsc(walker);
                        };
                        TimeWalker.prototype.walkAsc = function (walker) {
                            return this.internal_walk(walker, true, null, null);
                        };
                        TimeWalker.prototype.walkDesc = function (walker) {
                            return this.internal_walk(walker, false, null, null);
                        };
                        TimeWalker.prototype.internal_walk = function (walker, asc, from, to) {
                            var wrapper = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            this._origin.view().universe().model().manager().timeTrees(this._origin, from, to, function (indexRBTrees) {
                                var from2 = from;
                                var to2 = to;
                                if (from > to) {
                                    from2 = to;
                                    to2 = from;
                                }
                                for (var i = 0; i < indexRBTrees.length; i++) {
                                    var elem;
                                    if (asc) {
                                        elem = indexRBTrees[i].previousOrEqual(from2);
                                    }
                                    else {
                                        elem = indexRBTrees[i].previousOrEqual(to2);
                                    }
                                    while (elem != null) {
                                        walker(elem.getKey());
                                        if (asc) {
                                            elem = elem.next();
                                        }
                                        else {
                                            elem = elem.previous();
                                        }
                                        if (elem != null) {
                                            if (elem.getKey() <= from2) {
                                                walker(elem.getKey());
                                            }
                                        }
                                    }
                                }
                                wrapper.initCallback()(null);
                            });
                            return wrapper;
                        };
                        TimeWalker.prototype.walkRangeAsc = function (walker, from, to) {
                            return this.internal_walk(walker, true, from, to);
                        };
                        TimeWalker.prototype.walkRangeDesc = function (walker, from, to) {
                            return this.internal_walk(walker, false, from, to);
                        };
                        return TimeWalker;
                    })();
                    util.TimeWalker = TimeWalker;
                })(util = api.util || (api.util = {}));
                var xmi;
                (function (xmi) {
                    var SerializationContext = (function () {
                        function SerializationContext() {
                            this.ignoreGeneratedID = false;
                            this.addressTable = new java.util.HashMap();
                            this.elementsCount = new java.util.HashMap();
                            this.packageList = new java.util.ArrayList();
                        }
                        return SerializationContext;
                    })();
                    xmi.SerializationContext = SerializationContext;
                    var XMILoadingContext = (function () {
                        function XMILoadingContext() {
                            this.loadedRoots = null;
                            this.resolvers = new java.util.ArrayList();
                            this.map = new java.util.HashMap();
                            this.elementsCount = new java.util.HashMap();
                            this.stats = new java.util.HashMap();
                            this.oppositesAlreadySet = new java.util.HashMap();
                        }
                        XMILoadingContext.prototype.isOppositeAlreadySet = function (localRef, oppositeRef) {
                            return (this.oppositesAlreadySet.get(oppositeRef + "_" + localRef) != null || (this.oppositesAlreadySet.get(localRef + "_" + oppositeRef) != null));
                        };
                        XMILoadingContext.prototype.storeOppositeRelation = function (localRef, oppositeRef) {
                            this.oppositesAlreadySet.put(localRef + "_" + oppositeRef, true);
                        };
                        return XMILoadingContext;
                    })();
                    xmi.XMILoadingContext = XMILoadingContext;
                    var XMIModelLoader = (function () {
                        function XMIModelLoader(p_factory) {
                            this._factory = p_factory;
                        }
                        XMIModelLoader.unescapeXml = function (src) {
                            var builder = null;
                            var i = 0;
                            while (i < src.length) {
                                var c = src.charAt(i);
                                if (c == '&') {
                                    if (builder == null) {
                                        builder = new java.lang.StringBuilder();
                                        builder.append(src.substring(0, i));
                                    }
                                    if (src.charAt(i + 1) == 'a') {
                                        if (src.charAt(i + 2) == 'm') {
                                            builder.append("&");
                                            i = i + 5;
                                        }
                                        else {
                                            if (src.charAt(i + 2) == 'p') {
                                                builder.append("'");
                                                i = i + 6;
                                            }
                                        }
                                    }
                                    else {
                                        if (src.charAt(i + 1) == 'q') {
                                            builder.append("\"");
                                            i = i + 6;
                                        }
                                        else {
                                            if (src.charAt(i + 1) == 'l') {
                                                builder.append("<");
                                                i = i + 4;
                                            }
                                            else {
                                                if (src.charAt(i + 1) == 'g') {
                                                    builder.append(">");
                                                    i = i + 4;
                                                }
                                            }
                                        }
                                    }
                                }
                                else {
                                    if (builder != null) {
                                        builder.append(c);
                                    }
                                    i++;
                                }
                            }
                            if (builder != null) {
                                return builder.toString();
                            }
                            else {
                                return src;
                            }
                        };
                        XMIModelLoader.load = function (p_view, str, callback) {
                            var parser = new org.kevoree.modeling.api.xmi.XmlParser(str);
                            if (!parser.hasNext()) {
                                callback(null);
                            }
                            else {
                                var context = new org.kevoree.modeling.api.xmi.XMILoadingContext();
                                context.successCallback = callback;
                                context.xmiReader = parser;
                                org.kevoree.modeling.api.xmi.XMIModelLoader.deserialize(p_view, context);
                            }
                        };
                        XMIModelLoader.deserialize = function (p_view, context) {
                            try {
                                var nsURI;
                                var reader = context.xmiReader;
                                while (reader.hasNext()) {
                                    var nextTag = reader.next();
                                    if (nextTag.equals(org.kevoree.modeling.api.xmi.XmlToken.START_TAG)) {
                                        var localName = reader.getLocalName();
                                        if (localName != null) {
                                            var ns = new java.util.HashMap();
                                            for (var i = 0; i < reader.getAttributeCount() - 1; i++) {
                                                var attrLocalName = reader.getAttributeLocalName(i);
                                                var attrLocalValue = reader.getAttributeValue(i);
                                                if (attrLocalName.equals(XMIModelLoader.LOADER_XMI_NS_URI)) {
                                                    nsURI = attrLocalValue;
                                                }
                                                ns.put(attrLocalName, attrLocalValue);
                                            }
                                            var xsiType = reader.getTagPrefix();
                                            var realTypeName = ns.get(xsiType);
                                            if (realTypeName == null) {
                                                realTypeName = xsiType;
                                            }
                                            context.loadedRoots = org.kevoree.modeling.api.xmi.XMIModelLoader.loadObject(p_view, context, "/", xsiType + "." + localName);
                                        }
                                    }
                                }
                                for (var i = 0; i < context.resolvers.size(); i++) {
                                    context.resolvers.get(i).run();
                                }
                                p_view.setRoot(context.loadedRoots);
                                context.successCallback(null);
                            }
                            catch ($ex$) {
                                if ($ex$ instanceof java.lang.Exception) {
                                    var e = $ex$;
                                    context.successCallback(e);
                                }
                            }
                        };
                        XMIModelLoader.callFactory = function (p_view, ctx, objectType) {
                            var modelElem = null;
                            if (objectType != null) {
                                modelElem = p_view.createFQN(objectType);
                                if (modelElem == null) {
                                    var xsiType = null;
                                    for (var i = 0; i < (ctx.xmiReader.getAttributeCount() - 1); i++) {
                                        var localName = ctx.xmiReader.getAttributeLocalName(i);
                                        var xsi = ctx.xmiReader.getAttributePrefix(i);
                                        if (localName.equals(XMIModelLoader.LOADER_XMI_LOCAL_NAME) && xsi.equals(XMIModelLoader.LOADER_XMI_XSI)) {
                                            xsiType = ctx.xmiReader.getAttributeValue(i);
                                            break;
                                        }
                                    }
                                    if (xsiType != null) {
                                        var realTypeName = xsiType.substring(0, xsiType.lastIndexOf(":"));
                                        var realName = xsiType.substring(xsiType.lastIndexOf(":") + 1, xsiType.length);
                                        modelElem = p_view.createFQN(realTypeName + "." + realName);
                                    }
                                }
                            }
                            else {
                                modelElem = p_view.createFQN(ctx.xmiReader.getLocalName());
                            }
                            return modelElem;
                        };
                        XMIModelLoader.loadObject = function (p_view, ctx, xmiAddress, objectType) {
                            var elementTagName = ctx.xmiReader.getLocalName();
                            var modelElem = org.kevoree.modeling.api.xmi.XMIModelLoader.callFactory(p_view, ctx, objectType);
                            if (modelElem == null) {
                                throw new java.lang.Exception("Could not create an object for local name " + elementTagName);
                            }
                            ctx.map.put(xmiAddress, modelElem);
                            for (var i = 0; i < ctx.xmiReader.getAttributeCount(); i++) {
                                var prefix = ctx.xmiReader.getAttributePrefix(i);
                                if (prefix == null || prefix.equals("")) {
                                    var attrName = ctx.xmiReader.getAttributeLocalName(i).trim();
                                    var valueAtt = ctx.xmiReader.getAttributeValue(i).trim();
                                    if (valueAtt != null) {
                                        var kAttribute = modelElem.metaClass().metaAttribute(attrName);
                                        if (kAttribute != null) {
                                            modelElem.set(kAttribute, org.kevoree.modeling.api.xmi.XMIModelLoader.unescapeXml(valueAtt));
                                        }
                                        else {
                                            var kreference = modelElem.metaClass().metaReference(attrName);
                                            if (kreference != null) {
                                                var referenceArray = valueAtt.split(" ");
                                                for (var j = 0; j < referenceArray.length; j++) {
                                                    var xmiRef = referenceArray[j];
                                                    var adjustedRef = (xmiRef.startsWith("#") ? xmiRef.substring(1) : xmiRef);
                                                    adjustedRef = adjustedRef.replace(".0", "");
                                                    var ref = ctx.map.get(adjustedRef);
                                                    if (ref != null) {
                                                        modelElem.mutate(org.kevoree.modeling.api.KActionType.ADD, kreference, ref);
                                                    }
                                                    else {
                                                        ctx.resolvers.add(new org.kevoree.modeling.api.xmi.XMIResolveCommand(ctx, modelElem, org.kevoree.modeling.api.KActionType.ADD, attrName, adjustedRef));
                                                    }
                                                }
                                            }
                                            else {
                                            }
                                        }
                                    }
                                }
                            }
                            var done = false;
                            while (!done) {
                                if (ctx.xmiReader.hasNext()) {
                                    var tok = ctx.xmiReader.next();
                                    if (tok.equals(org.kevoree.modeling.api.xmi.XmlToken.START_TAG)) {
                                        var subElemName = ctx.xmiReader.getLocalName();
                                        var key = xmiAddress + "/@" + subElemName;
                                        var i = ctx.elementsCount.get(key);
                                        if (i == null) {
                                            i = 0;
                                            ctx.elementsCount.put(key, i);
                                        }
                                        var subElementId = xmiAddress + "/@" + subElemName + (i != 0 ? "." + i : "");
                                        var containedElement = org.kevoree.modeling.api.xmi.XMIModelLoader.loadObject(p_view, ctx, subElementId, subElemName);
                                        modelElem.mutate(org.kevoree.modeling.api.KActionType.ADD, modelElem.metaClass().metaReference(subElemName), containedElement);
                                        ctx.elementsCount.put(xmiAddress + "/@" + subElemName, i + 1);
                                    }
                                    else {
                                        if (tok.equals(org.kevoree.modeling.api.xmi.XmlToken.END_TAG)) {
                                            if (ctx.xmiReader.getLocalName().equals(elementTagName)) {
                                                done = true;
                                            }
                                        }
                                    }
                                }
                                else {
                                    done = true;
                                }
                            }
                            return modelElem;
                        };
                        XMIModelLoader.LOADER_XMI_LOCAL_NAME = "type";
                        XMIModelLoader.LOADER_XMI_XSI = "xsi";
                        XMIModelLoader.LOADER_XMI_NS_URI = "nsURI";
                        return XMIModelLoader;
                    })();
                    xmi.XMIModelLoader = XMIModelLoader;
                    var XMIModelSerializer = (function () {
                        function XMIModelSerializer() {
                        }
                        XMIModelSerializer.save = function (model, callback) {
                            var context = new org.kevoree.modeling.api.xmi.SerializationContext();
                            context.model = model;
                            context.finishCallback = callback;
                            context.attributesVisitor = function (metaAttribute, value) {
                                if (value != null) {
                                    if (context.ignoreGeneratedID && metaAttribute.metaName().equals("generated_KMF_ID")) {
                                        return;
                                    }
                                    context.printer.append(" " + metaAttribute.metaName() + "=\"");
                                    org.kevoree.modeling.api.xmi.XMIModelSerializer.escapeXml(context.printer, value.toString());
                                    context.printer.append("\"");
                                }
                            };
                            context.printer = new java.lang.StringBuilder();
                            context.addressTable.put(model.uuid(), "/");
                            var addressCreationTask = context.model.visit(function (elem) {
                                var parentXmiAddress = context.addressTable.get(elem.parentUuid());
                                var key = parentXmiAddress + "/@" + elem.referenceInParent().metaName();
                                var i = context.elementsCount.get(key);
                                if (i == null) {
                                    i = 0;
                                    context.elementsCount.put(key, i);
                                }
                                context.addressTable.put(elem.uuid(), parentXmiAddress + "/@" + elem.referenceInParent().metaName() + "." + i);
                                context.elementsCount.put(parentXmiAddress + "/@" + elem.referenceInParent().metaName(), i + 1);
                                var pack = elem.metaClass().metaName().substring(0, elem.metaClass().metaName().lastIndexOf('.'));
                                if (!context.packageList.contains(pack)) {
                                    context.packageList.add(pack);
                                }
                                return org.kevoree.modeling.api.VisitResult.CONTINUE;
                            }, org.kevoree.modeling.api.VisitRequest.CONTAINED);
                            var serializationTask = context.model.universe().model().defer();
                            serializationTask.wait(addressCreationTask);
                            serializationTask.setJob(function (currentTask) {
                                context.printer.append("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n");
                                context.printer.append("<" + org.kevoree.modeling.api.xmi.XMIModelSerializer.formatMetaClassName(context.model.metaClass().metaName()).replace(".", "_"));
                                context.printer.append(" xmlns:xsi=\"http://wwww.w3.org/2001/XMLSchema-instance\"");
                                context.printer.append(" xmi:version=\"2.0\"");
                                context.printer.append(" xmlns:xmi=\"http://www.omg.org/XMI\"");
                                var index = 0;
                                while (index < context.packageList.size()) {
                                    context.printer.append(" xmlns:" + context.packageList.get(index).replace(".", "_") + "=\"http://" + context.packageList.get(index) + "\"");
                                    index++;
                                }
                                context.model.visitAttributes(context.attributesVisitor);
                                var nonContainedRefsTasks = context.model.universe().model().defer();
                                for (var i = 0; i < context.model.metaClass().metaReferences().length; i++) {
                                    if (!context.model.metaClass().metaReferences()[i].contained()) {
                                        nonContainedRefsTasks.wait(org.kevoree.modeling.api.xmi.XMIModelSerializer.nonContainedReferenceTaskMaker(context.model.metaClass().metaReferences()[i], context, context.model));
                                    }
                                }
                                nonContainedRefsTasks.setJob(function (currentTask) {
                                    context.printer.append(">\n");
                                    var containedRefsTasks = context.model.universe().model().defer();
                                    for (var i = 0; i < context.model.metaClass().metaReferences().length; i++) {
                                        if (context.model.metaClass().metaReferences()[i].contained()) {
                                            containedRefsTasks.wait(org.kevoree.modeling.api.xmi.XMIModelSerializer.containedReferenceTaskMaker(context.model.metaClass().metaReferences()[i], context, context.model));
                                        }
                                    }
                                    containedRefsTasks.setJob(function (currentTask) {
                                        context.printer.append("</" + org.kevoree.modeling.api.xmi.XMIModelSerializer.formatMetaClassName(context.model.metaClass().metaName()).replace(".", "_") + ">\n");
                                        context.finishCallback(context.printer.toString());
                                    });
                                    containedRefsTasks.ready();
                                });
                                nonContainedRefsTasks.ready();
                            });
                            serializationTask.ready();
                        };
                        XMIModelSerializer.escapeXml = function (ostream, chain) {
                            if (chain == null) {
                                return;
                            }
                            var i = 0;
                            var max = chain.length;
                            while (i < max) {
                                var c = chain.charAt(i);
                                if (c == '"') {
                                    ostream.append("&quot;");
                                }
                                else {
                                    if (c == '&') {
                                        ostream.append("&amp;");
                                    }
                                    else {
                                        if (c == '\'') {
                                            ostream.append("&apos;");
                                        }
                                        else {
                                            if (c == '<') {
                                                ostream.append("&lt;");
                                            }
                                            else {
                                                if (c == '>') {
                                                    ostream.append("&gt;");
                                                }
                                                else {
                                                    ostream.append(c);
                                                }
                                            }
                                        }
                                    }
                                }
                                i = i + 1;
                            }
                        };
                        XMIModelSerializer.formatMetaClassName = function (metaClassName) {
                            var lastPoint = metaClassName.lastIndexOf('.');
                            var pack = metaClassName.substring(0, lastPoint);
                            var cls = metaClassName.substring(lastPoint + 1);
                            return pack + ":" + cls;
                        };
                        XMIModelSerializer.nonContainedReferenceTaskMaker = function (ref, p_context, p_currentElement) {
                            var allTask = p_currentElement.ref(ref);
                            var thisTask = p_context.model.universe().model().defer();
                            thisTask.wait(allTask);
                            thisTask.setJob(function (currentTask) {
                                try {
                                    var objects = currentTask.resultByTask(allTask);
                                    for (var i = 0; i < objects.length; i++) {
                                        var adjustedAddress = p_context.addressTable.get(objects[i].uuid());
                                        p_context.printer.append(" " + ref.metaName() + "=\"" + adjustedAddress + "\"");
                                    }
                                }
                                catch ($ex$) {
                                    if ($ex$ instanceof java.lang.Exception) {
                                        var e = $ex$;
                                        e.printStackTrace();
                                    }
                                }
                            });
                            thisTask.ready();
                            return thisTask;
                        };
                        XMIModelSerializer.containedReferenceTaskMaker = function (ref, context, currentElement) {
                            var allTask = currentElement.ref(ref);
                            var thisTask = context.model.universe().model().defer();
                            thisTask.wait(allTask);
                            thisTask.setJob(function (currentTask) {
                                try {
                                    if (currentTask.resultByTask(allTask) != null) {
                                        var objs = currentTask.resultByTask(allTask);
                                        for (var i = 0; i < objs.length; i++) {
                                            var elem = objs[i];
                                            context.printer.append("<");
                                            context.printer.append(ref.metaName());
                                            context.printer.append(" xsi:type=\"" + org.kevoree.modeling.api.xmi.XMIModelSerializer.formatMetaClassName(elem.metaClass().metaName()) + "\"");
                                            elem.visitAttributes(context.attributesVisitor);
                                            var nonContainedRefsTasks = context.model.universe().model().defer();
                                            for (var j = 0; j < elem.metaClass().metaReferences().length; j++) {
                                                if (!elem.metaClass().metaReferences()[i].contained()) {
                                                    nonContainedRefsTasks.wait(org.kevoree.modeling.api.xmi.XMIModelSerializer.nonContainedReferenceTaskMaker(elem.metaClass().metaReferences()[i], context, elem));
                                                }
                                            }
                                            nonContainedRefsTasks.setJob(function (currentTask) {
                                                context.printer.append(">\n");
                                                var containedRefsTasks = context.model.universe().model().defer();
                                                for (var i = 0; i < elem.metaClass().metaReferences().length; i++) {
                                                    if (elem.metaClass().metaReferences()[i].contained()) {
                                                        containedRefsTasks.wait(org.kevoree.modeling.api.xmi.XMIModelSerializer.containedReferenceTaskMaker(elem.metaClass().metaReferences()[i], context, elem));
                                                    }
                                                }
                                                containedRefsTasks.setJob(function (currentTask) {
                                                    context.printer.append("</");
                                                    context.printer.append(ref.metaName());
                                                    context.printer.append('>');
                                                    context.printer.append("\n");
                                                });
                                                containedRefsTasks.ready();
                                            });
                                            nonContainedRefsTasks.ready();
                                        }
                                    }
                                }
                                catch ($ex$) {
                                    if ($ex$ instanceof java.lang.Exception) {
                                        var e = $ex$;
                                        e.printStackTrace();
                                    }
                                }
                            });
                            thisTask.ready();
                            return thisTask;
                        };
                        return XMIModelSerializer;
                    })();
                    xmi.XMIModelSerializer = XMIModelSerializer;
                    var XMIResolveCommand = (function () {
                        function XMIResolveCommand(context, target, mutatorType, refName, ref) {
                            this.context = context;
                            this.target = target;
                            this.mutatorType = mutatorType;
                            this.refName = refName;
                            this.ref = ref;
                        }
                        XMIResolveCommand.prototype.run = function () {
                            var referencedElement = this.context.map.get(this.ref);
                            if (referencedElement != null) {
                                this.target.mutate(this.mutatorType, this.target.metaClass().metaReference(this.refName), referencedElement);
                                return;
                            }
                            referencedElement = this.context.map.get("/");
                            if (referencedElement != null) {
                                this.target.mutate(this.mutatorType, this.target.metaClass().metaReference(this.refName), referencedElement);
                                return;
                            }
                            throw new java.lang.Exception("KMF Load error : reference " + this.ref + " not found in map when trying to  " + this.mutatorType + " " + this.refName + "  on " + this.target.metaClass().metaName() + "(uuid:" + this.target.uuid() + ")");
                        };
                        return XMIResolveCommand;
                    })();
                    xmi.XMIResolveCommand = XMIResolveCommand;
                    var XmiFormat = (function () {
                        function XmiFormat(p_view) {
                            this._view = p_view;
                        }
                        XmiFormat.prototype.save = function (model) {
                            var wrapper = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            org.kevoree.modeling.api.xmi.XMIModelSerializer.save(model, wrapper.initCallback());
                            return wrapper;
                        };
                        XmiFormat.prototype.saveRoot = function () {
                            var wrapper = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            this._view.universe().model().manager().getRoot(this._view, function (root) {
                                if (root == null) {
                                    wrapper.initCallback()(null);
                                }
                                else {
                                    org.kevoree.modeling.api.xmi.XMIModelSerializer.save(root, wrapper.initCallback());
                                }
                            });
                            return wrapper;
                        };
                        XmiFormat.prototype.load = function (payload) {
                            var wrapper = new org.kevoree.modeling.api.abs.AbstractKDeferWrapper();
                            org.kevoree.modeling.api.xmi.XMIModelLoader.load(this._view, payload, wrapper.initCallback());
                            return wrapper;
                        };
                        return XmiFormat;
                    })();
                    xmi.XmiFormat = XmiFormat;
                    var XmlParser = (function () {
                        function XmlParser(str) {
                            this.current = 0;
                            this.readSingleton = false;
                            this.attributesNames = new java.util.ArrayList();
                            this.attributesPrefixes = new java.util.ArrayList();
                            this.attributesValues = new java.util.ArrayList();
                            this.attributeName = new java.lang.StringBuilder();
                            this.attributeValue = new java.lang.StringBuilder();
                            this.payload = str;
                            this.currentChar = this.readChar();
                        }
                        XmlParser.prototype.getTagPrefix = function () {
                            return this.tagPrefix;
                        };
                        XmlParser.prototype.hasNext = function () {
                            this.read_lessThan();
                            return this.current < this.payload.length;
                        };
                        XmlParser.prototype.getLocalName = function () {
                            return this.tagName;
                        };
                        XmlParser.prototype.getAttributeCount = function () {
                            return this.attributesNames.size();
                        };
                        XmlParser.prototype.getAttributeLocalName = function (i) {
                            return this.attributesNames.get(i);
                        };
                        XmlParser.prototype.getAttributePrefix = function (i) {
                            return this.attributesPrefixes.get(i);
                        };
                        XmlParser.prototype.getAttributeValue = function (i) {
                            return this.attributesValues.get(i);
                        };
                        XmlParser.prototype.readChar = function () {
                            if (this.current < this.payload.length) {
                                var re = this.payload.charAt(this.current);
                                this.current++;
                                return re;
                            }
                            return '\0';
                        };
                        XmlParser.prototype.next = function () {
                            if (this.readSingleton) {
                                this.readSingleton = false;
                                return org.kevoree.modeling.api.xmi.XmlToken.END_TAG;
                            }
                            if (!this.hasNext()) {
                                return org.kevoree.modeling.api.xmi.XmlToken.END_DOCUMENT;
                            }
                            this.attributesNames.clear();
                            this.attributesPrefixes.clear();
                            this.attributesValues.clear();
                            this.read_lessThan();
                            this.currentChar = this.readChar();
                            if (this.currentChar == '?') {
                                this.currentChar = this.readChar();
                                this.read_xmlHeader();
                                return org.kevoree.modeling.api.xmi.XmlToken.XML_HEADER;
                            }
                            else {
                                if (this.currentChar == '!') {
                                    do {
                                        this.currentChar = this.readChar();
                                    } while (this.currentChar != '>');
                                    return org.kevoree.modeling.api.xmi.XmlToken.COMMENT;
                                }
                                else {
                                    if (this.currentChar == '/') {
                                        this.currentChar = this.readChar();
                                        this.read_closingTag();
                                        return org.kevoree.modeling.api.xmi.XmlToken.END_TAG;
                                    }
                                    else {
                                        this.read_openTag();
                                        if (this.currentChar == '/') {
                                            this.read_upperThan();
                                            this.readSingleton = true;
                                        }
                                        return org.kevoree.modeling.api.xmi.XmlToken.START_TAG;
                                    }
                                }
                            }
                        };
                        XmlParser.prototype.read_lessThan = function () {
                            while (this.currentChar != '<' && this.currentChar != '\0') {
                                this.currentChar = this.readChar();
                            }
                        };
                        XmlParser.prototype.read_upperThan = function () {
                            while (this.currentChar != '>') {
                                this.currentChar = this.readChar();
                            }
                        };
                        XmlParser.prototype.read_xmlHeader = function () {
                            this.read_tagName();
                            this.read_attributes();
                            this.read_upperThan();
                        };
                        XmlParser.prototype.read_closingTag = function () {
                            this.read_tagName();
                            this.read_upperThan();
                        };
                        XmlParser.prototype.read_openTag = function () {
                            this.read_tagName();
                            if (this.currentChar != '>' && this.currentChar != '/') {
                                this.read_attributes();
                            }
                        };
                        XmlParser.prototype.read_tagName = function () {
                            this.tagName = "" + this.currentChar;
                            this.tagPrefix = null;
                            this.currentChar = this.readChar();
                            while (this.currentChar != ' ' && this.currentChar != '>' && this.currentChar != '/') {
                                if (this.currentChar == ':') {
                                    this.tagPrefix = this.tagName;
                                    this.tagName = "";
                                }
                                else {
                                    this.tagName += this.currentChar;
                                }
                                this.currentChar = this.readChar();
                            }
                        };
                        XmlParser.prototype.read_attributes = function () {
                            var end_of_tag = false;
                            while (this.currentChar == ' ') {
                                this.currentChar = this.readChar();
                            }
                            while (!end_of_tag) {
                                while (this.currentChar != '=') {
                                    if (this.currentChar == ':') {
                                        this.attributePrefix = this.attributeName.toString();
                                        this.attributeName = new java.lang.StringBuilder();
                                    }
                                    else {
                                        this.attributeName.append(this.currentChar);
                                    }
                                    this.currentChar = this.readChar();
                                }
                                do {
                                    this.currentChar = this.readChar();
                                } while (this.currentChar != '"');
                                this.currentChar = this.readChar();
                                while (this.currentChar != '"') {
                                    this.attributeValue.append(this.currentChar);
                                    this.currentChar = this.readChar();
                                }
                                this.attributesNames.add(this.attributeName.toString());
                                this.attributesPrefixes.add(this.attributePrefix);
                                this.attributesValues.add(this.attributeValue.toString());
                                this.attributeName = new java.lang.StringBuilder();
                                this.attributePrefix = null;
                                this.attributeValue = new java.lang.StringBuilder();
                                do {
                                    this.currentChar = this.readChar();
                                    if (this.currentChar == '?' || this.currentChar == '/' || this.currentChar == '-' || this.currentChar == '>') {
                                        end_of_tag = true;
                                    }
                                } while (!end_of_tag && this.currentChar == ' ');
                            }
                        };
                        return XmlParser;
                    })();
                    xmi.XmlParser = XmlParser;
                    var XmlToken = (function () {
                        function XmlToken() {
                        }
                        XmlToken.prototype.equals = function (other) {
                            return this == other;
                        };
                        XmlToken.values = function () {
                            return XmlToken._XmlTokenVALUES;
                        };
                        XmlToken.XML_HEADER = new XmlToken();
                        XmlToken.END_DOCUMENT = new XmlToken();
                        XmlToken.START_TAG = new XmlToken();
                        XmlToken.END_TAG = new XmlToken();
                        XmlToken.COMMENT = new XmlToken();
                        XmlToken.SINGLETON_TAG = new XmlToken();
                        XmlToken._XmlTokenVALUES = [
                            XmlToken.XML_HEADER,
                            XmlToken.END_DOCUMENT,
                            XmlToken.START_TAG,
                            XmlToken.END_TAG,
                            XmlToken.COMMENT,
                            XmlToken.SINGLETON_TAG
                        ];
                        return XmlToken;
                    })();
                    xmi.XmlToken = XmlToken;
                })(xmi = api.xmi || (api.xmi = {}));
            })(api = modeling.api || (modeling.api = {}));
        })(modeling = kevoree.modeling || (kevoree.modeling = {}));
    })(kevoree = org.kevoree || (org.kevoree = {}));
})(org || (org = {}));
