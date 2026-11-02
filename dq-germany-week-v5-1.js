(()=>{
  if(window.__DQ_GERMANY_WEEK_V51__) return;
  window.__DQ_GERMANY_WEEK_V51__=true;

  const insertAfter=(afterId,module)=>{
    if(MODULES.some(m=>m.id===module.id)) return;
    const i=MODULES.findIndex(m=>m.id===afterId);
    MODULES.splice(i<0?MODULES.length:i+1,0,module);
  };
  insertAfter('survival',{id:'host',icon:'HOME',title:'Gastfamilie & Zuhause',desc:'Maison, repas, horaires, règles, aide et vie quotidienne avec la famille d’accueil.'});
  insertAfter('host',{id:'schoolx',icon:'SCH',title:'Schüleraustausch & Schule',desc:'Cours, salles, horaires, devoirs et échanges avec professeurs et élèves.'});
  insertAfter('schoolx',{id:'food',icon:'ESS',title:'Essen & Café',desc:'Commander, demander, choisir, payer et parler de ce que tu aimes manger.'});
  insertAfter('food',{id:'city',icon:'→',title:'Unterwegs & Stadt',desc:'Gare, bus, horaires, billets et demander son chemin.'});
  insertAfter('city',{id:'smalltalk',icon:'CHAT',title:'Freunde & Small Talk',desc:'Relancer une discussion, parler du week-end, de musique, de sport et de loisirs.'});
  insertAfter('smalltalk',{id:'problems',icon:'SOS',title:'Probleme & Hilfe',desc:'Dire que quelque chose ne va pas, demander de l’aide et gérer les petits problèmes.'});

  Object.assign(LESSONS,{
    host:{
      intro:'Chez une famille d’accueil, les phrases les plus utiles concernent les horaires, les repas, la salle de bain et la politesse. Pas besoin d’un traité de philosophie avant le petit-déjeuner.',
      points:['Wann essen wir? = On mange quand ?','Wo kann ich …? = Où est-ce que je peux … ?','Darf ich …? = Est-ce que j’ai le droit de … ?','Soll ich helfen? = Est-ce que je dois aider ?','Ich bin müde. Ich gehe schlafen. = Je suis fatigué, je vais dormir.'],
      grammar:['dürfen = permission : Darf ich duschen?','sollen = ce qu’on attend de toi : Soll ich helfen?','können = possibilité : Wo kann ich mein Handtuch hinlegen?','Verbes séparables fréquents : aufstehen, mitbringen, aufräumen.'],
      vocab:[['die Gastfamilie','famille d’accueil'],['das Zimmer','chambre'],['das Badezimmer','salle de bain'],['die Dusche','douche'],['das Handtuch','serviette'],['das Frühstück','petit-déjeuner'],['das Abendessen','dîner'],['aufstehen','se lever'],['schlafen','dormir'],['helfen','aider'],['Darf ich …?','Est-ce que je peux / ai le droit de … ?'],['Soll ich helfen?','Est-ce que je dois aider ?'],['Wann essen wir?','On mange quand ?'],['Wo kann ich …?','Où puis-je … ?']],
      examples:[['Wann essen wir heute Abend?','À quelle heure mange-t-on ce soir ?'],['Darf ich jetzt duschen?','Est-ce que je peux prendre une douche maintenant ?'],['Soll ich beim Tischdecken helfen?','Est-ce que je dois aider à mettre la table ?'],['Wo kann ich mein Handtuch hinlegen?','Où puis-je poser ma serviette ?']]
    },
    schoolx:{
      intro:'À l’école, le but est de comprendre où aller, quand, avec qui, et ce que le prof attend. Le reste pourra survivre avec un peu d’anglais.',
      points:['Wo ist der Klassenraum? = Où est la salle ?','Wann beginnt der Unterricht? = Quand commence le cours ?','Was machen wir heute? = Qu’est-ce qu’on fait aujourd’hui ?','Ich habe das nicht verstanden. = Je n’ai pas compris.','Muss ich das auch machen? = Est-ce que je dois faire ça aussi ?'],
      grammar:['müssen = obligation : Muss ich das machen?','Questions avec Wo / Wann / Was / Welche.','Le verbe est en 2e position après un complément : Heute haben wir Mathe.'],
      vocab:[['die Schule','école'],['die Klasse','classe'],['der Lehrer / die Lehrerin','professeur'],['der Unterricht','cours'],['die Pause','récréation / pause'],['die Hausaufgaben','devoirs'],['das Fach','matière'],['der Klassenraum','salle de classe'],['der Stundenplan','emploi du temps'],['beginnen','commencer'],['Was machen wir heute?','Qu’est-ce qu’on fait aujourd’hui ?'],['Muss ich das auch machen?','Je dois faire ça aussi ?']],
      examples:[['Wo ist der Klassenraum für Mathematik?','Où est la salle de maths ?'],['Wann beginnt die nächste Stunde?','Quand commence le prochain cours ?'],['Muss ich diese Aufgabe auch machen?','Est-ce que je dois aussi faire cet exercice ?'],['Ich habe die Aufgabe nicht verstanden.','Je n’ai pas compris l’exercice.']]
    },
    food:{
      intro:'Commander correctement est un excellent rendement effort/utilité : trois structures et tu peux déjà fonctionner dans un café ou à table.',
      points:['Ich hätte gern … = Je voudrais … (très utile pour commander).','Kann ich bitte … haben? = Est-ce que je peux avoir … ?','Ich mag … / Ich mag … nicht.','Das schmeckt gut. = C’est bon.','Zahlen, bitte. = L’addition, s’il vous plaît.'],
      grammar:['hätte gern est une formule polie figée très rentable.','möchten + infinitif / complément : Ich möchte Wasser.','Akkusativ après certains verbes : einen Tee, eine Cola, ein Wasser.'],
      vocab:[['das Wasser','eau'],['das Brot','pain'],['das Gemüse','légumes'],['das Fleisch','viande'],['das Hähnchen','poulet'],['die Nudeln','pâtes'],['der Reis','riz'],['lecker','délicieux'],['die Speisekarte','menu / carte'],['zahlen','payer'],['Ich hätte gern …','Je voudrais …'],['Zahlen, bitte.','L’addition, s’il vous plaît.']],
      examples:[['Ich hätte gern ein Wasser, bitte.','Je voudrais une eau, s’il vous plaît.'],['Kann ich bitte die Speisekarte haben?','Est-ce que je peux avoir la carte ?'],['Das schmeckt sehr gut.','C’est très bon.'],['Zahlen, bitte.','L’addition, s’il vous plaît.']]
    },
    city:{
      intro:'Tu n’as pas besoin de réciter le réseau ferroviaire allemand. Tu dois surtout savoir demander où, quelle ligne et à quelle heure.',
      points:['Wo ist der Bahnhof? = Où est la gare ?','Wie komme ich zu …? = Comment aller à … ?','Welche Linie muss ich nehmen? = Quelle ligne dois-je prendre ?','Um wie viel Uhr fährt der Bus?','Ist das weit? = C’est loin ?'],
      grammar:['zu + datif pour aller vers un lieu/personne : zum Bahnhof.','nach + ville/pays sans article : nach Berlin, nach Deutschland.','Impératif utile reçu dans les réponses : Gehen Sie geradeaus.'],
      vocab:[['der Bahnhof','gare'],['die Bushaltestelle','arrêt de bus'],['der Zug','train'],['der Bus','bus'],['das Ticket','billet'],['links','à gauche'],['rechts','à droite'],['geradeaus','tout droit'],['nah','près'],['weit','loin'],['die Linie','ligne'],['um wie viel Uhr','à quelle heure']],
      examples:[['Wo ist der Bahnhof?','Où est la gare ?'],['Wie komme ich zum Stadtzentrum?','Comment aller au centre-ville ?'],['Welche Linie muss ich nehmen?','Quelle ligne dois-je prendre ?'],['Um wie viel Uhr fährt der nächste Bus?','À quelle heure part le prochain bus ?']]
    },
    smalltalk:{
      intro:'Le small talk sert surtout à ne pas laisser mourir la conversation après « Hallo ». Quelques relances courtes font beaucoup plus naturel.',
      points:['Was machst du gern? = Qu’est-ce que tu aimes faire ?','Was machst du am Wochenende?','Hörst du gern Musik?','Echt? Warum? = Vraiment ? Pourquoi ?','Das klingt interessant. = Ça a l’air intéressant.'],
      grammar:['gern après le verbe : Ich spiele gern Tennis.','Questions en W : Was / Warum / Welche / Wie.','auch = aussi ; eigentlich = au fait / en fait, utile mais à petite dose.'],
      vocab:[['das Wochenende','week-end'],['die Musik','musique'],['der Sport','sport'],['die Freunde','amis'],['das Hobby','loisir'],['gern','volontiers / aimer faire'],['Echt?','Vraiment ?'],['Warum?','Pourquoi ?'],['Das klingt interessant.','Ça a l’air intéressant.'],['Und du?','Et toi ?'],['Was machst du gern?','Qu’est-ce que tu aimes faire ?'],['Hörst du gern Musik?','Tu aimes écouter de la musique ?']],
      examples:[['Was machst du am Wochenende?','Qu’est-ce que tu fais ce week-end ?'],['Ich spiele gern Tennis. Und du?','J’aime jouer au tennis. Et toi ?'],['Echt? Warum?','Vraiment ? Pourquoi ?'],['Das klingt interessant.','Ça a l’air intéressant.']]
    },
    problems:{
      intro:'Ici, priorité à la clarté. Quand tu as un problème, pas besoin de produire une subordonnée élégante avec trois connecteurs.',
      points:['Ich brauche Hilfe. = J’ai besoin d’aide.','Mir ist schlecht. = Je me sens mal / j’ai la nausée.','Ich habe Kopfschmerzen / Bauchschmerzen.','Ich habe mich verlaufen. = Je me suis perdu.','Ich habe mein … verloren. = J’ai perdu mon …'],
      grammar:['Mir ist … utilise le datif pour l’état ressenti.','haben + nom : Ich habe Kopfschmerzen.','Perfekt utile : Ich habe mein Handy verloren. / Ich habe mich verlaufen.'],
      vocab:[['die Hilfe','aide'],['Kopfschmerzen','mal de tête'],['Bauchschmerzen','mal au ventre'],['schlecht','mal / nauséeux'],['verloren','perdu'],['sich verlaufen','se perdre'],['Ich brauche Hilfe.','J’ai besoin d’aide.'],['Mir ist schlecht.','Je me sens mal.'],['Ich habe mein Handy verloren.','J’ai perdu mon téléphone.'],['Können Sie mir helfen?','Pouvez-vous m’aider ?']],
      examples:[['Entschuldigung, ich brauche Hilfe.','Excusez-moi, j’ai besoin d’aide.'],['Mir ist schlecht.','Je me sens mal.'],['Ich habe mich verlaufen.','Je me suis perdu.'],['Ich habe mein Handy verloren. Können Sie mir helfen?','J’ai perdu mon téléphone. Pouvez-vous m’aider ?']]
    }
  });

  const add=(id,module,level,label,gen)=>{if(!FAMILIES.some(f=>f.id===id)) family(id,module,level,label,gen)};

  add('host.meal','host','A1+','Horaires des repas',()=>inputQ('host.meal','host','Demande à ta famille d’accueil.','On mange quand ce soir ?',`Wann essen wir heute Abend?`,['Wann essen wir heute?'],'Wann = quand ; essen wir = on mange.'));
  add('host.shower','host','A2','Permission',()=>inputQ('host.shower','host','Demande la permission.','Est-ce que je peux prendre une douche maintenant ?',`Darf ich jetzt duschen?`,null,'dürfen sert à demander une permission.'));
  add('host.help','host','A2','Proposer son aide',()=>inputQ('host.help','host','Propose ton aide.','Est-ce que je dois aider ?',`Soll ich helfen?`,null,'Soll ich …? demande ce que l’on attend de toi.'));
  add('host.where','host','A2','Où puis-je… ?',()=>{const x=pick([['poser ma serviette','mein Handtuch hinlegen'],['mettre mes chaussures','meine Schuhe hinstellen'],['charger mon téléphone','mein Handy laden']]);return inputQ('host.where','host','Demande à la maison.','Où puis-je '+x[0]+' ?',`Wo kann ich ${x[1]}?`,null,'Wo kann ich …? est une structure polyvalente.')});

  add('sch.room','schoolx','A1+','Trouver la salle',()=>inputQ('sch.room','schoolx','Demande à un élève.','Où est la salle de classe ?',`Wo ist der Klassenraum?`,null,'Wo ist …? = où est … ?'));
  add('sch.start','schoolx','A2','Horaire du cours',()=>inputQ('sch.start','schoolx','Demande l’horaire.','Quand commence le prochain cours ?',`Wann beginnt die nächste Stunde?`,null,'beginnen est ici conjugué : beginnt.'));
  add('sch.today','schoolx','A1+','Comprendre le programme',()=>inputQ('sch.today','schoolx','Demande en cours.','Qu’est-ce qu’on fait aujourd’hui ?',`Was machen wir heute?`,null,'Question avec Was, puis verbe.'));
  add('sch.must','schoolx','A2','Obligation',()=>inputQ('sch.must','schoolx','Tu ne sais pas si l’exercice te concerne.','Est-ce que je dois faire ça aussi ?',`Muss ich das auch machen?`,null,'müssen : muss ich … machen?'));

  add('food.order','food','A1+','Commander',()=>{const x=pick([['une eau','ein Wasser'],['un thé','einen Tee'],['une limonade','eine Limonade']]);return inputQ('food.order','food','Commande poliment.','Je voudrais '+x[0]+', s’il vous plaît.',`Ich hätte gern ${x[1]}, bitte.`,null,'Ich hätte gern … est une formule de commande très naturelle.')});
  add('food.menu','food','A1+','Demander la carte',()=>inputQ('food.menu','food','Au café.','Est-ce que je peux avoir la carte, s’il vous plaît ?',`Kann ich bitte die Speisekarte haben?`,['Kann ich die Speisekarte bitte haben?'],'Kann ich bitte … haben? fonctionne très bien ici.'));
  add('food.taste','food','A1','Donner son avis',()=>mcq('food.taste','food','Que dis-tu si c’est très bon ?','C’est très bon.','Das schmeckt sehr gut.',['Ich bin sehr gut.','Das fährt sehr gut.','Ich habe sehr gut.'],'schmecken = avoir bon goût.'));
  add('food.pay','food','A1','Payer',()=>inputQ('food.pay','food','À la fin du repas.','L’addition, s’il vous plaît.',`Zahlen, bitte.`,['Die Rechnung, bitte.'],'Les deux formulations sont courantes.'));

  add('city.station','city','A1','Trouver la gare',()=>inputQ('city.station','city','Demande ton chemin.','Où est la gare ?',`Wo ist der Bahnhof?`,null,'Bahnhof = gare.'));
  add('city.route','city','A2','Demander le chemin',()=>inputQ('city.route','city','Tu veux aller au centre-ville.','Comment aller au centre-ville ?',`Wie komme ich zum Stadtzentrum?`,null,'zum = zu dem.'));
  add('city.line','city','A2','Quelle ligne ?',()=>inputQ('city.line','city','Pour prendre le bon transport.','Quelle ligne dois-je prendre ?',`Welche Linie muss ich nehmen?`,null,'müssen + infinitif nehmen à la fin.'));
  add('city.time','city','A2','Horaire du bus',()=>inputQ('city.time','city','Demande l’horaire.','À quelle heure part le prochain bus ?',`Um wie viel Uhr fährt der nächste Bus?`,null,'Um wie viel Uhr = à quelle heure.'));
  add('city.direction','city','A1','Directions',()=>{const x=pick([['à gauche','links'],['à droite','rechts'],['tout droit','geradeaus']]);return mcq('city.direction','city','Choisis en allemand.',x[0],x[1],['links','rechts','geradeaus','weit'],`${x[1]} = ${x[0]}.`)});

  add('chat.weekend','smalltalk','A1+','Week-end',()=>inputQ('chat.weekend','smalltalk','Relance la conversation.','Qu’est-ce que tu fais ce week-end ?',`Was machst du am Wochenende?`,null,'am Wochenende = le week-end.'));
  add('chat.hobby','smalltalk','A1+','Loisirs',()=>inputQ('chat.hobby','smalltalk','Demande à l’autre.','Qu’est-ce que tu aimes faire ?',`Was machst du gern?`,['Was machst du gerne?'],'gern / gerne sont tous les deux corrects.'));
  add('chat.music','smalltalk','A1+','Musique',()=>inputQ('chat.music','smalltalk','Demande à un camarade.','Tu aimes écouter de la musique ?',`Hörst du gern Musik?`,['Hörst du gerne Musik?'],'gern indique qu’on aime faire l’action.'));
  add('chat.react','smalltalk','A1','Relancer naturellement',()=>{const x=pick([['Vraiment ? Pourquoi ?','Echt? Warum?'],['Et toi ?','Und du?'],['Ça a l’air intéressant.','Das klingt interessant.']]);return inputQ('chat.react','smalltalk','Réagis naturellement.',x[0],x[1],null,'Petite phrase, gros rendement conversationnel.')});

  add('prob.help','problems','A1','Besoin d’aide',()=>inputQ('prob.help','problems','Demande clairement.','J’ai besoin d’aide.',`Ich brauche Hilfe.`,null,'Court et sans ambiguïté.'));
  add('prob.sick','problems','A1+','Se sentir mal',()=>{const x=pick([['Je me sens mal.','Mir ist schlecht.'],['J’ai mal à la tête.','Ich habe Kopfschmerzen.'],['J’ai mal au ventre.','Ich habe Bauchschmerzen.']]);return inputQ('prob.sick','problems','Explique le problème.',x[0],x[1],null,'Ces formulations sont à mémoriser comme des blocs.')});
  add('prob.lost','problems','A2','Perdu',()=>pick([
    inputQ('prob.lost','problems','Explique le problème.','Je me suis perdu.',`Ich habe mich verlaufen.`,null,'sich verlaufen au Perfekt : ich habe mich verlaufen.'),
    inputQ('prob.lost','problems','Explique le problème.','J’ai perdu mon téléphone.',`Ich habe mein Handy verloren.`,null,'verlieren → verloren au Perfekt.')
  ]));
  add('prob.askhelp','problems','A1+','Demander à un adulte',()=>inputQ('prob.askhelp','problems','Demande poliment.','Pouvez-vous m’aider ?',`Können Sie mir helfen?`,null,'helfen se construit avec mir au datif.'));

  if(typeof save==='function') save();
  if(typeof renderHome==='function') renderHome();
})();
