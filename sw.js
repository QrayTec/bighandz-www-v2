if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const a=e=>n(e,r),u={module:{uri:r},exports:l,require:a};s[r]=Promise.all(i.map((e=>u[e]||a(e)))).then((e=>(t(...e),l)))}}define(["./workbox-56a10583"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"adoption-intelligence.html",revision:"97054d8a08c6b7ea717d4b9dbe87e4cc"},{url:"adoption-intelligence/components/adoption-item.html",revision:"50681ae641fc5f9132d83e5b2e12b248"},{url:"adoption-intelligence/components/adoptioncard.html",revision:"d4f1f8b17843621577fd5db6a257b1da"},{url:"assets/_...all_-90db5aa3.js",revision:null},{url:"assets/404-d66ecfb9.js",revision:null},{url:"assets/adoption-item-4c4b9d03.js",revision:null},{url:"assets/adoption-item.vue_vue_type_script_setup_true_lang-1d83fd05.js",revision:null},{url:"assets/adoptionCard-64615675.js",revision:null},{url:"assets/adoptionCard.vue_vue_type_script_setup_true_lang-5af115a0.js",revision:null},{url:"assets/Advanced-SI-Services-26772f50.css",revision:null},{url:"assets/Advanced-SI-Services-3274b6c3.js",revision:null},{url:"assets/Advanced-SI-Services.vue_vue_type_style_index_0_lang-52580dcb.js",revision:null},{url:"assets/AI-Application-Area-bb5da392.css",revision:null},{url:"assets/AI-Application-Area-f293594d.js",revision:null},{url:"assets/AI-Case-b7242600.js",revision:null},{url:"assets/AI-Optimization-2223e333.js",revision:null},{url:"assets/AI-Optimization.vue_vue_type_script_setup_true_lang-0944588b.js",revision:null},{url:"assets/Analytics-Transformation-Services-8370fe2d.js",revision:null},{url:"assets/Analytics-Transformation-Services.vue_vue_type_script_setup_true_lang-7a4bd299.js",revision:null},{url:"assets/app-633a3f20.js",revision:null},{url:"assets/Automated-Testing-Tools-c28a3868.js",revision:null},{url:"assets/Automated-Testing-Tools.vue_vue_type_script_setup_true_lang-2721ab06.js",revision:null},{url:"assets/blank-734e1134.js",revision:null},{url:"assets/Brand-11b71c2c.css",revision:null},{url:"assets/Brand-e9106bec.js",revision:null},{url:"assets/company-info-b794e89b.js",revision:null},{url:"assets/Company-Info-bf24b9bb.js",revision:null},{url:"assets/company-info.vue_vue_type_script_setup_true_lang-2fe3edfd.js",revision:null},{url:"assets/Company-Info.vue_vue_type_script_setup_true_lang-c9a35620.js",revision:null},{url:"assets/CompanyHistory-cdba2e02.css",revision:null},{url:"assets/CompanyHistory-f42251d1.js",revision:null},{url:"assets/CompanyProfileContent-633cb472.js",revision:null},{url:"assets/CompanyProfileContent.vue_vue_type_script_setup_true_lang-6616be35.js",revision:null},{url:"assets/Content-0c93389a.js",revision:null},{url:"assets/Content-acfae01e.js",revision:null},{url:"assets/Content-b200d119.js",revision:null},{url:"assets/Content.vue_vue_type_script_setup_true_lang-2b6d91c2.js",revision:null},{url:"assets/Content.vue_vue_type_script_setup_true_lang-32ed944f.js",revision:null},{url:"assets/Content.vue_vue_type_script_setup_true_lang-ec645b50.js",revision:null},{url:"assets/Dev-Results-922ebb93.js",revision:null},{url:"assets/Dev-Results.vue_vue_type_script_setup_true_lang-311835c6.js",revision:null},{url:"assets/Download-Template-7ff37132.js",revision:null},{url:"assets/Download-Template.vue_vue_type_script_setup_true_lang-b16af278.js",revision:null},{url:"assets/en-58641bd2.js",revision:null},{url:"assets/EPR-293b65f7.js",revision:null},{url:"assets/EPR.vue_vue_type_script_setup_true_lang-377f7c36.js",revision:null},{url:"assets/EventInformationItem-aa7afeda.css",revision:null},{url:"assets/EventInformationItem-c45f9e6d.js",revision:null},{url:"assets/Examples-Achievements-9cfce44d.js",revision:null},{url:"assets/Examples-Achievements-add34874.css",revision:null},{url:"assets/ExperiencedPerson-5eadd9c5.js",revision:null},{url:"assets/ExperiencedPerson-cae09fde.css",revision:null},{url:"assets/FAQ-items-fed6785a.js",revision:null},{url:"assets/FAQ-items.vue_vue_type_script_setup_true_lang-ff61452c.js",revision:null},{url:"assets/fax-3fd6589a.js",revision:null},{url:"assets/GartnerCard-bd0c7f7e.js",revision:null},{url:"assets/GartnerCard.vue_vue_type_script_setup_true_lang-0245c40f.js",revision:null},{url:"assets/GartnerCardPhone-12235276.js",revision:null},{url:"assets/GartnerCardPhone.vue_vue_type_script_setup_true_lang-55e058e3.js",revision:null},{url:"assets/GraduatesPhone-ba223cac.js",revision:null},{url:"assets/GraduatesPhone.vue_vue_type_script_setup_true_lang-71b229ac.js",revision:null},{url:"assets/HealthcareBusinessItem-4bed44a2.js",revision:null},{url:"assets/HealthcareBusinessItem-73d6b2ae.css",revision:null},{url:"assets/Holidays-Vacation-fc80d1b5.js",revision:null},{url:"assets/Holidays-Vacation.vue_vue_type_script_setup_true_lang-fb8e9cdc.js",revision:null},{url:"assets/home-c9fbf119.js",revision:null},{url:"assets/icon_1-3ff743fe.js",revision:null},{url:"assets/index-14e51d23.css",revision:null},{url:"assets/index-1b5e9f00.js",revision:null},{url:"assets/index-1bf68c9e.js",revision:null},{url:"assets/index-1f92f344.js",revision:null},{url:"assets/index-2116be1e.js",revision:null},{url:"assets/index-2536f1d0.js",revision:null},{url:"assets/index-2a6a4c5f.js",revision:null},{url:"assets/index-366c0b61.js",revision:null},{url:"assets/index-3d0c457c.js",revision:null},{url:"assets/index-554961ce.js",revision:null},{url:"assets/index-5e1697ce.js",revision:null},{url:"assets/index-6cccc40b.css",revision:null},{url:"assets/index-7a22adae.css",revision:null},{url:"assets/index-7e7f310d.css",revision:null},{url:"assets/index-84c9533c.css",revision:null},{url:"assets/index-8b28fc97.css",revision:null},{url:"assets/index-8d06aea2.js",revision:null},{url:"assets/index-9699b288.css",revision:null},{url:"assets/index-984f7980.js",revision:null},{url:"assets/index-a3ddbda0.js",revision:null},{url:"assets/index-ad0d4980.js",revision:null},{url:"assets/index-cf62a9ed.js",revision:null},{url:"assets/index-cf6b96d0.js",revision:null},{url:"assets/index-d78e289d.js",revision:null},{url:"assets/index-d7a609de.js",revision:null},{url:"assets/index-f09f95af.js",revision:null},{url:"assets/index-f91cdefc.js",revision:null},{url:"assets/Industry-Dev-cf76208a.js",revision:null},{url:"assets/Industry-Dev.vue_vue_type_script_setup_true_lang-3ae54f41.js",revision:null},{url:"assets/Industry-Experience-a7486b2a.js",revision:null},{url:"assets/Industry-Experience.vue_vue_type_script_setup_true_lang-d8fcf014.js",revision:null},{url:"assets/InexperiencedPerson-5851f40f.js",revision:null},{url:"assets/InexperiencedPerson-96df9a18.css",revision:null},{url:"assets/Infrastructure-Business-3876438f.js",revision:null},{url:"assets/Infrastructure-Business.vue_vue_type_script_setup_true_lang-b84d64d8.js",revision:null},{url:"assets/Innovation-e572dca7.js",revision:null},{url:"assets/Innovation.vue_vue_type_script_setup_true_lang-17d10c9f.js",revision:null},{url:"assets/Introduce-a673aab8.js",revision:null},{url:"assets/Introduce-c4eab5ac.js",revision:null},{url:"assets/Introduce.vue_vue_type_script_setup_true_lang-05c44d6f.js",revision:null},{url:"assets/Introduce.vue_vue_type_script_setup_true_lang-afbd4399.js",revision:null},{url:"assets/Latest-Technology-d9785dd1.js",revision:null},{url:"assets/Latest-Technology.vue_vue_type_script_setup_true_lang-66cadbcf.js",revision:null},{url:"assets/Logistics-Challenges-56c8b0dd.js",revision:null},{url:"assets/Logistics-Challenges.vue_vue_type_script_setup_true_lang-d7976b45.js",revision:null},{url:"assets/Logistics-Management-d837c80f.js",revision:null},{url:"assets/Logistics-Management.vue_vue_type_script_setup_true_lang-8c519b41.js",revision:null},{url:"assets/Logistics-Platform-1ae47c90.js",revision:null},{url:"assets/Logistics-Platform.vue_vue_type_script_setup_true_lang-16848075.js",revision:null},{url:"assets/Logistics-Promotion-f2535238.js",revision:null},{url:"assets/Logistics-Promotion.vue_vue_type_script_setup_true_lang-3aba11e7.js",revision:null},{url:"assets/LogisticsStrategyPhone-0e9b1b0b.js",revision:null},{url:"assets/LogisticsStrategyPhone.vue_vue_type_script_setup_true_lang-914b1c52.js",revision:null},{url:"assets/ManageMentPhone-5d9cfa37.js",revision:null},{url:"assets/ManageMentPhone.vue_vue_type_script_setup_true_lang-96bff3d2.js",revision:null},{url:"assets/Mission-3f0f5155.js",revision:null},{url:"assets/Mission.vue_vue_type_script_setup_true_lang-b9dc8299.js",revision:null},{url:"assets/MovieItem-4895371b.css",revision:null},{url:"assets/MovieItem-8cc662fb.js",revision:null},{url:"assets/Open-Positions-e47a4b1a.js",revision:null},{url:"assets/Open-Positions.vue_vue_type_script_setup_true_lang-6ad84624.js",revision:null},{url:"assets/Operations-6466eebf.css",revision:null},{url:"assets/Operations-f60e6a95.js",revision:null},{url:"assets/Personnel-System-c1a790bd.js",revision:null},{url:"assets/Personnel-System.vue_vue_type_script_setup_true_lang-d0c7f478.js",revision:null},{url:"assets/Platforms-Config-2615e87f.js",revision:null},{url:"assets/Platforms-Config.vue_vue_type_script_setup_true_lang-9929623f.js",revision:null},{url:"assets/PracticesGuidelines-762ab19c.js",revision:null},{url:"assets/PracticesGuidelines.vue_vue_type_script_setup_true_lang-421318cb.js",revision:null},{url:"assets/Public-Transit-8d039be7.js",revision:null},{url:"assets/Public-Transit-cdd1c564.css",revision:null},{url:"assets/Publications.vue_vue_type_script_setup_true_lang-334a8806.js",revision:null},{url:"assets/Recruiting-Subjects-e21b6360.js",revision:null},{url:"assets/Recruiting-Subjects.vue_vue_type_script_setup_true_lang-2b5c6917.js",revision:null},{url:"assets/recruitment-item-5b2a48a6.js",revision:null},{url:"assets/recruitment-item-9fcc6abd.css",revision:null},{url:"assets/Salary-76bc5aee.js",revision:null},{url:"assets/Salary.vue_vue_type_script_setup_true_lang-1b32e4ed.js",revision:null},{url:"assets/SocialTablePhone-121bdd45.css",revision:null},{url:"assets/SocialTablePhone-9de3ee49.js",revision:null},{url:"assets/Subject-application-d6ad274a.js",revision:null},{url:"assets/Subject-application.vue_vue_type_script_setup_true_lang-2dc6d6c6.js",revision:null},{url:"assets/SubPageTitle-Bg.vue_vue_type_script_setup_true_lang-77b25f9b.js",revision:null},{url:"assets/SubPageTitle.vue_vue_type_script_setup_true_lang-967fabd8.js",revision:null},{url:"assets/System-Dev-150589e3.js",revision:null},{url:"assets/System-Dev.vue_vue_type_script_setup_true_lang-47e395cf.js",revision:null},{url:"assets/System-Maintenance-51282cd8.js",revision:null},{url:"assets/System-Maintenance.vue_vue_type_script_setup_true_lang-bd6655bf.js",revision:null},{url:"assets/TablePhone-5318c419.js",revision:null},{url:"assets/TablePhone.vue_vue_type_script_setup_true_lang-99a9e89c.js",revision:null},{url:"assets/TheBreadcrumbs.vue_vue_type_script_setup_true_lang-a7d055a2.js",revision:null},{url:"assets/TheDownloadBtn.vue_vue_type_script_setup_true_lang-67fb9781.js",revision:null},{url:"assets/TheIconList.vue_vue_type_script_setup_true_lang-e427c5cc.js",revision:null},{url:"assets/ThePageMinTitle-09ef8422.js",revision:null},{url:"assets/ThePageMinTitle2.vue_vue_type_script_setup_true_lang-2f0f42b8.js",revision:null},{url:"assets/ThePageMinTitle3-d924ad39.js",revision:null},{url:"assets/ThePageNav.vue_vue_type_script_setup_true_lang-bff10f04.js",revision:null},{url:"assets/To-Graduates-d012b5a9.js",revision:null},{url:"assets/To-Graduates.vue_vue_type_script_setup_true_lang-0c784ee2.js",revision:null},{url:"assets/Trial-Period-19020b46.js",revision:null},{url:"assets/Trial-Period.vue_vue_type_script_setup_true_lang-b80be72c.js",revision:null},{url:"assets/Use-Test-1ac5fb46.js",revision:null},{url:"assets/Use-Test.vue_vue_type_script_setup_true_lang-6a3987aa.js",revision:null},{url:"assets/Values-778b70d2.js",revision:null},{url:"assets/Values.vue_vue_type_script_setup_true_lang-16d19934.js",revision:null},{url:"assets/virtual_pwa-register-dcdf2bf3.js",revision:null},{url:"assets/Virtualization-Engineer-0a5771b4.css",revision:null},{url:"assets/Virtualization-Engineer-84c76e47.js",revision:null},{url:"assets/Vision-31838d7b.css",revision:null},{url:"assets/Vision-7a2c7830.js",revision:null},{url:"assets/Welfare-63ec6cf9.js",revision:null},{url:"assets/Welfare.vue_vue_type_script_setup_true_lang-8ad9d185.js",revision:null},{url:"assets/Work-Place-4037d2be.js",revision:null},{url:"assets/Work-Place.vue_vue_type_script_setup_true_lang-13870da8.js",revision:null},{url:"assets/Work-Timer-0bbb7c17.js",revision:null},{url:"assets/Work-Timer.vue_vue_type_script_setup_true_lang-c56115ab.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"assets/zh-CN-78ecf232.js",revision:null},{url:"associated-company.html",revision:"196d36d6775d3e13ce72a1160f7d00e9"},{url:"associated-company/components/company-info.html",revision:"9849bc07de722ea7564f63a9c732e8e5"},{url:"company-profile.html",revision:"18d5f3ef096e28fa7bc14035c5722788"},{url:"company-profile/components/companyhistory.html",revision:"c0d779a00bca99f968958368085a3696"},{url:"company-profile/components/companyprofilecontent.html",revision:"e4de958a9b45855ccb0b163b1f282c75"},{url:"company-staff-observation.html",revision:"9aac5093621856e21b1dad9730aed6c7"},{url:"company-staff-observation/components/movieitem.html",revision:"fcd00b666ff17ac9f4dfa1c1e6af9cab"},{url:"components/business-ball.html",revision:"1bec206212708b75c82785d623a9f724"},{url:"components/business-companies.html",revision:"1bec206212708b75c82785d623a9f724"},{url:"components/business-companies2.html",revision:"fd6a31fd114c3f305c3afc6b40a201da"},{url:"components/business-item.html",revision:"1bec206212708b75c82785d623a9f724"},{url:"components/business-item2.html",revision:"fd6a31fd114c3f305c3afc6b40a201da"},{url:"components/business.html",revision:"fd6a31fd114c3f305c3afc6b40a201da"},{url:"components/businessecharts.html",revision:"fd6a31fd114c3f305c3afc6b40a201da"},{url:"components/customers.html",revision:"fd6a31fd114c3f305c3afc6b40a201da"},{url:"components/field.html",revision:"fd6a31fd114c3f305c3afc6b40a201da"},{url:"components/first.html",revision:"fd6a31fd114c3f305c3afc6b40a201da"},{url:"contact-us.html",revision:"21aebf376c716562cc32450436fcaf67"},{url:"contact-us/components/content.html",revision:"843efb7f9e4dda69aa8e5f5344f4febd"},{url:"corporate-philosophy-management-policy.html",revision:"41fb613ebeb9f1dbf7130da52e9bacad"},{url:"corporate-philosophy-management-policy/components/innovation.html",revision:"130525523b4880c0e9d0510a6ab04956"},{url:"corporate-philosophy-management-policy/components/mission.html",revision:"9f92b6707afaf3ede3471848fcc07b2e"},{url:"corporate-philosophy-management-policy/components/practicesguidelines.html",revision:"f0de227968f8179ba51bad88526f91cd"},{url:"corporate-philosophy-management-policy/components/values.html",revision:"fb9abf70df87d135e94e78386ae44838"},{url:"corporate-philosophy-management-policy/components/vision.html",revision:"57a349266c075131b93aff64f6b7cefd"},{url:"data-solution.html",revision:"e954dd3df2aabc3126484fb8f42e2c07"},{url:"data-solution/components/ai-application-area.html",revision:"ea894d4c521b0f0bbdfb862270180bf8"},{url:"data-solution/components/ai-case.html",revision:"8504a2198383ddee7baf0a6fe852efc5"},{url:"data-solution/components/analytics-transformation-services.html",revision:"5d88824d09e197ca246d0119acc8bf26"},{url:"data-solution/components/introduce.html",revision:"64e98520a1133f87573dcf37223ad1ce"},{url:"event-information.html",revision:"c548d6cc806193f5a18421fb8cf366c8"},{url:"event-information/components/eventinformationitem.html",revision:"457debe56c3e4fba78b008948418cfc8"},{url:"faq.html",revision:"601fcb99c2eab137003bc3ae950bf968"},{url:"faq/components/faq-items.html",revision:"662aa961b427525ee3714b98647f1535"},{url:"graduate-recruitment.html",revision:"4c1a41ce5a7870aa2c3263eeb54c77c1"},{url:"graduate-recruitment/components/graduatesphone.html",revision:"90c496a07785abc4f21c355ff26f4bb0"},{url:"graduate-recruitment/components/holidays-vacation.html",revision:"74ba6f93097ac5c77d2234935b93bb3f"},{url:"graduate-recruitment/components/open-positions.html",revision:"4f1fc7af0a70ad265cb0990e1a7fef95"},{url:"graduate-recruitment/components/personnel-system.html",revision:"36521258d00db8986410f49e58d3a2ad"},{url:"graduate-recruitment/components/recruiting-subjects.html",revision:"680a4a0fd74734aa21e8cc3e3e02c726"},{url:"graduate-recruitment/components/salary.html",revision:"a61a4389c8c8b39304477003724c7919"},{url:"graduate-recruitment/components/subject-application.html",revision:"b2de320dfc9b8aec85980b38b23e5629"},{url:"graduate-recruitment/components/to-graduates.html",revision:"caf273d4cc7e5551c34f1f78872da481"},{url:"graduate-recruitment/components/trial-period.html",revision:"50dd289509ff3fa09c57dd2ef91d371f"},{url:"graduate-recruitment/components/welfare.html",revision:"faa895874c620caf5fd0c52ee01c3ade"},{url:"graduate-recruitment/components/work-place.html",revision:"6fa9669557f04dc3f69ccd7d716796a4"},{url:"graduate-recruitment/components/work-timer.html",revision:"05eee70aa3562f85c28144821a831ce0"},{url:"healthcare-business.html",revision:"59345aa4a31e7d53f6cac2b839dd6bca"},{url:"healthcare-business/components/brand.html",revision:"85072d3da3a2eca39c4dd64ae291d853"},{url:"healthcare-business/components/healthcarebusinessitem.html",revision:"2724f3b72f19dc8c15e89c3abb09c458"},{url:"index.html",revision:"a0b66cbe2df6931fed0d4bbfa81d0f71"},{url:"infrastructure-business.html",revision:"02fadba1a4c09643412ba24e715ad914"},{url:"infrastructure-business/components/dev-results.html",revision:"9938e659b08f90f801ad28b487bbf61c"},{url:"infrastructure-business/components/infrastructure-business.html",revision:"576af6b0252e2c53643d8142fc8fda86"},{url:"infrastructure-business/components/introduce.html",revision:"ab4ec5791a1f41c245f74c7232313101"},{url:"infrastructure-business/components/operations.html",revision:"3a3dad1f8ffc71fec16bddef3fa0f0cd"},{url:"infrastructure-business/components/virtualization-engineer.html",revision:"610c0ed4f9b5fcedef81b63502d55d54"},{url:"logistics-business.html",revision:"58580c3d9d3789a68d50119f84162e44"},{url:"logistics-business/components/ai-optimization.html",revision:"814f13276352ae9ec583556bdafb2ee1"},{url:"logistics-business/components/gartnercard.html",revision:"9adab04e172209b528afae7b5b56be5d"},{url:"logistics-business/components/gartnercardphone.html",revision:"8e253dc43eed4e949e27c451eef4716f"},{url:"logistics-business/components/logistics-challenges.html",revision:"29efaf403606efa465afc7db91c429e8"},{url:"logistics-business/components/logistics-management.html",revision:"988bdf665ba0e61e59b6984a39e5a06d"},{url:"logistics-business/components/logistics-platform.html",revision:"c6b4730d57129a5d6679ee3ceea36794"},{url:"logistics-business/components/logistics-promotion.html",revision:"1153a12094366263a0567441375429fe"},{url:"logistics-business/components/logisticsstrategyphone.html",revision:"3dd493028907780399fa5fb2e561db00"},{url:"logistics-business/components/managementphone.html",revision:"207cb78426dfa7c386b98b5e2deec06b"},{url:"map.html",revision:"0eedf6f8e8fd2309e9ddcf9a1c2e6338"},{url:"map/components/company-info.html",revision:"9b8066b8a3ae30875b281a7b83df6869"},{url:"map/components/public-transit.html",revision:"f54220ccc68adcebeec3e8e061575e88"},{url:"message-from-president.html",revision:"a22c855b083af38900e1ffb4734573c0"},{url:"privacy-policy.html",revision:"155f6e2df42530dfce0e25ee945cd768"},{url:"privacy-policy/components/content.html",revision:"3abd8979a82f4478ab963fd198039107"},{url:"privacy-policy/components/tablephone.html",revision:"92ce67243d9b5ccb148bcab7180c2707"},{url:"recruitment-process.html",revision:"345d40eeabe46a90b445a0cdb236bba1"},{url:"recruitment-process/components/recruitment-item.html",revision:"14d0fc704046e3daefc8f0e81b93f5bd"},{url:"si-service-business.html",revision:"4762253e5bf42e242e306b5c6e17a68f"},{url:"si-service-business/components/advanced-si-services.html",revision:"d06d25ef553448716ebcf9e2445acd19"},{url:"si-service-business/components/automated-testing-tools.html",revision:"26669e514b9fa291662e40416bb4bfa8"},{url:"si-service-business/components/epr.html",revision:"5c16119b364c73956874518b1f7c272b"},{url:"si-service-business/components/examples-achievements.html",revision:"f381d3fd76a0a32c3df68bc3d1bcce39"},{url:"si-service-business/components/industry-dev.html",revision:"e4cc3ac4c09dbee820c773649f78dde8"},{url:"si-service-business/components/industry-experience.html",revision:"e265857b5fcdc5c4e6716d81d4f4dfb6"},{url:"si-service-business/components/latest-technology.html",revision:"8d2ffda22c77e42579c9fa30ac411e67"},{url:"si-service-business/components/platforms-config.html",revision:"21e35845cf6e304e5a10ee5fa4921ebd"},{url:"si-service-business/components/system-dev.html",revision:"45b40b66bcce2bc9558e79db16ed55c9"},{url:"si-service-business/components/system-maintenance.html",revision:"a9c42a83821c652bee12df0c028cb25f"},{url:"si-service-business/components/use-test.html",revision:"2ed26398188c6368de19e02e76fd0781"},{url:"social-recruitment.html",revision:"0a75cf93d929c7b0a08aa9210e0a2c77"},{url:"social-recruitment/components/download-template.html",revision:"8a012162a3e882e8e3f61bd7e7f62a8a"},{url:"social-recruitment/components/experiencedperson.html",revision:"d3ed2cc9a85726b4312ff60a6728ec2a"},{url:"social-recruitment/components/inexperiencedperson.html",revision:"85595b9de65dd7b9cca665f38e3e9eed"},{url:"social-recruitment/components/socialtablephone.html",revision:"b2bad3cfb8b8b987e371ccb6ae9589dc"},{url:"terms-conditions.html",revision:"a76922817d587d5b78a461c83a8c07ed"},{url:"terms-conditions/components/content.html",revision:"b3a431b7841d0bb9662ffe330ef005a7"},{url:"favicon.png",revision:"b2cf3bd6ff6b0079a6fdee5c154e1e25"},{url:"safari-pinned-tab.png",revision:"b2cf3bd6ff6b0079a6fdee5c154e1e25"},{url:"pwa-192x192.png",revision:"b2cf3bd6ff6b0079a6fdee5c154e1e25"},{url:"pwa-512x512.png",revision:"b2cf3bd6ff6b0079a6fdee5c154e1e25"},{url:"manifest.webmanifest",revision:"8b8ba08b4fdd5d1dd746014e188e3be1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
