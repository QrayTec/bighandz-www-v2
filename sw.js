if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const u=e=>n(e,t),a={module:{uri:t},exports:l,require:u};s[t]=Promise.all(i.map((e=>a[e]||u(e)))).then((e=>(r(...e),l)))}}define(["./workbox-56a10583"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"adoption-intelligence.html",revision:"1a5eb2494676aae155fa0cba9d336edc"},{url:"adoption-intelligence/components/adoption-item.html",revision:"bc73b29c3d2ad1c4201b902319b5df84"},{url:"adoption-intelligence/components/adoptioncard.html",revision:"917a301b15cdfa6531d0d5978698ad1a"},{url:"assets/_...all_-2afaa181.js",revision:null},{url:"assets/404-0a33dc02.js",revision:null},{url:"assets/adoption-item-d0c1d7f2.js",revision:null},{url:"assets/adoption-item.vue_vue_type_script_setup_true_lang-413ddd28.js",revision:null},{url:"assets/adoptionCard-18116996.js",revision:null},{url:"assets/adoptionCard.vue_vue_type_script_setup_true_lang-16dbc2ce.js",revision:null},{url:"assets/Advanced-SI-Services-26772f50.css",revision:null},{url:"assets/Advanced-SI-Services-ee29ad89.js",revision:null},{url:"assets/Advanced-SI-Services.vue_vue_type_style_index_0_lang-7cfb2cf4.js",revision:null},{url:"assets/AI-Application-Area-3753cc26.css",revision:null},{url:"assets/AI-Application-Area-bf686651.js",revision:null},{url:"assets/AI-Case-3f97ac31.js",revision:null},{url:"assets/AI-Optimization-3557433b.js",revision:null},{url:"assets/AI-Optimization.vue_vue_type_script_setup_true_lang-45b25fc1.js",revision:null},{url:"assets/Analytics-Transformation-Services-7defd7ef.js",revision:null},{url:"assets/Analytics-Transformation-Services.vue_vue_type_script_setup_true_lang-9e0d88af.js",revision:null},{url:"assets/app-08cd797c.js",revision:null},{url:"assets/Automated-Testing-Tools-8b28e5f9.js",revision:null},{url:"assets/Automated-Testing-Tools.vue_vue_type_script_setup_true_lang-12be27c7.js",revision:null},{url:"assets/blank-90c6d6e7.js",revision:null},{url:"assets/Brand-4238f39c.css",revision:null},{url:"assets/Brand-ddc622ce.js",revision:null},{url:"assets/company-info-2a184569.js",revision:null},{url:"assets/Company-Info-2f823876.js",revision:null},{url:"assets/company-info.vue_vue_type_script_setup_true_lang-bfb6640d.js",revision:null},{url:"assets/Company-Info.vue_vue_type_script_setup_true_lang-fbf82a7f.js",revision:null},{url:"assets/CompanyHistory-a034498d.js",revision:null},{url:"assets/CompanyHistory-cdba2e02.css",revision:null},{url:"assets/CompanyProfileContent-930913a3.js",revision:null},{url:"assets/CompanyProfileContent.vue_vue_type_script_setup_true_lang-d32bb449.js",revision:null},{url:"assets/Content-b37d8d5d.js",revision:null},{url:"assets/Content-e870827e.js",revision:null},{url:"assets/Content-ece8153f.js",revision:null},{url:"assets/Content.vue_vue_type_script_setup_true_lang-3018b3b8.js",revision:null},{url:"assets/Content.vue_vue_type_script_setup_true_lang-581aeccd.js",revision:null},{url:"assets/Content.vue_vue_type_script_setup_true_lang-9b9ef85a.js",revision:null},{url:"assets/Dev-Results-1940949b.js",revision:null},{url:"assets/Dev-Results.vue_vue_type_script_setup_true_lang-0f333951.js",revision:null},{url:"assets/Download-Template-2156883d.js",revision:null},{url:"assets/Download-Template.vue_vue_type_script_setup_true_lang-79024edc.js",revision:null},{url:"assets/en-58641bd2.js",revision:null},{url:"assets/EPR-200e3c1f.js",revision:null},{url:"assets/EPR.vue_vue_type_script_setup_true_lang-eb456eb3.js",revision:null},{url:"assets/EventInformationItem-aa7afeda.css",revision:null},{url:"assets/EventInformationItem-e1d73c00.js",revision:null},{url:"assets/Examples-Achievements-34b05d7f.css",revision:null},{url:"assets/Examples-Achievements-a420b770.js",revision:null},{url:"assets/ExperiencedPerson-031788b7.css",revision:null},{url:"assets/ExperiencedPerson-b8f8b732.js",revision:null},{url:"assets/FAQ-items-bb595ecf.js",revision:null},{url:"assets/FAQ-items.vue_vue_type_script_setup_true_lang-0874ffcb.js",revision:null},{url:"assets/fax-3fd6589a.js",revision:null},{url:"assets/GartnerCard-4564ab90.js",revision:null},{url:"assets/GartnerCard.vue_vue_type_script_setup_true_lang-6d00a4a2.js",revision:null},{url:"assets/HealthcareBusinessItem-271c2f62.css",revision:null},{url:"assets/HealthcareBusinessItem-84552284.js",revision:null},{url:"assets/Holidays-Vacation-f9d043e1.js",revision:null},{url:"assets/Holidays-Vacation.vue_vue_type_script_setup_true_lang-0a81d717.js",revision:null},{url:"assets/home-a3214122.js",revision:null},{url:"assets/icon_1-3ff743fe.js",revision:null},{url:"assets/index-074e37a8.js",revision:null},{url:"assets/index-0917eec9.js",revision:null},{url:"assets/index-09a9fd76.js",revision:null},{url:"assets/index-0dac8abc.js",revision:null},{url:"assets/index-119d1e7a.css",revision:null},{url:"assets/index-14e51d23.css",revision:null},{url:"assets/index-197bf5fd.js",revision:null},{url:"assets/index-201b3101.css",revision:null},{url:"assets/index-3f80411f.js",revision:null},{url:"assets/index-470b2b28.css",revision:null},{url:"assets/index-4a8be80a.js",revision:null},{url:"assets/index-585978bf.js",revision:null},{url:"assets/index-5e955630.js",revision:null},{url:"assets/index-61c12f12.js",revision:null},{url:"assets/index-65cd57dc.js",revision:null},{url:"assets/index-6cc5672f.js",revision:null},{url:"assets/index-6dcbb2ba.js",revision:null},{url:"assets/index-7e7f310d.css",revision:null},{url:"assets/index-89f209b7.js",revision:null},{url:"assets/index-8a1273b3.js",revision:null},{url:"assets/index-9699b288.css",revision:null},{url:"assets/index-a15cfce7.css",revision:null},{url:"assets/index-a4e317e8.js",revision:null},{url:"assets/index-c1a8415f.css",revision:null},{url:"assets/index-df1830cb.js",revision:null},{url:"assets/index-e94e358d.js",revision:null},{url:"assets/index-e9cf5f7e.js",revision:null},{url:"assets/index-eabc9fb0.js",revision:null},{url:"assets/index-f26087d7.js",revision:null},{url:"assets/Industry-Dev-67f57286.js",revision:null},{url:"assets/Industry-Dev.vue_vue_type_script_setup_true_lang-7e29bc7e.js",revision:null},{url:"assets/Industry-Experience-1607ef03.js",revision:null},{url:"assets/Industry-Experience.vue_vue_type_script_setup_true_lang-3e0c788d.js",revision:null},{url:"assets/InexperiencedPerson-87fd03da.css",revision:null},{url:"assets/InexperiencedPerson-b51f7faa.js",revision:null},{url:"assets/Infrastructure-Business-2b414f36.js",revision:null},{url:"assets/Infrastructure-Business.vue_vue_type_script_setup_true_lang-963eb149.js",revision:null},{url:"assets/Innovation-f2211093.js",revision:null},{url:"assets/Innovation.vue_vue_type_script_setup_true_lang-21deb25e.js",revision:null},{url:"assets/Introduce-58aed230.js",revision:null},{url:"assets/Introduce-cb916390.js",revision:null},{url:"assets/Introduce.vue_vue_type_script_setup_true_lang-2ca8ee4f.js",revision:null},{url:"assets/Introduce.vue_vue_type_script_setup_true_lang-3d31831b.js",revision:null},{url:"assets/Latest-Technology-884c988a.js",revision:null},{url:"assets/Latest-Technology.vue_vue_type_script_setup_true_lang-ef05a896.js",revision:null},{url:"assets/Logistics-Challenges-3116c3d7.js",revision:null},{url:"assets/Logistics-Challenges.vue_vue_type_script_setup_true_lang-aebb8b35.js",revision:null},{url:"assets/Logistics-Management-043167b2.js",revision:null},{url:"assets/Logistics-Management.vue_vue_type_script_setup_true_lang-c072aac5.js",revision:null},{url:"assets/Logistics-Platform-664cb436.js",revision:null},{url:"assets/Logistics-Platform.vue_vue_type_script_setup_true_lang-a9d4413d.js",revision:null},{url:"assets/Logistics-Promotion-903b8fb1.js",revision:null},{url:"assets/Logistics-Promotion.vue_vue_type_script_setup_true_lang-89d9e48b.js",revision:null},{url:"assets/Mission-6236df3b.js",revision:null},{url:"assets/Mission.vue_vue_type_script_setup_true_lang-4ce4bbba.js",revision:null},{url:"assets/MovieItem-4895371b.css",revision:null},{url:"assets/MovieItem-6799221c.js",revision:null},{url:"assets/Open-Positions-77ec05e2.js",revision:null},{url:"assets/Open-Positions.vue_vue_type_script_setup_true_lang-f7294968.js",revision:null},{url:"assets/Operations-3d1d8de6.css",revision:null},{url:"assets/Operations-63dea8c8.js",revision:null},{url:"assets/page_nav-8718e5a1.js",revision:null},{url:"assets/Personnel-System-8100b564.js",revision:null},{url:"assets/Personnel-System.vue_vue_type_script_setup_true_lang-4cbcd35e.js",revision:null},{url:"assets/Platforms-Config-be2cc28b.js",revision:null},{url:"assets/Platforms-Config.vue_vue_type_script_setup_true_lang-b119b9d3.js",revision:null},{url:"assets/PracticesGuidelines-4f6e6f6b.js",revision:null},{url:"assets/PracticesGuidelines.vue_vue_type_script_setup_true_lang-5aa003b8.js",revision:null},{url:"assets/Public-Transit-f8249174.css",revision:null},{url:"assets/Public-Transit-fe3567b4.js",revision:null},{url:"assets/Publications.vue_vue_type_script_setup_true_lang-c21aa11e.js",revision:null},{url:"assets/Recruiting-Subjects-359e4501.js",revision:null},{url:"assets/Recruiting-Subjects.vue_vue_type_script_setup_true_lang-947cb903.js",revision:null},{url:"assets/recruitment-item-4b9deca3.js",revision:null},{url:"assets/recruitment-item-de9ba062.css",revision:null},{url:"assets/Salary-fe41c0e2.js",revision:null},{url:"assets/Salary.vue_vue_type_script_setup_true_lang-c452338e.js",revision:null},{url:"assets/Subject-application-88f6f923.js",revision:null},{url:"assets/Subject-application.vue_vue_type_script_setup_true_lang-24d94041.js",revision:null},{url:"assets/SubPageTitle-Bg.vue_vue_type_script_setup_true_lang-9325df4d.js",revision:null},{url:"assets/SubPageTitle.vue_vue_type_script_setup_true_lang-a5c10e80.js",revision:null},{url:"assets/System-Dev-91bdbebc.js",revision:null},{url:"assets/System-Dev.vue_vue_type_script_setup_true_lang-68cf34c6.js",revision:null},{url:"assets/System-Maintenance-b75872ce.js",revision:null},{url:"assets/System-Maintenance.vue_vue_type_script_setup_true_lang-f23a1ecd.js",revision:null},{url:"assets/TheBreadcrumbs.vue_vue_type_script_setup_true_lang-935b2a88.js",revision:null},{url:"assets/TheDownloadBtn.vue_vue_type_script_setup_true_lang-a68c214e.js",revision:null},{url:"assets/TheIconList.vue_vue_type_script_setup_true_lang-4cf0044f.js",revision:null},{url:"assets/ThePageMinTitle-d7e9a6d3.js",revision:null},{url:"assets/ThePageMinTitle2-ba7083f3.js",revision:null},{url:"assets/ThePageNav-28859f4c.css",revision:null},{url:"assets/ThePageNav-e2f792c6.js",revision:null},{url:"assets/ThePageNav2.vue_vue_type_script_setup_true_lang-d8027e82.js",revision:null},{url:"assets/To-Graduates-17716b86.js",revision:null},{url:"assets/To-Graduates.vue_vue_type_script_setup_true_lang-5b4dff0f.js",revision:null},{url:"assets/Trial-Period-d935a675.js",revision:null},{url:"assets/Trial-Period.vue_vue_type_script_setup_true_lang-734a976d.js",revision:null},{url:"assets/Values-0d42bb37.js",revision:null},{url:"assets/Values.vue_vue_type_script_setup_true_lang-cba234ba.js",revision:null},{url:"assets/video-chunk-f8443941.js",revision:null},{url:"assets/virtual_pwa-register-d2af5589.js",revision:null},{url:"assets/Virtualization-Engineer-384b39c4.css",revision:null},{url:"assets/Virtualization-Engineer-fd492f84.js",revision:null},{url:"assets/Vision-31838d7b.css",revision:null},{url:"assets/Vision-f586ccdc.js",revision:null},{url:"assets/Welfare-0e35aa26.js",revision:null},{url:"assets/Welfare.vue_vue_type_script_setup_true_lang-ecbd7a0a.js",revision:null},{url:"assets/Work-Place-7451efc6.js",revision:null},{url:"assets/Work-Place.vue_vue_type_script_setup_true_lang-d3a1fd2a.js",revision:null},{url:"assets/Work-Timer-cf97f0cd.js",revision:null},{url:"assets/Work-Timer.vue_vue_type_script_setup_true_lang-bfee89a7.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"assets/zh-CN-78ecf232.js",revision:null},{url:"associated-company.html",revision:"4dc5b578678e4e107e506c30ab6b2410"},{url:"associated-company/components/company-info.html",revision:"e9812f2e6f5af432ebc06747e73c0eff"},{url:"company-profile.html",revision:"3244d312857f2a46f23304184c785494"},{url:"company-profile/components/companyhistory.html",revision:"61c16e8c5fcb1af9661d28189ceda3ed"},{url:"company-profile/components/companyprofilecontent.html",revision:"71f2896cbd37d6888500774b004e2d8f"},{url:"company-staff-observation.html",revision:"a981cd9395c2ba1afb49fd19b6f5030c"},{url:"company-staff-observation/components/movieitem.html",revision:"f7d2b8b14c5a0ee8c44e5a57cbb7c58b"},{url:"components/business-ball.html",revision:"d1805728b0a24dac4502a7cc34f86e4c"},{url:"components/business-companies.html",revision:"d1805728b0a24dac4502a7cc34f86e4c"},{url:"components/business-companies2.html",revision:"d1805728b0a24dac4502a7cc34f86e4c"},{url:"components/business-content.html",revision:"d1805728b0a24dac4502a7cc34f86e4c"},{url:"components/business-item.html",revision:"d1805728b0a24dac4502a7cc34f86e4c"},{url:"components/business-item2.html",revision:"d1805728b0a24dac4502a7cc34f86e4c"},{url:"components/business.html",revision:"d1805728b0a24dac4502a7cc34f86e4c"},{url:"components/businessecharts.html",revision:"d1805728b0a24dac4502a7cc34f86e4c"},{url:"components/customers.html",revision:"d1805728b0a24dac4502a7cc34f86e4c"},{url:"components/field.html",revision:"d1805728b0a24dac4502a7cc34f86e4c"},{url:"components/first.html",revision:"d1805728b0a24dac4502a7cc34f86e4c"},{url:"contact-us.html",revision:"9e4ef460ebf50a14c6ec2f3305c44053"},{url:"contact-us/components/content.html",revision:"b049ec11aa1383e52b2464f88505a222"},{url:"corporate-philosophy-management-policy.html",revision:"2a19ba3591f433ef474ef09729e437c0"},{url:"corporate-philosophy-management-policy/components/innovation.html",revision:"d93c613fdc61c51f02a49919a0f11333"},{url:"corporate-philosophy-management-policy/components/mission.html",revision:"c12ba195a8de4965e1583fed0d0af5c5"},{url:"corporate-philosophy-management-policy/components/practicesguidelines.html",revision:"4e44801c293c9d73d0c138dc71ab97cc"},{url:"corporate-philosophy-management-policy/components/values.html",revision:"e6efa473b4a5b2dc0f1665021d17aac7"},{url:"corporate-philosophy-management-policy/components/vision.html",revision:"fbd628df44985e57978668514c26e6bb"},{url:"data-solution.html",revision:"1d88b651961f131d08c1a4405b33c6f2"},{url:"data-solution/components/ai-application-area.html",revision:"2b90db54755761900ce6ed195433ef6a"},{url:"data-solution/components/ai-case.html",revision:"536b5b17efbb6093d3800343f1ce92cf"},{url:"data-solution/components/analytics-transformation-services.html",revision:"b766980d24aef1f729233db3abedc134"},{url:"data-solution/components/epr.html",revision:"63c49bb5d217a4b858a0d7a13718f059"},{url:"data-solution/components/introduce.html",revision:"078c0344287eccabb6ab4e0fb351966c"},{url:"event-information.html",revision:"d70e14c98c2d018aa6087abcdedeac43"},{url:"event-information/components/eventinformationitem.html",revision:"2f7fba4e38beeaa52d6d3ee0e835a24a"},{url:"faq.html",revision:"833b4963045a935d452e59d369113fb0"},{url:"faq/components/faq-items.html",revision:"3322a0b8edded1a156b5f16186e1b276"},{url:"graduate-recruitment.html",revision:"64c382714653ecab9c77e0ec212cedd8"},{url:"graduate-recruitment/components/holidays-vacation.html",revision:"159cb120e3fbaf5fd2c524da6718a649"},{url:"graduate-recruitment/components/open-positions.html",revision:"7233dbbf3260576f08d5bde9028d3417"},{url:"graduate-recruitment/components/personnel-system.html",revision:"838368f808b5ff60f91e2b18742d3886"},{url:"graduate-recruitment/components/recruiting-subjects.html",revision:"dc1afb608a473484f04aa1b803cd9745"},{url:"graduate-recruitment/components/salary.html",revision:"ca23657b170ae603dcf6fa27071cd2b9"},{url:"graduate-recruitment/components/subject-application.html",revision:"765d9059c9e67335c671395d5b5861c3"},{url:"graduate-recruitment/components/to-graduates.html",revision:"7b234c48b1fb69307ee99ec191711036"},{url:"graduate-recruitment/components/trial-period.html",revision:"da916b4a0a0ef5d5d09f00fcfd2a6496"},{url:"graduate-recruitment/components/welfare.html",revision:"70e5e8c77231f55e34ebc93473a0334c"},{url:"graduate-recruitment/components/work-place.html",revision:"a1469da1432ede8f71c514720a4c5a3e"},{url:"graduate-recruitment/components/work-timer.html",revision:"103184276d0945cba553f121a0586bb1"},{url:"healthcare-business.html",revision:"e27ff0ca6f465ced64c164f0f4249bf9"},{url:"healthcare-business/components/brand.html",revision:"da3d937d3ce7e9a1eb8e3835a6f1ea72"},{url:"healthcare-business/components/healthcarebusinessitem.html",revision:"5b693ce5d77767ac8b725642e0e61cb5"},{url:"index.html",revision:"d5c91d9afb3a6aed40d302b5d3b5739b"},{url:"infrastructure-business.html",revision:"e96dc93a0403dc95cae151df8dec5417"},{url:"infrastructure-business/components/dev-results.html",revision:"9cfcc53e35dd7bb9819bb222f6c44730"},{url:"infrastructure-business/components/infrastructure-business.html",revision:"4914fa38c67d0c88e2515975039c949f"},{url:"infrastructure-business/components/introduce.html",revision:"3af2621693b00efe6cc2ed09e866fee8"},{url:"infrastructure-business/components/operations.html",revision:"c48ba8b5f8d49f442a355fba55433f37"},{url:"infrastructure-business/components/virtualization-engineer.html",revision:"6e981be6810c7b21912336b5aab1f0d1"},{url:"logistics-business.html",revision:"972696692e7c0de4a0939c02455c0349"},{url:"logistics-business/components/ai-optimization.html",revision:"28cddc20cb21abd54fb179637c7bfe4c"},{url:"logistics-business/components/gartnercard.html",revision:"52f6559f15bf0f63dcb0e1418c3ed599"},{url:"logistics-business/components/logistics-challenges.html",revision:"0ce106edf3eb00fa8ca68a99511c687b"},{url:"logistics-business/components/logistics-management.html",revision:"0e105a8ba7fd4a261175ff408bb40a44"},{url:"logistics-business/components/logistics-platform.html",revision:"9e0fd9d7d6af6074cbf7b2b2629e4f47"},{url:"logistics-business/components/logistics-promotion.html",revision:"1b17ad1ade272e8b5eb2075fb22a5f3c"},{url:"map.html",revision:"5f80777c85c4b456337ba2c4c5b3b039"},{url:"map/components/company-info.html",revision:"f977cdb0e4e3d0aecbfbc8afd8e288d9"},{url:"map/components/public-transit.html",revision:"9ce25f32e3169f9e44a0467ec4241bdb"},{url:"message-from-president.html",revision:"6a8c1250b73aa6fee321a1e87beb9e20"},{url:"privacy-policy.html",revision:"15604d9bb17383535d54a63d396e26e8"},{url:"privacy-policy/components/content.html",revision:"dd737abebe5721877f867307ef419be2"},{url:"recruitment-information.html",revision:"78fd00708e16d92721409949ebd55b76"},{url:"recruitment-process.html",revision:"de73e5723c2981daa63efd2ed54f3738"},{url:"recruitment-process/components/recruitment-item.html",revision:"7be9e8cc05d966fed2e8f21708eea5e3"},{url:"si-service-business.html",revision:"15e58f6231ed00a468cbe51ed8193a87"},{url:"si-service-business/components/advanced-si-services.html",revision:"dfb820bb90527ed55cc837c924d23e9e"},{url:"si-service-business/components/automated-testing-tools.html",revision:"f9f7893a42b516fc323c9f8566f08971"},{url:"si-service-business/components/examples-achievements.html",revision:"dcb8dde32eaa07b32489e3cae690d84f"},{url:"si-service-business/components/industry-dev.html",revision:"b7f72f3c9bb3c7e2d8c2c80e9325b810"},{url:"si-service-business/components/industry-experience.html",revision:"f27d5f752b0994697188903e4a000c77"},{url:"si-service-business/components/latest-technology.html",revision:"d8a1c508870b8759b78d04addc23a915"},{url:"si-service-business/components/platforms-config.html",revision:"b672ce05c89a97cc79f905f495923d99"},{url:"si-service-business/components/system-dev.html",revision:"260401e4fd48083e967ca362af4cedf2"},{url:"si-service-business/components/system-maintenance.html",revision:"d7ebbf3661f9add24320bee0df749244"},{url:"social-recruitment.html",revision:"2337267fc93e04cc97d98f55732e7425"},{url:"social-recruitment/components/download-template.html",revision:"10af00d304355ee261974146737722c3"},{url:"social-recruitment/components/experiencedperson.html",revision:"5a2f6727dd9faeb003d6b338bb65e940"},{url:"social-recruitment/components/inexperiencedperson.html",revision:"547ac29ece151a392dea987d22c93b7d"},{url:"terms-conditions.html",revision:"cd6d72d6e19b83888cf9a6c9982e46b0"},{url:"terms-conditions/components/content.html",revision:"bededbb997a3b780f251b314d10fe5e9"},{url:"favicon.png",revision:"b2cf3bd6ff6b0079a6fdee5c154e1e25"},{url:"safari-pinned-tab.png",revision:"b2cf3bd6ff6b0079a6fdee5c154e1e25"},{url:"pwa-192x192.png",revision:"b2cf3bd6ff6b0079a6fdee5c154e1e25"},{url:"pwa-512x512.png",revision:"b2cf3bd6ff6b0079a6fdee5c154e1e25"},{url:"manifest.webmanifest",revision:"8b8ba08b4fdd5d1dd746014e188e3be1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
