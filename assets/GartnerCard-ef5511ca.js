import{d as s,h as o,o as c,c as n,e,t as a,n as r}from"./app-27bd8b24.js";const i={class:"absolute left-0 top-0 h-full w-full"},u=["src"],d={class:"relative right-0 top-0 h-full w-full flex items-center justify-end text-white"},f={class:"font-NotoSansJP w-[160px] flex flex-col items-center justify-center text-center text-[16px] font-[700]"},x=s({__name:"GartnerCard",props:{carddata:null},setup(l){const t=o(l.carddata||{BackgroundImage:"",className:"",title_1:"",title_2:""});return(_,m)=>(c(),n("div",{class:r(["relative h-[160px]",t.value.className])},[e("div",i,[e("img",{class:"h-full w-full",src:t.value.BackgroundImage,alt:""},null,8,u)]),e("div",d,[e("div",f,[e("p",null,a(t.value.title_1),1),e("p",null,a(t.value.title_2),1)])])],2))}});export{x as default};
