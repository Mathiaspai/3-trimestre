
function tocaSom(idElementoaudio){
 document.querySelector(idElementoaudio).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');

//01-11-2023- lista numerada
let contador = 0;

while(contador <listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];
    const instrumentos = tecla.classlist[1];
    //template atring
    const idAudio = `#som_${instrumentos}`;

    console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio)
    };
    contador = contador + 1;

    console.log(contador);
}