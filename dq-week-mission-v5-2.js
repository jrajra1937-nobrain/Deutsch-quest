(()=>{
  if(window.__DQ_WEEK_MISSION_V52__) return;
  window.__DQ_WEEK_MISSION_V52__=true;

  if(!MODULES.some(m=>m.id==='week')){
    const i=MODULES.findIndex(m=>m.id==='boss');
    MODULES.splice(i<0?MODULES.length:i,0,{id:'week',icon:'7D',title:'Germany Week Mission',desc:'Day 1→7 : arrivée, famille, école, ville, amis et problèmes en situations combinées.'});
  }
  LESSONS.week={
    intro:'Simulation finale : tu n’apprends plus une règle isolée. Tu dois choisir la phrase qui permet de faire avancer une vraie situation pendant ton échange.',
    points:['Day 1 : arrivée + présentation.','Day 2 : famille d’accueil + routine.','Day 3 : école + compréhension.','Day 4 : repas + commande.','Day 5 : ville + transport.','Day 6 : amis + small talk.','Day 7 : gérer un problème + remercier.'],
    grammar:['Priorité à la communication : phrase courte correcte > phrase ambitieuse cassée.','du avec les jeunes, Sie dans les situations formelles.','Utilise les mots-outils : bitte, danke, Entschuldigung, genau, ach so, und du?'],
    vocab:[['Ich bin für eine Woche hier.','Je suis ici pour une semaine.'],['Kannst du das bitte wiederholen?','Tu peux répéter ?'],['Darf ich …?','Est-ce que je peux … ?'],['Ich hätte gern …','Je voudrais …'],['Wie komme ich zu …?','Comment aller à … ?'],['Und du?','Et toi ?'],['Ich brauche Hilfe.','J’ai besoin d’aide.'],['Vielen Dank für alles.','Merci beaucoup pour tout.']],
    examples:[['Hallo, ich bin für eine Woche hier und lerne noch Deutsch.','Salut, je suis ici pour une semaine et j’apprends encore l’allemand.'],['Entschuldigung, können Sie das bitte wiederholen?','Excusez-moi, pouvez-vous répéter ?'],['Ich hätte gern ein Wasser, bitte.','Je voudrais une eau, s’il vous plaît.'],['Vielen Dank für alles. Es war eine tolle Woche.','Merci beaucoup pour tout. C’était une super semaine.']]
  };

  const add=(id,level,label,gen)=>{if(!FAMILIES.some(f=>f.id===id)) family(id,'week',level,label,gen)};
  add('week.day1','A2','Day 1 · Arrivée',()=>inputQ('week.day1','week','Tu rencontres un jeune allemand pour la première fois.','Salut ! Je suis ici pour une semaine et j’apprends encore l’allemand.',`Hallo! Ich bin für eine Woche hier und lerne noch Deutsch.`,null,'Court, clair, et assez naturel pour lancer la conversation.'));
  add('week.day2','A2','Day 2 · Chez la famille',()=>inputQ('week.day2','week','Tu veux utiliser la salle de bain.','Est-ce que je peux prendre une douche maintenant ?',`Darf ich jetzt duschen?`,null,'dürfen = permission.'));
  add('week.day3','A2','Day 3 · En classe',()=>inputQ('week.day3','week','Le professeur a parlé trop vite.','Excusez-moi, pouvez-vous répéter cela plus lentement ?',`Entschuldigung, können Sie das bitte langsamer wiederholen?`,['Entschuldigung, können Sie das bitte wiederholen und langsamer sprechen?'],'Sie pour le professeur ; bitte rend la demande naturelle.'));
  add('week.day4','A2','Day 4 · Café',()=>inputQ('week.day4','week','Tu commandes.','Je voudrais une eau, s’il vous plaît.',`Ich hätte gern ein Wasser, bitte.`,null,'Ich hätte gern … est une excellente formule de commande.'));
  add('week.day5','A2','Day 5 · Transport',()=>inputQ('week.day5','week','Tu dois rejoindre le centre-ville.','Comment aller au centre-ville ? Quelle ligne dois-je prendre ?',`Wie komme ich zum Stadtzentrum? Welche Linie muss ich nehmen?`,null,'Deux questions simples valent mieux qu’une construction inutilement complexe.'));
  add('week.day6','A2','Day 6 · Small talk',()=>inputQ('week.day6','week','Ton camarade parle de ses loisirs. Relance.','Ça a l’air intéressant. Qu’est-ce que tu aimes faire le week-end ?',`Das klingt interessant. Was machst du am Wochenende gern?`,['Das klingt interessant. Was machst du gern am Wochenende?'],'gern peut se placer naturellement près de l’activité ; plusieurs ordres sont possibles.'));
  add('week.day7','A2+','Day 7 · Remercier',()=>inputQ('week.day7','week','Dernier jour avec la famille d’accueil.','Merci beaucoup pour tout. C’était une super semaine.',`Vielen Dank für alles. Es war eine tolle Woche.`,null,'Une conclusion courte, naturelle et facile à retenir.'));
  add('week.problem','A2','Mission · Problème',()=>{const x=pick([
    ['Tu ne retrouves plus ton téléphone.','J’ai perdu mon téléphone. Pouvez-vous m’aider ?',`Ich habe mein Handy verloren. Können Sie mir helfen?`],
    ['Tu te sens mal.','Je me sens mal. J’ai besoin d’aide.',`Mir ist schlecht. Ich brauche Hilfe.`],
    ['Tu es perdu.','Je me suis perdu. Où est la gare ?',`Ich habe mich verlaufen. Wo ist der Bahnhof?`]
  ]);return inputQ('week.problem','week',x[0],x[1],x[2],null,'Dans un problème réel : informations essentielles d’abord.')});

  if(typeof save==='function') save();
  if(typeof renderHome==='function') renderHome();
})();
