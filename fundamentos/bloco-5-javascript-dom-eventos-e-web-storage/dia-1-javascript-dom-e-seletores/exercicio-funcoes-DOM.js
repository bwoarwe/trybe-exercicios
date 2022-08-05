/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie e execute uma função que mude a cor do quadrado vermelho para branco.
 Crie e execute uma função que corrija o texto da tag <h1>.
 Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
        */

function mudaTexto(texto) {
  const p = document.getElementsByTagName("p")[1];
  p.innerHTML = texto;
}
mudaTexto("formado e trabalhando");

function mudaQuadrado (){
    const quadrado = document.getElementsByClassName('main-content')[0];
    quadrado.style.background = "rgb(76,164,109)";
}
mudaQuadrado()

function mudaCentro () {
    let centro = document.getElementsByClassName('center-content')[0];
    centro.style.background = 'white'
}
mudaCentro()

function novoH1(h1) {
    let nH1 = document.getElementsByClassName('title')[0];
    nH1.innerHTML = h1; 
}
novoH1('Exercício 5.1 - JavaScript')

function upper(){
    let min = document.getElementsByTagName('p')[0];
    min.innerHTML = min.innerHTML.toUpperCase();
}
upper()

function mostraTudo () {
    let p = document.getElementsByTagName('p');
    for (index = 0; index < p.length; index += 1){
        console.log(p[index].innerHTML);
    }
}
console.log(mostraTudo())