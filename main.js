
function tocaSom(idElementoaudio){
 document.querySelector(idElementoaudio).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');

//01-11-2023- lista numerada
for (let contador = 0; contador <listaDeTeclas.length; contador++){

}



    const tecla = listaDeTeclas[contador];
    const instrumentos = tecla.classlist[1];
   
    const idAudio = `#som_${instrumentos}`; //template atring

    console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio)
    }

    tecla.onkeydow = function () {
        console.log(evento.code == 'space')
        if  (evento.code =='space'){
            tecla.classList.add('ativa');
        }
        

    }
     tecla.onkeyup = function (){
        tecla.classList.remove('ativa');  
     }   
     
          
