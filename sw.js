if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const a=e=>n(e,r),o={module:{uri:r},exports:t,require:a};s[r]=Promise.all(i.map((e=>o[e]||a(e)))).then((e=>(l(...e),t)))}}define(["./workbox-56a10583"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"adoption-intelligence.html",revision:"8a38cce6fc026e7ffc3057ad8838bb82"},{url:"adoption-intelligence/components/adoption-item.html",revision:"59e3c61c24ab7fcda445c5ce0a716128"},{url:"adoption-intelligence/components/adoptioncard.html",revision:"57035288f768338bd9726fcfc3978baa"},{url:"assets/_...all_-d8a09cf2.js",revision:null},{url:"assets/404-d6a83028.js",revision:null},{url:"assets/adoption-item-e19949eb.js",revision:null},{url:"assets/adoption-item.vue_vue_type_script_setup_true_lang-b4158fe6.js",revision:null},{url:"assets/adoptionCard-7efa7f83.js",revision:null},{url:"assets/adoptionCard.vue_vue_type_script_setup_true_lang-b76af44b.js",revision:null},{url:"assets/Advanced-SI-Services-26772f50.css",revision:null},{url:"assets/Advanced-SI-Services-61524f31.js",revision:null},{url:"assets/Advanced-SI-Services.vue_vue_type_style_index_0_lang-4e359913.js",revision:null},{url:"assets/AI-Assembler-Conversion-e86c44a1.js",revision:null},{url:"assets/AI-Assembler-Conversion.vue_vue_type_script_setup_true_lang-bb7949ef.js",revision:null},{url:"assets/AI-Cases-eebd9a8b.js",revision:null},{url:"assets/AI-Cases.vue_vue_type_script_setup_true_lang-263b5235.js",revision:null},{url:"assets/AI-Delivery-20afff56.js",revision:null},{url:"assets/AI-Delivery.vue_vue_type_script_setup_true_lang-3b534d37.js",revision:null},{url:"assets/app-bec8a12c.js",revision:null},{url:"assets/Automated-Testing-Tools-ef9e790e.js",revision:null},{url:"assets/Automated-Testing-Tools.vue_vue_type_script_setup_true_lang-edb5222c.js",revision:null},{url:"assets/blank-0ca98111.js",revision:null},{url:"assets/Brand-64b4f9a9.js",revision:null},{url:"assets/Brand-d2c05845.css",revision:null},{url:"assets/Bus-Travel-c80da806.js",revision:null},{url:"assets/Bus-Travel.vue_vue_type_style_index_0_lang-ec40fc45.js",revision:null},{url:"assets/Cloud-Enhancement-Strategy-f483567e.js",revision:null},{url:"assets/Cloud-Enhancement-Strategy.vue_vue_type_script_setup_true_lang-23131e6b.js",revision:null},{url:"assets/Company_staff_observation-ab21b6c6.js",revision:null},{url:"assets/company-info-b7857b63.js",revision:null},{url:"assets/company-info.vue_vue_type_script_setup_true_lang-4e699e3f.js",revision:null},{url:"assets/CompanyHistory-0a7891a4.css",revision:null},{url:"assets/CompanyHistory-0da0400a.js",revision:null},{url:"assets/CompanyProfileContent-9abd828f.js",revision:null},{url:"assets/CompanyProfileContent-cbfdc023.css",revision:null},{url:"assets/Contact-Information-5cc1cb01.js",revision:null},{url:"assets/Contact-Information.vue_vue_type_style_index_0_lang-660eb985.js",revision:null},{url:"assets/Content-0d85aae5.js",revision:null},{url:"assets/Content-b4d06df3.js",revision:null},{url:"assets/Content-c4eee37f.js",revision:null},{url:"assets/Content.vue_vue_type_script_setup_true_lang-1ab17707.js",revision:null},{url:"assets/Content.vue_vue_type_script_setup_true_lang-b9345b05.js",revision:null},{url:"assets/Content.vue_vue_type_script_setup_true_lang-bdc831cc.js",revision:null},{url:"assets/en-58641bd2.js",revision:null},{url:"assets/EventInformationItem-1bf842bb.js",revision:null},{url:"assets/EventInformationItem-aa7afeda.css",revision:null},{url:"assets/Examples-Achievements-0a0e46d4.css",revision:null},{url:"assets/Examples-Achievements-741c1512.js",revision:null},{url:"assets/ExperiencedPerson-eb77ef5a.js",revision:null},{url:"assets/ExperiencedPerson.vue_vue_type_script_setup_true_lang-876f3f37.js",revision:null},{url:"assets/FAQ-items-3d411cf2.js",revision:null},{url:"assets/FAQ-items-6d6325eb.css",revision:null},{url:"assets/GartnerCard-c510ac86.js",revision:null},{url:"assets/GartnerCard.vue_vue_type_script_setup_true_lang-abfaab99.js",revision:null},{url:"assets/HealthcareBusinessItem-2e165426.css",revision:null},{url:"assets/HealthcareBusinessItem-ebf84f1d.js",revision:null},{url:"assets/home-bb4d1468.js",revision:null},{url:"assets/index-048062d1.js",revision:null},{url:"assets/index-04f99822.js",revision:null},{url:"assets/index-09f4a191.js",revision:null},{url:"assets/index-10e178ba.js",revision:null},{url:"assets/index-14e51d23.css",revision:null},{url:"assets/index-201b3101.css",revision:null},{url:"assets/index-261d4ea5.js",revision:null},{url:"assets/index-3181729f.js",revision:null},{url:"assets/index-470b2b28.css",revision:null},{url:"assets/index-640dd73e.js",revision:null},{url:"assets/index-6b6d7e36.css",revision:null},{url:"assets/index-761b5f83.js",revision:null},{url:"assets/index-78633a32.js",revision:null},{url:"assets/index-7e987542.js",revision:null},{url:"assets/index-88d63646.js",revision:null},{url:"assets/index-89ce9f31.js",revision:null},{url:"assets/index-8fea1a9a.js",revision:null},{url:"assets/index-a1fb78cf.js",revision:null},{url:"assets/index-a389264b.css",revision:null},{url:"assets/index-a3a1202f.js",revision:null},{url:"assets/index-bd129d95.js",revision:null},{url:"assets/index-c58ccf24.js",revision:null},{url:"assets/index-c7bcef64.css",revision:null},{url:"assets/index-ccfaecec.js",revision:null},{url:"assets/index-db666781.css",revision:null},{url:"assets/index-db756416.js",revision:null},{url:"assets/index-eb619ef9.css",revision:null},{url:"assets/index-f0a6843b.js",revision:null},{url:"assets/index-f67b7658.js",revision:null},{url:"assets/Industry-Dev-0e708f49.js",revision:null},{url:"assets/Industry-Dev.vue_vue_type_script_setup_true_lang-64578c3b.js",revision:null},{url:"assets/Industry-Experience-d531c93c.js",revision:null},{url:"assets/Industry-Experience.vue_vue_type_script_setup_true_lang-32067ccf.js",revision:null},{url:"assets/InexperiencedPerson-92fba9ac.js",revision:null},{url:"assets/InexperiencedPerson.vue_vue_type_script_setup_true_lang-bd7aede2.js",revision:null},{url:"assets/Innovation-10d558d1.css",revision:null},{url:"assets/Innovation-9eb9a64f.js",revision:null},{url:"assets/LLM-Applications-ca97ee9d.js",revision:null},{url:"assets/LLM-Applications.vue_vue_type_script_setup_true_lang-07545488.js",revision:null},{url:"assets/Logistics-DX-Promotion-0b473912.js",revision:null},{url:"assets/Logistics-DX-Promotion.vue_vue_type_script_setup_true_lang-24f1ffa9.js",revision:null},{url:"assets/Logistics-Industry-Challenges-5e40a1c6.js",revision:null},{url:"assets/Logistics-Industry-Challenges.vue_vue_type_script_setup_true_lang-cb039bfa.js",revision:null},{url:"assets/Logistics-Management-2fcdf30b.js",revision:null},{url:"assets/Logistics-Management.vue_vue_type_script_setup_true_lang-11900c01.js",revision:null},{url:"assets/LogisticsDXPlatform-3064f363.js",revision:null},{url:"assets/LogisticsDXPlatform.vue_vue_type_script_setup_true_lang-8cfb0e37.js",revision:null},{url:"assets/Manage-Item-856c7af6.js",revision:null},{url:"assets/Mission-33fdff3c.css",revision:null},{url:"assets/Mission-c4396111.js",revision:null},{url:"assets/MovieItem-1038c8c5.js",revision:null},{url:"assets/MovieItem-45d44f91.css",revision:null},{url:"assets/Open-Positions-5552ff25.js",revision:null},{url:"assets/Open-Positions.vue_vue_type_script_setup_true_lang-f510f7e3.js",revision:null},{url:"assets/operational-efficiency-improvement-f41bdc40.js",revision:null},{url:"assets/operational-efficiency-improvement.vue_vue_type_script_setup_true_lang-9098f5e1.js",revision:null},{url:"assets/PracticesGuidelines-5fdd9ee8.css",revision:null},{url:"assets/PracticesGuidelines-df1988b5.js",revision:null},{url:"assets/Publications.vue_vue_type_script_setup_true_lang-2fad19fb.js",revision:null},{url:"assets/recruitment-item-79c352c4.css",revision:null},{url:"assets/recruitment-item-7dc9fc93.js",revision:null},{url:"assets/rhombic-d3e9827d.js",revision:null},{url:"assets/Shuttle-Bus-2874a68b.js",revision:null},{url:"assets/Shuttle-Bus.vue_vue_type_script_setup_true_lang-f00ff4d5.js",revision:null},{url:"assets/solution-item-642e99ad.js",revision:null},{url:"assets/solution-item.vue_vue_type_script_setup_true_lang-40b5711b.js",revision:null},{url:"assets/steps.vue_vue_type_script_setup_true_lang-90cb1279.js",revision:null},{url:"assets/SubPageTitle-52123e28.js",revision:null},{url:"assets/SubPageTitle-f2f33b25.css",revision:null},{url:"assets/ThePageMinTitle-08850067.js",revision:null},{url:"assets/ThePageNav-af10c11e.js",revision:null},{url:"assets/ThePageNav-ed3849d8.css",revision:null},{url:"assets/to-new-graduates-3ed08b18.js",revision:null},{url:"assets/to-new-graduates.vue_vue_type_script_setup_true_lang-26a80cad.js",revision:null},{url:"assets/Train-Travel-00348286.js",revision:null},{url:"assets/Train-Travel.vue_vue_type_script_setup_true_lang-900345e3.js",revision:null},{url:"assets/Values-d6ca5689.js",revision:null},{url:"assets/Values-e66e9964.css",revision:null},{url:"assets/video-chunk-4ed993c7.js",revision:null},{url:"assets/virtual_pwa-register-9762b012.js",revision:null},{url:"assets/Vision-31838d7b.css",revision:null},{url:"assets/Vision-d564d226.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"assets/zh-CN-78ecf232.js",revision:null},{url:"associated-company.html",revision:"54de0a46e0855cbb1b22763f7f25e6aa"},{url:"associated-company/components/company-info.html",revision:"0bc399f638084e7d58615d971e525516"},{url:"company-profile.html",revision:"ae426ad1fb846e03d19a29f1a929ad42"},{url:"company-profile/components/companyhistory.html",revision:"bed3b9c2ffb2728557eb9d421ed472c3"},{url:"company-profile/components/companyprofilecontent.html",revision:"865a56956443537088267dd98dfd8ab2"},{url:"company-staff-observation.html",revision:"0d5aa5c784170e5a573a632c56c6e12a"},{url:"company-staff-observation/components/movieitem.html",revision:"a492f683f36c93e7b2cf2af76b9b3af7"},{url:"components/business-item.html",revision:"02bdbedfa440aaaefe596c9a531a4a1b"},{url:"components/business.html",revision:"02bdbedfa440aaaefe596c9a531a4a1b"},{url:"components/customers.html",revision:"02bdbedfa440aaaefe596c9a531a4a1b"},{url:"components/field.html",revision:"02bdbedfa440aaaefe596c9a531a4a1b"},{url:"components/first.html",revision:"02bdbedfa440aaaefe596c9a531a4a1b"},{url:"contact-us.html",revision:"e657fa2e251a32ac33a5dabe7fee1a8b"},{url:"contact-us/components/content.html",revision:"ca2e22af36caeacb5d6c5cf93819675f"},{url:"corporate-philosophy-management-policy.html",revision:"1293c66446506deeffe9630b8de07041"},{url:"corporate-philosophy-management-policy/components/innovation.html",revision:"a9ede164bab767e9bb60b48bc5ef3e23"},{url:"corporate-philosophy-management-policy/components/mission.html",revision:"3ecb3fa5dd2bbe97992423b9d121d893"},{url:"corporate-philosophy-management-policy/components/practicesguidelines.html",revision:"d0641e6c2635a6ac68f4c0c7d2f6943e"},{url:"corporate-philosophy-management-policy/components/values.html",revision:"a645af1084b6fa152732ad3f6b1c454f"},{url:"corporate-philosophy-management-policy/components/vision.html",revision:"a6c97d0793dce4236a2b1196cfd7db6c"},{url:"data-solution.html",revision:"5ea2016ebc14e1f1cd84c07b97f9e5b6"},{url:"data-solution/components/ai-assembler-conversion.html",revision:"7aee48da734780e4d5cd7e429706155f"},{url:"data-solution/components/ai-cases.html",revision:"523df148c8cb67406327a9d420cc868c"},{url:"data-solution/components/llm-applications.html",revision:"f5f064bf7344f4214e7dcc786583f08f"},{url:"data-solution/components/solution-item.html",revision:"3899e766924f94831dcfbac02cb01a2d"},{url:"event-information.html",revision:"444a102dff916592577f2965d88094b2"},{url:"event-information/components/eventinformationitem.html",revision:"6c92a67dfeb9331ca1cba6acb092788c"},{url:"faq.html",revision:"a0ff6cafca9f1e357ecfc4e49e764233"},{url:"faq/components/faq-items.html",revision:"2c2f1037507077bfe4d6475a3fedc2b9"},{url:"graduate-recruitment.html",revision:"025290cd64b71d1f61f33b9562f4ee0a"},{url:"graduate-recruitment/components/open-positions.html",revision:"3da0219f0d7f811aae2e6a9d9f5e53e7"},{url:"graduate-recruitment/components/to-new-graduates.html",revision:"964ea7b7b18f88cbcd5cbb3422079acd"},{url:"healthcare-business.html",revision:"bcf99afc08bddaaad0be4dd70a978b1a"},{url:"healthcare-business/components/brand.html",revision:"0da689543195b6c74b21e6ef25ec4e03"},{url:"healthcare-business/components/healthcarebusinessitem.html",revision:"b37019fb544596d1c1fa005ae7b21d37"},{url:"index.html",revision:"2e0d83de2909fbfca7c3628e01fbc44d"},{url:"infrastructure-business.html",revision:"9836614592a6871d57436af1cb0bb8b1"},{url:"infrastructure-business/components/cloud-enhancement-strategy.html",revision:"681798c74c2ada5afbea8dcb999f120c"},{url:"infrastructure-business/components/operational-efficiency-improvement.html",revision:"bb3da0400c37486156c6a8740630bd6b"},{url:"logistics-business.html",revision:"2d0ef92a2765286d5228852dafb6fd07"},{url:"logistics-business/components/ai-delivery.html",revision:"83d95c355a2da5fa24f907379a3247b7"},{url:"logistics-business/components/gartnercard.html",revision:"066a33db3d8c77fc951e5932c2ca637b"},{url:"logistics-business/components/logistics-dx-promotion.html",revision:"372d67c08e42b094e04e3838638f9f90"},{url:"logistics-business/components/logistics-industry-challenges.html",revision:"6a1deb39ab81b7e99402f608cfd88138"},{url:"logistics-business/components/logistics-management.html",revision:"c247c0f1ddb46e93bb2c773f773a9baa"},{url:"logistics-business/components/logisticsdxplatform.html",revision:"aa452755c0ce05101992cef3966adeeb"},{url:"logistics-business/components/manage-item.html",revision:"99a19d770023e0bba75a0690bd28e9b4"},{url:"map.html",revision:"26938d99e978fcdf259cc45334bbd506"},{url:"map/components/bus-travel.html",revision:"8b5a81e2e17b3bcb6d2d8865869a767a"},{url:"map/components/contact-information.html",revision:"09f1e4c3a426f234ecc7461a565c1d4c"},{url:"map/components/shuttle-bus.html",revision:"12a7b93d762b2fdfa8ee12701f518101"},{url:"map/components/train-travel.html",revision:"e19b8df8c32fb4f970350ed81cbd7c48"},{url:"message-from-president.html",revision:"5422e2f64afdd7b16d2fae421f422c99"},{url:"privacy-policy.html",revision:"e2e89074b10385d818abde1e232b7be6"},{url:"privacy-policy/components/content.html",revision:"17c35264557438dda19e8bef8d29611a"},{url:"recruitment-information.html",revision:"e12609bd8d123758038719a20dbe5131"},{url:"recruitment-process.html",revision:"cffdc0a796f7beb779ef05eae49ab482"},{url:"recruitment-process/components/recruitment-item.html",revision:"6cbe7c44d1a27bedaede2aa079a6f1db"},{url:"si-service-business.html",revision:"1c1729acef925a834097e2b3fe685b7c"},{url:"si-service-business/components/advanced-si-services.html",revision:"e8e77e261dba58e961b6ac6ea577256b"},{url:"si-service-business/components/automated-testing-tools.html",revision:"f0e1f756b950ca6aa4955a8e9ef25b48"},{url:"si-service-business/components/examples-achievements.html",revision:"3c83c9813f51f8a266477b24204e295e"},{url:"si-service-business/components/industry-dev.html",revision:"78a60d495caec22533e0c8ac64d7a9b7"},{url:"si-service-business/components/industry-experience.html",revision:"c9463f67646b91295e4ecf5ab3951206"},{url:"social-recruitment.html",revision:"37eac16623ee78c7a23af61be2a6de65"},{url:"social-recruitment/components/experiencedperson.html",revision:"32971fa11aa4b7b567f7b66d003907ba"},{url:"social-recruitment/components/inexperiencedperson.html",revision:"1ba56b1a111dd3d8f76c8f5b3fa27079"},{url:"terms-conditions.html",revision:"ecf225c037c33632399ba5bda88e4318"},{url:"terms-conditions/components/content.html",revision:"a5a48a424647c89cdb4aec3ead6a4027"},{url:"favicon.svg",revision:"a795ab195c26601ea433babed25a7d0d"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
