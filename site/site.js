import messages from './messages.js';
import config from './config.js';
const languageSelect=document.getElementById('language');
const languages=new Set(['auto','zh_CN','zh_TW','en']);
function browserLanguage(value){const code=value.toLowerCase().replaceAll('_','-');if(!/^zh(?:-|$)/.test(code))return 'en';return /(?:^|-)hans(?:-|$)/.test(code)?'zh_CN':/(?:^|-)(hant|tw|hk|mo)(?:-|$)/.test(code)?'zh_TW':'zh_CN';}
let preference='auto',locale=browserLanguage(navigator.language);
try{const saved=localStorage.getItem('zt-site-language');if(languages.has(saved))preference=saved;}catch{}
function text(key){return messages[key]?.[locale]??messages[key]?.en??key;}
function render(){
 locale=preference==='auto'?browserLanguage(navigator.language):preference;
 document.documentElement.lang=locale.replace('_','-');languageSelect.value=preference;
 for(const node of document.querySelectorAll('[data-t]'))node.textContent=text(node.dataset.t);
 for(const node of document.querySelectorAll('[data-ta]'))node.setAttribute('aria-label',text(node.dataset.ta));
 document.title=text('pageTitle');document.querySelector('meta[name="description"]').content=text('metaDescription');
 document.querySelectorAll('[data-version]').forEach(node=>{node.textContent=config.version;});
 if(config.contactEmail){const body=[text('mailVersion')+config.version,text('mailBrowser'),text('mailSteps'),text('mailExpected'),text('mailActual'),text('mailSensitive')].join('\n\n');document.getElementById('email-link').href='mailto:'+config.contactEmail+'?'+new URLSearchParams({subject:text('mailSubject'),body});}
 document.getElementById('site-status').textContent=text('languageChanged');
}
languageSelect.addEventListener('change',()=>{preference=languages.has(languageSelect.value)?languageSelect.value:'auto';try{localStorage.setItem('zt-site-language',preference);}catch{}render();});
render();
const tabs=[...document.querySelectorAll('[data-demo]')];
function showDemo(name){for(const tab of tabs){const selected=tab.dataset.demo===name;tab.setAttribute('aria-selected',String(selected));tab.tabIndex=selected?0:-1;document.getElementById('demo-'+tab.dataset.demo).hidden=!selected;}}
tabs.forEach((tab,index)=>{
 tab.addEventListener('click',()=>showDemo(tab.dataset.demo));
 tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%tabs.length;if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;if(event.key==='Home')next=0;if(event.key==='End')next=tabs.length-1;if(next!==undefined){event.preventDefault();showDemo(tabs[next].dataset.demo);tabs[next].focus();}});
});
let translated=false;
document.getElementById('demo-trigger').addEventListener('click',()=>{translated=!translated;document.getElementById('demo-input-value').textContent=translated?'Hello, world.':'你好，世界。';document.getElementById('site-status').textContent=text(translated?'demoTranslated':'demoRestored');});
