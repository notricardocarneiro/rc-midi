function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
   
    if (elemento && elemento.localName==='audio'){
            elemento.play();
    }
    else {
        //alert ('Elemento não encontrado')
        console.log ('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (contador = 0 ; contador < listaDeTeclas.length; contador ++ ){
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}` //template string
    
    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento) {
        
        //console.log(evento.code) -usado para verificar o code de uma tecla pressionada.

        if (evento.code === 'Space' || evento.code === 'Enter' ){
        tecla.classList.add('ativa');
        }
    }
    
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }

}




/*
Projeto antes de melhorar o código para futuras implementações como teclas de piano e etc...

function tocaSom(seletorAudio){
    document.querySelector(seletorAudio) .play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (contador = 0 ; contador < listaDeTeclas.length; contador ++ ){
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}` //template string
    
    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento) {
        
        //console.log(evento.code) -usado para verificar o code de uma tecla pressionada.

        if (evento.code === 'Space' || evento.code === 'Enter' ){
        tecla.classList.add('ativa');
        }
    }
    
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }

}



//Projeto usando while
let contador=0;

//Enquanto
while (contador < listaDeTeclas.length) {
    
    const tecla = listaDeTeclas[contador];
    
    const instrumento = tecla.classList[1];

    
    const idAudio = `#som_${instrumento}` //template string

    //console.log(idAudio);


//'#som_{instrumento}'
    
    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    contador += 1;

    //console.log(contador);
}




//Projeto de forma iniciante

function tocaSomPom(){
    document.querySelector('#som_tecla_pom') .play();
}

document.querySelectorAll('.tecla')

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0] .onclick = tocaSomPom;


document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomClap(){
    document.querySelector('#som_tecla_clap') .play();
}

document.querySelector('.tecla_clap').onclick = tocaSomClap;

function tocaSomTim(){
    document.querySelector('#som_tecla_tim') .play();
}

document.querySelector('.tecla_tim').onclick = tocaSomTim;

function tocaSomPuff(){
    document.querySelector('#som_tecla_puff') .play();
}

document.querySelector('.tecla_puff').onclick = tocaSomPuff;

function tocaSomSplash(){
    document.querySelector('#som_tecla_splash') .play();
}

document.querySelector('.tecla_splash').onclick = tocaSomSplash;

function tocaSomToim(){
    document.querySelector('#som_tecla_toim') .play();
}

document.querySelector('.tecla_toim').onclick = tocaSomToim;

function tocaSomPsh(){
    document.querySelector('#som_tecla_psh') .play();
}

document.querySelector('.tecla_psh').onclick = tocaSomPsh;

function tocaSomTic(){
    document.querySelector('#som_tecla_tic') .play();
}

document.querySelector('.tecla_tic').onclick = tocaSomTic;

function tocaSomTom(){
    document.querySelector('#som_tecla_tom') .play();
}

document.querySelector('.tecla_tom').onclick = tocaSomTom;
*/