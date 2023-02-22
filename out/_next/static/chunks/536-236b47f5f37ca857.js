"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[536],{7536:function(e,t,r){r.d(t,{cI:function(){return eh}});var i=r(7294),a=e=>"checkbox"===e.type,s=e=>e instanceof Date,l=e=>null==e;let n=e=>"object"==typeof e;var u=e=>!l(e)&&!Array.isArray(e)&&n(e)&&!s(e),o=e=>u(e)&&e.target?a(e.target)?e.target.checked:e.target.value:e,d=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,f=(e,t)=>e.has(d(t)),c=e=>Array.isArray(e)?e.filter(Boolean):[],y=e=>void 0===e,m=(e,t,r)=>{if(!t||!u(e))return r;let i=c(t.split(/[,[\].]+?/)).reduce((e,t)=>l(e)?e:e[t],e);return y(i)||i===e?y(e[t])?r:e[t]:i};let h={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},g={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},p={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};i.createContext(null);var v=(e,t,r,i=!0)=>{let a={defaultValues:t._defaultValues};for(let s in e)Object.defineProperty(a,s,{get(){let a=s;return t._proxyFormState[a]!==g.all&&(t._proxyFormState[a]=!i||g.all),r&&(r[a]=!0),e[a]}});return a},b=e=>u(e)&&!Object.keys(e).length,V=(e,t,r)=>{let{name:i,...a}=e;return b(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find(e=>t[e]===(!r||g.all))},_=e=>Array.isArray(e)?e:[e],w=e=>"string"==typeof e,A=(e,t,r,i)=>w(e)?(i&&t.watch.add(e),m(r,e)):Array.isArray(e)?e.map(e=>(i&&t.watch.add(e),m(r,e))):(i&&(t.watchAll=!0),r),F=e=>{let t=e.constructor&&e.constructor.prototype;return u(t)&&t.hasOwnProperty("isPrototypeOf")},S="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function k(e){let t;let r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(!(S&&(e instanceof Blob||e instanceof FileList))&&(r||u(e))))return e;else if(t=r?[]:{},Array.isArray(e)||F(e))for(let i in e)t[i]=k(e[i]);else t=e;return t}var x=(e,t,r,i,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[i]:a||!0}}:{},D=e=>/^\w*$/.test(e),O=e=>c(e.replace(/["|']|\]/g,"").split(/\.|\[/));function C(e,t,r){let i=-1,a=D(t)?[t]:O(t),s=a.length,l=s-1;for(;++i<s;){let n=a[i],o=r;if(i!==l){let d=e[n];o=u(d)||Array.isArray(d)?d:isNaN(+a[i+1])?{}:[]}e[n]=o,e=e[n]}return e}let E=(e,t,r)=>{for(let i of r||Object.keys(e)){let a=m(e,i);if(a){let{_f:s,...l}=a;if(s&&t(s.name)){if(s.ref.focus){s.ref.focus();break}if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else u(l)&&E(l,t)}}};var L=e=>({isOnSubmit:!e||e===g.onSubmit,isOnBlur:e===g.onBlur,isOnChange:e===g.onChange,isOnAll:e===g.all,isOnTouch:e===g.onTouched}),T=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),U=(e,t,r)=>{let i=c(m(e,r));return C(i,"root",t[r]),C(e,r,i),e},B=e=>"boolean"==typeof e,j=e=>"file"===e.type,N=e=>"function"==typeof e,M=e=>w(e)||i.isValidElement(e),q=e=>"radio"===e.type,R=e=>e instanceof RegExp;let H={value:!1,isValid:!1},I={value:!0,isValid:!0};var P=e=>{if(Array.isArray(e)){if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!y(e[0].attributes.value)?y(e[0].value)||""===e[0].value?I:{value:e[0].value,isValid:!0}:I:H}return H};let $={isValid:!1,value:null};var G=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,$):$;function W(e,t,r="validate"){if(M(e)||Array.isArray(e)&&e.every(M)||B(e)&&!e)return{type:r,message:M(e)?e:"",ref:t}}var z=e=>u(e)&&!R(e)?e:{value:e,message:""},J=async(e,t,r,i,s)=>{let{ref:n,refs:o,required:d,maxLength:f,minLength:c,min:m,max:h,pattern:g,validate:v,name:V,valueAsNumber:_,mount:A,disabled:F}=e._f;if(!A||F)return{};let S=o?o[0]:n,k=e=>{i&&S.reportValidity&&(S.setCustomValidity(B(e)?"":e||""),S.reportValidity())},D={},O=q(n),C=a(n),E=(_||j(n))&&y(n.value)&&y(t)||""===t||Array.isArray(t)&&!t.length,L=x.bind(null,V,r,D),T=(e,t,r,i=p.maxLength,a=p.minLength)=>{let s=e?t:r;D[V]={type:e?i:a,message:s,ref:n,...L(e?i:a,s)}};if(s?!Array.isArray(t)||!t.length:d&&(!(O||C)&&(E||l(t))||B(t)&&!t||C&&!P(o).isValid||O&&!G(o).isValid)){let{value:U,message:H}=M(d)?{value:!!d,message:d}:z(d);if(U&&(D[V]={type:p.required,message:H,ref:S,...L(p.required,H)},!r))return k(H),D}if(!E&&(!l(m)||!l(h))){let I,$;let J=z(h),K=z(m);if(l(t)||isNaN(t)){let Q=n.valueAsDate||new Date(t),X=e=>new Date(new Date().toDateString()+" "+e),Y="time"==n.type,Z="week"==n.type;w(J.value)&&t&&(I=Y?X(t)>X(J.value):Z?t>J.value:Q>new Date(J.value)),w(K.value)&&t&&($=Y?X(t)<X(K.value):Z?t<K.value:Q<new Date(K.value))}else{let ee=n.valueAsNumber||(t?+t:t);l(J.value)||(I=ee>J.value),l(K.value)||($=ee<K.value)}if((I||$)&&(T(!!I,J.message,K.message,p.max,p.min),!r))return k(D[V].message),D}if((f||c)&&!E&&(w(t)||s&&Array.isArray(t))){let et=z(f),er=z(c),ei=!l(et.value)&&t.length>et.value,ea=!l(er.value)&&t.length<er.value;if((ei||ea)&&(T(ei,et.message,er.message),!r))return k(D[V].message),D}if(g&&!E&&w(t)){let{value:es,message:el}=z(g);if(R(es)&&!t.match(es)&&(D[V]={type:p.pattern,message:el,ref:n,...L(p.pattern,el)},!r))return k(el),D}if(v){if(N(v)){let en=await v(t),eu=W(en,S);if(eu&&(D[V]={...eu,...L(p.validate,eu.message)},!r))return k(eu.message),D}else if(u(v)){let eo={};for(let ed in v){if(!b(eo)&&!r)break;let ef=W(await v[ed](t),S,ed);ef&&(eo={...ef,...L(ed,ef.message)},k(ef.message),r&&(D[V]=eo))}if(!b(eo)&&(D[V]={ref:S,...eo},!r))return D}}return k(!0),D};function K(e,t){let r;let i=D(t)?[t]:O(t),a=1==i.length?e:function(e,t){let r=t.slice(0,-1).length,i=0;for(;i<r;)e=y(e)?i++:e[t[i++]];return e}(e,i),s=i[i.length-1];a&&delete a[s];for(let l=0;l<i.slice(0,-1).length;l++){let n,o=-1,d=i.slice(0,-(l+1)),f=d.length-1;for(l>0&&(r=e);++o<d.length;){let c=d[o];n=n?n[c]:e[c],f===o&&(u(n)&&b(n)||Array.isArray(n)&&function(e){for(let t in e)if(!y(e[t]))return!1;return!0}(n))&&(r?delete r[c]:delete e[c]),r=n}}return e}function Q(){let e=[],t=t=>{for(let r of e)r.next(t)},r=t=>(e.push(t),{unsubscribe(){e=e.filter(e=>e!==t)}}),i=()=>{e=[]};return{get observers(){return e},next:t,subscribe:r,unsubscribe:i}}var X=e=>l(e)||!n(e);function Y(e,t){if(X(e)||X(t))return e===t;if(s(e)&&s(t))return e.getTime()===t.getTime();let r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(let a of r){let l=e[a];if(!i.includes(a))return!1;if("ref"!==a){let n=t[a];if(s(l)&&s(n)||u(l)&&u(n)||Array.isArray(l)&&Array.isArray(n)?!Y(l,n):l!==n)return!1}}return!0}var Z=e=>{let t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},ee=e=>"select-multiple"===e.type,et=e=>q(e)||a(e),er=e=>Z(e)&&e.isConnected,ei=e=>{for(let t in e)if(N(e[t]))return!0;return!1};function ea(e,t={}){let r=Array.isArray(e);if(u(e)||r)for(let i in e)Array.isArray(e[i])||u(e[i])&&!ei(e[i])?(t[i]=Array.isArray(e[i])?[]:{},ea(e[i],t[i])):l(e[i])||(t[i]=!0);return t}var es=(e,t)=>(function e(t,r,i){let a=Array.isArray(t);if(u(t)||a)for(let s in t)Array.isArray(t[s])||u(t[s])&&!ei(t[s])?y(r)||X(i[s])?i[s]=Array.isArray(t[s])?ea(t[s],[]):{...ea(t[s])}:e(t[s],l(r)?{}:r[s],i[s]):Y(t[s],r[s])?delete i[s]:i[s]=!0;return i})(e,t,ea(t)),el=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:i})=>y(e)?e:t?""===e?NaN:e?+e:e:r&&w(e)?new Date(e):i?i(e):e;function en(e){let t=e.ref;return(e.refs?e.refs.every(e=>e.disabled):t.disabled)?void 0:j(t)?t.files:q(t)?G(e.refs).value:ee(t)?[...t.selectedOptions].map(({value:e})=>e):a(t)?P(e.refs).value:el(y(t.value)?e.ref.value:t.value,e)}var eu=(e,t,r,i)=>{let a={};for(let s of e){let l=m(t,s);l&&C(a,s,l._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:i}},eo=e=>y(e)?e:R(e)?e.source:u(e)?R(e.value)?e.value.source:e.value:e,ed=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ef(e,t,r){let i=m(e,r);if(i||D(r))return{error:i,name:r};let a=r.split(".");for(;a.length;){let s=a.join("."),l=m(t,s),n=m(e,s);if(l&&!Array.isArray(l)&&r!==s)break;if(n&&n.type)return{name:s,error:n};a.pop()}return{name:r}}var ec=(e,t,r,i,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?i.isOnBlur:a.isOnBlur)?!e:(r?!i.isOnChange:!a.isOnChange)||e),ey=(e,t)=>!c(m(e,t)).length&&K(e,t);let em={mode:g.onSubmit,reValidateMode:g.onChange,shouldFocusError:!0};function eh(e={}){let t=i.useRef(),[r,n]=i.useState({isDirty:!1,isValidating:!1,isLoading:!0,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:N(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...function(e={},t){let r,i={...em,...e},n=e.resetOptions&&e.resetOptions.keepDirtyValues,d={submitCount:0,isDirty:!1,isLoading:!0,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},p={},v=u(i.defaultValues)&&k(i.defaultValues)||{},V=i.shouldUnregister?{}:k(v),F={action:!1,mount:!1,watch:!1},x={mount:new Set,unMount:new Set,array:new Set,watch:new Set},D=0,O={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},M={watch:Q(),array:Q(),state:Q()},q=L(i.mode),R=L(i.reValidateMode),H=i.criteriaMode===g.all,I=e=>t=>{clearTimeout(D),D=window.setTimeout(e,t)},P=async()=>{if(O.isValid){let e=i.resolver?b((await eh()).errors):await ep(p,!0);e!==d.isValid&&(d.isValid=e,M.state.next({isValid:e}))}},$=e=>O.isValidating&&M.state.next({isValidating:e}),G=(e,t=[],r,i,a=!0,s=!0)=>{if(i&&r){if(F.action=!0,s&&Array.isArray(m(p,e))){let l=r(m(p,e),i.argA,i.argB);a&&C(p,e,l)}if(s&&Array.isArray(m(d.errors,e))){let n=r(m(d.errors,e),i.argA,i.argB);a&&C(d.errors,e,n),ey(d.errors,e)}if(O.touchedFields&&s&&Array.isArray(m(d.touchedFields,e))){let u=r(m(d.touchedFields,e),i.argA,i.argB);a&&C(d.touchedFields,e,u)}O.dirtyFields&&(d.dirtyFields=es(v,V)),M.state.next({name:e,isDirty:eb(e,t),dirtyFields:d.dirtyFields,errors:d.errors,isValid:d.isValid})}else C(V,e,t)},W=(e,t)=>{C(d.errors,e,t),M.state.next({errors:d.errors})},z=(e,t,r,i)=>{let a=m(p,e);if(a){let s=m(V,e,y(r)?m(v,e):r);y(s)||i&&i.defaultChecked||t?C(V,e,t?s:en(a._f)):ew(e,s),F.mount&&P()}},ei=(e,t,r,i,a)=>{let s=!1,l=!1,n={name:e};if(!r||i){O.isDirty&&(l=d.isDirty,d.isDirty=n.isDirty=eb(),s=l!==n.isDirty);let u=Y(m(v,e),t);l=m(d.dirtyFields,e),u?K(d.dirtyFields,e):C(d.dirtyFields,e,!0),n.dirtyFields=d.dirtyFields,s=s||O.dirtyFields&&!u!==l}if(r){let o=m(d.touchedFields,e);o||(C(d.touchedFields,e,r),n.touchedFields=d.touchedFields,s=s||O.touchedFields&&o!==r)}return s&&a&&M.state.next(n),s?n:{}},ea=(t,i,a,s)=>{let l=m(d.errors,t),n=O.isValid&&B(i)&&d.isValid!==i;if(e.delayError&&a?(r=I(()=>W(t,a)))(e.delayError):(clearTimeout(D),r=null,a?C(d.errors,t,a):K(d.errors,t)),(a?!Y(l,a):l)||!b(s)||n){let u={...s,...n&&B(i)?{isValid:i}:{},errors:d.errors,name:t};d={...d,...u},M.state.next(u)}$(!1)},eh=async e=>await i.resolver(V,i.context,eu(e||x.mount,p,i.criteriaMode,i.shouldUseNativeValidation)),eg=async e=>{let{errors:t}=await eh();if(e)for(let r of e){let i=m(t,r);i?C(d.errors,r,i):K(d.errors,r)}else d.errors=t;return t},ep=async(e,t,r={valid:!0})=>{for(let a in e){let s=e[a];if(s){let{_f:l,...n}=s;if(l){let u=x.array.has(l.name),o=await J(s,m(V,l.name),H,i.shouldUseNativeValidation,u);if(o[l.name]&&(r.valid=!1,t))break;t||(m(o,l.name)?u?U(d.errors,o,l.name):C(d.errors,l.name,o[l.name]):K(d.errors,l.name))}n&&await ep(n,t,r)}}return r.valid},ev=()=>{for(let e of x.unMount){let t=m(p,e);t&&(t._f.refs?t._f.refs.every(e=>!er(e)):!er(t._f.ref))&&eL(e)}x.unMount=new Set},eb=(e,t)=>(e&&t&&C(V,e,t),!Y(ex(),v)),eV=(e,t,r)=>A(e,x,{...F.mount?V:y(t)?v:w(e)?{[e]:t}:t},r),e_=t=>c(m(F.mount?V:v,t,e.shouldUnregister?m(v,t,[]):[])),ew=(e,t,r={})=>{let i=m(p,e),s=t;if(i){let n=i._f;n&&(n.disabled||C(V,e,el(t,n)),s=S&&Z(n.ref)&&l(t)?"":t,ee(n.ref)?[...n.ref.options].forEach(e=>e.selected=s.includes(e.value)):n.refs?a(n.ref)?n.refs.length>1?n.refs.forEach(e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(s)?!!s.find(t=>t===e.value):s===e.value)):n.refs[0]&&(n.refs[0].checked=!!s):n.refs.forEach(e=>e.checked=e.value===s):j(n.ref)?n.ref.value="":(n.ref.value=s,n.ref.type||M.watch.next({name:e})))}(r.shouldDirty||r.shouldTouch)&&ei(e,s,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&ek(e)},eA=(e,t,r)=>{for(let i in t){let a=t[i],l=`${e}.${i}`,n=m(p,l);!x.array.has(e)&&X(a)&&(!n||n._f)||s(a)?ew(l,a,r):eA(l,a,r)}},eF=(e,r,i={})=>{let a=m(p,e),s=x.array.has(e),n=k(r);C(V,e,n),s?(M.array.next({name:e,values:V}),(O.isDirty||O.dirtyFields)&&i.shouldDirty&&(d.dirtyFields=es(v,V),M.state.next({name:e,dirtyFields:d.dirtyFields,isDirty:eb(e,n)}))):!a||a._f||l(n)?ew(e,n,i):eA(e,n,i),T(e,x)&&M.state.next({}),M.watch.next({name:e}),F.mount||t()},eS=async e=>{let t=e.target,a=t.name,s=m(p,a),l=()=>t.type?en(s._f):o(e);if(s){let n,u;let f=l(),c=e.type===h.BLUR||e.type===h.FOCUS_OUT,y=!ed(s._f)&&!i.resolver&&!m(d.errors,a)&&!s._f.deps||ec(c,m(d.touchedFields,a),d.isSubmitted,R,q),g=T(a,x,c);C(V,a,f),c?(s._f.onBlur&&s._f.onBlur(e),r&&r(0)):s._f.onChange&&s._f.onChange(e);let v=ei(a,f,c,!1),_=!b(v)||g;if(c||M.watch.next({name:a,type:e.type}),y)return O.isValid&&P(),_&&M.state.next({name:a,...g?{}:v});if(!c&&g&&M.state.next({}),$(!0),i.resolver){let{errors:w}=await eh([a]),A=ef(d.errors,p,a),F=ef(w,p,A.name||a);n=F.error,a=F.name,u=b(w)}else(n=(await J(s,m(V,a),H,i.shouldUseNativeValidation))[a])?u=!1:O.isValid&&(u=await ep(p,!0));X(f)&&l()!==f?$(!1):(s._f.deps&&ek(s._f.deps),ea(a,u,n,v))}},ek=async(e,t={})=>{let r,a;let s=_(e);if($(!0),i.resolver){let l=await eg(y(e)?e:s);r=b(l),a=e?!s.some(e=>m(l,e)):r}else e?((a=(await Promise.all(s.map(async e=>{let t=m(p,e);return await ep(t&&t._f?{[e]:t}:t)}))).every(Boolean))||d.isValid)&&P():a=r=await ep(p);return M.state.next({...!w(e)||O.isValid&&r!==d.isValid?{}:{name:e},...i.resolver||!e?{isValid:r}:{},errors:d.errors,isValidating:!1}),t.shouldFocus&&!a&&E(p,e=>e&&m(d.errors,e),e?s:x.mount),a},ex=e=>{let t={...v,...F.mount?V:{}};return y(e)?t:w(e)?m(t,e):e.map(e=>m(t,e))},eD=(e,t)=>({invalid:!!m((t||d).errors,e),isDirty:!!m((t||d).dirtyFields,e),isTouched:!!m((t||d).touchedFields,e),error:m((t||d).errors,e)}),eO=e=>{e?_(e).forEach(e=>K(d.errors,e)):d.errors={},M.state.next({errors:d.errors})},eC=(e,t,r)=>{let i=(m(p,e,{_f:{}})._f||{}).ref;C(d.errors,e,{...t,ref:i}),M.state.next({name:e,errors:d.errors,isValid:!1}),r&&r.shouldFocus&&i&&i.focus&&i.focus()},eE=(e,t)=>N(e)?M.watch.subscribe({next:r=>e(eV(void 0,t),r)}):eV(e,t,!0),eL=(e,t={})=>{for(let r of e?_(e):x.mount)x.mount.delete(r),x.array.delete(r),m(p,r)&&(t.keepValue||(K(p,r),K(V,r)),t.keepError||K(d.errors,r),t.keepDirty||K(d.dirtyFields,r),t.keepTouched||K(d.touchedFields,r),i.shouldUnregister||t.keepDefaultValue||K(v,r));M.watch.next({}),M.state.next({...d,...t.keepDirty?{isDirty:eb()}:{}}),t.keepIsValid||P()},eT=(e,t={})=>{let r=m(p,e),a=B(t.disabled);return C(p,e,{...r||{},_f:{...r&&r._f?r._f:{ref:{name:e}},name:e,mount:!0,...t}}),x.mount.add(e),r?a&&C(V,e,t.disabled?void 0:m(V,e,en(r._f))):z(e,!0,t.value),{...a?{disabled:t.disabled}:{},...i.shouldUseNativeValidation?{required:!!t.required,min:eo(t.min),max:eo(t.max),minLength:eo(t.minLength),maxLength:eo(t.maxLength),pattern:eo(t.pattern)}:{},name:e,onChange:eS,onBlur:eS,ref(a){if(a){eT(e,t),r=m(p,e);let s=y(a.value)&&a.querySelectorAll&&a.querySelectorAll("input,select,textarea")[0]||a,l=et(s),n=r._f.refs||[];(l?n.find(e=>e===s):s===r._f.ref)||(C(p,e,{_f:{...r._f,...l?{refs:[...n.filter(er),s,...Array.isArray(m(v,e))?[{}]:[]],ref:{type:s.type,name:e}}:{ref:s}}}),z(e,!1,void 0,s))}else(r=m(p,e,{}))._f&&(r._f.mount=!1),(i.shouldUnregister||t.shouldUnregister)&&!(f(x.array,e)&&F.action)&&x.unMount.add(e)}}},eU=()=>i.shouldFocusError&&E(p,e=>e&&m(d.errors,e),x.mount),eB=(e,t)=>async r=>{r&&(r.preventDefault&&r.preventDefault(),r.persist&&r.persist());let a=!0,s=k(V);M.state.next({isSubmitting:!0});try{if(i.resolver){let{errors:l,values:n}=await eh();d.errors=l,s=n}else await ep(p);b(d.errors)?(M.state.next({errors:{},isSubmitting:!0}),await e(s,r)):(t&&await t({...d.errors},r),eU())}catch(u){throw a=!1,u}finally{d.isSubmitted=!0,M.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:b(d.errors)&&a,submitCount:d.submitCount+1,errors:d.errors})}},ej=(e,t={})=>{m(p,e)&&(y(t.defaultValue)?eF(e,m(v,e)):(eF(e,t.defaultValue),C(v,e,t.defaultValue)),t.keepTouched||K(d.touchedFields,e),t.keepDirty||(K(d.dirtyFields,e),d.isDirty=t.defaultValue?eb(e,m(v,e)):eb()),!t.keepError&&(K(d.errors,e),O.isValid&&P()),M.state.next({...d}))},eN=(r,i={})=>{let a=r||v,s=k(a),l=r&&!b(r)?s:v;if(i.keepDefaultValues||(v=a),!i.keepValues){if(i.keepDirtyValues||n)for(let u of x.mount)m(d.dirtyFields,u)?C(l,u,m(V,u)):eF(u,m(l,u));else{if(S&&y(r))for(let o of x.mount){let f=m(p,o);if(f&&f._f){let c=Array.isArray(f._f.refs)?f._f.refs[0]:f._f.ref;if(Z(c)){let h=c.closest("form");if(h){h.reset();break}}}}p={}}V=e.shouldUnregister?i.keepDefaultValues?k(v):{}:s,M.array.next({values:l}),M.watch.next({values:l})}x={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},F.mount||t(),F.mount=!O.isValid||!!i.keepIsValid,F.watch=!!e.shouldUnregister,M.state.next({submitCount:i.keepSubmitCount?d.submitCount:0,isDirty:i.keepDirty||i.keepDirtyValues?d.isDirty:!!(i.keepDefaultValues&&!Y(r,v)),isSubmitted:!!i.keepIsSubmitted&&d.isSubmitted,dirtyFields:i.keepDirty||i.keepDirtyValues?d.dirtyFields:i.keepDefaultValues&&r?es(v,r):{},touchedFields:i.keepTouched?d.touchedFields:{},errors:i.keepErrors?d.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},eM=(e,t)=>eN(N(e)?e(V):e,t),eq=(e,t={})=>{let r=m(p,e),i=r&&r._f;if(i){let a=i.refs?i.refs[0]:i.ref;a.focus&&(a.focus(),t.shouldSelect&&a.select())}};return N(i.defaultValues)&&i.defaultValues().then(e=>{eM(e,i.resetOptions),M.state.next({isLoading:!1})}),{control:{register:eT,unregister:eL,getFieldState:eD,_executeSchema:eh,_focusError:eU,_getWatch:eV,_getDirty:eb,_updateValid:P,_removeUnmounted:ev,_updateFieldArray:G,_getFieldArray:e_,_reset:eN,_subjects:M,_proxyFormState:O,get _fields(){return p},get _formValues(){return V},get _stateFlags(){return F},set _stateFlags(value){F=value},get _defaultValues(){return v},get _names(){return x},set _names(value){x=value},get _formState(){return d},set _formState(value){d=value},get _options(){return i},set _options(value){i={...i,...value}}},trigger:ek,register:eT,handleSubmit:eB,watch:eE,setValue:eF,getValues:ex,reset:eM,resetField:ej,clearErrors:eO,unregister:eL,setError:eC,setFocus:eq,getFieldState:eD}}(e,()=>n(e=>({...e}))),formState:r});let d=t.current.control;return d._options=e,!function(e){let t=i.useRef(e);t.current=e,i.useEffect(()=>{let r=!e.disabled&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}({subject:d._subjects.state,next(e){V(e,d._proxyFormState,!0)&&(d._formState={...d._formState,...e},n({...d._formState}))}}),i.useEffect(()=>{d._stateFlags.mount||(d._proxyFormState.isValid&&d._updateValid(),d._stateFlags.mount=!0),d._stateFlags.watch&&(d._stateFlags.watch=!1,d._subjects.state.next({})),d._removeUnmounted()}),i.useEffect(()=>{e.values&&!Y(e.values,d._defaultValues)&&d._reset(e.values,d._options.resetOptions)},[e.values,d]),i.useEffect(()=>{r.submitCount&&d._focusError()},[d,r.submitCount]),t.current.formState=v(r,d),t.current}}}]);