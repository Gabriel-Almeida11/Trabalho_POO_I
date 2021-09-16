class Veiculos{
    constructor(
        private _modelo:string,
        private _marca:string,
        private _ano:string,
        private _valorLocacao:number,
        private _quantidadeDias:number
    ){ }
    

    get modelo(){
        return this._modelo
    }
    
    get marca(){
        return this._marca
    }
    get ano(){
        return this._ano
    }
    
    get valorLocacao(){
        return this._valorLocacao
    }
    
    get quantidadeDias(){
        return this._quantidadeDias
    }
    

    set modelo(modelo:string){
        if(modelo == ''){
            throw new Error('Modelo inválido')
        }

        this.modelo = modelo
    }

    set marca(marca:string){
        if(marca == ''){
            throw new Error('Marca inválida')
        }
    }

    set ano(ano:string){
        if(ano == ''){
            throw new Error('Formato de ano inválido')
        }
    }
    
    set valorLocacao(valorLocacao:number){
        if(valorLocacao <= 0){
            throw new Error('Valor inserido tem que ser maior que 0')
        }
    }
    
    set quantidadeDias(quantidadeDias:number){
        if(quantidadeDias <= 0){
            throw new Error('Número de dias tem que ser maior que 0')
        }
    }

    public passeio(){
        return this.valorLocacao * this.quantidadeDias
    }
}

const veiculo = new Veiculos('SEDÃ', 'BMW', '05/08/2018', 900, 10)

console.log(veiculo)
console.log(veiculo.passeio())
