if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const t=e=>i(e,r),o={module:{uri:r},exports:a,require:t};s[r]=Promise.all(n.map((e=>o[e]||t(e)))).then((e=>(l(...e),a)))}}define(["./workbox-56a10583"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"adoption-intelligence.html",revision:"8ea03eb487f9ed5edb28d48affb2e5b5"},{url:"adoption-intelligence/components/adoption-item.html",revision:"2488c7d61157f78094126e30beece993"},{url:"adoption-intelligence/components/adoptioncard.html",revision:"ac4eae812535a2616ff1884ef008e6a6"},{url:"assets/_...all_-990d8673.js",revision:null},{url:"assets/404-3e7d6d66.js",revision:null},{url:"assets/adoption-item-16f8e9a1.js",revision:null},{url:"assets/adoption-item.vue_vue_type_script_setup_true_lang-c5d28524.js",revision:null},{url:"assets/adoptionCard-6979d2d2.js",revision:null},{url:"assets/adoptionCard.vue_vue_type_script_setup_true_lang-66ab53ab.js",revision:null},{url:"assets/Advanced-SI-Services-26772f50.css",revision:null},{url:"assets/Advanced-SI-Services-58d9b7af.js",revision:null},{url:"assets/Advanced-SI-Services.vue_vue_type_style_index_0_lang-223bb263.js",revision:null},{url:"assets/AI-Cases-f46878b2.js",revision:null},{url:"assets/AI-Cases.vue_vue_type_script_setup_true_lang-a05d071f.js",revision:null},{url:"assets/app-949443ee.js",revision:null},{url:"assets/blank-c8c0cccb.js",revision:null},{url:"assets/Brand-13f3a14b.js",revision:null},{url:"assets/Brand-aabb0491.css",revision:null},{url:"assets/Cloud-Enhancement-Strategy-8779bc28.js",revision:null},{url:"assets/Cloud-Enhancement-Strategy.vue_vue_type_script_setup_true_lang-0aeb82a8.js",revision:null},{url:"assets/Company_staff_observation-ab21b6c6.js",revision:null},{url:"assets/CompanyHistory-9c696e4a.js",revision:null},{url:"assets/CompanyHistory-c2e5ef10.css",revision:null},{url:"assets/CompanyProfileContent-7229078e.js",revision:null},{url:"assets/CompanyProfileContent-a8f396a6.css",revision:null},{url:"assets/en-58641bd2.js",revision:null},{url:"assets/EventInformationItem-be1f658d.css",revision:null},{url:"assets/EventInformationItem-e43ea404.js",revision:null},{url:"assets/Examples-Achievements-0a9d37aa.js",revision:null},{url:"assets/Examples-Achievements.vue_vue_type_script_setup_true_lang-bef4a42a.js",revision:null},{url:"assets/FAQ-items-079637da.js",revision:null},{url:"assets/FAQ-items-18ac027e.css",revision:null},{url:"assets/GartnerCard-c939382f.js",revision:null},{url:"assets/GartnerCard.vue_vue_type_script_setup_true_lang-d3e7d732.js",revision:null},{url:"assets/HealthcareBusinessItem-4ae65757.js",revision:null},{url:"assets/HealthcareBusinessItem-fa5cb3e0.css",revision:null},{url:"assets/home-75120f58.js",revision:null},{url:"assets/index-1e759615.js",revision:null},{url:"assets/index-201b3101.css",revision:null},{url:"assets/index-25560f96.js",revision:null},{url:"assets/index-2db5adb8.css",revision:null},{url:"assets/index-32352845.js",revision:null},{url:"assets/index-3517df90.css",revision:null},{url:"assets/index-470b2b28.css",revision:null},{url:"assets/index-7536c2e2.js",revision:null},{url:"assets/index-80ee4b26.js",revision:null},{url:"assets/index-8353cde4.js",revision:null},{url:"assets/index-83f8da90.css",revision:null},{url:"assets/index-85e38ebf.js",revision:null},{url:"assets/index-93ebb997.js",revision:null},{url:"assets/index-9a6bcdbd.js",revision:null},{url:"assets/index-a1e04868.js",revision:null},{url:"assets/index-bca91dc2.js",revision:null},{url:"assets/index-c8484dc4.js",revision:null},{url:"assets/index-cda84b33.css",revision:null},{url:"assets/index-db666781.css",revision:null},{url:"assets/index-ef0ce8bd.js",revision:null},{url:"assets/index-f00f1d44.js",revision:null},{url:"assets/index-f4310908.css",revision:null},{url:"assets/Industry-Dev-037e3e00.js",revision:null},{url:"assets/Industry-Dev.vue_vue_type_script_setup_true_lang-ce267bb7.js",revision:null},{url:"assets/Industry-Experience-39857bcd.js",revision:null},{url:"assets/Industry-Experience.vue_vue_type_script_setup_true_lang-de127377.js",revision:null},{url:"assets/Innovation-7675aff3.js",revision:null},{url:"assets/Innovation-bdde9a90.css",revision:null},{url:"assets/LogisticsDXPlatform-6aca58cd.js",revision:null},{url:"assets/LogisticsDXPlatform.vue_vue_type_script_setup_true_lang-c6f06bd5.js",revision:null},{url:"assets/Mission-87bf0324.js",revision:null},{url:"assets/Mission-a99f6851.css",revision:null},{url:"assets/MovieItem-53fd587c.js",revision:null},{url:"assets/MovieItem-572c5d69.css",revision:null},{url:"assets/operational-efficiency-improvement-8f3add85.js",revision:null},{url:"assets/operational-efficiency-improvement.vue_vue_type_script_setup_true_lang-e8653e13.js",revision:null},{url:"assets/PracticesGuidelines-08439bac.css",revision:null},{url:"assets/PracticesGuidelines-6ac3ee71.js",revision:null},{url:"assets/recruitment-item-72b0895c.css",revision:null},{url:"assets/recruitment-item-96d3ed89.js",revision:null},{url:"assets/rhombic-d3e9827d.js",revision:null},{url:"assets/solution-item-12ff7d01.js",revision:null},{url:"assets/solution-item.vue_vue_type_script_setup_true_lang-3fe86008.js",revision:null},{url:"assets/steps.vue_vue_type_script_setup_true_lang-ee0319c9.js",revision:null},{url:"assets/SubPageTitle-4dec8852.js",revision:null},{url:"assets/SubPageTitle-78d7172b.css",revision:null},{url:"assets/ThePageNav-3058d613.js",revision:null},{url:"assets/ThePageNav-fae5db76.css",revision:null},{url:"assets/Values-76ecfee6.js",revision:null},{url:"assets/Values-e66e9964.css",revision:null},{url:"assets/video-dbb140ae.js",revision:null},{url:"assets/virtual_pwa-register-17ced9db.js",revision:null},{url:"assets/Vision-082d4869.js",revision:null},{url:"assets/Vision-7e4e6dad.css",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"assets/zh-CN-78ecf232.js",revision:null},{url:"company-profile.html",revision:"871ba55964a6bbde10d5c5349e405f6e"},{url:"company-profile/components/companyhistory.html",revision:"afcd9e2dbb6f6b18d5ef998862762ec7"},{url:"company-profile/components/companyprofilecontent.html",revision:"fb7e866eea0cafa60cd76872057d6ce7"},{url:"company-staff-observation.html",revision:"ce644f1e3105ddebbe661113137c0167"},{url:"company-staff-observation/components/movieitem.html",revision:"77ee6f6435579b27de3fa9ec8a46ad20"},{url:"components/business-item.html",revision:"ae51be770bf942c220363136be1a27da"},{url:"components/business.html",revision:"ae51be770bf942c220363136be1a27da"},{url:"components/customers.html",revision:"ae51be770bf942c220363136be1a27da"},{url:"components/field.html",revision:"ae51be770bf942c220363136be1a27da"},{url:"components/first.html",revision:"ae51be770bf942c220363136be1a27da"},{url:"corporate-philosophy-management-policy.html",revision:"c6d2b385cdbab4baad474f714f7714d8"},{url:"corporate-philosophy-management-policy/components/innovation.html",revision:"df54407a9ca2030a72cd1d166789a031"},{url:"corporate-philosophy-management-policy/components/mission.html",revision:"79da99aaa0cd61287a1b8915ff5ecd4e"},{url:"corporate-philosophy-management-policy/components/practicesguidelines.html",revision:"94541ad7fd31558c431cc9cbcdb5d020"},{url:"corporate-philosophy-management-policy/components/values.html",revision:"49965457a8aaa0b358dfbc574aa6e25a"},{url:"corporate-philosophy-management-policy/components/vision.html",revision:"f1945a176bf545dc6eb767d0aa7128b2"},{url:"data-solution.html",revision:"d5aa167e86dbc2b42434df27894e928e"},{url:"data-solution/components/ai-cases.html",revision:"65388e8eb8db52c9bb70908dec0eef0f"},{url:"data-solution/components/solution-item.html",revision:"8f0eefbf2026feb71b80e79576af6164"},{url:"event-information.html",revision:"e72953b581aa8dca84313acc1de858c6"},{url:"event-information/components/eventinformationitem.html",revision:"5a49d0e8412762e7a40c7bfe544360ed"},{url:"faq.html",revision:"d1a960ec18b2402b99ae6894f29df4fa"},{url:"faq/components/faq-items.html",revision:"ace65add6a908627f8b9f221e25c71d2"},{url:"healthcare-business.html",revision:"4f26da2db698cbc5fb65f8149e205852"},{url:"healthcare-business/components/brand.html",revision:"108ccc61eb55d1fd96ee79aaf90c56f6"},{url:"healthcare-business/components/healthcarebusinessitem.html",revision:"4a77948fa18d1d63bca4bd25a72bef19"},{url:"index.html",revision:"914a38b0c44797a008b6c6d6461ea188"},{url:"infrastructure-business.html",revision:"024b49572a0886454f2a5eb965085891"},{url:"infrastructure-business/components/cloud-enhancement-strategy.html",revision:"e39c04ad4601765137ee2666f55c1d64"},{url:"infrastructure-business/components/operational-efficiency-improvement.html",revision:"5f73d5ed8403533f578466d4699a1215"},{url:"logistics-business.html",revision:"1c9c0001a795c7faf5e1cac3344164a9"},{url:"logistics-business/components/gartnercard.html",revision:"70286e32ef4432bb1e7ee5d5d9ae89af"},{url:"logistics-business/components/logisticsdxplatform.html",revision:"15f7e7897c63d9215e85a593dbb838ae"},{url:"message-from-president.html",revision:"e0d0b1e5c2065651c9fbfaedbda54f08"},{url:"recruitment-information.html",revision:"5b79e8552adfdd14bdb8572eabddd684"},{url:"recruitment-process.html",revision:"a62b1bef266d590bc85a3a1272f7a074"},{url:"recruitment-process/components/recruitment-item.html",revision:"6e27a3f5ece5e87d18834c9ce2d773fe"},{url:"si-service-business.html",revision:"678854a88b1679d752bd3acd3d634760"},{url:"si-service-business/components/advanced-si-services.html",revision:"575ddf5295a0ad4df7d7266db19202b8"},{url:"si-service-business/components/examples-achievements.html",revision:"c0bd779c6de9a13e26a329dc4ed3ca05"},{url:"si-service-business/components/industry-dev.html",revision:"f3c343568719e2c56f11173cba7101b5"},{url:"si-service-business/components/industry-experience.html",revision:"d315410ca4be0f228bce8e307b9bd077"},{url:"favicon.svg",revision:"a795ab195c26601ea433babed25a7d0d"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
