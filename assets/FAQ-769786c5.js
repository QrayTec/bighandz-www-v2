import{d as v,i as n,o as e,c as a,e as s,t as i,q as f,n as q,s as k,v as F,g as y,b as d,F as h,p as g,j as S,k as $,l as x}from"./app-cb18b536.js";import{h as D,_ as I}from"./PageNav-4bd7a55f.js";import{_ as T}from"./SubPageTitle-9f30177b.js";const w=_=>(k("data-v-670079c1"),_=_(),F(),_),C={class:"steps_data"},E={key:0,class:"steps_subheading"},N={class:"steps_title_main"},P=w(()=>s("div",{class:"steps_bg"},[s("div",{class:"bg_main"})],-1)),B=v({__name:"steps",props:{stepsdata:null},setup(_){const t=n(_.stepsdata);return(u,r)=>(e(),a("div",{class:q(["steps_main",t.value.subheading!==null?"steps_height_1":"steps_height_2"])},[s("div",C,[t.value.subheading!==null?(e(),a("div",E,i(t.value.subheading),1)):f("",!0),s("div",N,i(t.value.title_main),1)]),P],2))}});const L=y(B,[["__scopeId","data-v-670079c1"]]),V={class:"page_center_items m_t_120 m_b_240"},H={class:"FAQ_content"},j={class:"question qa_data"},z={class:"question_id question_bg"},M={class:"question_data"},U={class:"qa_data assurance m_t_30"},Z={class:"question_id assurance_bg"},G={class:"question_data"},J=v({__name:"FAQ_items",setup(_){const l=n({id:1,subheading:"",title_main:"Part1"}),t=n([{id:1,question_id:"Q1",question_data:"文系·理系、学部卒·修士了など、应募に関する条件はありますか",assurance_id:"A1",assurance_list:[{list:"全学部・全学科が対象となります。"}]},{id:2,question_id:"Q2",question_data:"選考の際、重視しているポイントは",assurance_id:"A2",assurance_list:[{list:"新卒入社の方は変化に適応し、成長意欲が高いかどうか"},{list:"キャリア入社の方はスキルと経験、コミュニケーション能力が評価の対象となります。"}]},{id:3,question_id:"Q3",question_data:"外国人の採用は行っていますか",assurance_id:"A3",assurance_list:[{list:"当社では応募や選考にあたり、性別や国籍などは一切問いません。"}]},{id:4,question_id:"Q4",question_data:"海外在住ですが、応募は可能ですか",assurance_id:"A4",assurance_list:[{list:"はい、応募可能です。Zoom等のビデオ通話で面接を行わせていただきます。"}]},{id:5,question_id:"Q5",question_data:"社内イベントはありますか",assurance_id:"A5",assurance_list:[{list:"はい、あります。年に2回、全社会議（経営や事業方針の共有、優れた事例の発表など）と表彰式兼ねた忘年会が開催されました（コロナ禍の期間中はオンラインで行われました）。"}]}]);return(u,r)=>{const c=L;return e(),a("div",V,[d(c,{stepsdata:l.value},null,8,["stepsdata"]),s("div",H,[(e(!0),a(h,null,g(t.value,o=>(e(),a("div",{key:o.id,class:"FAQ_items m_t_60"},[s("div",j,[s("div",z,i(o.question_id),1),s("div",M,i(o.question_data),1)]),s("div",U,[s("div",Z,i(o.assurance_id),1),s("div",G,[(e(!0),a(h,null,g(o.assurance_list,(m,p)=>(e(),a("p",{key:p},i(m.list),1))),128))])])]))),128))])])}}});const K=y(J,[["__scopeId","data-v-ce1670d4"]]),O="/assets/FAQ-4980e2be.png",R={class:"page"},W={class:"message_from_president_main"},X={class:"page_center"},Y=s("div",{class:"occupy"},null,-1),as=v({__name:"FAQ",setup(_){const l=n({TitleCn_1:"FAQ · ",TitleCn_2:"よくあるご質問",TitleEn:"FAQ Frequently Asked Questions",ImgSrc:O,bold:1,type:2}),t=n([{id:1,anchor:"#Technology",anchor_title:"Part１"}]),u=n(!1),r=n(),c=D({isSticky:u,navSticky:r});return S(()=>{c(),window.addEventListener("scroll",c)}),$(()=>{window.removeEventListener("scroll",c)}),(o,m)=>{const p=x,A=T,Q=I,b=K;return e(),a("div",R,[d(p,{class:"Header",checked:2}),s("div",W,[d(A,{data:l.value},null,8,["data"])]),s("div",{ref_key:"navSticky",ref:r,class:q(["page_nav_sticky",{shrink:u.value}])},[d(Q,{pagenavdata:t.value},null,8,["pagenavdata"])],2),s("div",X,[Y,d(b)])])}}});export{as as default};
