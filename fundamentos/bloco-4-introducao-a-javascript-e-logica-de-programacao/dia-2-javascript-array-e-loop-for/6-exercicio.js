// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odd = 0;

for (i = 0; i < numbers.length; i++) {
     if (numbers[i] % 2 !== 0) {
        odd++
     } 
}

if (numbers[i] % 2 === 0) {
    console.log('nenhum valor ímpar encontrado');
}
else {
    console.log(odd);
}