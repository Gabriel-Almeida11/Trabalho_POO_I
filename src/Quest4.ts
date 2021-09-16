class ImpostoDeRenda{
    constructor(
        protected _nome:string,
        protected _rendaAnual:number
    ){ }

    get nome(){
        return this._nome
    }

    get rendaAnual(){
        return this._rendaAnual
    }

    set nome(nome:string){
        if(nome = ''){
            throw new Error('Nome inválido')
        }

      this._nome = nome
    }

    set rendaAnual(rendaAnual:number){
        if(rendaAnual <= 0 ){
            throw new Error('A renda deve ser maior que 0')
        }

        this._rendaAnual = rendaAnual
    }
}

class PessoaFisica extends ImpostoDeRenda{
    constructor(
        nome:string,
        rendaAnual:number,
        protected _gastosSaude:number
    ){ super(nome,rendaAnual) }
    
    get gastosComSaude(){
        return this._gastosSaude
    }
    
    set gastosSaude(gastosSaude:number){
        this._gastosSaude = gastosSaude
    }

    public calcImpostoDeRendaPF(){
        if(this.rendaAnual < 20000){
            return this.rendaAnual * 0.15
        }else if(this.rendaAnual >=2000 && this.gastosSaude == 0){
            return this.rendaAnual * 0.25
        }else if(this.rendaAnual >=2000 && this.gastosSaude != 0){
            return (
                (this.rendaAnual * 0.25) - 
                (this.gastosSaude * 0.5)
            )
        }
    }

    public message(){
        return `O imposto de renda do(a) ${this.nome}, é de R$${this.calcImpostoDeRendaPF()}`
    } 
}

class PessoaJuridica extends ImpostoDeRenda{
    constructor(
        nome:string,
        rendaAnual:number,
        protected _numFuncionarios:number
    ){ super(nome,rendaAnual) }

    get numFuncionarios(){
        return this._numFuncionarios
    }
    
    set gastosComSaude(numFuncionarios:number){
        if(numFuncionarios == 0){
            throw new Error('Favor inserir quantidade de funcionarios válida.')
        }
        this._numFuncionarios = numFuncionarios
    }

    public calcImpostoRendaPJ(){
        if(this.numFuncionarios <= 10 ){
            return  this.rendaAnual * 0.16
        }else if(this.numFuncionarios >=10){
            return this.rendaAnual * 0.14
        }
    }

    public message(){
        return `O imposto da empresa ${this.nome} é de R$${this.calcImpostoRendaPJ()}`
    } 
}

let p = new PessoaFisica('Zeca',0, 6000)
console.log(p)
console.log(p.message())

try{

}catch(error:any){
    console.log(error.message)
}

let empresa = new PessoaJuridica('Pichau', 750000, 10)
console.log(empresa)
console.log(empresa.message())

try{

}catch(error:any){
    console.log(error.message)
}