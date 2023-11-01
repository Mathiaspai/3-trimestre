
function tocaSomPom(){
 document.querySelector('#som_tecla_pom').play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');

//01-11-2023- lista numerada
let contador = 0;

while(contador <listaDeTeclas.length){

    listaDeTeclas[0].onclick = tocaSomPom;
    contador = contador + 1;

    console.log(contador);
}