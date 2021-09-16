"use strict";
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    Pessoa.prototype.imprime = function () {
        return "A pessoa " + this.nome + " tem " + this.idade + " anos e mede " + this.altura + " de altura.";
    };
    Pessoa.prototype.imprimeNome = function () {
        return "O nome " + this.nome + " tem " + this.nome.length + " caracteres";
    };
    Pessoa.prototype.imprimiCurso = function () {
        console.log('Sistema de Informação - SI');
    };
    return Pessoa;
}());
var p1 = new Pessoa('João', 30, 1.8);
console.log(p1);
console.log(p1.imprime());
console.log(p1.imprimeNome());
console.log(p1.nome, p1.idade);
p1.imprimiCurso();
var p2 = new Pessoa('Maria', 20, 1.6);
console.log(p2);
console.log(p2.imprimeNome());
console.log(p2.nome, p2.altura);
