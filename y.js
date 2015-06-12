"use strict";function Error(e,t,r){return t&&console.warn(t+" ("+r+") "),e}function scanProperties(e){var t=e.properties,r=partition(Object.keys(t),function(e){var r=t[e];return"object"==typeof r&&!!r.compute||"string"==typeof r}),n=_slicedToArray(r,2),o=n[0],i=n[1],a=pick(t,o),u=pick(t,i);return{statefulPropertyKeys:i,computedProperties:a,statefulProperties:u}}var _prototypeProperties=function(e,t,r){t&&Object.defineProperties(e,t),r&&Object.defineProperties(e.prototype,r)},_classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},ActionTracker=function(){function e(){_classCallCheck(this,e),this.visited=new Set}return _prototypeProperties(e,null,{start:{value:function(){setImmediate(this.done.bind(this))},writable:!0,configurable:!0},visit:{value:function(e){this.visited.add(e)},writable:!0,configurable:!0},isVisited:{value:function(e){return this.visited.has(e)},writable:!0,configurable:!0},done:{value:function(){this.visited=new Set},writable:!0,configurable:!0}}),e}();module.exports=new ActionTracker;var _prototypeProperties=function(e,t,r){t&&Object.defineProperties(e,t),r&&Object.defineProperties(e.prototype,r)},_classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Subject=require("rx").Subject,Capture=function(){function e(t){_classCallCheck(this,e),this.capturedKeys=[],this.keys=t,this.init(),Object.freeze(this)}return _prototypeProperties(e,null,{init:{value:function(){var e=this;this.keys.forEach(function(t){Object.defineProperty(e,t,{get:function(){return e.capturedKeys.push(t),(new Subject).first()}})})},writable:!0,configurable:!0}}),e}();module.exports=Capture;var _interopRequire=function(e){return e&&e.__esModule?e["default"]:e},_inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)},_classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Model=_interopRequire(require("./Model")),CollectionMixin=_interopRequire(require("./CollectionMixin")),mixin=require("lodash").mixin,Collection=function(e){function t(){_classCallCheck(this,t),null!=e&&e.apply(this,arguments)}return _inherits(t,e),t}(Model);mixin(Collection.prototype,CollectionMixin),module.exports=Collection;var _interopRequire=function(e){return e&&e.__esModule?e["default"]:e},_slicedToArray=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e)){for(var r,n=[],o=e[Symbol.iterator]();!(r=o.next()).done&&(n.push(r.value),!t||n.length!==t););return n}throw new TypeError("Invalid attempt to destructure non-iterable instance")},StatelessModel=_interopRequire(require("./StatelessModel")),Observable=_interopRequire(require("./Observable")),_lodash=require("lodash"),zip=_lodash.zip,values=_lodash.values,pick=_lodash.pick,set=_lodash.set,isEqual=_lodash.isEqual,pluck=_lodash.pluck;module.exports={combineLatestToObject:function(e){return Observable.combineLatest.apply(null,values(pick(this,e)).concat(function(){return zip.apply(null,Array.from(arguments)).map(function(t){return t.reduce(function(t,r,n){return set(t,e[n],r)},{})})}))},makeAction:function(e){return function(t){var r=this.documents.slice(0),n=e(t,r);return this.submitChanges(r),n}.bind(this)},submitChanges:function(e){var t=this,r=this;Object.keys(this.properties).map(function(t){return[t,pluck(e,t)]}).forEach(function(e){var n=_slicedToArray(e,2),o=n[0],i=n[1];isEqual(pluck(t.documents,o),i)||(r.output[o].onNext(i),r.documents.length=i.length,i.forEach(function(e,t){r.documents[t]||(r.documents[t]={}),r.documents[t][o]=e}))}),r.documents.slice(0,e.length)}},module.exports={SELF_PROPERTY_NAME:"self",ERROR_MSG:{DEPENDENCY_FORMAT_ERROR:"The format of dependency string is not supported.",NO_PROPERTY_FOUND:"The property is not found in the model."}};var _interopRequire=function(e){return e&&e.__esModule?e["default"]:e},Constant=_interopRequire(require("./Constant"));module.exports=Error;var _interopRequire=function(e){return e&&e.__esModule?e["default"]:e},_slicedToArray=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e)){for(var r,n=[],o=e[Symbol.iterator]();!(r=o.next()).done&&(n.push(r.value),!t||n.length!==t););return n}throw new TypeError("Invalid attempt to destructure non-iterable instance")},_prototypeProperties=function(e,t,r){t&&Object.defineProperties(e,t),r&&Object.defineProperties(e.prototype,r)},_get=function e(t,r,n){var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o&&o.writable)return o.value;var a=o.get;return void 0===a?void 0:a.call(n)},_inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)},_classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},StatelessModel=_interopRequire(require("./StatelessModel")),_rx=require("rx"),Subject=_rx.Subject,BehaviorSubject=_rx.BehaviorSubject,Capture=_interopRequire(require("./Capture")),ModelMap=_interopRequire(require("./ModelMap")),values=require("lodash").values,ActionTracker=_interopRequire(require("./ActionTracker")),Model=function(e){function t(e,r,n,o){_classCallCheck(this,t),this.properties=r,this.documents=[],this.output={},this.setupProperties(),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,n),this.setupActions(o)}return _inherits(t,e),_prototypeProperties(t,null,{observeAll:{value:function(){var e=Object.keys(this.computedProperties).concat(Object.keys(this.properties));return this.combineLatestToObject(e)},writable:!0,configurable:!0},setupProperties:{value:function(){var e=this;Object.keys(this.properties).forEach(function(t){e.output[t]=new BehaviorSubject,Object.defineProperty(e,t,{get:function(){return e.output[t]},set:function(r){return e.changeProperty(t,r)}}),e[t]=e.properties[t]})},writable:!0,configurable:!0},changeProperty:{value:function(e,t){this.applyPropertyValuesToDocuments(e,t),this.output[e].onNext(t)},writable:!0,configurable:!0},setupActions:{value:function(){var e=this,t=void 0===arguments[0]?{}:arguments[0];this.availableActions=Object.keys(t).map(function(r){return[r,e.makeAction(t[r])]}).reduce(function(e,t){var r=_slicedToArray(t,2),n=r[0],o=r[1];return e[n]=o,e},{})},writable:!0,configurable:!0},makeAction:{value:function(e){return function(t){var r=Object.assign({},this.documents[0]),n=e(t,r);return this.submitChanges(r),n}.bind(this)},writable:!0,configurable:!0},relayAction:{value:function(e,t){var r=this;ActionTracker.isVisited(this.name)||!function(){ActionTracker.visit(r.name);var n=r.availableActions[e]?r.availableActions[e](t):t;r.parents.map(function(e){return ModelMap.get(e)}).forEach(function(t){return t.relayAction(e,n)})}()},writable:!0,configurable:!0},submitChanges:{value:function(e){var t=this;Object.keys(this.properties).map(function(t){return[t,e[t]]}).forEach(function(e){var r=_slicedToArray(e,2),n=r[0],o=r[1];t.documents[n]!==o&&(t.output[n].onNext(o),t.documents[n]=o)})},writable:!0,configurable:!0}}),t}(StatelessModel);module.exports=Model;var _prototypeProperties=function(e,t,r){t&&Object.defineProperties(e,t),r&&Object.defineProperties(e.prototype,r)},_classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},ModelMap=function(){function e(){_classCallCheck(this,e),this.map=new Map}return _prototypeProperties(e,null,{get:{value:function(e){if(this.map.has(e))return this.map.get(e);throw"No model named "+e+" is found."},writable:!0,configurable:!0},add:{value:function(e,t){if(this.map.has(e))throw e+" is redefined.";return this.map.set(e,t)},writable:!0,configurable:!0},remove:{value:function(e){},writable:!0,configurable:!0}}),e}();module.exports=new ModelMap;var _slicedToArray=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e)){for(var r,n=[],o=e[Symbol.iterator]();!(r=o.next()).done&&(n.push(r.value),!t||n.length!==t););return n}throw new TypeError("Invalid attempt to destructure non-iterable instance")},_rx=require("rx"),Observable=_rx.Observable,Scheduler=_rx.Scheduler;Observable.prototype.partitionValues=function(){var e=this;return Observable.create(function(t){var r=e.partition(Observable.isObservable),n=_slicedToArray(r,2),o=n[0],i=n[1];o.subscribe(function(e){return e.map(function(e){return e}).partitionValues().subscribe(function(e){return t.onNext(e)})}),i.toArray().subscribe(function(e){t.onNext(e)})})},Observable.isObservable=function(e){return!!e.subscribe},module.exports=Observable;var _interopRequire=function(e){return e&&e.__esModule?e["default"]:e},_inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)},_classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},StatelessModel=_interopRequire(require("./StatelessModel")),CollectionMixin=_interopRequire(require("./CollectionMixin")),mixin=require("lodash").mixin,StatelessCollection=function(e){function t(){_classCallCheck(this,t),null!=e&&e.apply(this,arguments)}return _inherits(t,e),t}(StatelessModel);mixin(StatelessCollection.prototype,CollectionMixin),module.exports=StatelessCollection;var _interopRequire=function(e){return e&&e.__esModule?e["default"]:e},_slicedToArray=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e)){for(var r,n=[],o=e[Symbol.iterator]();!(r=o.next()).done&&(n.push(r.value),!t||n.length!==t););return n}throw new TypeError("Invalid attempt to destructure non-iterable instance")},_prototypeProperties=function(e,t,r){t&&Object.defineProperties(e,t),r&&Object.defineProperties(e.prototype,r)},_classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},_rx=require("rx"),Subject=_rx.Subject,BehaviorSubject=_rx.BehaviorSubject,Scheduler=_rx.Scheduler,_lodash=require("lodash"),pick=_lodash.pick,values=_lodash.values,flatten=_lodash.flatten,isFunction=_lodash.isFunction,memoize=_lodash.memoize,partition=_lodash.partition,isEqual=_lodash.isEqual,curry=_lodash.curry,set=_lodash.set,bootstrap=_interopRequire(require("./bootstap")),Observable=_interopRequire(require("./Observable")),Constant=_interopRequire(require("./Constant")),ModelMap=_interopRequire(require("./ModelMap")),Capture=_interopRequire(require("./Capture")),ActionTracker=_interopRequire(require("./ActionTracker")),Util=_interopRequire(require("./Util")),Error=_interopRequire(require("./Error")),StatelessModel=function(){function e(t,r){_classCallCheck(this,e),this.name=t,this.documents=this.documents?this.documents:{},this.properties=this.properties?this.properties:{},this.computedProperties=r||{},this.observables=new Map,this.timeCounters=new Map,this.setupComputedProperties(),this.parents=this.findParents(),this.setupActionProxy(),this.memoizedGetObservable=this.getObservableForProperty()}return _prototypeProperties(e,{anyUpdate:{value:function(e){return Array.isArray(e)},writable:!0,configurable:!0}},{observe:{value:function(){var e=Array.from(arguments);return this.combineLatestToObject(e)},writable:!0,configurable:!0},observeAll:{value:function(){var e=Object.keys(this.computedProperties);return this.combineLatestToObject(e)},writable:!0,configurable:!0},combineLatestToObject:{value:function(e){return Observable.combineLatest.apply(null,values(pick(this,e)).concat(function(){return Array.from(arguments).reduce(function(t,r,n){return set(t,e[n],r[0])},{})}))},writable:!0,configurable:!0},applyPropertyValuesToDocuments:{value:function(e,t){var r=this,n=!1;return(Array.isArray(t)?t:[t]).forEach(function(t,o){r.documents[o]||(r.documents[o]={}),r.documents[o][e]!==t&&(r.documents[o][e]=t,n=!0)}),t},writable:!0,configurable:!0},setupComputedProperties:{value:function(){function e(e){var t=this;Object.defineProperty(this,e,{get:function(){return t.memoizedGetObservable(e)}})}Object.keys(this.computedProperties).forEach(e.bind(this))},writable:!0,configurable:!0},getObservableForProperty:{value:function(){function e(e){for(;;){var r=e;n=void 0;var n=t.computedProperties[r];{if("string"!=typeof n)return isFunction(n)?{compute:n,dependencies:[]}:n;e=n}}}var t=this;return memoize(function(r){var n=e(r),o=n.compute,i=n.dependencies;return t.compute(r,o,t.getDependencyProperties(r,i))}.bind(this))},writable:!0,configurable:!0},compute:{value:function(e,t,r){var n=this,o=curry(this.applyPropertyValuesToDocuments)(e).bind(this),i=this.observables.has(e)?curry(this.handleLoop)(e).bind(this):function(e){return Observable["return"](e)};return Observable.combineLatest.apply(this,r.concat(function(){return Array.from(arguments).map(function(e){return Array.isArray(e)?Observable.from(e):Observable["return"](e)})})).flatMap(function(r){var o=t.apply(null,r.concat(n.timeCounters.get(e)));return null===o?o:(Observable.isObservable(o)?o:o[e]).toArray()}).flatMap(i).map(o)},writable:!0,configurable:!0},handleLoop:{value:function(e,t){function r(){return 1===t.length&&Observable.isObservable(t[0])}var n=this;return r(t)?t[0].toArray()["do"](function(t){n.timeCounters.set(e,n.timeCounters.get(e)+1),n.observables.get(e).onNext(t)}):Observable["return"](t)},writable:!0,configurable:!0},getDependencyProperties:{value:function(e,t){var r=this,n=function(e){return e===Constant.SELF_PROPERTY_NAME},o=t.filter(n).length>0,i=function(){return r.timeCounters.set(e,0)};return t.map(function(t){return n(t)?r.getIntDependencyProperty(e):r.getExtDependencyProperty(t,o?i:function(){})})},writable:!0,configurable:!0},getExtDependencyProperty:{value:function(e,t){var r=Util.parseDependencyString(e),n=_slicedToArray(r,2),o=n[0],i=n[1],a=ModelMap.get(o)[i];return a?a["do"](t):Error(null,Constant.ERROR_MSG.NO_PROPERTY_FOUND,e)},writable:!0,configurable:!0},getIntDependencyProperty:{value:function(e){return this.observables.set(e,new BehaviorSubject),this.timeCounters.set(e,0),this.observables.get(e).observeOn(Scheduler["default"])},writable:!0,configurable:!0},findParents:{value:function(){return values(this.computedProperties).filter(function(e){return Array.isArray(e)}).reduce(function(e,t){return e.concat(t[1])},[]).filter(function(e){return e!==Constant.SELF_PROPERTY_NAME}).map(function(e){return Util.parseDependencyString(e)[0]})||[]},writable:!0,configurable:!0},setupActionProxy:{value:function(){var e=this;this.action=function(t){return function(r){e.startAction(t,r)}}},writable:!0,configurable:!0},relayAction:{value:function(e,t){ActionTracker.isVisited(this.name)||(ActionTracker.visit(this.name),this.parents.map(function(e){return ModelMap.get(e)}).forEach(function(r){return r.relayAction(e,t)}))},writable:!0,configurable:!0},startAction:{value:function(e,t){ActionTracker.start(),this.relayAction(e,t)},writable:!0,configurable:!0}}),e}();module.exports=StatelessModel;var _interopRequire=function(e){return e&&e.__esModule?e["default"]:e},_prototypeProperties=function(e,t,r){t&&Object.defineProperties(e,t),r&&Object.defineProperties(e.prototype,r)},_classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Error=_interopRequire(require("./Error")),Constant=_interopRequire(require("./Constant")),Util=function(){function e(){_classCallCheck(this,e)}return _prototypeProperties(e,{parseDependencyString:{value:function(e){return e===Constant.SELF_PROPERTY_NAME?e:null===e.match(/^[a-z|A-Z|0-9]+\.[a-z|A-Z|0-9]+$/)?new Error(["",""],Constant.ERROR_MSG.DEPENDENCY_FORMAT_ERROR,e):function(){return e.split(".")}()},writable:!0,configurable:!0}}),e}();module.exports=Util,require("setimmediate"),Array.from||(Array.from=function(){var e=Object.prototype.toString,t=function(t){return"function"==typeof t||"[object Function]"===e.call(t)},r=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t},n=Math.pow(2,53)-1,o=function(e){var t=r(e);return Math.min(Math.max(t,0),n)};return function(e){var r=this,n=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var i,a=arguments.length>1?arguments[1]:void 0;if("undefined"!=typeof a){if(!t(a))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(i=arguments[2])}for(var u,s=o(n.length),l=t(r)?Object(new r(s)):new Array(s),c=0;s>c;)u=n[c],l[c]=a?"undefined"==typeof i?a(u,c):a.call(i,u,c):u,c+=1;return l.length=s,l}}()),Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){if(void 0===e||null===e)throw new TypeError("Cannot convert first argument to object");for(var r=Object(e),n=1;n<arguments.length;n++){var o=arguments[n];if(void 0!==o&&null!==o){o=Object(o);for(var i=Object.keys(Object(o)),a=0,u=i.length;u>a;a++){var s=i[a],l=Object.getOwnPropertyDescriptor(o,s);void 0!==l&&l.enumerable&&(r[s]=o[s])}}}return r}});var _interopRequire=function(e){return e&&e.__esModule?e["default"]:e},_slicedToArray=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e)){for(var r,n=[],o=e[Symbol.iterator]();!(r=o.next()).done&&(n.push(r.value),!t||n.length!==t););return n}throw new TypeError("Invalid attempt to destructure non-iterable instance")},_prototypeProperties=function(e,t,r){t&&Object.defineProperties(e,t),r&&Object.defineProperties(e.prototype,r)},_classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Rx=_interopRequire(require("rx")),_lodash=require("lodash"),partition=_lodash.partition,isFunction=_lodash.isFunction,pick=_lodash.pick,Observable=_interopRequire(require("./Observable")),StatelessModel=_interopRequire(require("./StatelessModel")),StatelessCollection=_interopRequire(require("./StatelessCollection")),Model=_interopRequire(require("./Model")),Collection=_interopRequire(require("./Collection")),ModelMap=_interopRequire(require("./ModelMap"));Function.prototype.require=function(){return{compute:this,dependencies:Array.prototype.slice.call(arguments)}};var Y=function(){function e(){_classCallCheck(this,e)}return _prototypeProperties(e,{createModel:{value:function(e){var t=scanProperties(e),r=t.statefulPropertyKeys,n=t.computedProperties,o=t.statefulProperties,i=r.length?new Model(e.name,o,n,e.actions):new StatelessModel(e.name,n);return ModelMap.add(i.name,i),i},writable:!0,configurable:!0},createCollection:{value:function(e){var t=scanProperties(e),r=t.statefulPropertyKeys,n=t.computedProperties,o=t.statefulProperties,i=r.length?new Collection(e.name,o,n,e.actions):new StatelessCollection(e.name,n);return ModelMap.add(i.name,i),i},writable:!0,configurable:!0}}),e}();Object.defineProperty(Y,"Observable",{get:function(){return Observable}}),module.exports=Y;