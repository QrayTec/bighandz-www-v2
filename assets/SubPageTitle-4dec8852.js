import{d as g,h as i,i as h,j as b,o as n,c as _,e,p as r,t as c,v as u,k as f,b as x,y,z as P,g as C}from"./app-949443ee.js";const S="/assets/bread_icon-5c1858f4.svg",T={class:"Route_Breadcrumbs"},$={class:"flex cursor-pointer items-center"},k={key:0,class:"mx-[20px] flex items-center justify-center"},I=e("img",{src:S,alt:""},null,-1),B=[I],N={key:1,class:"font-NotoSansJP h-[16px] text-[16px] leading-[16px] font-[400] text-[#fff]"},w=g({__name:"TheBreadcrumbs",setup(o){const d=i("1"),t=i("2"),a=i(!0),p=h(),v=()=>{const l=p.path,s=f[l.toLowerCase()];return typeof s=="string"?s:s&&s.name?(d.value=s.Parent_title,t.value=s.name,a.value=s.MainPage,s.name):"Unknown Page"};return b(()=>{v()}),(l,s)=>(n(),_("div",T,[e("div",$,[e("div",{class:r(["font-NotoSansJP h-[16px] text-[16px] leading-[16px] font-[400] text-[#fff]",{"opacity-40":a.value,"opacity-1-0":!a.value}])},c(d.value),3),a.value?(n(),_("div",k,B)):u("",!0),a.value?(n(),_("div",N,c(t.value),1)):u("",!0)])]))}}),m=o=>(y("data-v-dd46e703"),o=o(),P(),o),j={class:"sub_page_main"},D={class:"Bread_Crumbs"},M={class:"sub_page_Content"},V={class:"sub_page_Content_title"},z={class:"title_cn"},E={class:"title_en"},J=m(()=>e("div",{class:"title_line"},null,-1)),R={key:0,class:"sub_page_Content_image"},L={class:"sub_page_Content_image_bg"},U=["src"],q=m(()=>e("div",{class:"Image_line"},null,-1)),A=g({__name:"SubPageTitle",props:{data:null},setup(o){const t=i(o.data),a={background:t.value.type===2?`linear-gradient(
    90deg,
    #0e1b47 0%,
    rgba(14, 27, 71, 0.6) 58.33%,
    rgba(14, 27, 71, 0.6) 100%
  ),url('${t.value.ImgSrc}') lightgray 50% / cover no-repeat `:""};return(p,v)=>{const l=w;return n(),_("div",{class:"sub_page_main_box",style:a},[e("div",j,[e("div",D,[x(l)]),e("div",M,[e("div",V,[e("div",z,[e("span",{class:r({title_bold:t.value.bold==1})},c(t.value.TitleCn_1),3),e("span",{class:r({title_bold:t.value.bold==2})},c(t.value.TitleCn_2),3)]),e("div",E,c(t.value.TitleEn),1),J]),t.value.type===1?(n(),_("div",R,[e("div",L,[e("img",{class:"h-full w-full",src:t.value.ImgSrc,alt:""},null,8,U)]),q])):u("",!0)])])])}}});const G=C(A,[["__scopeId","data-v-dd46e703"]]);export{G as _};
