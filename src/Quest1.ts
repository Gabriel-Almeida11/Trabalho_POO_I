class Pessoa{
    constructor(
        private _nome: string,
        private _sexo: string,
        private _idade: number
    ){ }
    
   
    get nome(){
        return this._nome
    }

    get sexo(){
        return this._sexo
    }

    get idade() {
        return this._idade
    }

  
    set nome(nome:string){
        if(nome == ''){
            throw new Error('Nome inválido')
        }
        this._nome = nome
    }

    set sexo(sexo:string){
        if(sexo != 'Masculino' && sexo != 'Feminino'){
            throw new Error('Sexo inválido, insira masculino ou feminino')
        }

        this._sexo = sexo
    }

    set idade(idade:number){
        if(idade == 0){
            throw new Error('Insira uma idade válida')
        }
        
        this._idade = idade
    }

    public idadeValidation(){
        if(this.idade >= 18){
            return 'Pessoa maior de idade'
        }else {
            return 'Pessoa menor de idade'
        }
    }

}

let p1 = new Pessoa('João', 'Masculino', 15);
console.log(p1)
console.log(p1.idadeValidation())

let p2 = new Pessoa('Maria', 'Feminino', 25);
console.log(p2)
console.log(p2.idadeValidation())

