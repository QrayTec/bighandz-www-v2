if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const a=s=>i(s,r),u={module:{uri:r},exports:t,require:a};e[r]=Promise.all(n.map((s=>u[s]||a(s)))).then((s=>(l(...s),t)))}}define(["./workbox-56a10583"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"adoption-intelligence.html",revision:"f5ff47d96c7325ece008bcb3cfc57fd5"},{url:"adoption-intelligence/components/adoption-item.html",revision:"c99d5a2e717746b717470f1333d0987b"},{url:"adoption-intelligence/components/adoptioncard.html",revision:"00d49128b887a82877da202063fa4ec3"},{url:"assets/_...all_-378d6851.js",revision:null},{url:"assets/404-4576957c.js",revision:null},{url:"assets/adoption-item-6d8a2c21.js",revision:null},{url:"assets/adoption-item.vue_vue_type_script_setup_true_lang-ba47f637.js",revision:null},{url:"assets/adoptionCard-348e3303.js",revision:null},{url:"assets/adoptionCard.vue_vue_type_script_setup_true_lang-779d1962.js",revision:null},{url:"assets/Advanced-SI-Services-26772f50.css",revision:null},{url:"assets/Advanced-SI-Services-90cc3744.js",revision:null},{url:"assets/Advanced-SI-Services.vue_vue_type_style_index_0_lang-1ea86cf2.js",revision:null},{url:"assets/AI-Assembler-Conversion-40579cb9.js",revision:null},{url:"assets/AI-Assembler-Conversion.vue_vue_type_script_setup_true_lang-2b5ff557.js",revision:null},{url:"assets/AI-Cases-049726bd.js",revision:null},{url:"assets/AI-Cases.vue_vue_type_script_setup_true_lang-6532e8bd.js",revision:null},{url:"assets/AI-Delivery-888976b3.js",revision:null},{url:"assets/AI-Delivery.vue_vue_type_script_setup_true_lang-2f3c22b7.js",revision:null},{url:"assets/app-6e1c9a94.js",revision:null},{url:"assets/Automated-Testing-Tools-8396da6b.js",revision:null},{url:"assets/Automated-Testing-Tools.vue_vue_type_script_setup_true_lang-0110149c.js",revision:null},{url:"assets/blank-3f87a291.js",revision:null},{url:"assets/Brand-a88eee92.js",revision:null},{url:"assets/Brand-aabb0491.css",revision:null},{url:"assets/Bus-Travel-fd1fceb7.js",revision:null},{url:"assets/Bus-Travel.vue_vue_type_style_index_0_lang-34b98c71.js",revision:null},{url:"assets/Cloud-Enhancement-Strategy-32c5dfed.js",revision:null},{url:"assets/Cloud-Enhancement-Strategy.vue_vue_type_script_setup_true_lang-72d55637.js",revision:null},{url:"assets/Company_staff_observation-ab21b6c6.js",revision:null},{url:"assets/CompanyHistory-3fc7638b.css",revision:null},{url:"assets/CompanyHistory-8850ced2.js",revision:null},{url:"assets/CompanyProfileContent-01d46dd4.css",revision:null},{url:"assets/CompanyProfileContent-4dcc41de.js",revision:null},{url:"assets/Contact-Information-d8a18467.js",revision:null},{url:"assets/Contact-Information.vue_vue_type_style_index_0_lang-4e8c23c9.js",revision:null},{url:"assets/en-58641bd2.js",revision:null},{url:"assets/EventInformationItem-be1f658d.css",revision:null},{url:"assets/EventInformationItem-d2a4add1.js",revision:null},{url:"assets/Examples-Achievements-e553b70c.js",revision:null},{url:"assets/Examples-Achievements.vue_vue_type_script_setup_true_lang-e580bf94.js",revision:null},{url:"assets/FAQ-items-132b099a.js",revision:null},{url:"assets/FAQ-items-18ac027e.css",revision:null},{url:"assets/GartnerCard-b896c2ed.js",revision:null},{url:"assets/GartnerCard.vue_vue_type_script_setup_true_lang-67763e44.js",revision:null},{url:"assets/HealthcareBusinessItem-5487e5a5.js",revision:null},{url:"assets/HealthcareBusinessItem-fa5cb3e0.css",revision:null},{url:"assets/home-a58dd70b.js",revision:null},{url:"assets/index-085bd748.js",revision:null},{url:"assets/index-1bc52cf2.js",revision:null},{url:"assets/index-1e1daaab.js",revision:null},{url:"assets/index-201b3101.css",revision:null},{url:"assets/index-2639b734.js",revision:null},{url:"assets/index-2dd8b02b.js",revision:null},{url:"assets/index-3517df90.css",revision:null},{url:"assets/index-3a34221c.js",revision:null},{url:"assets/index-3ae902b4.css",revision:null},{url:"assets/index-470b2b28.css",revision:null},{url:"assets/index-65ebf1c7.js",revision:null},{url:"assets/index-70ff492c.js",revision:null},{url:"assets/index-83c3c380.js",revision:null},{url:"assets/index-8a08e37c.js",revision:null},{url:"assets/index-8cbb4425.js",revision:null},{url:"assets/index-94727bc6.js",revision:null},{url:"assets/index-9491cd61.js",revision:null},{url:"assets/index-a389264b.css",revision:null},{url:"assets/index-a9d16b52.js",revision:null},{url:"assets/index-bf0dd60c.js",revision:null},{url:"assets/index-db666781.css",revision:null},{url:"assets/index-e1781c82.css",revision:null},{url:"assets/index-e4cf19ec.js",revision:null},{url:"assets/index-eb619ef9.css",revision:null},{url:"assets/index-f989e682.js",revision:null},{url:"assets/Industry-Dev-0d5d34b9.js",revision:null},{url:"assets/Industry-Dev.vue_vue_type_script_setup_true_lang-f797c72c.js",revision:null},{url:"assets/Industry-Experience-a1d37745.js",revision:null},{url:"assets/Industry-Experience.vue_vue_type_script_setup_true_lang-3ccf4d05.js",revision:null},{url:"assets/InexperiencedPerson-9b265941.js",revision:null},{url:"assets/InexperiencedPerson.vue_vue_type_script_setup_true_lang-6e7c4bf7.js",revision:null},{url:"assets/Innovation-bdde9a90.css",revision:null},{url:"assets/Innovation-da9e8326.js",revision:null},{url:"assets/LLM-Applications-e2250b33.js",revision:null},{url:"assets/LLM-Applications.vue_vue_type_script_setup_true_lang-49b2be0d.js",revision:null},{url:"assets/Logistics-DX-Promotion-14cce4d2.js",revision:null},{url:"assets/Logistics-DX-Promotion.vue_vue_type_script_setup_true_lang-30e7202c.js",revision:null},{url:"assets/Logistics-Industry-Challenges-5e5cd734.js",revision:null},{url:"assets/Logistics-Industry-Challenges.vue_vue_type_script_setup_true_lang-3dde4680.js",revision:null},{url:"assets/Logistics-Management-06bfabdf.js",revision:null},{url:"assets/Logistics-Management.vue_vue_type_script_setup_true_lang-8c8ca18b.js",revision:null},{url:"assets/LogisticsDXPlatform-d665d52d.js",revision:null},{url:"assets/LogisticsDXPlatform.vue_vue_type_script_setup_true_lang-4efe07b6.js",revision:null},{url:"assets/Mission-a99f6851.css",revision:null},{url:"assets/Mission-e06711a6.js",revision:null},{url:"assets/MovieItem-572c5d69.css",revision:null},{url:"assets/MovieItem-ce7b93d0.js",revision:null},{url:"assets/Open-Positions-28d9dacf.js",revision:null},{url:"assets/Open-Positions.vue_vue_type_script_setup_true_lang-767df33d.js",revision:null},{url:"assets/operational-efficiency-improvement-71dd4c92.js",revision:null},{url:"assets/operational-efficiency-improvement.vue_vue_type_script_setup_true_lang-2ffac390.js",revision:null},{url:"assets/PracticesGuidelines-08439bac.css",revision:null},{url:"assets/PracticesGuidelines-33951471.js",revision:null},{url:"assets/Publications.vue_vue_type_script_setup_true_lang-e355adf0.js",revision:null},{url:"assets/recruitment-item-72b0895c.css",revision:null},{url:"assets/recruitment-item-ba5da86c.js",revision:null},{url:"assets/rhombic-d3e9827d.js",revision:null},{url:"assets/Shuttle-Bus-e3075f05.js",revision:null},{url:"assets/Shuttle-Bus.vue_vue_type_script_setup_true_lang-bc06bbcd.js",revision:null},{url:"assets/solution-item-347e0914.js",revision:null},{url:"assets/solution-item.vue_vue_type_script_setup_true_lang-ed39ed4b.js",revision:null},{url:"assets/steps.vue_vue_type_script_setup_true_lang-0d810316.js",revision:null},{url:"assets/SubPageTitle-169ae43a.css",revision:null},{url:"assets/SubPageTitle-79fd89dc.js",revision:null},{url:"assets/ThePageNav-14efe366.css",revision:null},{url:"assets/ThePageNav-962a9776.js",revision:null},{url:"assets/to-new-graduates-0412ae60.js",revision:null},{url:"assets/to-new-graduates.vue_vue_type_script_setup_true_lang-bb6adcd0.js",revision:null},{url:"assets/Train-Travel-bbb938d4.js",revision:null},{url:"assets/Train-Travel.vue_vue_type_style_index_0_lang-791650cb.js",revision:null},{url:"assets/Values-7e2244cd.js",revision:null},{url:"assets/Values-e66e9964.css",revision:null},{url:"assets/video-chunk-5fea95d1.js",revision:null},{url:"assets/video-dbb140ae.js",revision:null},{url:"assets/virtual_pwa-register-a2e68a38.js",revision:null},{url:"assets/Vision-2ddcc1b9.js",revision:null},{url:"assets/Vision-7e4e6dad.css",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"assets/zh-CN-78ecf232.js",revision:null},{url:"company-profile.html",revision:"4a9f2fb9d80022a64104f364618f6f77"},{url:"company-profile/components/companyhistory.html",revision:"c6b25d1a4084870708dafdc48bbf39fc"},{url:"company-profile/components/companyprofilecontent.html",revision:"9787e2c6f9725e0298055dbd2e491826"},{url:"company-staff-observation.html",revision:"ca6830e6ea6f4af8d70b9a370c2bf059"},{url:"company-staff-observation/components/movieitem.html",revision:"d52035635b0bf193f974612574344d0a"},{url:"components/business-item.html",revision:"0a25396b8a6829a4d787efe77319a4cb"},{url:"components/business.html",revision:"0a25396b8a6829a4d787efe77319a4cb"},{url:"components/customers.html",revision:"0a25396b8a6829a4d787efe77319a4cb"},{url:"components/field.html",revision:"0a25396b8a6829a4d787efe77319a4cb"},{url:"components/first.html",revision:"47789d4384f008f2cd26d75870f43b81"},{url:"corporate-philosophy-management-policy.html",revision:"2ed495d1c7e702e7db9190ca1f231853"},{url:"corporate-philosophy-management-policy/components/innovation.html",revision:"b195cfbdac444c649ad43817ddb8a402"},{url:"corporate-philosophy-management-policy/components/mission.html",revision:"3372c596cd52bba0c52409386c88649c"},{url:"corporate-philosophy-management-policy/components/practicesguidelines.html",revision:"ebfa3198090077a761336b1d54256190"},{url:"corporate-philosophy-management-policy/components/values.html",revision:"f869b764df6272a5bd262ea5acc5dca9"},{url:"corporate-philosophy-management-policy/components/vision.html",revision:"4a7f0bf32f2f6d3dbbb4d4a3d1e0a315"},{url:"data-solution.html",revision:"828198e10926678a21b4189c11862986"},{url:"data-solution/components/ai-assembler-conversion.html",revision:"6e04dcaffb343a9294f5e0c41f7b40d6"},{url:"data-solution/components/ai-cases.html",revision:"bdc6ee8f2c42889f6aa7c524870545f2"},{url:"data-solution/components/llm-applications.html",revision:"5d5f7a120ff38f432e4ba05f8bc553f9"},{url:"data-solution/components/solution-item.html",revision:"85f33ba8ab6856ac7d97aea569e7defc"},{url:"event-information.html",revision:"7652627828dcf341c0dba6ebbe49196b"},{url:"event-information/components/eventinformationitem.html",revision:"8b631ff596fbc1974f7af5dee4b04ffa"},{url:"faq.html",revision:"901b17d39cc6f5612c1589b4dfaa137d"},{url:"faq/components/faq-items.html",revision:"1a57da140b76a3f0553a8f8e9fac144b"},{url:"graduate-recruitment.html",revision:"e6a7df442871be2534a0c5f63151a40b"},{url:"graduate-recruitment/components/open-positions.html",revision:"b10d37d9d9d33fc71d6444dffd2e0fcf"},{url:"graduate-recruitment/components/to-new-graduates.html",revision:"8b16b5cea9ff3f7dcdf43d464f697e18"},{url:"healthcare-business.html",revision:"e832c5459b5d774ea72e90eb3dc32a9d"},{url:"healthcare-business/components/brand.html",revision:"7a30e84d145024efad26993cf534f098"},{url:"healthcare-business/components/healthcarebusinessitem.html",revision:"52dea3ab73c977404eba4e327b7e1d9f"},{url:"index.html",revision:"a96e14b1e5c4eb6b98d423e7d4d25c53"},{url:"infrastructure-business.html",revision:"5061ef9001ed1e96a941380e8aff6fed"},{url:"infrastructure-business/components/cloud-enhancement-strategy.html",revision:"dc0e1554f16a06be4c7402cf1d34a48c"},{url:"infrastructure-business/components/operational-efficiency-improvement.html",revision:"6b6ffe9a8516804a031204fe85236631"},{url:"logistics-business.html",revision:"25524ecc3e1dcf164e4d4f1b6bfc0028"},{url:"logistics-business/components/ai-delivery.html",revision:"ea1d7ff338579eb3af86344d7e79228c"},{url:"logistics-business/components/gartnercard.html",revision:"f4584c862fc87b74e4f4d1e912c081bd"},{url:"logistics-business/components/logistics-dx-promotion.html",revision:"3aea11a7bfce5b34e1fb502625480e40"},{url:"logistics-business/components/logistics-industry-challenges.html",revision:"5ab41dd0da1a5f918f402d991ce61e98"},{url:"logistics-business/components/logistics-management.html",revision:"359d8a7cbfee47aac143d66a8a787593"},{url:"logistics-business/components/logisticsdxplatform.html",revision:"ac9e4249d16cbe70da1ef3d482c2aadc"},{url:"map.html",revision:"7cc468c2bf84483734805b7c4ac060e8"},{url:"map/components/bus-travel.html",revision:"45386dd0380b3b93fa4fb48cf941a2f7"},{url:"map/components/contact-information.html",revision:"e49a06ffdeaea45e8fa4bc756abb1799"},{url:"map/components/shuttle-bus.html",revision:"13bbb0cb268945ab0bf1c6f2d18881df"},{url:"map/components/train-travel.html",revision:"8622708b66a762aed396b9a221c6ec6c"},{url:"message-from-president.html",revision:"6dd1a99b5ac07bdaf4b9dbaeab99f840"},{url:"recruitment-information.html",revision:"89b1953cd46c4d0b23fb4d8798505bdf"},{url:"recruitment-process.html",revision:"b853dad152d0889d28b11527fc6e7a38"},{url:"recruitment-process/components/recruitment-item.html",revision:"4d84a187744d813f209000e40af297f4"},{url:"si-service-business.html",revision:"9f728227c79755a3dd2f778a9d5c2be1"},{url:"si-service-business/components/advanced-si-services.html",revision:"6eb83865990f9992d51f8ea306d35e8d"},{url:"si-service-business/components/automated-testing-tools.html",revision:"a07e83063f8fe1b30f15fa1498072a6f"},{url:"si-service-business/components/examples-achievements.html",revision:"dda7ff618ea39ef346e567869fd4a1b9"},{url:"si-service-business/components/industry-dev.html",revision:"3e82450de8f746ac4b0c4dfe357634e0"},{url:"si-service-business/components/industry-experience.html",revision:"68bb19b36dbfceb5409f402a095f452b"},{url:"social-recruitment.html",revision:"90b9a10330ab5d6cf7a696af6523b90f"},{url:"social-recruitment/components/inexperiencedperson.html",revision:"68e982f218c6cb3f1878ddcef82b1e01"},{url:"favicon.svg",revision:"a795ab195c26601ea433babed25a7d0d"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
