// Crie uma função para receber dois numeros como parâmetro

function soma(num1:number, num2:number){
    return num1 + num2

}


console.log(soma(2, 6))



// //Crie uma função para receber dois numeros como objeto utilizando
// interface e retornando a soma deles

interface ISomarData{
    num1: number;
    num2: number
}

function somar({num1, num2}:ISomarData){
    return num1 + num2
}

console.log(somar({
    num1: 10,
    num2: 20
}))
