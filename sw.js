if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const a=e=>n(e,l),u={module:{uri:l},exports:t,require:a};s[l]=Promise.all(i.map((e=>u[e]||a(e)))).then((e=>(r(...e),t)))}}define(["./workbox-56a10583"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"adoption-intelligence.html",revision:"3948fe8bec3a2a3187246ca96765bbe2"},{url:"adoption-intelligence/components/adoption-item.html",revision:"30cf8f44a0b4dadda1f8f069279f7962"},{url:"adoption-intelligence/components/adoptioncard.html",revision:"aaac259fc46a882e30b1b3a64deca929"},{url:"assets/_...all_-a20c5176.js",revision:null},{url:"assets/404-9e60b067.js",revision:null},{url:"assets/adoption-item-2d4edcc5.js",revision:null},{url:"assets/adoption-item.vue_vue_type_script_setup_true_lang-af91bd58.js",revision:null},{url:"assets/adoptionCard-8f85d99f.js",revision:null},{url:"assets/adoptionCard.vue_vue_type_script_setup_true_lang-25318368.js",revision:null},{url:"assets/Advanced-SI-Services-26772f50.css",revision:null},{url:"assets/Advanced-SI-Services-3f1209cb.js",revision:null},{url:"assets/Advanced-SI-Services.vue_vue_type_style_index_0_lang-d2ac6c54.js",revision:null},{url:"assets/AI-Application-Area-01d30fac.css",revision:null},{url:"assets/AI-Application-Area-c2909572.js",revision:null},{url:"assets/AI-Case-4b7c506a.js",revision:null},{url:"assets/AI-Optimization-b8068809.js",revision:null},{url:"assets/AI-Optimization.vue_vue_type_script_setup_true_lang-621086f1.js",revision:null},{url:"assets/Analytics-Transformation-Services-ebdc2ac5.js",revision:null},{url:"assets/Analytics-Transformation-Services.vue_vue_type_script_setup_true_lang-3c649839.js",revision:null},{url:"assets/app-c7f1c690.js",revision:null},{url:"assets/Automated-Testing-Tools-39f76db7.js",revision:null},{url:"assets/Automated-Testing-Tools.vue_vue_type_script_setup_true_lang-18690370.js",revision:null},{url:"assets/blank-6962a380.js",revision:null},{url:"assets/Brand-e544f06d.js",revision:null},{url:"assets/Brand-fbad39da.css",revision:null},{url:"assets/Company_staff_observation-ab21b6c6.js",revision:null},{url:"assets/Company-Info-148d9f80.js",revision:null},{url:"assets/company-info-a50007a3.js",revision:null},{url:"assets/Company-Info.vue_vue_type_script_setup_true_lang-506a453b.js",revision:null},{url:"assets/company-info.vue_vue_type_script_setup_true_lang-d3ed35de.js",revision:null},{url:"assets/CompanyHistory-0a7891a4.css",revision:null},{url:"assets/CompanyHistory-398880e3.js",revision:null},{url:"assets/CompanyProfileContent-5828f482.js",revision:null},{url:"assets/CompanyProfileContent-cbfdc023.css",revision:null},{url:"assets/Content-5edf46d1.js",revision:null},{url:"assets/Content-64ea67fe.js",revision:null},{url:"assets/Content-ee21fe0d.js",revision:null},{url:"assets/Content.vue_vue_type_script_setup_true_lang-0a956e6f.js",revision:null},{url:"assets/Content.vue_vue_type_script_setup_true_lang-33a547ff.js",revision:null},{url:"assets/Content.vue_vue_type_script_setup_true_lang-3c1cae5f.js",revision:null},{url:"assets/Dev-Results-5c8bacc3.js",revision:null},{url:"assets/Dev-Results.vue_vue_type_script_setup_true_lang-4d8dc46a.js",revision:null},{url:"assets/Download-Template-5f313ee9.js",revision:null},{url:"assets/Download-Template.vue_vue_type_script_setup_true_lang-c504304f.js",revision:null},{url:"assets/en-58641bd2.js",revision:null},{url:"assets/EPR-7b38b0f8.js",revision:null},{url:"assets/EPR.vue_vue_type_script_setup_true_lang-b65bb570.js",revision:null},{url:"assets/EventInformationItem-7e67d77f.js",revision:null},{url:"assets/EventInformationItem-aa7afeda.css",revision:null},{url:"assets/Examples-Achievements-0a0e46d4.css",revision:null},{url:"assets/Examples-Achievements-a8adbdad.js",revision:null},{url:"assets/ExperiencedPerson-4d562aea.js",revision:null},{url:"assets/ExperiencedPerson-7c87e507.css",revision:null},{url:"assets/FAQ-items-63e6b39e.js",revision:null},{url:"assets/FAQ-items.vue_vue_type_script_setup_true_lang-b2c1aebf.js",revision:null},{url:"assets/fax-3fd6589a.js",revision:null},{url:"assets/GartnerCard-c6e28511.js",revision:null},{url:"assets/GartnerCard.vue_vue_type_script_setup_true_lang-db6b7674.js",revision:null},{url:"assets/HealthcareBusinessItem-271c2f62.css",revision:null},{url:"assets/HealthcareBusinessItem-7e251dbf.js",revision:null},{url:"assets/Holidays-Vacation-cdadcda7.js",revision:null},{url:"assets/Holidays-Vacation.vue_vue_type_script_setup_true_lang-6d31828a.js",revision:null},{url:"assets/home-f58ef438.js",revision:null},{url:"assets/icon_1-3ff743fe.js",revision:null},{url:"assets/index-0188b572.css",revision:null},{url:"assets/index-0621c472.js",revision:null},{url:"assets/index-08bde789.css",revision:null},{url:"assets/index-103cd4b0.js",revision:null},{url:"assets/index-11a405bf.js",revision:null},{url:"assets/index-13f2f160.js",revision:null},{url:"assets/index-14e51d23.css",revision:null},{url:"assets/index-1d1f802a.js",revision:null},{url:"assets/index-201b3101.css",revision:null},{url:"assets/index-20d544d5.js",revision:null},{url:"assets/index-20e791da.js",revision:null},{url:"assets/index-31c863d1.js",revision:null},{url:"assets/index-40b9af8d.js",revision:null},{url:"assets/index-470b2b28.css",revision:null},{url:"assets/index-4ec15046.js",revision:null},{url:"assets/index-5e0132ad.js",revision:null},{url:"assets/index-72fa4b05.js",revision:null},{url:"assets/index-7e7f310d.css",revision:null},{url:"assets/index-8929c467.js",revision:null},{url:"assets/index-89615d56.js",revision:null},{url:"assets/index-9343eac8.js",revision:null},{url:"assets/index-9699b288.css",revision:null},{url:"assets/index-9d633ae3.css",revision:null},{url:"assets/index-a0c5ca79.js",revision:null},{url:"assets/index-ac4d8d56.js",revision:null},{url:"assets/index-d65722b0.js",revision:null},{url:"assets/index-da9b59cd.js",revision:null},{url:"assets/index-eb1ce96d.js",revision:null},{url:"assets/index-fb850147.js",revision:null},{url:"assets/Industry-Dev-f3af066d.js",revision:null},{url:"assets/Industry-Dev.vue_vue_type_script_setup_true_lang-cff8130c.js",revision:null},{url:"assets/Industry-Experience-cac6af29.js",revision:null},{url:"assets/Industry-Experience.vue_vue_type_script_setup_true_lang-95dc54b5.js",revision:null},{url:"assets/InexperiencedPerson-aa912722.css",revision:null},{url:"assets/InexperiencedPerson-c70a750d.js",revision:null},{url:"assets/Infrastructure-Business-8a2b9771.js",revision:null},{url:"assets/Infrastructure-Business.vue_vue_type_script_setup_true_lang-893432fa.js",revision:null},{url:"assets/Innovation-10d558d1.css",revision:null},{url:"assets/Innovation-23ed7d61.js",revision:null},{url:"assets/Introduce-7b14f9a3.js",revision:null},{url:"assets/Introduce-95fadea7.js",revision:null},{url:"assets/Introduce.vue_vue_type_script_setup_true_lang-45fbfee9.js",revision:null},{url:"assets/Introduce.vue_vue_type_script_setup_true_lang-a2020c7f.js",revision:null},{url:"assets/Latest-Technology-26a3eaa6.js",revision:null},{url:"assets/Latest-Technology.vue_vue_type_script_setup_true_lang-e01b0f8b.js",revision:null},{url:"assets/Logistics-Challenges-ec392c77.js",revision:null},{url:"assets/Logistics-Challenges.vue_vue_type_script_setup_true_lang-7ac53458.js",revision:null},{url:"assets/Logistics-Management-ebdf2d29.js",revision:null},{url:"assets/Logistics-Management.vue_vue_type_script_setup_true_lang-6a5f341d.js",revision:null},{url:"assets/Logistics-Platform-9bc0e877.js",revision:null},{url:"assets/Logistics-Platform.vue_vue_type_script_setup_true_lang-e19e8d67.js",revision:null},{url:"assets/Logistics-Promotion-cf2ed375.js",revision:null},{url:"assets/Logistics-Promotion.vue_vue_type_script_setup_true_lang-d3e922ad.js",revision:null},{url:"assets/Mission-33fdff3c.css",revision:null},{url:"assets/Mission-9b9385d3.js",revision:null},{url:"assets/MovieItem-45d44f91.css",revision:null},{url:"assets/MovieItem-d9c99bbc.js",revision:null},{url:"assets/Open-Positions-ebad8b8c.js",revision:null},{url:"assets/Open-Positions.vue_vue_type_script_setup_true_lang-01fb4b8d.js",revision:null},{url:"assets/Operations-815bafcd.css",revision:null},{url:"assets/Operations-fe8a2749.js",revision:null},{url:"assets/page_nav-8718e5a1.js",revision:null},{url:"assets/Personnel-System-0604c655.js",revision:null},{url:"assets/Personnel-System.vue_vue_type_script_setup_true_lang-b3b89e6b.js",revision:null},{url:"assets/Platforms-Config-b45b1d8c.js",revision:null},{url:"assets/Platforms-Config.vue_vue_type_script_setup_true_lang-9f73c34d.js",revision:null},{url:"assets/PracticesGuidelines-1efdcce3.js",revision:null},{url:"assets/PracticesGuidelines-5fdd9ee8.css",revision:null},{url:"assets/Public-Transit-985f0381.js",revision:null},{url:"assets/Public-Transit-a3a6ae15.css",revision:null},{url:"assets/Publications.vue_vue_type_script_setup_true_lang-cfacec28.js",revision:null},{url:"assets/Recruiting-Subjects-afb7bb73.js",revision:null},{url:"assets/Recruiting-Subjects.vue_vue_type_script_setup_true_lang-0058fa9f.js",revision:null},{url:"assets/recruitment-item-19e8d4c2.css",revision:null},{url:"assets/recruitment-item-8d4cef88.js",revision:null},{url:"assets/Salary-086ba033.js",revision:null},{url:"assets/Salary.vue_vue_type_script_setup_true_lang-4d1ad4f7.js",revision:null},{url:"assets/Subject-application-2405130f.js",revision:null},{url:"assets/Subject-application.vue_vue_type_script_setup_true_lang-be7a60ff.js",revision:null},{url:"assets/SubPageTitle-Bg.vue_vue_type_script_setup_true_lang-7ab7d93f.js",revision:null},{url:"assets/SubPageTitle.vue_vue_type_script_setup_true_lang-f33c3ad5.js",revision:null},{url:"assets/System-Dev-23e67acf.js",revision:null},{url:"assets/System-Dev.vue_vue_type_script_setup_true_lang-366e1cde.js",revision:null},{url:"assets/System-Maintenance-e6aac69b.js",revision:null},{url:"assets/System-Maintenance.vue_vue_type_script_setup_true_lang-28cfab90.js",revision:null},{url:"assets/TheBreadcrumbs.vue_vue_type_script_setup_true_lang-52461cea.js",revision:null},{url:"assets/TheDownloadBtn-21f36892.js",revision:null},{url:"assets/TheIconList.vue_vue_type_script_setup_true_lang-52c4e9b0.js",revision:null},{url:"assets/ThePageMinTitle-5d000f8a.js",revision:null},{url:"assets/ThePageMinTitle2-e418d479.js",revision:null},{url:"assets/ThePageNav-e761ee6e.js",revision:null},{url:"assets/ThePageNav-ed3849d8.css",revision:null},{url:"assets/ThePageNav2.vue_vue_type_script_setup_true_lang-f3b5b0d4.js",revision:null},{url:"assets/To-Graduates-9b44e4ac.js",revision:null},{url:"assets/To-Graduates.vue_vue_type_script_setup_true_lang-f302743c.js",revision:null},{url:"assets/Trial-Period-892d075c.js",revision:null},{url:"assets/Trial-Period.vue_vue_type_script_setup_true_lang-2ee6af47.js",revision:null},{url:"assets/Values-cebe3143.js",revision:null},{url:"assets/Values-e66e9964.css",revision:null},{url:"assets/video-chunk-4ed993c7.js",revision:null},{url:"assets/virtual_pwa-register-29cd90a8.js",revision:null},{url:"assets/Virtualization-Engineer-4601e185.js",revision:null},{url:"assets/Virtualization-Engineer-c787d588.css",revision:null},{url:"assets/Vision-31838d7b.css",revision:null},{url:"assets/Vision-bb9d8765.js",revision:null},{url:"assets/Welfare-8f6016fb.js",revision:null},{url:"assets/Welfare.vue_vue_type_script_setup_true_lang-6e379813.js",revision:null},{url:"assets/Work-Place-47aec6bf.js",revision:null},{url:"assets/Work-Place.vue_vue_type_script_setup_true_lang-242ef9f0.js",revision:null},{url:"assets/Work-Timer-d365edf5.js",revision:null},{url:"assets/Work-Timer.vue_vue_type_script_setup_true_lang-dbf9ce69.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"assets/zh-CN-78ecf232.js",revision:null},{url:"associated-company.html",revision:"b293ac9da69da081dc343034152e8a11"},{url:"associated-company/components/company-info.html",revision:"935a69c33efccd849285d4acd1b27d3a"},{url:"company-profile.html",revision:"b11147a725455b2ef2253c5724702527"},{url:"company-profile/components/companyhistory.html",revision:"eda515c6a7a1a17df4d8cbc50a607fea"},{url:"company-profile/components/companyprofilecontent.html",revision:"7b968bc92b76b7ca8f16dff4c2878ef4"},{url:"company-staff-observation.html",revision:"53ee50b814431ef7f3da40704df8d935"},{url:"company-staff-observation/components/movieitem.html",revision:"b6c5e14354d94dbf2710136d95aca4cd"},{url:"components/business-item.html",revision:"b1339d80d7fdf9b8a6aa400e0ee1c6cb"},{url:"components/business.html",revision:"b1339d80d7fdf9b8a6aa400e0ee1c6cb"},{url:"components/customers.html",revision:"b1339d80d7fdf9b8a6aa400e0ee1c6cb"},{url:"components/field.html",revision:"b1339d80d7fdf9b8a6aa400e0ee1c6cb"},{url:"components/first.html",revision:"b1339d80d7fdf9b8a6aa400e0ee1c6cb"},{url:"contact-us.html",revision:"9b7fee412bb38fd50e11ada895634fa7"},{url:"contact-us/components/content.html",revision:"d1797b86968b57abc56c36b39c645e8e"},{url:"corporate-philosophy-management-policy.html",revision:"831123936734fa44ef534888711d2504"},{url:"corporate-philosophy-management-policy/components/innovation.html",revision:"02503322ee9bdacca341ee787a75a503"},{url:"corporate-philosophy-management-policy/components/mission.html",revision:"3980eee80ce350729239f6a37d7c42cc"},{url:"corporate-philosophy-management-policy/components/practicesguidelines.html",revision:"5905ce7bb9f3b9f4540ae433b34ee82a"},{url:"corporate-philosophy-management-policy/components/values.html",revision:"801a4dc9a4489952f86973d1680192fa"},{url:"corporate-philosophy-management-policy/components/vision.html",revision:"0dbd8d1274fa5dce3dee0b8c9883060a"},{url:"data-solution.html",revision:"9ff356b9038060b2f4b12567d8eb646c"},{url:"data-solution/components/ai-application-area.html",revision:"d002364d4ff9285494558f6cfed41936"},{url:"data-solution/components/ai-case.html",revision:"e51dd100206d49426a0700e3474be7bc"},{url:"data-solution/components/analytics-transformation-services.html",revision:"a18a03c8d5d3e0b5960b03d1f518b5f5"},{url:"data-solution/components/epr.html",revision:"85633ab42d4432c34d2c45536330372b"},{url:"data-solution/components/introduce.html",revision:"ac9ed3e4b1bf577ebc1cfa2ce5c7ff47"},{url:"event-information.html",revision:"d9b6e5724e5375b14c1e1ab2bbad8515"},{url:"event-information/components/eventinformationitem.html",revision:"a485e35e189af630589b63385da51347"},{url:"faq.html",revision:"25a52f9e4ff98ea4dcaa4ea0359c13f2"},{url:"faq/components/faq-items.html",revision:"53a9587a9afce34d4694656567b325de"},{url:"graduate-recruitment.html",revision:"5b69da8a51dea1abe9d7bb4bf888ce8e"},{url:"graduate-recruitment/components/holidays-vacation.html",revision:"05dd955c9c616bab7f63312517bb6a00"},{url:"graduate-recruitment/components/open-positions.html",revision:"c068ba2d51f1eee3630fcd51a3f2376f"},{url:"graduate-recruitment/components/personnel-system.html",revision:"e6cb90f22c5c9eb76c60f55d9b99d75d"},{url:"graduate-recruitment/components/recruiting-subjects.html",revision:"c4d6580dcc6fd8e24306dd95bf12b634"},{url:"graduate-recruitment/components/salary.html",revision:"91e2dd94a1cd3c50a754286e5e145af9"},{url:"graduate-recruitment/components/subject-application.html",revision:"685858942ccfa0a0698907a7d2021947"},{url:"graduate-recruitment/components/to-graduates.html",revision:"9eb0e79d6af752717ab92d50bd5047ad"},{url:"graduate-recruitment/components/trial-period.html",revision:"4413409f8b32324fc8bcc0c9faf56625"},{url:"graduate-recruitment/components/welfare.html",revision:"7261033f331b8bae3eb3f3add93e25d2"},{url:"graduate-recruitment/components/work-place.html",revision:"deb01e48c5d27d5538c7ca035c01ed04"},{url:"graduate-recruitment/components/work-timer.html",revision:"c607cceb4069d636f59ed85121459e34"},{url:"healthcare-business.html",revision:"0f58b0f0ec8fadf51326a6467b5692d8"},{url:"healthcare-business/components/brand.html",revision:"a18973b524c399fb710e92e3a5cd5ded"},{url:"healthcare-business/components/healthcarebusinessitem.html",revision:"d608f96a3c10e89bdd9326aef48233e1"},{url:"index.html",revision:"7e92a4c20cf54ab28918268cce858dc7"},{url:"infrastructure-business.html",revision:"3f05f2feab941a98c3449b3c1ea1ccd7"},{url:"infrastructure-business/components/dev-results.html",revision:"05a458171e8f9b2ca2bd9d056039dded"},{url:"infrastructure-business/components/infrastructure-business.html",revision:"7da0f159e962562679bb94010eab54fa"},{url:"infrastructure-business/components/introduce.html",revision:"44d463d5426535ba6cc8ff56bb331356"},{url:"infrastructure-business/components/operations.html",revision:"61fb498b5105bb846fe066029029a48d"},{url:"infrastructure-business/components/virtualization-engineer.html",revision:"2603ea3cc96cc25c2c866ce650e25779"},{url:"logistics-business.html",revision:"4367edec903ead3a144effdbb02427d2"},{url:"logistics-business/components/ai-optimization.html",revision:"aebd826125e8b80940c29177db6b3e6a"},{url:"logistics-business/components/gartnercard.html",revision:"e8902c221d938771751bc9b84d1c84fd"},{url:"logistics-business/components/logistics-challenges.html",revision:"a522911057f8c3d0366a8a6ecf889775"},{url:"logistics-business/components/logistics-management.html",revision:"9cf2b895a03705e9aa985ce1b8c85920"},{url:"logistics-business/components/logistics-platform.html",revision:"8fb4aad291958b47e02d4a7f412828bb"},{url:"logistics-business/components/logistics-promotion.html",revision:"0d83396700ae3ea511e4fe6b057c8cb4"},{url:"map.html",revision:"100a6d95068b7c678d941d72b6f136fe"},{url:"map/components/company-info.html",revision:"98592e84a7a043b0c54cbeee940194b1"},{url:"map/components/public-transit.html",revision:"f9daf696cd0ab96d9aff666af194c730"},{url:"message-from-president.html",revision:"09a13c2cc03dcf9efee2e74e884be537"},{url:"privacy-policy.html",revision:"d7d53d6ea122ce102dcf67fcf921e14b"},{url:"privacy-policy/components/content.html",revision:"c8ff9e2cc9460c7f7748e5d90ef7c8db"},{url:"recruitment-information.html",revision:"b02576be0cdeb4b627d95e75f49b5de7"},{url:"recruitment-process.html",revision:"b16dabf3e1fde62d9bcd0f00dc7b5352"},{url:"recruitment-process/components/recruitment-item.html",revision:"3c56444b95e8a3c35104cbb15151b945"},{url:"si-service-business.html",revision:"d1ba72e212a181144e687d099341f6fc"},{url:"si-service-business/components/advanced-si-services.html",revision:"9ff20a490ed80ff890f10283c1680032"},{url:"si-service-business/components/automated-testing-tools.html",revision:"94e50aaad0c02c0709e912832d01c387"},{url:"si-service-business/components/examples-achievements.html",revision:"fc550da4b39180cf47cd0d7cbf64cda4"},{url:"si-service-business/components/industry-dev.html",revision:"21013b186285f29223c1a78a3801c535"},{url:"si-service-business/components/industry-experience.html",revision:"6536adfab31098687ae75e043f868de5"},{url:"si-service-business/components/latest-technology.html",revision:"ee82c800edec7b51280ece92de0ef422"},{url:"si-service-business/components/platforms-config.html",revision:"62b1b8c78ecbf809409fee2ed119ffb2"},{url:"si-service-business/components/system-dev.html",revision:"f729e44f07e6e724083998b43a97edf3"},{url:"si-service-business/components/system-maintenance.html",revision:"124bb21af6c866fa456ecb27b3ef271b"},{url:"social-recruitment.html",revision:"3e29f60e019d805584e0dcfd73c2904c"},{url:"social-recruitment/components/download-template.html",revision:"80b92d8a3d4815e385874129db4afcef"},{url:"social-recruitment/components/experiencedperson.html",revision:"a96f8d1e2301fc0d4d5a654497849428"},{url:"social-recruitment/components/inexperiencedperson.html",revision:"aa68c1a0b1085a2498eb26ad72a7f6cb"},{url:"terms-conditions.html",revision:"32a9da2e4f0a0fe1337c3da155129a14"},{url:"terms-conditions/components/content.html",revision:"72d8dd3863a46d709933cc877813ff71"},{url:"favicon.svg",revision:"a795ab195c26601ea433babed25a7d0d"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
