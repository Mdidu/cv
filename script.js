var cv = document.getElementById('CV'),
    body = document.getElementById('body'),
    leftBloc = document.getElementById('leftBloc'),
    changeColor = document.getElementById('changeColor');

// targets the titles of the categories you want to hide. in EN
// cible les titres des catégories qu'on veut masquer in FR
var diplome = document.getElementById('diplome'),
    expe = document.getElementById('expe'),
    info = document.getElementById('info'),
    langue = document.getElementById('langue'),
    competence = document.getElementById('competence'),
    projet = document.getElementById('projet');

//targets the blocks of the categories you want to hide. in EN
// cible les blocs des catégories qu'on veut masquer. in FR
var blocDiplome = document.getElementById('blocDiplome'),
    blocExpe = document.getElementById('blocExpe'),
    blocInfo = document.getElementById('blocInfo'),
    blocLangue = document.getElementById('blocLangue'),
    blocCompetence = document.getElementById('blocCompetence'),
    blocProjet = document.getElementById('blocProjet');

// Boolean variable to know if the category is visible or not. in EN
// Variable booléenne permettant de savoir si la catégorie est visible ou non. in FR
var diplomeVisible = true,
    expeVisible = true,
    infoVisible = true,
    langueVisible = true,
    competenceVisible = true,
    projetVisible = true;

var color = true;

// function adding an event click on the page to change the colors on the page
changeColor.addEventListener('click', function (){

    if(color){
        cv.style.backgroundColor = 'black';
        cv.style.transition = "background-color 2s";
        body.style.backgroundColor = 'white';
        body.style.transition = 'background 2s';
        cv.style.color = 'white';
        leftBloc.style.borderRight = '2px solid white';
        color = false;
    }else {
        cv.style.backgroundColor = 'white';
        body.style.backgroundColor = 'black';
        cv.style.color = 'black';
        leftBloc.style.borderRight = '2px solid black';
        color = true;
    }
});
// adds an event click on the title of the diploma category to hide the category! In EN
// ajoute un évènement clic sur le titre de la catégorie diplome permettant de masquer la catégorie ! In FR
diplome.addEventListener('click', function(){
    if(diplomeVisible){
        blocDiplome.style.display = 'none';
        diplomeVisible = false;
    }else {
        blocDiplome.style.display = 'flex';
        blocDiplome.style.flexDirection = 'column';
        diplomeVisible = true;
    }
});

// adds an event click on the title of the experience category to hide the category! In EN
// ajoute un évènement clic sur le titre de la catégorie expérience permettant de masquer la catégorie ! In FR
expe.addEventListener('click', function(){
    if(expeVisible){
        blocExpe.style.display = 'none';
        expeVisible = false;
    }else {
        blocExpe.style.display = 'flex';
        blocExpe.style.flexDirection = 'column';
        expeVisible = true;
    }
});
// adds an event click on the title of the info category to hide the category! In EN
// ajoute un évènement clic sur le titre de la catégorie info perso permettant de masquer la catégorie ! In FR
info.addEventListener('click', function(){
    if(infoVisible){
        blocInfo.style.display = 'none';
        infoVisible = false;
    }else {
        blocInfo.style.display = 'flex';
        blocInfo.style.flexDirection = 'column';
        infoVisible = true;
    }
});

// adds an event click on the title of the langue category to hide the category! In EN
// ajoute un évènement clic sur le titre de la catégorie langue permettant de masquer la catégorie ! In FR
langue.addEventListener('click', function(){
    if(langueVisible){
        blocLangue.style.display = 'none';
        langueVisible = false;
    }else {
        blocLangue.style.display = 'flex';
        blocLangue.style.flexDirection = 'column';
        langueVisible = true;
    }
});
// adds an event click on the title of the competence category to hide the category! In EN
// ajoute un évènement clic sur le titre de la catégorie compétence permettant de masquer la catégorie ! In FR
competence.addEventListener('click', function(){
    if(competenceVisible){
        blocCompetence.style.display = 'none';
        competenceVisible = false;
    }else {
        blocCompetence.style.display = 'flex';
        blocCompetence.style.flexDirection = 'column';
        competenceVisible = true;
    }
});
// adds an event click on the title of the competence category to hide the category! In EN
// ajoute un évènement clic sur le titre de la catégorie compétence permettant de masquer la catégorie ! In FR
projet.addEventListener('click', function(){
    if(projetVisible){
        blocProjet.style.display = 'none';
        projetVisible = false;
    }else {
        blocProjet.style.display = 'flex';
        blocProjet.style.flexDirection = 'column';
        projetVisible = true;
    }
});