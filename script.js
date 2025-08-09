// Utility
const $ = (id)=>document.getElementById(id);

// i18n
const I18N={
  ar:{brand:"SamaObservatory | المرصد التفاعلي",nav_live:"السماء الآن",nav_atlas:"أطلس النجوم",nav_stories:"حكايا السماء",lang_label:"اللغة",
    h1:"مشاهدة فلكية تتبدّل مع أوقات النهار — سماء، قمر و☁️ غيوم",lead:"تجربة فوق الغيوم تتبدّل بصريًا مع الصباح والنهار والعصر الذهبي والغروب والليل.",
    badge_clouds:"☁️ غيوم متحركة بطبقات",badge_dynamic:"تغيّر بصري حسب الوقت",cta_start:"ابدأ الاستكشاف",cta_read:"اقرأ الحكايات",
    local_time:"الوقت المحلي",note_notmap:"هذه محاكاة فنية — ليست خريطة سماوية دقيقة بعد.",atlas:"أطلس النجوم",stories:"حكايا السماء",
    story_para:"قريبًا: قصص الكوكبات وروابط NASA/ESO.",footer_brand:"SamaObservatory",footer_made:"صنع لعشّاق السماء",
    stars:[{name:"الشِّعرى اليمانية",tag:"الكلب الأكبر",meta:"ألمع نجوم السماء — نظام ثنائي."},{name:"منكب الجوزاء",tag:"الجبار",meta:"عملاق فائق أحمر؛ خفّ لمعانه 2019–2020."},{name:"النجم القطبي",tag:"الدب الأصغر",meta:"قريب من القطب السماوي الشمالي."}]},
  en:{brand:"SamaObservatory | Interactive Observatory",nav_live:"Live Sky",nav_atlas:"Star Atlas",nav_stories:"Sky Tales",lang_label:"Language",
    h1:"A time‑aware sky — horizon, moon and ☁️ clouds",lead:"Above‑the‑clouds visuals across morning, day, golden afternoon, sunset and night.",
    badge_clouds:"☁️ Layered moving clouds",badge_dynamic:"Time‑based visuals",cta_start:"Start Exploring",cta_read:"Read Tales",
    local_time:"Local Time",note_notmap:"Artistic simulation — not a precise star map yet.",atlas:"Star Atlas",stories:"Sky Tales",
    story_para:"Constellation stories and NASA/ESO links coming soon.",footer_brand:"SamaObservatory",footer_made:"Made for stargazers",
    stars:[{name:"Sirius",tag:"Canis Major",meta:"Brightest star — binary with a white dwarf."},{name:"Betelgeuse",tag:"Orion",meta:"Red supergiant; 2019–2020 dimming."},{name:"Polaris",tag:"Ursa Minor",meta:"Near the north celestial pole."}]},
  hi:{brand:"SamaObservatory | इंटरएक्टिव वेधशाला",nav_live:"लाइव आकाश",nav_atlas:"तारामंडल",nav_stories:"आकाश कथाएँ",lang_label:"भाषा",
    h1:"समय के साथ बदलता आकाश — क्षितिज, चाँद और ☁️ बादल",lead:"सुबह, दिन, सुनहरी दोपहर, सूर्यास्त और रात में रूप बदलता है.",
    badge_clouds:"☁️ परतदार गतिमान बादल",badge_dynamic:"समय‑आधारित दृश्य",cta_start:"शुरू करें",cta_read:"कथाएँ पढ़ें",
    local_time:"स्थानीय समय",note_notmap:"यह कलात्मक सिमुलेशन है.",atlas:"तारामंडल",stories:"आकाश कथाएँ",
    story_para:"जल्द NASA/ESO लिंक।",footer_brand:"SamaObservatory",footer_made:"सितारों के चाहने वालों के लिए",
    stars:[{name:"Sirius",tag:"कैनिस मेजर",meta:"सबसे चमकीला — श्वेत बौना साथी."},{name:"Betelgeuse",tag:"ओरायन",meta:"लाल महादानव."},{name:"Polaris",tag:"उर्सा माइनर",meta:"उत्तरी ध्रुव के पास."}]},
  ur:{brand:"SamaObservatory | انٹرایکٹو آبزرویٹری",nav_live:"زندہ آسمان",nav_atlas:"ستاروں کا اطلس",nav_stories:"آسمانی کہانیاں",lang_label:"زبان",
    h1:"وقت کے ساتھ بدلتا آسمان — افق، چاند اور ☁️ بادل",lead:"صبح، دن، سنہری عصر، غروب اور رات میں منظر بدلتا ہے۔",
    badge_clouds:"☁️ تہہ دار متحرک بادل",badge_dynamic:"وقت پر مبنی مناظر",cta_start:"شروع کریں",cta_read:"کہانیاں پڑھیں",
    local_time:"مقامی وقت",note_notmap:"یہ فنی سمیولیشن ہے.",atlas:"ستاروں کا اطلس",stories:"آسمانی کہانیاں",
    story_para:"جلد NASA/ESO روابط۔",footer_brand:"SamaObservatory",footer_made:"ستاروں کے شائقین کے لیے",
    stars:[{name:"سِیریس",tag:"کینس میجر",meta:"روشن ترین — سفید بونے کے ساتھ دوہرا نظام۔"},{name:"بیٹیل جیوس",tag:"اوریون",meta:"سرخ عظیم دیو۔"},{name:"پولارس",tag:"ارسہ مائنر",meta:"شمالی قطب کے قریب۔"}]},
  zh:{brand:"SamaObservatory | 互动天文台",nav_live:"实时天空",nav_atlas:"星图",nav_stories:"天空故事",lang_label:"语言",
    h1:"随时间变化的天空——地平线、月亮与☁️云层",lead:"清晨、白昼、金色午后、日落与夜晚的视觉变化。",
    badge_clouds:"☁️ 分层移动的云",badge_dynamic:"基于时间的视觉",cta_start:"开始探索",cta_read:"阅读故事",
    local_time:"本地时间",note_notmap:"目前为艺术化模拟。",atlas:"星图",stories:"天空故事",
    story_para:"即将加入 NASA/ESO 链接。",footer_brand:"SamaObservatory",footer_made:"为观星者打造",
    stars:[{name:"天狼星",tag:"大犬座",meta:"最亮恒星，与白矮星成联星。"},
           {name:"参宿四",tag:"猎户座",meta:"红色超巨星。"},
           {name:"北极星",tag:"小熊座",meta:"靠近天球北极。"}]}
};

