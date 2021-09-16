"use strict";
var Professor = /** @class */ (function () {
    function Professor(nome, idade, materia) {
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }
    Professor.prototype.seApresentar = function () {
        return "Meu nome \u00E9 " + this.nome + ", tenho " + this.idade + " anos e vou lecionar a disciplica de " + this.materia;
    };
    return Professor;
}());
var thiaguinho = new Professor('Luiz Claudio', 49, 'POO I');
console.log(thiaguinho);
console.log(thiaguinho.seApresentar());
