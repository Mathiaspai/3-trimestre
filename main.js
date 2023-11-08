
function tocaSom(idElementoaudio){
 document.querySelector(idElementoaudio).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');

//01-11-2023- lista numerada
let contador = 0;

while(contador <listaDeTeclas.length){

    listaDeTeclas[contador].onclick = function(){
        tocaSom('#som_tecla_splash')
    }
    contador = contador + 1;

    console.log(contador);
}