function applyLang(lang){
  const L = I18N[lang] || I18N.ar;
  const set=(id,txt)=>{const el=$(id); if(el) el.textContent=txt;};
  const setHTML=(id,html)=>{const el=$(id); if(el) el.innerHTML=html;};
  setHTML('t_brand', L.brand);
  set('t_nav_live', L.nav_live); set('t_nav_atlas', L.nav_atlas); set('t_nav_stories', L.nav_stories);
  set('t_lang_label', L.lang_label); setHTML('t_h1', L.h1); set('t_lead', L.lead);
  set('t_badge_clouds', L.badge_clouds); set('t_badge_dynamic', L.badge_dynamic);
  set('t_cta_start', L.cta_start); set('t_cta_read', L.cta_read);
  set('t_local_time', L.local_time); set('t_note_notmap', L.note_notmap);
  set('t_atlas', L.atlas); set('t_stories', L.stories); setHTML('t_story_para', L.story_para);
  set('t_footer_brand', L.footer_brand); set('t_footer_made', L.footer_made);
  // cards
  const grid=$('starGrid'); if(grid){ grid.innerHTML=""; L.stars.forEach(s=>{
    const card=document.createElement('div'); card.className='card';
    card.innerHTML=`<strong>${s.name}</strong> <span class="tag">${s.tag}</span><div class="meta">${s.meta}</div>`;
    grid.appendChild(card);
  }); }
  const rtl=(lang==='ar'||lang==='ur'); document.documentElement.lang=lang; document.documentElement.dir=rtl?'rtl':'ltr';
  // switch heading font for EN with Orbitron
  document.querySelectorAll('h1,h2,.brand-title').forEach(el=>{
    el.style.fontFamily = (lang==='en') ? '"Orbitron",system-ui,sans-serif' : 'inherit';
  });
}
$('langSel').addEventListener('change', e=> applyLang(e.target.value));
(function(){ const n=(navigator.language||'ar').slice(0,2).toLowerCase(); if(I18N[n]) $('langSel').value=n; applyLang($('langSel').value); })();

