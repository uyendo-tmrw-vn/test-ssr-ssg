(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(9143)}])},3412:function(e,t,a){"use strict";var i=a(5893),o=a(5700);let n=e=>{let{children:t}=e;return(0,i.jsx)(o.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"spring",stiffness:260,damping:20},children:t})};t.Z=n},4622:function(e,t,a){"use strict";a.d(t,{nS:function(){return o},hJ:function(){return i}});var i=JSON.parse('[{"id":1,"image":"/images/about/about-1.jpg","title":"Marketing Magazine’s, Agency of the Year Awards 2020","name":"Finalist","link":"#"},{"id":2,"image":"/images/about/about-2.jpg","title":"Marketing Magazine’s, MARKies Awards 2019","name":"Silver","link":"#"},{"id":3,"image":"/images/about/about-3.jpg","title":"Marketing Magazine’s, Marketing Excellence Awards 2018","name":"Gold","link":"#"},{"id":4,"image":"/images/about/about-4.jpg","title":"Mumbrella Asia Awards","name":"Winner","link":"#"}]'),o=JSON.parse('{"ArrText":["Jenny Fax 2023SS","lululemon AOYAMA OPENINg\'LOEWE x Night Tempo","TATRASANDRE","rurumu: 2023 SS","Onitsuka Tiger","HARE 2023 SS","lululemon “YOUR MOVE”","Azuma.2023 SS","lululemon Be You Be Well Festival Japan 2022","ATTACHMENT / VEIN 2023 SS","Maison MIHARA YASUHIRO 2023SS","KIDILL 2023 SS","Sakas PR 2022/23 PRESS PREVIEW","kotohayokozawa"],"ArrMedia":[{"type":"video","main_photo":"https://plankton.tokyo/wp/wp-content/uploads/2022/12/691811101.127480.mp4"},{"type":"image","main_photo":"https://plankton.tokyo/wp/wp-content/uploads/2022/11/5e25bce4d94eceb35855ac003dc72de4.jpg"},{"type":"image","main_photo":"https://plankton.tokyo/wp/wp-content/uploads/2022/11/a584f14ed4bba328941f595f30233682.jpg"},{"type":"image","main_photo":"https://plankton.tokyo/wp/wp-content/uploads/2022/11/DSC09524-1440x960.jpg"},{"type":"image","main_photo":"https://plankton.tokyo/wp/wp-content/uploads/2022/11/1011f10f49833bdaa7175a2a713c4ef2-1440x958.jpg"},{"type":"image","main_photo":"https://plankton.tokyo/wp/wp-content/uploads/2022/11/2W9A9968-1440x960.jpg"},{"type":"image","main_photo":"https://plankton.tokyo/wp/wp-content/uploads/2022/10/DSCF7515-1440x960.jpg"},{"type":"image","main_photo":"https://plankton.tokyo/wp/wp-content/uploads/2022/10/DSCF1325-1440x810.jpeg"},{"type":"image","main_photo":"https://plankton.tokyo/wp/wp-content/uploads/2022/10/f72a3645ff10baf868876411f4b28fd2-1440x961.jpg"},{"type":"image","main_photo":"https://plankton.tokyo/wp/wp-content/uploads/2022/08/BYBW-C_28-a-1440x959.jpg"},{"type":"image","main_photo":"https://plankton.tokyo/wp/wp-content/uploads/2022/07/a-01-1-1440x799.png"},{"type":"video","main_photo":"https://plankton.tokyo/wp/wp-content/uploads/2022/07/cdc517d368fb5672ef6018f4cc39f2d9.mp4"},{"type":"image","main_photo":"https://plankton.tokyo/wp/wp-content/uploads/2022/07/kidill23ss03-1440x814.jpg"},{"type":"image","main_photo":"https://plankton.tokyo/wp/wp-content/uploads/2022/07/LINE_ALBUM_220703_5.jpg"},{"type":"image","main_photo":"https://plankton.tokyo/wp/wp-content/uploads/2022/06/LINE_ALBUM_5.27_220530_2-1440x962.jpg"}]}')},9143:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return y}});var i=a(5893),o=a(7294),n=a(3877),l=a(1163),s=a(4622),r=a(2208);a(5675);var d=a(1664),c=a.n(d);a(3364);var p=a(3412),m=a(5700);a(1911);let u=e=>{let{listProject:t,eleHand:a}=e,{setVideoModal:d,videoModal:p,setLoading:u,isLoading:g}=(0,o.useContext)(r.Z),h=(0,l.useRouter)(),y=(0,o.useRef)(null),[v,w]=(0,o.useState)(s.nS.ArrText),[_,k]=(0,o.useState)(s.nS.ArrMedia),[f,x]=(0,o.useState)(!1),[j,S]=(0,o.useState)(!1),[N,b]=(0,o.useState)(!1),[E,A]=(0,o.useState)(null),M=(0,o.useRef)(null),L=e=>{d({isOpen:!0,videoUrl:e})},T=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return arguments.length>2&&arguments[2],(0,i.jsxs)("div",{id:"gallery-title-"+t,"data-title":t,className:"heading top-works-gallery-title title-id-".concat(e.id),children:[(0,i.jsx)("h2",{className:"heading__big",children:e.title}),(0,i.jsx)("div",{className:"heading__sub",children:e.location}),(0,i.jsxs)(c(),{className:"heading__img flex md:hidden",href:!0===e.hide_all_work?"/work":"/work/"+e.id,children:["Find Out More ",(0,i.jsx)("img",{src:"/images/contact/contact-arrow.png"})]})]},t)},R=(e,t,a,i)=>{if(window.innerWidth<768){let o=document.querySelectorAll(".top-works-gallery-title");if(o.length)for(let n=0;n<o.length;n++){let l=o[n];l.classList.remove("active")}let s=document.querySelectorAll(".gallery__item");if(s.length)for(let r=0;r<s.length;r++){let d=s[r];d.classList.remove("active")}i&&(document.querySelector('[data-item="'+i+'"]').classList.add("active"),document.querySelector('[data-title="'+i+'"]').classList.add("active"))}else h.push(!0===t?"/work":"/work/"+a)};(0,o.useEffect)(()=>{console.log({activeItem:E})},[E]);let C=e=>{if(e&&e.length)return console.log({data:e}),e&&e.length&&e.map((e,t)=>{var a,o,l,s,r,d,c;return(0,i.jsxs)("div",{"data-item":t,id:"gallery-item-"+t,className:"gallery__item item-id-".concat(e.id," image ").concat(N?"opacity-[1]":"opacity-[0]"),children:[(0,i.jsx)("div",{className:"drag-panel hover-zone","data-cursor":"drag"}),(0,i.jsx)("div",{className:"gallery__item-slide",children:(0,i.jsxs)("div",{className:"gallery__item-img",children:[(null===(a=e.main_photo)||void 0===a?void 0:a.isVideo)===!1&&(0,i.jsx)("div",{onMouseDown:a=>R(a,e.hide_all_work,e.slug,t),onTouchStart:a=>R(a,e.hide_all_work,e.slug,t),id:"gallery__item-img-"+t,"data-gtm-category":"Homepage","data-gtm-action":"Clicked_Homepage_Link","data-gtm-label":e.name,className:"btn-gtm gallery__item-link top-works-video-link gallery__item-imginner",children:(0,i.jsx)("img",{className:"hover-zone gallery__item-post ls-is-cached lazyloaded","data-cursor":"view",decoding:"async",alt:(null===(o=e.client)||void 0===o?void 0:o.name)||"ipossible","data-src":(null==e||null===(l=e.main_photo)||void 0===l||l.media_url,(null==e?void 0:null===(s=e.main_photo)||void 0===s?void 0:s.media_url)+"?quality=20"),src:(null==e||null===(r=e.main_photo)||void 0===r||r.media_url,(null==e?void 0:null===(d=e.main_photo)||void 0===d?void 0:d.media_url)+"?quality=20")})}),(null===(c=e.main_photo)||void 0===c?void 0:c.isVideo)===!0&&(0,i.jsx)("div",{className:"top-works-video-link video-wrap",children:(0,i.jsx)("video",{onClick(){var t;return L(null===(t=e.main_photo)||void 0===t?void 0:t.media_url)},ref:y,playsInline:!0,autoPlay:!0,muted:!0,loop:!0,src:(0,n.ef)(e.showreel_review),"data-type":"video/mp4",className:"works-video hover-zone gallery__item-post"})})]})})]},t+"asdf")})};(0,o.useEffect)(()=>{if("/"===h.pathname){let e=document.createElement("script");return e.src="/js/Plankton.js",e.async=!0,document.body.appendChild(e),()=>{document.body.removeChild(e),document.querySelector("html").className=""}}},[h]),(0,o.useEffect)(()=>{C(t),b(!0),setTimeout(()=>{x(!0)},1e3),setTimeout(()=>{S(!0)},3e3)},[]),(0,o.useEffect)(()=>{if(!1===a){var e,t;null===(e=document.querySelector("#gallery-title-1"))||void 0===e||e.classList.add("active"),null===(t=document.querySelector("#gallery-item-1"))||void 0===t||t.classList.add("active")}},[a]);let O=(0,o.useMemo)(()=>{if(t){let e=[].concat(t),a=[];for(let i=0;i<e.length;i++){var o;let l={title:null===(o=e[i].client)||void 0===o?void 0:o.name,location:(e[i].name&&" "!=e[i].location?e[i].name+", ":e[i].name)+e[i].location,id:e[i].id};a.push(l),(0,n.L3)(e[i])}return k(e),w(a),t&&C(e)}},[f]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(m.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"spring",stiffness:260,damping:20},id:"primary",className:"site-main home blog ".concat(j?"opacity-[1]":"opacity-[0]"),"data-barba":"wrapper","aria-live":"polite",children:[(0,i.jsxs)("div",{className:"site-main-inner","data-barba":"container","data-barba-namespace":"index",children:[(0,i.jsx)("div",{id:"top-works-gallery-title-wrap",className:"top-works-gallery-title-wrap","data-scroll-sticky":!0,"data-scroll-target":".data-inner","data-scroll":!0,children:v&&v.length&&v.map((e,t)=>T(e,t,""))}),(0,i.jsx)("div",{id:"data-container","data-scroll-container":!0,"data-horizontal":"true","data-scroll-section-id":"section0","data-scroll-section-inview":!0,children:(0,i.jsx)("div",{className:"data-inner",children:(0,i.jsx)("div",{className:"top-works-content",children:(0,i.jsx)("div",{id:"top-works-gallery",className:"top-works-gallery",ref:M,children:O})})})})]}),(0,i.jsx)("div",{id:"cursor",className:"has-default-icon"})]})})};var g=a(3033);a(3640),a(9290);let h=e=>{let{props:t,configResponse:a}=e,{listProject:n,resConfigData:s}=(0,o.useContext)(r.Z),[d,c]=(0,o.useState)(!0),[m,h]=(0,o.useState)(!1),y=(0,l.useRouter)();return(0,o.useEffect)(()=>{document.querySelector(".loading").style.visibility="visible",document.querySelector(".loading").style.opacity="1",document.querySelector(".loading").style.zIndex="1000"},[y]),(0,o.useEffect)(()=>{},[m]),(0,o.useEffect)(()=>{function e(e){h(!1)}return setTimeout(()=>{h(!0)},2e3),window.addEventListener("mousewheel",e),window.addEventListener("touchmove",e),window.addEventListener("click",e),()=>{window.removeEventListener("mousewheel",e),window.removeEventListener("touchmove",e)}},[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(p.Z,{children:[(0,i.jsx)(u,{eleHand:m,listProject:n}),m&&(0,i.jsx)("div",{className:"eleHand ",children:(0,i.jsx)("span",{className:"eleHandSpan",children:(0,i.jsx)("img",{alt:"swipe to start",src:"/images/arrow-swipe.png",className:""})})}),(0,i.jsx)(g.g,{})]})})};var y=h}},function(e){e.O(0,[911,675,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);