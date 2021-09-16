class Animal {
    tipo: string;
    nome: string;
    idade: number;

    constructor(tipo: string, nome: string, idade: number){
        this.tipo= tipo;
        this.nome= nome;
        this.idade= idade
    }
}

class Cachorro extends Animal{
    raca: string;

    constructor(tipo: string, nome: string, idade: number, raca:string){
        super(tipo, nome, idade)
        this.raca= raca
    }
}


let c1= new Cachorro ('cachorro', 'Luna', 4, 'shitzu')
console.log(c1)