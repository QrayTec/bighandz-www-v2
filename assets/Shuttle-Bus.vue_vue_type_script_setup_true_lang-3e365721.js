import{d as o,h as i,o as t,c as e,F as c,p as r,e as s,t as p,s as _,n as d,f as u,M as f}from"./app-e8e9a52b.js";const m="/assets/map2-ea5b15ff.png",x="/assets/timetable1-e72da620.png",h="/assets/timetable2-7c884051.png",g=s("div",{class:"flex justify-center bg-[#6785C1] px-[44px] py-[17px] text-[36px] font-[500] text-white"}," 「東京ダイヤビルディング」無料シャトルバス運行ルート ",-1),v=s("div",{class:"mt-[30px] w-full flex justify-center"},[s("img",{class:"w-full",src:m,alt:""})],-1),w={class:"flex items-center"},y=s("div",{class:"h-[32px] w-[4px] bg-[#F6C103]"},null,-1),b={class:"font-NotoSansJP ml-[10px] text-[36px] font-[400]"},I=s("hr",null,null,-1),B={class:"flex justify-between"},C=["src"],k=o({__name:"Shuttle-Bus",setup(N){const n=i([{title:"青ルート（茅場町駅・八丁堀駅巡回ルート）",Image:x},{title:"赤ルート（八重洲地下街入口・日本橋駅・茅場町駅巡回ルート）",Image:h}]);return(S,T)=>(t(),e("div",{id:"ShuttleBus","data-aos":"fade-in",class:"w-full",style:d({width:u(f)+"px"})},[g,v,(t(!0),e(c,null,r(n.value,(a,l)=>(t(),e("div",{key:l,class:"mt-[30px] w-full"},[s("div",w,[y,s("div",b,p(a.title),1)]),I,s("div",B,[s("div",{class:_(["w-full px-[25px] py-[71px]",l%2==0?"order-1":""])},[s("img",{class:"w-full",src:a.Image,alt:""},null,8,C)],2)])]))),128))],4))}});export{k as _};