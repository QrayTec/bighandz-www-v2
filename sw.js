if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const a=s=>i(s,r),o={module:{uri:r},exports:t,require:a};e[r]=Promise.all(n.map((s=>o[s]||a(s)))).then((s=>(l(...s),t)))}}define(["./workbox-56a10583"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"adoption-intelligence.html",revision:"9cfc00fe2f2ba49e18ccc7c92ce51df9"},{url:"adoption-intelligence/components/adoption-item.html",revision:"3dfe599e79605164e3479c2fb46435f0"},{url:"adoption-intelligence/components/adoptioncard.html",revision:"22ac1b357d0adb5cd9db0978fb32a6b3"},{url:"assets/_...all_-7a8a7798.js",revision:null},{url:"assets/404-763e93cf.js",revision:null},{url:"assets/adoption-item-9082e90e.js",revision:null},{url:"assets/adoption-item.vue_vue_type_script_setup_true_lang-da7178a5.js",revision:null},{url:"assets/adoptionCard-eb6eb7a3.js",revision:null},{url:"assets/adoptionCard.vue_vue_type_script_setup_true_lang-85f1db3a.js",revision:null},{url:"assets/Advanced-SI-Services-26772f50.css",revision:null},{url:"assets/Advanced-SI-Services-3cb65ef0.js",revision:null},{url:"assets/Advanced-SI-Services.vue_vue_type_style_index_0_lang-63ae85c9.js",revision:null},{url:"assets/AI-Cases-4e61c744.js",revision:null},{url:"assets/AI-Cases.vue_vue_type_script_setup_true_lang-5bd990cb.js",revision:null},{url:"assets/AI-Delivery-b8c98efb.js",revision:null},{url:"assets/AI-Delivery.vue_vue_type_script_setup_true_lang-53e1b6ed.js",revision:null},{url:"assets/app-10568d31.js",revision:null},{url:"assets/blank-8d00903c.js",revision:null},{url:"assets/Brand-aabb0491.css",revision:null},{url:"assets/Brand-ab97dbb4.js",revision:null},{url:"assets/Cloud-Enhancement-Strategy-cd5beb28.js",revision:null},{url:"assets/Cloud-Enhancement-Strategy.vue_vue_type_script_setup_true_lang-27473c55.js",revision:null},{url:"assets/Company_staff_observation-ab21b6c6.js",revision:null},{url:"assets/CompanyHistory-98d1b082.js",revision:null},{url:"assets/CompanyHistory-c2e5ef10.css",revision:null},{url:"assets/CompanyProfileContent-a8f396a6.css",revision:null},{url:"assets/CompanyProfileContent-e800bd53.js",revision:null},{url:"assets/en-58641bd2.js",revision:null},{url:"assets/EventInformationItem-bc25571e.js",revision:null},{url:"assets/EventInformationItem-be1f658d.css",revision:null},{url:"assets/Examples-Achievements-b37af6a0.js",revision:null},{url:"assets/Examples-Achievements.vue_vue_type_script_setup_true_lang-06e89f09.js",revision:null},{url:"assets/FAQ-items-18ac027e.css",revision:null},{url:"assets/FAQ-items-ee89180c.js",revision:null},{url:"assets/GartnerCard-8b6bc873.js",revision:null},{url:"assets/HealthcareBusinessItem-fa5cb3e0.css",revision:null},{url:"assets/HealthcareBusinessItem-fec6cd17.js",revision:null},{url:"assets/home-6131cdfe.js",revision:null},{url:"assets/index-0598eab2.js",revision:null},{url:"assets/index-06861b31.js",revision:null},{url:"assets/index-201b3101.css",revision:null},{url:"assets/index-31a772fc.js",revision:null},{url:"assets/index-32c3053c.js",revision:null},{url:"assets/index-3517df90.css",revision:null},{url:"assets/index-470b2b28.css",revision:null},{url:"assets/index-4b59eac3.js",revision:null},{url:"assets/index-5b435ff7.js",revision:null},{url:"assets/index-5db5437d.js",revision:null},{url:"assets/index-65abb843.js",revision:null},{url:"assets/index-71f09e41.css",revision:null},{url:"assets/index-83f8da90.css",revision:null},{url:"assets/index-92089e12.js",revision:null},{url:"assets/index-a3eb12db.js",revision:null},{url:"assets/index-a8ee49ef.js",revision:null},{url:"assets/index-a952d969.js",revision:null},{url:"assets/index-b77d43e0.js",revision:null},{url:"assets/index-b8872fd8.js",revision:null},{url:"assets/index-c79f8fa8.js",revision:null},{url:"assets/index-cda84b33.css",revision:null},{url:"assets/index-db666781.css",revision:null},{url:"assets/index-f4310908.css",revision:null},{url:"assets/Industry-Dev-620f5a7a.js",revision:null},{url:"assets/Industry-Dev.vue_vue_type_script_setup_true_lang-de8e4b87.js",revision:null},{url:"assets/Industry-Experience-6612e563.js",revision:null},{url:"assets/Industry-Experience.vue_vue_type_script_setup_true_lang-deedcdab.js",revision:null},{url:"assets/Innovation-bdde9a90.css",revision:null},{url:"assets/Innovation-d4043ac9.js",revision:null},{url:"assets/Logistics-DX-Promotion-768455fc.js",revision:null},{url:"assets/Logistics-DX-Promotion.vue_vue_type_script_setup_true_lang-25e91671.js",revision:null},{url:"assets/Logistics-Industry-Challenges-d44e4161.js",revision:null},{url:"assets/Logistics-Industry-Challenges.vue_vue_type_script_setup_true_lang-33fb951e.js",revision:null},{url:"assets/Logistics-Management-7f886ddc.js",revision:null},{url:"assets/Logistics-Management.vue_vue_type_script_setup_true_lang-59149b95.js",revision:null},{url:"assets/LogisticsDXPlatform-a7b31e3c.js",revision:null},{url:"assets/LogisticsDXPlatform.vue_vue_type_script_setup_true_lang-be9c3579.js",revision:null},{url:"assets/Mission-1ae7973e.js",revision:null},{url:"assets/Mission-a99f6851.css",revision:null},{url:"assets/MovieItem-0108afd6.js",revision:null},{url:"assets/MovieItem-572c5d69.css",revision:null},{url:"assets/Open-Positions-5559d71b.js",revision:null},{url:"assets/Open-Positions.vue_vue_type_script_setup_true_lang-afe61504.js",revision:null},{url:"assets/operational-efficiency-improvement-18410a39.js",revision:null},{url:"assets/operational-efficiency-improvement.vue_vue_type_script_setup_true_lang-da87478b.js",revision:null},{url:"assets/PracticesGuidelines-08439bac.css",revision:null},{url:"assets/PracticesGuidelines-ef90071f.js",revision:null},{url:"assets/recruitment-item-72b0895c.css",revision:null},{url:"assets/recruitment-item-8f532b5b.js",revision:null},{url:"assets/rhombic-d3e9827d.js",revision:null},{url:"assets/solution-item-06a6f21e.js",revision:null},{url:"assets/solution-item.vue_vue_type_script_setup_true_lang-13ebcb06.js",revision:null},{url:"assets/steps.vue_vue_type_script_setup_true_lang-9571df97.js",revision:null},{url:"assets/SubPageTitle-269df12e.js",revision:null},{url:"assets/SubPageTitle-78d7172b.css",revision:null},{url:"assets/ThePageNav-4af81f4f.js",revision:null},{url:"assets/ThePageNav-fae5db76.css",revision:null},{url:"assets/to-new-graduates-93719b6f.js",revision:null},{url:"assets/to-new-graduates.vue_vue_type_script_setup_true_lang-f8160462.js",revision:null},{url:"assets/Values-32ff19fc.js",revision:null},{url:"assets/Values-e66e9964.css",revision:null},{url:"assets/video-dbb140ae.js",revision:null},{url:"assets/virtual_pwa-register-6b559490.js",revision:null},{url:"assets/Vision-7e4e6dad.css",revision:null},{url:"assets/Vision-b298aaa2.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"assets/zh-CN-78ecf232.js",revision:null},{url:"company-profile.html",revision:"1218d127b4d1eb63df37537ad6d8ce46"},{url:"company-profile/components/companyhistory.html",revision:"26731ed11a1b55ce5f03496a30d11ef9"},{url:"company-profile/components/companyprofilecontent.html",revision:"2f131eabf1b5579c071b513b6259f1af"},{url:"company-staff-observation.html",revision:"e7b840f00bd4220636c70a3a0daf1bf9"},{url:"company-staff-observation/components/movieitem.html",revision:"c1d407c12813d7874255da1dc693a930"},{url:"components/business-item.html",revision:"83584ea1078911b2372c7cd4ec8fda7a"},{url:"components/business.html",revision:"83584ea1078911b2372c7cd4ec8fda7a"},{url:"components/customers.html",revision:"83584ea1078911b2372c7cd4ec8fda7a"},{url:"components/field.html",revision:"83584ea1078911b2372c7cd4ec8fda7a"},{url:"components/first.html",revision:"83584ea1078911b2372c7cd4ec8fda7a"},{url:"corporate-philosophy-management-policy.html",revision:"2f6496d2fda162f8bb738fa517865c1c"},{url:"corporate-philosophy-management-policy/components/innovation.html",revision:"8f080ece3189fe87fd410a92fc7cc454"},{url:"corporate-philosophy-management-policy/components/mission.html",revision:"4a92c0938409a8621e7a5445670526f2"},{url:"corporate-philosophy-management-policy/components/practicesguidelines.html",revision:"80a64d02a61fa218281c846af1def04b"},{url:"corporate-philosophy-management-policy/components/values.html",revision:"3211810c1f269d04b22f1dee84f4cac8"},{url:"corporate-philosophy-management-policy/components/vision.html",revision:"60d3a1f3ff728e3fee37c3f56bd5c23f"},{url:"data-solution.html",revision:"b9fc418e494050dd208fc2ac74a8bc89"},{url:"data-solution/components/ai-cases.html",revision:"e3ce4aa191acf45ad287ef87add01230"},{url:"data-solution/components/solution-item.html",revision:"86587486802b135f71ea3f0532e1ef5c"},{url:"event-information.html",revision:"bff9240d8b43e6f392d9382949402047"},{url:"event-information/components/eventinformationitem.html",revision:"c20ea8d1cfd7bc4f8750af0f154c6210"},{url:"faq.html",revision:"6208b8d7f19757eb3c009772530d4e60"},{url:"faq/components/faq-items.html",revision:"39e5149d3879918dbc48b1b16efcaffb"},{url:"graduate-recruitment.html",revision:"2eca3be47b769afee5f66d5d78f20672"},{url:"graduate-recruitment/components/open-positions.html",revision:"f679221905e6c1d56540aed407087004"},{url:"graduate-recruitment/components/to-new-graduates.html",revision:"38e189ee6805f6398c304d7ed66d4ae3"},{url:"healthcare-business.html",revision:"a2f4086955fe35ceb9da115aca0fc59f"},{url:"healthcare-business/components/brand.html",revision:"a023576b8d7e60d83003a6cd8809fc45"},{url:"healthcare-business/components/healthcarebusinessitem.html",revision:"cc003a7dd0f48d860660b8c9238aaa3c"},{url:"index.html",revision:"4d0023b4456dec2491f9e8cd348dc1dd"},{url:"infrastructure-business.html",revision:"ac065f11f20aa71f78ac65311df11b25"},{url:"infrastructure-business/components/cloud-enhancement-strategy.html",revision:"c3f458116c989e92f368816b90aba558"},{url:"infrastructure-business/components/operational-efficiency-improvement.html",revision:"491a54af3765a254d460186d43dd3a58"},{url:"logistics-business.html",revision:"555cc0b7cc07e333750572301dfaa4c2"},{url:"logistics-business/components/ai-delivery.html",revision:"8acf383e5ef433ff12182af229084bf5"},{url:"logistics-business/components/gartnercard.html",revision:"e40846a57b43367a0ad18a5659576815"},{url:"logistics-business/components/logistics-dx-promotion.html",revision:"51167b63d30ec4c270ce867c687f06ac"},{url:"logistics-business/components/logistics-industry-challenges.html",revision:"a2876ec9ff0eac19641133afd5bd760a"},{url:"logistics-business/components/logistics-management.html",revision:"3605e8e909b063b8179b43f5b60a7584"},{url:"logistics-business/components/logisticsdxplatform.html",revision:"12495841bde0eaf213626cd4ecc37e1b"},{url:"message-from-president.html",revision:"a22500adce76aa61bed766072d071957"},{url:"recruitment-information.html",revision:"26cbb2be9a9dca9e8a886d2bcece9432"},{url:"recruitment-process.html",revision:"67d40bd04d713984b7631d9987292e60"},{url:"recruitment-process/components/recruitment-item.html",revision:"def5e562a8bf369a4efd8919d25fd19c"},{url:"si-service-business.html",revision:"479e567e24fe51f5537b7c4369c12091"},{url:"si-service-business/components/advanced-si-services.html",revision:"bcba89e629db645265170c44d46d8a75"},{url:"si-service-business/components/examples-achievements.html",revision:"5ae5f81a9dcaae5896563383a14be8ce"},{url:"si-service-business/components/industry-dev.html",revision:"2abe6dc6d3b85dea57eb968e21f76405"},{url:"si-service-business/components/industry-experience.html",revision:"6dd82b16693c6ff181aea7c2065967e7"},{url:"favicon.svg",revision:"a795ab195c26601ea433babed25a7d0d"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
