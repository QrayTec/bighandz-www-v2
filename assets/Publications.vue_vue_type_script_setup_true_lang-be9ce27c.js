import{_ as i}from"./rhombic-d3e9827d.js";import{d as p,h as x,o as e,c as l,e as s,t as o,F as r,s as _,q as f,n as d,f as u,M as m}from"./app-4ab83ad2.js";const h=s("div",{id:"Publications",class:"h-[80px] max-w-[480px] flex justify-center bg-[#6785C1] px-[44px] py-[17px] text-[36px] font-[500] text-white"}," 出版物 ",-1),w={"data-aos":"fade-in",class:"mt-[60px] flex justify-between"},v={class:"w-[calc(50%-15px)] flex flex-col justify-between py-[30px]"},y={class:"font-NotoSansJP text-[#071027]s text-[36px] font-[700]"},b={class:"font-NotoSansJP w-full text-[16px] leading-[32px] font-[400] text-[#0E1B47]"},g={class:"mt-[20px] w-full"},N=s("div",{class:"mt-[5px] h-full min-w-[16px]"},[s("img",{class:"h-16px w-[16px]",src:i,alt:""})],-1),j={class:"ml-[10px]"},P={class:"w-[calc(50%-15px)] flex justify-center"},B=["src"],I=p({__name:"Publications",props:{publications:null},setup(n){const t=x(n.publications);return(S,k)=>(e(),l("div",{class:"w-full",style:d({width:u(m)+"px"})},[h,s("div",w,[s("div",v,[s("div",y,o(t.value.title),1),s("div",b,[s("ul",g,[(e(!0),l(r,null,_(t.value.content,(c,a)=>(e(),l("li",{key:a,class:f([a==0?"":"mt-[30px]","w-full flex px-[30px]"])},[N,s("p",j,o(c.list),1)],2))),128))])])]),s("div",P,[s("img",{class:"object-cover",src:t.value.Image,alt:""},null,8,B)])])],4))}});export{I as _};