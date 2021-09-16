interface iEndereco{
    rua:string,
    numero: number,
    bairro: string,
    cidade: string
}


let endereco: iEndereco ={
    rua:'Travessa Leandro de Freitas',
    numero:15,
    bairro: 'Doutor Mesquita',
    cidade: 'Barra Do Piraí'
}

console.log(endereco)