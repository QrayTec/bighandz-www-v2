if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const o=s=>i(s,r),t={module:{uri:r},exports:a,require:o};e[r]=Promise.all(l.map((s=>t[s]||o(s)))).then((s=>(n(...s),a)))}}define(["./workbox-56a10583"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...all_-6e587fcc.js",revision:null},{url:"assets/404-4011fc3f.js",revision:null},{url:"assets/app-cb77f2af.js",revision:null},{url:"assets/blank-d256c5d9.js",revision:null},{url:"assets/company-profile-1897cbb9.css",revision:null},{url:"assets/company-profile-3865cb64.js",revision:null},{url:"assets/company-staff-observation-551b7bca.js",revision:null},{url:"assets/company-staff-observation-d9e69ad3.css",revision:null},{url:"assets/corporate-philosophy-management-policy-1b853410.js",revision:null},{url:"assets/corporate-philosophy-management-policy-836859f2.css",revision:null},{url:"assets/en-58641bd2.js",revision:null},{url:"assets/event-information-2a0d1146.css",revision:null},{url:"assets/event-information-5050e4ef.js",revision:null},{url:"assets/healthcare-business-3d8800ec.css",revision:null},{url:"assets/healthcare-business-585f9738.js",revision:null},{url:"assets/home-de4400e0.js",revision:null},{url:"assets/index-8f5cc9d5.css",revision:null},{url:"assets/message-from-president-3346ed69.js",revision:null},{url:"assets/message-from-president-a7219167.css",revision:null},{url:"assets/si-service-business-a84d4c16.js",revision:null},{url:"assets/SubPageTitle-283508ea.css",revision:null},{url:"assets/SubPageTitle-cbbd905a.js",revision:null},{url:"assets/ThePageNav-5a90e20e.js",revision:null},{url:"assets/ThePageNav-d6328b24.css",revision:null},{url:"assets/virtual_pwa-register-a34d3104.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"assets/zh-CN-78ecf232.js",revision:null},{url:"company-profile.html",revision:"65f0903b60811af4e08f8b5070ab8dc2"},{url:"company-staff-observation.html",revision:"43e1abc7726afc1be3d56bf42671f1e6"},{url:"corporate-philosophy-management-policy.html",revision:"692111e100ca140a84723f2190bfa595"},{url:"event-information.html",revision:"ade8361d2243287a847701da9aef929f"},{url:"healthcare-business.html",revision:"f19850705acaf2bf8726ee41ff1f7cf3"},{url:"index.html",revision:"ddbb9e28eb1c67e4343f5ef770edccfe"},{url:"message-from-president.html",revision:"6e65f711db5bbd1f86dbaf522fde7b8b"},{url:"si-service-business.html",revision:"471811b3ee27f73510434fb69587280c"},{url:"favicon.svg",revision:"a795ab195c26601ea433babed25a7d0d"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
