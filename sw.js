if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const a=e=>n(e,l),u={module:{uri:l},exports:t,require:a};s[l]=Promise.all(i.map((e=>u[e]||a(e)))).then((e=>(r(...e),t)))}}define(["./workbox-56a10583"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"adoption-intelligence.html",revision:"2ad8867de929e97ecbcf9fdd7ddddacd"},{url:"adoption-intelligence/components/adoption-item.html",revision:"9f79ae4bcebb5e4e50362c1d50ea86de"},{url:"adoption-intelligence/components/adoptioncard.html",revision:"3f1de6de9bc6afb0e0019a7953f1c195"},{url:"assets/_...all_-cb9e20b0.js",revision:null},{url:"assets/404-3fe19f52.js",revision:null},{url:"assets/adoption-item-a1e1414c.js",revision:null},{url:"assets/adoption-item.vue_vue_type_script_setup_true_lang-558a7bc6.js",revision:null},{url:"assets/adoptionCard-0ab07078.js",revision:null},{url:"assets/adoptionCard.vue_vue_type_script_setup_true_lang-134dd1cb.js",revision:null},{url:"assets/Advanced-SI-Services-26772f50.css",revision:null},{url:"assets/Advanced-SI-Services-469e5727.js",revision:null},{url:"assets/Advanced-SI-Services.vue_vue_type_style_index_0_lang-cbe53948.js",revision:null},{url:"assets/AI-Application-Area-01d30fac.css",revision:null},{url:"assets/AI-Application-Area-690f60c2.js",revision:null},{url:"assets/AI-Case-3c6a6161.js",revision:null},{url:"assets/AI-Optimization-eae916b2.js",revision:null},{url:"assets/AI-Optimization.vue_vue_type_script_setup_true_lang-88cdf170.js",revision:null},{url:"assets/Analytics-Transformation-Services-dd00a858.js",revision:null},{url:"assets/Analytics-Transformation-Services.vue_vue_type_script_setup_true_lang-8da54fbc.js",revision:null},{url:"assets/app-45004cf1.js",revision:null},{url:"assets/Automated-Testing-Tools-c8ab52ff.js",revision:null},{url:"assets/Automated-Testing-Tools.vue_vue_type_script_setup_true_lang-b58aceb3.js",revision:null},{url:"assets/blank-0e80abf5.js",revision:null},{url:"assets/Brand-5dc5ffa9.js",revision:null},{url:"assets/Brand-fbad39da.css",revision:null},{url:"assets/Bus-Travel-57dc6473.js",revision:null},{url:"assets/Bus-Travel.vue_vue_type_style_index_0_lang-085d94e9.js",revision:null},{url:"assets/Company_staff_observation-ab21b6c6.js",revision:null},{url:"assets/company-info-c80b784b.js",revision:null},{url:"assets/company-info.vue_vue_type_script_setup_true_lang-788e149c.js",revision:null},{url:"assets/CompanyHistory-0a7891a4.css",revision:null},{url:"assets/CompanyHistory-a3c77fae.js",revision:null},{url:"assets/CompanyProfileContent-34799a91.js",revision:null},{url:"assets/CompanyProfileContent-cbfdc023.css",revision:null},{url:"assets/Contact-Information-5b5bfaeb.js",revision:null},{url:"assets/Contact-Information.vue_vue_type_style_index_0_lang-3586726b.js",revision:null},{url:"assets/Content-87192932.js",revision:null},{url:"assets/Content-b7c7bc4c.js",revision:null},{url:"assets/Content-cc2fad94.js",revision:null},{url:"assets/Content.vue_vue_type_script_setup_true_lang-6fc0b669.js",revision:null},{url:"assets/Content.vue_vue_type_script_setup_true_lang-7d660843.js",revision:null},{url:"assets/Content.vue_vue_type_script_setup_true_lang-e18fc800.js",revision:null},{url:"assets/Dev-Results-c9745a72.js",revision:null},{url:"assets/Dev-Results.vue_vue_type_script_setup_true_lang-6d3fcf0f.js",revision:null},{url:"assets/Download-Template-55f0dff1.js",revision:null},{url:"assets/Download-Template.vue_vue_type_script_setup_true_lang-f6ebd955.js",revision:null},{url:"assets/en-58641bd2.js",revision:null},{url:"assets/EPR-ed0a5048.js",revision:null},{url:"assets/EPR.vue_vue_type_script_setup_true_lang-c3885014.js",revision:null},{url:"assets/EventInformationItem-aa7afeda.css",revision:null},{url:"assets/EventInformationItem-baed48a9.js",revision:null},{url:"assets/Examples-Achievements-0a0e46d4.css",revision:null},{url:"assets/Examples-Achievements-43b7f2c5.js",revision:null},{url:"assets/ExperiencedPerson-7c87e507.css",revision:null},{url:"assets/ExperiencedPerson-f562935e.js",revision:null},{url:"assets/FAQ-items-6d6325eb.css",revision:null},{url:"assets/FAQ-items-84a2239c.js",revision:null},{url:"assets/GartnerCard-7d427a13.js",revision:null},{url:"assets/GartnerCard.vue_vue_type_script_setup_true_lang-3d351d56.js",revision:null},{url:"assets/HealthcareBusinessItem-04b2000a.js",revision:null},{url:"assets/HealthcareBusinessItem-2e165426.css",revision:null},{url:"assets/Holidays-Vacation-e5ba702d.js",revision:null},{url:"assets/Holidays-Vacation.vue_vue_type_script_setup_true_lang-02c97c94.js",revision:null},{url:"assets/home-2143a569.js",revision:null},{url:"assets/icon_1-3ff743fe.js",revision:null},{url:"assets/index-01c4afea.js",revision:null},{url:"assets/index-06db1a33.js",revision:null},{url:"assets/index-0ee62b2f.js",revision:null},{url:"assets/index-14e51d23.css",revision:null},{url:"assets/index-201b3101.css",revision:null},{url:"assets/index-288fdfe6.js",revision:null},{url:"assets/index-2f4e6c35.js",revision:null},{url:"assets/index-32f773a1.js",revision:null},{url:"assets/index-35b8deec.js",revision:null},{url:"assets/index-39b902b0.js",revision:null},{url:"assets/index-4634a83e.js",revision:null},{url:"assets/index-470b2b28.css",revision:null},{url:"assets/index-5c933615.js",revision:null},{url:"assets/index-6dadbd57.js",revision:null},{url:"assets/index-7204d1fe.js",revision:null},{url:"assets/index-974dc503.js",revision:null},{url:"assets/index-a018761e.js",revision:null},{url:"assets/index-a389264b.css",revision:null},{url:"assets/index-a8d09479.js",revision:null},{url:"assets/index-c7bcef64.css",revision:null},{url:"assets/index-cd8f9ee0.js",revision:null},{url:"assets/index-d3da590f.js",revision:null},{url:"assets/index-d5c0f2e4.js",revision:null},{url:"assets/index-db666781.css",revision:null},{url:"assets/index-e91f4e4b.js",revision:null},{url:"assets/index-e9c154b8.js",revision:null},{url:"assets/index-eb619ef9.css",revision:null},{url:"assets/index-f6476ee1.css",revision:null},{url:"assets/index-fb0953d8.js",revision:null},{url:"assets/Industry-Dev-4adfd870.js",revision:null},{url:"assets/Industry-Dev.vue_vue_type_script_setup_true_lang-8c2b5e2a.js",revision:null},{url:"assets/Industry-Experience-bdc93d64.js",revision:null},{url:"assets/Industry-Experience.vue_vue_type_script_setup_true_lang-57f1da7e.js",revision:null},{url:"assets/InexperiencedPerson-aa912722.css",revision:null},{url:"assets/InexperiencedPerson-e8f0cf8b.js",revision:null},{url:"assets/Infrastructure-Business-c61916f3.js",revision:null},{url:"assets/Infrastructure-Business.vue_vue_type_script_setup_true_lang-fc3e5ac6.js",revision:null},{url:"assets/Innovation-10d558d1.css",revision:null},{url:"assets/Innovation-8adbba19.js",revision:null},{url:"assets/Introduce-205d8f5f.js",revision:null},{url:"assets/Introduce-bae54810.js",revision:null},{url:"assets/Introduce.vue_vue_type_script_setup_true_lang-694542b1.js",revision:null},{url:"assets/Introduce.vue_vue_type_script_setup_true_lang-d1c3c0c8.js",revision:null},{url:"assets/Latest-Technology-111a0bac.js",revision:null},{url:"assets/Latest-Technology.vue_vue_type_script_setup_true_lang-a0ddf3fe.js",revision:null},{url:"assets/Logistics-Challenges-15a811b5.js",revision:null},{url:"assets/Logistics-Challenges.vue_vue_type_script_setup_true_lang-1ead3803.js",revision:null},{url:"assets/Logistics-Management-58bcd2d1.js",revision:null},{url:"assets/Logistics-Management.vue_vue_type_script_setup_true_lang-da01837f.js",revision:null},{url:"assets/Logistics-Platform-7ff2df62.js",revision:null},{url:"assets/Logistics-Platform.vue_vue_type_script_setup_true_lang-0cd89ca9.js",revision:null},{url:"assets/Logistics-Promotion-66248118.js",revision:null},{url:"assets/Logistics-Promotion.vue_vue_type_script_setup_true_lang-54610cae.js",revision:null},{url:"assets/Mission-0e92cb3d.js",revision:null},{url:"assets/Mission-33fdff3c.css",revision:null},{url:"assets/MovieItem-45d44f91.css",revision:null},{url:"assets/MovieItem-9f438aad.js",revision:null},{url:"assets/Open-Positions-cfca567e.js",revision:null},{url:"assets/Open-Positions.vue_vue_type_script_setup_true_lang-72d9883b.js",revision:null},{url:"assets/Operations-815bafcd.css",revision:null},{url:"assets/Operations-e35b7a3d.js",revision:null},{url:"assets/page_nav-8718e5a1.js",revision:null},{url:"assets/Personnel-System-231b759e.js",revision:null},{url:"assets/Personnel-System.vue_vue_type_script_setup_true_lang-c5a7496f.js",revision:null},{url:"assets/Platforms-Config-dd8a4a90.js",revision:null},{url:"assets/Platforms-Config.vue_vue_type_script_setup_true_lang-cfc3fc63.js",revision:null},{url:"assets/PracticesGuidelines-5fdd9ee8.css",revision:null},{url:"assets/PracticesGuidelines-932c608a.js",revision:null},{url:"assets/Publications.vue_vue_type_script_setup_true_lang-78040b20.js",revision:null},{url:"assets/Recruiting-Subjects-22b0fd51.js",revision:null},{url:"assets/Recruiting-Subjects.vue_vue_type_script_setup_true_lang-8a601d0e.js",revision:null},{url:"assets/recruitment-item-baafe97f.js",revision:null},{url:"assets/recruitment-item-f0078f61.css",revision:null},{url:"assets/Salary-bad13f98.js",revision:null},{url:"assets/Salary.vue_vue_type_script_setup_true_lang-cfe66954.js",revision:null},{url:"assets/Shuttle-Bus-ac0ed34c.js",revision:null},{url:"assets/Shuttle-Bus.vue_vue_type_script_setup_true_lang-2a05528f.js",revision:null},{url:"assets/steps.vue_vue_type_script_setup_true_lang-d60a0c5e.js",revision:null},{url:"assets/Subject-application-33bfd46f.js",revision:null},{url:"assets/Subject-application.vue_vue_type_script_setup_true_lang-1eed4935.js",revision:null},{url:"assets/SubPageTitle-f2f33b25.css",revision:null},{url:"assets/SubPageTitle-fee91eab.js",revision:null},{url:"assets/System-Dev-fcfeae92.js",revision:null},{url:"assets/System-Dev.vue_vue_type_script_setup_true_lang-1a22b83f.js",revision:null},{url:"assets/System-Maintenance-4e6b91d6.js",revision:null},{url:"assets/System-Maintenance.vue_vue_type_script_setup_true_lang-2f84effd.js",revision:null},{url:"assets/TheBreadcrumbs.vue_vue_type_script_setup_true_lang-c909ee48.js",revision:null},{url:"assets/TheDownloadBtn-b378b6f9.js",revision:null},{url:"assets/TheIconList.vue_vue_type_script_setup_true_lang-8296b737.js",revision:null},{url:"assets/ThePageMinTitle-7cbfd53d.js",revision:null},{url:"assets/ThePageMinTitle2-deb57404.js",revision:null},{url:"assets/ThePageNav-7607eb41.js",revision:null},{url:"assets/ThePageNav-ed3849d8.css",revision:null},{url:"assets/ThePageNav2.vue_vue_type_script_setup_true_lang-f3e3b89d.js",revision:null},{url:"assets/To-Graduates-5af98af1.js",revision:null},{url:"assets/To-Graduates.vue_vue_type_script_setup_true_lang-9924c6bf.js",revision:null},{url:"assets/Train-Travel-462bee27.js",revision:null},{url:"assets/Train-Travel.vue_vue_type_script_setup_true_lang-298a0288.js",revision:null},{url:"assets/Trial-Period-fe9e97d2.js",revision:null},{url:"assets/Trial-Period.vue_vue_type_script_setup_true_lang-0fa320ce.js",revision:null},{url:"assets/Values-d02e8216.js",revision:null},{url:"assets/Values-e66e9964.css",revision:null},{url:"assets/video-chunk-4ed993c7.js",revision:null},{url:"assets/virtual_pwa-register-af861430.js",revision:null},{url:"assets/Virtualization-Engineer-16c57f4f.js",revision:null},{url:"assets/Virtualization-Engineer-c787d588.css",revision:null},{url:"assets/Vision-31838d7b.css",revision:null},{url:"assets/Vision-9e57f202.js",revision:null},{url:"assets/Welfare-b7b02e0c.js",revision:null},{url:"assets/Welfare.vue_vue_type_script_setup_true_lang-d18e97be.js",revision:null},{url:"assets/Work-Place-7c130bb4.js",revision:null},{url:"assets/Work-Place.vue_vue_type_script_setup_true_lang-1476a4cd.js",revision:null},{url:"assets/Work-Timer-26869775.js",revision:null},{url:"assets/Work-Timer.vue_vue_type_script_setup_true_lang-a0d8806f.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"assets/zh-CN-78ecf232.js",revision:null},{url:"associated-company.html",revision:"b6e9837d84d830fca10c247539d6ec60"},{url:"associated-company/components/company-info.html",revision:"31606faf74641e4892a7a41775842b9b"},{url:"company-profile.html",revision:"fafec440c3ecbe9a46f1533fa0d7233b"},{url:"company-profile/components/companyhistory.html",revision:"eb1d88c0c24b081d183cb8f253787c98"},{url:"company-profile/components/companyprofilecontent.html",revision:"8dfb750d27e22aa0e1ae082a8424c55c"},{url:"company-staff-observation.html",revision:"16be96c3c863f465b648d4f59848881a"},{url:"company-staff-observation/components/movieitem.html",revision:"bd05a66416f8cf03ee05d5bde5855e71"},{url:"components/business-item.html",revision:"6f71ddaa177a0bef5083a5c88b89b5d9"},{url:"components/business.html",revision:"6f71ddaa177a0bef5083a5c88b89b5d9"},{url:"components/customers.html",revision:"6f71ddaa177a0bef5083a5c88b89b5d9"},{url:"components/field.html",revision:"6f71ddaa177a0bef5083a5c88b89b5d9"},{url:"components/first.html",revision:"6f71ddaa177a0bef5083a5c88b89b5d9"},{url:"contact-us.html",revision:"b3e90a2b4fe9db66d75d4a8a7260f387"},{url:"contact-us/components/content.html",revision:"a59f27ea29b8928a877567a41afb5aca"},{url:"corporate-philosophy-management-policy.html",revision:"eadb7e8dc49b4d70d32d0a552c4e3b96"},{url:"corporate-philosophy-management-policy/components/innovation.html",revision:"9b1d6ba2d86dfeca944ab7f7401dc7a5"},{url:"corporate-philosophy-management-policy/components/mission.html",revision:"344b491cd0c305248e9fcd8c8780600e"},{url:"corporate-philosophy-management-policy/components/practicesguidelines.html",revision:"517b80157c248e9e45707db3785a1f1e"},{url:"corporate-philosophy-management-policy/components/values.html",revision:"b31a3625c84b25aa43a06b1fb010cd1a"},{url:"corporate-philosophy-management-policy/components/vision.html",revision:"7969788b836a71370352e6d6b75c46f7"},{url:"data-solution.html",revision:"0862d6f8365b175ffe03d7f572089e60"},{url:"data-solution/components/ai-application-area.html",revision:"69af786b4a223a98e7fc880e40521a49"},{url:"data-solution/components/ai-case.html",revision:"7694a15eaae3e9d5ca66119cc533446c"},{url:"data-solution/components/analytics-transformation-services.html",revision:"8efaa56e4e72a70a5ffe5cadd59dea47"},{url:"data-solution/components/epr.html",revision:"76d1ffceb22e8fb9b7b85a55d3e644b7"},{url:"data-solution/components/introduce.html",revision:"b94fc6d1bd8e007f80628ee12909b225"},{url:"event-information.html",revision:"340e32994f6fba93e8f891f051fd0c91"},{url:"event-information/components/eventinformationitem.html",revision:"a73be10e912ce427ff27733666ea3c5d"},{url:"faq.html",revision:"850967cb9dc3b6425d52cec9ffcecf34"},{url:"faq/components/faq-items.html",revision:"14cd0bee1dfd429d6684d67ec3d4dc77"},{url:"graduate-recruitment.html",revision:"533d777334f5e5107dc6676dfec90ca9"},{url:"graduate-recruitment/components/holidays-vacation.html",revision:"d4646939ac3a132df049f82d2da1fb79"},{url:"graduate-recruitment/components/open-positions.html",revision:"a6ddb85277c2402f0614b2348864b57f"},{url:"graduate-recruitment/components/personnel-system.html",revision:"dd2b6b9e0e2a3008143c43dfbf85f732"},{url:"graduate-recruitment/components/recruiting-subjects.html",revision:"8b5bd5e414023164ebbf444cd02f98ce"},{url:"graduate-recruitment/components/salary.html",revision:"1cc758f6fa09c0e36473147e4e7d1f23"},{url:"graduate-recruitment/components/subject-application.html",revision:"8bae96a7183f40cdc25edc5c54185f1f"},{url:"graduate-recruitment/components/to-graduates.html",revision:"6035509a232d59301a68074f0050170d"},{url:"graduate-recruitment/components/trial-period.html",revision:"156479a2400275d3a61aa370b526e4de"},{url:"graduate-recruitment/components/welfare.html",revision:"44738bc654cc9f8f2f87d3402327ee01"},{url:"graduate-recruitment/components/work-place.html",revision:"cd105d7f6619ef3fdf4bfd481d92ebc4"},{url:"graduate-recruitment/components/work-timer.html",revision:"927ad53757395f45f056231483ca6e57"},{url:"healthcare-business.html",revision:"d69165be5498799bf01a734ec355f8f8"},{url:"healthcare-business/components/brand.html",revision:"682af1da34ac21fb200e4b2d4bbf377c"},{url:"healthcare-business/components/healthcarebusinessitem.html",revision:"4b3c1e6be9e6871fc9619525a2175c7d"},{url:"index.html",revision:"c120cce966feb4d0312a66f381754fba"},{url:"infrastructure-business.html",revision:"c83b5cce022818ce020ded408a14d2e4"},{url:"infrastructure-business/components/dev-results.html",revision:"87222c6db2cdff64583698145c710cd7"},{url:"infrastructure-business/components/infrastructure-business.html",revision:"4a4aa7c3ec7a22947bc422a3fa350337"},{url:"infrastructure-business/components/introduce.html",revision:"4c4e44a486908f23dbb8f277706bb78a"},{url:"infrastructure-business/components/operations.html",revision:"49f00c1b22b75e86ae7187c65c445bcd"},{url:"infrastructure-business/components/virtualization-engineer.html",revision:"42445c9933e768f9f6df0e2f229775c3"},{url:"logistics-business.html",revision:"900d12fbe521474efdaaca1255407670"},{url:"logistics-business/components/ai-optimization.html",revision:"4c03cfbf537375308e93577603e4a97d"},{url:"logistics-business/components/gartnercard.html",revision:"084be46de52fca4cd5b7f484811880a9"},{url:"logistics-business/components/logistics-challenges.html",revision:"229995bcf57205691dc2f7adade49d50"},{url:"logistics-business/components/logistics-management.html",revision:"66b71c0a16e668c54837f77f6aeaab88"},{url:"logistics-business/components/logistics-platform.html",revision:"ba4cf03f68033565ac9b4f865b8400a7"},{url:"logistics-business/components/logistics-promotion.html",revision:"9ee4a475e567b92b6e52cc64f0d42d9c"},{url:"map.html",revision:"9b1c63bbd21300e316a806135dd1b705"},{url:"map/components/bus-travel.html",revision:"7ed524bd94ae134e1842d6ad10b4844b"},{url:"map/components/contact-information.html",revision:"925191c9b54f03fbd213063b967613d0"},{url:"map/components/shuttle-bus.html",revision:"dea2ee818edccd429b7567967d7174c6"},{url:"map/components/train-travel.html",revision:"923dfa18406e585659e91cc85e24d7c3"},{url:"message-from-president.html",revision:"095de036a52e661ae487d8915125ebad"},{url:"privacy-policy.html",revision:"83adc0d728b35c591e51b1513311e0e9"},{url:"privacy-policy/components/content.html",revision:"ca9c3310deaf74c45ffa61f1d9756838"},{url:"recruitment-information.html",revision:"02f662a11493d155efcf3ee5ebccd9fb"},{url:"recruitment-process.html",revision:"1f6cb6a42b515780cb73bfb5e3f96450"},{url:"recruitment-process/components/recruitment-item.html",revision:"7d82a30a6ac9358f97a2fe6abcfd59b2"},{url:"si-service-business.html",revision:"32bb143b0f901f9b01719cb79340fc7a"},{url:"si-service-business/components/advanced-si-services.html",revision:"c8ff3931390285a87632aa363127ec5a"},{url:"si-service-business/components/automated-testing-tools.html",revision:"4d81786544506cc5d8e6fb55f145f6af"},{url:"si-service-business/components/examples-achievements.html",revision:"cd7b012635955ab63f335033eab4ac57"},{url:"si-service-business/components/industry-dev.html",revision:"bcdda67cb602edcb616984958e7e5b5b"},{url:"si-service-business/components/industry-experience.html",revision:"96cea0a7ac5c9e7e90de05439423eef1"},{url:"si-service-business/components/latest-technology.html",revision:"d36e68aea8ee28a2579af9bd6e3a8687"},{url:"si-service-business/components/platforms-config.html",revision:"299daf191b3043287a6f38eb6ccdfdbf"},{url:"si-service-business/components/system-dev.html",revision:"4a74f1ac8b5eb236a07deb296974f668"},{url:"si-service-business/components/system-maintenance.html",revision:"f50d74ab8261ebadb141c4c7b47727fa"},{url:"social-recruitment.html",revision:"49fae8575f4fd75af6eba6398a1637f4"},{url:"social-recruitment/components/download-template.html",revision:"e88ab7910e705c0f5a7a1eb570dd9402"},{url:"social-recruitment/components/experiencedperson.html",revision:"78e8e0f7ac2b69f38586569b505e857d"},{url:"social-recruitment/components/inexperiencedperson.html",revision:"d3b01094925e18e3c92686b81029200a"},{url:"terms-conditions.html",revision:"fb415ce9ee6cd7eae257943fd4e63bd3"},{url:"terms-conditions/components/content.html",revision:"6db0da7ed5b5f3e86a3eee1fc992c23b"},{url:"favicon.svg",revision:"a795ab195c26601ea433babed25a7d0d"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
