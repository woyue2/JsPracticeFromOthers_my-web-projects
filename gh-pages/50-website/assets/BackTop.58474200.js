import{b as k,o as T,d as p,r as m,e as B}from"./util.9dac1be4.js";import C from"./LinkIcon.59ce60a7.js";import{_ as w}from"./plugin-vue_export-helper.5a098b48.js";import{a as x,c as d,r as s,C as j,o as E,b as H,D as I,B as N,E as S,u as l,j as $,f as D}from"./vendor.1d9c586e.js";const q=x({props:{target:String,right:{type:Number,default:15},bottom:{type:Number,default:28},visibilityHeight:{type:Number,default:200}},emits:["on-top"],setup(v,{emit:f}){const o=v,b=d(()=>`${o.right}px`),_=d(()=>`${o.bottom}px`),e=s(null),t=s(null),n=s(!1),r=()=>{n.value=e.value.scrollTop>=o.visibilityHeight},g=a=>{const c=Date.now(),h=e.value.scrollTop,u=()=>{const i=(Date.now()-c)/a;i<1?(e.value.scrollTop=h*(1-B(i)),m(u)):e.value.scrollTop=0};m(u)},y=()=>{g(500),f("on-top")};return j(()=>k(t.value,"scroll",p(r,300))),E(()=>{if(t.value=document,e.value=document.documentElement||document.body,o.target){if(e.value=document.querySelector(o.target),!e.value)throw new Error(`Can not find the target element:${o.target}`);t.value=e.value}T(t.value,"scroll",p(r,300))}),(a,c)=>($(),H("div",{class:N(["mini-web-back-top",n.value?"show":"hidden"]),style:S({right:l(b),bottom:l(_)}),onClick:y},[I(a.$slots,"default",{},()=>[D(l(C),{type:"backTopProp"})],!0)],6))}});var A=w(q,[["__scopeId","data-v-e677b304"]]);export{A as default};
