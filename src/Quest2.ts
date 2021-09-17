class Veiculos{
    constructor(
        private _modelo:string,
        private _marca:string,
        private _ano:number,
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

        this._modelo = modelo
    }

    set marca(marca:string){
        if(marca == ''){
            throw new Error('Marca inválida')
        }

        this._marca = marca
    }

    set ano(ano:number){
        if(ano == 0){
            throw new Error('Formato de ano inválido')
        }

        this._ano= ano
    }
    
    set valorLocacao(valorLocacao:number){
        if(valorLocacao <= 0){
            throw new Error('Valor inserido tem que ser maior que 0')
        }

        this._valorLocacao= valorLocacao
    }
    
    set quantidadeDias(quantidadeDias:number){
        if(quantidadeDias <= 0){
            throw new Error('Número de dias tem que ser maior que 0')
        }

        this._quantidadeDias= quantidadeDias
    }

    public passeio(){
        return this.valorLocacao * this.quantidadeDias
    }
}

const veiculo = new Veiculos('SEDÃ', 'BMW', 2018, 900, 10)



try{
    veiculo.modelo='Esportivo'
    veiculo.marca='volkswagen'
    veiculo.ano = 2016
    veiculo.valorLocacao= 300
    veiculo.quantidadeDias= 4
    
    console.log(veiculo)
    console.log(veiculo.passeio())
    

}catch(error:any){
    console.log(error.message)
}