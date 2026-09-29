window.pageFields={
 home:[['openingNote','开场底部文字','.opening-bottom>span:first-child'],['openingEnglish','开场英文标语','.opening-meta>span:first-child'],['boardNote','七日导航提示','.board-note']],
 about:[['aboutTitle','关于我标题','.about-type h2'],['aboutIntro','个人介绍','.about-type>p:not(.kicker):not(.muted)'],['aboutMore','补充介绍','.about-type>p.muted']],
 album:[['albumTitle','相册标题','#weekend .section-head h2'],['albumIntro','相册介绍','#weekend .section-head>span']],
 contact:[['contactTitle','联系页标题','#contact h2'],['email','邮箱','.contact-links>a:first-child','email'],['behance','Behance 地址','.contact-links>a:nth-child(2)','url'],['contactNote','求职说明','.contact-note>p:first-child'],['contactBoundary','工作偏好','.contact-note>p:nth-child(2)']]
};
window.pageOriginal={};for(const [section,rows] of Object.entries(pageFields)){pageOriginal[section]={};for(const [key,label,selector,type] of rows){const n=document.querySelector(selector);pageOriginal[section][key]=type==='url'?n.getAttribute('href'):type==='email'?n.getAttribute('href').replace('mailto:',''):n.innerText}}
window.applyPageContent=function(data={}){for(const [section,rows] of Object.entries(pageFields)){const value=data[section]||pageOriginal[section];for(const [key,label,selector,type] of rows){const n=document.querySelector(selector),v=value[key];if(typeof v!=='string')continue;if(type==='url'){try{const u=new URL(v);if(u.protocol==='https:'||u.protocol==='http:')n.href=u.href}catch(e){}}else if(type==='email'){n.href='mailto:'+v;n.textContent=v+' ↗'}else{n.textContent=v;n.style.whiteSpace='pre-line'}}}};
