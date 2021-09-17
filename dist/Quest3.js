"use strict";
var Fatura = /** @class */ (function () {
    function Fatura(_numeros, _desc, _quantidadeComprada, _preco) {
        this._numeros = _numeros;
        this._desc = _desc;
        this._quantidadeComprada = _quantidadeComprada;
        this._preco = _preco;
    }
    Object.defineProperty(Fatura.prototype, "numeros", {
        get: function () {
            return this._numeros;
        },
        set: function (numeros) {
            this.numeros = numeros;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fatura.prototype, "desc", {
        get: function () {
            return this._desc;
        },
        set: function (desc) {
            this._desc = desc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fatura.prototype, "quantidadeComprada", {
        get: function () {
            return this._quantidadeComprada;
        },
        set: function (quantidadeComprada) {
            this._quantidadeComprada = quantidadeComprada;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fatura.prototype, "preco", {
        get: function () {
            return this._preco;
        },
        set: function (preco) {
            this._preco = preco;
        },
        enumerable: false,
        configurable: true
    });
    Fatura.prototype.fatura = function () {
        return this.quantidadeComprada * this.preco;
    };
    return Fatura;
}());
var f = new Fatura(537, 'Doce de Leite', 2, 15);
try {
    console.log(f);
    console.log(f.fatura());
}
catch (error) {
    console.log(error.message);
}
