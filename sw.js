if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const u=e=>n(e,t),a={module:{uri:t},exports:l,require:u};s[t]=Promise.all(i.map((e=>a[e]||u(e)))).then((e=>(r(...e),l)))}}define(["./workbox-56a10583"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"adoption-intelligence.html",revision:"819c5c99011eb05ca8bda32c42e5caa8"},{url:"adoption-intelligence/components/adoption-item.html",revision:"c4f5149dc75d1258725385c6f6006760"},{url:"adoption-intelligence/components/adoptioncard.html",revision:"093a8eac33d2e847db2eb4e31249a164"},{url:"assets/_...all_-51a42c2f.js",revision:null},{url:"assets/404-73f294a1.js",revision:null},{url:"assets/adoption-item-2a0fc6c6.js",revision:null},{url:"assets/adoption-item.vue_vue_type_script_setup_true_lang-f3c16765.js",revision:null},{url:"assets/adoptionCard-c7800468.js",revision:null},{url:"assets/adoptionCard.vue_vue_type_script_setup_true_lang-aa558fa1.js",revision:null},{url:"assets/Advanced-SI-Services-26772f50.css",revision:null},{url:"assets/Advanced-SI-Services-2814a130.js",revision:null},{url:"assets/Advanced-SI-Services.vue_vue_type_style_index_0_lang-93d01e63.js",revision:null},{url:"assets/AI-Application-Area-bb5da392.css",revision:null},{url:"assets/AI-Application-Area-e5c5ea5e.js",revision:null},{url:"assets/AI-Case-fbd37cd5.js",revision:null},{url:"assets/AI-Optimization-6703645c.js",revision:null},{url:"assets/AI-Optimization.vue_vue_type_script_setup_true_lang-82f96f46.js",revision:null},{url:"assets/Analytics-Transformation-Services-8085e000.js",revision:null},{url:"assets/Analytics-Transformation-Services.vue_vue_type_script_setup_true_lang-f2839f82.js",revision:null},{url:"assets/app-fc78197d.js",revision:null},{url:"assets/Automated-Testing-Tools-27ad8f8d.js",revision:null},{url:"assets/Automated-Testing-Tools.vue_vue_type_script_setup_true_lang-275c4048.js",revision:null},{url:"assets/blank-2e9d1090.js",revision:null},{url:"assets/Brand-11b71c2c.css",revision:null},{url:"assets/Brand-badb7d99.js",revision:null},{url:"assets/company-info-dc48b694.js",revision:null},{url:"assets/Company-Info-fbe92901.js",revision:null},{url:"assets/Company-Info.vue_vue_type_script_setup_true_lang-2e686c7c.js",revision:null},{url:"assets/company-info.vue_vue_type_script_setup_true_lang-9af66ebe.js",revision:null},{url:"assets/CompanyHistory-9ddc30a4.js",revision:null},{url:"assets/CompanyHistory-cdba2e02.css",revision:null},{url:"assets/CompanyProfileContent-b389b7ab.js",revision:null},{url:"assets/CompanyProfileContent.vue_vue_type_script_setup_true_lang-35bbec8c.js",revision:null},{url:"assets/Content-367e7cdd.js",revision:null},{url:"assets/Content-a7e7bdeb.js",revision:null},{url:"assets/Content-e5eef31f.js",revision:null},{url:"assets/Content.vue_vue_type_script_setup_true_lang-27cbf3f4.js",revision:null},{url:"assets/Content.vue_vue_type_script_setup_true_lang-49d3b797.js",revision:null},{url:"assets/Content.vue_vue_type_script_setup_true_lang-db0c6d98.js",revision:null},{url:"assets/Dev-Results-ce95112b.js",revision:null},{url:"assets/Dev-Results.vue_vue_type_script_setup_true_lang-03845eeb.js",revision:null},{url:"assets/Download-Template-d9fdd572.js",revision:null},{url:"assets/Download-Template.vue_vue_type_script_setup_true_lang-ae040ea8.js",revision:null},{url:"assets/en-58641bd2.js",revision:null},{url:"assets/EPR-631f98bd.js",revision:null},{url:"assets/EPR.vue_vue_type_script_setup_true_lang-55c87cd9.js",revision:null},{url:"assets/EventInformationItem-95944288.js",revision:null},{url:"assets/EventInformationItem-aa7afeda.css",revision:null},{url:"assets/Examples-Achievements-22468e8b.js",revision:null},{url:"assets/Examples-Achievements-add34874.css",revision:null},{url:"assets/ExperiencedPerson-232c661c.css",revision:null},{url:"assets/ExperiencedPerson-46f08375.js",revision:null},{url:"assets/FAQ-items-da9ce9a0.js",revision:null},{url:"assets/FAQ-items.vue_vue_type_script_setup_true_lang-68edce0d.js",revision:null},{url:"assets/fax-3fd6589a.js",revision:null},{url:"assets/GartnerCard-631e0ed4.js",revision:null},{url:"assets/GartnerCard.vue_vue_type_script_setup_true_lang-bb97223a.js",revision:null},{url:"assets/HealthcareBusinessItem-271c2f62.css",revision:null},{url:"assets/HealthcareBusinessItem-d8561f15.js",revision:null},{url:"assets/Holidays-Vacation-78fac2a5.js",revision:null},{url:"assets/Holidays-Vacation.vue_vue_type_script_setup_true_lang-272df3d0.js",revision:null},{url:"assets/home-f5f433c3.js",revision:null},{url:"assets/icon_1-3ff743fe.js",revision:null},{url:"assets/index-072c6046.js",revision:null},{url:"assets/index-0ae99317.js",revision:null},{url:"assets/index-0da7dfa6.js",revision:null},{url:"assets/index-0dd0f361.js",revision:null},{url:"assets/index-119d1e7a.css",revision:null},{url:"assets/index-14e51d23.css",revision:null},{url:"assets/index-19e2389c.js",revision:null},{url:"assets/index-47e851d9.js",revision:null},{url:"assets/index-4abf496d.js",revision:null},{url:"assets/index-4e15e4ad.js",revision:null},{url:"assets/index-5e122dab.js",revision:null},{url:"assets/index-5e716dcc.js",revision:null},{url:"assets/index-66bc7173.js",revision:null},{url:"assets/index-68b1da56.js",revision:null},{url:"assets/index-7a22adae.css",revision:null},{url:"assets/index-7e7f310d.css",revision:null},{url:"assets/index-84c9533c.css",revision:null},{url:"assets/index-8b69fbaf.js",revision:null},{url:"assets/index-9699b288.css",revision:null},{url:"assets/index-9ff02b72.js",revision:null},{url:"assets/index-a4194faf.js",revision:null},{url:"assets/index-a572fc18.css",revision:null},{url:"assets/index-b106a8b7.js",revision:null},{url:"assets/index-b55a5584.js",revision:null},{url:"assets/index-b671a2fb.js",revision:null},{url:"assets/index-c7911ffb.js",revision:null},{url:"assets/index-f721874d.js",revision:null},{url:"assets/Industry-Dev-7b420f2c.js",revision:null},{url:"assets/Industry-Dev.vue_vue_type_script_setup_true_lang-e375d16a.js",revision:null},{url:"assets/Industry-Experience-fcccf72e.js",revision:null},{url:"assets/Industry-Experience.vue_vue_type_script_setup_true_lang-3dde9df3.js",revision:null},{url:"assets/InexperiencedPerson-6840361f.css",revision:null},{url:"assets/InexperiencedPerson-a6fdd2d4.js",revision:null},{url:"assets/Infrastructure-Business-b69dc243.js",revision:null},{url:"assets/Infrastructure-Business.vue_vue_type_script_setup_true_lang-19aec3cd.js",revision:null},{url:"assets/Innovation-b3f64192.js",revision:null},{url:"assets/Innovation.vue_vue_type_script_setup_true_lang-d1291bfa.js",revision:null},{url:"assets/Introduce-69348339.js",revision:null},{url:"assets/Introduce-7dd6d0e8.js",revision:null},{url:"assets/Introduce.vue_vue_type_script_setup_true_lang-0edef1b8.js",revision:null},{url:"assets/Introduce.vue_vue_type_script_setup_true_lang-1452905d.js",revision:null},{url:"assets/Latest-Technology-12346572.js",revision:null},{url:"assets/Latest-Technology.vue_vue_type_script_setup_true_lang-63322b31.js",revision:null},{url:"assets/Logistics-Challenges-898cabeb.js",revision:null},{url:"assets/Logistics-Challenges.vue_vue_type_script_setup_true_lang-3581f0c0.js",revision:null},{url:"assets/Logistics-Management-04ea91c8.js",revision:null},{url:"assets/Logistics-Management.vue_vue_type_script_setup_true_lang-fddf46fe.js",revision:null},{url:"assets/Logistics-Platform-8de3a2d5.js",revision:null},{url:"assets/Logistics-Platform.vue_vue_type_script_setup_true_lang-996f7b5a.js",revision:null},{url:"assets/Logistics-Promotion-ca2fa09e.js",revision:null},{url:"assets/Logistics-Promotion.vue_vue_type_script_setup_true_lang-d2687f3c.js",revision:null},{url:"assets/Mission-968d4368.js",revision:null},{url:"assets/Mission.vue_vue_type_script_setup_true_lang-c887ff78.js",revision:null},{url:"assets/MovieItem-4895371b.css",revision:null},{url:"assets/MovieItem-d0c8e5b7.js",revision:null},{url:"assets/Open-Positions-254ac47e.js",revision:null},{url:"assets/Open-Positions.vue_vue_type_script_setup_true_lang-68974bff.js",revision:null},{url:"assets/Operations-6466eebf.css",revision:null},{url:"assets/Operations-fca43d95.js",revision:null},{url:"assets/Personnel-System-43314329.js",revision:null},{url:"assets/Personnel-System.vue_vue_type_script_setup_true_lang-4c8497e8.js",revision:null},{url:"assets/Platforms-Config-f820119e.js",revision:null},{url:"assets/Platforms-Config.vue_vue_type_script_setup_true_lang-359e305e.js",revision:null},{url:"assets/PracticesGuidelines-967d0f3c.js",revision:null},{url:"assets/PracticesGuidelines.vue_vue_type_script_setup_true_lang-aada48cc.js",revision:null},{url:"assets/Public-Transit-23f0376a.css",revision:null},{url:"assets/Public-Transit-45977669.js",revision:null},{url:"assets/Publications.vue_vue_type_script_setup_true_lang-9b8d8bec.js",revision:null},{url:"assets/Recruiting-Subjects-12a55f0c.js",revision:null},{url:"assets/Recruiting-Subjects.vue_vue_type_script_setup_true_lang-a19429b3.js",revision:null},{url:"assets/recruitment-item-87e63b8c.css",revision:null},{url:"assets/recruitment-item-fca3c271.js",revision:null},{url:"assets/Salary-ae005a68.js",revision:null},{url:"assets/Salary.vue_vue_type_script_setup_true_lang-738a65b8.js",revision:null},{url:"assets/Subject-application-02631fde.js",revision:null},{url:"assets/Subject-application.vue_vue_type_script_setup_true_lang-19e7ed1a.js",revision:null},{url:"assets/SubPageTitle-Bg.vue_vue_type_script_setup_true_lang-c50a6692.js",revision:null},{url:"assets/SubPageTitle.vue_vue_type_script_setup_true_lang-4bfda8b0.js",revision:null},{url:"assets/System-Dev-e4e5f66a.js",revision:null},{url:"assets/System-Dev.vue_vue_type_script_setup_true_lang-2b622eeb.js",revision:null},{url:"assets/System-Maintenance-c177b85b.js",revision:null},{url:"assets/System-Maintenance.vue_vue_type_script_setup_true_lang-ae366f96.js",revision:null},{url:"assets/TheBreadcrumbs.vue_vue_type_script_setup_true_lang-88e0eb30.js",revision:null},{url:"assets/TheDownloadBtn.vue_vue_type_script_setup_true_lang-57edd8c5.js",revision:null},{url:"assets/TheIconList.vue_vue_type_script_setup_true_lang-ac2ecf59.js",revision:null},{url:"assets/ThePageMinTitle-edd2cf83.js",revision:null},{url:"assets/ThePageMinTitle2-5e4040e8.js",revision:null},{url:"assets/ThePageMinTitle3-d01c397a.js",revision:null},{url:"assets/ThePageNav.vue_vue_type_script_setup_true_lang-6638cfdf.js",revision:null},{url:"assets/To-Graduates-fdfedeab.js",revision:null},{url:"assets/To-Graduates.vue_vue_type_script_setup_true_lang-7eeea609.js",revision:null},{url:"assets/Trial-Period-481f23b6.js",revision:null},{url:"assets/Trial-Period.vue_vue_type_script_setup_true_lang-40229f82.js",revision:null},{url:"assets/Use-Test-09cc3583.js",revision:null},{url:"assets/Use-Test.vue_vue_type_script_setup_true_lang-893716f2.js",revision:null},{url:"assets/Values-f9183377.js",revision:null},{url:"assets/Values.vue_vue_type_script_setup_true_lang-4d0faa44.js",revision:null},{url:"assets/video-chunk-b633910e.js",revision:null},{url:"assets/virtual_pwa-register-e39ad334.js",revision:null},{url:"assets/Virtualization-Engineer-0a5771b4.css",revision:null},{url:"assets/Virtualization-Engineer-e71c9a92.js",revision:null},{url:"assets/Vision-31838d7b.css",revision:null},{url:"assets/Vision-66db9823.js",revision:null},{url:"assets/Welfare-37025ff9.js",revision:null},{url:"assets/Welfare.vue_vue_type_script_setup_true_lang-d78324af.js",revision:null},{url:"assets/Work-Place-250c6be9.js",revision:null},{url:"assets/Work-Place.vue_vue_type_script_setup_true_lang-e5870994.js",revision:null},{url:"assets/Work-Timer-b5ccfa74.js",revision:null},{url:"assets/Work-Timer.vue_vue_type_script_setup_true_lang-ad16c28d.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"assets/zh-CN-78ecf232.js",revision:null},{url:"associated-company.html",revision:"38f93b0402ddd4f1b1bf79cf91c8a000"},{url:"associated-company/components/company-info.html",revision:"5b65d3e6763f940b1f0aff3f87835646"},{url:"company-profile.html",revision:"5088b3f422405503bdb6bbb5e57a5235"},{url:"company-profile/components/companyhistory.html",revision:"c1006e3eeb7efa3bc3c53b73a3cf1e71"},{url:"company-profile/components/companyprofilecontent.html",revision:"bed91e6c5245562e3ed292dc809eff88"},{url:"company-staff-observation.html",revision:"6358bf363b30aa61143fd1caadebacf8"},{url:"company-staff-observation/components/movieitem.html",revision:"0e69c3bb9131f66e16593efaa600a45c"},{url:"components/business-ball.html",revision:"213bb584cf4d257da057906db977967a"},{url:"components/business-companies.html",revision:"213bb584cf4d257da057906db977967a"},{url:"components/business-companies2.html",revision:"213bb584cf4d257da057906db977967a"},{url:"components/business-item.html",revision:"213bb584cf4d257da057906db977967a"},{url:"components/business-item2.html",revision:"213bb584cf4d257da057906db977967a"},{url:"components/business.html",revision:"213bb584cf4d257da057906db977967a"},{url:"components/businessecharts.html",revision:"213bb584cf4d257da057906db977967a"},{url:"components/customers.html",revision:"213bb584cf4d257da057906db977967a"},{url:"components/field.html",revision:"213bb584cf4d257da057906db977967a"},{url:"components/first.html",revision:"213bb584cf4d257da057906db977967a"},{url:"contact-us.html",revision:"2781e262fd0682b407350c5035299603"},{url:"contact-us/components/content.html",revision:"f36319061e82c8f686e030f05727a5b2"},{url:"corporate-philosophy-management-policy.html",revision:"385c02ddfd7e4e5efb6da705d422991b"},{url:"corporate-philosophy-management-policy/components/innovation.html",revision:"54b98461ed1d9315f29b814b4833f93c"},{url:"corporate-philosophy-management-policy/components/mission.html",revision:"0f5ffcd08229c8958f8ec5d270daa964"},{url:"corporate-philosophy-management-policy/components/practicesguidelines.html",revision:"7adab2c1c38f32d24f8b197040bb0799"},{url:"corporate-philosophy-management-policy/components/values.html",revision:"b2b1f3d8ecf5bf1b535ec2a3ee2d1645"},{url:"corporate-philosophy-management-policy/components/vision.html",revision:"04519c077bcce02ff2845bf8be344d58"},{url:"data-solution.html",revision:"6d385ee0863dd90dc5147b600fc890ac"},{url:"data-solution/components/ai-application-area.html",revision:"1cfd588cff605989d2006fd656df8bea"},{url:"data-solution/components/ai-case.html",revision:"ae06e7f2373ef30972c17bcf2d1fb507"},{url:"data-solution/components/analytics-transformation-services.html",revision:"26287030de5d4d6d52355fcc6711b216"},{url:"data-solution/components/introduce.html",revision:"538244348cd02c74b9dff34633aa3e9a"},{url:"event-information.html",revision:"178b59555b0143989191a7cdde446779"},{url:"event-information/components/eventinformationitem.html",revision:"c158e75b2b983bd6ab9d020f9546cc75"},{url:"faq.html",revision:"1815d15a618bb83350810f658d2c97f1"},{url:"faq/components/faq-items.html",revision:"7b8604856b29c9d9f5f4d72729bb685d"},{url:"graduate-recruitment.html",revision:"aabb8a3cf9dd767211d639135b63e591"},{url:"graduate-recruitment/components/holidays-vacation.html",revision:"9063498a776cdc67da22874a65ca5426"},{url:"graduate-recruitment/components/open-positions.html",revision:"8e99df573318bb7107ba982c0c4fb4fa"},{url:"graduate-recruitment/components/personnel-system.html",revision:"b71fcf60d92dae6d7e40f4df309cd80d"},{url:"graduate-recruitment/components/recruiting-subjects.html",revision:"c04fb208df5ac15e05e4717d260d0e50"},{url:"graduate-recruitment/components/salary.html",revision:"d71ef193666555a1101b5e75c73c3562"},{url:"graduate-recruitment/components/subject-application.html",revision:"350bd35b0d7087b60f908a5b5bcfabcb"},{url:"graduate-recruitment/components/to-graduates.html",revision:"543707f8b1c81f373daef52a4d4dbc58"},{url:"graduate-recruitment/components/trial-period.html",revision:"787b85b1522666308082adc11e0c5e53"},{url:"graduate-recruitment/components/welfare.html",revision:"82ef9ae6c606216d2da26a067632eed5"},{url:"graduate-recruitment/components/work-place.html",revision:"e7d70d019c7a312f54b8c4d22c0b6cfe"},{url:"graduate-recruitment/components/work-timer.html",revision:"1331f6b66f175d4321a3f1b625ebcbdf"},{url:"healthcare-business.html",revision:"c16eec68c460bf28a1dc8160e80790b4"},{url:"healthcare-business/components/brand.html",revision:"42e8861270c96744e42a0115c96972d8"},{url:"healthcare-business/components/healthcarebusinessitem.html",revision:"da17363034a75cabf77007a0782c75cb"},{url:"index.html",revision:"af7e9a53e29129d63806ce8bb2f66ca6"},{url:"infrastructure-business.html",revision:"4dcefddc2e92c98e0f8e74d0371eae47"},{url:"infrastructure-business/components/dev-results.html",revision:"6f91aaafed55e35fadf7142361a2886e"},{url:"infrastructure-business/components/infrastructure-business.html",revision:"55698d69331acff932d59c5a74a45aee"},{url:"infrastructure-business/components/introduce.html",revision:"14dbd0cb6838bab6fd06ae2786ad921c"},{url:"infrastructure-business/components/operations.html",revision:"45c4f7fdbb118a2e62e0786c2d7b1ebb"},{url:"infrastructure-business/components/virtualization-engineer.html",revision:"6012767d58bca1c233da0222c4bf45f0"},{url:"logistics-business.html",revision:"0d0613bcab0a7286429deecb2bf69fd4"},{url:"logistics-business/components/ai-optimization.html",revision:"643010cb97085cb8f0b7fb4ee859b5e1"},{url:"logistics-business/components/gartnercard.html",revision:"aaf3bc3aff8d759859e657a239088b56"},{url:"logistics-business/components/logistics-challenges.html",revision:"efd0684b0ce99aa685a37d171c17428e"},{url:"logistics-business/components/logistics-management.html",revision:"6b8eb325256e2e249f2c2accac904482"},{url:"logistics-business/components/logistics-platform.html",revision:"180b97744a03d409831b557412137bf4"},{url:"logistics-business/components/logistics-promotion.html",revision:"a68ce26f30883b260933a299a41a510d"},{url:"map.html",revision:"dcc5990dd03c651ac820a0729fa2c28a"},{url:"map/components/company-info.html",revision:"e7e067c6ff1d2e42c465f39570916683"},{url:"map/components/public-transit.html",revision:"e31e165453ce3ab8e1c837248b9c1b4c"},{url:"message-from-president.html",revision:"70c11da9dc021143aa5ebd02df3c5df0"},{url:"privacy-policy.html",revision:"f395ab1f54f476adac5b9d06a2aa6780"},{url:"privacy-policy/components/content.html",revision:"84c510782933ffc9fe2a061fadd0d239"},{url:"recruitment-process.html",revision:"f8ac06d8e00e71dc9d893d10dde6d753"},{url:"recruitment-process/components/recruitment-item.html",revision:"f178787debd048825f0e5c9d68938af1"},{url:"si-service-business.html",revision:"33ceb5678e836c4601ba1ac5a53fab6e"},{url:"si-service-business/components/advanced-si-services.html",revision:"700bad9569c65789fcd558717d18327c"},{url:"si-service-business/components/automated-testing-tools.html",revision:"e79c1278ad7f1b0a33befa190dbdaf08"},{url:"si-service-business/components/epr.html",revision:"61931e1552ffd61253812edeee3a830a"},{url:"si-service-business/components/examples-achievements.html",revision:"7c6f0e07d5345eb6dacf63e1c6f2e9e4"},{url:"si-service-business/components/industry-dev.html",revision:"d301f503cce8aa8deaaccdb38c20c11e"},{url:"si-service-business/components/industry-experience.html",revision:"615dbea99b03ba410ba8190b59697ee6"},{url:"si-service-business/components/latest-technology.html",revision:"27e00b0ca25f517615d5aea82b3108c0"},{url:"si-service-business/components/platforms-config.html",revision:"7ec15823a8900220ae1bf29a01bcdc79"},{url:"si-service-business/components/system-dev.html",revision:"a204bc114737bc9335f7930f4ea93da8"},{url:"si-service-business/components/system-maintenance.html",revision:"c355ca514ce2774b2f177c4e6af80471"},{url:"si-service-business/components/use-test.html",revision:"0fdbeff0fb5afb459e5e59a7ecce354a"},{url:"social-recruitment.html",revision:"1113d7e8870ad43ad098cc861f0138a0"},{url:"social-recruitment/components/download-template.html",revision:"38fb199bbd5f848be56999e2b61d8720"},{url:"social-recruitment/components/experiencedperson.html",revision:"c2257cd0b29b3b5bc3c2c1cfad8fea17"},{url:"social-recruitment/components/inexperiencedperson.html",revision:"b15d7876925fa518ab028aa495b4a387"},{url:"terms-conditions.html",revision:"505bdb0f1421d40ea00dbd8aac757776"},{url:"terms-conditions/components/content.html",revision:"6ee53ec0862e90c6e9968358660f5552"},{url:"favicon.png",revision:"b2cf3bd6ff6b0079a6fdee5c154e1e25"},{url:"safari-pinned-tab.png",revision:"b2cf3bd6ff6b0079a6fdee5c154e1e25"},{url:"pwa-192x192.png",revision:"b2cf3bd6ff6b0079a6fdee5c154e1e25"},{url:"pwa-512x512.png",revision:"b2cf3bd6ff6b0079a6fdee5c154e1e25"},{url:"manifest.webmanifest",revision:"8b8ba08b4fdd5d1dd746014e188e3be1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
