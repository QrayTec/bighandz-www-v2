import{d as a,h as l,o,c,e as t,t as n,H as i}from"./app-cd4de08a.js";const p={class:"relative h-[360px] w-[585px]"},r={class:"absolute left-0 top-0 h-full w-full"},d=["src"],_={class:"font-NotoSansJP relative left-0 top-0 h-full w-full bg-[#0E1B47] bg-opacity-40 px-[40px] text-white"},f=["href"],u={class:"pt-[240px] text-[24px] leading-[30px] font-[500]"},x=t("div",{class:"mt-[30px] w-full flex"},[t("p",null,"詳細はこちら"),t("img",{class:"ml-[20px]",src:i,alt:""})],-1),k=a({__name:"adoptionCard",props:{carddata:null},setup(e){const s=l(e.carddata||{BackgroundImage:"",title:"",link:""});return(m,g)=>(o(),c("div",p,[t("div",r,[t("img",{src:s.value.BackgroundImage,alt:""},null,8,d)]),t("div",_,[t("a",{href:s.value.link,class:"flex flex-col"},[t("div",u,n(s.value.title),1),x],8,f)])]))}});export{k as _};
