import{_ as i}from"./TheBreadcrumbs.vue_vue_type_script_setup_true_lang-a420f309.js";import{d,h as r,o as _,c as n,e,b as p,q as c,t as o,p as u,A as b,B as g,g as v}from"./app-542b3c83.js";const m="/assets/pic_innovation_bg-f2e6127d.png",f=t=>(b("data-v-ef8debcc"),t=t(),g(),t),h={class:"sub_page_main"},C={class:"Bread_Crumbs"},S={class:"sub_page_Content"},y={class:"sub_page_Content_title"},B={class:"title_cn"},T={class:"title_en"},k=f(()=>e("div",{class:"title_line"},null,-1)),I={key:0,class:"sub_page_Content_image"},x={class:"sub_page_Content_image_bg"},N=["src"],P=d({__name:"SubPageTitle",props:{data:null},setup(t){const s=r(t.data),a={background:""};return s.value.type===2?a.background=`linear-gradient(
    90deg,
    #0e1b47 0%,
    rgba(14, 27, 71, 0.6) 58.33%,
    rgba(14, 27, 71, 0.6) 100%
  ), url('${s.value.ImgSrc}') 50% / cover no-repeat`:s.value.type===1&&(a.background=`url('${m}') 50% / cover no-repeat,linear-gradient( 
    90deg,
    #0e1b47 0%,
    rgba(14, 27, 71, 1) 100%)`),($,w)=>{const l=i;return _(),n("div",{class:"sub_page_main_box bg-center-35",style:a},[e("div",h,[e("div",C,[p(l)]),e("div",S,[e("div",y,[e("div",B,[e("span",{class:c([{title_bold:s.value.bold==1},"font-bold"])},o(s.value.TitleCn_1),3),e("span",{class:c([{title_bold:s.value.bold!=2},"font-bold"])},o(s.value.TitleCn_2),3)]),e("div",T,o(s.value.TitleEn),1),k]),s.value.type===1?(_(),n("div",I,[e("div",x,[e("img",{class:"h-full w-full",src:s.value.ImgSrc,alt:""},null,8,N)])])):u("",!0)])])])}}});const q=v(P,[["__scopeId","data-v-ef8debcc"]]);export{q as _};
