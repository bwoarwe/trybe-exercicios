//         Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
//         - document.getElementById()
//         - document.getElementsByClassName()
//         - document.getElementsByTagName()
//  Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
document.getElementsByTagName("p")[1].innerHTML =
  "Formado e trabalhando na area de TI";

//  Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function changeSquareToGreen() {
    let squareYellow = document.getElementsByClassName('main-content')[0];
    squareYellow.style.background = "rgb(76,164,109)";
  }
  changeSquareToGreen();

//  Crie e execute uma função que mude a cor do quadrado vermelho para branco.

function changeSquareToWhite () {
    let redSquare = document.getElementsByClassName('center-content')[0];
    redSquare.style.background = 'white';
}
changeSquareToWhite()


//  Crie e execute uma função que corrija o texto da tag <h1>.

function corrigir () {
    let java = document.getElementsByClassName('title')[0];
    java.innerHTML = 'Exercício 5.1 - JavaScript'; 
}
corrigir()

//  Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.

function strong () {
    let upper = document.querySelectorAll('p')[0]; 
    upper.innerHTML = upper.innerHTML.toUpperCase();
}
strong()

//  Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.

function showConsole () {
    let log = document.getElementsByTagName('p');
    for (i = 0; i < log.length; i++)
    console.log(log[i].innerHTML); 
}
showConsole()