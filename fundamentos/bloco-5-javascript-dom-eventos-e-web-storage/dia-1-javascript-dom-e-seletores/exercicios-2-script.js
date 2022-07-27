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
//  Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
//  Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
