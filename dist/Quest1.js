"use strict";
var Pessoa = /** @class */ (function () {
    function Pessoa(_nome, _sexo, _idade) {
        this._nome = _nome;
        this._sexo = _sexo;
        this._idade = _idade;
    }
    Object.defineProperty(Pessoa.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            if (nome == '') {
                throw new Error('Nome inválido');
            }
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (sexo) {
            if (sexo != 'Masculino' && sexo != 'Feminino') {
                throw new Error('Sexo inválido, insira masculino ou feminino');
            }
            this._sexo = sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        set: function (idade) {
            if (idade <= 0) {
                throw new Error('Insira uma idade válida');
            }
            this._idade = idade;
        },
        enumerable: false,
        configurable: true
    });
    Pessoa.prototype.idadeValidation = function () {
        if (this.idade >= 18) {
            return 'Pessoa maior de idade';
        }
        else {
            return 'Pessoa menor de idade';
        }
    };
    return Pessoa;
}());
var p1 = new Pessoa('João', 'Masculino', 15);
console.log(p1);
console.log(p1.idadeValidation());
try {
    p1.nome = 'Gabriel';
    p1.sexo = 'Masculino';
    p1.idade = 20;
    console.log(p1);
    console.log(p1.idadeValidation());
}
catch (error) {
    console.log(error.message);
}
