import{a as _,r as m,o as b,j as g,b as h,v as I,x as k,e as l,f,u as e,g as L,h as S,t as w}from"./vendor.fb95871b.js";import{a as j,g as R}from"./util.07c4ec7d.js";import x from"./LinkIcon.6d815ce8.js";import C from"./Title.4a1485ab.js";import{_ as E}from"./plugin-vue_export-helper.5a098b48.js";const B=["src","loading"],N=_({props:{src:String,loadInitially:Boolean,observerOptions:{type:Object,default:()=>({root:null,rootMargin:"200px 0px"})}},setup(n){const s=n,d=m(),i=m(!1),r=m(null),u=t=>{var o;t[0].isIntersecting&&((o=r.value)==null||o.disconnect(),i.value=!0)};return b(()=>{if(!s.loadInitially){if("loading"in HTMLImageElement.prototype){i.value=!0;return}return r.value=new IntersectionObserver(u,s.observerOptions),r.value.observe(d.value),()=>{var t;(t=r.value)==null||t.disconnect()}}}),(t,o)=>(g(),h("img",{src:i.value?s.src:"",ref:(c,a)=>{a.imgRef=c,d.value=c},loading:n.loadInitially?void 0:"lazy"},null,8,B))}});const O={class:"mini-web-card"},T={class:"mini-web-card-item-front"},U={class:"mini-web-card-item-behind"},D={class:"mini-web-card-link-container"},A=["href"],M=["href"],V=_({props:{cardSourceURL:String,directory:{type:String,default:"javascript"},href:String,cardName:String,cardIndex:Number},setup(n){const s=n,d="https://www.eveningwater.com/my-web-projects/",i="https://github.com/eveningwater/my-web-projects/tree/master/",{cardSourceURL:r,href:u,cardName:t,cardIndex:o}=I(s),c=m(null);return b(()=>{k(()=>{var p;const a=(p=c.value)==null?void 0:p.$el;j(a)?a.classList.add("mini-web-card-hover-title"):a.classList.remove("mini-web-card-hover-title")})}),(a,p)=>(g(),h("div",O,[l("div",T,[f(N,{src:e(R)(n.directory,e(r)),alt:"\u56FE\u7247\u52A0\u8F7D\u4E2D",class:"mini-web-card-img"},null,8,["src"])]),l("div",U,[f(e(C),{level:"2",class:"mini-web-card-title","data-title":e(t),ref:(v,y)=>{y.titleContainer=v,c.value=v}},{default:L(()=>[S(w(e(o)+1)+"."+w(e(t)),1)]),_:1},8,["data-title"]),l("div",D,[l("a",{href:d+e(u),target:"_blank",rel:"noopener noreferrer",class:"mini-web-card-link"},[f(e(x))],8,A),l("a",{href:i+e(u),target:"_blank",rel:"noopener noreferrer",class:"mini-web-card-link"},[f(e(x),{type:"githubDProp"})],8,M)])])]))}});var q=E(V,[["__scopeId","data-v-9ac0dfb4"]]);export{q as default};