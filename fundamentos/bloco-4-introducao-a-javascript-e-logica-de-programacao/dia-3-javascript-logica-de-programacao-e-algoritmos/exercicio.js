// 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato: A soma de 1 a 50 é: X.

sum = 0
for (i = 0; i <= 50;i++) {
    sum += i
}
console.log('A soma de 1 a 50 é:',sum);




// 2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3. Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let count = 0

for (i = 2;i <= 150;i++) {
    if (i%3 === 0) {
        count += 1
    }
}

if (count == 50) {
    console.log('Mensagem Secreta');
}








// 3. Crie um algoritmo que recebe a idade de PessoaX, PessoaY e PessoaZ e imprime quem é a mais nova no formato: "Pessoa" é a mais nova.

x = 12
y = 13
z = 11

if (x < y && x < z) {
    console.log('X é a mais nova');
}
else if (y < z && y < x) {
    console.log('Y é a mais nova');
}
else {
    console.log('Z é a mais nova');
}