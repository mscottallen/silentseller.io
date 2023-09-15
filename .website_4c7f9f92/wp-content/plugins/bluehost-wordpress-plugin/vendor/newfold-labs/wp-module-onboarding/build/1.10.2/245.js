"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[245],{9291:(e,t,a)=>{a.d(t,{L:()=>i,Y:()=>o.Z});var o=a(35),l=a(9307),r=a(682);const i=()=>(0,l.createElement)("div",{className:"image-upload-loader--loading-box"},(0,l.createElement)(r.Z,{type:"load",className:"image-upload-loader--loading-box__loader"}))},676:(e,t,a)=>{a.d(t,{Z:()=>w});var o=a(9307),l=a(5736),r=a(5609),i=a(9818),n=a(9250),s=a(7533),c=a(6831),d=a(8395),u=a(2200),m=a(7207),p=a(6342);const w=(0,o.memo)((e=>{let{callback:t=!1}=e;const a=(0,n.s0)(),w=(0,n.TH)(),{nextStep:v,currentData:h,socialData:_}=(0,i.useSelect)((e=>({nextStep:e(c.h).getNextStep(),currentData:e(c.h).getCurrentOnboardingData(),socialData:e(c.h).getOnboardingSocialData()})),[]),g=null===v||!1===v,{setOnboardingSocialData:b}=(0,i.useDispatch)(c.h);async function f(e){if(h){if(h.isComplete=(new Date).getTime(),null!=e&&e.includes("basic-info")){const e=await async function(){const e=await(0,d.Gw)(),t=await(0,d.I2)(_);return null!==(null==t?void 0:t.error)?null==e?void 0:e.body:null==t?void 0:t.body}();e&&b(e),await m.v.dispatchEvents(p.En)}(0,s.kB)(h)}const t="ecommerce"===window.nfdOnboarding.currentFlow?u.br:u.hF;window.location.replace(t)}return g?(0,o.createElement)(r.Button,{className:"skip-button",onClick:()=>f(w.pathname)},(0,l.__)("Skip this Step","wp-module-onboarding")):(0,o.createElement)(r.Button,{className:"skip-button",onClick:()=>("function"==typeof t&&t(),void a(v.path))},(0,l.__)("Skip this Step","wp-module-onboarding"))}))},9245:(e,t,a)=>{a.r(t),a.d(t,{default:()=>P});var o=a(9307),l=a(5634),r=a(4316),i=a(9818),n=a(7798),s=a(5736),c=a(1392);const d=()=>({heading:(0,s.sprintf)(
/* translators: %s: website or store */
(0,s.__)("Introduce us to this %s","wp-module-onboarding"),(0,c.I)("website")),subheading:(0,s.__)("So we can introduce it to the web","wp-module-onboarding"),siteTitle:{title:(0,s.sprintf)(
/* translators: 1: site */
(0,s.__)("%s Title","wp-module-onboarding"),(0,c.I)("Site")),placeholder:(0,s.sprintf)(
/* translators: 1: site */
(0,s.__)("WordPress %s","wp-module-onboarding"),(0,c.I)("Site")),hint:(0,s.__)("Shown to visitors, search engine and social media posts.","wp-module-onboarding"),maxCharacters:(0,s.__)("80","wp-module-onboarding")},siteDesc:{title:(0,s.sprintf)(
/* translators: 1: site */
(0,s.__)("%s Description","wp-module-onboarding"),(0,c.I)("Site")),placeholder:(0,s.sprintf)(
/* translators: 1: site */
(0,s.__)("Just another WordPress %s.","wp-module-onboarding"),(0,c.I)("Site")),hint:(0,s.sprintf)(
/* translators: 1: site */
(0,s.__)("Tell people who you are, what you sell and why they should visit your %s.","wp-module-onboarding"),(0,c.I)("site")),maxCharacters:(0,s.__)("160","wp-module-onboarding")},error:{title:(0,s.__)("Error Saving Data, Try Again!","wp-module-onboarding")}}),u=(0,o.memo)((e=>{let{title:t,hint:a,placeholder:l,height:r,maxCharacters:i,textValue:n,textValueSetter:c}=e;const d=(0,o.useRef)(null),[u,m]=(0,o.useState)("nfd-input__field");return(0,o.useEffect)((()=>{d.current.style.height=r;const e=d.current.scrollHeight;d.current.style.height=e+"px"}),[n]),(0,o.createElement)("div",{className:"nfd-input"},(0,o.createElement)("label",null,(0,o.createElement)("div",{className:"nfd-input__label"},(0,o.createElement)("p",{className:"nfd-input__label_title"},(0,s.__)(t,"wp-module-onboarding")),(0,o.createElement)("p",{className:"nfd-input__label_maxChar"},`(${i-(null==n?void 0:n.length)} characters left)`)),(0,o.createElement)("textarea",{type:"text",className:u,ref:d,style:{height:r},placeholder:l,value:n,maxLength:i,onChange:e=>(e=>{e.preventDefault(),c(e.target.value),e.target.value.length==i?m("nfd-input__field nfd-input__field_error"):m("nfd-input__field")})(e)}),(0,o.createElement)("p",{className:"nfd-input__hint"},(0,s.__)(a,"wp-module-onboarding"))))}));var m=a(676),p=a(6831);const w=(0,o.memo)((e=>{let{title:t,desc:a,icon:l,isSocialFormOpen:r,setIsSocialFormOpen:n}=e;const d={defaultTitle:(0,s.sprintf)(
/* translators: %s: Site */
(0,s.__)("WordPress %s","wp-module-onboarding"),(0,c.I)("Site")),defaultDesc:(0,s.sprintf)(
/* translators: %s: Site */
(0,s.__)("Just another WordPress %s","wp-module-onboarding"),(0,c.I)("Site")),defaultUrl:"https://bluehost.com"},u=""===t?d.defaultTitle:t,m=""===a?d.defaultDesc:a,w=""===t?d.defaultUrl:`https://${null==t?void 0:t.toLowerCase().replace(/\s/g,"").replace(/\W/g,"")}.com`,[v,h]=(0,o.useState)(""),[_,g]=(0,o.useState)(""),[b,f]=(0,o.useState)(""),[E,N]=(0,o.useState)(""),[y,k]=(0,o.useState)(""),[S,D]=(0,o.useState)(""),[T,x]=(0,o.useState)(""),{socialDataStore:O}=(0,i.useSelect)((e=>({socialDataStore:e(p.h).getOnboardingSocialData()})),[]);(0,o.useEffect)((()=>{var e,t,a,o,l;if(h(null!==(e=null==O?void 0:O.facebook_site)&&void 0!==e?e:""),g(null!==(t=null==O?void 0:O.twitter_site)&&void 0!==t?t:""),f(null!==(a=null==O?void 0:O.instagram_url)&&void 0!==a?a:""),N(null!==(o=null==O?void 0:O.youtube_url)&&void 0!==o?o:""),k(null!==(l=null==O?void 0:O.linkedin_url)&&void 0!==l?l:""),O&&Object.keys(O).includes("other_social_urls")){const e=O.other_social_urls;var r,i;Object.keys(e).includes("yelp_url")&&D(null!==(r=e.yelp_url)&&void 0!==r?r:""),Object.keys(e).includes("tiktok_url")&&x(null!==(i=e.tiktok_url)&&void 0!==i?i:"")}}),[O]);const I=e=>{let t;try{t=new URL(e)}catch(e){return!1}return"http:"===t.protocol||"https:"===t.protocol},L=[{url:v,image:"var(--facebook-icon)"},{url:_,image:"var(--twitter-icon)"},{url:b,image:"var(--instagram-icon)"},{url:E,image:"var(--youtube-icon)"},{url:y,image:"var(--linkedin-icon)"},{url:S,image:"var(--yelp-icon)"},{url:T,image:"var(--tiktok-icon)"}];return(0,o.createElement)("div",null,(0,o.createElement)("h4",{className:"mini-preview"},"Preview"),(0,o.createElement)("div",{className:"browser-container"},(0,o.createElement)("div",{className:"browser-row-title"},(0,o.createElement)("div",{className:"browser-row-title_main"},(0,o.createElement)("div",{className:"browser-row-title_buttons"},(0,o.createElement)("span",{className:"browser-dot",style:{background:"#ED594A"}}),(0,o.createElement)("span",{className:"browser-dot",style:{background:"#FDD800"}}),(0,o.createElement)("span",{className:"browser-dot",style:{background:"#5AC05A"}}))),(0,o.createElement)("div",{className:"browser-row-title_bar"},(0,o.createElement)("div",{className:"browser-row-title_bar_before"},(0,o.createElement)("div",{className:"browser-row-title_bar_before-curve"})),(0,o.createElement)("div",{className:"browser-row-title_bar_main"},(void 0===l||0===(null==l?void 0:l.id))&&(0,o.createElement)("div",{className:"browser-icon-title",style:{content:"var(--default-logo-icon)"}}),void 0!==l&&0!==(null==l?void 0:l.id)&&(0,o.createElement)("img",{className:"browser-icon-title",src:null==l?void 0:l.url,alt:"Thumb"}),(0,o.createElement)("div",{className:"browser-row-title_bar_main-text"},null==u?void 0:u.substring(0,20)),(0,o.createElement)("div",{className:"browser-row-title_bar_main-cross"},"x")),(0,o.createElement)("div",{className:"browser-row-title_bar_after"},(0,o.createElement)("div",{className:"browser-row-title_bar_after-curve"})))),(0,o.createElement)("div",{className:"browser-row-search"},(0,o.createElement)("div",{className:"browser-row-search__icons"},(0,o.createElement)("div",{className:"browser-icon",style:{backgroundImage:"var(--back-icon)"}}),(0,o.createElement)("div",{className:"browser-icon",style:{backgroundImage:"var(--forward-icon)"}}),(0,o.createElement)("div",{className:"browser-icon",style:{backgroundImage:"var(--reload-icon)"}})),(0,o.createElement)("div",{className:"browser-row-search__search-box"},(0,o.createElement)("input",{className:"browser-row-search__search-box_input",type:"text",onChange:()=>{},value:w})),(0,o.createElement)("div",{className:"browser-row-search__more"},(0,o.createElement)("div",{className:"browser-icon",style:{backgroundImage:"var(--more-icon)"}}))),(0,o.createElement)("div",{className:"browser-content"},(0,o.createElement)("div",{className:"browser-content_top-row"},(0,o.createElement)("h4",{className:"browser-content_top-row-name"},u),(0,o.createElement)("span",{className:"browser-content_top-row-link"},w)),(0,o.createElement)("h5",{className:"browser-content_desc"},m),(0,o.createElement)("div",{className:"browser-content_social"},L.map(((e,t)=>(0,o.createElement)("div",{key:e.image,tabIndex:t+1,role:"button",onClick:()=>n(!r),onKeyDown:()=>n(!r),className:`browser-content_social_icon ${e.url?I(e.url)||"--invalid-url":"--no-url"}`,style:{backgroundImage:e.image}})))))))}));var v=a(682),h=a(8395),_=a(9291),g=a(6329),b=a(4704),f=a(6989),E=a.n(f);const N=(0,o.memo)((e=>{let{icon:t,iconSetter:a}=e;const l=(0,o.useRef)(null),[r,i]=(0,o.useState)(!1),[n,c]=(0,o.useState)(!1);async function d(e){if(e){i(!0);const l=await async function(e){const t=await function(e){return new Promise(((t,a)=>{const o=new FileReader;o.addEventListener("loadend",(e=>t(e.target.result))),o.addEventListener("error",a),o.readAsArrayBuffer(e)}))}(e),a={"Content-Type":"image/png"};return a["Content-Disposition"]="attachment; filename="+e.name,await(0,g.D)(E()({url:(0,b.$L)("media"),method:"POST",headers:a,body:t}))}(e);if(l){var t,o;const e=null==l||null===(t=l.body)||void 0===t?void 0:t.id,r=null==l||null===(o=l.body)||void 0===o?void 0:o.source_url;a({id:e,url:r})}}i(!1)}return(0,o.createElement)("div",{className:"image-uploader"},(0,o.createElement)("h4",{className:"image-uploader_heading"},"Logo"),r?(0,o.createElement)("div",{className:"image-uploader_window"},(0,o.createElement)(_.L,null)):(0,o.createElement)("div",{className:`image-uploader_window ${n&&"image-uploader_window--on-drag"}`,onDrop:e=>(e=>{var t,a,o,l,r;e.preventDefault(),e.stopPropagation(),c(!1),null!=e&&null!==(t=e.dataTransfer)&&void 0!==t&&t.files&&(null==e||null===(a=e.dataTransfer)||void 0===a?void 0:a.files.length)>0&&"image"===(null==e||null===(o=e.dataTransfer)||void 0===o||null===(l=o.files[0])||void 0===l?void 0:l.type.split("/")[0])&&d(null==e||null===(r=e.dataTransfer)||void 0===r?void 0:r.files[0])})(e),onDragOver:e=>(e=>{e.preventDefault(),e.stopPropagation(),c(!0)})(e),onDragEnter:e=>(e=>{e.preventDefault(),e.stopPropagation(),c(!0)})(e),onDragLeave:e=>(e=>{e.preventDefault(),e.stopPropagation(),c(!1)})(e)},(0,o.createElement)("div",{className:"image-uploader_window-empty"}),(0,o.createElement)("div",{className:"image-uploader_window-logo"},(void 0===t||0===(null==t?void 0:t.id))&&(0,o.createElement)("div",{className:"image-uploader_window-logo-icon-empty"}),0!==(null==t?void 0:t.id)&&void 0!==(null==t?void 0:t.id)&&(0,o.createElement)("img",{className:"image-uploader_window-logo-icon-selected",src:null==t?void 0:t.url,alt:"Thumb"})),(0,o.createElement)("div",{className:"image-uploader_window-reset"},void 0!==t&&0!==(null==t?void 0:t.id)&&(0,o.createElement)("button",{className:"image-uploader_window-reset-btn",onClick:()=>{var e;a({id:0,url:""}),(null==l||null===(e=l.current)||void 0===e?void 0:e.files.length)>0&&(l.current.value="")}},(0,s.__)("RESET","wp-module-onboarding")),(void 0===t||0===(null==t?void 0:t.id))&&(0,o.createElement)("button",{className:"image-uploader_window-reset-btn",onClick:()=>{null==l||l.current.click()}},(0,s.__)("UPLOAD","wp-module-onboarding")),(0,o.createElement)("input",{className:"image-uploader_window-select-btn",accept:"image/*",type:"file",ref:l,onChange:e=>{var t,a,o;null!=e&&null!==(t=e.target)&&void 0!==t&&t.files&&(null==e||null===(a=e.target)||void 0===a?void 0:a.files.length)>0&&d(null==e||null===(o=e.target)||void 0===o?void 0:o.files[0])}}))))}));var y=a(9196);const k=e=>{let t;const[a,l]=(0,y.useState)(!0);return"hide"==e.content?(0,o.createElement)("div",null,e.children):(0,o.createElement)("div",{className:"Tooltip-Wrapper",onMouseEnter:()=>{t=setTimeout((()=>{l(!0)}),e.delay||400)},onMouseLeave:()=>{clearInterval(t),l(!1)}},e.children,a&&(0,o.createElement)("div",{className:`Tooltip-Tip ${e.direction||"top"}`},e.content))};var S=a(5087);const D=new Set(["twitter","instagram","youtube"]),T=(e,t)=>{const a=new RegExp(/goo\.gl.*|bit\.ly.*|buff\.ly.*|tinyurl\.com.*|bl\.ink.*|short\.io.*|ow\.ly.*|is\.gd.*|adf\.ly.*|bit\.do.*|t\.co.*|clk\.sh.*|gplinks\.in.*|tiny\.cc.*|wp\.me.*/gi),o=new RegExp(/.*www\./gi),l=new RegExp(/https?:\/\//gi),r=new RegExp(/((https?:\/\/(?:www\.|(?!www)))?[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi);if(e.match(a)){const a=e.match(o),r=e.match(l);return a||r||(e="https://www."+e),t.error=S.i.AD_LINK_ERROR,t.url=e,t}const i=e.match(r);if(!i)return t.error=S.i.INVALID_LINK_ERROR,t.url=e,t;let n=i[0];const s=i[0].match(o),c=i[0].match(l);return n.match(new RegExp(/http:/gi))&&(n=n.replace(/http:/gi,"https:")),s||c?!s&&c?n=n.replace(/https?:\/\//gi,"https://www."):s&&!c&&(n="https://"+n):n="https://www."+n,t.url=n,t.error=S.i.NONE,t},x=e=>!!e.match("^@?[A-Za-z0-9_]{1,25}$");var O=a(9250),I=a(5609);const L=e=>{let{showModal:t,setShowModal:a,modalTitle:l,modalText:r}=e;const n=(0,O.s0)(),{navErrorModalPath:c}=(0,i.useSelect)((e=>({navErrorModalPath:e(p.h).getNavErrorPath()})),[]),{showNavErrorDialog:d,resetNavError:u}=(0,i.useDispatch)(p.h),m=()=>{u(),d(!0),a(!1)};return(0,o.createElement)(o.Fragment,null,t&&(0,o.createElement)(I.Modal,{title:l,onRequestClose:()=>m()},(0,o.createElement)("p",null,r),(0,o.createElement)(I.ButtonGroup,{className:"nfd-onboarding-etw__buttons"},(0,o.createElement)(I.Button,{variant:"secondary",onClick:()=>m()},(0,s.__)("Edit URLs","wp-module-onboarding")),(0,o.createElement)(I.Button,{variant:"primary",onClick:()=>{u(),n(c)}},(0,s.__)("Proceed Anyways","wp-module-onboarding")))))},R=e=>{let{socialData:t,setSocialData:a,isSocialFormOpen:l,setIsSocialFormOpen:r}=e;const n={heading:(0,s.__)("Social Media","wp-module-onboarding"),modals:{shortUrl:{modalTitle:(0,s.__)("It looks like you're using a URL shortener!","wp-module-onboarding"),modalText:(0,s.__)("That's smart, but we encourage you to enter the standard URL for your social profiles to help search engines know this website is associated with your profile using Yoast's Open Graph support. You can always change the URLs used within your site to trackable in the future.","wp-module-onboarding")},invalidUrl:{modalTitle:(0,s.__)("One of those URLs doesn't look like a social media URL.","wp-module-onboarding"),modalText:(0,s.__)("We recommend using your official social URL to help search engines know this website is associated with your profile using Yoast's Open Graph support. You can always change the URLs used within your site in the future.","wp-module-onboarding")}},errorText:{adLinkErrorText:(0,s.__)("That's clever! Short URLs are a great way to track clicks. However, To help build your social graph, we need the full URLs to your social profiles. You can go into your menus and change your social icon links after setup.","wp-module-onboarding"),invalidLinkErrorText:(0,s.__)("To help build your social graph, we need the full URLs to your social profiles. Please check your URLs for typos and try copy & paste with the official URL if you continue to see this error.","wp-module-onboarding")}},[c,d]=(0,o.useState)(""),[u,m]=(0,o.useState)(""),[w,v]=(0,o.useState)(""),[h,_]=(0,o.useState)(""),[g,b]=(0,o.useState)(""),[f,E]=(0,o.useState)(""),[N,y]=(0,o.useState)(""),[O,I]=(0,o.useState)(!1),[R,C]=(0,o.useState)([]),[A,U]=(0,o.useState)(Object),{showNavErrorDialog:P,setOnboardingSocialData:M,resetNavError:F}=(0,i.useDispatch)(p.h),{navErrorModalPath:K}=(0,i.useSelect)((e=>({navErrorModalPath:e(p.h).getNavErrorPath()})),[]),Z={FACEBOOK:{id:"facebook",value:c},TWITTER:{id:"twitter",value:u},INSTAGRAM:{id:"instagram",value:w},YOUTUBE:{id:"youtube",value:h},LINKEDIN:{id:"linkedin",value:g},YELP:{id:"yelp",value:f},TIKTOK:{id:"tiktok",value:N}};(0,o.useEffect)((()=>{""!==K&&I(!0)}),[K]),(0,o.useEffect)((()=>{var e,a,o,l,r;if(d(null!==(e=null==t?void 0:t.facebook_site)&&void 0!==e?e:""),m(null!==(a=null==t?void 0:t.twitter_site)&&void 0!==a?a:""),v(null!==(o=null==t?void 0:t.instagram_url)&&void 0!==o?o:""),_(null!==(l=null==t?void 0:t.youtube_url)&&void 0!==l?l:""),b(null!==(r=null==t?void 0:t.linkedin_url)&&void 0!==r?r:""),t&&Object.keys(t).includes("other_social_urls")){var i,n;const e=t.other_social_urls;Object.keys(e).includes("yelp_url")&&E(null!==(i=e.yelp_url)&&void 0!==i?i:""),Object.keys(e).includes("tiktok_url")&&y(null!==(n=e.tiktok_url)&&void 0!==n?n:"")}}),[t]);const V=(e,o)=>{switch(o){case Z.FACEBOOK.id:d(e),t.facebook_site=e;break;case Z.TWITTER.id:m(e),t.twitter_site=e;break;case Z.INSTAGRAM.id:v(e),t.instagram_url=e;break;case Z.YOUTUBE.id:_(e),t.youtube_url=e;break;case Z.LINKEDIN.id:b(e),t.linkedin_url=e;break;case Z.YELP.id:E(e),t.other_social_urls={...t.other_social_urls},t.other_social_urls.yelp_url=e;break;case Z.TIKTOK.id:y(e),t.other_social_urls={...t.other_social_urls},t.other_social_urls.tiktok_url=e}M(t),a(t)},B=()=>{let e=S.i.NONE;for(const t in A)A[t]!==S.i.NONE&&(e=A[t]);return e},j=e=>{const t=e.target.value,a=e.target.id,o=((e,t)=>{const a={url:t,error:S.i.NONE};if(""===t)return a;if(!D.has(e))return T(t,a);switch(e){case"twitter":return((e,t)=>x(e)?("@"===e.charAt(0)&&(e=e.substr(1)),t.url="https://www.twitter.com/"+e,t):T(e,t))(t,a);case"instagram":return((e,t)=>x(e)?("@"===e.charAt(0)&&(e=e.substr(1)),t.url="https://www.instagram.com/"+e,t):T(e,t))(t,a);case"youtube":return((e,t)=>x(e)?(t.url="https://www.youtube.com/"+e,t):T(e,t))(t,a)}})(a,t);A[a]=o.error,U(A),((e,t)=>{if(t)R.includes(e)||C([...R,e]);else{const t=R.filter((function(t){return t!==e}));C(t)}})(a,o.error!==S.i.NONE),B()!==S.i.NONE?P(!0):F(),V(o.url,a)};return(0,o.createElement)("div",{className:"social-form"},O&&(()=>{switch(B()){case S.i.AD_LINK_ERROR:return(0,o.createElement)(L,{showModal:O,setShowModal:I,modalTitle:n.modals.shortUrl.modalTitle,modalText:n.modals.shortUrl.modalText});case S.i.INVALID_LINK_ERROR:return(0,o.createElement)(L,{showModal:O,setShowModal:I,modalTitle:n.modals.invalidUrl.modalTitle,modalText:n.modals.invalidUrl.modalText});default:return null}})(),(0,o.createElement)("div",{role:"button",tabIndex:0,onKeyDown:()=>r(!l),className:"social-form__top-row",onClick:()=>r(!l)},(0,o.createElement)("div",{className:"social-form__top-row_heading"},n.heading),(0,o.createElement)("div",{className:"social-form__top-row_icon "+(l?"social-form__top-row_icon_opened":"")})),(0,o.createElement)("form",{className:l?"social-form__main-active":"social-form__main-hidden"},Object.keys(Z).map((e=>{return(0,o.createElement)("div",{key:Z[e].id},(0,o.createElement)("label",{htmlFor:Z[e].id,className:`social-form__label social-form__label-${Z[e].id}`},(0,o.createElement)("div",{className:"social-form__label_icon",style:{backgroundImage:`var(--${Z[e].id}-icon)`}}),(0,o.createElement)("div",{className:"social-form__label_name"},Z[e].id.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})))),(0,o.createElement)(k,{content:R.includes(Z[e].id)?(t=Z[e].id,"ad-link-error"===A[t]?n.errorText.adLinkErrorText:n.errorText.invalidLinkErrorText):"hide",direction:Z[e].id===Z.TIKTOK.id?"top":"bottom"},(0,o.createElement)("input",{className:R.includes(Z[e].id)?"social-form__box-error":"social-form__box",type:"url",id:`${Z[e].id}`,value:Z[e].value,onChange:e=>{(e=>{const t=e.target.value,a=e.target.id;V(t,a)})(e)},onBlur:e=>j(e)})));var t}))))},C=()=>{const e=(0,o.useRef)(null),[t,a]=(0,o.useState)(),[l,r]=(0,o.useState)(!1),[s,c]=(0,o.useState)(),[_,g]=(0,o.useState)(""),[b,f]=(0,o.useState)(""),[E,y]=(0,o.useState)(),[k,S]=(0,o.useState)(),[D,T]=(0,o.useState)(!1),{setOnboardingSocialData:x,setCurrentOnboardingData:O}=(0,i.useDispatch)(p.h),{editEntityRecord:I}=(0,i.useDispatch)(n.store),{getEditedEntityRecord:L}=(0,i.useSelect)((e=>e(n.store)),[]),{currentData:C}=(0,i.useSelect)((e=>({currentData:e(p.h).getCurrentOnboardingData()})),[]),A=d();return(0,o.useEffect)((()=>{D&&e.current.scrollIntoView()}),[D]),(0,o.useEffect)((()=>{var e,o,i,n,s;l||async function(){const e=await(0,h.Gw)();S(null==e?void 0:e.body),a(C),c(t),r(!0),x(null==e?void 0:e.body)}(),L("root","site"),l&&(y(null==t||null===(e=t.data)||void 0===e?void 0:e.siteLogo),g(null!==(o=null==t||null===(i=t.data)||void 0===i?void 0:i.blogName)&&void 0!==o?o:""),f(null!==(n=null==t||null===(s=t.data)||void 0===s?void 0:s.blogDescription)&&void 0!==n?n:""))}),[l]),(0,o.useEffect)((()=>{const e=setTimeout((()=>{l&&c({data:{siteLogo:E,blogName:_,blogDescription:b,socialData:k}})}),600);return()=>{clearTimeout(e)}}),[_,b,E,k]),(0,o.useEffect)((()=>{s&&(async()=>{var e,t,a;const o=C;var l,r,i;o.data.siteLogo=null!==(e=s.data.siteLogo)&&void 0!==e?e:o.data.siteLogo,o.data.blogName=null!==(t=s.data.blogName)&&void 0!==t?t:o.data.blogName,o.data.blogDescription=null!==(a=s.data.blogDescription)&&void 0!==a?a:o.data.blogDescription,l=o.data.siteLogo,r=o.data.blogName,i=o.data.blogDescription,I("root","site",void 0,{site_logo:null!=l&&l.id?l.id:null,description:i,title:r}),O(o)})()}),[s]),(0,o.createElement)(v.Z,{type:"fade-in-disabled",after:"object"==typeof t&&"object"==typeof k},(0,o.createElement)("div",{className:"basic-info"},(0,o.createElement)("div",{className:"basic-info-form"},(0,o.createElement)("div",{className:"basic-info-form__left"},(0,o.createElement)(u,{title:A.siteTitle.title,hint:A.siteTitle.hint,placeholder:A.siteTitle.placeholder,maxCharacters:A.siteTitle.maxCharacters,height:"47px",textValue:_,textValueSetter:g}),(0,o.createElement)(u,{title:A.siteDesc.title,hint:A.siteDesc.hint,placeholder:A.siteDesc.placeholder,maxCharacters:A.siteDesc.maxCharacters,height:"100px",textValue:b,textValueSetter:f}),(0,o.createElement)("div",{ref:e},(0,o.createElement)(R,{socialData:k,setSocialData:S,isSocialFormOpen:D,setIsSocialFormOpen:T}))),(0,o.createElement)("div",{className:"basic-info-form__right"},(0,o.createElement)(N,{icon:E,iconSetter:y}),(0,o.createElement)(w,{icon:E,title:_,desc:b,isSocialFormOpen:D,setIsSocialFormOpen:T}))),(0,o.createElement)(m.Z,null)))};var A=a(2200),U=a(4333);const P=()=>{const e=(0,U.useViewportMatch)("medium"),{setIsDrawerOpened:t,setDrawerActiveView:a,setSidebarActiveView:n,setIsDrawerSuppressed:s,setIsHeaderNavigationEnabled:c}=(0,i.useDispatch)(p.h),u=d();return(0,o.useEffect)((()=>{e&&t(!0),n(A.Jq),s(!1),a(A.tM),c(!0)}),[]),(0,o.createElement)(l.Z,{isVerticallyCentered:!0},(0,o.createElement)(r.Z,{title:u.heading,subtitle:u.subheading}),(0,o.createElement)(C,null))}}}]);