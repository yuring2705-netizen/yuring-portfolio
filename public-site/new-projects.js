window.installNewProjects=function(items={}){
 for(const [key,item] of Object.entries(items)){
 if(!/^custom_[a-z0-9_]+$/.test(key)||!Number.isInteger(item.day)||item.day<0||item.day>5||typeof item.title!=='string')continue;
 projects[key]=[item.title,'新增作品',''];galleries[key]=[];
 if(document.querySelector(`[data-project="${key}"]`))continue;
 const grid=document.querySelector(`#day-${item.day} .project-grid`),card=document.createElement('button');card.className='project-card visible';card.dataset.project=key;
 const visual=document.createElement('div');visual.className='project-image';const im=document.createElement('img');im.src='assets/mascot.png';im.alt=item.title;visual.append(im);
 const label=document.createElement('div');label.className='project-label';const title=document.createElement('h4');title.textContent=item.title;const sub=document.createElement('small');sub.textContent='新增作品';label.append(title,sub);card.append(visual,label);card.onclick=()=>showProject(key);grid.append(card);
 const counter=document.querySelector(`#day-${item.day} .day-counter`);counter.textContent=String(grid.querySelectorAll('[data-project]').length).padStart(2,'0')+' PROJECTS';
 }
};
