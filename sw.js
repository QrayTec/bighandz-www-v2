if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const a=e=>i(e,r),u={module:{uri:r},exports:t,require:a};s[r]=Promise.all(n.map((e=>u[e]||a(e)))).then((e=>(l(...e),t)))}}define(["./workbox-56a10583"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"adoption-intelligence.html",revision:"cd5492c8cff8b5e98a401ab8a05e949e"},{url:"adoption-intelligence/components/adoption-item.html",revision:"d5ef40ff14bc1beca1a109f7370ee483"},{url:"adoption-intelligence/components/adoptioncard.html",revision:"f33b206bc649d459d1889e929a7adb79"},{url:"assets/_...all_-a6f6e9ad.js",revision:null},{url:"assets/404-09eb022c.js",revision:null},{url:"assets/adoption-item-65866e9a.js",revision:null},{url:"assets/adoption-item.vue_vue_type_script_setup_true_lang-7ffe81b8.js",revision:null},{url:"assets/adoptionCard-54e061a6.js",revision:null},{url:"assets/adoptionCard.vue_vue_type_script_setup_true_lang-dd75331a.js",revision:null},{url:"assets/Advanced-SI-Services-26772f50.css",revision:null},{url:"assets/Advanced-SI-Services-28cdb993.js",revision:null},{url:"assets/Advanced-SI-Services.vue_vue_type_style_index_0_lang-ca148dbb.js",revision:null},{url:"assets/AI-Assembler-Conversion-08dea4d1.js",revision:null},{url:"assets/AI-Assembler-Conversion.vue_vue_type_script_setup_true_lang-1b2caafd.js",revision:null},{url:"assets/AI-Cases-ff6fd500.js",revision:null},{url:"assets/AI-Cases.vue_vue_type_script_setup_true_lang-2da2dcc0.js",revision:null},{url:"assets/AI-Delivery-2b5ac654.js",revision:null},{url:"assets/AI-Delivery.vue_vue_type_script_setup_true_lang-d3ee6a75.js",revision:null},{url:"assets/app-6b1cda5d.js",revision:null},{url:"assets/Automated-Testing-Tools-4b3cad67.js",revision:null},{url:"assets/Automated-Testing-Tools.vue_vue_type_script_setup_true_lang-7cc59698.js",revision:null},{url:"assets/blank-bf95e864.js",revision:null},{url:"assets/Brand-106a5649.js",revision:null},{url:"assets/Brand-aabb0491.css",revision:null},{url:"assets/Bus-Travel-dbc711fb.js",revision:null},{url:"assets/Bus-Travel.vue_vue_type_style_index_0_lang-35500b5e.js",revision:null},{url:"assets/Cloud-Enhancement-Strategy-82ab2698.js",revision:null},{url:"assets/Cloud-Enhancement-Strategy.vue_vue_type_script_setup_true_lang-1774765e.js",revision:null},{url:"assets/Company_staff_observation-ab21b6c6.js",revision:null},{url:"assets/CompanyHistory-2cf16401.js",revision:null},{url:"assets/CompanyHistory-3fc7638b.css",revision:null},{url:"assets/CompanyProfileContent-01d46dd4.css",revision:null},{url:"assets/CompanyProfileContent-251683a7.js",revision:null},{url:"assets/Contact-Information-572177d7.js",revision:null},{url:"assets/Contact-Information.vue_vue_type_style_index_0_lang-10ef1e68.js",revision:null},{url:"assets/en-58641bd2.js",revision:null},{url:"assets/EventInformationItem-be1f658d.css",revision:null},{url:"assets/EventInformationItem-fe8ac63c.js",revision:null},{url:"assets/Examples-Achievements-04d619c4.js",revision:null},{url:"assets/Examples-Achievements.vue_vue_type_script_setup_true_lang-690de31d.js",revision:null},{url:"assets/ExperiencedPerson-52cb854c.js",revision:null},{url:"assets/ExperiencedPerson.vue_vue_type_script_setup_true_lang-5ff3a112.js",revision:null},{url:"assets/FAQ-items-18ac027e.css",revision:null},{url:"assets/FAQ-items-5f401198.js",revision:null},{url:"assets/GartnerCard-cfbde383.js",revision:null},{url:"assets/GartnerCard.vue_vue_type_script_setup_true_lang-a54ec460.js",revision:null},{url:"assets/HealthcareBusinessItem-a848e598.js",revision:null},{url:"assets/HealthcareBusinessItem-fa5cb3e0.css",revision:null},{url:"assets/home-53e72eef.js",revision:null},{url:"assets/index-0495597c.js",revision:null},{url:"assets/index-157aaf5b.js",revision:null},{url:"assets/index-201b3101.css",revision:null},{url:"assets/index-3517df90.css",revision:null},{url:"assets/index-3ae902b4.css",revision:null},{url:"assets/index-3c7c7574.js",revision:null},{url:"assets/index-42a117d9.css",revision:null},{url:"assets/index-470b2b28.css",revision:null},{url:"assets/index-4c2a3fc2.js",revision:null},{url:"assets/index-6da67f35.js",revision:null},{url:"assets/index-7b8ec336.js",revision:null},{url:"assets/index-857e14d3.js",revision:null},{url:"assets/index-8f3ed206.js",revision:null},{url:"assets/index-97c1b920.js",revision:null},{url:"assets/index-99056515.js",revision:null},{url:"assets/index-a389264b.css",revision:null},{url:"assets/index-a3e45512.js",revision:null},{url:"assets/index-aae4b927.js",revision:null},{url:"assets/index-b6b688de.js",revision:null},{url:"assets/index-c4ce9b9d.js",revision:null},{url:"assets/index-db0a0f0a.js",revision:null},{url:"assets/index-db666781.css",revision:null},{url:"assets/index-e50f8a26.js",revision:null},{url:"assets/index-eb619ef9.css",revision:null},{url:"assets/index-f91a416a.js",revision:null},{url:"assets/Industry-Dev-0f2d7f05.js",revision:null},{url:"assets/Industry-Dev.vue_vue_type_script_setup_true_lang-384b92b6.js",revision:null},{url:"assets/Industry-Experience-9516caf9.js",revision:null},{url:"assets/Industry-Experience.vue_vue_type_script_setup_true_lang-9a287052.js",revision:null},{url:"assets/InexperiencedPerson-a9e525e0.js",revision:null},{url:"assets/InexperiencedPerson.vue_vue_type_script_setup_true_lang-025de1aa.js",revision:null},{url:"assets/Innovation-84d0def9.js",revision:null},{url:"assets/Innovation-bdde9a90.css",revision:null},{url:"assets/LLM-Applications-dc66125c.js",revision:null},{url:"assets/LLM-Applications.vue_vue_type_script_setup_true_lang-a8076dee.js",revision:null},{url:"assets/Logistics-DX-Promotion-e9097edd.js",revision:null},{url:"assets/Logistics-DX-Promotion.vue_vue_type_script_setup_true_lang-e41974f3.js",revision:null},{url:"assets/Logistics-Industry-Challenges-ba44e05b.js",revision:null},{url:"assets/Logistics-Industry-Challenges.vue_vue_type_script_setup_true_lang-805c4bac.js",revision:null},{url:"assets/Logistics-Management-1a06a074.js",revision:null},{url:"assets/Logistics-Management.vue_vue_type_script_setup_true_lang-d2339abb.js",revision:null},{url:"assets/LogisticsDXPlatform-5cc877f2.js",revision:null},{url:"assets/LogisticsDXPlatform.vue_vue_type_script_setup_true_lang-7911a52f.js",revision:null},{url:"assets/Mission-a33666a7.js",revision:null},{url:"assets/Mission-a99f6851.css",revision:null},{url:"assets/MovieItem-1be7b3ed.js",revision:null},{url:"assets/MovieItem-572c5d69.css",revision:null},{url:"assets/Open-Positions-7314df8d.js",revision:null},{url:"assets/Open-Positions.vue_vue_type_script_setup_true_lang-4b7cc266.js",revision:null},{url:"assets/operational-efficiency-improvement-75bfc409.js",revision:null},{url:"assets/operational-efficiency-improvement.vue_vue_type_script_setup_true_lang-0502da87.js",revision:null},{url:"assets/PracticesGuidelines-08439bac.css",revision:null},{url:"assets/PracticesGuidelines-8d2226c6.js",revision:null},{url:"assets/Publications.vue_vue_type_script_setup_true_lang-1278f2ed.js",revision:null},{url:"assets/recruitment-item-72b0895c.css",revision:null},{url:"assets/recruitment-item-b5e123f5.js",revision:null},{url:"assets/rhombic-d3e9827d.js",revision:null},{url:"assets/Shuttle-Bus-5c060e00.js",revision:null},{url:"assets/Shuttle-Bus.vue_vue_type_script_setup_true_lang-8470f705.js",revision:null},{url:"assets/solution-item-9d5cc1e3.js",revision:null},{url:"assets/solution-item.vue_vue_type_script_setup_true_lang-03473bea.js",revision:null},{url:"assets/steps.vue_vue_type_script_setup_true_lang-077bc167.js",revision:null},{url:"assets/SubPageTitle-169ae43a.css",revision:null},{url:"assets/SubPageTitle-c3f53fc8.js",revision:null},{url:"assets/ThePageNav-8a776911.css",revision:null},{url:"assets/ThePageNav-c4798726.js",revision:null},{url:"assets/to-new-graduates-c4cc54c3.js",revision:null},{url:"assets/to-new-graduates.vue_vue_type_script_setup_true_lang-7cebe062.js",revision:null},{url:"assets/Train-Travel-5330b212.js",revision:null},{url:"assets/Train-Travel.vue_vue_type_style_index_0_lang-76159b35.js",revision:null},{url:"assets/Values-c5f8dea4.js",revision:null},{url:"assets/Values-e66e9964.css",revision:null},{url:"assets/video-chunk-5fea95d1.js",revision:null},{url:"assets/video-dbb140ae.js",revision:null},{url:"assets/virtual_pwa-register-76340e6e.js",revision:null},{url:"assets/Vision-011f3866.js",revision:null},{url:"assets/Vision-7e4e6dad.css",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"assets/zh-CN-78ecf232.js",revision:null},{url:"company-profile.html",revision:"27f59ea1968d43e6465c2cdc8a029537"},{url:"company-profile/components/companyhistory.html",revision:"214c03190d884474d3ebf8f0c1866b45"},{url:"company-profile/components/companyprofilecontent.html",revision:"880d60211ab2bf28d68e0f243c1aa272"},{url:"company-staff-observation.html",revision:"91a78a9bdfbc99b26b859dc02af884d2"},{url:"company-staff-observation/components/movieitem.html",revision:"918f02f92a91facf8cf398e9b8d3235c"},{url:"components/business-item.html",revision:"86a4a20039cf5dbce7a3132c866c6fa8"},{url:"components/business.html",revision:"86a4a20039cf5dbce7a3132c866c6fa8"},{url:"components/customers.html",revision:"86a4a20039cf5dbce7a3132c866c6fa8"},{url:"components/field.html",revision:"86a4a20039cf5dbce7a3132c866c6fa8"},{url:"components/first.html",revision:"86a4a20039cf5dbce7a3132c866c6fa8"},{url:"corporate-philosophy-management-policy.html",revision:"99e5218e5f1f9f5f87b85c16bc517ee7"},{url:"corporate-philosophy-management-policy/components/innovation.html",revision:"76971768ebe9a97c52493e2856f3dc7d"},{url:"corporate-philosophy-management-policy/components/mission.html",revision:"e8528ecad367629e66b6d2d1443dec66"},{url:"corporate-philosophy-management-policy/components/practicesguidelines.html",revision:"4c4187376a6748893477a2e60e04a7aa"},{url:"corporate-philosophy-management-policy/components/values.html",revision:"6773153103afc9e6a76c0e41c268f855"},{url:"corporate-philosophy-management-policy/components/vision.html",revision:"b86183404a626bcbd634ff2967098aa4"},{url:"data-solution.html",revision:"26f6d2bf4d32987de9a57fc889498a6e"},{url:"data-solution/components/ai-assembler-conversion.html",revision:"04f41130bf23c9fc32efd8dec978a4cb"},{url:"data-solution/components/ai-cases.html",revision:"94c0737bee52cbee1df8c06f306b78f2"},{url:"data-solution/components/llm-applications.html",revision:"ea4459ad529bd3fcc5562ad0ded70e96"},{url:"data-solution/components/solution-item.html",revision:"413955e84e3bbb181d5b5b6a5888ab7d"},{url:"event-information.html",revision:"addb64ceff6f2b5481415487fb2b78d0"},{url:"event-information/components/eventinformationitem.html",revision:"296985b5daa61e7175c1aef67733c526"},{url:"faq.html",revision:"dad7f724a1543dea11e1e1e83f2f0e3c"},{url:"faq/components/faq-items.html",revision:"45e5a48311eb2cb47b054513bebe70e6"},{url:"graduate-recruitment.html",revision:"5df97ba8fd9799e9d9430afff838aef5"},{url:"graduate-recruitment/components/open-positions.html",revision:"a8d697708badbf7db707d2106df60e11"},{url:"graduate-recruitment/components/to-new-graduates.html",revision:"a2849811fb8856b67f9f03301fb3009a"},{url:"healthcare-business.html",revision:"65e8b10fb84ca7f3c4a6b8e24ada0f5f"},{url:"healthcare-business/components/brand.html",revision:"ccaa4cb76da5a41ec2fc4ac5b4197afc"},{url:"healthcare-business/components/healthcarebusinessitem.html",revision:"de537d9d7e5815b9cf71d15a4e39699b"},{url:"index.html",revision:"39b81073c10a4260d2a99e1abfede0d2"},{url:"infrastructure-business.html",revision:"6c342b0861072fa167857e65b80f6778"},{url:"infrastructure-business/components/cloud-enhancement-strategy.html",revision:"a7e17d305d7db0721568ba44c48bd756"},{url:"infrastructure-business/components/operational-efficiency-improvement.html",revision:"65125dfff38ab58138d5aba565e84179"},{url:"logistics-business.html",revision:"e6b51607989e91cbc1d6ee7685cf64f6"},{url:"logistics-business/components/ai-delivery.html",revision:"46ec0cc7bbdfdd333d88a4c4c9f0d52d"},{url:"logistics-business/components/gartnercard.html",revision:"7d6c6460d95743dcd9de7484ede7e02a"},{url:"logistics-business/components/logistics-dx-promotion.html",revision:"9040af7aaf344e2af6876329af2b4684"},{url:"logistics-business/components/logistics-industry-challenges.html",revision:"dec7ba6a414cc023b599d8daf709431a"},{url:"logistics-business/components/logistics-management.html",revision:"d477ebee9cce84dc7316c37beefe7120"},{url:"logistics-business/components/logisticsdxplatform.html",revision:"79e60cf54c6f3bf8f21b325fb776f36f"},{url:"map.html",revision:"1481e68545c2326317046233ae5d8aa4"},{url:"map/components/bus-travel.html",revision:"5ef81dbb720758dc1326491e5f26fd73"},{url:"map/components/contact-information.html",revision:"383721b012c695b20b3ff5449da97171"},{url:"map/components/shuttle-bus.html",revision:"2ddc3c3d11e4ccd6f6dfadc1b710f03c"},{url:"map/components/train-travel.html",revision:"5347af15255f4335fa359b3a99246348"},{url:"message-from-president.html",revision:"3c595886e7c07387cc2a95e694cbf0dc"},{url:"recruitment-information.html",revision:"6ed6ef180d3e50d020a818bdf6826bae"},{url:"recruitment-process.html",revision:"5c05650d075653751c0e15c3f1d85b51"},{url:"recruitment-process/components/recruitment-item.html",revision:"f58218f72dc4daad80e3a56081b08bde"},{url:"si-service-business.html",revision:"57ce841e174c8c157d62bcba262b7b21"},{url:"si-service-business/components/advanced-si-services.html",revision:"c86f890bb4c5bedd3997852e085d50d9"},{url:"si-service-business/components/automated-testing-tools.html",revision:"0f4bd85c319b4d7c8be397522cb05b2f"},{url:"si-service-business/components/examples-achievements.html",revision:"b08afd2875422f30cde0ffb6c53d7694"},{url:"si-service-business/components/industry-dev.html",revision:"7af6602ed0aaa21f62dbf1a98dd53a5f"},{url:"si-service-business/components/industry-experience.html",revision:"df3f5cb232f63527cf96be2bfc58e526"},{url:"social-recruitment.html",revision:"29d52aba792f7499551e52fe91ee8dcc"},{url:"social-recruitment/components/experiencedperson.html",revision:"b76eee15fc165a8e207e41e6b0b221d9"},{url:"social-recruitment/components/inexperiencedperson.html",revision:"dab70b0052d2b9704b2ba8468eb49794"},{url:"favicon.svg",revision:"a795ab195c26601ea433babed25a7d0d"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
