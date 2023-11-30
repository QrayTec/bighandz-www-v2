import{d as m,h as s,o as f,c as _,e,A as d,B as o,C as h,q as b,n as w,f as g,M as y,v as C}from"./app-b00df330.js";const k=C('<div><div class="text-[24px]"> 以下をご確認頂き「同意する」にチエックをお願いします。 </div><div class="mt-[60px] text-[20px]"><div>1、事業者の名称 株式会社ビッグハンズ</div><div class="mt-[30px]">2、個人情報の保護管理者</div><div class="ml-[30px]"><div class="mt-[10px] flex"><div>管理者名： 金子 隆吾</div><div class="ml-[20px]">所属部署：管理部</div></div><div class="mt-[10px]">連絡先: bh-kanribu@bighandz.co.jp</div><div class="mt-[10px]"> TEL:03-6228-3468(受付時間:午前10時~午後5時) </div></div><div class="mt-[30px]">3、個人情報の利用目的</div><div class="ml-[30px]"><div class="mt-[10px]"> ユ一ザ一様サポ一ト及びお問合せ対応と当社サ一ビス向上の為 </div><div class="mt-[10px]">ご利用履歴管理の為</div></div><div class="mt-[30px]">4、個人情報の取り扱い業務の委託</div><div class="ml-[30px]"><div class="mt-[10px]"> 個人情報の取扱業務の全部または一部を外部に業務委託する場合があります。その際、弊社は、個人情報を適切に保護できる管理体制を敷き実行していることを条件として委託先を厳選したうえで、機密保持契約を委託先と締結し、お客様の個人情報を厳密に管理させます。 </div></div><div class="mt-[30px]">5、個人情報の開示等の請求</div><div class="ml-[30px]"><div class="mt-[10px]"> お客様は、弊社に対してご自身の個人情報の開示等(利用目的の通知、開示、内容の訂正·追加·削除、利用の停止または消去、第三者への提供の停止)に関して、当社問合わせ窓口に申し出ることができます。 </div><div class="mt-[10px]"> その際、弊社はお客様ご本人を確認させていただいたうえで、合理的な期間内に対応いたします。 </div><div class="mt-[10px]"> なお、個人情報に関する弊社問合わせ先は、次の通りです。株式会社ビッグハンズ個人情報問合せ窓口〒104-0033東京都中央区新川1丁目28番25号 </div><div class="mt-[10px]">東京ダイヤピルディング3号館206H室</div><div class="mt-[10px]">メ一ルアドレス :bh-kanribu@bighandz.co.jp</div><div class="mt-[10px]"> TEL:03-1234-5678(受付時間9:00~18:00※土·日曜日、祝日、年末年始を除く) </div></div><div class="mt-[30px]"> 6、個人情報を提供される事の任意性について、ご本人様が当社に個人情報を提供されるかどうかは任意によるものです。 </div><div class="ml-[30px]"><div class="mt-[10px]"> ただし、必要な項目を頂けない場合、適切な対応が出来ない場合があります。 </div></div></div></div>',1),z={class:"mt-[60px]"},N={class:"flex justify-between"},$={class:"mx-[20px] flex flex-col"},U=e("div",{class:"flex text-[16px]"},[e("div",null,"氏名:"),e("div",{class:"text-red"},"*")],-1),V={class:"mx-[20px] flex flex-col"},E=e("div",{class:"flex text-[16px]"},[e("div",null,"件名:"),e("div",{class:"text-red"},"*")],-1),T={class:"mx-[20px] flex flex-col"},j=e("div",{class:"flex text-[16px]"},[e("div",null,"メールアドレス:"),e("div",{class:"text-red"},"*")],-1),A={class:"mx-[20px] flex flex-col"},M=e("div",{class:"flex text-[16px]"},[e("div",null,"電話番号:"),e("div",{class:"text-red"},"*")],-1),R={class:"mx-[20px] mt-[40px] flex flex-col"},S=e("div",{class:"flex text-[16px]"},[e("div",null,"メッセージ:"),e("div",{class:"text-red"},"*")],-1),B={class:"font-NotoSansJP mt-[20px] w-full px-[20px] text-[20px]"},L=e("label",{for:"checkbox",class:"ml-[20px]"},"同意する ",-1),D=["disabled"],I=e("p",{class:"font-NotoSansJP text-[20px] leading-none font-[400] not-italic text-[#fff]"}," お問い合わせ ",-1),P=[I],Z=m({__name:"Content",setup(H){const i=s(!1),n=s(""),p=s(""),a=s(""),x=s(""),v=s(""),c=s("info@bighandz.co.jp"),u=()=>{if(n.value===""){alert("名前が入力されていません");return}if(a.value===""){alert("メールアドレスが入力されていません");return}if(!/^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/.test(a.value)){alert("メールアドレスの形式が正しくありません");return}if(x.value===""){alert("電話番号が入力されていません");return}if(v.value===""){alert("お問合わせ内容が入力されていません");return}const l=encodeURIComponent(p.value),t=encodeURIComponent(`日        期:${new Date().toLocaleDateString()}

    氏         名: ${n.value}

    メールアドレス: ${a.value}

    電 話 番 号: ${x.value}

    お問合わせ内容: ${v.value}

    -----------------------Copyright © BigHandz Co.Ltd. All Rights Reserved.-----------------------`);window.location.href=`mailto:${c.value}?subject=${l}&body=${t}`};return(r,l)=>(f(),_("div",{class:"font-NotoSansJP",style:w({width:g(y)+"px"})},[k,e("div",z,[e("div",N,[e("div",$,[U,e("div",null,[d(e("input",{"onUpdate:modelValue":l[0]||(l[0]=t=>n.value=t),placeholder:"例:ネコ",class:"mt-[20px] h-[50px] w-[240px] border rounded-[12px]",type:"text"},null,512),[[o,n.value]])])]),e("div",V,[E,e("div",null,[d(e("input",{"onUpdate:modelValue":l[1]||(l[1]=t=>p.value=t),placeholder:"件名",class:"mt-[20px] h-[50px] w-[240px] border rounded-[12px]",type:"text"},null,512),[[o,p.value]])])]),e("div",T,[j,e("div",null,[d(e("input",{"onUpdate:modelValue":l[2]||(l[2]=t=>a.value=t),placeholder:"例:mail@example.com  ",class:"mt-[20px] h-[50px] w-[240px] border rounded-[12px]",type:"text"},null,512),[[o,a.value]])])]),e("div",A,[M,e("div",null,[d(e("input",{"onUpdate:modelValue":l[3]||(l[3]=t=>x.value=t),placeholder:"例:090-0000-0000",class:"mt-[20px] h-[50px] w-[240px] border rounded-[12px]",type:"text"},null,512),[[o,x.value]])])])]),e("div",R,[S,e("div",null,[d(e("textarea",{"onUpdate:modelValue":l[4]||(l[4]=t=>v.value=t),class:"w-full border",placeholder:"情報を入力してください",cols:"30",rows:"10"},null,512),[[o,v.value]])])])]),e("div",B,[e("div",null,[d(e("input",{id:"checkbox","onUpdate:modelValue":l[5]||(l[5]=t=>i.value=t),type:"checkbox"},null,512),[[h,i.value]]),L,e("button",{class:b(["mt-[20px] max-w-[200px] flex items-center bg-[#597be5] px-[30px] py-[20px]",{"bg-[#597be5]":i.value,"bg-gray-300 cursor-not-allowed":!i.value}]),disabled:!i.value,onClick:u},P,10,D)])])],4))}});export{Z as _};