// Phases
function phaseOf(d){ const h=d.getHours()+d.getMinutes()/60;
  if(h>=5 && h<9) return 'morning';
  if(h>=9 && h<15.5) return 'day';
  if(h>=15.5 && h<17.5) return 'afternoon';
  if(h>=17.5 && h<19) return 'sunset';
  return 'night';
}
let manualPhase=null, starsVisible=true;
$('phase').addEventListener('change', e=>{ manualPhase=e.target.value||null; applyTimeTheme(new Date()); });

function tick(){ const d=new Date(); const ln=document.documentElement.lang||'ar';
  const nowEl=$('now'); if(nowEl) nowEl.textContent=d.toLocaleString(ln,{hour12:false}); applyTimeTheme(d); }
setInterval(tick,1000); tick(); const yy=$('y'); if(yy) yy.textContent=(new Date()).getFullYear();

function applyTimeTheme(d){ const ph=manualPhase||phaseOf(d); document.body.className=ph; starsVisible=(ph==='night'||ph==='sunset'); }

// Canvas setup
const cvsS=$('stars'), cs=cvsS.getContext('2d');
const cvsM=$('moonSun'), cm=cvsM.getContext('2d');
const cvsC=$('clouds'), cc=cvsC.getContext('2d');
let W=innerWidth,H=innerHeight;
function sizeAll(){ W=innerWidth;H=innerHeight; [cvsS,cvsM,cvsC].forEach(c=>{c.width=W;c.height=H;}); }
addEventListener('resize', sizeAll); sizeAll();

// Stars
let stars=[]; function makeStars(n=320){ stars=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.4+0.2,a:Math.random()*Math.PI*2,s:Math.random()*0.02+0.005})); }
makeStars();
function drawStars(){ cs.clearRect(0,0,W,H); if(!starsVisible) return;
  for(const st of stars){ st.a+=st.s; const tw=(Math.sin(st.a*6)+1)/2; cs.beginPath(); cs.arc(st.x,st.y,st.r+tw*0.6,0,Math.PI*2); cs.fillStyle=`rgba(200,220,255,${0.55+tw*0.45})`; cs.fill(); } }

