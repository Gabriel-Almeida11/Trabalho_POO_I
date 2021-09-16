class Professor {
    nome: string;
    idade: number;
    materia: string;

    constructor(nome: string, idade: number, materia: string){
        this.nome= nome;
        this.idade= idade;
        this.materia= materia
    }

    seApresentar(): string {
        return `Meu nome é ${this.nome}, tenho ${this.idade} anos e vou lecionar a disciplica de ${this.materia}`
    }
}

const thiaguinho = new Professor('Luiz Claudio', 49, 'POO I')
console.log(thiaguinho)
console.log(thiaguinho.seApresentar())