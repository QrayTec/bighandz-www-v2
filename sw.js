if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const u=e=>n(e,r),a={module:{uri:r},exports:l,require:u};s[r]=Promise.all(i.map((e=>a[e]||u(e)))).then((e=>(t(...e),l)))}}define(["./workbox-56a10583"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"adoption-intelligence.html",revision:"a39c0a1fd78bb86a33dafe28a1b7910b"},{url:"adoption-intelligence/components/adoption-item.html",revision:"66b38c91850bc30e85fd2c9f7c582a29"},{url:"adoption-intelligence/components/adoptioncard.html",revision:"5308e15480c912525a89ea6c60cf3fc4"},{url:"assets/_...all_-5d2f3ee8.js",revision:null},{url:"assets/404-c22486ce.js",revision:null},{url:"assets/adoption-item-a8acbb16.js",revision:null},{url:"assets/adoption-item.vue_vue_type_script_setup_true_lang-b7d745dd.js",revision:null},{url:"assets/adoptionCard-fbf88d67.js",revision:null},{url:"assets/adoptionCard.vue_vue_type_script_setup_true_lang-0eedd45a.js",revision:null},{url:"assets/Advanced-SI-Services-26772f50.css",revision:null},{url:"assets/Advanced-SI-Services-58de8454.js",revision:null},{url:"assets/Advanced-SI-Services.vue_vue_type_style_index_0_lang-4280dc10.js",revision:null},{url:"assets/AI-Application-Area-6d60db59.js",revision:null},{url:"assets/AI-Application-Area-bb5da392.css",revision:null},{url:"assets/AI-Case-e1a2fb3d.js",revision:null},{url:"assets/AI-Optimization-ddeebf68.js",revision:null},{url:"assets/AI-Optimization.vue_vue_type_script_setup_true_lang-eb64b82c.js",revision:null},{url:"assets/Analytics-Transformation-Services-c5f5ffbe.js",revision:null},{url:"assets/Analytics-Transformation-Services.vue_vue_type_script_setup_true_lang-0a3f94b9.js",revision:null},{url:"assets/app-a78c92eb.js",revision:null},{url:"assets/Automated-Testing-Tools-05d65337.js",revision:null},{url:"assets/Automated-Testing-Tools.vue_vue_type_script_setup_true_lang-dc3f87e9.js",revision:null},{url:"assets/blank-e9a72c95.js",revision:null},{url:"assets/Brand-10f137ca.js",revision:null},{url:"assets/Brand-11b71c2c.css",revision:null},{url:"assets/Company-Info-3383bbc0.js",revision:null},{url:"assets/company-info-64b64241.js",revision:null},{url:"assets/company-info.vue_vue_type_script_setup_true_lang-9c78fbe3.js",revision:null},{url:"assets/Company-Info.vue_vue_type_script_setup_true_lang-cab4b15a.js",revision:null},{url:"assets/CompanyHistory-cdba2e02.css",revision:null},{url:"assets/CompanyHistory-f27e9350.js",revision:null},{url:"assets/CompanyProfileContent-3a47f370.js",revision:null},{url:"assets/CompanyProfileContent.vue_vue_type_script_setup_true_lang-d1e6b2a9.js",revision:null},{url:"assets/Content-0abdd0ee.js",revision:null},{url:"assets/Content-6dc1ba3c.js",revision:null},{url:"assets/Content-a0ebac27.js",revision:null},{url:"assets/Content.vue_vue_type_script_setup_true_lang-17a2c844.js",revision:null},{url:"assets/Content.vue_vue_type_script_setup_true_lang-f47f9f9a.js",revision:null},{url:"assets/Content.vue_vue_type_script_setup_true_lang-fe051d90.js",revision:null},{url:"assets/Dev-Results-7166c673.js",revision:null},{url:"assets/Dev-Results.vue_vue_type_script_setup_true_lang-2b4456a9.js",revision:null},{url:"assets/Download-Template-5600a514.js",revision:null},{url:"assets/Download-Template.vue_vue_type_script_setup_true_lang-98333963.js",revision:null},{url:"assets/en-58641bd2.js",revision:null},{url:"assets/EPR-a18c5276.js",revision:null},{url:"assets/EPR.vue_vue_type_script_setup_true_lang-65df6c66.js",revision:null},{url:"assets/EventInformationItem-3834c9d2.js",revision:null},{url:"assets/EventInformationItem-aa7afeda.css",revision:null},{url:"assets/Examples-Achievements-5ab05198.js",revision:null},{url:"assets/Examples-Achievements-add34874.css",revision:null},{url:"assets/ExperiencedPerson-86c6da00.js",revision:null},{url:"assets/ExperiencedPerson-cae09fde.css",revision:null},{url:"assets/FAQ-items-681615c1.js",revision:null},{url:"assets/FAQ-items.vue_vue_type_script_setup_true_lang-a67f9e96.js",revision:null},{url:"assets/fax-3fd6589a.js",revision:null},{url:"assets/GartnerCard-11f7e188.js",revision:null},{url:"assets/GartnerCard.vue_vue_type_script_setup_true_lang-3c86ef36.js",revision:null},{url:"assets/GartnerCardPhone-03043b61.js",revision:null},{url:"assets/GartnerCardPhone.vue_vue_type_script_setup_true_lang-3cc98845.js",revision:null},{url:"assets/GraduatesPhone-8ef9137d.js",revision:null},{url:"assets/GraduatesPhone.vue_vue_type_script_setup_true_lang-35ab9928.js",revision:null},{url:"assets/HealthcareBusinessItem-73d6b2ae.css",revision:null},{url:"assets/HealthcareBusinessItem-bf53d9a0.js",revision:null},{url:"assets/Holidays-Vacation-f3c0204c.js",revision:null},{url:"assets/Holidays-Vacation.vue_vue_type_script_setup_true_lang-1808eded.js",revision:null},{url:"assets/home-7bf43ca0.js",revision:null},{url:"assets/icon_1-3ff743fe.js",revision:null},{url:"assets/index-0864b4c0.js",revision:null},{url:"assets/index-09500c20.js",revision:null},{url:"assets/index-09788633.js",revision:null},{url:"assets/index-0f8cf6b2.js",revision:null},{url:"assets/index-14e51d23.css",revision:null},{url:"assets/index-284b287e.js",revision:null},{url:"assets/index-291ab303.js",revision:null},{url:"assets/index-2d40da6d.js",revision:null},{url:"assets/index-3640e216.js",revision:null},{url:"assets/index-44bac705.js",revision:null},{url:"assets/index-4b7534a3.js",revision:null},{url:"assets/index-6cccc40b.css",revision:null},{url:"assets/index-70e6eb7e.js",revision:null},{url:"assets/index-78b6fe30.js",revision:null},{url:"assets/index-7a22adae.css",revision:null},{url:"assets/index-7e7f310d.css",revision:null},{url:"assets/index-84c9533c.css",revision:null},{url:"assets/index-949fbb2b.js",revision:null},{url:"assets/index-9699b288.css",revision:null},{url:"assets/index-a26813cf.js",revision:null},{url:"assets/index-a74be899.js",revision:null},{url:"assets/index-a77e8416.js",revision:null},{url:"assets/index-b030a4c0.js",revision:null},{url:"assets/index-d4cf7343.css",revision:null},{url:"assets/index-f5a576b7.js",revision:null},{url:"assets/index-f871dd6a.js",revision:null},{url:"assets/index-fb73cc2e.js",revision:null},{url:"assets/Industry-Dev-43773a86.js",revision:null},{url:"assets/Industry-Dev.vue_vue_type_script_setup_true_lang-47fb4a06.js",revision:null},{url:"assets/Industry-Experience-bb226b36.js",revision:null},{url:"assets/Industry-Experience.vue_vue_type_script_setup_true_lang-9d65e4ab.js",revision:null},{url:"assets/InexperiencedPerson-87a7a562.js",revision:null},{url:"assets/InexperiencedPerson-96df9a18.css",revision:null},{url:"assets/Infrastructure-Business-947e6f9b.js",revision:null},{url:"assets/Infrastructure-Business.vue_vue_type_script_setup_true_lang-52caffc5.js",revision:null},{url:"assets/Innovation-c432cc2e.js",revision:null},{url:"assets/Innovation.vue_vue_type_script_setup_true_lang-26996947.js",revision:null},{url:"assets/Introduce-4bde52ae.js",revision:null},{url:"assets/Introduce-522dd2f1.js",revision:null},{url:"assets/Introduce.vue_vue_type_script_setup_true_lang-0fa14d0d.js",revision:null},{url:"assets/Introduce.vue_vue_type_script_setup_true_lang-4cd23d0e.js",revision:null},{url:"assets/Latest-Technology-8193392e.js",revision:null},{url:"assets/Latest-Technology.vue_vue_type_script_setup_true_lang-8595bdd6.js",revision:null},{url:"assets/Logistics-Challenges-3d81c7c7.js",revision:null},{url:"assets/Logistics-Challenges.vue_vue_type_script_setup_true_lang-ca00480c.js",revision:null},{url:"assets/Logistics-Management-b58f5446.js",revision:null},{url:"assets/Logistics-Management.vue_vue_type_script_setup_true_lang-4b6ee175.js",revision:null},{url:"assets/Logistics-Platform-a16efabe.js",revision:null},{url:"assets/Logistics-Platform.vue_vue_type_script_setup_true_lang-af9134c1.js",revision:null},{url:"assets/Logistics-Promotion-a98e7b9a.js",revision:null},{url:"assets/Logistics-Promotion.vue_vue_type_script_setup_true_lang-c3386903.js",revision:null},{url:"assets/LogisticsStrategyPhone-4db6a72c.js",revision:null},{url:"assets/LogisticsStrategyPhone.vue_vue_type_script_setup_true_lang-8a5f7668.js",revision:null},{url:"assets/ManageMentPhone-b9fbfa66.js",revision:null},{url:"assets/ManageMentPhone.vue_vue_type_script_setup_true_lang-7209c292.js",revision:null},{url:"assets/Mission-16f99769.js",revision:null},{url:"assets/Mission.vue_vue_type_script_setup_true_lang-5636dbf0.js",revision:null},{url:"assets/MovieItem-4895371b.css",revision:null},{url:"assets/MovieItem-7208d609.js",revision:null},{url:"assets/Open-Positions-c4d821f7.js",revision:null},{url:"assets/Open-Positions.vue_vue_type_script_setup_true_lang-737f2693.js",revision:null},{url:"assets/Operations-40979be6.js",revision:null},{url:"assets/Operations-6466eebf.css",revision:null},{url:"assets/Personnel-System-407c2620.js",revision:null},{url:"assets/Personnel-System.vue_vue_type_script_setup_true_lang-bb0570c3.js",revision:null},{url:"assets/Platforms-Config-5e58c937.js",revision:null},{url:"assets/Platforms-Config.vue_vue_type_script_setup_true_lang-3c839d29.js",revision:null},{url:"assets/PracticesGuidelines-d7578b28.js",revision:null},{url:"assets/PracticesGuidelines.vue_vue_type_script_setup_true_lang-6f987ba1.js",revision:null},{url:"assets/Public-Transit-c68f9337.css",revision:null},{url:"assets/Public-Transit-dc978c5c.js",revision:null},{url:"assets/Publications.vue_vue_type_script_setup_true_lang-b1e4f08f.js",revision:null},{url:"assets/Recruiting-Subjects-6d5a0548.js",revision:null},{url:"assets/Recruiting-Subjects.vue_vue_type_script_setup_true_lang-b3e0e62e.js",revision:null},{url:"assets/recruitment-item-69fa90e1.js",revision:null},{url:"assets/recruitment-item-9fcc6abd.css",revision:null},{url:"assets/Salary-ef9fdc5f.js",revision:null},{url:"assets/Salary.vue_vue_type_script_setup_true_lang-78cc822d.js",revision:null},{url:"assets/SocialTablePhone-121bdd45.css",revision:null},{url:"assets/SocialTablePhone-bfb48bc4.js",revision:null},{url:"assets/Subject-application-45785fe2.js",revision:null},{url:"assets/Subject-application.vue_vue_type_script_setup_true_lang-68c96c4e.js",revision:null},{url:"assets/SubPageTitle-Bg.vue_vue_type_script_setup_true_lang-2932f690.js",revision:null},{url:"assets/SubPageTitle.vue_vue_type_script_setup_true_lang-0c7451a7.js",revision:null},{url:"assets/System-Dev-ae37a90d.js",revision:null},{url:"assets/System-Dev.vue_vue_type_script_setup_true_lang-1b8b4821.js",revision:null},{url:"assets/System-Maintenance-7ee3cd6b.js",revision:null},{url:"assets/System-Maintenance.vue_vue_type_script_setup_true_lang-93d3d7a7.js",revision:null},{url:"assets/TablePhone-3200af82.js",revision:null},{url:"assets/TablePhone.vue_vue_type_script_setup_true_lang-e96c80d2.js",revision:null},{url:"assets/TheBreadcrumbs.vue_vue_type_script_setup_true_lang-8434408a.js",revision:null},{url:"assets/TheDownloadBtn.vue_vue_type_script_setup_true_lang-52d77d44.js",revision:null},{url:"assets/TheIconList.vue_vue_type_script_setup_true_lang-d30c850d.js",revision:null},{url:"assets/ThePageMinTitle-0cb12adc.js",revision:null},{url:"assets/ThePageMinTitle2.vue_vue_type_script_setup_true_lang-dd6b81bb.js",revision:null},{url:"assets/ThePageMinTitle3-e2256f64.js",revision:null},{url:"assets/ThePageNav.vue_vue_type_script_setup_true_lang-174a5a21.js",revision:null},{url:"assets/To-Graduates-98529c0a.js",revision:null},{url:"assets/To-Graduates.vue_vue_type_script_setup_true_lang-36c476b8.js",revision:null},{url:"assets/Trial-Period-7a4535c2.js",revision:null},{url:"assets/Trial-Period.vue_vue_type_script_setup_true_lang-945f7d96.js",revision:null},{url:"assets/Use-Test-19844a4b.js",revision:null},{url:"assets/Use-Test.vue_vue_type_script_setup_true_lang-024a38b5.js",revision:null},{url:"assets/Values-e882793f.js",revision:null},{url:"assets/Values.vue_vue_type_script_setup_true_lang-a7af15a6.js",revision:null},{url:"assets/virtual_pwa-register-73fdf4c9.js",revision:null},{url:"assets/Virtualization-Engineer-0a5771b4.css",revision:null},{url:"assets/Virtualization-Engineer-2e49535a.js",revision:null},{url:"assets/Vision-31838d7b.css",revision:null},{url:"assets/Vision-4acefe52.js",revision:null},{url:"assets/Welfare-478bd530.js",revision:null},{url:"assets/Welfare.vue_vue_type_script_setup_true_lang-bc0dca47.js",revision:null},{url:"assets/Work-Place-0314dc50.js",revision:null},{url:"assets/Work-Place.vue_vue_type_script_setup_true_lang-24ba8e34.js",revision:null},{url:"assets/Work-Timer-e85ffdd6.js",revision:null},{url:"assets/Work-Timer.vue_vue_type_script_setup_true_lang-8ab4456f.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"assets/zh-CN-78ecf232.js",revision:null},{url:"associated-company.html",revision:"aa5dce587d6dc01e00f2fd7230b73ef9"},{url:"associated-company/components/company-info.html",revision:"a4b8abf8b5cbddc20b43081ab5a4d5d9"},{url:"company-profile.html",revision:"21135388c2830676cbbf17c938a0b4d4"},{url:"company-profile/components/companyhistory.html",revision:"904a1d1a0b8d37a8f4eee5c75433792a"},{url:"company-profile/components/companyprofilecontent.html",revision:"7209947339623a18ea40fd4d1b9d50dd"},{url:"company-staff-observation.html",revision:"dee428affdf5f5fbccd23273e7cbb647"},{url:"company-staff-observation/components/movieitem.html",revision:"53ab40b67835b31c5e3506d7f74e3129"},{url:"components/business-ball.html",revision:"e1057a4cfb71b42909f0bd2e74ba487b"},{url:"components/business-companies.html",revision:"e1057a4cfb71b42909f0bd2e74ba487b"},{url:"components/business-companies2.html",revision:"24788b20b41b47a9f724a58af1f272e0"},{url:"components/business-item.html",revision:"24788b20b41b47a9f724a58af1f272e0"},{url:"components/business-item2.html",revision:"24788b20b41b47a9f724a58af1f272e0"},{url:"components/business.html",revision:"ec9fe489d578d706ef3799a8d498a5b5"},{url:"components/businessecharts.html",revision:"ec9fe489d578d706ef3799a8d498a5b5"},{url:"components/customers.html",revision:"ec9fe489d578d706ef3799a8d498a5b5"},{url:"components/field.html",revision:"ec9fe489d578d706ef3799a8d498a5b5"},{url:"components/first.html",revision:"ec9fe489d578d706ef3799a8d498a5b5"},{url:"contact-us.html",revision:"ed1bb14f208183d19619d93a98e3c991"},{url:"contact-us/components/content.html",revision:"31ad07f509f72d427c03dd8fcda842b4"},{url:"corporate-philosophy-management-policy.html",revision:"1d3b52dd7495f897b4f6d1f95995c919"},{url:"corporate-philosophy-management-policy/components/innovation.html",revision:"b9c51a5246c5b2a8504562c5514dd08e"},{url:"corporate-philosophy-management-policy/components/mission.html",revision:"85cd7cbee5573a88db61962a25308340"},{url:"corporate-philosophy-management-policy/components/practicesguidelines.html",revision:"90eb90051b4ecb196f525501a83c8e4a"},{url:"corporate-philosophy-management-policy/components/values.html",revision:"85b47c09c78e36336e1deb42ccfbf440"},{url:"corporate-philosophy-management-policy/components/vision.html",revision:"273fef41d66f90ec16817608c48695a6"},{url:"data-solution.html",revision:"0060b44e2364c22e6304382fad39e8d3"},{url:"data-solution/components/ai-application-area.html",revision:"5cf1124b2be4cd17a70f5041160dbb70"},{url:"data-solution/components/ai-case.html",revision:"319d2b1d8173e3b0c0290cf86135430f"},{url:"data-solution/components/analytics-transformation-services.html",revision:"fb2bc976f9493ecc2491a9249c1ae2b7"},{url:"data-solution/components/introduce.html",revision:"e3be1f2ca9650a2c6c17f1b19b7c3adb"},{url:"event-information.html",revision:"2009a4d151430447d736ae35282eba60"},{url:"event-information/components/eventinformationitem.html",revision:"8073e21781e428a5b697e093cdf5b5e7"},{url:"faq.html",revision:"4540a0641036a8db68eae4c0c41b404e"},{url:"faq/components/faq-items.html",revision:"e0babbbd841eb6d05bb870b3d1d21461"},{url:"graduate-recruitment.html",revision:"f24c87e492fefe590a1c6dd1c8108e0e"},{url:"graduate-recruitment/components/graduatesphone.html",revision:"f446375ba8b66be7d9b0095f17da688e"},{url:"graduate-recruitment/components/holidays-vacation.html",revision:"01a6f2d79bddf2012e8cd5361bd7e86f"},{url:"graduate-recruitment/components/open-positions.html",revision:"8a0e05cc003e4f2a625bf537d45b2495"},{url:"graduate-recruitment/components/personnel-system.html",revision:"7830a18fc43d7d3392d524493ae29465"},{url:"graduate-recruitment/components/recruiting-subjects.html",revision:"399ad6cf53feb66401053132a86f8102"},{url:"graduate-recruitment/components/salary.html",revision:"3d75130aff94fb56b108a232b91360be"},{url:"graduate-recruitment/components/subject-application.html",revision:"694080802e07a9d3a1207bcbc77839b2"},{url:"graduate-recruitment/components/to-graduates.html",revision:"adfb77d3d650a509bbf3e6860025e252"},{url:"graduate-recruitment/components/trial-period.html",revision:"06dcc4707148aa91eae52aded6bb70a7"},{url:"graduate-recruitment/components/welfare.html",revision:"97b1aabc8eca7ebb4b6bed0f978d9ed8"},{url:"graduate-recruitment/components/work-place.html",revision:"e3f042e323d3bae539f0003d8761dd7b"},{url:"graduate-recruitment/components/work-timer.html",revision:"f4b83fc57759dc2eb75cdd1351d18722"},{url:"healthcare-business.html",revision:"d14220b84c0733112956881dd7d10954"},{url:"healthcare-business/components/brand.html",revision:"0e80119430def16a0ab9f337d2579e75"},{url:"healthcare-business/components/healthcarebusinessitem.html",revision:"f1c4a1cf43e96ca120d45b2cfdee38f2"},{url:"index.html",revision:"ceb478039aaec8d970fc17656cd8178e"},{url:"infrastructure-business.html",revision:"18551ae3c8ac440f20674d2ced63faaf"},{url:"infrastructure-business/components/dev-results.html",revision:"29a184d97dadb46467603161d757fd62"},{url:"infrastructure-business/components/infrastructure-business.html",revision:"93466edad370c8d56327073b46369a71"},{url:"infrastructure-business/components/introduce.html",revision:"ea5bbfa4734d17c81f5f11b7a1914857"},{url:"infrastructure-business/components/operations.html",revision:"8c74dba344017f101063612bc37e69d6"},{url:"infrastructure-business/components/virtualization-engineer.html",revision:"6257a04f46b8c95f5dd670fea8cdfe70"},{url:"logistics-business.html",revision:"306a80e2ce219c35a080bbe2f4063729"},{url:"logistics-business/components/ai-optimization.html",revision:"5879f29c4672b8d44b405546353c5ea9"},{url:"logistics-business/components/gartnercard.html",revision:"d592aa20eb69d51df9a2e819287ea0b8"},{url:"logistics-business/components/gartnercardphone.html",revision:"375108639d4fc7e0e0bf32c8cae740f6"},{url:"logistics-business/components/logistics-challenges.html",revision:"4cc496ca72bb9cac4e85c5545caa14b3"},{url:"logistics-business/components/logistics-management.html",revision:"117969e70e8c71cecc632c401d3c6802"},{url:"logistics-business/components/logistics-platform.html",revision:"2f49e9876d71ffcdd6c484df3999ffed"},{url:"logistics-business/components/logistics-promotion.html",revision:"5eee3695489504afaab4e6345c17bc51"},{url:"logistics-business/components/logisticsstrategyphone.html",revision:"95945d2671381d69f1f1937a536636ee"},{url:"logistics-business/components/managementphone.html",revision:"38ef1b12f036538c53256a63f6310366"},{url:"map.html",revision:"8b3066154a080d4d45c380e7964efe12"},{url:"map/components/company-info.html",revision:"60710f90adf6f9661bce31ebf4a88306"},{url:"map/components/public-transit.html",revision:"8a374d2cedcffdc512fe4cca0fce74ca"},{url:"message-from-president.html",revision:"12595f52131e73004ac280440260479c"},{url:"privacy-policy.html",revision:"2a47eadb78fd8048f5a1a6b85e25d0e3"},{url:"privacy-policy/components/content.html",revision:"f3c0265e972bc1fa7673d18e41a7e19e"},{url:"privacy-policy/components/tablephone.html",revision:"73d7a1875c6c68d259d5610c656ab336"},{url:"recruitment-process.html",revision:"cf10ee9880d936410e9d49fa166247b9"},{url:"recruitment-process/components/recruitment-item.html",revision:"ff02de1bc93807f264f205f80786e0e5"},{url:"si-service-business.html",revision:"a9d9df4cb161f8126494f9d3a907c985"},{url:"si-service-business/components/advanced-si-services.html",revision:"13d92af28e9d870d4582fddf2c1e032d"},{url:"si-service-business/components/automated-testing-tools.html",revision:"2e10f89ca3070faa0e86dca73ef71de3"},{url:"si-service-business/components/epr.html",revision:"e19571a451fa11f4f7b89a5d3114a892"},{url:"si-service-business/components/examples-achievements.html",revision:"d31d53585a2ffd2962f2b0f900e86abb"},{url:"si-service-business/components/industry-dev.html",revision:"e3c3adc0512d485f7d3ca41a8943043f"},{url:"si-service-business/components/industry-experience.html",revision:"1c054ef15ad8ac6a0d5a720394ec626c"},{url:"si-service-business/components/latest-technology.html",revision:"473b3b2072ad281c038075eea8ea50d8"},{url:"si-service-business/components/platforms-config.html",revision:"3f12cdce729b881a5b08d0bfe368aa44"},{url:"si-service-business/components/system-dev.html",revision:"dee20746e1321132506ec9b2d42740df"},{url:"si-service-business/components/system-maintenance.html",revision:"c4251607e5534689ffe2e83831ea4c94"},{url:"si-service-business/components/use-test.html",revision:"55923c8c6ae7f67978513dd99c4791d2"},{url:"social-recruitment.html",revision:"ab71a52e0615dac3f67f8f2c33552d18"},{url:"social-recruitment/components/download-template.html",revision:"046af95ad8a399d9d8fbbe0be9ae30f9"},{url:"social-recruitment/components/experiencedperson.html",revision:"6a451c36bbe3130702afc062998223c5"},{url:"social-recruitment/components/inexperiencedperson.html",revision:"4bd73101d909746632e466f6a8483a1a"},{url:"social-recruitment/components/socialtablephone.html",revision:"f732f148a64cce1edfc92c2c6a04eae5"},{url:"terms-conditions.html",revision:"c4208acad076cd9e3cdd9234e7f4dafe"},{url:"terms-conditions/components/content.html",revision:"a10761bb8f4658740bf0950b6e0c5138"},{url:"favicon.png",revision:"b2cf3bd6ff6b0079a6fdee5c154e1e25"},{url:"safari-pinned-tab.png",revision:"b2cf3bd6ff6b0079a6fdee5c154e1e25"},{url:"pwa-192x192.png",revision:"b2cf3bd6ff6b0079a6fdee5c154e1e25"},{url:"pwa-512x512.png",revision:"b2cf3bd6ff6b0079a6fdee5c154e1e25"},{url:"manifest.webmanifest",revision:"8b8ba08b4fdd5d1dd746014e188e3be1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
