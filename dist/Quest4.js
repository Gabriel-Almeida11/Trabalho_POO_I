"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ImpostoDeRenda = /** @class */ (function () {
    function ImpostoDeRenda(_nome, _rendaAnual) {
        this._nome = _nome;
        this._rendaAnual = _rendaAnual;
    }
    Object.defineProperty(ImpostoDeRenda.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            if (nome === '') {
                throw new Error('Nome inválido');
            }
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImpostoDeRenda.prototype, "rendaAnual", {
        get: function () {
            return this._rendaAnual;
        },
        set: function (rendaAnual) {
            if (rendaAnual <= 0) {
                throw new Error('A renda deve ser maior que 0');
            }
            this._rendaAnual = rendaAnual;
        },
        enumerable: false,
        configurable: true
    });
    return ImpostoDeRenda;
}());
var PessoaFisica = /** @class */ (function (_super) {
    __extends(PessoaFisica, _super);
    function PessoaFisica(nome, rendaAnual, _gastosComSaude) {
        var _this = _super.call(this, nome, rendaAnual) || this;
        _this._gastosComSaude = _gastosComSaude;
        return _this;
    }
    Object.defineProperty(PessoaFisica.prototype, "gastosComSaude", {
        get: function () {
            return this._gastosComSaude;
        },
        set: function (gastosComSaude) {
            if (gastosComSaude < 0) {
                throw new Error('Favor inserir gastos maiores do que 0');
            }
            this._gastosComSaude = gastosComSaude;
        },
        enumerable: false,
        configurable: true
    });
    PessoaFisica.prototype.calcImpostoDeRendaPF = function () {
        if (this.rendaAnual < 20000) {
            return this.rendaAnual * 0.15;
        }
        else
            (this.rendaAnual >= 2000);
        return this.rendaAnual * 0.25;
    };
    PessoaFisica.prototype.impostoSaude = function () {
        if (this.gastosComSaude > 0) {
            return this.gastosComSaude * 0.5;
        }
        else
            return this.gastosComSaude;
    };
    PessoaFisica.prototype.message = function () {
        return "O imposto de renda do(a) " + this.nome + ", \u00E9 de R$" + (this.calcImpostoDeRendaPF() - this.impostoSaude());
    };
    return PessoaFisica;
}(ImpostoDeRenda));
var PessoaJuridica = /** @class */ (function (_super) {
    __extends(PessoaJuridica, _super);
    function PessoaJuridica(nome, rendaAnual, _numFuncionarios) {
        var _this = _super.call(this, nome, rendaAnual) || this;
        _this._numFuncionarios = _numFuncionarios;
        return _this;
    }
    Object.defineProperty(PessoaJuridica.prototype, "numFuncionarios", {
        get: function () {
            return this._numFuncionarios;
        },
        set: function (numFuncionarios) {
            if (numFuncionarios <= 0) {
                throw new Error('Favor inserir quantidade de funcionarios válida.');
            }
            this._numFuncionarios = numFuncionarios;
        },
        enumerable: false,
        configurable: true
    });
    PessoaJuridica.prototype.calcImpostoRendaPJ = function () {
        if (this.numFuncionarios <= 10) {
            return this.rendaAnual * 0.16;
        }
        else
            return this.rendaAnual * 0.14;
    };
    return PessoaJuridica;
}(ImpostoDeRenda));
var p = new PessoaFisica('Zeca', 600, 300);
var empresa = new PessoaJuridica('Pichau', 750000, 10);
try {
    // p.nome='Zeca'
    // p.rendaAnual= 6000
    // p.gastosComSaude= 200
    // console.log(p)
    // console.log(p.message())
    empresa.nome = 'Terabyte';
    empresa.rendaAnual = 800000;
    empresa.numFuncionarios = 20;
    console.log(empresa);
    console.log(empresa.calcImpostoRendaPJ().toFixed(2));
}
catch (error) {
    console.log(error.message);
}
