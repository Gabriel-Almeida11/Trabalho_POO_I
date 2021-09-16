"use strict";
// Crie uma função para receber dois numeros como parâmetro
function soma(num1, num2) {
    return num1 + num2;
}
console.log(soma(2, 6));
function somar(_a) {
    var num1 = _a.num1, num2 = _a.num2;
    return num1 + num2;
}
console.log(somar({
    num1: 10,
    num2: 20
}));
