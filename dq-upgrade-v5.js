(()=>{
  if(window.__DQ_UPGRADE_V5__) return;
  window.__DQ_UPGRADE_V5__=true;

  DEFAULT_STATE.version=5;
  DEFAULT_STATE.theme='auto';
  if(!state.theme) state.theme='auto';
  state.version=5;

  const LESSON_VERSIONS={identity:2,survival:1};
  function lessonStudied(id){
    const target=LESSON_VERSIONS[id]||1;
    const value=state.lessonDone[id];
    return value===target || (target===1 && value===true);
  }

  const systemDark=window.matchMedia('(prefers-color-scheme: dark)');
  function resolvedTheme(){return state.theme==='auto'?(systemDark.matches?'dark':'light'):state.theme}
  function themeBadge(){return state.theme==='auto'?'AUTO':state.theme==='light'?'☀':'☾'}
  function applyTheme(){
    const t=resolvedTheme();
    document.documentElement.dataset.theme=t;
    document.documentElement.style.colorScheme=t;
    const meta=document.querySelector('meta[name="theme-color"]');
    if(meta) meta.setAttribute('content',t==='light'?'#f2eee6':'#080b11');
  }
  function cycleTheme(){
    state.theme=state.theme==='auto'?'light':state.theme==='light'?'dark':'auto';
    save();applyTheme();renderHome();showToast(`Thème : ${state.theme==='auto'?'Auto':state.theme==='light'?'Clair':'Sombre'}`);
  }
  window.cycleTheme=cycleTheme;
  systemDark.addEventListener?.('change',()=>{if(state.theme==='auto'){applyTheme();renderHome()}});
  applyTheme();

  const identity=MODULES.find(m=>m.id==='identity');
  if(identity) Object.assign(identity,{icon:'ICH',title:'Ich & Austauschprofil',desc:'Te présenter naturellement : origine, langues, école, intérêts, séjour et projets.'});
  if(!MODULES.some(m=>m.id==='survival')){
    const i=Math.max(1,MODULES.findIndex(m=>m.id==='identity')+1);
    MODULES.splice(i,0,{id:'survival',icon:'DE+',title:'Daily Survival',desc:'Saluer, demander, faire répéter, comprendre et basculer vers l’anglais si nécessaire.'});
  }

  LESSONS.identity={
    intro:'Objectif Allemagne : pouvoir te présenter sans réciter trois phrases scolaires. Tu dois pouvoir expliquer qui tu es, ce que tu parles, pourquoi tu es là et relancer la conversation.',
    points:[
      'Origine : Ich komme aus Frankreich. / Ich wohne in …',
      'Langues : Ich spreche Französisch, Japanisch und Englisch. Ich lerne Deutsch.',
      'Intérêts : Ich interessiere mich für … / In meiner Freizeit …',
      'Séjour : Ich bin für eine Woche hier. / Ich mache einen Schüleraustausch.',
      'Projet : Später möchte ich … / Ich würde gern …',
      'Phrase utile : Ich lerne noch Deutsch, aber ich versuche so viel wie möglich auf Deutsch zu sprechen.'
    ],
    grammar:[
      'Présent : ich komme, ich wohne, ich spreche, ich lerne.',
      'V2 : Heute spreche ich Deutsch. Le verbe conjugué reste en 2e position.',
      'Modal : ich kann / ich möchte / ich würde gern + infinitif en fin de phrase.',
      'weil / dass : le verbe conjugué part à la fin de la subordonnée.'
    ],
    vocab:[
      ['ich komme aus …','je viens de …'],['ich wohne in …','j’habite à …'],['ich spreche …','je parle …'],['ich lerne Deutsch','j’apprends l’allemand'],
      ['der Schüleraustausch','l’échange scolaire'],['die Gastfamilie','la famille d’accueil'],['eine Woche','une semaine'],['ein bisschen','un peu'],
      ['ich interessiere mich für …','je m’intéresse à …'],['in meiner Freizeit','pendant mon temps libre'],['später','plus tard'],['so viel wie möglich','autant que possible'],
      ['neugierig','curieux'],['motiviert','motivé'],['kreativ','créatif'],['lernfreudig','qui aime apprendre']
    ],
    examples:[
      ['Ich komme aus Frankreich und ich spreche Französisch, Japanisch und Englisch.','Je viens de France et je parle français, japonais et anglais.'],
      ['Ich bin für eine Woche hier und mache einen Schüleraustausch.','Je suis ici pour une semaine dans le cadre d’un échange scolaire.'],
      ['Ich lerne noch Deutsch, aber ich versuche so viel wie möglich auf Deutsch zu sprechen.','J’apprends encore l’allemand, mais j’essaie de parler allemand autant que possible.'],
      ['Ich interessiere mich für Technologie, Psychologie und Naturwissenschaften.','Je m’intéresse à la technologie, à la psychologie et aux sciences.']
    ]
  };

  LESSONS.survival={
    intro:'Le kit qui évite de passer directement à l’anglais au premier obstacle. Le but n’est pas de tout comprendre : c’est de savoir maintenir la conversation.',
    points:[
      'Informel avec un jeune : Kannst du …? / Sprich bitte langsamer.',
      'Poli avec un adulte : Können Sie …? / Sprechen Sie bitte langsamer.',
      'Faire répéter : Kannst du das bitte wiederholen?',
      'Demander un mot : Wie sagt man … auf Deutsch? / Was bedeutet …?',
      'Gagner du temps : Einen Moment, bitte. / Gute Frage.',
      'Plan B : Mein Deutsch ist noch nicht perfekt. Können wir vielleicht Englisch sprechen?'
    ],
    grammar:[
      'Question oui/non : verbe en première position : Sprichst du Englisch?',
      'Question avec mot interrogatif : Wie heißt du? Wo ist …? Was bedeutet …?',
      'du = camarades / jeunes ; Sie = adultes inconnus, personnel, situations formelles.',
      'können / dürfen / möchten : modal conjugué + infinitif à la fin.'
    ],
    vocab:[
      ['Hallo / Guten Morgen','salut / bonjour le matin'],['Danke / Vielen Dank','merci / merci beaucoup'],['Bitte','s’il te/vous plaît ; de rien'],['Entschuldigung','excuse-moi / excusez-moi'],
      ['Kein Problem','pas de problème'],['Natürlich','bien sûr'],['Gern / Gerne','volontiers'],['Echt?','vraiment ?'],['Ach so','ah d’accord'],['Genau','exactement'],['Stimmt','c’est vrai'],['Gute Frage','bonne question'],
      ['wiederholen','répéter'],['langsamer','plus lentement'],['verstehen','comprendre'],['bedeuten','signifier'],['helfen','aider'],['brauchen','avoir besoin de'],
      ['Ich verstehe nicht.','Je ne comprends pas.'],['Ich habe das nicht verstanden.','Je n’ai pas compris ça.'],['Kannst du das bitte wiederholen?','Tu peux répéter, s’il te plaît ?'],['Können Sie das bitte wiederholen?','Pouvez-vous répéter, s’il vous plaît ?'],
      ['Wie sagt man … auf Deutsch?','Comment dit-on … en allemand ?'],['Was bedeutet das?','Qu’est-ce que ça veut dire ?'],['Ich brauche Hilfe.','J’ai besoin d’aide.'],['Können wir vielleicht Englisch sprechen?','Est-ce qu’on peut peut-être parler anglais ?']
    ],
    examples:[
      ['Entschuldigung, kannst du das bitte wiederholen?','Excuse-moi, tu peux répéter s’il te plaît ?'],
      ['Ich verstehe ein bisschen, aber bitte sprich langsamer.','Je comprends un peu, mais parle plus lentement s’il te plaît.'],
      ['Wie sagt man „emploi du temps“ auf Deutsch?','Comment dit-on « emploi du temps » en allemand ?'],
      ['Mein Deutsch ist noch nicht perfekt, aber ich möchte es versuchen.','Mon allemand n’est pas encore parfait, mais je veux essayer.']
    ]
  };

  const INTERESTS=[['Technologie','la technologie'],['Psychologie','la psychologie'],['Musik','la musique'],['Sport','le sport'],['Naturwissenschaften','les sciences'],['Sprachen','les langues']];
  const REACTIONS=[['Echt?','Vraiment ?'],['Ach so.','Ah d’accord.'],['Genau.','Exactement.'],['Stimmt.','C’est vrai.'],['Gute Frage.','Bonne question.']];
  const SURVIVAL=[['Danke','merci'],['Vielen Dank','merci beaucoup'],['Entschuldigung','excuse-moi / excusez-moi'],['Kein Problem','pas de problème'],['Natürlich','bien sûr'],['Gern','volontiers']];
  const add=(id,module,level,label,gen)=>{if(!FAMILIES.some(f=>f.id===id)) family(id,module,level,label,gen)};

  add('id.origin','identity','A1+','Origine',()=>{const x=pick([['France','Frankreich'],['Japon','Japan'],['Allemagne','Deutschland']]);return inputQ('id.origin','identity','Traduis naturellement.','Je viens de '+x[0]+'.',`Ich komme aus ${x[1]}.`,null,'Pour l’origine : kommen aus + pays.')});
  add('id.languages','identity','A2','Langues personnelles',()=>inputQ('id.languages','identity','Présente tes langues.','Je parle français, japonais et anglais. J’apprends l’allemand.',`Ich spreche Französisch, Japanisch und Englisch. Ich lerne Deutsch.`,['Ich spreche Französisch, Japanisch und Englisch und lerne Deutsch.'],'Les noms de langues prennent une majuscule en allemand.'));
  add('id.exchange.week','identity','A2','Séjour d’une semaine',()=>pick([
    inputQ('id.exchange.week','identity','Traduis pour ton échange.','Je suis ici pour une semaine.',`Ich bin für eine Woche hier.`,null,'für + accusatif ; eine Woche exprime la durée.'),
    inputQ('id.exchange.week','identity','Traduis pour ton échange.','Je participe à un échange scolaire.',`Ich mache einen Schüleraustausch.`,['Ich bin bei einem Schüleraustausch.'],'Schüleraustausch = échange scolaire.')
  ]));
  add('id.interest','identity','A2','Parler de ses intérêts',()=>{const x=pick(INTERESTS);return inputQ('id.interest','identity','Traduis en allemand.','Je m’intéresse à '+x[1]+'.',`Ich interessiere mich für ${x[0]}.`,null,'sich interessieren für + accusatif.')});
  add('id.learning','identity','A2+','Montrer que tu apprends',()=>inputQ('id.learning','identity','Phrase-clé pour l’Allemagne.','J’apprends encore l’allemand, mais j’essaie de parler allemand autant que possible.',`Ich lerne noch Deutsch, aber ich versuche so viel wie möglich auf Deutsch zu sprechen.`,['Ich lerne noch Deutsch, aber ich versuche, so viel wie möglich auf Deutsch zu sprechen.'],'aber garde une proposition principale ; versuchen + zu + infinitif.'));
  add('id.smallprofile','identity','A2+','Mini-présentation',()=>{const a=pick(ADJ)[0],interest=pick(INTERESTS)[0];return orderQ('id.smallprofile','identity','Construis une mini-présentation naturelle.',`Ich bin ${a} und interessiere mich für ${interest}.`,'Deux informations simples reliées par und.',{flex:'coordination'})});
  add('id.reason','identity','A2+','Pourquoi apprendre ?',()=>inputQ('id.reason','identity','Traduis en allemand.','J’apprends l’allemand parce que je vais en Allemagne.',`Ich lerne Deutsch, weil ich nach Deutschland fahre.`,null,'Après weil, le verbe conjugué vient à la fin.'));
  add('id.future','identity','A2+','Projet',()=>{const x=pick([['mieux parler allemand','besser Deutsch sprechen'],['visiter plus souvent l’Allemagne','Deutschland öfter besuchen'],['apprendre plusieurs langues','mehrere Sprachen lernen']]);return inputQ('id.future','identity','Traduis naturellement.','Plus tard, je voudrais '+x[0]+'.',`Später möchte ich ${x[1]}.`,null,'möchte est conjugué ; l’infinitif reste en fin de phrase.')});

  add('sur.greeting','survival','A1','Salutations',()=>{const x=pick([['le matin','Guten Morgen'],['dans la journée','Guten Tag'],['le soir','Guten Abend'],['entre jeunes','Hallo']]);return mcq('sur.greeting','survival','Choisis la salutation adaptée.',x[0],x[1],['Hallo','Guten Morgen','Guten Tag','Guten Abend'],`Pour ${x[0]}, « ${x[1]} » convient.`)});
  add('sur.polite','survival','A1','Merci & politesse',()=>{const x=pick(SURVIVAL);return mcq('sur.polite','survival','Choisis l’expression allemande.',x[1],x[0],SURVIVAL.map(y=>y[0]),`« ${x[0]} » = « ${x[1]} ».`)});
  add('sur.repeat.du','survival','A2','Faire répéter : du',()=>inputQ('sur.repeat.du','survival','Tu parles à un élève de ton âge.','Tu peux répéter ça, s’il te plaît ?',`Kannst du das bitte wiederholen?`,null,'Avec du : kannst du …?'));
  add('sur.repeat.sie','survival','A2','Faire répéter : Sie',()=>inputQ('sur.repeat.sie','survival','Tu parles poliment à un adulte.','Pouvez-vous répéter ça, s’il vous plaît ?',`Können Sie das bitte wiederholen?`,null,'Avec Sie : können Sie …?'));
  add('sur.slower.du','survival','A2','Plus lentement : du',()=>inputQ('sur.slower.du','survival','Demande à un camarade.','Tu peux parler plus lentement, s’il te plaît ?',`Kannst du bitte langsamer sprechen?`,['Kannst du langsamer sprechen, bitte?'],'Modal können + infinitif sprechen à la fin.'));
  add('sur.slower.sie','survival','A2','Plus lentement : Sie',()=>inputQ('sur.slower.sie','survival','Demande poliment à un adulte.','Pouvez-vous parler plus lentement, s’il vous plaît ?',`Können Sie bitte langsamer sprechen?`,['Können Sie langsamer sprechen, bitte?'],'Sie prend une majuscule dans la forme de politesse.'));
  add('sur.meaning','survival','A1+','Demander le sens',()=>pick([
    inputQ('sur.meaning','survival','Traduis.','Qu’est-ce que ça veut dire ?',`Was bedeutet das?`,null,'Was bedeutet …? = que signifie … ?'),
    inputQ('sur.meaning','survival','Traduis.','Comment dit-on ça en allemand ?',`Wie sagt man das auf Deutsch?`,null,'Wie sagt man … auf Deutsch? est une phrase très rentable.')
  ]));
  add('sur.notunderstand','survival','A1+','Je ne comprends pas',()=>{const x=pick([['Je ne comprends pas.','Ich verstehe nicht.'],['Je n’ai pas compris ça.','Ich habe das nicht verstanden.']]);return inputQ('sur.notunderstand','survival','Traduis.',x[0],x[1],null,'Les deux phrases permettent de signaler le problème sans basculer immédiatement en anglais.')});
  add('sur.english','survival','A2','Plan B anglais',()=>inputQ('sur.english','survival','Tu bloques vraiment.','Mon allemand n’est pas encore parfait. Est-ce qu’on peut peut-être parler anglais ?',`Mein Deutsch ist noch nicht perfekt. Können wir vielleicht Englisch sprechen?`,null,'Formulation polie : expliquer puis proposer l’anglais.'));
  add('sur.help','survival','A1+','Demander de l’aide',()=>inputQ('sur.help','survival','Traduis.','J’ai besoin d’aide. Pouvez-vous m’aider ?',`Ich brauche Hilfe. Können Sie mir helfen?`,['Ich brauche Hilfe. Kannst du mir helfen?'],'mir = à moi ; helfen se construit avec le datif.'));
  add('sur.reaction','survival','A1+','Réactions naturelles',()=>{const x=pick(REACTIONS);return mcq('sur.reaction','survival','Quelle réaction allemande correspond ?',x[1],x[0],REACTIONS.map(y=>y[0]),'Ces petits mots maintiennent la conversation sans fabriquer une dissertation à chaque phrase.')});
  add('sur.du.sie','survival','A2','du ou Sie ?',()=>{const x=pick([['un élève de ton âge','Kannst du mir helfen?'],['un professeur que tu ne connais pas encore','Können Sie mir helfen?'],['un employé à la gare','Können Sie mir helfen?'],['un ami allemand','Kannst du mir helfen?']]);return mcq('sur.du.sie','survival','Choisis la formulation la plus adaptée.',x[0],x[1],['Kannst du mir helfen?','Können Sie mir helfen?'],`Contexte : ${x[0]}.`)});
  add('sur.request','survival','A2','Demande simple',()=>{const x=pick([['un verre d’eau','ein Glas Wasser'],['le menu','die Speisekarte'],['un stylo','einen Stift']]);return inputQ('sur.request','survival','Demande poliment.','Est-ce que je peux avoir '+x[0]+' s’il vous plaît ?',`Kann ich bitte ${x[1]} haben?`,null,'Kann ich bitte … haben? fonctionne dans énormément de situations.')});
  add('sur.try','survival','A2+','Rester en allemand',()=>inputQ('sur.try','survival','Phrase à utiliser dès le début du séjour.','Mon allemand n’est pas encore parfait, mais je veux essayer.',`Mein Deutsch ist noch nicht perfekt, aber ich möchte es versuchen.`,null,'Une phrase courte qui indique clairement que tu préfères essayer en allemand.'));

  renderLessons=function(){
    setNavActive('lessons');
    app.innerHTML=renderTop()+`<div class="nav"><button class="back" onclick="renderHome()">‹ ACCUEIL</button><div class="modeBadge">LEÇONS</div></div><div class="panel"><div class="eyebrow">GERMANY WEEK · LEARN → USE</div><h2 style="font-size:34px;margin:8px 0 4px">Leçons ciblées</h2><div class="tiny">Le vocabulaire et la grammaire de chaque chapitre alimentent directement les exercices générés.</div><div class="lessonGrid" style="margin-top:16px">${MODULES.map(m=>`<button class="lessonCard" onclick="renderLesson('${m.id}')"><div class="missionTop"><div class="missionIndex">${m.icon}</div><div class="lessonDone">${lessonStudied(m.id)?'ÉTUDIÉE':'À VOIR'}</div></div><div class="missionTitle">${m.title}</div><div class="missionDesc">${LESSONS[m.id].intro}</div></button>`).join('')}</div></div>`;
  };

  renderLesson=function(id){
    const m=MODULES.find(x=>x.id===id),l=LESSONS[id];
    const vocab=l.vocab?.length?`<div class="lessonBox lessonWide"><h3>Vocabulaire actif · ${l.vocab.length}</h3><div class="vocabGrid">${l.vocab.map(v=>`<div class="vocabRow"><div class="vocabDE">${escapeHtml(v[0])}</div><div class="vocabFR">${escapeHtml(v[1])}</div></div>`).join('')}</div></div>`:'';
    const grammar=l.grammar?.length?`<div class="lessonBox"><h3>Grammaire utile</h3><ul>${l.grammar.map(x=>`<li>${escapeHtml(x)}</li>`).join('')}</ul></div>`:'';
    app.innerHTML=renderTop()+`<div class="nav"><button class="back" onclick="renderLessons()">‹ LEÇONS</button><div class="modeBadge">${m.title}</div></div><div class="panel"><div class="eyebrow">${m.icon} · LEÇON ACTIVE</div><h2 style="font-size:34px;margin:8px 0 6px">${m.title}</h2><div class="context">${l.intro}</div><div class="lessonContent"><div class="lessonBox"><h3>À retenir</h3><ul>${l.points.map(x=>`<li>${escapeHtml(x)}</li>`).join('')}</ul></div>${grammar||`<div class="lessonBox"><h3>Exemples</h3>${l.examples.map(e=>`<div class="example"><div class="exampleDE">${escapeHtml(e[0])}</div><div class="exampleFR">${escapeHtml(e[1])}</div></div>`).join('')}</div>`}</div>${vocab}<div class="lessonBox lessonWide examplesWide"><h3>Exemples à savoir produire</h3>${l.examples.map(e=>`<div class="example"><div class="exampleDE">${escapeHtml(e[0])}</div><div class="exampleFR">${escapeHtml(e[1])}</div></div>`).join('')}</div><button class="nextBtn" onclick="completeLesson('${id}')">MARQUER COMME ÉTUDIÉE + S’ENTRAÎNER</button><button class="secondaryBtn" onclick="startPractice('${id}')">S’ENTRAÎNER DIRECTEMENT</button></div>`;
  };

  completeLesson=function(id){state.lessonDone[id]=LESSON_VERSIONS[id]||1;state.xp+=15;save();showToast('Leçon enregistrée +15 XP');startPractice(id)};

  renderTop=function(){return `<div class="topline"><div class="brand"><div class="mark"></div><div><div class="brandKicker">Français ⇄ Deutsch</div><div class="brandTitle">Deutsch Quest</div></div></div><div class="iconRow"><button class="iconBtn themeBtn" onclick="cycleTheme()" title="Auto / clair / sombre">${themeBadge()}</button><button class="iconBtn" onclick="toggleSound()">${state.sound?'♪':'×♪'}</button><button class="iconBtn saveTop" onclick="renderSave()">SAVE</button></div></div>`};

  renderHome=function(){
    applyTheme();setNavActive('home');mode='home';current=null;locked=false;
    const lv=cefr(),weak=weakModules()[0];
    app.innerHTML=renderTop()+`<div class="hero exchangeHero"><div class="heroGrid"><div><div class="eyebrow">GERMANY WEEK · EXCHANGE MODE</div><h1>Deutsch.<br>Im echten Leben.</h1><p>Objectif : une semaine en Allemagne en utilisant l’anglais quand il le faut, mais suffisamment d’allemand pour te présenter, maintenir une conversation simple, demander de l’aide et montrer que tu apprends vraiment.</p><div class="heroTags"><span>SELF INTRO</span><span>DAILY SURVIVAL</span><span>SMART CORRECTION</span></div></div><div class="levelCard"><div class="levelTop"><div><div class="cefr">${lv.name}</div><div class="cefrSub">${lv.sub}</div></div><div class="rank">${lv.rank}</div></div><div class="progress"><div style="width:${lv.pct}%"></div></div><div class="tiny">Mission actuelle : Identity + Daily Survival. Les nouvelles notions réduisent volontairement le % global tant qu’elles ne sont pas maîtrisées.</div></div></div></div><div class="installNote">Web App iPhone : le code peut être mis à jour sans effacer ta progression locale. Chaque appareil garde son propre profil.</div>
    <div class="quickMission"><div><div class="eyebrow">7-DAY FIELD KIT</div><div class="quickMissionTitle">Les deux modules à rendre automatiques avant le départ</div></div><div class="quickMissionActions"><button onclick="renderLesson('identity')">ICH · Profil</button><button onclick="renderLesson('survival')">DE+ · Survival</button></div></div>
    <div class="stats"><div class="stat"><div class="statN">${state.xp}</div><div class="statL">XP</div></div><div class="stat"><div class="statN">${accuracy()}%</div><div class="statL">Précision</div></div><div class="stat"><div class="statN">${totalMasteredFamilies()}/${FAMILIES.length}</div><div class="statL">Familles maîtrisées</div></div><div class="stat"><div class="statN">${Object.values(state.errors).reduce((a,b)=>a+b,0)}</div><div class="statL">Erreurs à revoir</div></div><div class="stat"><div class="statN">${state.bestCombo}</div><div class="statL">Beste Serie</div></div></div>
    <div class="sectionHead"><div class="sectionTitle">Centre d’entraînement</div><div class="sectionMeta">Contenu partagé · progression privée sur chaque appareil</div></div>
    <div class="mainGrid"><button class="action primaryAction" onclick="renderLessons()"><div class="actionTag">01 · Comprendre</div><div class="actionTitle">Leçons</div><div class="actionDesc">Vocabulaire actif, grammaire utile et exemples que tu dois pouvoir produire.</div><div class="actionIcon">L</div></button><button class="action" onclick="renderPractice()"><div class="actionTag">02 · Automatiser</div><div class="actionTitle">Banque d’exercices</div><div class="actionDesc">Même structure, phrases différentes. Le contenu approuvé revient ici.</div><div class="actionIcon">∞</div></button><button class="action" onclick="renderTestMenu()"><div class="actionTag">03 · Mesurer</div><div class="actionTitle">Test</div><div class="actionDesc">10, 20 ou 30 questions, sans correction immédiate.</div><div class="actionIcon">%</div></button><button class="action" onclick="renderMistakes()"><div class="actionTag">04 · Corriger</div><div class="actionTitle">Mes erreurs</div><div class="actionDesc">Les points faibles reviennent avec de nouvelles formulations.</div><div class="actionIcon">↺</div></button><button class="action" onclick="renderSave()"><div class="actionTag">05 · Conserver</div><div class="actionTitle">Sauvegarde</div><div class="actionDesc">Auto-save local + export/import. Aucun compte requis.</div><div class="actionIcon">▣</div></button></div>
    <div class="sectionHead"><div class="sectionTitle">Missionskarte</div><div class="sectionMeta">Point faible actuel : ${weak?.title||'—'}</div></div><div class="missions">${MODULES.map((m,i)=>{const p=moduleProgress(m.id);const lock=m.id==='boss'&&totalMasteredFamilies()<12;return `<button class="mission" onclick="${lock?`showToast('B1 Gate : maîtrise 12 familles avant')`:`startPractice('${m.id}')`}"><div class="missionTop"><div class="missionIndex">${String(i+1).padStart(2,'0')} / ${m.icon}</div><div class="missionStatus">${lock?'GESPERRT':p===100?'GEMEISTERT':p+'%'}</div></div><div class="missionTitle">${m.title}</div><div class="missionDesc">${m.desc}</div><div class="missionFoot"><div class="miniBar"><div style="width:${p}%"></div></div><div class="percent">${p}%</div></div></button>`}).join('')}</div><div class="footer">DEUTSCH QUEST · GERMANY WEEK · LOCAL SAVE · AUTO THEME</div>`;
  };

  save();
  renderHome();
})();
