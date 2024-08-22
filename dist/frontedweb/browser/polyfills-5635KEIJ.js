var ce=globalThis;function ee(e){return(ce.__Zone_symbol_prefix||"__zone_symbol__")+e}function Tt(){let e=ce.performance;function r(L){e&&e.mark&&e.mark(L)}function i(L,_){e&&e.measure&&e.measure(L,_)}r("Zone");let n=(()=>{let _=class _{static assertZonePatched(){if(ce.Promise!==D.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let t=_.current;for(;t.parent;)t=t.parent;return t}static get current(){return b.zone}static get currentTask(){return O}static __load_patch(t,d,C=!1){if(D.hasOwnProperty(t)){let I=ce[ee("forceDuplicateZoneCheck")]===!0;if(!C&&I)throw Error("Already loaded patch: "+t)}else if(!ce["__Zone_disable_"+t]){let I="Zone:"+t;r(I),D[t]=d(ce,_,R),i(I,I)}}get parent(){return this._parent}get name(){return this._name}constructor(t,d){this._parent=t,this._name=d?d.name||"unnamed":"<root>",this._properties=d&&d.properties||{},this._zoneDelegate=new f(this,this._parent&&this._parent._zoneDelegate,d)}get(t){let d=this.getZoneWith(t);if(d)return d._properties[t]}getZoneWith(t){let d=this;for(;d;){if(d._properties.hasOwnProperty(t))return d;d=d._parent}return null}fork(t){if(!t)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,t)}wrap(t,d){if(typeof t!="function")throw new Error("Expecting function got: "+t);let C=this._zoneDelegate.intercept(this,t,d),I=this;return function(){return I.runGuarded(C,this,arguments,d)}}run(t,d,C,I){b={parent:b,zone:this};try{return this._zoneDelegate.invoke(this,t,d,C,I)}finally{b=b.parent}}runGuarded(t,d=null,C,I){b={parent:b,zone:this};try{try{return this._zoneDelegate.invoke(this,t,d,C,I)}catch(S){if(this._zoneDelegate.handleError(this,S))throw S}}finally{b=b.parent}}runTask(t,d,C){if(t.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(t.zone||J).name+"; Execution: "+this.name+")");let I=t,{type:S,data:{isPeriodic:_e=!1,isRefreshable:ae=!1}={}}=t;if(t.state===q&&(S===F||S===m))return;let ne=t.state!=Z;ne&&I._transitionTo(Z,h);let Te=O;O=I,b={parent:b,zone:this};try{S==m&&t.data&&!_e&&!ae&&(t.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,I,d,C)}catch(l){if(this._zoneDelegate.handleError(this,l))throw l}}finally{let l=t.state;if(l!==q&&l!==X)if(S==F||_e||ae&&l===k)ne&&I._transitionTo(h,Z,k);else{let a=I._zoneDelegates;this._updateTaskCount(I,-1),ne&&I._transitionTo(q,Z,q),ae&&(I._zoneDelegates=a)}b=b.parent,O=Te}}scheduleTask(t){if(t.zone&&t.zone!==this){let C=this;for(;C;){if(C===t.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`);C=C.parent}}t._transitionTo(k,q);let d=[];t._zoneDelegates=d,t._zone=this;try{t=this._zoneDelegate.scheduleTask(this,t)}catch(C){throw t._transitionTo(X,k,q),this._zoneDelegate.handleError(this,C),C}return t._zoneDelegates===d&&this._updateTaskCount(t,1),t.state==k&&t._transitionTo(h,k),t}scheduleMicroTask(t,d,C,I){return this.scheduleTask(new g(U,t,d,C,I,void 0))}scheduleMacroTask(t,d,C,I,S){return this.scheduleTask(new g(m,t,d,C,I,S))}scheduleEventTask(t,d,C,I,S){return this.scheduleTask(new g(F,t,d,C,I,S))}cancelTask(t){if(t.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(t.zone||J).name+"; Execution: "+this.name+")");if(!(t.state!==h&&t.state!==Z)){t._transitionTo(B,h,Z);try{this._zoneDelegate.cancelTask(this,t)}catch(d){throw t._transitionTo(X,B),this._zoneDelegate.handleError(this,d),d}return this._updateTaskCount(t,-1),t._transitionTo(q,B),t.runCount=-1,t}}_updateTaskCount(t,d){let C=t._zoneDelegates;d==-1&&(t._zoneDelegates=null);for(let I=0;I<C.length;I++)C[I]._updateTaskCount(t.type,d)}};_.__symbol__=ee;let L=_;return L})(),s={name:"",onHasTask:(L,_,c,t)=>L.hasTask(c,t),onScheduleTask:(L,_,c,t)=>L.scheduleTask(c,t),onInvokeTask:(L,_,c,t,d,C)=>L.invokeTask(c,t,d,C),onCancelTask:(L,_,c,t)=>L.cancelTask(c,t)};class f{get zone(){return this._zone}constructor(_,c,t){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this._zone=_,this._parentDelegate=c,this._forkZS=t&&(t&&t.onFork?t:c._forkZS),this._forkDlgt=t&&(t.onFork?c:c._forkDlgt),this._forkCurrZone=t&&(t.onFork?this._zone:c._forkCurrZone),this._interceptZS=t&&(t.onIntercept?t:c._interceptZS),this._interceptDlgt=t&&(t.onIntercept?c:c._interceptDlgt),this._interceptCurrZone=t&&(t.onIntercept?this._zone:c._interceptCurrZone),this._invokeZS=t&&(t.onInvoke?t:c._invokeZS),this._invokeDlgt=t&&(t.onInvoke?c:c._invokeDlgt),this._invokeCurrZone=t&&(t.onInvoke?this._zone:c._invokeCurrZone),this._handleErrorZS=t&&(t.onHandleError?t:c._handleErrorZS),this._handleErrorDlgt=t&&(t.onHandleError?c:c._handleErrorDlgt),this._handleErrorCurrZone=t&&(t.onHandleError?this._zone:c._handleErrorCurrZone),this._scheduleTaskZS=t&&(t.onScheduleTask?t:c._scheduleTaskZS),this._scheduleTaskDlgt=t&&(t.onScheduleTask?c:c._scheduleTaskDlgt),this._scheduleTaskCurrZone=t&&(t.onScheduleTask?this._zone:c._scheduleTaskCurrZone),this._invokeTaskZS=t&&(t.onInvokeTask?t:c._invokeTaskZS),this._invokeTaskDlgt=t&&(t.onInvokeTask?c:c._invokeTaskDlgt),this._invokeTaskCurrZone=t&&(t.onInvokeTask?this._zone:c._invokeTaskCurrZone),this._cancelTaskZS=t&&(t.onCancelTask?t:c._cancelTaskZS),this._cancelTaskDlgt=t&&(t.onCancelTask?c:c._cancelTaskDlgt),this._cancelTaskCurrZone=t&&(t.onCancelTask?this._zone:c._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;let d=t&&t.onHasTask,C=c&&c._hasTaskZS;(d||C)&&(this._hasTaskZS=d?t:s,this._hasTaskDlgt=c,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,t.onScheduleTask||(this._scheduleTaskZS=s,this._scheduleTaskDlgt=c,this._scheduleTaskCurrZone=this._zone),t.onInvokeTask||(this._invokeTaskZS=s,this._invokeTaskDlgt=c,this._invokeTaskCurrZone=this._zone),t.onCancelTask||(this._cancelTaskZS=s,this._cancelTaskDlgt=c,this._cancelTaskCurrZone=this._zone))}fork(_,c){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,_,c):new n(_,c)}intercept(_,c,t){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,_,c,t):c}invoke(_,c,t,d,C){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,_,c,t,d,C):c.apply(t,d)}handleError(_,c){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,_,c):!0}scheduleTask(_,c){let t=c;if(this._scheduleTaskZS)this._hasTaskZS&&t._zoneDelegates.push(this._hasTaskDlgtOwner),t=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,_,c),t||(t=c);else if(c.scheduleFn)c.scheduleFn(c);else if(c.type==U)G(c);else throw new Error("Task is missing scheduleFn.");return t}invokeTask(_,c,t,d){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,_,c,t,d):c.callback.apply(t,d)}cancelTask(_,c){let t;if(this._cancelTaskZS)t=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,_,c);else{if(!c.cancelFn)throw Error("Task is not cancelable");t=c.cancelFn(c)}return t}hasTask(_,c){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,_,c)}catch(t){this.handleError(_,t)}}_updateTaskCount(_,c){let t=this._taskCounts,d=t[_],C=t[_]=d+c;if(C<0)throw new Error("More tasks executed then were scheduled.");if(d==0||C==0){let I={microTask:t.microTask>0,macroTask:t.macroTask>0,eventTask:t.eventTask>0,change:_};this.hasTask(this._zone,I)}}}class g{constructor(_,c,t,d,C,I){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=_,this.source=c,this.data=d,this.scheduleFn=C,this.cancelFn=I,!t)throw new Error("callback is not defined");this.callback=t;let S=this;_===F&&d&&d.useG?this.invoke=g.invokeTask:this.invoke=function(){return g.invokeTask.call(ce,S,this,arguments)}}static invokeTask(_,c,t){_||(_=this),Q++;try{return _.runCount++,_.zone.runTask(_,c,t)}finally{Q==1&&K(),Q--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(q,k)}_transitionTo(_,c,t){if(this._state===c||this._state===t)this._state=_,_==q&&(this._zoneDelegates=null);else throw new Error(`${this.type} '${this.source}': can not transition to '${_}', expecting state '${c}'${t?" or '"+t+"'":""}, was '${this._state}'.`)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}let E=ee("setTimeout"),y=ee("Promise"),N=ee("then"),T=[],w=!1,x;function H(L){if(x||ce[y]&&(x=ce[y].resolve(0)),x){let _=x[N];_||(_=x.then),_.call(x,L)}else ce[E](L,0)}function G(L){Q===0&&T.length===0&&H(K),L&&T.push(L)}function K(){if(!w){for(w=!0;T.length;){let L=T;T=[];for(let _=0;_<L.length;_++){let c=L[_];try{c.zone.runTask(c,null,null)}catch(t){R.onUnhandledError(t)}}}R.microtaskDrainDone(),w=!1}}let J={name:"NO ZONE"},q="notScheduled",k="scheduling",h="scheduled",Z="running",B="canceling",X="unknown",U="microTask",m="macroTask",F="eventTask",D={},R={symbol:ee,currentZoneFrame:()=>b,onUnhandledError:W,microtaskDrainDone:W,scheduleMicroTask:G,showUncaughtError:()=>!n[ee("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:W,patchMethod:()=>W,bindArguments:()=>[],patchThen:()=>W,patchMacroTask:()=>W,patchEventPrototype:()=>W,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>W,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>W,wrapWithCurrentZone:()=>W,filterProperties:()=>[],attachOriginToPatched:()=>W,_redefineProperty:()=>W,patchCallbacks:()=>W,nativeScheduleMicroTask:H},b={parent:null,zone:new n(null,null)},O=null,Q=0;function W(){}return i("Zone","Zone"),n}function gt(){let e=globalThis,r=e[ee("forceDuplicateZoneCheck")]===!0;if(e.Zone&&(r||typeof e.Zone.__symbol__!="function"))throw new Error("Zone already loaded.");return e.Zone??=Tt(),e.Zone}var be=Object.getOwnPropertyDescriptor,xe=Object.defineProperty,Ze=Object.getPrototypeOf,Et=Object.create,mt=Array.prototype.slice,$e="addEventListener",He="removeEventListener",Me=ee($e),Le=ee(He),le="true",ue="false",we=ee("");function Be(e,r){return Zone.current.wrap(e,r)}function Ue(e,r,i,n,s){return Zone.current.scheduleMacroTask(e,r,i,n,s)}var $=ee,Se=typeof window<"u",ye=Se?window:void 0,Y=Se&&ye||globalThis,pt="removeAttribute";function ze(e,r){for(let i=e.length-1;i>=0;i--)typeof e[i]=="function"&&(e[i]=Be(e[i],r+"_"+i));return e}function yt(e,r){let i=e.constructor.name;for(let n=0;n<r.length;n++){let s=r[n],f=e[s];if(f){let g=be(e,s);if(!nt(g))continue;e[s]=(E=>{let y=function(){return E.apply(this,ze(arguments,i+"."+s))};return he(y,E),y})(f)}}}function nt(e){return e?e.writable===!1?!1:!(typeof e.get=="function"&&typeof e.set>"u"):!0}var rt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Oe=!("nw"in Y)&&typeof Y.process<"u"&&Y.process.toString()==="[object process]",Ve=!Oe&&!rt&&!!(Se&&ye.HTMLElement),ot=typeof Y.process<"u"&&Y.process.toString()==="[object process]"&&!rt&&!!(Se&&ye.HTMLElement),Ne={},kt=$("enable_beforeunload"),Ye=function(e){if(e=e||Y.event,!e)return;let r=Ne[e.type];r||(r=Ne[e.type]=$("ON_PROPERTY"+e.type));let i=this||e.target||Y,n=i[r],s;if(Ve&&i===ye&&e.type==="error"){let f=e;s=n&&n.call(this,f.message,f.filename,f.lineno,f.colno,f.error),s===!0&&e.preventDefault()}else s=n&&n.apply(this,arguments),e.type==="beforeunload"&&Y[kt]&&typeof s=="string"?e.returnValue=s:s!=null&&!s&&e.preventDefault();return s};function Ke(e,r,i){let n=be(e,r);if(!n&&i&&be(i,r)&&(n={enumerable:!0,configurable:!0}),!n||!n.configurable)return;let s=$("on"+r+"patched");if(e.hasOwnProperty(s)&&e[s])return;delete n.writable,delete n.value;let f=n.get,g=n.set,E=r.slice(2),y=Ne[E];y||(y=Ne[E]=$("ON_PROPERTY"+E)),n.set=function(N){let T=this;if(!T&&e===Y&&(T=Y),!T)return;typeof T[y]=="function"&&T.removeEventListener(E,Ye),g&&g.call(T,null),T[y]=N,typeof N=="function"&&T.addEventListener(E,Ye,!1)},n.get=function(){let N=this;if(!N&&e===Y&&(N=Y),!N)return null;let T=N[y];if(T)return T;if(f){let w=f.call(this);if(w)return n.set.call(this,w),typeof N[pt]=="function"&&N.removeAttribute(r),w}return null},xe(e,r,n),e[s]=!0}function st(e,r,i){if(r)for(let n=0;n<r.length;n++)Ke(e,"on"+r[n],i);else{let n=[];for(let s in e)s.slice(0,2)=="on"&&n.push(s);for(let s=0;s<n.length;s++)Ke(e,n[s],i)}}var oe=$("originalInstance");function ve(e){let r=Y[e];if(!r)return;Y[$(e)]=r,Y[e]=function(){let s=ze(arguments,e);switch(s.length){case 0:this[oe]=new r;break;case 1:this[oe]=new r(s[0]);break;case 2:this[oe]=new r(s[0],s[1]);break;case 3:this[oe]=new r(s[0],s[1],s[2]);break;case 4:this[oe]=new r(s[0],s[1],s[2],s[3]);break;default:throw new Error("Arg list too long.")}},he(Y[e],r);let i=new r(function(){}),n;for(n in i)e==="XMLHttpRequest"&&n==="responseBlob"||function(s){typeof i[s]=="function"?Y[e].prototype[s]=function(){return this[oe][s].apply(this[oe],arguments)}:xe(Y[e].prototype,s,{set:function(f){typeof f=="function"?(this[oe][s]=Be(f,e+"."+s),he(this[oe][s],f)):this[oe][s]=f},get:function(){return this[oe][s]}})}(n);for(n in r)n!=="prototype"&&r.hasOwnProperty(n)&&(Y[e][n]=r[n])}function fe(e,r,i){let n=e;for(;n&&!n.hasOwnProperty(r);)n=Ze(n);!n&&e[r]&&(n=e);let s=$(r),f=null;if(n&&(!(f=n[s])||!n.hasOwnProperty(s))){f=n[s]=n[r];let g=n&&be(n,r);if(nt(g)){let E=i(f,s,r);n[r]=function(){return E(this,arguments)},he(n[r],f)}}return f}function vt(e,r,i){let n=null;function s(f){let g=f.data;return g.args[g.cbIdx]=function(){f.invoke.apply(this,arguments)},n.apply(g.target,g.args),f}n=fe(e,r,f=>function(g,E){let y=i(g,E);return y.cbIdx>=0&&typeof E[y.cbIdx]=="function"?Ue(y.name,E[y.cbIdx],y,s):f.apply(g,E)})}function he(e,r){e[$("OriginalDelegate")]=r}var Je=!1,Ae=!1;function bt(){try{let e=ye.navigator.userAgent;if(e.indexOf("MSIE ")!==-1||e.indexOf("Trident/")!==-1)return!0}catch{}return!1}function wt(){if(Je)return Ae;Je=!0;try{let e=ye.navigator.userAgent;(e.indexOf("MSIE ")!==-1||e.indexOf("Trident/")!==-1||e.indexOf("Edge/")!==-1)&&(Ae=!0)}catch{}return Ae}function Qe(e){return typeof e=="function"}function et(e){return typeof e=="number"}var pe=!1;if(typeof window<"u")try{let e=Object.defineProperty({},"passive",{get:function(){pe=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{pe=!1}var Rt={useG:!0},te={},it={},ct=new RegExp("^"+we+"(\\w+)(true|false)$"),at=$("propagationStopped");function lt(e,r){let i=(r?r(e):e)+ue,n=(r?r(e):e)+le,s=we+i,f=we+n;te[e]={},te[e][ue]=s,te[e][le]=f}function Pt(e,r,i,n){let s=n&&n.add||$e,f=n&&n.rm||He,g=n&&n.listeners||"eventListeners",E=n&&n.rmAll||"removeAllListeners",y=$(s),N="."+s+":",T="prependListener",w="."+T+":",x=function(k,h,Z){if(k.isRemoved)return;let B=k.callback;typeof B=="object"&&B.handleEvent&&(k.callback=m=>B.handleEvent(m),k.originalDelegate=B);let X;try{k.invoke(k,h,[Z])}catch(m){X=m}let U=k.options;if(U&&typeof U=="object"&&U.once){let m=k.originalDelegate?k.originalDelegate:k.callback;h[f].call(h,Z.type,m,U)}return X};function H(k,h,Z){if(h=h||e.event,!h)return;let B=k||h.target||e,X=B[te[h.type][Z?le:ue]];if(X){let U=[];if(X.length===1){let m=x(X[0],B,h);m&&U.push(m)}else{let m=X.slice();for(let F=0;F<m.length&&!(h&&h[at]===!0);F++){let D=x(m[F],B,h);D&&U.push(D)}}if(U.length===1)throw U[0];for(let m=0;m<U.length;m++){let F=U[m];r.nativeScheduleMicroTask(()=>{throw F})}}}let G=function(k){return H(this,k,!1)},K=function(k){return H(this,k,!0)};function J(k,h){if(!k)return!1;let Z=!0;h&&h.useG!==void 0&&(Z=h.useG);let B=h&&h.vh,X=!0;h&&h.chkDup!==void 0&&(X=h.chkDup);let U=!1;h&&h.rt!==void 0&&(U=h.rt);let m=k;for(;m&&!m.hasOwnProperty(s);)m=Ze(m);if(!m&&k[s]&&(m=k),!m||m[y])return!1;let F=h&&h.eventNameToString,D={},R=m[y]=m[s],b=m[$(f)]=m[f],O=m[$(g)]=m[g],Q=m[$(E)]=m[E],W;h&&h.prepend&&(W=m[$(h.prepend)]=m[h.prepend]);function L(o,u){return!pe&&typeof o=="object"&&o?!!o.capture:!pe||!u?o:typeof o=="boolean"?{capture:o,passive:!0}:o?typeof o=="object"&&o.passive!==!1?{...o,passive:!0}:o:{passive:!0}}let _=function(o){if(!D.isExisting)return R.call(D.target,D.eventName,D.capture?K:G,D.options)},c=function(o){if(!o.isRemoved){let u=te[o.eventName],v;u&&(v=u[o.capture?le:ue]);let P=v&&o.target[v];if(P){for(let p=0;p<P.length;p++)if(P[p]===o){P.splice(p,1),o.isRemoved=!0,o.removeAbortListener&&(o.removeAbortListener(),o.removeAbortListener=null),P.length===0&&(o.allRemoved=!0,o.target[v]=null);break}}}if(o.allRemoved)return b.call(o.target,o.eventName,o.capture?K:G,o.options)},t=function(o){return R.call(D.target,D.eventName,o.invoke,D.options)},d=function(o){return W.call(D.target,D.eventName,o.invoke,D.options)},C=function(o){return b.call(o.target,o.eventName,o.invoke,o.options)},I=Z?_:t,S=Z?c:C,_e=function(o,u){let v=typeof u;return v==="function"&&o.callback===u||v==="object"&&o.originalDelegate===u},ae=h&&h.diff?h.diff:_e,ne=Zone[$("UNPATCHED_EVENTS")],Te=e[$("PASSIVE_EVENTS")];function l(o){if(typeof o=="object"&&o!==null){let u={...o};return o.signal&&(u.signal=o.signal),u}return o}let a=function(o,u,v,P,p=!1,M=!1){return function(){let A=this||e,j=arguments[0];h&&h.transferEventName&&(j=h.transferEventName(j));let z=arguments[1];if(!z)return o.apply(this,arguments);if(Oe&&j==="uncaughtException")return o.apply(this,arguments);let V=!1;if(typeof z!="function"){if(!z.handleEvent)return o.apply(this,arguments);V=!0}if(B&&!B(o,z,A,arguments))return;let de=pe&&!!Te&&Te.indexOf(j)!==-1,se=l(L(arguments[2],de)),ge=se?.signal;if(ge?.aborted)return;if(ne){for(let ie=0;ie<ne.length;ie++)if(j===ne[ie])return de?o.call(A,j,z,se):o.apply(this,arguments)}let Ie=se?typeof se=="boolean"?!0:se.capture:!1,Ge=se&&typeof se=="object"?se.once:!1,_t=Zone.current,De=te[j];De||(lt(j,F),De=te[j]);let Fe=De[Ie?le:ue],Ee=A[Fe],We=!1;if(Ee){if(We=!0,X){for(let ie=0;ie<Ee.length;ie++)if(ae(Ee[ie],z))return}}else Ee=A[Fe]=[];let Re,qe=A.constructor.name,Xe=it[qe];Xe&&(Re=Xe[j]),Re||(Re=qe+u+(F?F(j):j)),D.options=se,Ge&&(D.options.once=!1),D.target=A,D.capture=Ie,D.eventName=j,D.isExisting=We;let ke=Z?Rt:void 0;ke&&(ke.taskData=D),ge&&(D.options.signal=void 0);let re=_t.scheduleEventTask(Re,z,ke,v,P);if(ge){D.options.signal=ge;let ie=()=>re.zone.cancelTask(re);o.call(ge,"abort",ie,{once:!0}),re.removeAbortListener=()=>ge.removeEventListener("abort",ie)}if(D.target=null,ke&&(ke.taskData=null),Ge&&(D.options.once=!0),!pe&&typeof re.options=="boolean"||(re.options=se),re.target=A,re.capture=Ie,re.eventName=j,V&&(re.originalDelegate=z),M?Ee.unshift(re):Ee.push(re),p)return A}};return m[s]=a(R,N,I,S,U),W&&(m[T]=a(W,w,d,S,U,!0)),m[f]=function(){let o=this||e,u=arguments[0];h&&h.transferEventName&&(u=h.transferEventName(u));let v=arguments[2],P=v?typeof v=="boolean"?!0:v.capture:!1,p=arguments[1];if(!p)return b.apply(this,arguments);if(B&&!B(b,p,o,arguments))return;let M=te[u],A;M&&(A=M[P?le:ue]);let j=A&&o[A];if(j)for(let z=0;z<j.length;z++){let V=j[z];if(ae(V,p)){if(j.splice(z,1),V.isRemoved=!0,j.length===0&&(V.allRemoved=!0,o[A]=null,!P&&typeof u=="string")){let de=we+"ON_PROPERTY"+u;o[de]=null}return V.zone.cancelTask(V),U?o:void 0}}return b.apply(this,arguments)},m[g]=function(){let o=this||e,u=arguments[0];h&&h.transferEventName&&(u=h.transferEventName(u));let v=[],P=ut(o,F?F(u):u);for(let p=0;p<P.length;p++){let M=P[p],A=M.originalDelegate?M.originalDelegate:M.callback;v.push(A)}return v},m[E]=function(){let o=this||e,u=arguments[0];if(u){h&&h.transferEventName&&(u=h.transferEventName(u));let v=te[u];if(v){let P=v[ue],p=v[le],M=o[P],A=o[p];if(M){let j=M.slice();for(let z=0;z<j.length;z++){let V=j[z],de=V.originalDelegate?V.originalDelegate:V.callback;this[f].call(this,u,de,V.options)}}if(A){let j=A.slice();for(let z=0;z<j.length;z++){let V=j[z],de=V.originalDelegate?V.originalDelegate:V.callback;this[f].call(this,u,de,V.options)}}}}else{let v=Object.keys(o);for(let P=0;P<v.length;P++){let p=v[P],M=ct.exec(p),A=M&&M[1];A&&A!=="removeListener"&&this[E].call(this,A)}this[E].call(this,"removeListener")}if(U)return this},he(m[s],R),he(m[f],b),Q&&he(m[E],Q),O&&he(m[g],O),!0}let q=[];for(let k=0;k<i.length;k++)q[k]=J(i[k],n);return q}function ut(e,r){if(!r){let f=[];for(let g in e){let E=ct.exec(g),y=E&&E[1];if(y&&(!r||y===r)){let N=e[g];if(N)for(let T=0;T<N.length;T++)f.push(N[T])}}return f}let i=te[r];i||(lt(r),i=te[r]);let n=e[i[ue]],s=e[i[le]];return n?s?n.concat(s):n.slice():s?s.slice():[]}function Nt(e,r){let i=e.Event;i&&i.prototype&&r.patchMethod(i.prototype,"stopImmediatePropagation",n=>function(s,f){s[at]=!0,n&&n.apply(s,f)})}function St(e,r){r.patchMethod(e,"queueMicrotask",i=>function(n,s){Zone.current.scheduleMicroTask("queueMicrotask",s[0])})}var Pe=$("zoneTask");function me(e,r,i,n){let s=null,f=null;r+=n,i+=n;let g={};function E(N){let T=N.data;T.args[0]=function(){return N.invoke.apply(this,arguments)};let w=s.apply(e,T.args);return et(w)?T.handleId=w:(T.handle=w,T.isRefreshable=Qe(w.refresh)),N}function y(N){let{handle:T,handleId:w}=N.data;return f.call(e,T??w)}s=fe(e,r,N=>function(T,w){if(Qe(w[0])){let x={isRefreshable:!1,isPeriodic:n==="Interval",delay:n==="Timeout"||n==="Interval"?w[1]||0:void 0,args:w},H=w[0];w[0]=function(){try{return H.apply(this,arguments)}finally{let{handle:Z,handleId:B,isPeriodic:X,isRefreshable:U}=x;!X&&!U&&(B?delete g[B]:Z&&(Z[Pe]=null))}};let G=Ue(r,w[0],x,E,y);if(!G)return G;let{handleId:K,handle:J,isRefreshable:q,isPeriodic:k}=G.data;if(K)g[K]=G;else if(J&&(J[Pe]=G,q&&!k)){let h=J.refresh;J.refresh=function(){let{zone:Z,state:B}=G;return B==="notScheduled"?(G._state="scheduled",Z._updateTaskCount(G,1)):B==="running"&&(G._state="scheduling"),h.call(this)}}return J??K??G}else return N.apply(e,w)}),f=fe(e,i,N=>function(T,w){let x=w[0],H;et(x)?(H=g[x],delete g[x]):(H=x?.[Pe],H?x[Pe]=null:H=x),H?.type?H.cancelFn&&H.zone.cancelTask(H):N.apply(e,w)})}function Ot(e,r){let{isBrowser:i,isMix:n}=r.getGlobalObjects();if(!i&&!n||!e.customElements||!("customElements"in e))return;let s=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"];r.patchCallbacks(r,e.customElements,"customElements","define",s)}function Ct(e,r){if(Zone[r.symbol("patchEventTarget")])return;let{eventNames:i,zoneSymbolEventNames:n,TRUE_STR:s,FALSE_STR:f,ZONE_SYMBOL_PREFIX:g}=r.getGlobalObjects();for(let y=0;y<i.length;y++){let N=i[y],T=N+f,w=N+s,x=g+T,H=g+w;n[N]={},n[N][f]=x,n[N][s]=H}let E=e.EventTarget;if(!(!E||!E.prototype))return r.patchEventTarget(e,r,[E&&E.prototype]),!0}function It(e,r){r.patchEventPrototype(e,r)}function ft(e,r,i){if(!i||i.length===0)return r;let n=i.filter(f=>f.target===e);if(!n||n.length===0)return r;let s=n[0].ignoreProperties;return r.filter(f=>s.indexOf(f)===-1)}function tt(e,r,i,n){if(!e)return;let s=ft(e,r,i);st(e,s,n)}function je(e){return Object.getOwnPropertyNames(e).filter(r=>r.startsWith("on")&&r.length>2).map(r=>r.substring(2))}function Dt(e,r){if(Oe&&!ot||Zone[e.symbol("patchEvents")])return;let i=r.__Zone_ignore_on_properties,n=[];if(Ve){let s=window;n=n.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);let f=bt()?[{target:s,ignoreProperties:["error"]}]:[];tt(s,je(s),i&&i.concat(f),Ze(s))}n=n.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let s=0;s<n.length;s++){let f=r[n[s]];f&&f.prototype&&tt(f.prototype,je(f.prototype),i)}}function Mt(e){e.__load_patch("legacy",r=>{let i=r[e.__symbol__("legacyPatch")];i&&i()}),e.__load_patch("timers",r=>{let i="set",n="clear";me(r,i,n,"Timeout"),me(r,i,n,"Interval"),me(r,i,n,"Immediate")}),e.__load_patch("requestAnimationFrame",r=>{me(r,"request","cancel","AnimationFrame"),me(r,"mozRequest","mozCancel","AnimationFrame"),me(r,"webkitRequest","webkitCancel","AnimationFrame")}),e.__load_patch("blocking",(r,i)=>{let n=["alert","prompt","confirm"];for(let s=0;s<n.length;s++){let f=n[s];fe(r,f,(g,E,y)=>function(N,T){return i.current.run(g,r,T,y)})}}),e.__load_patch("EventTarget",(r,i,n)=>{It(r,n),Ct(r,n);let s=r.XMLHttpRequestEventTarget;s&&s.prototype&&n.patchEventTarget(r,n,[s.prototype])}),e.__load_patch("MutationObserver",(r,i,n)=>{ve("MutationObserver"),ve("WebKitMutationObserver")}),e.__load_patch("IntersectionObserver",(r,i,n)=>{ve("IntersectionObserver")}),e.__load_patch("FileReader",(r,i,n)=>{ve("FileReader")}),e.__load_patch("on_property",(r,i,n)=>{Dt(n,r)}),e.__load_patch("customElements",(r,i,n)=>{Ot(r,n)}),e.__load_patch("XHR",(r,i)=>{N(r);let n=$("xhrTask"),s=$("xhrSync"),f=$("xhrListener"),g=$("xhrScheduled"),E=$("xhrURL"),y=$("xhrErrorBeforeScheduled");function N(T){let w=T.XMLHttpRequest;if(!w)return;let x=w.prototype;function H(R){return R[n]}let G=x[Me],K=x[Le];if(!G){let R=T.XMLHttpRequestEventTarget;if(R){let b=R.prototype;G=b[Me],K=b[Le]}}let J="readystatechange",q="scheduled";function k(R){let b=R.data,O=b.target;O[g]=!1,O[y]=!1;let Q=O[f];G||(G=O[Me],K=O[Le]),Q&&K.call(O,J,Q);let W=O[f]=()=>{if(O.readyState===O.DONE)if(!b.aborted&&O[g]&&R.state===q){let _=O[i.__symbol__("loadfalse")];if(O.status!==0&&_&&_.length>0){let c=R.invoke;R.invoke=function(){let t=O[i.__symbol__("loadfalse")];for(let d=0;d<t.length;d++)t[d]===R&&t.splice(d,1);!b.aborted&&R.state===q&&c.call(R)},_.push(R)}else R.invoke()}else!b.aborted&&O[g]===!1&&(O[y]=!0)};return G.call(O,J,W),O[n]||(O[n]=R),F.apply(O,b.args),O[g]=!0,R}function h(){}function Z(R){let b=R.data;return b.aborted=!0,D.apply(b.target,b.args)}let B=fe(x,"open",()=>function(R,b){return R[s]=b[2]==!1,R[E]=b[1],B.apply(R,b)}),X="XMLHttpRequest.send",U=$("fetchTaskAborting"),m=$("fetchTaskScheduling"),F=fe(x,"send",()=>function(R,b){if(i.current[m]===!0||R[s])return F.apply(R,b);{let O={target:R,url:R[E],isPeriodic:!1,args:b,aborted:!1},Q=Ue(X,h,O,k,Z);R&&R[y]===!0&&!O.aborted&&Q.state===q&&Q.invoke()}}),D=fe(x,"abort",()=>function(R,b){let O=H(R);if(O&&typeof O.type=="string"){if(O.cancelFn==null||O.data&&O.data.aborted)return;O.zone.cancelTask(O)}else if(i.current[U]===!0)return D.apply(R,b)})}}),e.__load_patch("geolocation",r=>{r.navigator&&r.navigator.geolocation&&yt(r.navigator.geolocation,["getCurrentPosition","watchPosition"])}),e.__load_patch("PromiseRejectionEvent",(r,i)=>{function n(s){return function(f){ut(r,s).forEach(E=>{let y=r.PromiseRejectionEvent;if(y){let N=new y(s,{promise:f.promise,reason:f.rejection});E.invoke(N)}})}}r.PromiseRejectionEvent&&(i[$("unhandledPromiseRejectionHandler")]=n("unhandledrejection"),i[$("rejectionHandledHandler")]=n("rejectionhandled"))}),e.__load_patch("queueMicrotask",(r,i,n)=>{St(r,n)})}function Lt(e){e.__load_patch("ZoneAwarePromise",(r,i,n)=>{let s=Object.getOwnPropertyDescriptor,f=Object.defineProperty;function g(l){if(l&&l.toString===Object.prototype.toString){let a=l.constructor&&l.constructor.name;return(a||"")+": "+JSON.stringify(l)}return l?l.toString():Object.prototype.toString.call(l)}let E=n.symbol,y=[],N=r[E("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]!==!1,T=E("Promise"),w=E("then"),x="__creationTrace__";n.onUnhandledError=l=>{if(n.showUncaughtError()){let a=l&&l.rejection;a?console.error("Unhandled Promise rejection:",a instanceof Error?a.message:a,"; Zone:",l.zone.name,"; Task:",l.task&&l.task.source,"; Value:",a,a instanceof Error?a.stack:void 0):console.error(l)}},n.microtaskDrainDone=()=>{for(;y.length;){let l=y.shift();try{l.zone.runGuarded(()=>{throw l.throwOriginal?l.rejection:l})}catch(a){G(a)}}};let H=E("unhandledPromiseRejectionHandler");function G(l){n.onUnhandledError(l);try{let a=i[H];typeof a=="function"&&a.call(this,l)}catch{}}function K(l){return l&&l.then}function J(l){return l}function q(l){return S.reject(l)}let k=E("state"),h=E("value"),Z=E("finally"),B=E("parentPromiseValue"),X=E("parentPromiseState"),U="Promise.then",m=null,F=!0,D=!1,R=0;function b(l,a){return o=>{try{L(l,a,o)}catch(u){L(l,!1,u)}}}let O=function(){let l=!1;return function(o){return function(){l||(l=!0,o.apply(null,arguments))}}},Q="Promise resolved with itself",W=E("currentTaskTrace");function L(l,a,o){let u=O();if(l===o)throw new TypeError(Q);if(l[k]===m){let v=null;try{(typeof o=="object"||typeof o=="function")&&(v=o&&o.then)}catch(P){return u(()=>{L(l,!1,P)})(),l}if(a!==D&&o instanceof S&&o.hasOwnProperty(k)&&o.hasOwnProperty(h)&&o[k]!==m)c(o),L(l,o[k],o[h]);else if(a!==D&&typeof v=="function")try{v.call(o,u(b(l,a)),u(b(l,!1)))}catch(P){u(()=>{L(l,!1,P)})()}else{l[k]=a;let P=l[h];if(l[h]=o,l[Z]===Z&&a===F&&(l[k]=l[X],l[h]=l[B]),a===D&&o instanceof Error){let p=i.currentTask&&i.currentTask.data&&i.currentTask.data[x];p&&f(o,W,{configurable:!0,enumerable:!1,writable:!0,value:p})}for(let p=0;p<P.length;)t(l,P[p++],P[p++],P[p++],P[p++]);if(P.length==0&&a==D){l[k]=R;let p=o;try{throw new Error("Uncaught (in promise): "+g(o)+(o&&o.stack?`
`+o.stack:""))}catch(M){p=M}N&&(p.throwOriginal=!0),p.rejection=o,p.promise=l,p.zone=i.current,p.task=i.currentTask,y.push(p),n.scheduleMicroTask()}}}return l}let _=E("rejectionHandledHandler");function c(l){if(l[k]===R){try{let a=i[_];a&&typeof a=="function"&&a.call(this,{rejection:l[h],promise:l})}catch{}l[k]=D;for(let a=0;a<y.length;a++)l===y[a].promise&&y.splice(a,1)}}function t(l,a,o,u,v){c(l);let P=l[k],p=P?typeof u=="function"?u:J:typeof v=="function"?v:q;a.scheduleMicroTask(U,()=>{try{let M=l[h],A=!!o&&Z===o[Z];A&&(o[B]=M,o[X]=P);let j=a.run(p,void 0,A&&p!==q&&p!==J?[]:[M]);L(o,!0,j)}catch(M){L(o,!1,M)}},o)}let d="function ZoneAwarePromise() { [native code] }",C=function(){},I=r.AggregateError;class S{static toString(){return d}static resolve(a){return a instanceof S?a:L(new this(null),F,a)}static reject(a){return L(new this(null),D,a)}static withResolvers(){let a={};return a.promise=new S((o,u)=>{a.resolve=o,a.reject=u}),a}static any(a){if(!a||typeof a[Symbol.iterator]!="function")return Promise.reject(new I([],"All promises were rejected"));let o=[],u=0;try{for(let p of a)u++,o.push(S.resolve(p))}catch{return Promise.reject(new I([],"All promises were rejected"))}if(u===0)return Promise.reject(new I([],"All promises were rejected"));let v=!1,P=[];return new S((p,M)=>{for(let A=0;A<o.length;A++)o[A].then(j=>{v||(v=!0,p(j))},j=>{P.push(j),u--,u===0&&(v=!0,M(new I(P,"All promises were rejected")))})})}static race(a){let o,u,v=new this((M,A)=>{o=M,u=A});function P(M){o(M)}function p(M){u(M)}for(let M of a)K(M)||(M=this.resolve(M)),M.then(P,p);return v}static all(a){return S.allWithCallback(a)}static allSettled(a){return(this&&this.prototype instanceof S?this:S).allWithCallback(a,{thenCallback:u=>({status:"fulfilled",value:u}),errorCallback:u=>({status:"rejected",reason:u})})}static allWithCallback(a,o){let u,v,P=new this((j,z)=>{u=j,v=z}),p=2,M=0,A=[];for(let j of a){K(j)||(j=this.resolve(j));let z=M;try{j.then(V=>{A[z]=o?o.thenCallback(V):V,p--,p===0&&u(A)},V=>{o?(A[z]=o.errorCallback(V),p--,p===0&&u(A)):v(V)})}catch(V){v(V)}p++,M++}return p-=2,p===0&&u(A),P}constructor(a){let o=this;if(!(o instanceof S))throw new Error("Must be an instanceof Promise.");o[k]=m,o[h]=[];try{let u=O();a&&a(u(b(o,F)),u(b(o,D)))}catch(u){L(o,!1,u)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return S}then(a,o){let u=this.constructor?.[Symbol.species];(!u||typeof u!="function")&&(u=this.constructor||S);let v=new u(C),P=i.current;return this[k]==m?this[h].push(P,v,a,o):t(this,P,v,a,o),v}catch(a){return this.then(null,a)}finally(a){let o=this.constructor?.[Symbol.species];(!o||typeof o!="function")&&(o=S);let u=new o(C);u[Z]=Z;let v=i.current;return this[k]==m?this[h].push(v,u,a,a):t(this,v,u,a,a),u}}S.resolve=S.resolve,S.reject=S.reject,S.race=S.race,S.all=S.all;let _e=r[T]=r.Promise;r.Promise=S;let ae=E("thenPatched");function ne(l){let a=l.prototype,o=s(a,"then");if(o&&(o.writable===!1||!o.configurable))return;let u=a.then;a[w]=u,l.prototype.then=function(v,P){return new S((M,A)=>{u.call(this,M,A)}).then(v,P)},l[ae]=!0}n.patchThen=ne;function Te(l){return function(a,o){let u=l.apply(a,o);if(u instanceof S)return u;let v=u.constructor;return v[ae]||ne(v),u}}return _e&&(ne(_e),fe(r,"fetch",l=>Te(l))),Promise[i.__symbol__("uncaughtPromiseErrors")]=y,S})}function At(e){e.__load_patch("toString",r=>{let i=Function.prototype.toString,n=$("OriginalDelegate"),s=$("Promise"),f=$("Error"),g=function(){if(typeof this=="function"){let T=this[n];if(T)return typeof T=="function"?i.call(T):Object.prototype.toString.call(T);if(this===Promise){let w=r[s];if(w)return i.call(w)}if(this===Error){let w=r[f];if(w)return i.call(w)}}return i.call(this)};g[n]=i,Function.prototype.toString=g;let E=Object.prototype.toString,y="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?y:E.call(this)}})}function jt(e,r,i,n,s){let f=Zone.__symbol__(n);if(r[f])return;let g=r[f]=r[n];r[n]=function(E,y,N){return y&&y.prototype&&s.forEach(function(T){let w=`${i}.${n}::`+T,x=y.prototype;try{if(x.hasOwnProperty(T)){let H=e.ObjectGetOwnPropertyDescriptor(x,T);H&&H.value?(H.value=e.wrapWithCurrentZone(H.value,w),e._redefineProperty(y.prototype,T,H)):x[T]&&(x[T]=e.wrapWithCurrentZone(x[T],w))}else x[T]&&(x[T]=e.wrapWithCurrentZone(x[T],w))}catch{}}),g.call(r,E,y,N)},e.attachOriginToPatched(r[n],g)}function xt(e){e.__load_patch("util",(r,i,n)=>{let s=je(r);n.patchOnProperties=st,n.patchMethod=fe,n.bindArguments=ze,n.patchMacroTask=vt;let f=i.__symbol__("BLACK_LISTED_EVENTS"),g=i.__symbol__("UNPATCHED_EVENTS");r[g]&&(r[f]=r[g]),r[f]&&(i[f]=i[g]=r[f]),n.patchEventPrototype=Nt,n.patchEventTarget=Pt,n.isIEOrEdge=wt,n.ObjectDefineProperty=xe,n.ObjectGetOwnPropertyDescriptor=be,n.ObjectCreate=Et,n.ArraySlice=mt,n.patchClass=ve,n.wrapWithCurrentZone=Be,n.filterProperties=ft,n.attachOriginToPatched=he,n._redefineProperty=Object.defineProperty,n.patchCallbacks=jt,n.getGlobalObjects=()=>({globalSources:it,zoneSymbolEventNames:te,eventNames:s,isBrowser:Ve,isMix:ot,isNode:Oe,TRUE_STR:le,FALSE_STR:ue,ZONE_SYMBOL_PREFIX:we,ADD_EVENT_LISTENER_STR:$e,REMOVE_EVENT_LISTENER_STR:He})})}function Zt(e){Lt(e),At(e),xt(e)}var ht=gt();Zt(ht);Mt(ht);var $t=":";function Ht(e,r){for(let i=1,n=1;i<e.length;i++,n++)if(r[n]==="\\")n++;else if(e[i]===$t)return i;throw new Error(`Unterminated $localize metadata block in "${r}".`)}var Ce=function(e,...r){if(Ce.translate){let n=Ce.translate(e,r);e=n[0],r=n[1]}let i=dt(e[0],e.raw[0]);for(let n=1;n<e.length;n++)i+=r[n-1]+dt(e[n],e.raw[n]);return i},Bt=":";function dt(e,r){return r.charAt(0)===Bt?e.substring(Ht(e,r)+1):e}globalThis.$localize=Ce;
