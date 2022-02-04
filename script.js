

// Funcao para obter o elemento clicado
function elemento(e){

    if(e.target.outerHTML.startsWith('<div class="musica"')){

        elementoSelecionado = e.target;
        console.log(elementoSelecionado);
    }
    else if(e.target.outerHTML.startsWith("<p>Tocando")){
        elementoSelecionado = e.target.parentElement.parentElement;
        console.log(elementoSelecionado);
    }
    else{
        elementoSelecionado = e.target.parentElement;
        console.log(elementoSelecionado);
    }

    tirarTocando();

    stop();

    definirAudio();

    play();

    mostrarTocando();

}


let playBtn = document.getElementsByClassName("btn")[0];

let pauseBtn = document.getElementsByClassName("btn")[1];

function play(){
    audio.play();
    playBtn.style.display ="none";
    pauseBtn.style.display = "inline-block";

}

function pause(){
    audio.pause();
    pauseBtn.style.display = "none";
    playBtn.style.display ="inline-block";
}

function back(){
    audio.currentTime -= 10;
}

function skip(){
    audio.currentTime += 10;
}

function stop(){
    audio.pause();
    audio.currentTime = 0;
    pauseBtn.style.display = "none";
    playBtn.style.display ="inline-block";
}

onload = function(){
    
    audio = document.getElementsByClassName("audio")[0];
    // console.log(audio);

    // Mostrar tocando a primeira musica;
    primeiroTocando = document.getElementsByClassName("tocando")[0];
    primeiroTocando.style.display = "flex";

}

// Tirar tocando de todos
function tirarTocando(){

    let qtdTocando = document.getElementsByClassName("tocando").length;

    for(let i = 0; i < qtdTocando; i++){
        todosTocando = document.getElementsByClassName("tocando")[i];
        // console.log(todosTocando);
        todosTocando.style.display = "none";
    }
}

function definirAudio(){

    let audio = elementoSelecionado.getElementsByClassName("audio")[0];
}

function mostrarTocando(){

    esteTocando = elementoSelecionado.getElementsByClassName("tocando")[0];

    esteTocando.style.display = "flex";
}