import{d,h as s,i as v,j as p,C as h,H as g,o as a,c as o,e as n,s as x,t as u,q as _,k as P}from"./app-9653d1ab.js";const y="/assets/bread_icon-5c1858f4.svg",k={class:"Route_Breadcrumbs"},B={class:"flex cursor-pointer items-center"},C={key:0,class:"mx-[20px] flex items-center justify-center"},w=n("img",{src:y,alt:""},null,-1),N=[w],S={key:1,class:"font-NotoSansJP h-[16px] text-[.9375rem] leading-[1rem] font-[400] text-[#fff]"},j=d({__name:"TheBreadcrumbs",setup(T){const r=s("1"),c=s("2"),t=s(!0),f=v(),i=s(!1),m=()=>{const l=f.path,e=P[l.toLowerCase()];return typeof e=="string"?e:e&&e.name?(r.value=e.Parent_title,c.value=e.name,t.value=e.MainPage,i.value=!0,e.name):"Unknown Page"};return p(()=>{m()}),(l,e)=>h((a(),o("div",k,[n("div",B,[n("div",{class:x(["font-NotoSansJP h-[16px] text-[.9375rem] leading-[1rem] font-[400] text-[#fff]",{"opacity-40":t.value,"opacity-1-0":!t.value}])},u(r.value),3),t.value?(a(),o("div",C,N)):_("",!0),t.value?(a(),o("div",S,u(c.value),1)):_("",!0)])],512)),[[g,i.value]])}});export{j as _};
