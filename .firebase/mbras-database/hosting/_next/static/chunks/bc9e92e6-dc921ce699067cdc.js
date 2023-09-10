"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[358],{9978:function(e,t,r){r.d(t,{IO:function(){return im},PL:function(){return iN},ad:function(){return n3},ar:function(){return ip},hJ:function(){return n1}});var n,i,s=r(3626),a=r(5538),o=r(6914),l=r(8745),u=r(613);r(2601);let h="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d="10.3.1",f=new o.Yd("@firebase/firestore");function m(){return f.logLevel}function g(e,...t){if(f.logLevel<=o.in.DEBUG){let r=t.map(w);f.debug(`Firestore (${d}): ${e}`,...r)}}function p(e,...t){if(f.logLevel<=o.in.ERROR){let r=t.map(w);f.error(`Firestore (${d}): ${e}`,...r)}}function y(e,...t){if(f.logLevel<=o.in.WARN){let r=t.map(w);f.warn(`Firestore (${d}): ${e}`,...r)}}function w(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e="Unexpected state"){let t=`FIRESTORE (${d}) INTERNAL ASSERTION FAILED: `+e;throw p(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends l.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class C{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(c.UNAUTHENTICATED))}shutdown(){}}class S{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class A{constructor(e){this.t=e,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i,n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),i=new T;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new T,e.enqueueRetryable(()=>n(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},a=e=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new T)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||v(),new I(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||v(),new c(e)}}class N{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=c.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class k{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new N(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class b{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class D{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let r=e=>{null!=e.error&&g("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.R;return this.R=e.token,g("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};let n=e=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?n(e):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||v(),this.R=e.token,new b(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static V(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let t=0;t<e;t++)r[t]=Math.floor(256*Math.random());return r}(40);for(let i=0;i<n.length;++i)r.length<20&&n[i]<t&&(r+=e.charAt(n[i]%e.length))}return r}}function x(e,t){return e<t?-1:e>t?1:0}function L(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new E(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new E(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return V.fromMillis(Date.now())}static fromDate(e){return V.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new V(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?x(this.nanoseconds,e.nanoseconds):x(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.timestamp=e}static fromTimestamp(e){return new P(e)}static min(){return new P(new V(0,0))}static max(){return new P(new V(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,t,r){void 0===t?t=0:t>e.length&&v(),void 0===r?r=e.length-t:r>e.length-t&&v(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===F.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof F?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let r=e.get(n),i=t.get(n);if(r<i)return -1;if(r>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class O extends F{construct(e,t,r){return new O(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new E(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new O(t)}static emptyPath(){return new O([])}}let M=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class U extends F{construct(e,t,r){return new U(e,t,r)}static isValidIdentifier(e){return M.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),U.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new U(["__name__"])}static fromServerFormat(e){let t=[],r="",n=0,i=()=>{if(0===r.length)throw new E(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},s=!1;for(;n<e.length;){let t=e[n];if("\\"===t){if(n+1===e.length)throw new E(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new E(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?s=!s:"."!==t||s?r+=t:i(),n++}if(i(),s)throw new E(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new U(t)}static emptyPath(){return new U([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(O.fromString(e))}static fromName(e){return new q(O.fromString(e).popFirst(5))}static empty(){return new q(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===O.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return O.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new O(e.slice()))}}class B{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new B(P.min(),q.empty(),-1)}static max(){return new B(P.max(),q.empty(),-1)}}class ${constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e){if(e.code!==_.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;g("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof K?t:K.resolve(t)}catch(e){return K.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):K.reject(t)}static resolve(e){return new K((t,r)=>{t(e)})}static reject(e){return new K((t,r)=>{r(e)})}static waitFor(e){return new K((t,r)=>{let n=0,i=0,s=!1;e.forEach(e=>{++n,e.next(()=>{++i,s&&i===n&&t()},e=>r(e))}),s=!0,i===n&&t()})}static or(e){let t=K.resolve(!1);for(let r of e)t=t.next(e=>e?K.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}static mapArray(e,t){return new K((r,n)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&r(s)},e=>n(e))}})}static doWhile(e,t){return new K((r,n)=>{let i=()=>{!0===e()?t().next(()=>{i()},n):r()};i()})}}function G(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this._e&&this._e(e),e}}function j(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function W(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}function Y(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}Q.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){this.comparator=e,this.root=t||Z.EMPTY}insert(e,t){return new X(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Z.BLACK,null,null))}remove(e){return new X(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Z.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new J(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new J(this.root,e,this.comparator,!1)}getReverseIterator(){return new J(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new J(this.root,e,this.comparator,!0)}}class J{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&n&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Z{constructor(e,t,r,n,i){this.key=e,this.value=t,this.color=null!=r?r:Z.RED,this.left=null!=n?n:Z.EMPTY,this.right=null!=i?i:Z.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,i){return new Z(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,i=r(e,n.key);return(n=i<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===i?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return Z.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return Z.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,Z.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,Z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw v();let e=this.left.check();if(e!==this.right.check())throw v();return e+(this.isRed()?0:1)}}Z.EMPTY=null,Z.RED=!0,Z.BLACK=!1,Z.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(e,t,r,n,i){return this}insert(e,t,r){return new Z(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.comparator=e,this.data=new X(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new et(this.data.getIterator())}getIteratorFrom(e){return new et(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof ee)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new ee(this.comparator);return t.data=e,t}}class et{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.fields=e,e.sort(U.comparator)}static empty(){return new er([])}unionWith(e){let t=new ee(U.comparator);for(let e of this.fields)t=t.add(e);for(let r of e)t=t.add(r);return new er(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return L(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new en("Invalid base64 string: "+e):e}}(e);return new ei(t)}static fromUint8Array(e){let t=function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e);return new ei(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return x(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ei.EMPTY_BYTE_STRING=new ei("");let es=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ea(e){if(e||v(),"string"==typeof e){let t=0,r=es.exec(e);if(r||v(),r[1]){let e=r[1];t=Number(e=(e+"000000000").substr(0,9))}let n=new Date(e);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:eo(e.seconds),nanos:eo(e.nanos)}}function eo(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function el(e){return"string"==typeof e?ei.fromBase64String(e):ei.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(e){var t,r;return"server_timestamp"===(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===r?void 0:r.stringValue)}function eh(e){let t=e.mapValue.fields.__previous_value__;return eu(t)?eh(t):t}function ec(e){let t=ea(e.mapValue.fields.__local_write_time__.timestampValue);return new V(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,t,r,n,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class ef{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ef("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ef&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let em={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function eg(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?eu(e)?4:ek(e)?9007199254740991:10:v()}function ep(e,t){if(e===t)return!0;let r=eg(e);if(r!==eg(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ec(e).isEqual(ec(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=ea(e.timestampValue),n=ea(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return el(e.bytesValue).isEqual(el(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return eo(e.geoPointValue.latitude)===eo(t.geoPointValue.latitude)&&eo(e.geoPointValue.longitude)===eo(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return eo(e.integerValue)===eo(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=eo(e.doubleValue),n=eo(t.doubleValue);return r===n?j(r)===j(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9:return L(e.arrayValue.values||[],t.arrayValue.values||[],ep);case 10:return function(e,t){let r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(H(r)!==H(n))return!1;for(let e in r)if(r.hasOwnProperty(e)&&(void 0===n[e]||!ep(r[e],n[e])))return!1;return!0}(e,t);default:return v()}}function ey(e,t){return void 0!==(e.values||[]).find(e=>ep(e,t))}function ew(e,t){if(e===t)return 0;let r=eg(e),n=eg(t);if(r!==n)return x(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return x(e.booleanValue,t.booleanValue);case 2:return function(e,t){let r=eo(e.integerValue||e.doubleValue),n=eo(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3:return ev(e.timestampValue,t.timestampValue);case 4:return ev(ec(e),ec(t));case 5:return x(e.stringValue,t.stringValue);case 6:return function(e,t){let r=el(e),n=el(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let r=e.split("/"),n=t.split("/");for(let e=0;e<r.length&&e<n.length;e++){let t=x(r[e],n[e]);if(0!==t)return t}return x(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let r=x(eo(e.latitude),eo(t.latitude));return 0!==r?r:x(eo(e.longitude),eo(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let r=e.values||[],n=t.values||[];for(let e=0;e<r.length&&e<n.length;++e){let t=ew(r[e],n[e]);if(t)return t}return x(r.length,n.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===em.mapValue&&t===em.mapValue)return 0;if(e===em.mapValue)return 1;if(t===em.mapValue)return -1;let r=e.fields||{},n=Object.keys(r),i=t.fields||{},s=Object.keys(i);n.sort(),s.sort();for(let e=0;e<n.length&&e<s.length;++e){let t=x(n[e],s[e]);if(0!==t)return t;let a=ew(r[n[e]],i[s[e]]);if(0!==a)return a}return x(n.length,s.length)}(e.mapValue,t.mapValue);default:throw v()}}function ev(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return x(e,t);let r=ea(e),n=ea(t),i=x(r.seconds,n.seconds);return 0!==i?i:x(r.nanos,n.nanos)}function e_(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=ea(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?el(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,q.fromName(t).toString()):"geoPointValue"in e?(r=e.geoPointValue,`geo(${r.latitude},${r.longitude})`):"arrayValue"in e?function(e){let t="[",r=!0;for(let n of e.values||[])r?r=!1:t+=",",t+=e_(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",n=!0;for(let i of t)n?n=!1:r+=",",r+=`${i}:${e_(e.fields[i])}`;return r+"}"}(e.mapValue):v()}function eE(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function eT(e){return!!e&&"integerValue"in e}function eI(e){return!!e&&"arrayValue"in e}function eC(e){return!!e&&"nullValue"in e}function eS(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function eA(e){return!!e&&"mapValue"in e}function eN(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return W(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=eN(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=eN(e.arrayValue.values[r]);return t}return Object.assign({},e)}function ek(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.value=e}static empty(){return new eb({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!eA(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eN(t)}setAll(e){let t=U.emptyPath(),r={},n=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,r,n),r={},n=[],t=i.popLast()}e?r[i.lastSegment()]=eN(e):n.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,r,n)}delete(e){let t=this.field(e.popLast());eA(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ep(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];eA(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){for(let n of(W(t,(t,r)=>e[t]=r),r))delete e[n]}clone(){return new eb(eN(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e,t,r,n,i,s,a){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new eD(e,0,P.min(),P.min(),P.min(),eb.empty(),0)}static newFoundDocument(e,t,r,n){return new eD(e,1,t,P.min(),r,n,0)}static newNoDocument(e,t){return new eD(e,2,t,P.min(),P.min(),eb.empty(),0)}static newUnknownDocument(e,t){return new eD(e,3,t,P.min(),P.min(),eb.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(P.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=eb.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=eb.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof eD&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new eD(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,t){this.position=e,this.inclusive=t}}function ex(e,t,r){let n=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(n=s.field.isKeyField()?q.comparator(q.fromName(a.referenceValue),r.key):ew(a,r.data.field(s.field)),"desc"===s.dir&&(n*=-1),0!==n)break}return n}function eL(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!ep(e.position[r],t.position[r]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{}class eF extends eP{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,r):new eq(e,t,r):"array-contains"===t?new eK(e,r):"in"===t?new eG(e,r):"not-in"===t?new eQ(e,r):"array-contains-any"===t?new ej(e,r):new eF(e,t,r)}static createKeyFieldInFilter(e,t,r){return"in"===t?new eB(e,r):new e$(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(ew(t,this.value)):null!==t&&eg(this.value)===eg(t)&&this.matchesComparison(ew(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return v()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class eO extends eP{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new eO(e,t)}matches(e){return eM(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.le(e=>e.isInequality());return null!==e?e.field:null}le(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function eM(e){return"and"===e.op}function eU(e){for(let t of e.filters)if(t instanceof eO)return!1;return!0}class eq extends eF{constructor(e,t,r){super(e,t,r),this.key=q.fromName(r.referenceValue)}matches(e){let t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class eB extends eF{constructor(e,t){super(e,"in",t),this.keys=ez("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class e$ extends eF{constructor(e,t){super(e,"not-in",t),this.keys=ez("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ez(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map(e=>q.fromName(e.referenceValue))}class eK extends eF{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return eI(t)&&ey(t.arrayValue,this.value)}}class eG extends eF{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&ey(this.value.arrayValue,t)}}class eQ extends eF{constructor(e,t){super(e,"not-in",t)}matches(e){if(ey(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!ey(this.value.arrayValue,t)}}class ej extends eF{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!eI(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ey(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eH{constructor(e,t=null,r=[],n=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=i,this.startAt=s,this.endAt=a,this.he=null}}function eW(e,t=null,r=[],n=[],i=null,s=null,a=null){return new eH(e,t,r,n,i,s,a)}function eY(e){if(null===e.he){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof eF)return t.field.canonicalString()+t.op.toString()+e_(t.value);if(eU(t)&&eM(t))return t.filters.map(t=>e(t)).join(",");{let r=t.filters.map(t=>e(t)).join(",");return`${t.op}(${r})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>e_(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>e_(e)).join(",")),e.he=t}return e.he}function eX(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var r,n;if(r=e.orderBy[i],n=t.orderBy[i],!(r.dir===n.dir&&r.field.isEqual(n.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(!function e(t,r){return t instanceof eF?r instanceof eF&&t.op===r.op&&t.field.isEqual(r.field)&&ep(t.value,r.value):t instanceof eO?r instanceof eO&&t.op===r.op&&t.filters.length===r.filters.length&&t.filters.reduce((t,n,i)=>t&&e(n,r.filters[i]),!0):void v()}(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eL(e.startAt,t.startAt)&&eL(e.endAt,t.endAt)}function eJ(e){return q.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eZ{constructor(e,t=null,r=[],n=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function e0(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function e1(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function e2(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}function e4(e){return null!==e.collectionGroup}function e3(e){if(null===e.Pe){e.Pe=[];let t=e2(e),r=e1(e);if(null!==t&&null===r)t.isKeyField()||e.Pe.push(new eV(t)),e.Pe.push(new eV(U.keyField(),"asc"));else{let t=!1;for(let r of e.explicitOrderBy)e.Pe.push(r),r.field.isKeyField()&&(t=!0);if(!t){let t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new eV(U.keyField(),t))}}}return e.Pe}function e9(e){return e.Ie||(e.Ie=function(e,t){if("F"===e.limitType)return eW(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new eV(e.field,t)});let r=e.endAt?new eR(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new eR(e.startAt.position,e.startAt.inclusive):null;return eW(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}}(e,e3(e))),e.Ie}function e8(e,t){t.getFirstInequalityField(),e2(e);let r=e.filters.concat([t]);return new eZ(e.path,e.collectionGroup,e.explicitOrderBy.slice(),r,e.limit,e.limitType,e.startAt,e.endAt)}function e6(e,t,r){return new eZ(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function e5(e,t){return eX(e9(e),e9(t))&&e.limitType===t.limitType}function e7(e){return`${eY(e9(e))}|lt:${e.limitType}`}function te(e){var t;let r;return`Query(target=${r=(t=e9(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof eF?`${t.field.canonicalString()} ${t.op} ${e_(t.value)}`:t instanceof eO?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(r+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>e_(e)).join(",")),t.endAt&&(r+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>e_(e)).join(",")),`Target(${r})`}; limitType=${e.limitType})`}function tt(e,t){return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):q.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(let r of e3(e))if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,r){let n=ex(e,t,r);return e.inclusive?n<=0:n<0}(e.startAt,e3(e),t))&&(!e.endAt||!!function(e,t,r){let n=ex(e,t,r);return e.inclusive?n>=0:n>0}(e.endAt,e3(e),t))}function tr(e){return(t,r)=>{let n=!1;for(let i of e3(e)){let e=function(e,t,r){let n=e.field.isKeyField()?q.comparator(t.key,r.key):function(e,t,r){let n=t.data.field(e),i=r.data.field(e);return null!==n&&null!==i?ew(n,i):v()}(e.field,t,r);switch(e.dir){case"asc":return n;case"desc":return -1*n;default:return v()}}(i,t,r);if(0!==e)return e;n=n||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[t,n]of r)if(this.equalsFn(t,e))return n}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),n=this.inner[r];if(void 0===n)return this.inner[r]=[[e,t]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){W(this.inner,(t,r)=>{for(let[t,n]of r)e(t,n)})}isEmpty(){return Y(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ti=new X(q.comparator),ts=new X(q.comparator);function ta(...e){let t=ts;for(let r of e)t=t.insert(r.key,r);return t}function to(){return new tn(e=>e.toString(),(e,t)=>e.isEqual(t))}new X(q.comparator);let tl=new ee(q.comparator);function tu(...e){let t=tl;for(let r of e)t=t.add(r);return t}let th=new ee(x);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:j(t)?"-0":t}}function td(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this._=void 0}}class tm extends tf{}class tg extends tf{constructor(e){super(),this.elements=e}}function tp(e,t){let r=tE(t);for(let t of e.elements)r.some(e=>ep(e,t))||r.push(t);return{arrayValue:{values:r}}}class ty extends tf{constructor(e){super(),this.elements=e}}function tw(e,t){let r=tE(t);for(let t of e.elements)r=r.filter(e=>!ep(e,t));return{arrayValue:{values:r}}}class tv extends tf{constructor(e,t){super(),this.serializer=e,this.Te=t}}function t_(e){return eo(e.integerValue||e.doubleValue)}function tE(e){return eI(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class tT{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tT}static exists(e){return new tT(void 0,e)}static updateTime(e){return new tT(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tI(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class tC{}function tS(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new tL(e.key,tT.none()):new tk(e.key,e.data,tT.none());{let r=e.data,n=eb.empty(),i=new ee(U.comparator);for(let e of t.fields)if(!i.has(e)){let t=r.field(e);null===t&&e.length>1&&(e=e.popLast(),t=r.field(e)),null===t?n.delete(e):n.set(e,t),i=i.add(e)}return new tb(e.key,n,new er(i.toArray()),tT.none())}}function tA(e,t,r,n){return e instanceof tk?function(e,t,r,n){if(!tI(e.precondition,t))return r;let i=e.value.clone(),s=tx(e.fieldTransforms,n,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,r,n):e instanceof tb?function(e,t,r,n){if(!tI(e.precondition,t))return r;let i=tx(e.fieldTransforms,n,t),s=t.data;return(s.setAll(tD(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===r)?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,r,n):tI(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}function tN(e,t){var r,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===r&&void 0===n||!(!r||!n)&&L(r,n,(e,t)=>{var r,n;return e.field.isEqual(t.field)&&(r=e.transform,n=t.transform,r instanceof tg&&n instanceof tg||r instanceof ty&&n instanceof ty?L(r.elements,n.elements,ep):r instanceof tv&&n instanceof tv?ep(r.Te,n.Te):r instanceof tm&&n instanceof tm)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class tk extends tC{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class tb extends tC{constructor(e,t,r,n,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function tD(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let n=e.data.field(r);t.set(r,n)}}),t}function tR(e,t,r){var n;let i=new Map;e.length===r.length||v();for(let s=0;s<r.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(n=r[s],o instanceof tg?tp(o,l):o instanceof ty?tw(o,l):n))}return i}function tx(e,t,r){let n=new Map;for(let i of e){let e=i.transform,s=r.data.field(i.field);n.set(i.field,e instanceof tm?function(e,t){let r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&eu(t)&&(t=eh(t)),t&&(r.fields.__previous_value__=t),{mapValue:r}}(t,s):e instanceof tg?tp(e,s):e instanceof ty?tw(e,s):function(e,t){var r,n;let i=(r=e,n=t,r instanceof tv?eT(n)||n&&"doubleValue"in n?n:{integerValue:0}:null),s=t_(i)+t_(e.Te);return eT(i)&&eT(e.Te)?td(s):tc(e.serializer,s)}(e,s))}return n}class tL extends tC{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var n;n=r[t],i instanceof tk?function(e,t,r){let n=e.value.clone(),i=tR(e.fieldTransforms,t,r.transformResults);n.setAll(i),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(i,e,n):i instanceof tb?function(e,t,r){if(!tI(e.precondition,t))return void t.convertToUnknownDocument(r.version);let n=tR(e.fieldTransforms,t,r.transformResults),i=t.data;i.setAll(tD(e)),i.setAll(n),t.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(i,e,n):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=tA(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=tA(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=to();return this.mutations.forEach(n=>{let i=e.get(n.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields);a=t.has(n.key)?null:a;let o=tS(s,a);null!==o&&r.set(n.key,o),s.isValidDocument()||s.convertToNoDocument(P.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tu())}isEqual(e){return this.batchId===e.batchId&&L(this.mutations,e.mutations,(e,t)=>tN(e,t))&&L(this.baseMutations,e.baseMutations,(e,t)=>tN(e,t))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF{constructor(e,t){this.count=e,this.unchangedNames=t}}function tO(e){if(void 0===e)return p("GRPC error has no .code"),_.UNKNOWN;switch(e){case n.OK:return _.OK;case n.CANCELLED:return _.CANCELLED;case n.UNKNOWN:return _.UNKNOWN;case n.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case n.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case n.INTERNAL:return _.INTERNAL;case n.UNAVAILABLE:return _.UNAVAILABLE;case n.UNAUTHENTICATED:return _.UNAUTHENTICATED;case n.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case n.NOT_FOUND:return _.NOT_FOUND;case n.ALREADY_EXISTS:return _.ALREADY_EXISTS;case n.PERMISSION_DENIED:return _.PERMISSION_DENIED;case n.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case n.ABORTED:return _.ABORTED;case n.OUT_OF_RANGE:return _.OUT_OF_RANGE;case n.UNIMPLEMENTED:return _.UNIMPLEMENTED;case n.DATA_LOSS:return _.DATA_LOSS;default:return v()}}(i=n||(n={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tM=new u.z8([4294967295,4294967295],0);function tU(e){let t=(new TextEncoder).encode(e),r=new u.V8;return r.update(t),new Uint8Array(r.digest())}function tq(e){let t=new DataView(e.buffer),r=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new u.z8([r,n],0),new u.z8([i,s],0)]}class tB{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new t$(`Invalid padding: ${t}`);if(r<0||e.length>0&&0===this.hashCount)throw new t$(`Invalid hash count: ${r}`);if(0===e.length&&0!==t)throw new t$(`Invalid padding when bitmap length is 0: ${t}`);this.Ae=8*e.length-t,this.Re=u.z8.fromNumber(this.Ae)}Ve(e,t,r){let n=e.add(t.multiply(u.z8.fromNumber(r)));return 1===n.compare(tM)&&(n=new u.z8([n.getBits(0),n.getBits(1)],0)),n.modulo(this.Re).toNumber()}me(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ae)return!1;let t=tU(e),[r,n]=tq(t);for(let e=0;e<this.hashCount;e++){let t=this.Ve(r,n,e);if(!this.me(t))return!1}return!0}static create(e,t,r){let n=new Uint8Array(Math.ceil(e/8)),i=new tB(n,e%8==0?0:8-e%8,t);return r.forEach(e=>i.insert(e)),i}insert(e){if(0===this.Ae)return;let t=tU(e),[r,n]=tq(t);for(let e=0;e<this.hashCount;e++){let t=this.Ve(r,n,e);this.fe(t)}}fe(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class t$ extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tz{constructor(e,t,r,n,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let n=new Map;return n.set(e,tK.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new tz(P.min(),n,new X(x),ti,tu())}}class tK{constructor(e,t,r,n,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new tK(r,t,tu(),tu(),tu())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tG{constructor(e,t,r,n){this.ge=e,this.removedTargetIds=t,this.key=r,this.pe=n}}class tQ{constructor(e,t){this.targetId=e,this.ye=t}}class tj{constructor(e,t,r=ei.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class tH{constructor(){this.we=0,this.Se=tX(),this.be=ei.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return 0!==this.we}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=tu(),t=tu(),r=tu();return this.Se.forEach((n,i)=>{switch(i){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:v()}}),new tK(this.be,this.De,e,t,r)}Oe(){this.Ce=!1,this.Se=tX()}Ne(e,t){this.Ce=!0,this.Se=this.Se.insert(e,t)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class tW{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=ti,this.Ue=tY(),this.We=new X(x)}Ge(e){for(let t of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(t,e.pe):this.je(t,e.key,e.pe);for(let t of e.removedTargetIds)this.je(t,e.key,e.pe)}He(e){this.forEachTarget(e,t=>{let r=this.Je(t);switch(e.state){case 0:this.Ye(t)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(t);break;case 3:this.Ye(t)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(t)&&(this.Ze(t),r.Me(e.resumeToken));break;default:v()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ke.forEach((e,r)=>{this.Ye(r)&&t(r)})}Xe(e){let t=e.targetId,r=e.ye.count,n=this.et(t);if(n){let i=n.target;if(eJ(i)){if(0===r){let e=new q(i.path);this.je(t,e,eD.newNoDocument(e,P.min()))}else 1===r||v()}else{let n=this.tt(t);if(n!==r){let r=this.nt(e),i=r?this.rt(r,e,n):1;0!==i&&(this.Ze(t),this.We=this.We.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}nt(e){let t,r;let n=e.ye.unchangedNames;if(!n||!n.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=n;try{t=el(i).toUint8Array()}catch(e){if(e instanceof en)return y("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{r=new tB(t,s,a)}catch(e){return y(e instanceof t$?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===r.Ae?null:r}rt(e,t,r){return t.ye.count===r-this.ot(e,t.targetId)?0:2}ot(e,t){let r=this.Qe.getRemoteKeysForTarget(t),n=0;return r.forEach(r=>{let i=this.Qe.st(),s=`projects/${i.projectId}/databases/${i.database}/documents/${r.path.canonicalString()}`;e.mightContain(s)||(this.je(t,r,null),n++)}),n}_t(e){let t=new Map;this.Ke.forEach((r,n)=>{let i=this.et(n);if(i){if(r.current&&eJ(i.target)){let t=new q(i.target.path);null!==this.$e.get(t)||this.ut(n,t)||this.je(n,t,eD.newNoDocument(t,e))}r.Fe&&(t.set(n,r.xe()),r.Oe())}});let r=tu();this.Ue.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this.et(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(n=!1,!1)}),n&&(r=r.add(e))}),this.$e.forEach((t,r)=>r.setReadTime(e));let n=new tz(e,t,this.We,this.$e,r);return this.$e=ti,this.Ue=tY(),this.We=new X(x),n}ze(e,t){if(!this.Ye(e))return;let r=this.ut(e,t.key)?2:0;this.Je(e).Ne(t.key,r),this.$e=this.$e.insert(t.key,t),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}je(e,t,r){if(!this.Ye(e))return;let n=this.Je(e);this.ut(e,t)?n.Ne(t,1):n.Be(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),r&&(this.$e=this.$e.insert(t,r))}removeTarget(e){this.Ke.delete(e)}tt(e){let t=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let t=this.Ke.get(e);return t||(t=new tH,this.Ke.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new ee(x),this.Ue=this.Ue.insert(e,t)),t}Ye(e){let t=null!==this.et(e);return t||g("WatchChangeAggregator","Detected inactive target",e),t}et(e){let t=this.Ke.get(e);return t&&t.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new tH),this.Qe.getRemoteKeysForTarget(e).forEach(t=>{this.je(e,t,null)})}ut(e,t){return this.Qe.getRemoteKeysForTarget(e).has(t)}}function tY(){return new X(q.comparator)}function tX(){return new X(q.comparator)}let tJ={asc:"ASCENDING",desc:"DESCENDING"},tZ={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},t0={and:"AND",or:"OR"};class t1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function t2(e,t){return e.useProto3Json||null==t?t:{value:t}}function t4(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function t3(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function t9(e){return e||v(),P.fromTimestamp(function(e){let t=ea(e);return new V(t.seconds,t.nanos)}(e))}function t8(e,t){return new O(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function t6(e){let t=O.fromString(e);return ri(t)||v(),t}function t5(e,t){let r=t6(t);if(r.get(1)!==e.databaseId.projectId)throw new E(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new E(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new q(rt(r))}function t7(e,t){return t8(e.databaseId,t)}function re(e){return new O(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function rt(e){return e.length>4&&"documents"===e.get(4)||v(),e.popFirst(5)}function rr(e){return{fieldPath:e.canonicalString()}}function rn(e){return U.fromServerFormat(e.fieldPath)}function ri(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t,r,n,i=P.min(),s=P.min(),a=ei.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new rs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new rs(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e){this.ht=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){}dt(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.At(t,5);else if("booleanValue"in e)this.At(t,10),t.Rt(e.booleanValue?1:0);else if("integerValue"in e)this.At(t,15),t.Rt(eo(e.integerValue));else if("doubleValue"in e){let r=eo(e.doubleValue);isNaN(r)?this.At(t,13):(this.At(t,15),j(r)?t.Rt(0):t.Rt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.At(t,20),"string"==typeof r?t.Vt(r):(t.Vt(`${r.seconds||""}`),t.Rt(r.nanos||0))}else if("stringValue"in e)this.ft(e.stringValue,t),this.gt(t);else if("bytesValue"in e)this.At(t,30),t.yt(el(e.bytesValue)),this.gt(t);else if("referenceValue"in e)this.wt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.At(t,45),t.Rt(r.latitude||0),t.Rt(r.longitude||0)}else"mapValue"in e?ek(e)?this.At(t,Number.MAX_SAFE_INTEGER):(this.St(e.mapValue,t),this.gt(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.gt(t)):v()}ft(e,t){this.At(t,25),this.Dt(e,t)}Dt(e,t){t.Vt(e)}St(e,t){let r=e.fields||{};for(let e of(this.At(t,55),Object.keys(r)))this.ft(e,t),this.Tt(r[e],t)}bt(e,t){let r=e.values||[];for(let e of(this.At(t,50),r))this.Tt(e,t)}wt(e,t){this.At(t,37),q.fromName(e).path.forEach(e=>{this.At(t,60),this.Dt(e,t)})}At(e,t){e.Rt(t)}gt(e){e.Rt(2)}}ro.Ct=new ro;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(){this.an=new ru}addToCollectionParentIndex(e,t){return this.an.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.an.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(B.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(B.min())}updateCollectionGroup(e,t,r){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class ru{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new ee(O.comparator),i=!n.has(r);return this.index[t]=n.add(r),i}has(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new ee(O.comparator)).toArray()}}new Uint8Array(0);class rh{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new rh(e,rh.DEFAULT_COLLECTION_PERCENTILE,rh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rh.DEFAULT_COLLECTION_PERCENTILE=10,rh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rh.DEFAULT=new rh(41943040,rh.DEFAULT_COLLECTION_PERCENTILE,rh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rh.DISABLED=new rh(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new rc(0)}static Ln(){return new rc(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(){this.changes=new tn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,eD.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?K.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==r&&tA(r.mutation,e,er.empty(),V.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,tu()).next(()=>t))}getLocalViewOfDocuments(e,t,r=tu()){let n=to();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(e=>{let t=ta();return e.forEach((e,r)=>{t=t.insert(e,r.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let r=to();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,tu()))}populateOverlays(e,t,r){let n=[];return r.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,r)=>{t.set(e,r)})})}computeViews(e,t,r,n){let i=ti,s=to(),a=to();return t.forEach((e,t)=>{let a=r.get(t.key);n.has(t.key)&&(void 0===a||a.mutation instanceof tb)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),tA(a.mutation,t,a.mutation.getFieldMask(),V.now())):s.set(t.key,er.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var r;return a.set(e,new rf(t,null!==(r=s.get(e))&&void 0!==r?r:null))}),a))}recalculateAndSaveOverlays(e,t){let r=to(),n=new X((e,t)=>e-t),i=tu();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=r.get(e)||er.empty();a=i.applyToLocalView(s,a),r.set(e,a);let o=(n.get(i.batchId)||tu()).add(e);n=n.insert(i.batchId,o)})}).next(()=>{let s=[],a=n.getReverseIterator();for(;a.hasNext();){let n=a.getNext(),o=n.key,l=n.value,u=to();l.forEach(e=>{if(!i.has(e)){let n=tS(t.get(e),r.get(e));null!==n&&u.set(e,n),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return K.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,r,n){return q.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):e4(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,n):this.getDocumentsMatchingCollectionQuery(e,t,r,n)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(i=>{let s=n-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-i.size):K.resolve(to()),a=-1,o=i;return s.next(t=>K.forEach(t,(t,r)=>(a<r.largestBatchId&&(a=r.largestBatchId),i.get(t)?K.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,tu())).next(e=>{let t;return{batchId:a,changes:(t=ts,e.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t)}}))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next(e=>{let t=ta();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,r,n){let i=t.collectionGroup,s=ta();return this.indexManager.getCollectionParents(e,i).next(a=>K.forEach(a,a=>{var o;let l=(o=a.child(i),new eZ(o,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,l,r,n).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,n))).next(e=>{i.forEach((t,r)=>{let n=r.getKey();null===e.get(n)&&(e=e.insert(n,eD.newInvalidDocument(n)))});let r=ta();return e.forEach((e,n)=>{let s=i.get(e);void 0!==s&&tA(s.mutation,n,er.empty(),V.now()),tt(t,n)&&(r=r.insert(e,n))}),r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,t){return K.resolve(this.lr.get(t))}saveBundleMetadata(e,t){return this.lr.set(t.id,{id:t.id,version:t.version,createTime:t9(t.createTime)}),K.resolve()}getNamedQuery(e,t){return K.resolve(this.hr.get(t))}saveNamedQuery(e,t){return this.hr.set(t.name,{name:t.name,query:function(e){let t=function(e){var t,r,n,i,s,a,o,l;let u,h=function(e){let t=t6(e);return 4===t.length?O.emptyPath():rt(t)}(e.parent),c=e.structuredQuery,d=c.from?c.from.length:0,f=null;if(d>0){1===d||v();let e=c.from[0];e.allDescendants?f=e.collectionId:h=h.child(e.collectionId)}let m=[];c.where&&(m=function(e){var t;let r=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=rn(e.unaryFilter.field);return eF.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=rn(e.unaryFilter.field);return eF.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=rn(e.unaryFilter.field);return eF.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=rn(e.unaryFilter.field);return eF.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}(t):void 0!==t.fieldFilter?eF.create(rn(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?eO.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return v()}}(t.compositeFilter.op)):v()}(e);return r instanceof eO&&eU(t=r)&&eM(t)?r.getFilters():[r]}(c.where));let g=[];c.orderBy&&(g=c.orderBy.map(e=>new eV(rn(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let p=null;c.limit&&(p=null==(u="object"==typeof(t=c.limit)?t.value:t)?null:u);let y=null;c.startAt&&(y=function(e){let t=!!e.before,r=e.values||[];return new eR(r,t)}(c.startAt));let w=null;return c.endAt&&(w=function(e){let t=!e.before,r=e.values||[];return new eR(r,t)}(c.endAt)),r=h,n=f,i=g,s=m,a=p,o=y,l=w,new eZ(r,n,i,s,a,"F",o,l)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?e6(t,t.limit,"L"):t}(t.bundledQuery),readTime:t9(t.readTime)}),K.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(){this.overlays=new X(q.comparator),this.Pr=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){let r=to();return K.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((r,n)=>{this.It(e,t,n)}),K.resolve()}removeOverlaysForBatchId(e,t,r){let n=this.Pr.get(r);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.Pr.delete(r)),K.resolve()}getOverlaysForCollection(e,t,r){let n=to(),i=t.length+1,s=new q(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>r&&n.set(e.getKey(),e)}return K.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let i=new X((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>r){let t=i.get(e.largestBatchId);null===t&&(t=to(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=to(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=n)););return K.resolve(a)}It(e,t,r){let n=this.overlays.get(r.key);if(null!==n){let e=this.Pr.get(n.largestBatchId).delete(r.key);this.Pr.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(r.key,new tP(t,r));let i=this.Pr.get(t);void 0===i&&(i=tu(),this.Pr.set(t,i)),this.Pr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(){this.Ir=new ee(rw.dr),this.Tr=new ee(rw.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,t){let r=new rw(e,t);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Rr(new rw(e,t))}Vr(e,t){e.forEach(e=>this.removeReference(e,t))}mr(e){let t=new q(new O([])),r=new rw(t,e),n=new rw(t,e+1),i=[];return this.Tr.forEachInRange([r,n],e=>{this.Rr(e),i.push(e.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){let t=new q(new O([])),r=new rw(t,e),n=new rw(t,e+1),i=tu();return this.Tr.forEachInRange([r,n],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new rw(e,0),r=this.Ir.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class rw{constructor(e,t){this.key=e,this.yr=t}static dr(e,t){return q.comparator(e.key,t.key)||x(e.yr,t.yr)}static Er(e,t){return x(e.yr,t.yr)||q.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.wr=1,this.Sr=new ee(rw.dr)}checkEmpty(e){return K.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,n){let i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new tV(i,t,r,n);for(let t of(this.mutationQueue.push(s),n))this.Sr=this.Sr.add(new rw(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return K.resolve(s)}lookupMutationBatch(e,t){return K.resolve(this.br(t))}getNextMutationBatchAfterBatchId(e,t){let r=this.Dr(t+1),n=r<0?0:r;return K.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(0===this.mutationQueue.length?-1:this.wr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new rw(t,0),n=new rw(t,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([r,n],e=>{let t=this.br(e.yr);i.push(t)}),K.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ee(x);return t.forEach(e=>{let t=new rw(e,0),n=new rw(e,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([t,n],e=>{r=r.add(e.yr)})}),K.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,i=r;q.isDocumentKey(i)||(i=i.child(""));let s=new rw(new q(i),0),a=new ee(x);return this.Sr.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(a=a.add(e.yr)),!0)},s),K.resolve(this.Cr(a))}Cr(e){let t=[];return e.forEach(e=>{let r=this.br(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){0===this.vr(t.batchId,"removed")||v(),this.mutationQueue.shift();let r=this.Sr;return K.forEach(t.mutations,n=>{let i=new rw(n.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,t){let r=new rw(t,0),n=this.Sr.firstAfterOrEqual(r);return K.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}vr(e,t){return this.Dr(e)}Dr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}br(e){let t=this.Dr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e){this.Fr=e,this.docs=new X(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,n=this.docs.get(r),i=n?n.size:0,s=this.Fr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return K.resolve(r?r.document.mutableCopy():eD.newInvalidDocument(t))}getEntries(e,t){let r=ti;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():eD.newInvalidDocument(e))}),K.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let i=ti,s=t.path,a=new q(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r?r:0!==(r=q.comparator(e.documentKey,t.documentKey))?r:x(e.largestBatchId,t.largestBatchId)}(new B(a.readTime,a.key,-1),r)||(n.has(a.key)||tt(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return K.resolve(i)}getAllFromCollectionGroup(e,t,r,n){v()}Mr(e,t){return K.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new rE(this)}getSize(e){return K.resolve(this.size)}}class rE extends rd{constructor(e){super(),this.ur=e}applyChanges(e){let t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this.ur.addEntry(e,n)):this.ur.removeEntry(r)}),K.waitFor(t)}getFromCache(e,t){return this.ur.getEntry(e,t)}getAllFromCache(e,t){return this.ur.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e){this.persistence=e,this.Or=new tn(e=>eY(e),eX),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.Nr=0,this.Br=new ry,this.targetCount=0,this.Lr=rc.Bn()}forEachTarget(e,t){return this.Or.forEach((e,r)=>t(r)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Nr&&(this.Nr=t),K.resolve()}Qn(e){this.Or.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Lr=new rc(t),this.highestTargetId=t),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,t){return this.Qn(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.Qn(t),K.resolve()}removeTargetData(e,t){return this.Or.delete(t.target),this.Br.mr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,r){let n=0,i=[];return this.Or.forEach((s,a)=>{a.sequenceNumber<=t&&null===r.get(a.targetId)&&(this.Or.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),n++)}),K.waitFor(i).next(()=>n)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){let r=this.Or.get(t)||null;return K.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Ar(t,r),K.resolve()}removeMatchingKeys(e,t,r){this.Br.Vr(t,r);let n=this.persistence.referenceDelegate,i=[];return n&&t.forEach(t=>{i.push(n.markPotentiallyOrphaned(e,t))}),K.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.mr(t),K.resolve()}getMatchingKeysForTargetId(e,t){let r=this.Br.pr(t);return K.resolve(r)}containsKey(e,t){return K.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,t){this.kr={},this.overlays={},this.qr=new Q(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new rT(this),this.indexManager=new rl,this.remoteDocumentCache=new r_(e=>this.referenceDelegate.$r(e)),this.serializer=new ra(t),this.Ur=new rg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new rp,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.kr[e.toKey()];return r||(r=new rv(t,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,t,r){g("MemoryPersistence","Starting transaction:",e);let n=new rC(this.qr.next());return this.referenceDelegate.Wr(),r(n).next(e=>this.referenceDelegate.Gr(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}zr(e,t){return K.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,t)))}}class rC extends ${constructor(e){super(),this.currentSequenceNumber=e}}class rS{constructor(e){this.persistence=e,this.jr=new ry,this.Hr=null}static Jr(e){return new rS(e)}get Yr(){if(this.Hr)return this.Hr;throw v()}addReference(e,t,r){return this.jr.addReference(r,t),this.Yr.delete(r.toString()),K.resolve()}removeReference(e,t,r){return this.jr.removeReference(r,t),this.Yr.add(r.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.Yr.add(t.toString()),K.resolve()}removeTarget(e,t){this.jr.mr(t.targetId).forEach(e=>this.Yr.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Yr.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}Wr(){this.Hr=new Set}Gr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.Yr,r=>{let n=q.fromPath(r);return this.Zr(e,n).next(e=>{e||t.removeEntry(n,P.min())})}).next(()=>(this.Hr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Zr(e,t).next(e=>{e?this.Yr.delete(t.toString()):this.Yr.add(t.toString())})}$r(e){return 0}Zr(e,t){return K.or([()=>K.resolve(this.jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.zr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.Qi=r,this.Ki=n}static $i(e,t){let r=tu(),n=tu();for(let e of t.docChanges)switch(e.type){case 0:r=r.add(e.doc.key);break;case 1:n=n.add(e.doc.key)}return new rA(e,t.fromCache,r,n)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=2}initialize(e,t){this.ji=e,this.indexManager=t,this.Ui=!0}getDocumentsMatchingQuery(e,t,r,n){let i={result:null};return this.Hi(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.Ji(e,t,n,r).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let r=new rN;return this.Yi(e,t,r).next(n=>{if(i.result=n,this.Wi)return this.Zi(e,t,r,n.size)})}).next(()=>i.result)}Zi(e,t,r,n){return r.documentReadCount<this.Gi?(m()<=o.in.DEBUG&&g("QueryEngine","SDK will not create cache indexes for query:",te(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),K.resolve()):(m()<=o.in.DEBUG&&g("QueryEngine","Query:",te(t),"scans",r.documentReadCount,"local documents and returns",n,"documents as results."),r.documentReadCount>this.zi*n?(m()<=o.in.DEBUG&&g("QueryEngine","The SDK decides to create cache indexes for query:",te(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,e9(t))):K.resolve())}Hi(e,t){if(e0(t))return K.resolve(null);let r=e9(t);return this.indexManager.getIndexType(e,r).next(n=>0===n?null:(null!==t.limit&&1===n&&(r=e9(t=e6(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,r).next(n=>{let i=tu(...n);return this.ji.getDocuments(e,i).next(n=>this.indexManager.getMinOffset(e,r).next(r=>{let s=this.Xi(t,n);return this.es(t,s,i,r.readTime)?this.Hi(e,e6(t,null,"F")):this.ts(e,s,t,r)}))})))}Ji(e,t,r,n){return e0(t)||n.isEqual(P.min())?K.resolve(null):this.ji.getDocuments(e,r).next(i=>{let s=this.Xi(t,i);return this.es(t,s,r,n)?K.resolve(null):(m()<=o.in.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),te(t)),this.ts(e,s,t,function(e,t){let r=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1,i=P.fromTimestamp(1e9===n?new V(r+1,0):new V(r,n));return new B(i,q.empty(),-1)}(n,0)).next(e=>e))})}Xi(e,t){let r=new ee(tr(e));return t.forEach((t,n)=>{tt(e,n)&&(r=r.add(n))}),r}es(e,t,r,n){if(null===e.limit)return!1;if(r.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(n)>0)}Yi(e,t,r){return m()<=o.in.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",te(t)),this.ji.getDocumentsMatchingQuery(e,t,B.min(),r)}ts(e,t,r,n){return this.ji.getDocumentsMatchingQuery(e,r,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,t,r,n){this.persistence=e,this.ns=t,this.serializer=n,this.rs=new X(x),this.ss=new tn(e=>eY(e),eX),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rm(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.rs))}}async function rD(e,t){return await e.persistence.runTransaction("Handle user change","readonly",r=>{let n;return e.mutationQueue.getAllMutationBatches(r).next(i=>(n=i,e.us(t),e.mutationQueue.getAllMutationBatches(r))).next(t=>{let i=[],s=[],a=tu();for(let e of n)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(r,a).next(e=>({cs:e,removedBatchIds:i,addedBatchIds:s}))})})}function rR(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Kr.getLastRemoteSnapshotVersion(t))}async function rx(e,t,r){let n=e.rs.get(t);try{r||await e.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,n))}catch(e){if(!G(e))throw e;g("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.rs=e.rs.remove(t),e.ss.delete(n.target)}function rL(e,t,r){let n=P.min(),i=tu();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,r){let n=e.ss.get(r);return void 0!==n?K.resolve(e.rs.get(n)):e.Kr.getTargetData(t,r)})(e,s,e9(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.Kr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.ns.getDocumentsMatchingQuery(s,t,r?n:P.min(),r?i:tu())).next(r=>{var n;let s;return n=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.os.get(n)||P.min(),r.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.os.set(n,s),{documents:r,Ps:i}}))}class rV{constructor(){this.activeTargetIds=th}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rP{constructor(){this.ro=new rV,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,t,r){this.io[e]=t}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new rV,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rF{so(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.co))e(0)}uo(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.co))e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rM=null;function rU(){return null===rM?rM=268435456+Math.round(2147483648*Math.random()):rM++,"0x"+rM.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rq={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rB{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r$="WebChannelConnection";class rz extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${n}`,this.wo="(default)"===this.databaseId.database?`project_id=${r}`:`project_id=${r}&database_id=${n}`}get So(){return!1}bo(e,t,r,n,i){let s=rU(),a=this.Do(e,t);g("RestConnection",`Sending RPC '${e}' ${s}:`,a,r);let o={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(o,n,i),this.vo(e,a,o,r).then(t=>(g("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw y("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",r),t})}Fo(e,t,r,n,i,s){return this.bo(e,t,r,n,i)}Co(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+d}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}Do(e,t){let r=rq[e];return`${this.po}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,n){let i=rU();return new Promise((s,a)=>{let o=new u.JJ;o.setWithCredentials(!0),o.listenOnce(u.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case u.jK.NO_ERROR:let t=o.getResponseJson();g(r$,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case u.jK.TIMEOUT:g(r$,`RPC '${e}' ${i} timed out`),a(new E(_.DEADLINE_EXCEEDED,"Request time out"));break;case u.jK.HTTP_ERROR:let r=o.getStatus();if(g(r$,`RPC '${e}' ${i} failed with status:`,r,"response text:",o.getResponseText()),r>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(t)>=0?t:_.UNKNOWN}(t.status);a(new E(e,t.message))}else a(new E(_.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new E(_.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{g(r$,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(n);g(r$,`RPC '${e}' ${i} sending request:`,n),o.send(t,"POST",l,r,15)})}Mo(e,t,r){let i=rU(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,u.UE)(),o=(0,u.FJ)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;void 0!==h&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let c=s.join("");g(r$,`Creating RPC '${e}' stream ${i}: ${c}`,l);let d=a.createWebChannel(c,l),f=!1,m=!1,p=new rB({ho:t=>{m?g(r$,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(f||(g(r$,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),g(r$,`RPC '${e}' stream ${i} sending:`,t),d.send(t))},Po:()=>d.close()}),w=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(e){setTimeout(()=>{throw e},0)}})};return w(d,u.ii.EventType.OPEN,()=>{m||g(r$,`RPC '${e}' stream ${i} transport opened.`)}),w(d,u.ii.EventType.CLOSE,()=>{m||(m=!0,g(r$,`RPC '${e}' stream ${i} transport closed`),p.mo())}),w(d,u.ii.EventType.ERROR,t=>{m||(m=!0,y(r$,`RPC '${e}' stream ${i} transport errored:`,t),p.mo(new E(_.UNAVAILABLE,"The operation could not be completed")))}),w(d,u.ii.EventType.MESSAGE,t=>{var r;if(!m){let s=t.data[0];s||v();let a=s.error||(null===(r=s[0])||void 0===r?void 0:r.error);if(a){g(r$,`RPC '${e}' stream ${i} received error:`,a);let t=a.status,r=function(e){let t=n[e];if(void 0!==t)return tO(t)}(t),s=a.message;void 0===r&&(r=_.INTERNAL,s="Unknown error status: "+t+" with message "+a.message),m=!0,p.mo(new E(r,s)),d.close()}else g(r$,`RPC '${e}' stream ${i} received:`,s),p.fo(s)}}),w(o,u.ju.STAT_EVENT,t=>{t.stat===u.kN.PROXY?g(r$,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===u.kN.NOPROXY&&g(r$,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.Vo()},0),p}}function rK(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rG(e){return new t1(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rQ{constructor(e,t,r=1e3,n=1.5,i=6e4){this._i=e,this.timerId=t,this.xo=r,this.Oo=n,this.No=i,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();let t=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),n=Math.max(0,t-r);n>0&&g("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Bo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,n,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){null!==this.Lo&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){null!==this.Lo&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rj{constructor(e,t,r,n,i,s,a,o){this._i=e,this.Uo=r,this.Wo=n,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new rQ(e,t)}Jo(){return 1===this.state||5===this.state||this.Yo()}Yo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&null===this.zo&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,t){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,4!==e?this.Ho.reset():t&&t.code===_.RESOURCE_EXHAUSTED?(p(t.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):t&&t.code===_.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(t)}s_(){}auth(){this.state=1;let e=this.o_(this.Go),t=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{this.Go===t&&this.__(e,r)},t=>{e(()=>{let e=new E(_.UNKNOWN,"Fetching auth token failed: "+t.message);return this.a_(e)})})}__(e,t){let r=this.o_(this.Go);this.stream=this.u_(e,t),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(e=>{r(()=>this.a_(e))}),this.stream.onMessage(e=>{r(()=>this.onMessage(e))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return g("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return t=>{this._i.enqueueAndForget(()=>this.Go===e?t():(g("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rH extends rj{constructor(e,t,r,n,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}u_(e,t){return this.connection.Mo("Listen",e,t)}onMessage(e){this.Ho.reset();let t=function(e,t){let r;if("targetChange"in t){var n,i;t.targetChange;let s="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:v(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||v(),ei.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||v(),ei.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?_.UNKNOWN:tO(e.code);return new E(t,e.message||"")}(l);r=new tj(s,a,o,u||null)}else if("documentChange"in t){t.documentChange;let n=t.documentChange;n.document,n.document.name,n.document.updateTime;let i=t5(e,n.document.name),s=t9(n.document.updateTime),a=n.document.createTime?t9(n.document.createTime):P.min(),o=new eb({mapValue:{fields:n.document.fields}}),l=eD.newFoundDocument(i,s,a,o),u=n.targetIds||[],h=n.removedTargetIds||[];r=new tG(u,h,l.key,l)}else if("documentDelete"in t){t.documentDelete;let n=t.documentDelete;n.document;let i=t5(e,n.document),s=n.readTime?t9(n.readTime):P.min(),a=eD.newNoDocument(i,s),o=n.removedTargetIds||[];r=new tG([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;let n=t.documentRemove;n.document;let i=t5(e,n.document),s=n.removedTargetIds||[];r=new tG([],s,i,null)}else{if(!("filter"in t))return v();{t.filter;let e=t.filter;e.targetId;let{count:n=0,unchangedNames:i}=e,s=new tF(n,i),a=e.targetId;r=new tQ(a,s)}}return r}(this.serializer,e),r=function(e){if(!("targetChange"in e))return P.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?P.min():t.readTime?t9(t.readTime):P.min()}(e);return this.listener.c_(t,r)}l_(e){let t={};t.database=re(this.serializer),t.addTarget=function(e,t){let r;let n=t.target;if((r=eJ(n)?{documents:{documents:[t7(e,n.path)]}}:{query:function(e,t){var r,n;let i={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(i.parent=t7(e,s),i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i.parent=t7(e,s.popLast()),i.structuredQuery.from=[{collectionId:s.lastSegment()}]);let a=function(e){if(0!==e.length)return function e(t){return t instanceof eF?function(e){if("=="===e.op){if(eS(e.value))return{unaryFilter:{field:rr(e.field),op:"IS_NAN"}};if(eC(e.value))return{unaryFilter:{field:rr(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(eS(e.value))return{unaryFilter:{field:rr(e.field),op:"IS_NOT_NAN"}};if(eC(e.value))return{unaryFilter:{field:rr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rr(e.field),op:tZ[e.op],value:e.value}}}(t):t instanceof eO?function(t){let r=t.getFilters().map(t=>e(t));return 1===r.length?r[0]:{compositeFilter:{op:t0[t.op],filters:r}}}(t):v()}(eO.create(e,"and"))}(t.filters);a&&(i.structuredQuery.where=a);let o=function(e){if(0!==e.length)return e.map(e=>({field:rr(e.field),direction:tJ[e.dir]}))}(t.orderBy);o&&(i.structuredQuery.orderBy=o);let l=t2(e,t.limit);return null!==l&&(i.structuredQuery.limit=l),t.startAt&&(i.structuredQuery.startAt={before:(r=t.startAt).inclusive,values:r.position}),t.endAt&&(i.structuredQuery.endAt={before:!(n=t.endAt).inclusive,values:n.position}),i}(e,n)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){r.resumeToken=t3(e,t.resumeToken);let n=t2(e,t.expectedCount);null!==n&&(r.expectedCount=n)}else if(t.snapshotVersion.compareTo(P.min())>0){r.readTime=t4(e,t.snapshotVersion.toTimestamp());let n=t2(e,t.expectedCount);null!==n&&(r.expectedCount=n)}return r}(this.serializer,e);let r=function(e,t){let r=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return v()}}(t.purpose);return null==r?null:{"goog-listen-tags":r}}(this.serializer,e);r&&(t.labels=r),this.n_(t)}h_(e){let t={};t.database=re(this.serializer),t.removeTarget=e,this.n_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rW extends class{}{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.R_=!1}V_(){if(this.R_)throw new E(_.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,i])=>this.connection.bo(e,t,r,n,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new E(_.UNKNOWN,e.toString())})}Fo(e,t,r,n){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Fo(e,t,r,i,s,n)).catch(e=>{throw"FirebaseError"===e.name?(e.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new E(_.UNKNOWN,e.toString())})}terminate(){this.R_=!0}}class rY{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){0===this.f_&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){"Online"===this.state?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,"Online"===e&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(p(t),this.p_=!1):g("OnlineStateTracker",t)}D_(){null!==this.g_&&(this.g_.cancel(),this.g_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rX{constructor(e,t,r,n,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=i,this.x_.so(e=>{r.enqueueAndForget(async()=>{r8(this)&&(g("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.F_.add(4),await rZ(e),e.O_.set("Unknown"),e.F_.delete(4),await rJ(e)}(this))})}),this.O_=new rY(r,n)}}async function rJ(e){if(r8(e))for(let t of e.M_)await t(!0)}async function rZ(e){for(let t of e.M_)await t(!1)}function r0(e,t){e.v_.has(t.targetId)||(e.v_.set(t.targetId,t),r9(e)?r3(e):nn(e).Yo()&&r2(e,t))}function r1(e,t){let r=nn(e);e.v_.delete(t),r.Yo()&&r4(e,t),0===e.v_.size&&(r.Yo()?r.e_():r8(e)&&e.O_.set("Unknown"))}function r2(e,t){if(e.N_.Le(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(P.min())>0){let r=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(r)}nn(e).l_(t)}function r4(e,t){e.N_.Le(t),nn(e).h_(t)}function r3(e){e.N_=new tW({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.v_.get(t)||null,st:()=>e.datastore.serializer.databaseId}),nn(e).start(),e.O_.y_()}function r9(e){return r8(e)&&!nn(e).Jo()&&e.v_.size>0}function r8(e){return 0===e.F_.size}async function r6(e){e.v_.forEach((t,r)=>{r2(e,t)})}async function r5(e,t){e.N_=void 0,r9(e)?(e.O_.b_(t),r3(e)):e.O_.set("Unknown")}async function r7(e,t,r){if(e.O_.set("Online"),t instanceof tj&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let n of t.targetIds)e.v_.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.v_.delete(n),e.N_.removeTarget(n))}(e,t)}catch(r){g("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await ne(e,r)}else if(t instanceof tG?e.N_.Ge(t):t instanceof tQ?e.N_.Xe(t):e.N_.He(t),!r.isEqual(P.min()))try{let t=await rR(e.localStore);r.compareTo(t)>=0&&await function(e,t){let r=e.N_._t(t);return r.targetChanges.forEach((r,n)=>{if(r.resumeToken.approximateByteSize()>0){let i=e.v_.get(n);i&&e.v_.set(n,i.withResumeToken(r.resumeToken,t))}}),r.targetMismatches.forEach((t,r)=>{let n=e.v_.get(t);if(!n)return;e.v_.set(t,n.withResumeToken(ei.EMPTY_BYTE_STRING,n.snapshotVersion)),r4(e,t);let i=new rs(n.target,t,r,n.sequenceNumber);r2(e,i)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(t){g("RemoteStore","Failed to raise snapshot:",t),await ne(e,t)}}async function ne(e,t,r){if(!G(t))throw t;e.F_.add(1),await rZ(e),e.O_.set("Offline"),r||(r=()=>rR(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{g("RemoteStore","Retrying IndexedDB access"),await r(),e.F_.delete(1),await rJ(e)})}async function nt(e,t){e.asyncQueue.verifyOperationInProgress(),g("RemoteStore","RemoteStore received new credentials");let r=r8(e);e.F_.add(3),await rZ(e),r&&e.O_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.F_.delete(3),await rJ(e)}async function nr(e,t){t?(e.F_.delete(2),await rJ(e)):t||(e.F_.add(2),await rZ(e),e.O_.set("Unknown"))}function nn(e){var t,r,n;return e.B_||(e.B_=(t=e.datastore,r=e.asyncQueue,n={Io:r6.bind(null,e),Eo:r5.bind(null,e),c_:r7.bind(null,e)},t.V_(),new rH(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.M_.push(async t=>{t?(e.B_.Xo(),r9(e)?r3(e):e.O_.set("Unknown")):(await e.B_.stop(),e.N_=void 0)})),e.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,r,n,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=i,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,n,i){let s=Date.now()+r,a=new ni(e,t,s,n,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new E(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ns(e,t){if(p("AsyncQueue",`${t}: ${e}`),G(e))return new E(_.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e){this.comparator=e?(t,r)=>e(t,r)||q.comparator(t.key,r.key):(e,t)=>q.comparator(e.key,t.key),this.keyedMap=ta(),this.sortedSet=new X(this.comparator)}static emptySet(e){return new na(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof na)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new na;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){this.k_=new X(q.comparator)}track(e){let t=e.doc.key,r=this.k_.get(t);r?0!==e.type&&3===r.type?this.k_=this.k_.insert(t,e):3===e.type&&1!==r.type?this.k_=this.k_.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.k_=this.k_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.k_=this.k_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.k_=this.k_.remove(t):1===e.type&&2===r.type?this.k_=this.k_.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.k_=this.k_.insert(t,{type:2,doc:e.doc}):v():this.k_=this.k_.insert(t,e)}q_(){let e=[];return this.k_.inorderTraversal((t,r)=>{e.push(r)}),e}}class nl{constructor(e,t,r,n,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,n,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new nl(e,t,na.emptySet(t),s,r,n,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&e5(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==r[e].type||!t[e].doc.isEqual(r[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(){this.Q_=void 0,this.listeners=[]}}class nh{constructor(){this.queries=new tn(e=>e7(e),e5),this.onlineState="Unknown",this.K_=new Set}}async function nc(e,t){let r=t.query,n=!1,i=e.queries.get(r);if(i||(n=!0,i=new nu),n)try{i.Q_=await e.onListen(r)}catch(r){let e=ns(r,`Initialization of query '${te(t.query)}' failed`);return void t.onError(e)}e.queries.set(r,i),i.listeners.push(t),t.U_(e.onlineState),i.Q_&&t.W_(i.Q_)&&ng(e)}async function nd(e,t){let r=t.query,n=!1,i=e.queries.get(r);if(i){let e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),n=0===i.listeners.length)}if(n)return e.queries.delete(r),e.onUnlisten(r)}function nf(e,t){let r=!1;for(let n of t){let t=n.query,i=e.queries.get(t);if(i){for(let e of i.listeners)e.W_(n)&&(r=!0);i.Q_=n}}r&&ng(e)}function nm(e,t,r){let n=e.queries.get(t);if(n)for(let e of n.listeners)e.onError(r);e.queries.delete(t)}function ng(e){e.K_.forEach(e=>{e.next()})}class np{constructor(e,t,r){this.query=e,this.G_=t,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new nl(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.z_?this.H_(e)&&(this.G_.next(e),t=!0):this.J_(e,this.onlineState)&&(this.Y_(e),t=!0),this.j_=e,t}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let t=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),t=!0),t}J_(e,t){return!e.fromCache||(!this.options.Z_||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}H_(e){if(e.docChanges.length>0)return!0;let t=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Y_(e){e=nl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e){this.key=e}}class nw{constructor(e){this.key=e}}class nv{constructor(e,t){this.query=e,this.oa=t,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=tu(),this.mutatedKeys=tu(),this.ua=tr(e),this.ca=new na(this.ua)}get la(){return this.oa}ha(e,t){let r=t?t.Pa:new no,n=t?t.ca:this.ca,i=t?t.mutatedKeys:this.mutatedKeys,s=n,a=!1,o="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,l="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{let u=n.get(e),h=tt(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(r.track({type:3,doc:h}),f=!0):this.Ia(u,h)||(r.track({type:2,doc:h}),f=!0,(o&&this.ua(h,o)>0||l&&0>this.ua(h,l))&&(a=!0)):!u&&h?(r.track({type:0,doc:h}),f=!0):u&&!h&&(r.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(s=s.add(h),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),r.track({type:1,doc:e})}return{ca:s,Pa:r,es:a,mutatedKeys:i}}Ia(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){let n=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;let i=e.Pa.q_();i.sort((e,t)=>(function(e,t){let r=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return r(e)-r(t)})(e.type,t.type)||this.ua(e.doc,t.doc)),this.da(r);let s=t?this.Ta():[],a=0===this.aa.size&&this.current?1:0,o=a!==this._a;return(this._a=a,0!==i.length||o)?{snapshot:new nl(this.query,e.ca,n,i,e.mutatedKeys,0===a,o,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:s}:{Ea:s}}U_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new no,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(e=>this.oa=this.oa.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.oa=this.oa.delete(e)),this.current=e.current)}Ta(){if(!this.current)return[];let e=this.aa;this.aa=tu(),this.ca.forEach(e=>{this.Aa(e.key)&&(this.aa=this.aa.add(e.key))});let t=[];return e.forEach(e=>{this.aa.has(e)||t.push(new nw(e))}),this.aa.forEach(r=>{e.has(r)||t.push(new ny(r))}),t}Ra(e){this.oa=e.Ps,this.aa=tu();let t=this.ha(e.documents);return this.applyChanges(t,!0)}Va(){return nl.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,0===this._a,this.hasCachedResults)}}class n_{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class nE{constructor(e){this.key=e,this.ma=!1}}class nT{constructor(e,t,r,n,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.fa={},this.ga=new tn(e=>e7(e),e5),this.pa=new Map,this.ya=new Set,this.wa=new X(q.comparator),this.Sa=new Map,this.ba=new ry,this.Da={},this.Ca=new Map,this.va=rc.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return!0===this.Fa}}async function nI(e,t){var r,n;let i,s;let a=(e.remoteStore.remoteSyncer.applyRemoteEvent=nA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nk.bind(null,e),e.fa.c_=nf.bind(null,e.eventManager),e.fa.xa=nm.bind(null,e.eventManager),e),o=a.ga.get(t);if(o)i=o.targetId,a.sharedClientState.addLocalQueryTarget(i),s=o.view.Va();else{let e=await (r=a.localStore,n=e9(t),r.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return r.Kr.getTargetData(e,n).next(i=>i?(t=i,K.resolve(t)):r.Kr.allocateTargetId(e).next(i=>(t=new rs(n,i,"TargetPurposeListen",e.currentSequenceNumber),r.Kr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=r.rs.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(r.rs=r.rs.insert(e.targetId,e),r.ss.set(n,e.targetId)),e})),o=a.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,s=await nC(a,t,i,"current"===o,e.resumeToken),a.isPrimaryClient&&r0(a.remoteStore,e)}return s}async function nC(e,t,r,n,i){e.Ma=(t,r,n)=>(async function(e,t,r,n){let i=t.view.ha(r);i.es&&(i=await rL(e.localStore,t.query,!1).then(({documents:e})=>t.view.ha(e,i)));let s=n&&n.targetChanges.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s);return nR(e,t.targetId,a.Ea),a.snapshot})(e,t,r,n);let s=await rL(e.localStore,t,!0),a=new nv(t,s.Ps),o=a.ha(s.documents),l=tK.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);nR(e,r,u.Ea);let h=new n_(t,r,a);return e.ga.set(t,h),e.pa.has(r)?e.pa.get(r).push(t):e.pa.set(r,[t]),u.snapshot}async function nS(e,t){let r=e.ga.get(t),n=e.pa.get(r.targetId);if(n.length>1)return e.pa.set(r.targetId,n.filter(e=>!e5(e,t))),void e.ga.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await rx(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),r1(e.remoteStore,r.targetId),nb(e,r.targetId)}).catch(z)):(nb(e,r.targetId),await rx(e.localStore,r.targetId,!0))}async function nA(e,t){try{let r=await function(e,t){let r=t.snapshotVersion,n=e.rs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let a,o;let l=e._s.newChangeBuffer({trackRemovals:!0});n=e.rs;let u=[];t.targetChanges.forEach((s,a)=>{var o;let l=n.get(a);if(!l)return;u.push(e.Kr.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.Kr.addMatchingKeys(i,s.addedDocuments,a)));let h=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?h=h.withResumeToken(ei.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):s.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(s.resumeToken,r)),n=n.insert(a,h),o=h,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(e.Kr.updateTargetData(i,h))});let h=ti,c=tu();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,r))}),u.push((s=t.documentUpdates,a=tu(),o=tu(),s.forEach(e=>a=a.add(e)),l.getEntries(i,a).next(e=>{let t=ti;return s.forEach((r,n)=>{let i=e.get(r);n.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(r)),n.isNoDocument()&&n.version.isEqual(P.min())?(l.removeEntry(r,n.readTime),t=t.insert(r,n)):!i.isValidDocument()||n.version.compareTo(i.version)>0||0===n.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(n),t=t.insert(r,n)):g("LocalStore","Ignoring outdated watch update for ",r,". Current version:",i.version," Watch version:",n.version)}),{ls:t,hs:o}})).next(e=>{h=e.ls,c=e.hs})),!r.isEqual(P.min())){let t=e.Kr.getLastRemoteSnapshotVersion(i).next(t=>e.Kr.setTargetsMetadata(i,i.currentSequenceNumber,r));u.push(t)}return K.waitFor(u).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,h,c)).next(()=>h)}).then(t=>(e.rs=n,t))}(e.localStore,t);t.targetChanges.forEach((t,r)=>{let n=e.Sa.get(r);n&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||v(),t.addedDocuments.size>0?n.ma=!0:t.modifiedDocuments.size>0?n.ma||v():t.removedDocuments.size>0&&(n.ma||v(),n.ma=!1))}),await nL(e,r,t)}catch(e){await z(e)}}function nN(e,t,r){var n;if(e.isPrimaryClient&&0===r||!e.isPrimaryClient&&1===r){let r;let i=[];e.ga.forEach((e,r)=>{let n=r.view.U_(t);n.snapshot&&i.push(n.snapshot)}),(n=e.eventManager).onlineState=t,r=!1,n.queries.forEach((e,n)=>{for(let e of n.listeners)e.U_(t)&&(r=!0)}),r&&ng(n),i.length&&e.fa.c_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function nk(e,t,r){e.sharedClientState.updateQueryState(t,"rejected",r);let n=e.Sa.get(t),i=n&&n.key;if(i){let r=new X(q.comparator);r=r.insert(i,eD.newNoDocument(i,P.min()));let n=tu().add(i),s=new tz(P.min(),new Map,new X(x),r,n);await nA(e,s),e.wa=e.wa.remove(i),e.Sa.delete(t),nx(e)}else await rx(e.localStore,t,!1).then(()=>nb(e,t,r)).catch(z)}function nb(e,t,r=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.pa.get(t)))e.ga.delete(n),r&&e.fa.xa(n,r);e.pa.delete(t),e.isPrimaryClient&&e.ba.mr(t).forEach(t=>{e.ba.containsKey(t)||nD(e,t)})}function nD(e,t){e.ya.delete(t.path.canonicalString());let r=e.wa.get(t);null!==r&&(r1(e.remoteStore,r),e.wa=e.wa.remove(t),e.Sa.delete(r),nx(e))}function nR(e,t,r){for(let n of r)n instanceof ny?(e.ba.addReference(n.key,t),function(e,t){let r=t.key,n=r.path.canonicalString();e.wa.get(r)||e.ya.has(n)||(g("SyncEngine","New document in limbo: "+r),e.ya.add(n),nx(e))}(e,n)):n instanceof nw?(g("SyncEngine","Document no longer in limbo: "+n.key),e.ba.removeReference(n.key,t),e.ba.containsKey(n.key)||nD(e,n.key)):v()}function nx(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){var t;let r=e.ya.values().next().value;e.ya.delete(r);let n=new q(O.fromString(r)),i=e.va.next();e.Sa.set(i,new nE(n)),e.wa=e.wa.insert(n,i),r0(e.remoteStore,new rs(e9((t=n.path,new eZ(t))),i,"TargetPurposeLimboResolution",Q.ae))}}async function nL(e,t,r){let n=[],i=[],s=[];e.ga.isEmpty()||(e.ga.forEach((a,o)=>{s.push(e.Ma(o,t,r).then(t=>{if((t||r)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){n.push(t);let e=rA.$i(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.fa.c_(n),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",r=>K.forEach(t,t=>K.forEach(t.Qi,n=>e.persistence.referenceDelegate.addReference(r,t.targetId,n)).next(()=>K.forEach(t.Ki,n=>e.persistence.referenceDelegate.removeReference(r,t.targetId,n)))))}catch(e){if(!G(e))throw e;g("LocalStore","Failed to update sequence numbers: "+e)}for(let r of t){let t=r.targetId;if(!r.fromCache){let r=e.rs.get(t),n=r.snapshotVersion,i=r.withLastLimboFreeSnapshotVersion(n);e.rs=e.rs.insert(t,i)}}}(e.localStore,i))}async function nV(e,t){if(!e.currentUser.isEqual(t)){g("SyncEngine","User change. New user:",t.toKey());let r=await rD(e.localStore,t);e.currentUser=t,e.Ca.forEach(e=>{e.forEach(e=>{e.reject(new E(_.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.Ca.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await nL(e,r.cs)}}function nP(e,t){let r=e.Sa.get(t);if(r&&r.ma)return tu().add(r.key);{let r=tu(),n=e.pa.get(t);if(!n)return r;for(let t of n){let n=e.ga.get(t);r=r.unionWith(n.view.la)}return r}}class nF{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=rG(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t,r,n,i;return t=this.persistence,r=new rk,n=e.initialUser,i=this.serializer,new rb(t,r,n,i)}createPersistence(e){return new rI(rS.Jr,this.serializer)}createSharedClientState(e){return new rP}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nO{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>nN(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=nV.bind(null,this.syncEngine),await nr(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new nh}createDatastore(e){var t,r,n;let i=rG(e.databaseInfo.databaseId),s=(t=e.databaseInfo,new rz(t));return r=e.authCredentials,n=e.appCheckCredentials,new rW(r,n,s,i)}createRemoteStore(e){var t,r,n,i;return t=this.localStore,r=this.datastore,n=e.asyncQueue,i=rO.C()?new rO:new rF,new rX(t,r,n,e=>nN(this.syncEngine,e,0),i)}createSyncEngine(e,t){return function(e,t,r,n,i,s,a){let o=new nT(e,t,r,n,i,s);return a&&(o.Fa=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){g("RemoteStore","RemoteStore shutting down."),e.F_.add(5),await rZ(e),e.x_.shutdown(),e.O_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):p("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nU{constructor(e,t,r,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=c.UNAUTHENTICATED,this.clientId=R.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async e=>{g("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(g("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=ns(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function nq(e,t){e.asyncQueue.verifyOperationInProgress(),g("FirestoreClient","Initializing OfflineComponentProvider");let r=await e.getConfiguration();await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await rD(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function nB(e,t){e.asyncQueue.verifyOperationInProgress();let r=await n$(e);g("FirestoreClient","Initializing OnlineComponentProvider");let n=await e.getConfiguration();await t.initialize(r,n),e.setCredentialChangeListener(e=>nt(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>nt(t.remoteStore,r)),e._onlineComponents=t}async function n$(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){g("FirestoreClient","Using user provided OfflineComponentProvider");try{await nq(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===_.FAILED_PRECONDITION||t.code===_.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;y("Error using user provided cache. Falling back to memory cache: "+t),await nq(e,new nF)}}else g("FirestoreClient","Using default OfflineComponentProvider"),await nq(e,new nF)}return e._offlineComponents}async function nz(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(g("FirestoreClient","Using user provided OnlineComponentProvider"),await nB(e,e._uninitializedComponentsProvider._online)):(g("FirestoreClient","Using default OnlineComponentProvider"),await nB(e,new nO))),e._onlineComponents}async function nK(e){let t=await nz(e),r=t.eventManager;return r.onListen=nI.bind(null,t.syncEngine),r.onUnlisten=nS.bind(null,t.syncEngine),r}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nG(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nQ=new Map;function nj(e){if(q.isDocumentKey(e))throw new E(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function nH(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":v()}function nW(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=nH(e);throw new E(_.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nY{constructor(e){var t,r;if(void 0===e.host){if(void 0!==e.ssl)throw new E(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new E(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,r,n){if(!0===t&&!0===n)throw new E(_.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nG(null!==(r=e.experimentalLongPollingOptions)&&void 0!==r?r:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new E(_.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new E(_.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new E(_.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,r;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class nX{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nY({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new E(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nY(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new C;switch(e.type){case"firstParty":return new k(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new E(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=nQ.get(e);t&&(g("ComponentProvider","Removing Datastore"),nQ.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nJ{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new nJ(this.firestore,e,this._query)}}class nZ{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new n0(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nZ(this.firestore,e,this._key)}}class n0 extends nJ{constructor(e,t,r){super(e,t,new eZ(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new nZ(this.firestore,null,new q(e))}withConverter(e){return new n0(this.firestore,e,this._path)}}function n1(e,t,...r){if(e=(0,l.m9)(e),/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t,r){if(!r)throw new E(_.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}("collection","path",t),e instanceof nX){let n=O.fromString(t,...r);return nj(n),new n0(e,null,n)}{if(!(e instanceof nZ||e instanceof n0))throw new E(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(O.fromString(t,...r));return nj(n),new n0(e.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new rQ(this,"async_queue_retry"),this.ou=()=>{let e=rK();e&&g("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Ho.$o()};let e=rK();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;let t=rK();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});let t=new T;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(0!==this.Xa.length){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!G(e))throw e;g("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){let t=this.Za.then(()=>(this.ru=!0,e().catch(e=>{let t;this.nu=e,this.ru=!1;let r=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw p("INTERNAL UNHANDLED ERROR: ",r),e}).then(e=>(this.ru=!1,e))));return this.Za=t,t}enqueueAfterDelay(e,t,r){this._u(),this.su.indexOf(e)>-1&&(t=0);let n=ni.createAndSchedule(this,e,t,r,e=>this.cu(e));return this.tu.push(n),n}_u(){this.nu&&v()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(let t of this.tu)if(t.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{for(let t of(this.tu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.tu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){let t=this.tu.indexOf(e);this.tu.splice(t,1)}}class n4 extends nX{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new n2,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||n9(this),this._firestoreClient.terminate()}}function n3(e,t){let r="object"==typeof e?e:(0,s.Mq)(),n=(0,s.qX)(r,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!n._initialized){let e=(0,l.P0)("firestore");e&&function(e,t,r,n={}){var i;let s=(e=nW(e,nX))._getSettings(),a=`${t}:${r}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&y("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),n.mockUserToken){let t,r;if("string"==typeof n.mockUserToken)t=n.mockUserToken,r=c.MOCK_USER;else{t=(0,l.Sg)(n.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=n.mockUserToken.sub||n.mockUserToken.user_id;if(!s)throw new E(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new c(s)}e._authCredentials=new S(new I(t,r))}}(n,...e)}return n}function n9(e){var t,r,n,i,s,a;let o=e._freezeSettings(),l=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",a=e._persistenceKey,new ed(i,s,a,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,nG(o.experimentalLongPollingOptions),o.useFetchStreams));e._firestoreClient=new nU(e._authCredentials,e._appCheckCredentials,e._queue,l),(null===(r=o.localCache)||void 0===r?void 0:r._offlineComponentProvider)&&(null===(n=o.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.localCache.kind,_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n8{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n8(ei.fromBase64String(e))}catch(e){throw new E(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new n8(ei.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new E(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new U(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n5{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n7{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new E(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new E(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return x(this._lat,e._lat)||x(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ie=/^__.*__$/;function it(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class ir{constructor(e,t,r,n,i,s){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=n,void 0===i&&this.du(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new ir(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.Eu({path:r,Ru:!1});return n.Vu(e),n}mu(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.Eu({path:r,Ru:!1});return n.du(),n}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return io(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(0===e.length)throw this.gu("Document fields must not be empty");if(it(this.Tu)&&ie.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class ii{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||rG(e)}wu(e,t,r,n=!1){return new ir({Tu:e,methodName:t,yu:r,path:U.emptyPath(),Ru:!1,pu:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function is(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof V||e instanceof n7||e instanceof n8||e instanceof nZ||e instanceof n5)}let ia=RegExp("[~\\*/\\[\\]]");function io(e,t,r,n,i){let s=n&&!n.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;r&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${n}`),a&&(l+=` in document ${i}`),l+=")"),new E(_.INVALID_ARGUMENT,o+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,t,r,n,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new nZ(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new iu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(ih("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class iu extends il{data(){return super.data()}}function ih(e,t){return"string"==typeof t?function(e,t,r){if(t.search(ia)>=0)throw io(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new n6(...t.split("."))._internalPath}catch(n){throw io(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}(e,t):t instanceof n6?t._internalPath:t._delegate._internalPath}class ic{}class id extends ic{}function im(e,t,...r){let n=[];for(let i of(t instanceof ic&&n.push(t),function(e){let t=e.filter(e=>e instanceof iy).length,r=e.filter(e=>e instanceof ig).length;if(t>1||t>0&&r>0)throw new E(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n=n.concat(r)),n))e=i._apply(e);return e}class ig extends id{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ig(e,t,r)}_apply(e){let t=this._parse(e);return i_(e._query,t),new nJ(e.firestore,e.converter,e8(e._query,t))}_parse(e){let t=function(e){let t=e._freezeSettings(),r=rG(e._databaseId);return new ii(e._databaseId,!!t.ignoreUndefinedProperties,r)}(e.firestore),r=function(e,t,r,n,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new E(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){iv(a,s);let t=[];for(let r of a)t.push(iw(n,e,r));o={arrayValue:{values:t}}}else o=iw(n,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||iv(a,s),o=function(e,t,r,n=!1){return function e(t,r){if(is(t=(0,l.m9)(t)))return function(e,t,r){if(!is(r)||!("object"==typeof r&&null!==r&&(Object.getPrototypeOf(r)===Object.prototype||null===Object.getPrototypeOf(r)))){let n=nH(r);throw"an object"===n?t.gu(e+" a custom object"):t.gu(e+" "+n)}}("Unsupported field value:",r,t),function(t,r){let n={};return Y(t)?r.path&&r.path.length>0&&r.fieldMask.push(r.path):W(t,(t,i)=>{let s=e(i,r.Au(t));null!=s&&(n[t]=s)}),{mapValue:{fields:n}}}(t,r);if(t instanceof n5)return function(e,t){if(!it(t.Tu))throw t.gu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.gu(`${e._methodName}() is not currently supported inside arrays`);let r=e._toFieldTransform(t);r&&t.fieldTransforms.push(r)}(t,r),null;if(void 0===t&&r.ignoreUndefinedProperties)return null;if(r.path&&r.fieldMask.push(r.path),t instanceof Array){if(r.settings.Ru&&4!==r.Tu)throw r.gu("Nested arrays are not supported");return function(t,r){let n=[],i=0;for(let s of t){let t=e(s,r.fu(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,r)}return function(e,t){if(null===(e=(0,l.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var r,n,i;return r=t.serializer,"number"==typeof(i=n=e)&&Number.isInteger(i)&&!j(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?td(n):tc(r,n)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let r=V.fromDate(e);return{timestampValue:t4(t.serializer,r)}}if(e instanceof V){let r=new V(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:t4(t.serializer,r)}}if(e instanceof n7)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof n8)return{bytesValue:t3(t.serializer,e._byteString)};if(e instanceof nZ){let r=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(r))throw t.gu(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:t8(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.gu(`Unsupported field value: ${nH(e)}`)}(t,r)}(r,e.wu(n?4:3,t))}(r,t,a,"in"===s||"not-in"===s);return eF.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return r}}function ip(e,t,r){let n=ih("where",e);return ig._create(n,t,r)}class iy extends ic{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new iy(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:eO.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let r=e,n=t.getFlattenedFilters();for(let e of n)i_(r,e),r=e8(r,e)}(e._query,t),new nJ(e.firestore,e.converter,e8(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function iw(e,t,r){if("string"==typeof(r=(0,l.m9)(r))){if(""===r)throw new E(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!e4(t)&&-1!==r.indexOf("/"))throw new E(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);let n=t.path.child(O.fromString(r));if(!q.isDocumentKey(n))throw new E(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return eE(e,new q(n))}if(r instanceof nZ)return eE(e,r._key);throw new E(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${nH(r)}.`)}function iv(e,t){if(!Array.isArray(e)||0===e.length)throw new E(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function i_(e,t){if(t.isInequality()){let r=e2(e),n=t.field;if(null!==r&&!r.isEqual(n))throw new E(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${n.toString()}'`);let i=e1(e);null!==i&&function(e,t,r){if(!r.isEqual(t))throw new E(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${r.toString()}' instead.`)}(0,n,i)}let r=function(e,t){for(let r of e)for(let e of r.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==r)throw r===t.op?new E(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new E(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${r.toString()}' filters.`)}class iE{convertValue(e,t="none"){switch(eg(e)){case 0:return null;case 1:return e.booleanValue;case 2:return eo(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(el(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw v()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return W(e,(e,n)=>{r[e]=this.convertValue(n,t)}),r}convertGeoPoint(e){return new n7(eo(e.latitude),eo(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=eh(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ec(e));default:return null}}convertTimestamp(e){let t=ea(e);return new V(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=O.fromString(e);ri(r)||v();let n=new ef(r.get(1),r.get(3)),i=new q(r.popFirst(5));return n.isEqual(t)||p(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class iI extends il{constructor(e,t,r,n,i,s){super(e,t,r,n,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new iC(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(ih("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class iC extends iI{data(e={}){return super.data(e)}}class iS{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new iT(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new iC(this._firestore,this._userDataWriter,r.key,r,new iT(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new E(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>{let n=new iC(e._firestore,e._userDataWriter,r.doc.key,r.doc,new iT(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new iC(e._firestore,e._userDataWriter,t.doc.key,t.doc,new iT(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(s=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}(t.type),doc:n,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class iA extends iE{constructor(e){super(),this.firestore=e}convertBytes(e){return new n8(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new nZ(this.firestore,null,t)}}function iN(e){e=nW(e,nJ);let t=nW(e.firestore,n4),r=(t._firestoreClient||n9(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient),n=new iA(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new E(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,r={}){let n=new T;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){let s=new nM({next:r=>{t.enqueueAndForget(()=>nd(e,a)),r.fromCache&&"server"===n.source?i.reject(new E(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(r)},error:e=>i.reject(e)}),a=new np(r,s,{includeMetadataChanges:!0,Z_:!0});return nc(e,a)})(await nK(e),e.asyncQueue,t,r,n)),n.promise})(r,e._query).then(r=>new iS(t,n,e,r)))}new WeakMap,function(e=!0){d=s.Jn,(0,s.Xd)(new a.wA("firestore",(t,{instanceIdentifier:r,options:n})=>{let i=t.getProvider("app").getImmediate(),s=new n4(new A(t.getProvider("auth-internal")),new D(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new E(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ef(e.options.projectId,t)}(i,r),i);return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),(0,s.KN)(h,"4.1.3",void 0),(0,s.KN)(h,"4.1.3","esm2017")}()}}]);