// 1
function soma (a, b) {
    let soma = (a + b)
    console.log('Soma: ' + soma);
}
soma(2, 2);

function minus (a, b) {
    let minus = (a - b);
    console.log('Subtração: '+ minus);
}
minus(100, 80);

function times (a, b) {
    let times = (a * b);
    console.log('Multiplicação: ' + times);
}
times(5, 5);

function divide(a, b) {
    let divide = (a / b);
    console.log('Divisão: '+divide);
}
divide(100, 10);

function module (a, b) {
    let module = (a % b);
    console.log('Resto: '+module);
}
module(10, 3);

// 2
function maior(a, b){
    if (a > b) {
        console.log(a);
    }
    else console.log(b);
}
maior(10, 5)

// 3
function maior3(a, b, c) {
    if (a > b && a > c) {
        console.log(a + ' é maior');
    }
    else if (b > a && b > c) {
        console.log(b + ' é maior');
    }
    else console.log(c + ' é maior');
}
maior3(3, 5, 6);

// 4

function isPos(a) {
    if (a > 0) {
        return 'positive';
    }
    else if (a < 0) {
        return 'negative';
    }
    else return 'zero';
}
console.log(isPos(0));

// 5
function triangle(a, b, c) {
    let soma = (a + b + c);
    if (soma !== 180 && soma < 0) {
        return false
    }
    else if (a < 0 || b < 0 || c < 0){
        return 'erro'
    }
    else return true
}
console.log(triangle(60, 60, 60));

