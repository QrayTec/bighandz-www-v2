if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const o=e=>i(e,r),a={module:{uri:r},exports:t,require:o};s[r]=Promise.all(n.map((e=>a[e]||o(e)))).then((e=>(l(...e),t)))}}define(["./workbox-56a10583"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"adoption-intelligence.html",revision:"ab49cfa2b7fbbc85f8ee72f63826a7e2"},{url:"adoption-intelligence/components/adoption-item.html",revision:"631dea332d1453ce39f39f41596ae8ea"},{url:"adoption-intelligence/components/adoptioncard.html",revision:"13bb5914253b4edbe3960b398ac80c0f"},{url:"assets/_...all_-f40dfaea.js",revision:null},{url:"assets/404-4efee620.js",revision:null},{url:"assets/adoption-item-093b00b4.js",revision:null},{url:"assets/adoption-item.vue_vue_type_script_setup_true_lang-405cb134.js",revision:null},{url:"assets/adoptionCard-3e41a614.js",revision:null},{url:"assets/adoptionCard.vue_vue_type_script_setup_true_lang-46a1847a.js",revision:null},{url:"assets/Advanced-SI-Services-26772f50.css",revision:null},{url:"assets/Advanced-SI-Services-bd6e8150.js",revision:null},{url:"assets/Advanced-SI-Services.vue_vue_type_style_index_0_lang-1b830a93.js",revision:null},{url:"assets/AI-Cases-01976adc.js",revision:null},{url:"assets/AI-Delivery-1dbcde7b.js",revision:null},{url:"assets/AI-Delivery.vue_vue_type_script_setup_true_lang-517afdd3.js",revision:null},{url:"assets/app-4ab83ad2.js",revision:null},{url:"assets/blank-75a4186e.js",revision:null},{url:"assets/Brand-702eeee7.js",revision:null},{url:"assets/Brand-aabb0491.css",revision:null},{url:"assets/Cloud-Enhancement-Strategy-d5c98efe.js",revision:null},{url:"assets/Cloud-Enhancement-Strategy.vue_vue_type_script_setup_true_lang-077006a4.js",revision:null},{url:"assets/Company_staff_observation-ab21b6c6.js",revision:null},{url:"assets/CompanyHistory-3fc7638b.css",revision:null},{url:"assets/CompanyHistory-f39281b6.js",revision:null},{url:"assets/CompanyProfileContent-a8f396a6.css",revision:null},{url:"assets/CompanyProfileContent-d6da0078.js",revision:null},{url:"assets/en-58641bd2.js",revision:null},{url:"assets/EventInformationItem-1ed41389.js",revision:null},{url:"assets/EventInformationItem-be1f658d.css",revision:null},{url:"assets/Examples-Achievements-4691df85.js",revision:null},{url:"assets/Examples-Achievements.vue_vue_type_script_setup_true_lang-9277c837.js",revision:null},{url:"assets/FAQ-items-18ac027e.css",revision:null},{url:"assets/FAQ-items-bd2ba8b5.js",revision:null},{url:"assets/GartnerCard-869f8ca0.js",revision:null},{url:"assets/HealthcareBusinessItem-3b916912.js",revision:null},{url:"assets/HealthcareBusinessItem-fa5cb3e0.css",revision:null},{url:"assets/home-38338b1d.js",revision:null},{url:"assets/index-201b3101.css",revision:null},{url:"assets/index-206ff922.js",revision:null},{url:"assets/index-2c62fa8f.js",revision:null},{url:"assets/index-33db3537.js",revision:null},{url:"assets/index-3517df90.css",revision:null},{url:"assets/index-35709d9f.js",revision:null},{url:"assets/index-470b2b28.css",revision:null},{url:"assets/index-4cdd2e59.js",revision:null},{url:"assets/index-5ef763dd.js",revision:null},{url:"assets/index-63bce7b5.js",revision:null},{url:"assets/index-6c9d293e.css",revision:null},{url:"assets/index-71c0d74a.js",revision:null},{url:"assets/index-80158a88.css",revision:null},{url:"assets/index-a389264b.css",revision:null},{url:"assets/index-b4e960d2.js",revision:null},{url:"assets/index-bcdef9bd.js",revision:null},{url:"assets/index-cde49746.js",revision:null},{url:"assets/index-d8264659.js",revision:null},{url:"assets/index-db666781.css",revision:null},{url:"assets/index-dc73014d.js",revision:null},{url:"assets/index-ddae00db.js",revision:null},{url:"assets/index-eb619ef9.css",revision:null},{url:"assets/index-f7f4ea6d.js",revision:null},{url:"assets/index-fe4e6acf.js",revision:null},{url:"assets/Industry-Dev-d4692e4a.js",revision:null},{url:"assets/Industry-Dev.vue_vue_type_script_setup_true_lang-58176855.js",revision:null},{url:"assets/Industry-Experience-42d92d99.js",revision:null},{url:"assets/Industry-Experience.vue_vue_type_script_setup_true_lang-918b08e3.js",revision:null},{url:"assets/InexperiencedPerson-364b6aa1.js",revision:null},{url:"assets/Innovation-97a7f546.js",revision:null},{url:"assets/Innovation-bdde9a90.css",revision:null},{url:"assets/Logistics-DX-Promotion-fb1f2b75.js",revision:null},{url:"assets/Logistics-DX-Promotion.vue_vue_type_script_setup_true_lang-bf4309e5.js",revision:null},{url:"assets/Logistics-Industry-Challenges-f5d9820e.js",revision:null},{url:"assets/Logistics-Industry-Challenges.vue_vue_type_script_setup_true_lang-05d66137.js",revision:null},{url:"assets/Logistics-Management-e564d7ba.js",revision:null},{url:"assets/Logistics-Management.vue_vue_type_script_setup_true_lang-6395cd7c.js",revision:null},{url:"assets/LogisticsDXPlatform-1869305b.js",revision:null},{url:"assets/LogisticsDXPlatform.vue_vue_type_script_setup_true_lang-2330b831.js",revision:null},{url:"assets/Mission-74da4f0c.js",revision:null},{url:"assets/Mission-a99f6851.css",revision:null},{url:"assets/MovieItem-572c5d69.css",revision:null},{url:"assets/MovieItem-a70d1715.js",revision:null},{url:"assets/Open-Positions-2d2bdc22.js",revision:null},{url:"assets/Open-Positions.vue_vue_type_script_setup_true_lang-906cf6e3.js",revision:null},{url:"assets/operational-efficiency-improvement-1016847f.js",revision:null},{url:"assets/operational-efficiency-improvement.vue_vue_type_script_setup_true_lang-928e89ac.js",revision:null},{url:"assets/PracticesGuidelines-08439bac.css",revision:null},{url:"assets/PracticesGuidelines-cb27d697.js",revision:null},{url:"assets/Publications.vue_vue_type_script_setup_true_lang-be9ce27c.js",revision:null},{url:"assets/recruitment-item-72b0895c.css",revision:null},{url:"assets/recruitment-item-947eb7a1.js",revision:null},{url:"assets/rhombic-d3e9827d.js",revision:null},{url:"assets/solution-item-2b0e5256.js",revision:null},{url:"assets/solution-item.vue_vue_type_script_setup_true_lang-55dafd99.js",revision:null},{url:"assets/steps.vue_vue_type_script_setup_true_lang-3ce57b42.js",revision:null},{url:"assets/SubPageTitle-169ae43a.css",revision:null},{url:"assets/SubPageTitle-e3afefd1.js",revision:null},{url:"assets/ThePageNav-14efe366.css",revision:null},{url:"assets/ThePageNav-307749e0.js",revision:null},{url:"assets/to-new-graduates-0b439af5.js",revision:null},{url:"assets/to-new-graduates.vue_vue_type_script_setup_true_lang-f38b43e6.js",revision:null},{url:"assets/Values-e66e9964.css",revision:null},{url:"assets/Values-e6ed5866.js",revision:null},{url:"assets/video-dbb140ae.js",revision:null},{url:"assets/virtual_pwa-register-6e252c83.js",revision:null},{url:"assets/Vision-7e4e6dad.css",revision:null},{url:"assets/Vision-b5c560cd.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"assets/zh-CN-78ecf232.js",revision:null},{url:"company-profile.html",revision:"837c09cb3505e7877449021e69bf8394"},{url:"company-profile/components/companyhistory.html",revision:"058f5ae8f0e8255ee4cba690ee3685dc"},{url:"company-profile/components/companyprofilecontent.html",revision:"748233ee8192b5ed2b375a9ef3b7fc6c"},{url:"company-staff-observation.html",revision:"8d3b93c56cfc86117813a4fbe334168d"},{url:"company-staff-observation/components/movieitem.html",revision:"c48b20ea03892fb1e95195709319bfc9"},{url:"components/business-item.html",revision:"2199e52442880f60f84f48b28ae24ed5"},{url:"components/business.html",revision:"2199e52442880f60f84f48b28ae24ed5"},{url:"components/customers.html",revision:"2199e52442880f60f84f48b28ae24ed5"},{url:"components/field.html",revision:"2199e52442880f60f84f48b28ae24ed5"},{url:"components/first.html",revision:"2199e52442880f60f84f48b28ae24ed5"},{url:"corporate-philosophy-management-policy.html",revision:"0986e6e04bbd3ceb015fbcdd0a2a4162"},{url:"corporate-philosophy-management-policy/components/innovation.html",revision:"1c537c0e1db7b5d96f70366bcf0e4034"},{url:"corporate-philosophy-management-policy/components/mission.html",revision:"f77ba350bcb8f782dc8ded4bbeabafd5"},{url:"corporate-philosophy-management-policy/components/practicesguidelines.html",revision:"3a23122806285f9981ab095cfea89824"},{url:"corporate-philosophy-management-policy/components/values.html",revision:"be3ecd86bc1ce189906a4cd75731e779"},{url:"corporate-philosophy-management-policy/components/vision.html",revision:"639e91219417efa52fcce218e11aef64"},{url:"data-solution.html",revision:"e30f18f07890dc58947afae310474416"},{url:"data-solution/components/ai-cases.html",revision:"a0b7cacb4160d9cd15c79356b8147229"},{url:"data-solution/components/solution-item.html",revision:"40b757e905462f91f88f7bd6535e98ba"},{url:"event-information.html",revision:"f9fc545cd61901b7591213a3810f0cac"},{url:"event-information/components/eventinformationitem.html",revision:"a91160606435d47d0442102c72c29a7d"},{url:"faq.html",revision:"79c282a502562925f8e9907d8e8b6714"},{url:"faq/components/faq-items.html",revision:"80d2d9d2280dc072339cb583254b98ea"},{url:"graduate-recruitment.html",revision:"d23b5ed4d0a0c7b32ba0f859fb878fd0"},{url:"graduate-recruitment/components/open-positions.html",revision:"2506cbeb010dc7f8efc1ce6314b9fcc4"},{url:"graduate-recruitment/components/to-new-graduates.html",revision:"7ef7a9fb45337b9b02475dbd0b9e8eaf"},{url:"healthcare-business.html",revision:"7cf121f0c77e54c522e0460079d70d38"},{url:"healthcare-business/components/brand.html",revision:"989d44a2c5d358cc2dcbe8488416cc14"},{url:"healthcare-business/components/healthcarebusinessitem.html",revision:"2f5a867a4d0813f67e01b6ad6a00f3b7"},{url:"index.html",revision:"fe70339b10a71197732577a0bfda3e74"},{url:"infrastructure-business.html",revision:"a6dfe7fcd7a9ac2f7be909301fd5d7e1"},{url:"infrastructure-business/components/cloud-enhancement-strategy.html",revision:"87f204ecf48e7a38aa3bde826f1cf8a7"},{url:"infrastructure-business/components/operational-efficiency-improvement.html",revision:"da7787c04a5e57b0ae9a2bce7e7bbb79"},{url:"logistics-business.html",revision:"7a520531d66569551fed941d524ab648"},{url:"logistics-business/components/ai-delivery.html",revision:"6a772a8069a4c65e8cbbd34121966e76"},{url:"logistics-business/components/gartnercard.html",revision:"cc8bd5e9a9491453b2c320f63918d257"},{url:"logistics-business/components/logistics-dx-promotion.html",revision:"616ea61d69b75f975a5b021da86bdea3"},{url:"logistics-business/components/logistics-industry-challenges.html",revision:"d37ca3540ecc5bd6a7ec999219f3b087"},{url:"logistics-business/components/logistics-management.html",revision:"4bd0d4822a49b151b769c7c293699505"},{url:"logistics-business/components/logisticsdxplatform.html",revision:"3362fdd940dde6396b656f873470d635"},{url:"message-from-president.html",revision:"b9be8b2c96fa1eec563146de59522d43"},{url:"recruitment-information.html",revision:"579fb205a3b148518831232cce55a01f"},{url:"recruitment-process.html",revision:"b22314b17e5cb6a298b8c30b71960138"},{url:"recruitment-process/components/recruitment-item.html",revision:"addea7b91da40181c9e23abf98836db5"},{url:"si-service-business.html",revision:"b92866ecd4f41516738511bf360d16b3"},{url:"si-service-business/components/advanced-si-services.html",revision:"18c4afddfcae83886f8803d8711613b6"},{url:"si-service-business/components/examples-achievements.html",revision:"c16b73473c76bd969dbc20d516423d45"},{url:"si-service-business/components/industry-dev.html",revision:"f4dcd11751461b29680c137aa61411a7"},{url:"si-service-business/components/industry-experience.html",revision:"1519dd5c52821fbf99515279e915eb73"},{url:"social-recruitment.html",revision:"06b4c6c99a02c9db033eed17ca7988e4"},{url:"social-recruitment/components/inexperiencedperson.html",revision:"19f527161a88d3c42b022b1059329ca1"},{url:"favicon.svg",revision:"a795ab195c26601ea433babed25a7d0d"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
