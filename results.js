/* ============ НӘТИЖЕ МЕН ПІКІР ============ */
(function(){
const IMG='';
const DATA=[[2019,78],[2020,80],[2021,83],[2022,86],[2023,88],[2024,91],[2025,94],[2026,97]];
const root=document.getElementById('resultsRoot');if(!root)return;
const first=DATA[0][1],last=DATA[DATA.length-1][1];
root.innerHTML=`
<div class="rs-grid">
  <div class="rs-card rs-chart">
    <div class="rs-top">
      <div><h3>Білім сапасының өсу динамикасы</h3><p>«Жасушаның құпия әлемі» курсы бойынша, %</p></div>
      <div class="rs-hero"><b>+${last-first}</b><span>пайыздық тармақ<br>${DATA[0][0]} → ${DATA[DATA.length-1][0]}</span></div>
    </div>
    <div class="rs-plot" id="rsPlot"></div>
    <details class="rs-table"><summary>Кесте түрінде көру</summary>
      <table><thead><tr><th>Оқу жылы</th>${DATA.map(d=>`<th>${d[0]}</th>`).join('')}</tr></thead>
      <tbody><tr><td>Білім сапасы</td>${DATA.map(d=>`<td>${d[1]}%</td>`).join('')}</tr></tbody></table>
    </details>
  </div>
  <div class="rs-card rs-review">
    <span class="rs-chip">Пікір</span>
    <h3>Бағдарламаға берілген пікір</h3>
    <blockquote>«Жасушаның құпия әлемі» элективті курсының тақырыптық бағыты 9-сынып оқушыларының биологиялық білімін кеңейтуге және зерттеушілік дағдыларын дамытуға мүмкіндік береді. Бағдарламаны мектептің оқу жоспарына сәйкес қосымша биологиялық білім беру аясында қолдануға ұсынуға болады.</blockquote>
    <div class="rs-who"><b>Тыныштыбаева Г.А.</b><span>№169 мектеп-лицейі, биология пәні мұғалімі, педагог-зерттеуші</span></div>
    <div class="rs-doc">
      <button class="rs-thumb" id="rsThumb" title="Түпнұсқаны үлкейту"><img src="${IMG}pikir.jpg" alt="Пікірдің түпнұсқасы" loading="lazy"><span>Түпнұсқа (қолы, мөрі бар)</span></button>
      <div class="rs-btns">
        <a class="btn primary sm" href="pikir.docx" download="Пікір_Жасушаның_құпия_әлемі.docx">⬇ Word нұсқасын жүктеу</a>
        <button class="btn ghost sm" id="rsOpen">Түпнұсқаны көру</button>
      </div>
    </div>
  </div>
</div>`;

/* --- бағаналы диаграмма (SVG) --- */
const plot=document.getElementById('rsPlot');
function draw(){
  const W=Math.max(300,plot.clientWidth),H=300,m={t:28,r:8,b:30,l:34};
  const iw=W-m.l-m.r,ih=H-m.t-m.b,n=DATA.length,bw=iw/n,barW=Math.min(54,bw*0.62);
  const y=v=>m.t+ih-(v/100)*ih;
  let g='';
  [0,25,50,75,100].forEach(v=>{g+=`<line x1="${m.l}" x2="${W-m.r}" y1="${y(v)}" y2="${y(v)}" class="gl"/><text x="${m.l-8}" y="${y(v)+4}" class="ax" text-anchor="end">${v}</text>`;});
  DATA.forEach((d,i)=>{
    const cx=m.l+bw*i+bw/2,x=cx-barW/2,top=y(d[1]),h=m.t+ih-top,r=Math.min(4,barW/2);
    const op=(0.45+0.55*i/(n-1)).toFixed(2);
    g+=`<g class="bar" data-i="${i}"><rect class="hit" x="${m.l+bw*i}" y="${m.t}" width="${bw}" height="${ih}" fill="transparent"/>
      <path d="M${x},${m.t+ih} V${top+r} Q${x},${top} ${x+r},${top} H${x+barW-r} Q${x+barW},${top} ${x+barW},${top+r} V${m.t+ih} Z" fill="#2a9d8f" fill-opacity="${op}"/>
      ${(i===0||i===n-1)?`<text x="${cx}" y="${top-8}" class="vl" text-anchor="middle">${d[1]}%</text>`:''}
      <text x="${cx}" y="${H-10}" class="ax" text-anchor="middle">${d[0]}</text></g>`;
  });
  g+=`<line x1="${m.l}" x2="${W-m.r}" y1="${m.t+ih}" y2="${m.t+ih}" class="base"/>`;
  plot.innerHTML=`<svg viewBox="0 0 ${W} ${H}" width="100%" height="${H}" role="img" aria-label="Білім сапасы: ${DATA.map(d=>d[0]+' жылы '+d[1]+'%').join(', ')}">${g}</svg><div class="rs-tip" hidden></div>`;
  const tip=plot.querySelector('.rs-tip');
  plot.querySelectorAll('.bar').forEach(b=>{
    const i=+b.dataset.i,d=DATA[i],prev=i?DATA[i-1][1]:null;
    const show=()=>{plot.querySelectorAll('.bar').forEach(o=>o.classList.toggle('dim',o!==b));
      tip.innerHTML=`<b>${d[0]} жыл</b><span>${d[1]}%</span>${prev!==null?`<small>${d[1]-prev>=0?'+':''}${d[1]-prev} алдыңғы жылмен салыстырғанда</small>`:'<small>бастапқы көрсеткіш</small>'}`;
      tip.hidden=false;const cx=m.l+bw*i+bw/2;tip.style.left=Math.min(Math.max(cx,70),W-70)+'px';tip.style.top=(y(d[1])-12)+'px';};
    const hide=()=>{tip.hidden=true;plot.querySelectorAll('.bar').forEach(o=>o.classList.remove('dim'));};
    b.addEventListener('mouseenter',show);b.addEventListener('mouseleave',hide);b.addEventListener('click',show);
  });
}
draw();let rt;window.addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(draw,150);});

/* --- түпнұсқаны үлкейту --- */
const lb=document.createElement('div');lb.className='lightbox';lb.hidden=true;
lb.innerHTML=`<button class="lb-x" aria-label="Жабу">×</button><figure><img src="${IMG}pikir.jpg" alt="Пікір"><figcaption>Пікір білдіруші: Тыныштыбаева Г.А.</figcaption></figure>`;
document.body.appendChild(lb);
const open=()=>lb.hidden=false,close=()=>lb.hidden=true;
document.getElementById('rsThumb').onclick=open;document.getElementById('rsOpen').onclick=open;
lb.querySelector('.lb-x').onclick=close;lb.addEventListener('click',e=>{if(e.target===lb)close();});
document.addEventListener('keydown',e=>{if(!lb.hidden&&e.key==='Escape')close();});
})();
