import{d,h as s,i as v,j as p,C as h,D as x,o as a,c as o,e as n,x as g,t as u,y as _,k as P}from"./app-e8396cc7.js";const y="/assets/bread_icon-5c1858f4.svg",k={class:"Route_Breadcrumbs"},B={class:"flex cursor-pointer items-center"},C={key:0,class:"mx-[20px] flex items-center justify-center"},w=n("img",{src:y,alt:""},null,-1),D=[w],N={key:1,class:"font-NotoSansJP h-[16px] text-[.9375rem] leading-[1rem] font-[400] text-[#fff]"},b=d({__name:"TheBreadcrumbs",setup(S){const r=s("1"),c=s("2"),t=s(!0),f=v(),i=s(!1),m=()=>{const l=f.path,e=P[l.toLowerCase()];return typeof e=="string"?e:e&&e.name?(r.value=e.Parent_title,c.value=e.name,t.value=e.MainPage,i.value=!0,e.name):"Unknown Page"};return p(()=>{m()}),(l,e)=>h((a(),o("div",k,[n("div",B,[n("div",{class:g(["font-NotoSansJP h-[16px] text-[.9375rem] leading-[1rem] font-[400] text-[#fff]",{"opacity-40":t.value,"opacity-1-0":!t.value}])},u(r.value),3),t.value?(a(),o("div",C,D)):_("",!0),t.value?(a(),o("div",N,u(c.value),1)):_("",!0)])],512)),[[x,i.value]])}});export{b as _};