"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[994],{7401:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(2115);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:i,className:c="",children:u,iconNode:d,...h}=e;return(0,n.createElement)("svg",{ref:t,...a,width:o,height:o,stroke:r,strokeWidth:i?24*Number(l)/Number(o):l,className:s("lucide",c),...h},[...d.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(u)?u:[u]])}),i=(e,t)=>{let r=(0,n.forwardRef)((r,a)=>{let{className:i,...c}=r;return(0,n.createElement)(l,{ref:a,iconNode:t,className:s("lucide-".concat(o(e)),i),...c})});return r.displayName="".concat(e),r}},2104:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(7401).A)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]])},7725:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(7401).A)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]])},5683:(e,t,r)=>{r.d(t,{N:()=>y});var n=r(5155),o=r(2115),s=r(4710),a=r(9234),l=r(9656),i=r(7249);class c extends o.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,r=e instanceof HTMLElement&&e.offsetWidth||0,n=this.props.sizeRef.current;n.height=t.offsetHeight||0,n.width=t.offsetWidth||0,n.top=t.offsetTop,n.left=t.offsetLeft,n.right=r-n.width-n.left}return null}componentDidUpdate(){}render(){return this.props.children}}function u(e){let{children:t,isPresent:r,anchorX:s}=e,a=(0,o.useId)(),l=(0,o.useRef)(null),u=(0,o.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:d}=(0,o.useContext)(i.Q);return(0,o.useInsertionEffect)(()=>{let{width:e,height:t,top:n,left:o,right:i}=u.current;if(r||!l.current||!e||!t)return;l.current.dataset.motionPopId=a;let c=document.createElement("style");return d&&(c.nonce=d),document.head.appendChild(c),c.sheet&&c.sheet.insertRule('\n          [data-motion-pop-id="'.concat(a,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            ").concat("left"===s?"left: ".concat(o):"right: ".concat(i),"px !important;\n            top: ").concat(n,"px !important;\n          }\n        ")),()=>{document.head.removeChild(c)}},[r]),(0,n.jsx)(c,{isPresent:r,childRef:l,sizeRef:u,children:o.cloneElement(t,{ref:l})})}let d=e=>{let{children:t,initial:r,isPresent:s,onExitComplete:i,custom:c,presenceAffectsLayout:d,mode:m,anchorX:f}=e,p=(0,a.M)(h),g=(0,o.useId)(),y=(0,o.useCallback)(e=>{for(let t of(p.set(e,!0),p.values()))if(!t)return;i&&i()},[p,i]),v=(0,o.useMemo)(()=>({id:g,initial:r,isPresent:s,custom:c,onExitComplete:y,register:e=>(p.set(e,!1),()=>p.delete(e))}),d?[Math.random(),y]:[s,y]);return(0,o.useMemo)(()=>{p.forEach((e,t)=>p.set(t,!1))},[s]),o.useEffect(()=>{s||p.size||!i||i()},[s]),"popLayout"===m&&(t=(0,n.jsx)(u,{isPresent:s,anchorX:f,children:t})),(0,n.jsx)(l.t.Provider,{value:v,children:t})};function h(){return new Map}var m=r(5087);let f=e=>e.key||"";function p(e){let t=[];return o.Children.forEach(e,e=>{(0,o.isValidElement)(e)&&t.push(e)}),t}var g=r(5403);let y=e=>{let{children:t,custom:r,initial:l=!0,onExitComplete:i,presenceAffectsLayout:c=!0,mode:u="sync",propagate:h=!1,anchorX:y="left"}=e,[v,w]=(0,m.xQ)(h),E=(0,o.useMemo)(()=>p(t),[t]),k=h&&!v?[]:E.map(f),C=(0,o.useRef)(!0),b=(0,o.useRef)(E),S=(0,a.M)(()=>new Map),[x,M]=(0,o.useState)(E),[A,L]=(0,o.useState)(E);(0,g.E)(()=>{C.current=!1,b.current=E;for(let e=0;e<A.length;e++){let t=f(A[e]);k.includes(t)?S.delete(t):!0!==S.get(t)&&S.set(t,!1)}},[A,k.length,k.join("-")]);let T=[];if(E!==x){let e=[...E];for(let t=0;t<A.length;t++){let r=A[t],n=f(r);k.includes(n)||(e.splice(t,0,r),T.push(r))}"wait"===u&&T.length&&(e=T),L(p(e)),M(E);return}let{forceRender:R}=(0,o.useContext)(s.L);return(0,n.jsx)(n.Fragment,{children:A.map(e=>{let t=f(e),o=(!h||!!v)&&(E===A||k.includes(t));return(0,n.jsx)(d,{isPresent:o,initial:(!C.current||!!l)&&void 0,custom:o?void 0:r,presenceAffectsLayout:c,mode:u,onExitComplete:o?void 0:()=>{if(!S.has(t))return;S.set(t,!0);let e=!0;S.forEach(t=>{t||(e=!1)}),e&&(null==R||R(),L(b.current),h&&(null==w||w()),i&&i())},anchorX:y,children:e},t)})})}},5381:(e,t,r)=>{r.d(t,{E:()=>l});var n=r(4420),o=r(5403),s=r(3307),a=r(4707);function l(e,...t){let r=e.length;return function(e,t){let r=(0,n.d)(t()),a=()=>r.set(t());return a(),(0,o.E)(()=>{let t=()=>s.Gt.preRender(a,!1,!0),r=e.map(e=>e.on("change",t));return()=>{r.forEach(e=>e()),(0,s.WG)(a)}}),r}(t.filter(a.S),function(){let n="";for(let o=0;o<r;o++){n+=e[o];let r=t[o];r&&(n+=(0,a.S)(r)?r.get():r)}return n})}},4420:(e,t,r)=>{r.d(t,{d:()=>l});var n=r(2115),o=r(3250),s=r(7249),a=r(9234);function l(e){let t=(0,a.M)(()=>(0,o.OQ)(e)),{isStatic:r}=(0,n.useContext)(s.Q);if(r){let[,r]=(0,n.useState)(e);(0,n.useEffect)(()=>t.on("change",r),[])}return t}},405:(e,t,r)=>{r.d(t,{z:()=>d});var n=r(2115),o=r(9195),s=r(7249),a=r(5403),l=r(4420),i=r(4707),c=r(3307);function u(e){return"number"==typeof e?e:parseFloat(e)}function d(e,t={}){let{isStatic:r}=(0,n.useContext)(s.Q),h=(0,n.useRef)(null),m=(0,l.d)((0,i.S)(e)?u(e.get()):e),f=(0,n.useRef)(m.get()),p=(0,n.useRef)(()=>{}),g=()=>{y(),h.current=(0,o.L)({keyframes:[m.get(),f.current],velocity:m.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:p.current})},y=()=>{h.current&&h.current.stop()};return(0,n.useInsertionEffect)(()=>m.attach((e,t)=>r?t(e):(f.current=e,p.current=t,c.Gt.postRender(g),m.get()),y),[JSON.stringify(t)]),(0,a.E)(()=>{if((0,i.S)(e))return e.on("change",e=>m.set(u(e)))},[m]),m}},7113:(e,t,r)=>{r.d(t,{D:()=>u,N:()=>d});var n=r(2115),o=(e,t,r,n,o,s,a,l)=>{let i=document.documentElement,c=["light","dark"];function u(t){(Array.isArray(e)?e:[e]).forEach(e=>{let r="class"===e,n=r&&s?o.map(e=>s[e]||e):o;r?(i.classList.remove(...n),i.classList.add(t)):i.setAttribute(e,t)}),l&&c.includes(t)&&(i.style.colorScheme=t)}if(n)u(n);else try{let e=localStorage.getItem(t)||r,n=a&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;u(n)}catch(e){}},s=["light","dark"],a="(prefers-color-scheme: dark)",l="undefined"==typeof window,i=n.createContext(void 0),c={setTheme:e=>{},themes:[]},u=()=>{var e;return null!=(e=n.useContext(i))?e:c},d=e=>n.useContext(i)?n.createElement(n.Fragment,null,e.children):n.createElement(m,{...e}),h=["light","dark"],m=e=>{let{forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:o=!0,enableColorScheme:l=!0,storageKey:c="theme",themes:u=h,defaultTheme:d=o?"system":"light",attribute:m="data-theme",value:v,children:w,nonce:E,scriptProps:k}=e,[C,b]=n.useState(()=>p(c,d)),[S,x]=n.useState(()=>p(c)),M=v?Object.values(v):u,A=n.useCallback(e=>{let t=e;if(!t)return;"system"===e&&o&&(t=y());let n=v?v[t]:t,a=r?g(E):null,i=document.documentElement,c=e=>{"class"===e?(i.classList.remove(...M),n&&i.classList.add(n)):e.startsWith("data-")&&(n?i.setAttribute(e,n):i.removeAttribute(e))};if(Array.isArray(m)?m.forEach(c):c(m),l){let e=s.includes(d)?d:null,r=s.includes(t)?t:e;i.style.colorScheme=r}null==a||a()},[E]),L=n.useCallback(e=>{let t="function"==typeof e?e(C):e;b(t);try{localStorage.setItem(c,t)}catch(e){}},[C]),T=n.useCallback(e=>{x(y(e)),"system"===C&&o&&!t&&A("system")},[C,t]);n.useEffect(()=>{let e=window.matchMedia(a);return e.addListener(T),T(e),()=>e.removeListener(T)},[T]),n.useEffect(()=>{let e=e=>{e.key===c&&(e.newValue?b(e.newValue):L(d))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[L]),n.useEffect(()=>{A(null!=t?t:C)},[t,C]);let R=n.useMemo(()=>({theme:C,setTheme:L,forcedTheme:t,resolvedTheme:"system"===C?S:C,themes:o?[...u,"system"]:u,systemTheme:o?S:void 0}),[C,L,t,S,o,u]);return n.createElement(i.Provider,{value:R},n.createElement(f,{forcedTheme:t,storageKey:c,attribute:m,enableSystem:o,enableColorScheme:l,defaultTheme:d,value:v,themes:u,nonce:E,scriptProps:k}),w)},f=n.memo(e=>{let{forcedTheme:t,storageKey:r,attribute:s,enableSystem:a,enableColorScheme:l,defaultTheme:i,value:c,themes:u,nonce:d,scriptProps:h}=e,m=JSON.stringify([s,r,i,t,u,c,a,l]).slice(1,-1);return n.createElement("script",{...h,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?d:"",dangerouslySetInnerHTML:{__html:"(".concat(o.toString(),")(").concat(m,")")}})}),p=(e,t)=>{let r;if(!l){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},g=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},y=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")}}]);