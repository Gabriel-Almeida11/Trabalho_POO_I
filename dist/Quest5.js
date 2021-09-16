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
var Vendedores = /** @class */ (function () {
    function Vendedores(_nome, _salario, _valorVenda) {
        this._nome = _nome;
        this._salario = _salario;
        this._valorVenda = _valorVenda;
    }
    Object.defineProperty(Vendedores.prototype, "nome", {
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
    Object.defineProperty(Vendedores.prototype, "salario", {
        get: function () {
            return this._salario;
        },
        set: function (salario) {
            if (salario <= 0) {
                throw new Error('Quantia inválida');
            }
            this._salario = salario;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vendedores.prototype, "valorVenda", {
        get: function () {
            return this._valorVenda;
        },
        set: function (valorVenda) {
            if (valorVenda <= 0) {
                throw new Error('Valor de venda inválido');
            }
            this._valorVenda = valorVenda;
        },
        enumerable: false,
        configurable: true
    });
    Vendedores.prototype.desconto = function () {
        return (this.salario * 0.08);
    };
    return Vendedores;
}());
var VendedorDePessoaFisica = /** @class */ (function (_super) {
    __extends(VendedorDePessoaFisica, _super);
    function VendedorDePessoaFisica(nome, salario, valorVenda, _regiao) {
        var _this = _super.call(this, nome, salario, valorVenda) || this;
        _this._regiao = _regiao;
        return _this;
    }
    Object.defineProperty(VendedorDePessoaFisica.prototype, "regiao", {
        get: function () {
            return this._regiao;
        },
        set: function (regiao) {
            var lower = regiao.toLowerCase();
            if (lower != 'norte' && lower != 'nordeste' && lower != 'centro-oeste' && lower != 'sul' && lower != 'sudeste') {
                throw new Error('Região inválida!');
            }
            this._regiao = regiao;
        },
        enumerable: false,
        configurable: true
    });
    VendedorDePessoaFisica.prototype.comissaoVendedor = function () {
        var lower = this.regiao.toLowerCase();
        if (lower == 'norte') {
            return this.valorVenda * 0.15;
        }
        else if (lower == 'nordeste') {
            return this.valorVenda * 0.17;
        }
        else if (lower == 'centro-oeste') {
            return this.valorVenda * 0.14;
        }
        else if (lower == 'sul') {
            return this.valorVenda * 0.10;
        }
        else if (lower == 'sudeste') {
            return this.valorVenda * 0.12;
        }
        return this.comissaoVendedor();
    };
    VendedorDePessoaFisica.prototype.salTot = function () {
        return (this.salario - this.desconto()) + this.comissaoVendedor();
    };
    return VendedorDePessoaFisica;
}(Vendedores));
var PJ = /** @class */ (function (_super) {
    __extends(PJ, _super);
    function PJ(nome, salario, valorVenda, _nomeEmpresa, _Funcionarios) {
        var _this = _super.call(this, nome, salario, valorVenda) || this;
        _this._nomeEmpresa = _nomeEmpresa;
        _this._Funcionarios = _Funcionarios;
        return _this;
    }
    Object.defineProperty(PJ.prototype, "nomeEmpresa", {
        get: function () {
            return this._nomeEmpresa;
        },
        set: function (nomeEmpresa) {
            if (nomeEmpresa == '') {
                throw new Error('Nome da empresa não pode ser inválido');
            }
            this._nomeEmpresa = nomeEmpresa;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PJ.prototype, "Funcionarios", {
        get: function () {
            return this._Funcionarios;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PJ.prototype, "totFunc", {
        set: function (totFunc) {
            if (totFunc <= 0) {
                throw new Error('Total de funcionários não pode ser 0');
            }
            this._Funcionarios = totFunc;
        },
        enumerable: false,
        configurable: true
    });
    PJ.prototype.comissaoEmpresa = function () {
        if (this.valorVenda < 5000) {
            return this.valorVenda * 0.02;
        }
        else if (this.valorVenda >= 5000 && this.valorVenda < 10000) {
            return this.valorVenda * 0.04;
        }
        else if (this.valorVenda >= 10000) {
            return this.valorVenda * 0.06;
        }
        return this.comissaoEmpresa();
    };
    PJ.prototype.salTotEmp = function () {
        if (this.totFunc < 100) {
            return this.salario + this.comissaoEmpresa() + 200;
        }
        else {
            return this.salario + this.comissaoEmpresa() + 300;
        }
    };
    return PJ;
}(Vendedores));
var pessoa2 = new VendedorDePessoaFisica('José', 6000, 300, 'Sudeste');
console.log(pessoa2.comissaoVendedor());
console.log(pessoa2.salTot());
