/*
Améliorations possible: lors du clic sur un lien ne pas changer les couleurs sur la page.
Intervertir les blocs dans le cv et conserver leurs positions
Ajouter des images à gauche des informations se trouvant dans la liste lié aux informations personnelles
 */
var cv = document.getElementById('CV');
var body = document.getElementById('body');
var leftBloc = document.getElementById('leftBloc');
var color = true;

// function adding an event click on the page to change the colors on the page
body.addEventListener('click', function (){

    if(color){
        cv.style.backgroundColor = 'black';
        this.style.backgroundColor = 'white';
        cv.style.color = 'white';
        leftBloc.style.borderRight = '2px solid white';
        color = false;
    }else {
        cv.style.backgroundColor = 'white';
        this.style.backgroundColor = 'black';
        cv.style.color = 'black';
        leftBloc.style.borderRight = '2px solid black';
        color = true;
    }
});