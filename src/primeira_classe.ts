class Pessoa{
    nome: string;
    idade: number;
    altura: number;

    constructor(nome: string, idade: number, altura: number){
        this.nome= nome;
        this.idade= idade;
        this.altura= altura
    }
   
    imprime(): string{
        return `A pessoa ${this.nome} tem ${this.idade} anos e mede ${this.altura} de altura.`
    }
    imprimeNome():string {
        return `O nome ${this.nome} tem ${this.nome.length} caracteres`

    }

    imprimiCurso(): void{
        console.log('Sistema de Informação - SI')
    }

    
}




const p1 = new Pessoa('João', 30, 1.8)
console.log(p1)
console.log(p1.imprime())
console.log(p1.imprimeNome())
console.log(p1.nome, p1.idade)
p1.imprimiCurso()


const p2= new Pessoa('Maria', 20, 1.6)
console.log(p2)
console.log(p2.imprimeNome())
console.log(p2.nome, p2.altura)

