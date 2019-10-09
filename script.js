/*
Améliorations possible: lors du clic sur un lien ne pas changer les couleurs sur la page.
Intervertir les blocs dans le cv et conserver leurs positions

 */
var cv = document.getElementById('CV');
var body = document.getElementById('body');
var leftBloc = document.getElementById('leftBloc');
// var bar = document.getElementsByClassName('bar');
var color = true;

// function adding an event click on the page to change the colors on the page
body.addEventListener('click', function (){

    if(color){
        cv.style.backgroundColor = 'black';
        this.style.backgroundColor = 'white';
        // bar.style.border = "1px solid white";
        cv.style.color = 'white';
        //cv.style.boxShadow = '10px 5px 5px gray';
        leftBloc.style.borderRight = '2px solid white';
        color = false;
        // bar.style.border = '1px solid white';
    }else {
        cv.style.backgroundColor = 'white';
        this.style.backgroundColor = 'black';
        //bar.style.border = "1px solid white";
        cv.style.color = 'black';
        //cv.style.boxShadow = '10px 5px 5px gray';
        leftBloc.style.borderRight = '2px solid black';
        color = true;
    }
});