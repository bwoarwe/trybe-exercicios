let fatorial = 1

for (i=10;i > 0;i--) {
    fatorial *= i 
}
console.log(fatorial);

// exercicio 2

word = 'tryber';
reverseword = '';

for (i = 0; i < word.length; i++) {
    reverseword += word[word.length - 1 - i];
} 

console.log(reverseword);


function soma(n1, n2) {
    return n1 + n2;
}

console.log(soma(3, 5, 5));