class ImpostoDeRenda{
    constructor(
        private _nome:string,
        private _rendaAnual:number
    ){ }

    get nome(){
        return this._nome
    }

    get rendaAnual(){
        return this._rendaAnual
    }

    set nome(nome:string){
        if(nome === ''){
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
       private _gastosComSaude:number
    ){ super(nome,rendaAnual) }
    
    get gastosComSaude(){
        return this._gastosComSaude
    }
    
    set gastosComSaude(gastosComSaude:number){
            if(gastosComSaude < 0){

                throw new Error('Favor inserir gastos maiores do que 0')
            }
        this._gastosComSaude = gastosComSaude 

    }

    public calcImpostoDeRendaPF(){
        if(this.rendaAnual < 20000){
            return this.rendaAnual * 0.15
        }else (this.rendaAnual >=2000)
            return this.rendaAnual * 0.25    
        
    }

    public impostoSaude(){
        if(this.gastosComSaude > 0){
            return this.gastosComSaude * 0.5
        }else 
            return this.gastosComSaude 
    }

    public message(){
        return `O imposto de renda do(a) ${this.nome}, é de R$${this.calcImpostoDeRendaPF() - this.impostoSaude()}`
    } 
}

class PessoaJuridica extends ImpostoDeRenda{
    constructor(
        nome:string,
        rendaAnual:number,
      public _numFuncionarios:number
    ){ super(nome,rendaAnual) }

    get numFuncionarios(){
        return this._numFuncionarios
    }
    
    set numFuncionarios(numFuncionarios:number){
        if(numFuncionarios <= 0){
            throw new Error('Favor inserir quantidade de funcionarios válida.')
        }
        this._numFuncionarios = numFuncionarios
    }

    public calcImpostoRendaPJ(){
        if(this.numFuncionarios <= 10 ){
            return  this.rendaAnual * 0.16
        }else
            return this.rendaAnual * 0.14
        
    }

 
}

let p = new PessoaFisica('Zeca', 600, 300)

let empresa = new PessoaJuridica('Pichau', 750000, 10)

try{
    // p.nome='Zeca'
    // p.rendaAnual= 6000
    // p.gastosComSaude= 200


    // console.log(p)
    // console.log(p.message())

    
    
    
    empresa.nome= 'Terabyte'
    empresa.rendaAnual= 800000
    empresa.numFuncionarios= 20

    console.log(empresa)
    console.log(empresa.calcImpostoRendaPJ().toFixed(2))




}catch(error:any){
    console.log(error.message)
}