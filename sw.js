if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const u=e=>n(e,t),a={module:{uri:t},exports:l,require:u};s[t]=Promise.all(i.map((e=>a[e]||u(e)))).then((e=>(r(...e),l)))}}define(["./workbox-56a10583"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"adoption-intelligence.html",revision:"b882ae01edb6686e7b3891069fdcf556"},{url:"adoption-intelligence/components/adoption-item.html",revision:"4438eb1453e3f1d4a2581a634b58a71b"},{url:"adoption-intelligence/components/adoptioncard.html",revision:"23a47931a9503fc0af4642766ea98228"},{url:"assets/_...all_-a65d70ca.js",revision:null},{url:"assets/404-dcfaa555.js",revision:null},{url:"assets/adoption-item-c7616ada.js",revision:null},{url:"assets/adoption-item.vue_vue_type_script_setup_true_lang-0572e305.js",revision:null},{url:"assets/adoptionCard-3abec7f4.js",revision:null},{url:"assets/adoptionCard.vue_vue_type_script_setup_true_lang-19cdab7b.js",revision:null},{url:"assets/Advanced-SI-Services-26772f50.css",revision:null},{url:"assets/Advanced-SI-Services-a12f7b8c.js",revision:null},{url:"assets/Advanced-SI-Services.vue_vue_type_style_index_0_lang-9577a703.js",revision:null},{url:"assets/AI-Application-Area-3753cc26.css",revision:null},{url:"assets/AI-Application-Area-93072585.js",revision:null},{url:"assets/AI-Case-3cf5a28e.js",revision:null},{url:"assets/AI-Optimization-f30065ea.js",revision:null},{url:"assets/AI-Optimization.vue_vue_type_script_setup_true_lang-47812032.js",revision:null},{url:"assets/Analytics-Transformation-Services-3c9d50d8.js",revision:null},{url:"assets/Analytics-Transformation-Services.vue_vue_type_script_setup_true_lang-46660909.js",revision:null},{url:"assets/app-989deb51.js",revision:null},{url:"assets/Automated-Testing-Tools-57be50e0.js",revision:null},{url:"assets/Automated-Testing-Tools.vue_vue_type_script_setup_true_lang-82694295.js",revision:null},{url:"assets/blank-df675a6f.js",revision:null},{url:"assets/Brand-1ee46165.js",revision:null},{url:"assets/Brand-4238f39c.css",revision:null},{url:"assets/company-info-237829a6.js",revision:null},{url:"assets/Company-Info-ccbca3a9.js",revision:null},{url:"assets/Company-Info.vue_vue_type_script_setup_true_lang-58d41b12.js",revision:null},{url:"assets/company-info.vue_vue_type_script_setup_true_lang-6d2ee4f7.js",revision:null},{url:"assets/CompanyHistory-0d394d10.js",revision:null},{url:"assets/CompanyHistory-cdba2e02.css",revision:null},{url:"assets/CompanyProfileContent-043a43fe.js",revision:null},{url:"assets/CompanyProfileContent.vue_vue_type_script_setup_true_lang-d8d19505.js",revision:null},{url:"assets/Content-dc86bf24.js",revision:null},{url:"assets/Content-f148c167.js",revision:null},{url:"assets/Content-fdffd847.js",revision:null},{url:"assets/Content.vue_vue_type_script_setup_true_lang-07c47dec.js",revision:null},{url:"assets/Content.vue_vue_type_script_setup_true_lang-af3d8696.js",revision:null},{url:"assets/Content.vue_vue_type_script_setup_true_lang-cbce03b1.js",revision:null},{url:"assets/Dev-Results-afbcd3ec.js",revision:null},{url:"assets/Dev-Results.vue_vue_type_script_setup_true_lang-f4abd7bd.js",revision:null},{url:"assets/Download-Template-3f204057.js",revision:null},{url:"assets/Download-Template.vue_vue_type_script_setup_true_lang-33a19493.js",revision:null},{url:"assets/en-58641bd2.js",revision:null},{url:"assets/EPR-026d6e98.js",revision:null},{url:"assets/EPR.vue_vue_type_script_setup_true_lang-333397a3.js",revision:null},{url:"assets/EventInformationItem-aa7afeda.css",revision:null},{url:"assets/EventInformationItem-b807997b.js",revision:null},{url:"assets/Examples-Achievements-8fb28740.css",revision:null},{url:"assets/Examples-Achievements-f7864d15.js",revision:null},{url:"assets/ExperiencedPerson-031788b7.css",revision:null},{url:"assets/ExperiencedPerson-1563f1ec.js",revision:null},{url:"assets/FAQ-items-19cd514f.js",revision:null},{url:"assets/FAQ-items.vue_vue_type_script_setup_true_lang-698007d4.js",revision:null},{url:"assets/fax-3fd6589a.js",revision:null},{url:"assets/GartnerCard-d7085948.js",revision:null},{url:"assets/GartnerCard.vue_vue_type_script_setup_true_lang-06faa343.js",revision:null},{url:"assets/HealthcareBusinessItem-271c2f62.css",revision:null},{url:"assets/HealthcareBusinessItem-b31dde8c.js",revision:null},{url:"assets/Holidays-Vacation-46e35aac.js",revision:null},{url:"assets/Holidays-Vacation.vue_vue_type_script_setup_true_lang-26ec2b3c.js",revision:null},{url:"assets/home-0751fecc.js",revision:null},{url:"assets/icon_1-3ff743fe.js",revision:null},{url:"assets/index-02a04c40.js",revision:null},{url:"assets/index-0ed737f2.js",revision:null},{url:"assets/index-119d1e7a.css",revision:null},{url:"assets/index-14e51d23.css",revision:null},{url:"assets/index-15a9e66e.js",revision:null},{url:"assets/index-17cdf9e5.js",revision:null},{url:"assets/index-1ff6338b.js",revision:null},{url:"assets/index-201b3101.css",revision:null},{url:"assets/index-34cdad23.js",revision:null},{url:"assets/index-470b2b28.css",revision:null},{url:"assets/index-4bd5e318.js",revision:null},{url:"assets/index-696d08c6.js",revision:null},{url:"assets/index-699cddd3.js",revision:null},{url:"assets/index-6fb19858.js",revision:null},{url:"assets/index-7311b23f.js",revision:null},{url:"assets/index-7e7f310d.css",revision:null},{url:"assets/index-83182156.js",revision:null},{url:"assets/index-9699b288.css",revision:null},{url:"assets/index-9c263236.js",revision:null},{url:"assets/index-a1ecc712.js",revision:null},{url:"assets/index-b4b506ef.js",revision:null},{url:"assets/index-b5fdbe2e.js",revision:null},{url:"assets/index-be459342.js",revision:null},{url:"assets/index-c1a8415f.css",revision:null},{url:"assets/index-c359952e.js",revision:null},{url:"assets/index-e2633724.js",revision:null},{url:"assets/index-f95f85f7.css",revision:null},{url:"assets/index-fd63120f.js",revision:null},{url:"assets/Industry-Dev-8afa887f.js",revision:null},{url:"assets/Industry-Dev.vue_vue_type_script_setup_true_lang-33bd104f.js",revision:null},{url:"assets/Industry-Experience-3bc64622.js",revision:null},{url:"assets/Industry-Experience.vue_vue_type_script_setup_true_lang-a0ddac78.js",revision:null},{url:"assets/InexperiencedPerson-1d7dcd2b.js",revision:null},{url:"assets/InexperiencedPerson-87fd03da.css",revision:null},{url:"assets/Infrastructure-Business-80de2388.js",revision:null},{url:"assets/Infrastructure-Business.vue_vue_type_script_setup_true_lang-82c93d8e.js",revision:null},{url:"assets/Innovation-4f4f5a48.js",revision:null},{url:"assets/Innovation.vue_vue_type_script_setup_true_lang-d2ca4386.js",revision:null},{url:"assets/Introduce-6e03dd69.js",revision:null},{url:"assets/Introduce-fa9e1a0a.js",revision:null},{url:"assets/Introduce.vue_vue_type_script_setup_true_lang-1ccbec18.js",revision:null},{url:"assets/Introduce.vue_vue_type_script_setup_true_lang-22ebc0f2.js",revision:null},{url:"assets/Latest-Technology-be52104d.js",revision:null},{url:"assets/Latest-Technology.vue_vue_type_script_setup_true_lang-1438a97c.js",revision:null},{url:"assets/Logistics-Challenges-4d9c2abc.js",revision:null},{url:"assets/Logistics-Challenges.vue_vue_type_script_setup_true_lang-b9d3b840.js",revision:null},{url:"assets/Logistics-Management-3259394f.js",revision:null},{url:"assets/Logistics-Management.vue_vue_type_script_setup_true_lang-2df487b2.js",revision:null},{url:"assets/Logistics-Platform-0a2d8aef.js",revision:null},{url:"assets/Logistics-Platform.vue_vue_type_script_setup_true_lang-0235ddf9.js",revision:null},{url:"assets/Logistics-Promotion-9628ee3c.js",revision:null},{url:"assets/Logistics-Promotion.vue_vue_type_script_setup_true_lang-2b543397.js",revision:null},{url:"assets/Mission-a0ac4adc.js",revision:null},{url:"assets/Mission.vue_vue_type_script_setup_true_lang-767b9271.js",revision:null},{url:"assets/MovieItem-254ae47f.js",revision:null},{url:"assets/MovieItem-4895371b.css",revision:null},{url:"assets/Open-Positions-acbef6f0.js",revision:null},{url:"assets/Open-Positions.vue_vue_type_script_setup_true_lang-e4f644a6.js",revision:null},{url:"assets/Operations-5b5603e5.js",revision:null},{url:"assets/Operations-d19156c5.css",revision:null},{url:"assets/Personnel-System-e87207f8.js",revision:null},{url:"assets/Personnel-System.vue_vue_type_script_setup_true_lang-c5f3a935.js",revision:null},{url:"assets/Platforms-Config-3b7ae152.js",revision:null},{url:"assets/Platforms-Config.vue_vue_type_script_setup_true_lang-4ba2cab3.js",revision:null},{url:"assets/PracticesGuidelines-868ea2b1.js",revision:null},{url:"assets/PracticesGuidelines.vue_vue_type_script_setup_true_lang-245d1f17.js",revision:null},{url:"assets/Public-Transit-0b6d112d.js",revision:null},{url:"assets/Public-Transit-fa9927f0.css",revision:null},{url:"assets/Publications.vue_vue_type_script_setup_true_lang-3532618b.js",revision:null},{url:"assets/Recruiting-Subjects-8f9f2d38.js",revision:null},{url:"assets/Recruiting-Subjects.vue_vue_type_script_setup_true_lang-6a896d31.js",revision:null},{url:"assets/recruitment-item-3d890c4a.css",revision:null},{url:"assets/recruitment-item-8b635d31.js",revision:null},{url:"assets/Salary-e5e354e5.js",revision:null},{url:"assets/Salary.vue_vue_type_script_setup_true_lang-4152038c.js",revision:null},{url:"assets/Subject-application-b61a16b8.js",revision:null},{url:"assets/Subject-application.vue_vue_type_script_setup_true_lang-eff158cf.js",revision:null},{url:"assets/SubPageTitle-Bg.vue_vue_type_script_setup_true_lang-54a4fef3.js",revision:null},{url:"assets/SubPageTitle.vue_vue_type_script_setup_true_lang-384ffd09.js",revision:null},{url:"assets/System-Dev-65f2781a.js",revision:null},{url:"assets/System-Dev.vue_vue_type_script_setup_true_lang-209a6cc9.js",revision:null},{url:"assets/System-Maintenance-88994212.js",revision:null},{url:"assets/System-Maintenance.vue_vue_type_script_setup_true_lang-69d0ac27.js",revision:null},{url:"assets/TheBreadcrumbs.vue_vue_type_script_setup_true_lang-f58bd710.js",revision:null},{url:"assets/TheDownloadBtn.vue_vue_type_script_setup_true_lang-3fc3329f.js",revision:null},{url:"assets/TheIconList.vue_vue_type_script_setup_true_lang-01413c85.js",revision:null},{url:"assets/ThePageMinTitle-b9fb2c7f.js",revision:null},{url:"assets/ThePageMinTitle2-b35b77f3.js",revision:null},{url:"assets/ThePageMinTitle3-332e6d90.js",revision:null},{url:"assets/ThePageNav-9f92b58f.js",revision:null},{url:"assets/ThePageNav-f91262ee.css",revision:null},{url:"assets/To-Graduates-b7ec8835.js",revision:null},{url:"assets/To-Graduates.vue_vue_type_script_setup_true_lang-9924cd2b.js",revision:null},{url:"assets/Trial-Period-bec0fd32.js",revision:null},{url:"assets/Trial-Period.vue_vue_type_script_setup_true_lang-400743b4.js",revision:null},{url:"assets/Use-Test-9ccefe6f.js",revision:null},{url:"assets/Use-Test.vue_vue_type_script_setup_true_lang-eb535a28.js",revision:null},{url:"assets/Values-88ea8ffd.js",revision:null},{url:"assets/Values.vue_vue_type_script_setup_true_lang-1288e8a8.js",revision:null},{url:"assets/video-chunk-f8443941.js",revision:null},{url:"assets/virtual_pwa-register-9cec2937.js",revision:null},{url:"assets/Virtualization-Engineer-384b39c4.css",revision:null},{url:"assets/Virtualization-Engineer-72974785.js",revision:null},{url:"assets/Vision-31838d7b.css",revision:null},{url:"assets/Vision-eb85f072.js",revision:null},{url:"assets/Welfare-1249ddd1.js",revision:null},{url:"assets/Welfare.vue_vue_type_script_setup_true_lang-c2fd7c96.js",revision:null},{url:"assets/Work-Place-115f7114.js",revision:null},{url:"assets/Work-Place.vue_vue_type_script_setup_true_lang-63167add.js",revision:null},{url:"assets/Work-Timer-3e119973.js",revision:null},{url:"assets/Work-Timer.vue_vue_type_script_setup_true_lang-d281e226.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"assets/zh-CN-78ecf232.js",revision:null},{url:"associated-company.html",revision:"9a20e741714e9d9b2b4702c5eb9d9b69"},{url:"associated-company/components/company-info.html",revision:"152478a8234b2479f2e9866a75cb2b3d"},{url:"company-profile.html",revision:"b7ede429ad1e681c18fec372883f1ab0"},{url:"company-profile/components/companyhistory.html",revision:"4c7f330cd5beb9b57a32b3984c53ca2c"},{url:"company-profile/components/companyprofilecontent.html",revision:"edb95f1b08a2a0fbbb2e0e015b448de8"},{url:"company-staff-observation.html",revision:"de1d107d55bfa5c4e7486641046c0588"},{url:"company-staff-observation/components/movieitem.html",revision:"a7f01ca0099ee97caa92114b00046492"},{url:"components/business-ball.html",revision:"7d079b6ae04420a2603f7bcaf0935d32"},{url:"components/business-companies.html",revision:"4e67bb7f787682fcd452f971af45fb5f"},{url:"components/business-companies2.html",revision:"4e67bb7f787682fcd452f971af45fb5f"},{url:"components/business-content.html",revision:"4e67bb7f787682fcd452f971af45fb5f"},{url:"components/business-item.html",revision:"4e67bb7f787682fcd452f971af45fb5f"},{url:"components/business-item2.html",revision:"4e67bb7f787682fcd452f971af45fb5f"},{url:"components/business.html",revision:"4e67bb7f787682fcd452f971af45fb5f"},{url:"components/businessecharts.html",revision:"4e67bb7f787682fcd452f971af45fb5f"},{url:"components/customers.html",revision:"4e67bb7f787682fcd452f971af45fb5f"},{url:"components/field.html",revision:"4e67bb7f787682fcd452f971af45fb5f"},{url:"components/first.html",revision:"4e67bb7f787682fcd452f971af45fb5f"},{url:"contact-us.html",revision:"0c8dd9118c1182efa12905a5bd634530"},{url:"contact-us/components/content.html",revision:"b2893a4df7ea7064a366a458f07f8cf9"},{url:"corporate-philosophy-management-policy.html",revision:"bc449443210cdf8ae5ed18a6b194e7f0"},{url:"corporate-philosophy-management-policy/components/innovation.html",revision:"e361dad0aec339b340667f79ec80e343"},{url:"corporate-philosophy-management-policy/components/mission.html",revision:"2a88d00b5ef0242d1be1fa60c2c73323"},{url:"corporate-philosophy-management-policy/components/practicesguidelines.html",revision:"858d18fae80e68983000779b4dd11448"},{url:"corporate-philosophy-management-policy/components/values.html",revision:"40808ee75f4383d41f2a24728ad6390f"},{url:"corporate-philosophy-management-policy/components/vision.html",revision:"d3d1815311a780a10fb6650115c5e5ac"},{url:"data-solution.html",revision:"fdaab0eb51c47520b8cd813d950dc1bf"},{url:"data-solution/components/ai-application-area.html",revision:"5468e2acce9208c21c7b6a17fec18f99"},{url:"data-solution/components/ai-case.html",revision:"3b0ea86e1dc20b13827ba1eb9773d452"},{url:"data-solution/components/analytics-transformation-services.html",revision:"3b6b3a6d6da3c766a1253a488fc00a79"},{url:"data-solution/components/introduce.html",revision:"aca307d4c5c42507e38b32dcddb4de55"},{url:"event-information.html",revision:"aef95753c26df6753ed50e2b165ebb87"},{url:"event-information/components/eventinformationitem.html",revision:"7fbba33d411bacf87491297c531b7a52"},{url:"faq.html",revision:"0297bd85cf7a105cf896944cf5dd1148"},{url:"faq/components/faq-items.html",revision:"b85c6cf94f28bee7f4a6b7350be30547"},{url:"graduate-recruitment.html",revision:"9fa3224da9ce7f161369627531ea0005"},{url:"graduate-recruitment/components/holidays-vacation.html",revision:"1bc76404c2c4ab064a04afbb52a06560"},{url:"graduate-recruitment/components/open-positions.html",revision:"92367259e886ecf47f274f8adb19c8b2"},{url:"graduate-recruitment/components/personnel-system.html",revision:"1f998add28775dc4aaadc753a55ab163"},{url:"graduate-recruitment/components/recruiting-subjects.html",revision:"9675950878cc57975eac9dcd6bc94c2b"},{url:"graduate-recruitment/components/salary.html",revision:"a62eef6a57405d72408d35e4662d10f8"},{url:"graduate-recruitment/components/subject-application.html",revision:"f6deedb8fb7448cecbb9bc1e100d04b5"},{url:"graduate-recruitment/components/to-graduates.html",revision:"acf47a8ec29180d296b11976f26f4a02"},{url:"graduate-recruitment/components/trial-period.html",revision:"314ec1e967186f5e53a4b76c7669c3cf"},{url:"graduate-recruitment/components/welfare.html",revision:"a4e635d68805de31b096bdc968ae19f9"},{url:"graduate-recruitment/components/work-place.html",revision:"637cfd402b1b70fc857c1b3389f9a30a"},{url:"graduate-recruitment/components/work-timer.html",revision:"d62e88d31d026a1c6e63da23e9d05f49"},{url:"healthcare-business.html",revision:"e7891706793fe772b4042b9c8856be35"},{url:"healthcare-business/components/brand.html",revision:"4eda062da4bbe6bf7d095c150664af8e"},{url:"healthcare-business/components/healthcarebusinessitem.html",revision:"1edd4aa791a2fdcf3c132f6a3d3d8004"},{url:"index.html",revision:"70e1b46b7035d7bf02d1d71bee38c324"},{url:"infrastructure-business.html",revision:"23acf8203fa9848cce1f464307a10836"},{url:"infrastructure-business/components/dev-results.html",revision:"5320c6e051971f86c57771409d0446b9"},{url:"infrastructure-business/components/infrastructure-business.html",revision:"d8aa07f54fde5e89d25348ec4ae33d25"},{url:"infrastructure-business/components/introduce.html",revision:"8efa02dcf04151885cd2710292999a0f"},{url:"infrastructure-business/components/operations.html",revision:"8b04bf857498b76f860875c120207270"},{url:"infrastructure-business/components/virtualization-engineer.html",revision:"424adcbcaebf0b6106e58c6e698bae68"},{url:"logistics-business.html",revision:"512b92c79fc5eb494ce05fbb22e07635"},{url:"logistics-business/components/ai-optimization.html",revision:"257beb0bf1d0e6e6be25248f16a9e4a2"},{url:"logistics-business/components/gartnercard.html",revision:"27fa57a88546464063bb40e51c8270a0"},{url:"logistics-business/components/logistics-challenges.html",revision:"51609387ce07c7f630f6c4bb4a545780"},{url:"logistics-business/components/logistics-management.html",revision:"146616591360c57284040e7b87fcd0c2"},{url:"logistics-business/components/logistics-platform.html",revision:"fe12181210e948ae3b3a99e87c5be353"},{url:"logistics-business/components/logistics-promotion.html",revision:"e0974e9cfdb09962b626fac53b011c95"},{url:"map.html",revision:"94627dc22b8af0f8b85376568f42a731"},{url:"map/components/company-info.html",revision:"c2ebc7eae9ac47a3040bfcb346e653a7"},{url:"map/components/public-transit.html",revision:"405d829e418c43ea6e94908056e70d39"},{url:"message-from-president.html",revision:"fb58900a81924e7df62d4d6ae8e324f6"},{url:"privacy-policy.html",revision:"f71b33735d6f205e97abeba857414a2c"},{url:"privacy-policy/components/content.html",revision:"19ebf619f4bc27e1cb872a6e0ce8353e"},{url:"recruitment-process.html",revision:"b3b77ac83d9d84edb120e1af8e4d59c2"},{url:"recruitment-process/components/recruitment-item.html",revision:"39439ee4ab831e999368ea750a688c4d"},{url:"si-service-business.html",revision:"9e965dcb0da751c2737be73ac0559eae"},{url:"si-service-business/components/advanced-si-services.html",revision:"a684e019d65400279f68a3e92c499d89"},{url:"si-service-business/components/automated-testing-tools.html",revision:"d6597a3e14d990db639989d8da602e28"},{url:"si-service-business/components/epr.html",revision:"6f24ab0adde85a6faf3f070532710944"},{url:"si-service-business/components/examples-achievements.html",revision:"98a6bc40cb5d403b605a98926c99610f"},{url:"si-service-business/components/industry-dev.html",revision:"fba7a952eb0fee009028970cfb61d0c4"},{url:"si-service-business/components/industry-experience.html",revision:"1c5b53d5f2acadee954ba025e7659c8d"},{url:"si-service-business/components/latest-technology.html",revision:"04677a34c8205f83fcc4ae43f3c583a4"},{url:"si-service-business/components/platforms-config.html",revision:"6f99af63ff66634b4aba82b4904a664a"},{url:"si-service-business/components/system-dev.html",revision:"14d10ef34ca4a76349036069b808e4e2"},{url:"si-service-business/components/system-maintenance.html",revision:"47408641347cb993de06451659af1a46"},{url:"si-service-business/components/use-test.html",revision:"a3231d486e2facdeedaf4bbd5c13caf2"},{url:"social-recruitment.html",revision:"dbe18dd152cbba7ebc7563ff465260d3"},{url:"social-recruitment/components/download-template.html",revision:"9ecffdd61f2d82ab5424b75837e89a04"},{url:"social-recruitment/components/experiencedperson.html",revision:"e3a9ea83440cadffde812359a38cb8ed"},{url:"social-recruitment/components/inexperiencedperson.html",revision:"d5e4ba2c361a7844594d581f47848e0b"},{url:"terms-conditions.html",revision:"4e942d969339af3aa449602cb1b22528"},{url:"terms-conditions/components/content.html",revision:"0f1ef7bd28c073fda769a3be5a101b57"},{url:"favicon.png",revision:"b2cf3bd6ff6b0079a6fdee5c154e1e25"},{url:"safari-pinned-tab.png",revision:"b2cf3bd6ff6b0079a6fdee5c154e1e25"},{url:"pwa-192x192.png",revision:"b2cf3bd6ff6b0079a6fdee5c154e1e25"},{url:"pwa-512x512.png",revision:"b2cf3bd6ff6b0079a6fdee5c154e1e25"},{url:"manifest.webmanifest",revision:"8b8ba08b4fdd5d1dd746014e188e3be1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
