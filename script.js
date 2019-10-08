var cv = document.getElementById('CV');
var leftBloc = document.getElementById('leftBloc');
var color = true;
cv.addEventListener('click', function (){

    if(color){
        this.style.backgroundColor = 'black';
        this.style.color = 'white';
        this.style.boxShadow = '10px 5px 5px gray';
        leftBloc.style.borderRight = '2px solid white';
        color = false;
    }else {
        this.style.backgroundColor = 'white';
        this.style.color = 'black';
        this.style.boxShadow = '10px 5px 5px black';
        leftBloc.style.borderRight = '2px solid black';
        color = true;
    }
});