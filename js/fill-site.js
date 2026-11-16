/* fill-site.js: behaviour layered on top of the fill.work Webflow site.
   Loaded before </body> (Webflow > Site settings > Custom code). See README.md. */
/* ===== part 1 (passes 1-11) ===== */
(function(){
  var path=location.pathname.replace(/\/+$/,'')||'/';
  var I=function(p){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+p+'</svg>';};
  var P={
    cal:'<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/>',
    users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/>',
    shield:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    spark:'<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>',
    hand:'<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>',
    receipt:'<path d="M13 16H8"/><path d="M14 8H8"/><path d="M16 12H8"/><path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"/>',
    db:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
    check:'<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    house:'<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    inbox:'<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
    sq:'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12 2 2 4-4"/>',
    file:'<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    brief:'<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
    folder:'<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
    bld:'<path d="M10 12h4"/><path d="M10 8h4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/>',
    chart:'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>'
  };
  function ready(f){if(document.readyState!=='loading')f();else document.addEventListener('DOMContentLoaded',f);}
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 1. Straight double quotes only: curly and low quotes in visible text become " */
  function quotes(){
    var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:function(n){var p=n.parentNode&&n.parentNode.nodeName;return (/SCRIPT|STYLE|TEXTAREA|CODE|NOSCRIPT/.test(p)||!/[“”„‟″]/.test(n.nodeValue))?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT;}});
    var n,l=[];while(n=w.nextNode())l.push(n);
    l.forEach(function(t){t.nodeValue=t.nodeValue.replace(/[“”„‟″]/g,'"');});
  }
  /* 2. Closes: one close per page (pages with their own photo close drop the shared one); consultants wording on Procurement, HR and Finance */
  function closes(){
    var own=document.querySelector('section.cls,section.cl-end');
    if(own&&own.offsetParent!==null)document.querySelectorAll('section.sec-cta').forEach(function(s){s.style.display='none';});
    if(/^\/functions\/(procurement|hrandta|finance)(-sundown)?$/.test(path))
      document.querySelectorAll('h2.sec-cta-h2,h2.cls-h').forEach(function(h){h.textContent='Take consultants off the spreadsheets.';});
  }
  /* 3. /customers: dark hero and dark navbar, as on the stories */
  function customers(){
    if(!/^\/customers(-sundown)?$/.test(path))return;
    document.body.classList.add('p11-dark');
    var nav=document.querySelector('.nav-v2');if(nav){nav.classList.add('sd-nav-dark');nav.style.setProperty('--sd-nav-bg','#0a0a0a');}
    try{dispatchEvent(new Event('scroll'));}catch(e){}
  }
  /* 4. Home composer: type a hiring question, send, Fill answers, loop while in view */
  function composer(){
    var sec=document.querySelector('section.chs');if(!sec)return;
    var t=sec.querySelector('.fq-type');if(!t||t.__fq)return;t.__fq=1;
    var orig=t.textContent,box=t.parentElement&&t.parentElement.parentElement,send=box&&box.querySelector('.fq-send'),sug=sec.querySelector('.fq-suggs');
    var Q='Can you find a senior backend engineer for payments by 1 Dec?';
    if(sug){sug.style.position='relative';var r=document.createElement('span');r.className='fq-reply';r.innerHTML=I(P.spark)+'<span>Drafted the request · 3 suppliers have placed this role before</span>';sug.appendChild(r);}
    if(reduce||!('IntersectionObserver' in window))return;
    var run=false,tm=null;
    function later(f,ms){tm=setTimeout(function(){if(run)f();},ms);}
    function type(i){
      if(i<=Q.length){t.textContent=Q.slice(0,i);later(function(){type(i+1);},30+Math.random()*45);return;}
      later(function(){if(send)send.classList.add('fq-press');
        later(function(){if(send)send.classList.remove('fq-press');t.textContent='';sec.classList.add('fq-answered');
          later(function(){sec.classList.remove('fq-answered');later(function(){type(0);},900);},window.__fqHold||3800);},360);},700);
    }
    new IntersectionObserver(function(es){es.forEach(function(e){
      if(e.isIntersecting&&!run){run=true;clearTimeout(tm);type(0);}
      else if(!e.isIntersecting&&run){run=false;clearTimeout(tm);sec.classList.remove('fq-answered');t.textContent=orig;}
    });},{threshold:.35}).observe(t.closest('.chp-win')||box||t);
  }
  /* 5. Source and Control windows */
  function windows(){
    if(reduce||!('IntersectionObserver' in window))return;
    var ws=document.querySelectorAll('.fl-v>.cw:not(.cw-ask)');if(!ws.length)return;
    ws.forEach(function(w){
      if(w.__ca)return;w.__ca=1;
      var body=w.querySelector('.cw-body')||w;
      [].forEach.call(body.querySelectorAll('*'),function(p){
        if(p.closest('svg')||p.closest('.ca-row')||p.closest('.cw-bar'))return;
        var k=p.children;if(k.length<3)return;var c=k[0].classList[0],same=0;
        for(var j=0;j<k.length;j++)if(k[j].classList[0]===c&&k[j].nodeName===k[0].nodeName)same++;
        if(same<3||same<k.length-1)return;
        [].forEach.call(k,function(r,j){r.classList.add('ca-row');r.style.setProperty('--i',j);
          [].forEach.call(r.querySelectorAll('.pill,.ok'),function(x){x.classList.add('ca-pop');x.style.setProperty('--d',(j*90+520)+'ms');});
          [].forEach.call(r.querySelectorAll('.rg-tl i'),function(x){x.classList.add('ca-grow');x.style.setProperty('--d',(j*90+450)+'ms');});
        });
      });
      [].forEach.call(w.querySelectorAll('.pn-h .pill'),function(x){x.classList.add('ca-pop');x.style.setProperty('--d','350ms');});
      [].forEach.call(w.querySelectorAll('.fp-bandr'),function(x){x.classList.add('ca-grow');x.style.setProperty('--d','300ms');});
      [].forEach.call(w.querySelectorAll('.fp-dot,.fp-band span.o'),function(x){x.classList.add('ca-slide');x.style.setProperty('--d','450ms');});
      [].forEach.call(w.querySelectorAll('.cmp-r.bad'),function(x){x.classList.add('ca-flash');x.style.setProperty('--d','1000ms');});
      [].forEach.call(w.querySelectorAll('.dec'),function(x){x.classList.add('ca-in-r');x.style.setProperty('--d','650ms');});
      [].forEach.call(w.querySelectorAll('.cb.ink'),function(x){x.classList.add('ca-ink');x.style.setProperty('--d','1500ms');});
      w.classList.add('ca');
    });
    function count(w){var b=w.querySelector('.fp-big');if(!b||!b.firstChild||b.firstChild.nodeType!==3)return;var node=b.firstChild,end=parseInt(node.nodeValue.replace(/\D/g,''),10);if(!end)return;
      var start=Math.round(end*.83),t0=null;function f(ts){if(!t0)t0=ts;var k=Math.min(1,(ts-t0-450)/1000);if(k<0){node.nodeValue=fmt(start);requestAnimationFrame(f);return;}var v=Math.round(start+(end-start)*(1-Math.pow(1-k,3)));node.nodeValue=fmt(v);if(k<1)requestAnimationFrame(f);}
      function fmt(v){return String(v).replace(/\B(?=(\d{3})+(?!\d))/g,' ')+' ';}requestAnimationFrame(f);}
    var io=new IntersectionObserver(function(es){es.forEach(function(e){var w=e.target;
      if(e.isIntersecting&&e.intersectionRatio>=.3){if(!w.classList.contains('ca-on')){w.classList.add('ca-on');count(w);}}
      else if(!e.isIntersecting){w.classList.remove('ca-on');}
    });},{threshold:[0,.3]});
    ws.forEach(function(w){io.observe(w);});
  }
  /* 5b. Control step 05: a question in the composer, Fill answers and shows a chart */
  function ask(){
    if(!/^\/control$/.test(path)||document.querySelector('.cw-ask'))return;
    var steps=document.querySelectorAll('.fl-steps>.fl-step');if(!steps.length)return;
    var last=steps[steps.length-1],st=last.cloneNode(true);
    var n=st.querySelector('.fl-n span');if(n)n.textContent='05';
    var k=st.querySelector('.fl-k');if(k)k.textContent='Insights';
    var h=st.querySelector('.fl-h');if(h)h.textContent='Ask anything about your consultants';
    var p=st.querySelector('.fl-t p');if(p)p.textContent='Ask the way you would ask a colleague. Fill answers from your own contracts, hours and invoices, and shows the numbers behind the answer.';
    var v=st.querySelector('.fl-v');if(!v)return;
    var Q='What is our most active supplier and how much do they invoice us?';
    var rows=[['Knowit',4.2,1],['Sigma IT',2.6],['Acando',1.9],['HiQ',1.4],['Randstad',0.9]];
    var chart=rows.map(function(r,i){return '<div class="ask-row'+(r[2]?' top':'')+'"><b>'+r[0]+'</b><span class="ask-bar"><i style="--w:'+Math.round(r[1]/4.2*100)+'%;--d:'+(i*110+150)+'ms"></i></span><span class="ask-v" style="--d:'+(i*110+500)+'ms">'+r[1].toFixed(1)+' M</span></div>';}).join('');
    v.innerHTML='<div class="cw cw-ask"><div class="cw-bar"><i></i><i></i><i></i><span>Fill · Ask</span></div><div class="cw-body"><div class="pn">'+
      '<div class="pn-h"><b>Ask Fill</b><span class="mut" style="margin-left:auto">Your contracts, hours and invoices</span></div>'+
      '<div class="ask-thread"><p class="ask-hint"><b>What do you want to know?</b>Answers come from your own data, with the numbers to check them.</p>'+
      '<div class="ask-user">'+Q+'</div>'+
      '<div class="ask-who"><span>'+I(P.spark)+'</span>Fill<span class="ask-dots"><i></i><i></i><i></i></span></div>'+
      '<div class="ask-ans"><p class="ask-txt"><b>Knowit.</b> 9 consultants on assignment right now, and <b>4.2 M EUR</b> invoiced in the last 12 months, 38 % of your consultant spend.</p>'+
      '<div class="ask-chart"><div class="ask-ch"><span>Invoiced per supplier, last 12 months</span><span>EUR</span></div>'+chart+'</div>'+
      '<p class="ask-src">From 214 invoices matched to approved hours</p></div></div>'+
      '<div class="ask-comp"><span class="ask-q"></span><span class="ask-caret"></span><span class="ask-send">'+I('<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>')+'</span></div>'+
      '</div></div></div>';
    last.parentNode.insertBefore(st,last.nextSibling);
    var w=v.querySelector('.cw-ask'),q=w.querySelector('.ask-q'),send=w.querySelector('.ask-send'),caret=w.querySelector('.ask-caret');
    function done(){q.textContent='';w.classList.add('ask-sent','ask-done');}
    if(reduce||!('IntersectionObserver' in window)){done();return;}
    var run=false,tm=null;
    function later(f,ms){tm=setTimeout(function(){if(run)f();},ms);}
    function type(i){
      if(i<=Q.length){q.textContent=Q.slice(0,i);later(function(){type(i+1);},28+Math.random()*40);return;}
      later(function(){send.classList.add('on');
        later(function(){send.classList.remove('on');q.textContent='';
          var comp=w.querySelector('.ask-comp'),k=w.getBoundingClientRect().height/(w.offsetHeight||1)||1,y0=comp.getBoundingClientRect().top;
          w.classList.add('ask-sent');
          var dy=(y0-comp.getBoundingClientRect().top)/k;comp.style.transition='none';comp.style.transform='translateY('+dy+'px)';void comp.offsetWidth;
          comp.style.transition='transform .6s cubic-bezier(.2,.7,.2,1)';comp.style.transform='';
          later(function(){w.classList.add('ask-done');},1100);},320);},550);
    }
    new IntersectionObserver(function(es){es.forEach(function(e){
      if(e.isIntersecting&&e.intersectionRatio>=.35&&!run){run=true;clearTimeout(tm);w.classList.remove('ask-sent','ask-done');q.textContent='';later(function(){type(0);},400);}
      else if(!e.isIntersecting&&run){run=false;clearTimeout(tm);}
    });},{threshold:[0,.35]}).observe(w);
  }
  /* 5c. Control hero: several users' cursors; "You" hovers Omar Haddad's bar and the consultant card opens, then closes, in a loop */
  function cursors(){document.querySelectorAll(':is(.fl-hwin,.chp-win) .cv').forEach(cursorsOn);
    /* Automate cursors (.cur): same arrow as the Control cursors; colour comes from CSS fill */
    document.querySelectorAll('.cur>svg:not(.mc-ar)').forEach(function(g){g.outerHTML='<svg class="mc-ar" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 2.5 10.6 21l2.7-7.7L21 10.6z" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>';});}
  function cursorsOn(cv){
    if(cv.querySelector('.mc-layer'))return;
    var bar=cv.querySelector('.tl-b.on'),cc=cv.querySelector('.cc');if(!bar||!cc)return;
    var row=bar.closest('.tl-r');if(row)row.classList.add('mc-row');
    var arrow=function(c){return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 2.5 10.6 21l2.7-7.7L21 10.6z" fill="'+c+'" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>';};
    var L=document.createElement('div');L.className='mc-layer';L.setAttribute('aria-hidden','true');
    /* Brand tokens: accent-500, health-good, ink (the CTA colour) for You */
    L.innerHTML='<div class="mc mc-a" style="--c:#6E6DC6">'+arrow('#6E6DC6')+'<span>Anna Berg</span></div>'+
      '<div class="mc mc-b" style="--c:#008236">'+arrow('#008236')+'<span>Johan Lind</span></div>'+
      '<div class="mc mc-you" style="--c:#1C1917">'+arrow('#1C1917')+'<span>You</span></div>';
    cv.appendChild(L);
    var you=L.querySelector('.mc-you');
    /* The card gets an Extend button that You click; it turns into "Sent for approval" */
    var tickI='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var xb=cc.querySelector('.cc-x');
    if(!xb){var act=document.createElement('div');act.className='cc-act';act.innerHTML='<span class="cc-x">Extend</span>';cc.appendChild(act);xb=act.firstChild;}
    function xReset(){xb.classList.remove('press','sent');xb.innerHTML='Extend';}
    function xSent(){xb.classList.remove('press');xb.classList.add('sent');xb.innerHTML=tickI+'Sent for approval';}
    function xPos(){var c=cv.getBoundingClientRect(),b=xb.getBoundingClientRect(),k=cv.offsetWidth?c.width/cv.offsetWidth:1;
      return [Math.round((b.left-c.left+b.width*.45)/k),Math.round((b.top-c.top+b.height*.4)/k)];}
    var fitMc=function(){var k=cv.getBoundingClientRect().width/(cv.offsetWidth||1)||1;L.style.setProperty('--mcs',Math.min(2.4,1/k).toFixed(3));};fitMc();addEventListener('resize',fitMc);
    function at(x,y){you.style.transform='translate('+x+'px,'+y+'px)';}
    function target(){var c=cv.getBoundingClientRect(),b=bar.getBoundingClientRect(),k=cv.offsetWidth?c.width/cv.offsetWidth:1;
      var vis=(Math.min(innerWidth,document.documentElement.clientWidth)-c.left)/k-70;
      return [Math.round(Math.min((b.right-c.left)/k-90,vis)),Math.round((b.top-c.top)/k+4)];}
    at(120,560);
    if(reduce||!('IntersectionObserver' in window)){cv.classList.add('mc-on','mc-open','mc-hover');var t=target();at(t[0],t[1]);return;}
    cv.classList.add('mc-on');
    var run=false,tm=null;
    function later(f,ms){tm=setTimeout(function(){if(run)f();},ms);}
    function loop(){
      var t=target();xReset();at(t[0],t[1]);
      later(function(){cv.classList.add('mc-hover');
        later(function(){cv.classList.add('mc-open');
          later(function(){var p=xPos();at(p[0],p[1]);cv.classList.remove('mc-hover');
            later(function(){xb.classList.add('press');
              later(function(){xSent();
                later(function(){at(p[0]+60,p[1]+120);
                  later(function(){cv.classList.remove('mc-open');
                    later(function(){xReset();at(140,540);later(loop,1800);},900);},700);},2600);},220);},1500);},1700);},350);},1400);
    }
    new IntersectionObserver(function(es){es.forEach(function(e){
      if(e.isIntersecting&&!run){run=true;clearTimeout(tm);later(loop,600);}
      else if(!e.isIntersecting&&run){run=false;clearTimeout(tm);cv.classList.remove('mc-open','mc-hover');xReset();at(120,560);}
    });},{threshold:.25}).observe(cv);
  }
  /* 5d. /agents: brand tokens on the page; the agent built in the composer = invoice deviation, not timesheet approval */
  function agentsPage(){
    if(!/^\/agents$/.test(path))return;
    document.body.classList.add('p11-ag');
    document.querySelectorAll('.fw-pop .fw-q span').forEach(function(q){q.textContent='Build an agent that reminds managers to approve invoices that deviate 10 % or more from approved hours';});
    document.querySelectorAll('.fw-pc,.fw-c.fw-new').forEach(function(c){
      var pill=c.querySelector('.fw-p');if(pill){pill.className='fw-p fw-run';pill.innerHTML='<i></i>When an invoice arrives';}
      var b=c.querySelector('b');if(b)b.textContent='Invoice deviation';
      var j=c.querySelector('.fw-j');if(j)j.textContent=c.classList.contains('fw-pc')?'Reminds the manager to approve any invoice that deviates 10 % or more from approved hours. Never approves an invoice itself.':'Reminds managers to approve invoices 10 % or more off approved hours.';
      var ch=c.querySelectorAll('.fw-ch');if(ch[0])ch[0].textContent='Invoices';if(ch[1])ch[1].textContent='Managers';
    });
    /* Clear rules = option E: the agent's own rule card + an activity log */
    var agd=document.querySelector('section.agd');
    if(agd&&!agd.querySelector('.agr')){
      var g=agd.querySelector('.agd-g'),fl=agd.querySelector('.agd-flow');if(g)g.remove();if(fl)fl.remove();
      var hp=agd.querySelector('.agd-h p');if(hp)hp.textContent='Every agent comes with its own rule card: what starts it, what it can do, what it can never do. And a log of every step it takes.';
      var sv=function(d,s){return '<svg viewBox="0 0 24 24" width="'+(s||16)+'" height="'+(s||16)+'" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+d+'</svg>';};
      var lock=sv('<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',15);
      var rcpt=sv('<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M14 8H8"/><path d="M16 12H8"/><path d="M13 16H8"/>',18);
      var hist=sv('<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>');
      var kv=function(k,v){return '<div class="agr-kv"><span>'+k+'</span><div>'+v+'</div></div>';};
      var log=[['08:02','INV-2291 from Knowit arrived'],['08:02','12 % over approved hours'],['08:03','Reminded Anna Berg'],['10:41','<span class="agr-per">Person</span>Anna approved']];
      var w=document.createElement('div');w.className='agr';
      w.innerHTML='<div class="agr-card"><div class="agr-top"><div class="agr-id"><span class="agr-ic">'+rcpt+'</span><b>Invoice deviation</b></div><button type="button" class="agr-sw" role="switch" aria-checked="true" aria-label="Invoice deviation agent on"></button></div>'
        +kv('Starts when','An invoice arrives')
        +kv('Reads','<span class="agr-tag">Invoices</span><span class="agr-tag">Approved hours</span><span class="agr-tag">Managers</span>')
        +kv('Can','Compare the invoice with approved hours. Remind the manager when it is 10 % or more off.')
        +kv('Can never','<div class="agr-no">'+lock+'Approve the invoice</div><div class="agr-no">'+lock+'Pay or change it</div>')
        +kv('Hands to','The manager on the assignment')
        +kv('Set by','Your admin · edited 3 Nov')
        +'</div><div class="agr-log"><div class="agr-lh">'+hist+'Every step, logged</div>'
        +log.map(function(r,i){return '<div class="agr-lr" style="transition-delay:'+(300+i*550)+'ms"><span>'+r[0]+'</span><span>'+r[1]+'</span></div>';}).join('')+'</div>';
      agd.querySelector('.agd-in').appendChild(w);agd.classList.add('agd-e');
      var sw=w.querySelector('.agr-sw');sw.addEventListener('click',function(){var on=sw.getAttribute('aria-checked')!=='true';sw.setAttribute('aria-checked',on);sw.setAttribute('aria-label','Invoice deviation agent '+(on?'on':'off'));});
      new IntersectionObserver(function(es,o){es.forEach(function(e){if(e.isIntersecting){w.classList.add('agr-in');o.disconnect();}});},{threshold:.35}).observe(w);
    }
  }
  /* 6. Compare pages */
  function compare(){
    if(!/^\/compare\//.test(path))return;
    var fw=document.querySelector('.cmp-hero-figwrap');
    if(fw&&!fw.querySelector('.cmx-stage')){
      var nav=[['house','Overview',1],['inbox','Inbox','12'],['sq','Approvals','3l'],['-','Sourcing'],['file','Requests'],['-','Workforce'],['brief','Assignments'],['users','Consultants'],['folder','Projects'],['-','Company'],['bld','Suppliers'],['chart','Analytics']];
      var side='<div class="cmx-org"><span>N</span>Nordvik Group</div>'+nav.map(function(n){if(n[0]==='-')return '<div class="cmx-sec">'+n[1]+'</div>';var em=n[2]===1||!n[2]?'':(/l$/.test(n[2])?'<em class="l">'+n[2].slice(0,-1)+'</em>':'<em>'+n[2]+'</em>');return '<div class="cmx-nav'+(n[2]===1?' on':'')+'">'+I(P[n[0]])+n[1]+em+'</div>';}).join('');
      var rows=[['OH','#1f3b57','Omar Haddad','Cloud engineer','Sigma IT','31 Mar','grn','On track'],['JE','#7a4a2a','Jonas Ek','Backend developer','Knowit','25 Nov','amb','Ends soon'],['EB','#3f6b50','Elin Berg','UX designer','Sigma IT','31 Jan','grn','On track'],['KS','#6E6DC6','Karl Ström','Data engineer','Knowit','30 Jun','lav','Rate check']];
      var tbl='<div class="cmx-tr h"><span>Consultant</span><span>Supplier</span><span>Ends</span><span>Status</span></div>'+rows.map(function(r){return '<div class="cmx-tr"><span><span class="cmx-av" style="background:'+r[1]+'">'+r[0]+'</span><b>'+r[2]+'</b> <span class="cmx-mut">· '+r[3]+'</span></span><span>'+r[4]+'</span><span>'+r[5]+'</span><span><span class="cmx-pill '+r[6]+'">'+r[7]+'</span></span></div>';}).join('');
      var st=document.createElement('div');st.className='cmx-stage';st.setAttribute('aria-hidden','true');
      st.innerHTML='<div class="cmx-win"><aside class="cmx-side">'+side+'</aside><div class="cmx-main"><p class="cmx-greet">Good morning, Anna. What do you need?</p><div class="cmx-comp">A senior backend engineer for payments, 1 Dec<i></i><b></b></div><div class="cmx-chips"><span class="cmx-chip">Hire a consultant</span><span class="cmx-chip">Extend an assignment</span><span class="cmx-chip">Compare candidates</span><span class="cmx-chip">Check a rate</span></div><div class="cmx-cards"><div class="cmx-card"><small>My approvals <span class="cmx-pill lav">3 waiting</span></small>3 contracts wait for your approval</div><div class="cmx-card"><small>Ending soon <span class="cmx-pill amb">14 days</span></small>Jonas Ek ends on 25 November</div><div class="cmx-card"><small>Candidates <span class="cmx-pill lav">4 new</span></small>New candidates for UX designer</div></div><div class="cmx-tbl"><div style="display:flex;justify-content:space-between;height:34px;align-items:center"><span><b>My consultants</b> <span class="cmx-mut">12 active</span></span><span style="color:#5750B1">View all</span></div>'+tbl+'</div></div></div>';
      fw.appendChild(st);fw.classList.add('cmx-on');
      var fit=function(){var win=st.firstChild,W=st.clientWidth,s=Math.min(1,(W-48)/1040);win.style.transform=s<1?'scale('+s.toFixed(4)+')':'';win.style.top=(s<1?Math.round(40*s+12):72)+'px';};
      fit();addEventListener('resize',fit);
    }
    var ico=function(txt){txt=txt.toLowerCase();
      return /implement|live in|weeks|setup|set-up|onboard/.test(txt)?'cal':/adoption|hiring|manager|users/.test(txt)?'users':/complian|gdpr|eu |europe|secur|residency/.test(txt)?'shield':/ai|sourcing|workflow|agent/.test(txt)?'spark':/vendor|supplier|direct|relationship/.test(txt)?'hand':/markup|pric|fee|cost|spend/.test(txt)?'receipt':/data|own|record|visib/.test(txt)?'db':'check';};
    document.querySelectorAll('.cmp-twocol-pin').forEach(function(pin){var i=pin.querySelector('.cmp-twocol-pin-icon');if(i&&!i.querySelector('svg'))i.innerHTML=I(P[ico(pin.textContent)]);});
    var tods=['dawn','day','sun'];
    document.querySelectorAll('.cmp-card-mock').forEach(function(m){var card=m.closest('.cmp-card');var sib=card?[].filter.call(card.parentElement.children,function(c){return c.classList.contains('cmp-card');}):[];m.setAttribute('data-tod',tods[Math.max(0,sib.indexOf(card))%3]);});
  }
  /* 7. Brand tokens site-wide: green, amber and off-ramp purples in pills, dots and bars -> design system tokens.
        green-50 + health-good, warning badge (#f0ad4e/#533200), accent-50/100/200/500/700. People avatars, cursors and the blue sun are left alone. */
  function brandTokens(){
    var BG={'227,246,233':'#F0FDF4','230,246,238':'#F0FDF4','233,246,238':'#F0FDF4','254,243,226':'#F0AD4E','255,241,226':'#F0AD4E','224,123,31':'#BB4D00',
      '238,238,252':'#EBECFE','230,232,251':'#EBECFE','230,229,247':'#DADCFF','201,200,240':'#C6C8FE','201,205,245':'#C6C8FE','97,87,248':'#6E6DC6','75,73,200':'#6E6DC6','85,82,216':'#6E6DC6'};
    var FG={'0,166,62':'#008236','0,132,58':'#008236','14,122,82':'#008236','30,122,67':'#008236','88,86,184':'#5750B1','62,60,168':'#5750B1','90,89,181':'#5750B1','163,90,12':'#533200'};
    var key=function(c){var m=/^rgba?\((\d+), (\d+), (\d+)(?:, ([\d.]+))?\)$/.exec(c);if(!m||(m[4]!==undefined&&+m[4]<.99))return '';return m[1]+','+m[2]+','+m[3];};
    [].forEach.call(document.querySelectorAll('body *'),function(e){
      if(e.__bt||e.closest('svg,.mc-layer'))return;
      var cs=getComputedStyle(e),b=BG[key(cs.backgroundColor)],f=FG[key(cs.color)];
      if(!b&&!f)return;e.__bt=1;
      if(b){e.style.setProperty('background-color',b,'important');if(b==='#F0AD4E')e.style.setProperty('color','#533200','important');}
      if(f&&b!=='#F0AD4E')e.style.setProperty('color',f,'important');
    });
  }
  ready(function(){
    [closes,customers,agentsPage,compare,composer,ask,cursors,windows,quotes].forEach(function(f){try{f();}catch(e){}});
    setTimeout(function(){try{quotes();}catch(e){}},1500);
    [0,1600,4000].forEach(function(t){setTimeout(function(){try{brandTokens();}catch(e){}},t);});
  });
})();

/* ===== part 2 (passes 12-21) ===== */
(function(){
  var I=function(p){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+p+'</svg>';};
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  function ready(f){if(document.readyState!=='loading')f();else document.addEventListener('DOMContentLoaded',f);}
  /* Home "One system": the click areas were fixed 80x110 px boxes while the drawing scales, so hover and tile drifted apart. Size and place each from its tile. */
  function hubHits(){
    var d=document.querySelector('.fs-nf-d'),svg=d&&d.querySelector('svg.fs-nsvg');if(!d||!svg)return;
    function box(l,b,dr,x,y,w,h,r){l.classList.add('p12');l.style.left=(b.left-dr.left-x)+'px';l.style.top=(b.top-dr.top-y)+'px';l.style.width=(b.width+w)+'px';l.style.height=(b.height+h)+'px';l.style.borderRadius=r+'px';}
    function fit(){var dr=d.getBoundingClientRect();
      for(var n=1;n<=6;n++){var l=d.querySelector('label[for=fsr'+n+']'),t=svg.querySelector('.fs-t'+n);if(!l||!t)continue;var b=t.getBoundingClientRect(),k=b.width/84;box(l,b,dr,18*k,8*k,36*k,60*k,20*k);}
      var hub=svg.querySelector('.fs-nh'),hl=d.querySelector('label.fs-hub');if(hub&&hl){var hb=hub.getBoundingClientRect();box(hl,hb,dr,0,0,0,0,30*hb.width/120);}}
    fit();addEventListener('resize',fit);setTimeout(fit,800);
  }
  /* An empty strip between a closing band and the footer showed as a white gap (Partners). Hide empty blocks there. */
  function gaps(){
    document.querySelectorAll('section.cmp-ftcta,section.sec-cta').forEach(function(s){var n=s.nextElementSibling;
      while(n&&!n.querySelector('a,img,svg,h1,h2,h3,p')&&!n.textContent.trim()&&n.getBoundingClientRect().height<48){var nx=n.nextElementSibling;n.style.display='none';n=nx;}});
  }
  /* the card's checks are run by an agent. It checks each request, then the result appears (green-50 + health-good, warning badge). */
  function agentCheck(){
    var bot='<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>';
    var chk='<path d="M20 6 9 17l-5-5"/>';
    document.querySelectorAll('.fh-cd').forEach(function(cd){
      var aps=[].slice.call(cd.querySelectorAll('.fh-ap'));if(!aps.length||cd.querySelector('.fh-agent'))return;
      var fin=aps.map(function(a){return a.textContent.trim();}),warn=fin.map(function(t){return /above|over|outside|differ|late|missing/i.test(t);});
      var nw=warn.filter(Boolean).length,n=aps.length,word=n===1?'request':'requests';
      var ag=document.createElement('div');ag.className='fh-agent';var hd=cd.querySelector('.fh-ch');if(hd)hd.parentNode.insertBefore(ag,hd.nextSibling);else cd.insertBefore(ag,cd.firstChild);
      function busy(){ag.innerHTML=I(bot)+'<span>Rate check agent is checking '+n+' '+word+'</span><span class="ag-dots"><i></i><i></i><i></i></span>';aps.forEach(function(a){a.className='fh-ap ag-wait';});}
      function settle(i){aps[i].className='fh-ap ag-pop '+(warn[i]?'ag-warn':'ag-ok');aps[i].textContent=fin[i];}
      function done(){ag.innerHTML=I(chk)+'<span>Rate check agent checked '+n+' '+word+(nw?' · '+nw+' needs you':'')+'</span>';}
      if(reduce||!('IntersectionObserver' in window)){aps.forEach(function(a,i){settle(i);});done();return;}
      var run=false,tm=[];function clear(){tm.forEach(clearTimeout);tm=[];}
      function cycle(){clear();busy();aps.forEach(function(a,i){tm.push(setTimeout(function(){settle(i);},1300+i*650));});
        tm.push(setTimeout(done,1500+n*650));tm.push(setTimeout(function(){if(run)cycle();},7300+n*650));}
      new IntersectionObserver(function(es){es.forEach(function(e){
        if(e.isIntersecting&&!run){run=true;cycle();}
        else if(!e.isIntersecting&&run){run=false;clear();aps.forEach(function(a,i){settle(i);});done();}
      });},{threshold:.35}).observe(cd);
    });
  }
  /* Pass 13: hero photos loaded at 115 px (wrong sizes attribute) and stretched. Ask for a file that fits the box. */
  function sharpImgs(){
    var dpr=window.devicePixelRatio||1;
    document.querySelectorAll('img[srcset]').forEach(function(img){
      var r=img.getBoundingClientRect();if(r.width<60)return;var need=r.width;
      if(getComputedStyle(img).objectFit==='cover'&&img.naturalWidth&&img.naturalHeight)need=Math.max(r.width,r.height*img.naturalWidth/img.naturalHeight);
      if(!img.complete||!img.naturalWidth||img.naturalWidth<need*dpr*.92){img.sizes=Math.ceil(need)+'px';img.loading='eager';}
    });
  }
  /* Pass 14: Home ch1 = a liquid glass carousel instead of the whole platform. Composer first, then the request is drafted, then suppliers are picked and the request is sent. */
  function glassCarousel(){
    var pn=document.querySelector('#ch1 .chp-panel');if(!pn||pn.querySelector('.gc-wrap'))return;
    var gc=gcBuild(pn);pn.classList.add('gc-on');if(!gc.anim)return;
    new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)gc.start();else gc.stop();});},{threshold:.35}).observe(pn);
  }
  /* The request carousel itself (Ask Fill -> Request drafted -> Suppliers -> All done), built into any positioned box. Home ch1 and /product use it. */
  function gcBuild(pn){
    var spark='<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/>';
    var file='<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>';
    var bld='<path d="M10 12h4"/><path d="M10 8h4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/>';
    var up='<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',tick='<path d="M20 6 9 17l-5-5"/>',send='<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>';
    var Q='Can you find a senior backend engineer for payments by 1 Dec?';
    var kv=[['Role','Senior backend engineer'],['Team','Payments'],['Start','1 Dec'],['Length','6 months'],['Rate band','950–1 100 SEK/h']];
    var sup=[['Knowit','Placed 4 backend engineers','Replies in 1 day'],['Sigma IT','Placed 3','Replies in 2 days'],['Acando','Placed 2','Replies in 1 day']];
    var g=document.createElement('div');g.className='gc-wrap';g.setAttribute('aria-hidden','true');
    g.innerHTML='<div class="gc-bg"></div><div class="gc-track">'
      +'<div class="gc-card"><div class="gc-k">'+I(spark)+'Ask Fill</div><p class="gc-greet">Good morning, Anna. What do you need?</p><div class="gc-in"><span class="gc-q"></span><span class="gc-car"></span><span class="gc-send">'+I(up)+'</span></div><div class="gc-chips"><span class="gc-chip">Hire a consultant</span><span class="gc-chip">Extend an assignment</span><span class="gc-chip">Check a rate</span></div></div>'
      +'<div class="gc-card"><div class="gc-h">'+I(file)+'Request drafted<small>Draft</small></div><div class="gc-sub">Written from your sentence. Edit anything before it goes out.</div><div class="gc-kv">'+kv.map(function(r){return '<span>'+r[0]+'</span><b>'+r[1]+'</b>';}).join('')+'</div></div>'
      +'<div class="gc-card"><div class="gc-h">'+I(bld)+'Suppliers</div><div class="gc-sub">Fill picked 3 who placed this role before</div>'+sup.map(function(s){return '<div class="gc-r"><span class="gc-cb">'+I(tick)+'</span><span><b style="font-weight:600">'+s[0]+'</b> <small>· '+s[1]+'</small></span><small>'+s[2]+'</small></div>';}).join('')+'<div class="gc-act"><span class="gc-btn">'+I(send)+'<span>Send for approval</span></span></div></div>'
      +'<div class="gc-card gc-done"><span class="gc-ok">'+I(tick)+'</span><b>All done</b><span>Sent for internal approval</span><small>Knowit, Sigma IT and Acando get the request once it is approved.</small></div>'
      +'<div class="gc-card gc-sk"><i class="h"></i><i class="w9"></i><i class="w7"></i><i class="w8"></i><i class="w5"></i><i class="b"></i></div>'
      +'</div><div class="gc-dots"><i></i><i></i><i></i><i></i></div>';
    pn.appendChild(g);
    var cards=[].slice.call(g.querySelectorAll('.gc-card:not(.gc-sk)')),sk=g.querySelector('.gc-sk'),dots=[].slice.call(g.querySelectorAll('.gc-dots i')),q=g.querySelector('.gc-q'),sendB=g.querySelector('.gc-send'),bs=[].slice.call(g.querySelectorAll('.gc-kv b')),rows=[].slice.call(g.querySelectorAll('.gc-r')),btn=g.querySelector('.gc-btn');
    function go(i){cards.forEach(function(c,j){c.setAttribute('data-o',j===i?0:1);});sk.setAttribute('data-o',i<0?0:1);if(i>=0)dots.forEach(function(d,j){d.classList.toggle('on',j===i);});}
    function reset(){q.textContent='';bs.forEach(function(b){b.classList.remove('on');});rows.forEach(function(r){r.classList.remove('on');});btn.innerHTML=I(send)+'<span>Send for approval</span>';go(0);}
    function final(){q.textContent=Q;bs.forEach(function(b){b.classList.add('on');});rows.forEach(function(r){r.classList.add('on');});go(0);}
    if(reduce||!('IntersectionObserver' in window)){final();return {anim:false,start:function(){},stop:function(){},len:function(){return 0;}};}
    reset();
    var run=false,tm=[],LEN=0;function at(ms,f){tm.push(setTimeout(function(){if(run)f();},ms));}function clear(){tm.forEach(clearTimeout);tm=[];}
    function cycle(){clear();reset();var t=500;
      for(var i=1;i<=Q.length;i++){(function(i){at(t,function(){q.textContent=Q.slice(0,i);});})(i);t+=32+(i%7?0:40);}
      at(t+400,function(){sendB.classList.add('press');});at(t+700,function(){sendB.classList.remove('press');go(-1);});at(t+1600,function(){go(1);dots.forEach(function(d,j){d.classList.toggle('on',j===1);});});
      t+=2100;bs.forEach(function(b,i){at(t+i*230,function(){b.classList.add('on');});});
      t+=bs.length*230+1300;at(t,function(){go(-1);});at(t+900,function(){go(2);dots.forEach(function(d,j){d.classList.toggle('on',j===2);});});
      t+=1500;rows.forEach(function(r,i){at(t+i*550,function(){r.classList.add('on');});});
      t+=rows.length*550+500;at(t,function(){btn.classList.add('press');});at(t+300,function(){btn.classList.remove('press');});
      at(t+700,function(){go(3);});LEN=t+700;
      at(t+4400,cycle);}
    return {anim:true,len:function(){return LEN;},
      start:function(){if(run)return;run=true;cycle();},
      stop:function(){if(!run)return;run=false;clear();reset();}};
  }
  /* Pass 20: show each customer's logo instead of its name (name kept as alt text). */
  function customerLogos(){
    var B='https://cdn.prod.website-files.com/6772630c34939788e26d4ae6/';
    var L=[[/green\s*cargo/i,'6a292d26ca1ce61d3ac3cf63_gc.png','Green Cargo',1],[/s(ö|o)derberg/i,'6a292d26f84edef90e6a94e6_smo%CC%88.png','Söderberg & Partners',1],[/noba/i,'6a292d26c97e66b41b8b0180_nobab.png','NOBA Bank',0],[/ssab/i,'6a292d26ca1ce61d3ac3cf6d_ssab.png','SSAB',0]];
    document.querySelectorAll('.tms-co,.cqs-logo,.cus-story-logo').forEach(function(e){if(e.classList.contains('lg-on')||e.querySelector('img'))return;var t=e.textContent.trim();
      for(var i=0;i<L.length;i++){if(L[i][0].test(t)){e.innerHTML='<img src="'+B+L[i][1]+'" alt="'+L[i][2]+'">';e.classList.add('lg-on');if(L[i][3])e.classList.add('lg-tall');return;}}});
  }
  /* Pass 19: glass frame round every product window. Bar windows put the title bar on the glass; the rest get a 10 px glass rim. */
  function glassFrames(){
    var path=location.pathname.replace(/\/+$/,'')||'/';
    if(!/^\/(source|control|agents|product)?(-sundown)?$/.test(path)&&path!=='/')return;
    var G={dawn:'radial-gradient(50% 50% at 50% 50%,#D9663F 0%,#E98F6A 22%,#E6B3C2 42%,#D5CCF3 62%,rgba(246,241,236,0) 100%)',
      day:'radial-gradient(50% 50% at 50% 50%,#2F6FD0 0%,#5E98E6 22%,#9CC3F2 42%,#C9DDF7 62%,rgba(243,245,248,0) 100%)',
      night:'radial-gradient(50% 50% at 50% 50%,#8E8BFF 0%,#5552D8 24%,#2A2596 46%,rgba(10,10,10,0) 100%)',
      lav:'radial-gradient(50% 50% at 50% 50%,#8482E1 0%,#C6C8FE 30%,#DADCFF 50%,rgba(243,242,240,0) 100%)'};
    var glow=/source/.test(path)?'dawn':/control|product/.test(path)?'day':/agents/.test(path)?'night':'lav';
    function dark(e){var a=e;while(a&&a!==document.documentElement){var m=getComputedStyle(a).backgroundColor.match(/[\d.]+/g);if(m&&(m.length<4||+m[3]>.5)){return (+m[0]*299+ +m[1]*587+ +m[2]*114)/1000<90;}a=a.parentElement;}return false;}
    function inner(h){var hr=h.getBoundingClientRect(),q=[h],k;for(var d=0;d<4;d++){var nq=[];for(var i=0;i<q.length;i++)for(var j=0;j<q[i].children.length;j++){k=q[i].children[j];var r=k.getBoundingClientRect(),rad=parseFloat(getComputedStyle(k).borderTopLeftRadius);if(rad>0&&Math.abs(r.width-hr.width)<4&&Math.abs(r.height-hr.height)<4)return rad;nq.push(k);}q=nq;}return parseFloat(getComputedStyle(h).borderTopLeftRadius)||14;}
    document.querySelectorAll('.fl-v>.cw,.ftb-tw,.pl-v>.cw').forEach(function(w){if(w.classList.contains('gf-bar'))return;w.classList.add('gf-bar');if(w.classList.contains('cw'))w.style.setProperty('--gfb','#F9F9FA');
      var v=w.parentElement;if(v.classList.contains('fl-v')&&!v.classList.contains('gf-gl')){v.classList.add('gf-gl');v.style.setProperty('--gfg',G[glow]);}});
    document.querySelectorAll('.cl-hwin,.fl-hwin,.op-win,.chp-win,.fs-nf-p').forEach(function(h){if(h.classList.contains('gf')||h.closest('.gc-on,.ph3-on'))return;
      h.classList.add('gf');h.style.setProperty('--gfr',Math.round(inner(h))+'px');var sz=function(){var w=h.getBoundingClientRect().width;if(!w||!h.offsetWidth)return;var k=w/h.offsetWidth;h.style.setProperty('--gfi',Math.min(40,10/k).toFixed(1)+'px');};sz();addEventListener('resize',sz);h.addEventListener('animationend',sz);setTimeout(sz,1500);setTimeout(sz,4000);if(dark(h.parentElement))h.classList.add('gf-n');
      if(h.classList.contains('op-win')){h.classList.add('gf-glw');h.style.setProperty('--gfg',G[dark(h.parentElement)?'night':glow]);}});
    document.querySelectorAll('.fw-win').forEach(function(w){if(w.previousElementSibling&&w.previousElementSibling.classList.contains('gf-rim'))return;
      var r=document.createElement('div');r.className='gf-rim'+(dark(w.parentElement)?' gf-n':'');r.setAttribute('aria-hidden','true');w.parentNode.insertBefore(r,w);
      function fit(){r.style.left=(w.offsetLeft-10)+'px';r.style.top=(w.offsetTop-10)+'px';r.style.width=(w.offsetWidth+20)+'px';r.style.height=(w.offsetHeight+20)+'px';}
      fit();addEventListener('resize',fit);setTimeout(fit,900);});
    document.querySelectorAll('.agr-card,.agr-log,.arb-card').forEach(function(c){if(c.parentElement.classList.contains('gfx'))return;var w=document.createElement('div');w.className='gfx'+(c.classList.contains('agr-log')?' gfx-log':'');
      w.style.setProperty('--gfr',(parseFloat(getComputedStyle(c).borderTopLeftRadius)||18)+'px');c.parentNode.insertBefore(w,c);w.appendChild(c);});
  }
  /* Pass 17: /source step 01 shows just a composer: type, send, the request fills in. */
  function readSk(){
    var spark='<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/>';
    document.querySelectorAll('.fx-read .fx-loop').forEach(function(l){if(l.querySelector('.fxth'))return;var d=document.createElement('div');d.className='fxth';d.setAttribute('aria-hidden','true');
      d.innerHTML='<div class="fxth-h">'+I(spark)+'<span class="fxth-l">Thinking</span><span class="fxth-s"></span></div><div class="fxth-b"></div>';l.appendChild(d);});
  }
  /* Pass 21: the /source hero types letter by letter and then thinks out loud, on the hero's own 27 s timeline. */
  function srcHero(){
    var win=document.querySelector('.cl-hwin');if(!win)return;var tx=win.querySelector('.fx-text');var th=win.querySelector('.fxth');if(!tx||!th||tx.classList.contains('fxt-on'))return;
    var ws=[].slice.call(tx.querySelectorAll(':scope>span:not(.fx-ph)'));if(!ws.length||!ws[0].getAnimations)return;var ref=ws[0].getAnimations()[0];if(!ref)return;
    var D=ref.effect.getComputedTiming().duration;
    function on(a){var k=a.effect.getKeyframes(),s=null,e=null;for(var i=1;i<k.length;i++){if(s===null&&+k[i].opacity===1&&+k[i-1].opacity===0)s=k[i-1].offset*D;else if(s!==null&&e===null&&+k[i].opacity===0)e=k[i-1].offset*D;}return [s,e];}
    var T=[],str='',end=on(ref)[1];
    ws.forEach(function(w,i){var a=w.getAnimations()[0],t0=on(a)[0],t1=i<ws.length-1?on(ws[i+1].getAnimations()[0])[0]:t0+350,txt=w.textContent;for(var j=0;j<txt.length;j++)T.push(t0+(t1-t0)*j/txt.length);str+=txt;});
    var out=document.createElement('span');out.className='fxt';var car=document.createElement('span');car.className='fxt-car';tx.appendChild(out);tx.appendChild(car);tx.classList.add('fxt-on');
    var ph=tx.querySelector('.fx-ph'),clk=(ph&&ph.getAnimations()[0])||(win.querySelector('.fx-rq')&&win.querySelector('.fx-rq').getAnimations()[0]);if(!clk)return;
    var rq=win.querySelector('.fx-rq'),ra=rq&&rq.getAnimations()[0],qs=win.querySelector('.fx-qs'),qa=qs&&qs.getAnimations()[0];
    var R0=(ra?on(ra)[0]:7100)+300,R1=qa?on(qa)[0]:12200;
    var REQ=['Senior backend','Payments team','Stockholm','From 1 Dec','6 months','Kotlin','Swedish and English'];
    var L=['Reading what you wrote and looking for the requirements.','Kotlin and payment flows are must-haves. Swedish and English both matter.','Suppliers will ask about the daily work, what rules someone out and how much experience is needed. I will ask those three now.'];
    var full=L.join('|'),body=th.querySelector('.fxth-b'),lab=th.querySelector('.fxth-l'),sec=th.querySelector('.fxth-s'),last=-1,lastB=-1;
    body.innerHTML='<p></p><div class="fxth-req">'+REQ.map(function(r){return '<span>'+r+'</span>';}).join('')+'</div><p></p><p></p>';
    var P=body.querySelectorAll('p'),C=body.querySelectorAll('.fxth-req span');
    function frame(){var t=((clk.currentTime||0)%D+D)%D;
      var n=0;if(t<end){while(n<T.length&&T[n]<=t)n++;}
      if(n!==last){out.textContent=str.slice(0,n);last=n;}car.style.visibility=(t>T[0]-400&&t<end)?'visible':'hidden';
      var k=t<R0?0:Math.min(full.length,Math.floor((t-R0)/((R1-R0-500)/full.length)));
      if(k!==lastB){lastB=k;var done=k>=full.length,parts=full.slice(0,k).split('|');P[0].textContent=parts[0]||'';P[1].textContent=parts[1]||'';P[2].textContent=parts[2]||'';
        var showReq=Math.max(0,Math.min(REQ.length,Math.floor(((t-R0)/((R1-R0)*.45))*REQ.length)));for(var c=0;c<C.length;c++)C[c].classList.toggle('on',k>0&&c<showReq);
        th.classList.toggle('run',!done);lab.textContent=done?'Thought for '+Math.max(1,Math.round((R1-R0)/1000))+'s':'Thinking';sec.textContent=done||t<R0?'':' '+Math.max(1,Math.ceil((t-R0)/1000))+'s';}
      if(vis)requestAnimationFrame(frame);}
    var vis=false;
    if(reduce||!('IntersectionObserver' in window)){vis=false;frame();return;}
    new IntersectionObserver(function(es){es.forEach(function(e){var was=vis;vis=e.isIntersecting;if(vis&&!was)requestAnimationFrame(frame);});},{threshold:.05}).observe(win);
  }
  /* Pass 21: the Home and /agents hero composer types on load, so something happens while you read. */
  function heroType(){
    document.querySelectorAll('.op-win .fq-type').forEach(function(t){if(t.__ht||t.closest('section.chs'))return;t.__ht=1;
      var Q=[t.textContent.trim()||'A senior backend engineer for payments, 1 Dec','Extend Jonas Ek to 31 March','Compare the three UX designer candidates'],qi=0,tm=null,run=false;
      if(reduce||!('IntersectionObserver' in window))return;
      function later(f,ms){tm=setTimeout(function(){if(run)f();},ms);}
      function type(i){var q=Q[qi];if(i<=q.length){t.textContent=q.slice(0,i);later(function(){type(i+1);},38+Math.random()*40);return;}later(function(){del(q.length);},2400);}
      function del(i){if(i>=0){t.textContent=Q[qi].slice(0,i);later(function(){del(i-1);},16);return;}qi=(qi+1)%Q.length;later(function(){type(1);},450);}
      new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting&&!run){run=true;clearTimeout(tm);t.textContent='';later(function(){type(1);},500);}else if(!e.isIntersecting&&run){run=false;clearTimeout(tm);t.textContent=Q[0];qi=0;}});},{threshold:.1}).observe(t.closest('.op-win')||t);
    });
  }
  function srcComposer(){
    if(!/^\/source(-sundown)?$/.test(location.pathname.replace(/\/+$/,'')))return;
    var w=document.querySelector('.fl-steps>.fl-step .cw.cw-ov');if(!w||w.querySelector('.sc'))return;
    var body=w.querySelector('.cw-body');if(!body)return;w.classList.remove('cw-ov');
    var up='<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',spark='<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/>';
    var Q='A senior backend engineer for payments from 1 Dec, six months, Kotlin a must.';
    var F=[['Role','Senior backend engineer'],['Team','Payments'],['Start','1 Dec'],['Length','6 months'],['Rate band','950–1 100 SEK/h'],['Must-have','Kotlin']];
    body.innerHTML='<div class="sc"><p class="sc-g">Good morning, Anna. What do you need?</p><div class="sc-in"><span class="sc-q"></span><span class="sc-car"></span><span class="sc-send">'+I(up)+'</span></div>'
      +'<div class="sc-under"><div class="sc-chips"><span class="sc-chip">Hire a consultant</span><span class="sc-chip">Extend an assignment</span><span class="sc-chip">Check a rate</span></div>'
      +'<div class="sc-busy">'+I(spark)+'Drafting the request<span class="ag-dots"><i></i><i></i><i></i></span></div>'
      +'<div class="sc-out">'+F.map(function(f){return '<span class="sc-f"><span>'+f[0]+'</span>'+f[1]+'</span>';}).join('')+'</div></div></div>';
    var sc=body.querySelector('.sc'),q=sc.querySelector('.sc-q'),sb=sc.querySelector('.sc-send'),fs=[].slice.call(sc.querySelectorAll('.sc-f'));
    function reset(){q.textContent='';sc.classList.remove('busy','done');fs.forEach(function(f){f.classList.remove('on');});}
    if(reduce||!('IntersectionObserver' in window)){q.textContent=Q;sc.classList.add('done');fs.forEach(function(f){f.classList.add('on');});return;}
    var run=false,tm=[];function at(ms,f){tm.push(setTimeout(function(){if(run)f();},ms));}function clear(){tm.forEach(clearTimeout);tm=[];}
    function cycle(){clear();reset();var t=500;
      for(var i=1;i<=Q.length;i++){(function(i){at(t,function(){q.textContent=Q.slice(0,i);});})(i);t+=30+(i%8?0:50);}
      at(t+400,function(){sb.classList.add('press');});at(t+700,function(){sb.classList.remove('press');q.textContent='';sc.classList.add('busy');});
      t+=1700;at(t,function(){sc.classList.remove('busy');sc.classList.add('done');});
      fs.forEach(function(f,i){at(t+150+i*200,function(){f.classList.add('on');});});
      at(t+150+fs.length*200+4000,cycle);}
    new IntersectionObserver(function(es){es.forEach(function(e){
      if(e.isIntersecting&&!run){run=true;cycle();}else if(!e.isIntersecting&&run){run=false;clear();reset();}
    });},{threshold:.35}).observe(sc);
  }
  /* Pass 17: every How-it-works window keeps moving a little: replay its rows every few seconds while in view. */
  function cwReplay(){
    if(reduce||!('IntersectionObserver' in window))return;
    document.querySelectorAll('.fl-v>.cw.ca').forEach(function(w){
      var iv=null;
      new IntersectionObserver(function(es){es.forEach(function(e){
        if(e.isIntersecting&&!iv){iv=setInterval(function(){if(!w.classList.contains('ca-on'))return;w.classList.remove('ca-on');void w.offsetWidth;w.classList.add('ca-on');},8500);}
        else if(!e.isIntersecting&&iv){clearInterval(iv);iv=null;}
      });},{threshold:.3}).observe(w);
    });
  }
  /* Pass 13: /agents, before "Every agent in one place": a rule in plain words, and who it reaches before anything runs. */
  function ruleCard(){
    if(!/^\/agents$/.test(location.pathname.replace(/\/+$/,'')))return;
    var agf=document.querySelector('section.agf');if(!agf||document.querySelector('.arb'))return;
    var s=document.createElement('section');s.className='arb';
    s.innerHTML='<div class="arb-in"><div><div class="arb-eb">Automate · rules</div><h2>Set the rule once. Agents follow it.</h2><p>Say when an agent should act, in plain words. Fill shows who it reaches before anything runs.</p></div></div>';
    var rc=arbBuild();s.firstChild.appendChild(rc.el);
    agf.parentNode.insertBefore(s,agf);
    if(reduce||!('IntersectionObserver' in window)){rc.all();return;}
    new IntersectionObserver(function(es,o){es.forEach(function(e){if(e.isIntersecting){rc.run();o.disconnect();}});},{threshold:.4}).observe(rc.el);
  }
  /* The Sana-style rule card (edge beam): conditions appear one by one, the reach counts up, Confirm is pressed. /agents and /product use it. */
  function arbBuild(){
    var zap='<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>';
    var plus='<path d="M5 12h14"/><path d="M12 5v14"/>';
    var c=document.createElement('div');c.className='arb-card';c.setAttribute('aria-hidden','true');
    c.innerHTML='<div class="arb-hd">'+I(zap)+'New agent rule</div>'
      +'<div class="arb-conds"><span class="arb-chip">Invoice <i>is</i> 10 % off hours</span><span class="arb-and">and</span><span class="arb-chip">Amount <i>is</i> over 50 000 SEK</span><span class="arb-and">and</span><span class="arb-chip">Supplier <i>is</i> any</span><span class="arb-plus">'+I(plus)+'</span></div>'
      +'<div class="arb-who"><span class="arb-av"><span style="background:#1F3B57">AB</span><span style="background:#3F6B50">JL</span><span style="background:#8A3B5C">MF</span></span><span><b>Anna Berg, Johan Lind</b> and <b class="arb-n">14</b> other managers will be reminded</span></div>'
      +'<div class="arb-act"><span class="arb-b">Discard</span><span class="arb-b ink">Confirm</span></div>';
    var seq=[].slice.call(c.querySelectorAll('.arb-chip,.arb-and,.arb-plus')),who=c.querySelector('.arb-who'),act=c.querySelector('.arb-act'),ok=c.querySelector('.arb-b.ink'),num=c.querySelector('.arb-n');
    var tm=[],iv=null;
    function stop(){tm.forEach(clearTimeout);tm=[];if(iv)clearInterval(iv);iv=null;ok.classList.remove('press');}
    function all(){stop();seq.forEach(function(e){e.classList.add('on');});who.classList.add('on');act.classList.add('on');num.textContent='14';}
    function run(){stop();seq.concat([who,act]).forEach(function(e){e.classList.remove('on');});num.textContent='0';
      seq.forEach(function(e,i){tm.push(setTimeout(function(){e.classList.add('on');},300+i*260));});
      var t0=300+seq.length*260+200;tm.push(setTimeout(function(){who.classList.add('on');var v=0;iv=setInterval(function(){v+=2;num.textContent=Math.min(v,14);if(v>=14){clearInterval(iv);iv=null;}},45);},t0));
      tm.push(setTimeout(function(){act.classList.add('on');},t0+700));tm.push(setTimeout(function(){ok.classList.add('press');},t0+1500));tm.push(setTimeout(function(){ok.classList.remove('press');},t0+1800));}
    return {el:c,run:run,all:all,stop:stop};
  }
  /* /product "Everything in Fill, in one list": Request from a sentence shows the home request carousel, Agent log shows the rule card.
     The page's own auto-cycle switches every 5.5 s, too short for the carousel, so the list is re-mounted and cycled here: each picture stays up as long as its animation. */
  function productList(){
    var g0=document.querySelector('.pl-grid');if(!g0||g0.__pl)return;
    var g=g0.cloneNode(true);g0.parentNode.replaceChild(g,g0);g.__pl=1;
    document.querySelectorAll('.cl').forEach(function(c){if(c.querySelector(':scope>.cl-hero .cl-og')&&!c.classList.contains('fl-page'))c.classList.add('pl-page');document.body.classList.add('pl-glow');});
    var v0=g.querySelector('.pl-v0'),v5=g.querySelector('.pl-v5');if(!v0||!v5)return;
    v0.classList.add('pl-gc');v0.innerHTML='';var gc=gcBuild(v0);
    v5.classList.add('pl-arb');v5.innerHTML='';
    var st=g.querySelector('.pl-stage');if(st&&!st.querySelector('.pl-bgs'))st.insertAdjacentHTML('afterbegin','<div class="pl-bgs" aria-hidden="true"><i class="pl-bg-dawn"></i><i class="pl-bg-day"></i><i class="pl-bg-night"></i></div>');
    var rc=arbBuild(),gw=document.createElement('div');gw.className='gfx';gw.style.setProperty('--gfr','20px');gw.appendChild(rc.el);v5.appendChild(gw);
    var auto=g.classList.contains('pl-auto');
    if(!auto||reduce||!gc.anim||!('IntersectionObserver' in window)){rc.all();return;}
    var items=[].slice.call(g.querySelectorAll('.pl-i')),views=[].slice.call(g.querySelectorAll('.pl-v')),cur=0,tm=null,seen=false;
    var P=plPlayers(views);
    function play(k){if(k===0){gc.stop();gc.start();}else gc.stop();if(k===5)rc.run();else rc.stop();P.forEach(function(p,j){if(!p)return;if(j===k)p.run();else p.stop();});}
    function dwell(k){return k===0?Math.max(5500,gc.len()+2800):k===5?7000:5500;}
    function show(n){cur=(n+items.length)%items.length;items.forEach(function(a,k){a.classList.toggle('is-on',k===cur);});views.forEach(function(v,k){v.classList.toggle('is-on',k===cur);});play(cur);}
    function sched(){clearTimeout(tm);tm=setTimeout(function(){if(!g.matches(':hover'))show(cur+1);sched();},dwell(cur));}
    function halt(){clearTimeout(tm);tm=null;gc.stop();rc.stop();P.forEach(function(p){if(p)p.stop();});}
    items.forEach(function(a,k){a.addEventListener('mouseenter',function(){if(cur!==k){show(k);sched();}});});
    g.addEventListener('mouseleave',function(){show(cur);sched();});
    new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){if(!seen||!tm){seen=true;show(cur);sched();}}else halt();});},{threshold:.35}).observe(g);
  }
  /* /product hero (his pick F): three glass windows fanned, one per job, each playing its own loop: Find types a request, Control grows the timeline and checks the contract,
     Automate logs the agents' morning. Replaces the composer that /source already shows. Only while in view. */
  function productHero(){
    var hw=document.querySelector('.cl.pl-page .cl-stage>.cl-hwin');if(!hw||hw.classList.contains('ph3-on'))return;
    hw.classList.add('ph3-on');
    /* the customer logo strip moves up, straight under the three windows */
    var hero=hw.closest('section.cl-hero'),lgo=document.querySelector('img.lgo'),lgs=lgo&&(lgo.closest('.cl-logos')||lgo.closest('section'));
    if(hero&&lgs&&!lgs.contains(hero)&&hero.nextElementSibling!==lgs){hero.parentNode.insertBefore(lgs,hero.nextSibling);lgs.classList.add('ph3-logos');}
    var tick='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
    var rows=[['Elin Berg','Sigma IT',4,62,'#D9DBFE'],['Jonas Ek','Knowit',10,58,'#FBE3C6'],['Omar Haddad','Sigma IT',30,96,'#6E6DC6'],['Pia Lund','Netlight',48,98,'#D9DBFE'],['Karl Ström','Knowit',20,90,'#D9DBFE']];
    var log=[['07:00','<b>Timesheet chaser</b> reminded 4 consultants'],['08:12','<b>Invoice match</b> matched Knowit 2214 to 168 h'],['09:30','<b>Supplier follow-up</b> nudged Randstad'],['11:40','<b>Extension watch</b> started Jonas Ek']];
    var Q='A senior backend engineer for payments, 1 Dec';
    hw.innerHTML='<div class="ph3" aria-hidden="true">'
      +'<div class="ph3-c ph3-l"><div class="ph3-in"><span class="ph3-k ph3-dawn">Find</span><b class="ph3-h">Good morning, Anna. Who do you want to hire?</b><div class="ph3-q"><span class="ph3-t"></span><i class="ph3-car"></i></div><div class="ph3-st">'+tick+'Request drafted · 3 suppliers picked</div></div></div>'
      +'<div class="ph3-c ph3-m"><div class="ph3-in"><span class="ph3-k ph3-day">Control</span><b class="ph3-h">Consultants · 8 active</b><div class="ph3-tl">'+rows.map(function(r){return '<span class="ph3-n">'+r[0]+'<small> · '+r[1]+'</small></span><span class="ph3-lane"><i style="left:'+r[2]+'%;right:'+(100-r[3])+'%;background:'+r[4]+'"></i></span>';}).join('')+'</div><div class="ph3-st">'+tick+'Contract for Omar Haddad matches the request</div></div></div>'
      +'<div class="ph3-c ph3-r"><div class="ph3-in"><span class="ph3-k ph3-night">Automate</span><b class="ph3-h">Agent log · today</b><div class="ph3-log">'+log.map(function(l){return '<div class="ph3-lr"><span>'+l[0]+'</span><i></i><span>'+l[1]+'</span></div>';}).join('')+'</div></div></div></div>';
    var q=hw.querySelector('.ph3-t'),sts=[].slice.call(hw.querySelectorAll('.ph3-st')),bars=[].slice.call(hw.querySelectorAll('.ph3-lane i')),lr=[].slice.call(hw.querySelectorAll('.ph3-lr'));
    var all=sts.concat(bars,lr);
    function reset(){q.textContent='';all.forEach(function(e){e.classList.remove('on');});}
    function final(){q.textContent=Q;all.forEach(function(e){e.classList.add('on');});}
    if(reduce||!('IntersectionObserver' in window)){final();return;}
    var run=false,tm=[];function at(ms,f){tm.push(setTimeout(function(){if(run)f();},ms));}function clear(){tm.forEach(clearTimeout);tm=[];}
    function cycle(){clear();reset();var t=500;
      for(var i=1;i<=Q.length;i++){(function(i){at(t,function(){q.textContent=Q.slice(0,i);});})(i);t+=38;}
      t+=350;at(t,function(){sts[0].classList.add('on');});
      t+=500;bars.forEach(function(b,i){at(t+i*220,function(){b.classList.add('on');});});
      t+=bars.length*220+400;at(t,function(){sts[1].classList.add('on');});
      t+=500;lr.forEach(function(r,i){at(t+i*450,function(){r.classList.add('on');});});
      t+=lr.length*450+3200;at(t,cycle);}
    reset();
    new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting&&!run){run=true;cycle();}else if(!e.isIntersecting&&run){run=false;clear();final();}});},{threshold:.2}).observe(hw);
  }
  /* /product one-list: every picture moves when shown (his standing rule). Shortlist rows and must-haves fill in; the contract is checked row by row and Acando is asked to correct the rate;
     the extension is sent for approval; invoices are matched one by one. Each player resets when hidden and replays when shown. */
  function plPlayers(views){
    var Q=function(v,s){return [].slice.call(v.querySelectorAll(s));},P=[];
    var tick='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
    function mk(v,prep,steps){v.classList.add('pl-anim');var tm=[];prep();
      return {run:function(){tm.forEach(clearTimeout);tm=[];prep();var t=0;steps.forEach(function(s){t+=s[0];tm.push(setTimeout(s[1],t));});},
        stop:function(){tm.forEach(clearTimeout);tm=[];prep();}};}
    function on(e){e.classList.add('on');}
    function px(list,pop){list.forEach(function(e){e.classList.add('px');if(pop)e.classList.add('pxp');});}
    var v1=views[1];if(v1&&v1.querySelector('.sl')){
      var rows=Q(v1,'.sl-r:not(.sl-hd)'),pill=v1.querySelector('.pn-h .pill'),st=[];px(rows);if(pill)px([pill],1);
      rows.forEach(function(r,i){st.push([i?650:450,function(){on(r);}]);Q(r,'.mh i:not(.no)').forEach(function(d){st.push([110,function(){on(d);}]);});});
      if(pill)st.push([350,function(){on(pill);}]);
      P[1]=mk(v1,function(){rows.concat(pill?[pill]:[]).forEach(function(e){e.classList.remove('on');});Q(v1,'.mh i').forEach(function(d){d.classList.remove('on');});},st);}
    var v2=views[2];if(v2&&v2.querySelector('.cmp')){
      var cr=Q(v2,'.cmp-r:not(.cmp-hd)'),marks=Q(v2,'.cmp-r:not(.cmp-hd)>:last-child'),b2=v2.querySelector('.cmp-act .cb.ink'),bad=v2.querySelector('.cmp-r.bad'),t2=b2?b2.textContent:'',s2=[];
      if(bad)bad.classList.add('pl-bad');px(cr);px(marks,1);
      cr.forEach(function(r,i){s2.push([i?300:400,function(){on(r);}]);});
      marks.forEach(function(m){s2.push([380,function(){on(m);var r=m.parentNode;if(r.classList.contains('pl-bad'))r.classList.add('bad');}]);});
      if(b2){s2.push([900,function(){b2.classList.add('press');}]);s2.push([240,function(){b2.classList.remove('press');b2.classList.add('sent');b2.innerHTML=tick+'Sent to Acando';}]);}
      P[2]=mk(v2,function(){cr.concat(marks).forEach(function(e){e.classList.remove('on');});if(bad)bad.classList.remove('bad');if(b2){b2.classList.remove('press','sent');b2.textContent=t2;}},s2);}
    var v3=views[3];if(v3&&v3.querySelector('.ext')){
      var kv=Q(v3,'.kv>div'),dec=v3.querySelector('.dec'),b3=dec&&dec.querySelector('.cb.ink'),p3=v3.querySelector('.pn-h .pill'),t3=b3?b3.textContent:'',pt=p3?p3.textContent:'',s3=[];
      px(kv);if(dec)px([dec]);
      kv.forEach(function(r,i){s3.push([i?260:400,function(){on(r);}]);});
      if(dec)s3.push([350,function(){on(dec);}]);
      if(b3){s3.push([1000,function(){b3.classList.add('press');}]);s3.push([240,function(){b3.classList.remove('press');b3.classList.add('sent');b3.innerHTML=tick+'Sent for approval';if(p3)p3.textContent='Waiting for approval';}]);}
      P[3]=mk(v3,function(){kv.concat(dec?[dec]:[]).forEach(function(e){e.classList.remove('on');});if(b3){b3.classList.remove('press','sent');b3.textContent=t3;}if(p3)p3.textContent=pt;},s3);}
    var v4=views[4];if(v4&&v4.querySelector('.inv')){
      var ir=Q(v4,'.inv-r:not(.inv-hd)'),ok=Q(v4,'.inv-r .okp'),s4=[];px(ir);px(ok,1);
      ir.forEach(function(r,i){s4.push([i?550:400,function(){on(r);}]);var o=r.querySelector('.okp');if(o)s4.push([450,function(){on(o);}]);});
      P[4]=mk(v4,function(){ir.concat(ok).forEach(function(e){e.classList.remove('on');});},s4);}
    return P;
  }
  /* Compare pages: the pictures move (standing rule). "Why every enterprise needs a VMS" cycles its four pins; the three cards tick the RFP steps on,
     bring the consultants in and grow the spend bars, then replay. Runs only while in view. */
  function compareLinks(){
    /* Menu Compare column: MSP, Fieldglass, eWork, Magnit, What is a VMS?, All comparisons. Beeline leaves the menu (its page and footer link stay).
       "All comparisons" goes to /compare: last link in the menu's Compare column and after the last "Changing from" link in the footer */
    [].forEach.call(document.querySelectorAll('.mn-col'),function(c){var l=c.querySelector('.mn-lbl');
      if(!l||l.textContent.trim()!=='Compare')return;
      function mk(h,b,s){var a=document.createElement('a');a.className='mn-a';a.href=h;a.innerHTML='<b>'+b+'</b><span>'+s+'</span>';return a;}
      var bl=c.querySelector('a[href="/compare/beeline-alternative"]');if(bl)bl.parentNode.removeChild(bl);
      if(!c.querySelector('a[href="/compare/ework-alternative"]')){var vms=c.querySelector('a[href="/compare/what-is-a-vms"]');
        [mk('/compare/ework-alternative','Fill or eWork','Talk to suppliers directly, no broker margin'),
         mk('/compare/magnit-alternative','Fill or Magnit','Run it yourself, no outsourced program')]
        .forEach(function(a){if(vms)c.insertBefore(a,vms);else c.appendChild(a);});}
      if(!c.querySelector('a[href="/compare"]'))c.appendChild(mk('/compare','All comparisons','VMS, brokers, ATS and HR systems side by side'));});
    var fl=[].filter.call(document.querySelectorAll('footer a, [class*="footer"] a'),function(a){return /^Changing from /.test(a.textContent.trim());});
    if(!fl.length)return;var last=fl[fl.length-1],box=last.parentNode;if(box.querySelector('a[href="/compare"]'))return;
    var n=last.cloneNode(true);n.setAttribute('href','/compare');n.removeAttribute('aria-current');n.classList.remove('w--current');
    var w=document.createTreeWalker(n,NodeFilter.SHOW_TEXT,null,false),t,done=false;
    while((t=w.nextNode())){if(!done&&/Changing from/.test(t.nodeValue)){t.nodeValue='All comparisons';done=true;}else if(done&&t.nodeValue.trim())t.nodeValue='';}
    box.insertBefore(n,last.nextSibling);
  }
  function cmpHub(){
    var h=document.querySelector('.cmh');if(!h||h.classList.contains('cmh-js'))return;
    document.body.classList.add('pl-glow');
    var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(rm||!('IntersectionObserver' in window))return;
    h.classList.add('cmh-js');
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);
      if(e.target.classList.contains('cmh-grid')){[].forEach.call(e.target.querySelectorAll('.cmh-card'),function(c,i){setTimeout(function(){c.classList.add('on');},90*i);});}
      else{[].forEach.call(e.target.querySelectorAll('.cmh-y'),function(y,i){setTimeout(function(){y.classList.add('on');},180+220*i);});}
    });},{threshold:.2});
    [].forEach.call(h.querySelectorAll('.cmh-grid,.cmh-tb'),function(el){io.observe(el);});
  }
  function cmpMotion(){
    if(reduce||!('IntersectionObserver' in window))return;
    function watch(el,start,stop){new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)start();else stop();});},{threshold:.3}).observe(el);}
    document.querySelectorAll('.cmp-twocol-figure').forEach(function(f){if(f.__m)return;f.__m=1;
      var pins=[].slice.call(f.querySelectorAll('.cmp-twocol-pin'));if(pins.length<2)return;var i=Math.max(0,pins.findIndex(function(p){return p.classList.contains('cmp-twocol-pin-active');})),iv=null;
      function step(){pins.forEach(function(p,j){p.classList.toggle('cmp-twocol-pin-active',j===i);});i=(i+1)%pins.length;}
      watch(f,function(){if(!iv){step();iv=setInterval(step,1900);}},function(){clearInterval(iv);iv=null;});});
    document.querySelectorAll('.cmp-card-mock').forEach(function(m){if(m.__m)return;m.__m=1;
      var its=[].slice.call(m.querySelectorAll('.cmp-card-line,.cmp-card-row,.cmp-card-bar'));if(!its.length)return;m.classList.add('cmpx');
      var tm=[],run=false;function clear(){tm.forEach(clearTimeout);tm=[];}
      function cycle(){clear();its.forEach(function(e){e.classList.remove('on');});
        its.forEach(function(e,k){tm.push(setTimeout(function(){e.classList.add('on');},350+k*(e.classList.contains('cmp-card-bar')?160:420)));});
        tm.push(setTimeout(function(){if(run)cycle();},350+its.length*420+3600));}
      watch(m,function(){if(!run){run=true;cycle();}},function(){run=false;clear();its.forEach(function(e){e.classList.add('on');});});});
  }
  /* Name the footer logo link for screen readers. Mark the nav as scrolled past the top on every page. Pages with their own frosted or dark scrolled nav (home, Source, Control, Agents) style .hv-scrolled; elsewhere the class does nothing. */
  function navScrolled(){
    document.querySelectorAll('a.f-footer-logo').forEach(function(a){if(!a.getAttribute('aria-label')&&!a.textContent.trim())a.setAttribute('aria-label','Fill home');});
    var nav=document.querySelector('.nav-v2');if(!nav||nav.__ns)return;nav.__ns=1;var tick=false;
    function upd(){nav.classList.toggle('hv-scrolled',(window.pageYOffset||0)>24);tick=false;}
    addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(upd);}},{passive:true});upd();
  }
  /* Customer quote cards open that customer's story. Matched on the logo, so new cards without a story page stay as they are. */
  /* Homepage quote carousel (radio-driven, inside the big homepage embed): add an SSAB slide as the fourth card and wire its arrows. */
  function tmsSsab(){
    var sec=document.querySelector('section.tms');if(!sec||sec.querySelector('#tms3'))return;
    var r2=sec.querySelector('#tms2'),track=sec.querySelector('.tms-track');if(!r2||!track||track.children.length!==3)return;
    var r3=r2.cloneNode(false);r3.id='tms3';r3.checked=false;r3.removeAttribute('checked');r2.parentNode.insertBefore(r3,r2.nextSibling);
    var s0=track.children[0],s2=track.children[2],s3=s0.cloneNode(true);
    var go=s3.querySelector('.tms-go');if(go)go.remove();
    var co=s3.querySelector('.tms-co');co.className='tms-co';co.textContent='SSAB';
    s3.querySelector('.tms-q').textContent='"Fill does more than give us control of the process. It helps managers move every request forward, catches issues early and takes away much of the follow-up that used to sit with procurement."';
    var who=s3.querySelector('.tms-who');who.querySelector('b').textContent='Ufuk Atag\u00fcn';who.querySelector('span').textContent='Project buyer, SSAB';
    var im=s3.querySelector('.tms-img img');if(im){im.removeAttribute('srcset');im.src='https://cdn.prod.website-files.com/6772630c34939788e26d4ae6/6a0ad1a72a4776be6365aa55_ChatGPT%20Image%2018%20maj%202026%2010_45_03%20(3).webp';im.alt='';}
    var nav=function(sl,prev,next){var l=sl.querySelectorAll('.tms-nav label');if(l.length>1){l[0].setAttribute('for',prev);l[1].setAttribute('for',next);}};
    nav(s3,'tms2','tms0');nav(s2,'tms1','tms3');nav(s0,'tms3','tms1');
    track.appendChild(s3);
  }
  function tmsLinks(){
    var M=[[/green\s*cargo/i,'/customers/green-cargo'],[/s(ö|o)derberg/i,'/customers/soderberg-partners'],[/noba/i,'/noba-bank'],[/ssab/i,'/customers/ssab']];
    document.querySelectorAll('.tms-card').forEach(function(c){if(c.querySelector('.tms-go'))return;var co=c.querySelector('.tms-co');if(!co)return;
      var img=co.querySelector('img'),n=(img&&img.alt)||co.textContent.trim();
      for(var i=0;i<M.length;i++){if(M[i][0].test(n)){var a=document.createElement('a');a.className='tms-go';a.href=M[i][1];a.setAttribute('aria-label','Read the '+n+' story');c.appendChild(a);c.classList.add('tms-lk');return;}}});
  }
  /* Footer: "Ask your AI about Fill" opens the visitor's own assistant with a prompt that points it at fill.work. */
  function askAi(){
    var grid=document.querySelector('.f-footer-regular .f-footer-grid');if(!grid||document.querySelector('.fx-askai'))return;
    var q=encodeURIComponent('Explain what Fill (fill.work) does, its main products, and who it is for. Use https://www.fill.work as the source and link to the relevant pages.');
    /* Brand marks from Simple Icons 15.16.1 (CC0), drawn in the footer's link colour. */
    var P={'ChatGPT':'M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z','Claude':'m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z','Perplexity':'M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z','Gemini':'M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81'};
    var L=[['ChatGPT','https://chatgpt.com/?q='+q],['Claude','https://claude.ai/new?q='+q],['Perplexity','https://www.perplexity.ai/search/new?q='+q],['Gemini','https://www.google.com/search?udm=50&q='+q]];
    var d=document.createElement('div');d.className='fx-askai';
    d.innerHTML='<span class="fx-askai-l">Ask your AI about Fill</span><span class="fx-askai-row">'+L.map(function(x){return '<a class="fx-askai-a" href="'+x[1]+'" target="_blank" rel="noopener" title="'+x[0]+'" aria-label="Get an AI summary of Fill in '+x[0]+'"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="'+P[x[0]]+'"/></svg></a>';}).join('')+'</span>';
    grid.parentNode.insertBefore(d,grid.nextSibling);
  }
  /* Footer: the one legal link, Privacy policy, on every page (the "Sundown page fixes" embed adds the same row on the pages that carry it). */
  function privacyRow(){
    var c=document.querySelector('.footer-a .text-block-245');if(!c||document.querySelector('.sdf-legal'))return;
    var n=document.createElement('nav');n.className='sdf-legal';n.setAttribute('aria-label','Legal');
    var a=document.createElement('a');a.href='/privacy';a.textContent='Privacy policy';n.appendChild(a);c.parentNode.appendChild(n);
  }
  ready(function(){[navScrolled,hubHits,gaps,agentCheck,glassCarousel,ruleCard,productList,productHero,cmpHub,compareLinks,cmpMotion,srcComposer,readSk,srcHero,heroType,glassFrames,tmsSsab,customerLogos,tmsLinks,askAi,privacyRow,cwReplay,sharpImgs].forEach(function(f){try{f();}catch(e){}});setTimeout(function(){try{sharpImgs();glassFrames();customerLogos();tmsLinks();privacyRow();}catch(e){}},1200);addEventListener('load',function(){try{sharpImgs();}catch(e){}});});
})();
