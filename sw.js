if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const a=e=>n(e,r),u={module:{uri:r},exports:l,require:a};s[r]=Promise.all(i.map((e=>u[e]||a(e)))).then((e=>(t(...e),l)))}}define(["./workbox-56a10583"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"adoption-intelligence.html",revision:"4d30a8fd239286ad985720831901bc07"},{url:"adoption-intelligence/components/adoption-item.html",revision:"4924f0acc6eb01e0630916294d9e5510"},{url:"adoption-intelligence/components/adoptioncard.html",revision:"9da1361acecd87465abcfc8149f5313b"},{url:"assets/_...all_-24f44aa2.js",revision:null},{url:"assets/404-444279aa.js",revision:null},{url:"assets/adoption-item-385b4164.js",revision:null},{url:"assets/adoption-item.vue_vue_type_script_setup_true_lang-24434dbd.js",revision:null},{url:"assets/adoptionCard-92047e18.js",revision:null},{url:"assets/adoptionCard.vue_vue_type_script_setup_true_lang-32f6690b.js",revision:null},{url:"assets/Advanced-SI-Services-26772f50.css",revision:null},{url:"assets/Advanced-SI-Services-67021cec.js",revision:null},{url:"assets/Advanced-SI-Services.vue_vue_type_style_index_0_lang-a85add01.js",revision:null},{url:"assets/AI-Application-Area-039d608b.js",revision:null},{url:"assets/AI-Application-Area-bb5da392.css",revision:null},{url:"assets/AI-Case-97426453.js",revision:null},{url:"assets/AI-Optimization-6cd10b27.js",revision:null},{url:"assets/AI-Optimization.vue_vue_type_script_setup_true_lang-c6020c25.js",revision:null},{url:"assets/Analytics-Transformation-Services-e7a00e21.js",revision:null},{url:"assets/Analytics-Transformation-Services.vue_vue_type_script_setup_true_lang-ae874ef0.js",revision:null},{url:"assets/app-504615bc.js",revision:null},{url:"assets/Automated-Testing-Tools-2a35ddd4.js",revision:null},{url:"assets/Automated-Testing-Tools.vue_vue_type_script_setup_true_lang-85c78b52.js",revision:null},{url:"assets/blank-9b457708.js",revision:null},{url:"assets/Brand-062c55f0.js",revision:null},{url:"assets/Brand-11b71c2c.css",revision:null},{url:"assets/Company-Info-9db0bae4.js",revision:null},{url:"assets/company-info-a7b1f2fc.js",revision:null},{url:"assets/company-info.vue_vue_type_script_setup_true_lang-10d9f1f3.js",revision:null},{url:"assets/Company-Info.vue_vue_type_script_setup_true_lang-76440372.js",revision:null},{url:"assets/CompanyHistory-3b55d4b3.js",revision:null},{url:"assets/CompanyHistory-cdba2e02.css",revision:null},{url:"assets/CompanyProfileContent-b61cdd57.js",revision:null},{url:"assets/CompanyProfileContent.vue_vue_type_script_setup_true_lang-b14cab0f.js",revision:null},{url:"assets/Content-0b2bd8e1.js",revision:null},{url:"assets/Content-61e3d33a.js",revision:null},{url:"assets/Content-eeb1636e.js",revision:null},{url:"assets/Content.vue_vue_type_script_setup_true_lang-65eaccec.js",revision:null},{url:"assets/Content.vue_vue_type_script_setup_true_lang-d28f0e3f.js",revision:null},{url:"assets/Content.vue_vue_type_script_setup_true_lang-f4bb2e05.js",revision:null},{url:"assets/Dev-Results-73708e62.js",revision:null},{url:"assets/Dev-Results.vue_vue_type_script_setup_true_lang-313d324c.js",revision:null},{url:"assets/Download-Template-5250a76c.js",revision:null},{url:"assets/Download-Template.vue_vue_type_script_setup_true_lang-a94eb0c1.js",revision:null},{url:"assets/en-58641bd2.js",revision:null},{url:"assets/EPR-280f0c3d.js",revision:null},{url:"assets/EPR.vue_vue_type_script_setup_true_lang-5595109d.js",revision:null},{url:"assets/EventInformationItem-1134344a.js",revision:null},{url:"assets/EventInformationItem-aa7afeda.css",revision:null},{url:"assets/Examples-Achievements-4afc5eb0.js",revision:null},{url:"assets/Examples-Achievements-add34874.css",revision:null},{url:"assets/ExperiencedPerson-07aa4787.js",revision:null},{url:"assets/ExperiencedPerson-cae09fde.css",revision:null},{url:"assets/FAQ-items-ba28caa2.js",revision:null},{url:"assets/FAQ-items.vue_vue_type_script_setup_true_lang-3aea4676.js",revision:null},{url:"assets/fax-3fd6589a.js",revision:null},{url:"assets/GartnerCard-ad657e55.js",revision:null},{url:"assets/GartnerCard.vue_vue_type_script_setup_true_lang-f8bf189a.js",revision:null},{url:"assets/GartnerCardPhone-1cd08d93.js",revision:null},{url:"assets/GartnerCardPhone.vue_vue_type_script_setup_true_lang-f47a1a60.js",revision:null},{url:"assets/GraduatesPhone-e71151b6.js",revision:null},{url:"assets/GraduatesPhone.vue_vue_type_script_setup_true_lang-7ff2afa2.js",revision:null},{url:"assets/HealthcareBusinessItem-17c15886.js",revision:null},{url:"assets/HealthcareBusinessItem-73d6b2ae.css",revision:null},{url:"assets/Holidays-Vacation-da39dca4.js",revision:null},{url:"assets/Holidays-Vacation.vue_vue_type_script_setup_true_lang-82b25a7f.js",revision:null},{url:"assets/home-555e876a.js",revision:null},{url:"assets/icon_1-3ff743fe.js",revision:null},{url:"assets/index-1252602e.js",revision:null},{url:"assets/index-12ae6a37.js",revision:null},{url:"assets/index-12d3b053.js",revision:null},{url:"assets/index-14e51d23.css",revision:null},{url:"assets/index-2a4597e5.js",revision:null},{url:"assets/index-469b0991.css",revision:null},{url:"assets/index-4c38603e.js",revision:null},{url:"assets/index-50861317.js",revision:null},{url:"assets/index-50fefe77.js",revision:null},{url:"assets/index-5e67edcf.js",revision:null},{url:"assets/index-6cccc40b.css",revision:null},{url:"assets/index-7a22adae.css",revision:null},{url:"assets/index-7e7f310d.css",revision:null},{url:"assets/index-7fcd3e3e.js",revision:null},{url:"assets/index-80282f16.js",revision:null},{url:"assets/index-84c9533c.css",revision:null},{url:"assets/index-9407d2d0.js",revision:null},{url:"assets/index-9699b288.css",revision:null},{url:"assets/index-9d58bd1b.js",revision:null},{url:"assets/index-ae4b97e9.js",revision:null},{url:"assets/index-c868459a.js",revision:null},{url:"assets/index-cb16f33a.js",revision:null},{url:"assets/index-dc773a3b.js",revision:null},{url:"assets/index-ebfdc7d7.js",revision:null},{url:"assets/index-ecee9433.js",revision:null},{url:"assets/index-fac0c059.js",revision:null},{url:"assets/index-fe43d3ae.js",revision:null},{url:"assets/Industry-Dev-bc56df2b.js",revision:null},{url:"assets/Industry-Dev.vue_vue_type_script_setup_true_lang-34aa0505.js",revision:null},{url:"assets/Industry-Experience-650adfe5.js",revision:null},{url:"assets/Industry-Experience.vue_vue_type_script_setup_true_lang-6b39d86b.js",revision:null},{url:"assets/InexperiencedPerson-7122269d.js",revision:null},{url:"assets/InexperiencedPerson-96df9a18.css",revision:null},{url:"assets/Infrastructure-Business-e8e8b7b1.js",revision:null},{url:"assets/Infrastructure-Business.vue_vue_type_script_setup_true_lang-5bac7dd3.js",revision:null},{url:"assets/Innovation-3bc714c9.js",revision:null},{url:"assets/Innovation.vue_vue_type_script_setup_true_lang-56359a39.js",revision:null},{url:"assets/Introduce-0059f148.js",revision:null},{url:"assets/Introduce-14a71088.js",revision:null},{url:"assets/Introduce.vue_vue_type_script_setup_true_lang-b3e292b5.js",revision:null},{url:"assets/Introduce.vue_vue_type_script_setup_true_lang-c25e59db.js",revision:null},{url:"assets/Latest-Technology-5db57a8f.js",revision:null},{url:"assets/Latest-Technology.vue_vue_type_script_setup_true_lang-7dd15d54.js",revision:null},{url:"assets/Logistics-Challenges-7a78c2b4.js",revision:null},{url:"assets/Logistics-Challenges.vue_vue_type_script_setup_true_lang-4a7c6081.js",revision:null},{url:"assets/Logistics-Management-bca0bf6d.js",revision:null},{url:"assets/Logistics-Management.vue_vue_type_script_setup_true_lang-0b44c7e8.js",revision:null},{url:"assets/Logistics-Platform-6c6d543c.js",revision:null},{url:"assets/Logistics-Platform.vue_vue_type_script_setup_true_lang-dc18bd13.js",revision:null},{url:"assets/Logistics-Promotion-61f1e14f.js",revision:null},{url:"assets/Logistics-Promotion.vue_vue_type_script_setup_true_lang-978e0380.js",revision:null},{url:"assets/LogisticsStrategyPhone-d7fe2b00.js",revision:null},{url:"assets/LogisticsStrategyPhone.vue_vue_type_script_setup_true_lang-e356923b.js",revision:null},{url:"assets/ManageMentPhone-1c7d508a.js",revision:null},{url:"assets/ManageMentPhone.vue_vue_type_script_setup_true_lang-914394a4.js",revision:null},{url:"assets/Mission-4df24e23.js",revision:null},{url:"assets/Mission.vue_vue_type_script_setup_true_lang-38218ba0.js",revision:null},{url:"assets/MovieItem-4895371b.css",revision:null},{url:"assets/MovieItem-8a3307dc.js",revision:null},{url:"assets/Open-Positions-23ba4d08.js",revision:null},{url:"assets/Open-Positions.vue_vue_type_script_setup_true_lang-52fb2732.js",revision:null},{url:"assets/Operations-6466eebf.css",revision:null},{url:"assets/Operations-75ec1bb4.js",revision:null},{url:"assets/Personnel-System-ee9dd8a4.js",revision:null},{url:"assets/Personnel-System.vue_vue_type_script_setup_true_lang-4cd12f6a.js",revision:null},{url:"assets/Platforms-Config-35153558.js",revision:null},{url:"assets/Platforms-Config.vue_vue_type_script_setup_true_lang-ff92eeeb.js",revision:null},{url:"assets/PracticesGuidelines-45430d9b.js",revision:null},{url:"assets/PracticesGuidelines.vue_vue_type_script_setup_true_lang-4f41842f.js",revision:null},{url:"assets/Public-Transit-6e74626f.js",revision:null},{url:"assets/Public-Transit-cdd1c564.css",revision:null},{url:"assets/Publications.vue_vue_type_script_setup_true_lang-d318ed78.js",revision:null},{url:"assets/Recruiting-Subjects-6c90c6d6.js",revision:null},{url:"assets/Recruiting-Subjects.vue_vue_type_script_setup_true_lang-955c4c6a.js",revision:null},{url:"assets/recruitment-item-71298d00.js",revision:null},{url:"assets/recruitment-item-9fcc6abd.css",revision:null},{url:"assets/Salary-6a83932b.js",revision:null},{url:"assets/Salary.vue_vue_type_script_setup_true_lang-6148ad9e.js",revision:null},{url:"assets/SocialTablePhone-b08e0f4e.js",revision:null},{url:"assets/SocialTablePhone.vue_vue_type_script_setup_true_lang-f9ef686a.js",revision:null},{url:"assets/Subject-application-c577eba1.js",revision:null},{url:"assets/Subject-application.vue_vue_type_script_setup_true_lang-4580ec72.js",revision:null},{url:"assets/SubPageTitle-Bg.vue_vue_type_script_setup_true_lang-e7d7b005.js",revision:null},{url:"assets/SubPageTitle.vue_vue_type_script_setup_true_lang-7bfb8ec4.js",revision:null},{url:"assets/System-Dev-9594e2dc.js",revision:null},{url:"assets/System-Dev.vue_vue_type_script_setup_true_lang-9ac67829.js",revision:null},{url:"assets/System-Maintenance-dd9ea871.js",revision:null},{url:"assets/System-Maintenance.vue_vue_type_script_setup_true_lang-02466ff8.js",revision:null},{url:"assets/TablePhone-94de4953.js",revision:null},{url:"assets/TablePhone.vue_vue_type_script_setup_true_lang-e8c58c70.js",revision:null},{url:"assets/TheBreadcrumbs.vue_vue_type_script_setup_true_lang-5f7cc0b7.js",revision:null},{url:"assets/TheDownloadBtn.vue_vue_type_script_setup_true_lang-bdbd2103.js",revision:null},{url:"assets/TheIconList.vue_vue_type_script_setup_true_lang-12d2b0af.js",revision:null},{url:"assets/ThePageMinTitle-0c066bd1.js",revision:null},{url:"assets/ThePageMinTitle2.vue_vue_type_script_setup_true_lang-d6cbdf91.js",revision:null},{url:"assets/ThePageMinTitle3-df09967d.js",revision:null},{url:"assets/ThePageNav.vue_vue_type_script_setup_true_lang-55e446a0.js",revision:null},{url:"assets/To-Graduates-7bcf6528.js",revision:null},{url:"assets/To-Graduates.vue_vue_type_script_setup_true_lang-65375e1a.js",revision:null},{url:"assets/Trial-Period-0b4a0072.js",revision:null},{url:"assets/Trial-Period.vue_vue_type_script_setup_true_lang-3f4f5d66.js",revision:null},{url:"assets/Use-Test-a0b3ec4a.js",revision:null},{url:"assets/Use-Test.vue_vue_type_script_setup_true_lang-d67ae171.js",revision:null},{url:"assets/Values-755465e5.js",revision:null},{url:"assets/Values.vue_vue_type_script_setup_true_lang-d779b8ed.js",revision:null},{url:"assets/video-chunk-b633910e.js",revision:null},{url:"assets/virtual_pwa-register-00b7ded1.js",revision:null},{url:"assets/Virtualization-Engineer-0a5771b4.css",revision:null},{url:"assets/Virtualization-Engineer-7e97624a.js",revision:null},{url:"assets/Vision-2e04d69a.js",revision:null},{url:"assets/Vision-31838d7b.css",revision:null},{url:"assets/Welfare-cc64ee44.js",revision:null},{url:"assets/Welfare.vue_vue_type_script_setup_true_lang-930c9847.js",revision:null},{url:"assets/Work-Place-142a931f.js",revision:null},{url:"assets/Work-Place.vue_vue_type_script_setup_true_lang-e849e42e.js",revision:null},{url:"assets/Work-Timer-7cea33b9.js",revision:null},{url:"assets/Work-Timer.vue_vue_type_script_setup_true_lang-1c58e9c4.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"assets/zh-CN-78ecf232.js",revision:null},{url:"associated-company.html",revision:"6ff444573eaa653b3e77ee67fd78e715"},{url:"associated-company/components/company-info.html",revision:"7bce7f3873fd01f6da68d47c53473f25"},{url:"company-profile.html",revision:"f457b328420776484d40d02637e273a9"},{url:"company-profile/components/companyhistory.html",revision:"26d76e1d4064941c52b243c58b6aff2c"},{url:"company-profile/components/companyprofilecontent.html",revision:"6fe41093d429d2f0c0b1c305c28416ad"},{url:"company-staff-observation.html",revision:"111e570249cd56636299ee89840f8da1"},{url:"company-staff-observation/components/movieitem.html",revision:"b6696193dc50c3d7ed6440b0b57cb2cf"},{url:"components/business-ball.html",revision:"ce5f4732b60102b6a7357dd3f80d07b4"},{url:"components/business-companies.html",revision:"aca1406dd276996eab79a3b64b9231a9"},{url:"components/business-companies2.html",revision:"aca1406dd276996eab79a3b64b9231a9"},{url:"components/business-item.html",revision:"aca1406dd276996eab79a3b64b9231a9"},{url:"components/business-item2.html",revision:"aca1406dd276996eab79a3b64b9231a9"},{url:"components/business.html",revision:"aca1406dd276996eab79a3b64b9231a9"},{url:"components/businessecharts.html",revision:"aca1406dd276996eab79a3b64b9231a9"},{url:"components/customers.html",revision:"aca1406dd276996eab79a3b64b9231a9"},{url:"components/field.html",revision:"aca1406dd276996eab79a3b64b9231a9"},{url:"components/first.html",revision:"aca1406dd276996eab79a3b64b9231a9"},{url:"contact-us.html",revision:"ad0f4f7bffd483d18cc3e2e3a6313d2b"},{url:"contact-us/components/content.html",revision:"0d4cdfb9116586d2edd5efc3d3f2b0a3"},{url:"corporate-philosophy-management-policy.html",revision:"80d8edadae47360ec6db1791eaceefad"},{url:"corporate-philosophy-management-policy/components/innovation.html",revision:"26af30647979bcc72b27480bcd8151dd"},{url:"corporate-philosophy-management-policy/components/mission.html",revision:"a54e814757d4f00265e42d16d9b197c2"},{url:"corporate-philosophy-management-policy/components/practicesguidelines.html",revision:"cc146f53be2b52781156ab260ca13ffb"},{url:"corporate-philosophy-management-policy/components/values.html",revision:"b700b09b2bc1510141e81e276fa80436"},{url:"corporate-philosophy-management-policy/components/vision.html",revision:"4ddc95a13eb126be4d3481a61eb2b549"},{url:"data-solution.html",revision:"688fb62ac284564150c094843c1a4c0b"},{url:"data-solution/components/ai-application-area.html",revision:"0e493b885ec75f2db1cbd092af729a2f"},{url:"data-solution/components/ai-case.html",revision:"281611a5844a450efd61e648fcb882f1"},{url:"data-solution/components/analytics-transformation-services.html",revision:"4752f419f5b4d00fe182817721198abb"},{url:"data-solution/components/introduce.html",revision:"2f1539958fafa85ce18d2a48758a27d5"},{url:"event-information.html",revision:"79204509834cd68acde2ffa0af3579ca"},{url:"event-information/components/eventinformationitem.html",revision:"3595b31f133c08e41805b5b36ff8144b"},{url:"faq.html",revision:"df8b2632d38fe2973b23d2cc21295b51"},{url:"faq/components/faq-items.html",revision:"e612269067cf7047bd502f819a9a6dc9"},{url:"graduate-recruitment.html",revision:"73d64959e4764d24b8dcc47b2668a758"},{url:"graduate-recruitment/components/graduatesphone.html",revision:"5c088c5ba308620dbacac8ec5eabcd8a"},{url:"graduate-recruitment/components/holidays-vacation.html",revision:"c95f77c356edb8e7c20295fb18066a69"},{url:"graduate-recruitment/components/open-positions.html",revision:"a1a91baa9795c30a9d4f65984ad9b500"},{url:"graduate-recruitment/components/personnel-system.html",revision:"7c1e5ead76466ede5ae625b93f9ac70d"},{url:"graduate-recruitment/components/recruiting-subjects.html",revision:"25e5b4a2485b9f09be8c589fea7c3e2c"},{url:"graduate-recruitment/components/salary.html",revision:"60065c15899cb363a5a12cafb26007fa"},{url:"graduate-recruitment/components/subject-application.html",revision:"0a06f2d5a44ae58372e63557236dfb7b"},{url:"graduate-recruitment/components/to-graduates.html",revision:"8ea1b388c50be82bc6adc061c4bc7ce6"},{url:"graduate-recruitment/components/trial-period.html",revision:"c4e1030f3596f90613e0d6075682ded9"},{url:"graduate-recruitment/components/welfare.html",revision:"9e887d06602c6bb9fbec4ed1d83b604c"},{url:"graduate-recruitment/components/work-place.html",revision:"4372c8642278cb6e736ddaf2cf8d0b24"},{url:"graduate-recruitment/components/work-timer.html",revision:"5ba9eb5e72aa613583a9140bfb792c83"},{url:"healthcare-business.html",revision:"5426c00ebaa8754232eba82b39f98a75"},{url:"healthcare-business/components/brand.html",revision:"a8691d1970449c03e70c99eecf23540f"},{url:"healthcare-business/components/healthcarebusinessitem.html",revision:"30ba8f8d6d483a11b110f01ecf60fb61"},{url:"index.html",revision:"80f8d59d35fc078209a3c29684c16823"},{url:"infrastructure-business.html",revision:"e2e4e80ec18180225c3b8b61d902292c"},{url:"infrastructure-business/components/dev-results.html",revision:"b774b0e3f3176b831733ea833bd21eaf"},{url:"infrastructure-business/components/infrastructure-business.html",revision:"84bd3d3a8ac58a04c5189bd44288a889"},{url:"infrastructure-business/components/introduce.html",revision:"914e2195122ad5e7df911c135e4ce611"},{url:"infrastructure-business/components/operations.html",revision:"540cb4ddfc8f331e9d538fb766f7b60c"},{url:"infrastructure-business/components/virtualization-engineer.html",revision:"5fbfab66d7121cf3e3852b8f53610641"},{url:"logistics-business.html",revision:"c8a0a8148bcd63f22a4cc30804d5a295"},{url:"logistics-business/components/ai-optimization.html",revision:"369c4271ba5af300068b4a81cbbd58c0"},{url:"logistics-business/components/gartnercard.html",revision:"959a24d27d529a52a3ed90f44499d722"},{url:"logistics-business/components/gartnercardphone.html",revision:"1f262e070f2f160c8841e5dfd0a3e820"},{url:"logistics-business/components/logistics-challenges.html",revision:"392c52332d9dbb1d6b773edf615a6bf7"},{url:"logistics-business/components/logistics-management.html",revision:"836ea1990a4695042f379c56008a0e70"},{url:"logistics-business/components/logistics-platform.html",revision:"98ee2662408f6bc1d8a2bba4a00747fb"},{url:"logistics-business/components/logistics-promotion.html",revision:"109ec28fe7d1f164d5a692227d2890cf"},{url:"logistics-business/components/logisticsstrategyphone.html",revision:"960b79b630129ed1bfba777f13265d03"},{url:"logistics-business/components/managementphone.html",revision:"c0c7d95db89bb1fd8e07d78c9147452f"},{url:"map.html",revision:"cdff8a1e4e914925339dc2a3e552391e"},{url:"map/components/company-info.html",revision:"8ffc58f262b429f3ab66bc23ee5336a3"},{url:"map/components/public-transit.html",revision:"38aea3b3e23cae4dbbdfb359439d784e"},{url:"message-from-president.html",revision:"07624eb38905021a109d8f8871e4d87f"},{url:"privacy-policy.html",revision:"820cd0514b5b21faace76a829010df75"},{url:"privacy-policy/components/content.html",revision:"3d9961a2122fcb62d5fb7abf61b6ff05"},{url:"privacy-policy/components/tablephone.html",revision:"bf5122927d6e84e5397dd5cb25effe91"},{url:"recruitment-process.html",revision:"973b86d2910803c67f8d82fd538b426a"},{url:"recruitment-process/components/recruitment-item.html",revision:"e9c1300a8cd584f75e577b5a604b2357"},{url:"si-service-business.html",revision:"5a94a64aabb9408e4b77ec1504ab3ec6"},{url:"si-service-business/components/advanced-si-services.html",revision:"ce31be05ba5e49f5d0d92873a12f56e1"},{url:"si-service-business/components/automated-testing-tools.html",revision:"d42fcecf6bced3642b319a5b0635f15e"},{url:"si-service-business/components/epr.html",revision:"68d5a2a19d1a37aab781e69afc3ee7e1"},{url:"si-service-business/components/examples-achievements.html",revision:"4c49b60da150ada88c0e9df473bcd27d"},{url:"si-service-business/components/industry-dev.html",revision:"e6b85add7773013d17aa125b9512e611"},{url:"si-service-business/components/industry-experience.html",revision:"2f33e6913e00284ed5e8b9b3de6a953d"},{url:"si-service-business/components/latest-technology.html",revision:"cdb38fea963876be1b9466eef7977fca"},{url:"si-service-business/components/platforms-config.html",revision:"03b237f149ecb2cbd3cfecb5df42e341"},{url:"si-service-business/components/system-dev.html",revision:"7e7063e00d5649767652b396d6aac52c"},{url:"si-service-business/components/system-maintenance.html",revision:"9587f6720a78318751960e36539263d7"},{url:"si-service-business/components/use-test.html",revision:"3fae7849bf5f2a126729be6f906edf9f"},{url:"social-recruitment.html",revision:"72449a377d813148135a656408764049"},{url:"social-recruitment/components/download-template.html",revision:"227213b226b481a086ccba14b7cc7f9e"},{url:"social-recruitment/components/experiencedperson.html",revision:"842fdbea14611c0f88ccfdbfc47221b3"},{url:"social-recruitment/components/inexperiencedperson.html",revision:"9b5b02eb72f79c5b3071fea82abc0550"},{url:"social-recruitment/components/socialtablephone.html",revision:"84b91523df430b46fed81cc2f4c10ac7"},{url:"terms-conditions.html",revision:"13a52ed0cbb8801cfb745a63979fc6cc"},{url:"terms-conditions/components/content.html",revision:"3b6d0b1ef10c566b94cd51c8081a83e8"},{url:"favicon.png",revision:"b2cf3bd6ff6b0079a6fdee5c154e1e25"},{url:"safari-pinned-tab.png",revision:"b2cf3bd6ff6b0079a6fdee5c154e1e25"},{url:"pwa-192x192.png",revision:"b2cf3bd6ff6b0079a6fdee5c154e1e25"},{url:"pwa-512x512.png",revision:"b2cf3bd6ff6b0079a6fdee5c154e1e25"},{url:"manifest.webmanifest",revision:"8b8ba08b4fdd5d1dd746014e188e3be1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
