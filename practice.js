/* ============ ПЕДАГОГИКАЛЫҚ ТӘЖІРИБЕ ============ */
(function(){
const P={
goal:'Оқушылардың биология пәніне қызығушылығын, ынтасын арттырумен қатар олардың жасуша органоидтері туралы білімін тереңдетіп, видеоролик, талдау тапсырмалары және шығармашылық модельдеу жұмыстары арқылы олардың құрылымы мен қызметін толық түсіндіру, алған білімін еркін әрі сенімді айту дағдысын қалыптастыру.',
tasks:[
 ['Білім','Жасушаның негізгі органоидтері (ядро, цитоплазма, митохондрия, ЭПТ, рибосома, лизосома, Гольджи аппараты, хлоропласт т.б.) туралы теориялық білім қалыптастыру.'],
 ['Түсіну','Әр органоидтің құрылымы мен қызметін дұрыс ажырата білуге үйрету.'],
 ['Талдау','Видеоролик, иллюстрация және тәжірибелік модельдеу арқылы ақпаратты талдауға бағыттау.']
],
modules:[
 {ab:'ОЖТ',full:'Оқыту мен оқудағы жаңа тәсілдер',org:'Рибосома',col:'#7b3fb5',img:'s05_00.jpg',pos:'2.6%',
  t:'Рибосома аминқышқылдарынан нәруыз құрастырады. Жаңа тәсілдер де оқушының білімін бөлшектерден жинап, жаңа ұғым құрастыруға жол ашады.'},
 {ab:'СТО',full:'Сын тұрғысынан ойлауға үйрету',org:'Митохондрия',col:'#e0322f',pos:'18.6%',
  t:'Митохондрия — жасушаның энергия станциясы. Сыни ойлау — сабақтың қозғаушы күші: оқушы дәлел іздейді, салыстырады, өз қорытындысын жасайды.'},
 {ab:'БжОБ',full:'Оқыту үшін бағалау және оқуды бағалау',org:'Жасуша мембранасы',col:'#d9a400',pos:'34.8%',
  t:'Мембрана сигналды қабылдап, жауап береді. Қалыптастырушы бағалау да — үздіксіз кері байланыс: «Не білдім? Енді не істеуім керек?»'},
 {ab:'АКТ',full:'Ақпараттық-коммуникативтік технологиялар',org:'Лизосома мен вакуоль',col:'#1665b5',pos:'50.9%',
  t:'Лизосома қажетсізін ыдыратады, вакуоль қажетін сақтайды. Цифрлық құралдар (QR-тапсырма, онлайн тест, видеоролик) ақпаратты сұрыптап, жүйелеуге үйретеді.'},
 {ab:'ТДБО',full:'Талантты және дарынды балалармен жұмыс',org:'ДНҚ мен хромосома',col:'#1f9a52',pos:'66.9%',
  t:'ДНҚ — тұқым қуалау ақпаратының сақтаушысы, әр ағзаның бірегей коды. Әр оқушының да ішкі әлеуеті бар: дарындыларға — ғылыми жоба, олимпиада, зерттеу.'},
 {ab:'ОЖЕСО',full:'Оқыту мен оқудағы жас ерекшеліктері',org:'Цитоплазма',col:'#24a6d6',pos:'82.8%',
  t:'Органоидтар цитоплазмада тіршілік етеді. Сабақ ортасы да оқушының жас ерекшелігіне бейімделеді: 9-сынып үшін — ойын, модель, топтық жұмыс.'},
 {ab:'ОБК',full:'Оқытуды басқару және көшбасшылық',org:'Ядро',col:'#b3122e',pos:'98.5%',
  t:'Ядро — жасушаның басқару орталығы. Мұғалім-көшбасшы сабақты жоспарлап, бағыт береді, бірақ оқушының дербестігі мен шешім қабылдауына орын қалдырады.'}
],
flow:[
 {k:'anx',name:'Алаңдаушылық',where:'Талап жоғары · дағды төмен',tip:'Тапсырманы бөлшектеу, тірек-сызба, үлгі мен жұптық көмек беру.'},
 {k:'flow',name:'Ағын',where:'Талап жоғары · дағды жетік',tip:'Мақсатты аймақ: оқушы толық беріліп жұмыс істейді. Шығармашылық модель, зерттеу.'},
 {k:'stuck',name:'Алға жылжу жоқ',where:'Талап төмен · дағды төмен',tip:'Қызығушылықты ояту: видеоролик, микроскоп, ойын элементтері.'},
 {k:'bore',name:'Зерігу',where:'Талап төмен · дағды жетік',tip:'Күрделірек тапсырма, жоба, олимпиада есептерін ұсыну.'}
],
steps:[
 {t:'Жасуша',m:'Визуализация',d:'Оқушылар жасуша құрылысын суретпен, сызбамен және алғашқы модельдермен бейнелейді: органоидты көзбен көру — оны есте сақтаудың бірінші қадамы.',imgs:['s06_00','s06_01','s06_02','s06_03','s06_04','s06_05','s06_06']},
 {t:'Ермексаздан жасалынған жасуша',m:'Шығармашылық модельдеу',d:'Өсімдік және жануар жасушасының көлемді модельдері: әр органоидтің пішіні, түсі мен орналасуы оқушының өз қолымен жасалады.',imgs:['s07_00','s07_01','s07_02','s07_03','s07_04','s07_05','s07_06','s07_07']},
 {t:'Микроскоптың көмегімен жасуша құрылысын көру',m:'Зерттеу',d:'Нағыз препаратпен жұмыс: модельде көргенін микроскоп астында тауып, салыстырады.',imgs:['s08_00','s08_01','s08_02','s08_03','s08_04']},
 {t:'Жұптық жұмыс',m:'Ынтымақтастық',d:'Жұпта бір-біріне түсіндіру, бірге сызба құру — «үйрете отырып үйрену» тәсілі.',imgs:['s09_00','s09_01','s09_02','s09_03','s09_04','s09_05']},
 {t:'Сабақ барысы',m:'Белсенді оқу',d:'Сабақ кезеңдері: түсіндіру, топтық талқылау, қорғау. Әр оқушы — сабақтың белсенді қатысушысы.',imgs:['s10_00','s10_01','s10_02','s10_03','s10_04','s10_05','s10_06','s10_07','s10_08']},
 {t:'Тапсырмалар',m:'Функционалдық сауаттылық',d:'Сөзжұмбақ, органоидтарды белгілеу, сәйкестендіру және QR-тапсырмалар — білімді әр қырынан бекіту.',imgs:['s11_00','s11_01','s11_02','s11_03','s11_04','s11_05']},
 {t:'АКТ тапсырмалары',m:'Цифрлық сауаттылық',d:'Интерактивті тақта, онлайн тапсырмалар мен QR-код арқылы жұмыс: оқушы ақпаратты цифрлық ортада өңдейді.',imgs:['s12_00','s12_01','s12_02','s12_03','s12_04','s12_05']},
 {t:'Шығармашылық жұмыстар',m:'Қорғау және рефлексия',d:'Жобаларды таныстыру, сахнада қорғау және көрме: алған білімін еркін әрі сенімді айту.',imgs:['s13_00','s13_01','s13_02','s13_03']}
],
videos:[
 ['v00','Жаратылыстану апталығы','Оқушылар мен мұғалімдердің қызықты тәжірибелері'],
 ['v01','Тәжірибелер','Мектеп-лицейдегі жаратылыстану апталығынан'],
 ['v02','Ашық алаңда','Мектеп ауласындағы тәжірибелер мен көрсетілімдер'],
 ['v03','Биология сабағы','Биология кабинетіндегі сабақ барысы']
]};
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const root=$('#practiceRoot');if(!root)return;
root.innerHTML=`
<div class="pr-intro">
  <div class="pr-video">
    <div class="pr-vframe"><video src="vid/v04.mp4" poster="img/v04.jpg" controls playsinline preload="none"></video></div>
    <span class="pr-vcap">▶ Курсқа шақыру бейнесі · 1:19</span>
  </div>
  <div class="pr-goal">
    <span class="pr-chip">Мақсаты</span>
    <p>${esc(P.goal)}</p>
    <div class="pr-tasks">${P.tasks.map((t,i)=>`<div><b>${i+1}</b><span><i>${t[0]}</i>${esc(t[1])}</span></div>`).join('')}</div>
  </div>
</div>

<div class="pr-block">
  <div class="pr-bhead"><span class="pr-chip">Авторлық тұжырымдама</span><h3>Жасуша органоидтары мен педагогикалық 7 модуль</h3><p>Бүгінгі мұғалімнің кәсіби даму жоспары: әр модуль — жасушадағы бір органоидтің қызметіне ұқсас.</p></div>
  <div class="pr-mods" id="prMods">${P.modules.map((m,i)=>`<button style="--c:${m.col}" data-i="${i}" class="${i?'':'on'}"><b>${m.ab}</b><small>${esc(m.org)}</small></button>`).join('')}</div>
  <div class="pr-mod" id="prMod"></div>
</div>

<div class="pr-block">
  <div class="pr-bhead"><span class="pr-chip">Бағалау және дамыту картасы</span><h3>Талап пен оқушы дағдысы</h3><p>Тапсырманың күрделілігі оқушының дағдысына сай болғанда ғана «ағын» күйі пайда болады. Шаршыны басып, мұғалімнің әрекетін көріңіз.</p></div>
  <div class="pr-flowwrap">
    <div class="pr-flow">
      <span class="ax ay">Талап ↑</span><span class="ax ax2">Дағды →</span>
      ${P.flow.map(f=>`<button class="q ${f.k}" data-k="${f.k}"><b>${f.name}</b><small>${f.where}</small></button>`).join('')}
      <div class="core"><svg viewBox="0 0 60 60"><ellipse cx="30" cy="30" rx="26" ry="22" fill="#fbd5e0" stroke="#e8799a" stroke-width="2"/><circle cx="26" cy="29" r="9" fill="#7a5bc7"/><circle cx="27.5" cy="27" r="3" fill="#3d2470"/><ellipse cx="43" cy="36" rx="5" ry="2.6" fill="#f08a4b"/></svg></div>
    </div>
    <div class="pr-flowside">
      <div class="pr-tip" id="prTip"><b>Ағын</b><p>${esc(P.flow[1].tip)}</p></div>
      <button class="pr-thumb" data-src="img/p-s04_00.jpg" data-cap="Жасуша органоидтары: талап және оқушы дағдысы"><img src="img/p-s04_00.jpg" alt="Бағалау және дамыту картасы"><span>Түпнұсқа инфографика</span></button>
      <button class="pr-thumb" data-src="img/p-s05_00.jpg" data-cap="Жасуша органоидтары мен педагогикалық 7 модуль"><img src="img/p-s05_00.jpg" alt="7 модуль"><span>7 модуль инфографикасы</span></button>
    </div>
  </div>
</div>

<div class="pr-block">
  <div class="pr-bhead"><span class="pr-chip">Сабақтан — шеберлікке</span><h3>«Жасуша органоидтеріне саяхат»: 8 баспалдақ</h3><p>Көру → жасау → зерттеу → бірлесу → талдау → қорғау. Әр қадамда оқушы органоидты жаңа қырынан таниды.</p></div>
  <div class="pr-steps" id="prSteps">${P.steps.map((s,i)=>`<button data-i="${i}" class="${i?'':'on'}"><b>${String(i+1).padStart(2,'0')}</b><span>${esc(s.t)}</span></button>`).join('')}</div>
  <div class="pr-step" id="prStep"></div>
</div>

<div class="pr-block">
  <div class="pr-bhead"><span class="pr-chip">Бейнеқойма</span><h3>Сабақ пен апталықтан көріністер</h3></div>
  <div class="pr-vids">${P.videos.map(v=>`<button class="pr-vc" data-v="${v[0]}" data-cap="${esc(v[1]+' — '+v[2])}"><div><img src="img/${v[0]}.jpg" alt="" loading="lazy"><span class="play">▶</span></div><b>${esc(v[1])}</b><small>${esc(v[2])}</small></button>`).join('')}</div>
</div>`;

/* lightbox */
const lb=document.createElement('div');lb.className='lightbox';lb.hidden=true;
lb.innerHTML='<button class="lb-x" aria-label="Жабу">×</button><button class="lb-p" aria-label="Алдыңғы">‹</button><figure><img alt=""><video controls playsinline hidden></video><figcaption></figcaption></figure><button class="lb-n" aria-label="Келесі">›</button>';
document.body.appendChild(lb);
let list=[],pos=0;
const draw=()=>{const it=list[pos],im=$('img',lb),vd=$('video',lb);vd.pause();
 if(it.v){im.hidden=true;vd.hidden=false;vd.poster='img/'+it.v+'.jpg';vd.src='vid/'+it.v+'.mp4';vd.play().catch(()=>{});}
 else{vd.hidden=true;vd.removeAttribute('src');im.hidden=false;im.src=it.src;}
 $('figcaption',lb).textContent=it.cap+(list.length>1?`  ·  ${pos+1} / ${list.length}`:'');
 $('.lb-p',lb).hidden=$('.lb-n',lb).hidden=list.length<2;};
const open=(l,i)=>{list=l;pos=i;lb.hidden=false;draw();};
const close=()=>{lb.hidden=true;$('video',lb).pause();};
$('.lb-x',lb).onclick=close;lb.addEventListener('click',e=>{if(e.target===lb)close();});
$('.lb-n',lb).onclick=()=>{pos=(pos+1)%list.length;draw();};
$('.lb-p',lb).onclick=()=>{pos=(pos-1+list.length)%list.length;draw();};
document.addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowRight')$('.lb-n',lb).click();if(e.key==='ArrowLeft')$('.lb-p',lb).click();});

/* modules */
const showMod=i=>{const m=P.modules[i];
 $('#prMod').innerHTML=`<div class="pm-card" style="--c:${m.col}"><div class="pm-l"><span class="pm-ab">${m.ab}</span><h4>${esc(m.full)}</h4><div class="pm-org"><i></i>Органоид: <b>${esc(m.org)}</b></div><p>${esc(m.t)}</p></div>
 <button class="pm-r" title="Үлкейту"><img src="img/p-mod${i}.jpg" alt="${esc(m.ab)}"></button></div>`;
 $('#prMod .pm-r').onclick=()=>open([{src:'img/p-s05_00.jpg',cap:'Жасуша органоидтары мен педагогикалық 7 модуль'}],0);
 $$('#prMods button').forEach(b=>b.classList.toggle('on',+b.dataset.i===i));};
$$('#prMods button').forEach(b=>b.onclick=()=>showMod(+b.dataset.i));showMod(0);

/* flow */
$$('.pr-flow .q').forEach(b=>b.onclick=()=>{const f=P.flow.find(x=>x.k===b.dataset.k);
 $$('.pr-flow .q').forEach(x=>x.classList.toggle('on',x===b));
 $('#prTip').innerHTML=`<b>${f.name}</b><small>${f.where}</small><p>${esc(f.tip)}</p>`;});
$('.pr-flow .q.flow').classList.add('on');
$$('.pr-thumb').forEach(b=>b.onclick=()=>open([{src:b.dataset.src,cap:b.dataset.cap}],0));

/* steps */
const showStep=i=>{const s=P.steps[i];
 const items=s.imgs.map(n=>({src:'img/p-'+n+'.jpg',cap:s.t}));
 $('#prStep').innerHTML=`<div class="ps-text"><span class="ps-n">${String(i+1).padStart(2,'0')}<small>/ ${String(P.steps.length).padStart(2,'0')}</small></span><span class="ps-m">${esc(s.m)}</span><h4>${esc(s.t)}</h4><p>${esc(s.d)}</p>
 <div class="ps-nav"><button class="btn sm ghost" data-d="-1">← Алдыңғы</button><button class="btn sm primary" data-d="1">Келесі →</button></div></div>
 <div class="ps-mosaic n${Math.min(s.imgs.length,9)}">${items.map((it,k)=>`<button data-k="${k}"><img src="${it.src}" alt="${esc(s.t)}" loading="lazy"></button>`).join('')}</div>`;
 $$('#prStep .ps-mosaic button').forEach(b=>b.onclick=()=>open(items,+b.dataset.k));
 $$('#prStep .ps-nav button').forEach(b=>b.onclick=()=>showStep((i+ +b.dataset.d+P.steps.length)%P.steps.length));
 $$('#prSteps button').forEach(b=>b.classList.toggle('on',+b.dataset.i===i));
 const on=$('#prSteps button.on');if(on&&on.scrollIntoView&&window.innerWidth<800)on.scrollIntoView({block:'nearest',inline:'center',behavior:'smooth'});};
$$('#prSteps button').forEach(b=>b.onclick=()=>showStep(+b.dataset.i));showStep(0);

/* videos */
const vl=P.videos.map(v=>({v:v[0],cap:v[1]+' — '+v[2]}));
$$('.pr-vc').forEach((b,i)=>b.onclick=()=>open(vl,i));
})();