// Sun / Moon
function drawMoonSun(){
  cm.clearRect(0,0,W,H);
  const ph=document.body.className; const R=Math.min(W,H)*0.18;
  let cx=W*0.22, cy=H*0.28; if(ph==='afternoon') cy=H*0.35; if(ph==='sunset'){ cy=H*0.42; cx=W*0.18; }
  const dayLike=(ph==='morning'||ph==='day'||ph==='afternoon');
  if(dayLike){
    let k=(ph==='afternoon')?1.15:(ph==='day'?1.0:0.9);
    let g=cm.createRadialGradient(cx,cy,R*0.2,cx,cy,R*1.2*k);
    g.addColorStop(0,'rgba(255,255,210,.95)'); g.addColorStop(.5,'rgba(255,230,160,.65)'); g.addColorStop(1,'rgba(255,220,120,.0)');
    cm.fillStyle=g; cm.beginPath(); cm.arc(cx,cy,R*1.4,0,Math.PI*2); cm.fill();
    g=cm.createRadialGradient(cx-R*0.2,cy-R*0.2,R*0.2,cx,cy,R);
    g.addColorStop(0,'#FFF6B8'); g.addColorStop(.5,'#FFE08A'); g.addColorStop(1,'#FDBA74');
    cm.fillStyle=g; cm.beginPath(); cm.arc(cx,cy,R,0,Math.PI*2); cm.fill();
  } else {
    let grad=cm.createRadialGradient(cx,cy,R*0.2,cx,cy,R*1.1);
    grad.addColorStop(0,'rgba(255,255,255,.7)'); grad.addColorStop(.3,'rgba(226,238,255,.35)'); grad.addColorStop(1,'rgba(10,20,40,.0)');
    cm.fillStyle=grad; cm.beginPath(); cm.arc(cx,cy,R*1.4,0,Math.PI*2); cm.fill();
    grad=cm.createRadialGradient(cx-R*0.2,cy-R*0.2,R*0.2,cx,cy,R);
    grad.addColorStop(0,'#FFFFFF'); grad.addColorStop(.5,'#E9F1FF'); grad.addColorStop(1,'#C9D8F5');
    cm.fillStyle=grad; cm.beginPath(); cm.arc(cx,cy,R,0,Math.PI*2); cm.fill();
    for(let i=0;i<12;i++){ const a=Math.random()*Math.PI*2; const rr=R*(Math.random()*0.08+0.03); const rx=cx+Math.cos(a)*R*(Math.random()*0.7); const ry=cy+Math.sin(a)*R*(Math.random()*0.7);
      const g2=cm.createRadialGradient(rx,ry,rr*0.2,rx,ry,rr); g2.addColorStop(0,'rgba(120,130,155,.45)'); g2.addColorStop(1,'rgba(40,60,100,.1)'); cm.fillStyle=g2; cm.beginPath(); cm.arc(rx,ry,rr,0,Math.PI*2); cm.fill(); }
  }
}

// Clouds
let layers=[]; function makeClouds(){ layers=[0.2,0.45,0.8].map((speed,idx)=>{ const blobs=[]; const count=26+idx*10; for(let i=0;i<count;i++){ blobs.push({x:Math.random()*W,y:H*0.55+Math.random()*H*0.6-idx*H*0.08,r:80+Math.random()*220,o:0.10+Math.random()*0.18}); } return {speed,blobs,offset:Math.random()*W}; }); }
makeClouds();
function drawClouds(t){
  cc.clearRect(0,0,W,H);
  const ph=document.body.className;
  layers.forEach((L,i)=>{
    const base = ph==='sunset'?0.35: ph==='afternoon'?0.25: ph==='day'?0.3: ph==='morning'?0.28:0.18;
    L.offset = (L.offset + base + L.speed*0.02) % (W*2);
    for(const b of L.blobs){
      const x=(b.x-L.offset+W*2)%(W*2)-W;
      const y=b.y+Math.sin((t*0.0002+x*0.0008)+(i*0.6))*8;
      const grad=cc.createRadialGradient(x,y,b.r*0.3,x,y,b.r);
      if(ph==='sunset'){ grad.addColorStop(0,`rgba(255,180,150,${0.45*b.o})`); grad.addColorStop(1,`rgba(80,40,90,0)`); }
      else if(ph==='afternoon'){ grad.addColorStop(0,`rgba(255,240,220,${0.55*b.o})`); grad.addColorStop(1,`rgba(210,190,170,0)`); }
      else if(ph==='day'||ph==='morning'){ grad.addColorStop(0,`rgba(255,255,255,${0.65*b.o})`); grad.addColorStop(1,`rgba(200,220,255,0)`); }
      else { grad.addColorStop(0,`rgba(255,255,255,${0.35*b.o})`); grad.addColorStop(1,`rgba(180,200,230,0)`); }
      cc.fillStyle=grad; cc.beginPath(); cc.arc(x,y,b.r,0,Math.PI*2); cc.fill();
    }
  });
}

// Loop
function loop(t=0){ drawStars(); drawMoonSun(); drawClouds(t); requestAnimationFrame(loop); } loop();

// Scroll speed feedback
let lastScroll=0; addEventListener('scroll', ()=>{ const dy=Math.abs(scrollY-lastScroll); layers.forEach(L=> L.speed=0.2+dy*0.02); lastScroll=scrollY; setTimeout(()=> layers.forEach(L=> L.speed=Math.max(0.2, L.speed*0.92)),200); });
