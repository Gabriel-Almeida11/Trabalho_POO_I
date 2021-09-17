"use strict";
var Veiculos = /** @class */ (function () {
    function Veiculos(_modelo, _marca, _ano, _valorLocacao, _quantidadeDias) {
        this._modelo = _modelo;
        this._marca = _marca;
        this._ano = _ano;
        this._valorLocacao = _valorLocacao;
        this._quantidadeDias = _quantidadeDias;
    }
    Object.defineProperty(Veiculos.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        set: function (modelo) {
            if (modelo == '') {
                throw new Error('Modelo inválido');
            }
            this._modelo = modelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "marca", {
        get: function () {
            return this._marca;
        },
        set: function (marca) {
            if (marca == '') {
                throw new Error('Marca inválida');
            }
            this._marca = marca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "ano", {
        get: function () {
            return this._ano;
        },
        set: function (ano) {
            if (ano == 0) {
                throw new Error('Formato de ano inválido');
            }
            this._ano = ano;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "valorLocacao", {
        get: function () {
            return this._valorLocacao;
        },
        set: function (valorLocacao) {
            if (valorLocacao <= 0) {
                throw new Error('Valor inserido tem que ser maior que 0');
            }
            this._valorLocacao = valorLocacao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "quantidadeDias", {
        get: function () {
            return this._quantidadeDias;
        },
        set: function (quantidadeDias) {
            if (quantidadeDias <= 0) {
                throw new Error('Número de dias tem que ser maior que 0');
            }
            this._quantidadeDias = quantidadeDias;
        },
        enumerable: false,
        configurable: true
    });
    Veiculos.prototype.passeio = function () {
        return this.valorLocacao * this.quantidadeDias;
    };
    return Veiculos;
}());
var veiculo = new Veiculos('SEDÃ', 'BMW', 2018, 900, 10);
try {
    veiculo.modelo = 'Esportivo';
    veiculo.marca = 'volkswagen';
    veiculo.ano = 2016;
    veiculo.valorLocacao = 300;
    veiculo.quantidadeDias = 4;
    console.log(veiculo);
    console.log(veiculo.passeio());
}
catch (error) {
    console.log(error.message);
}
