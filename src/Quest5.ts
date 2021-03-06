class Vendedores{
    constructor(
        public _nome:string,
        public _salario:number,
        public _valorVenda:number
    ){ }

    get nome(){
        return this._nome
    }
    
    get salario(){
        return this._salario
    }
    
    get valorVenda(){
        return this._valorVenda
    }

    set nome(nome:string){
        if(nome == ''){
            throw new Error('Nome inválido')
        }
        this._nome = nome
    }

    set salario(salario:number){
        if(salario <= 0){
            throw new Error('Quantia inválida')
        }
        this._salario = salario
    }
    
    set valorVenda(valorVenda:number){
        if(valorVenda <=0){
            throw new Error('Valor de venda inválido')
        }
        this._valorVenda = valorVenda
    }

    public desconto(){
        return (this.salario * 0.08)
    }
}

class VendedorDePessoaFisica extends Vendedores{
    constructor(
        nome:string,
        salario:number,
        valorVenda:number,
        public _regiao:string
    ){super(nome, salario,valorVenda)}

    get regiao(){
        return this._regiao
    }

    set regiao(regiao:string){
        let lower = regiao.toLowerCase()
        if(lower != 'norte' && lower != 'nordeste' && lower != 'centro-oeste' && lower != 'sul' && lower != 'sudeste'){
            throw new Error('Região inválida!')
        }

        this._regiao = regiao
    }

    public comissaoVendedor():number{
        let lower = this.regiao.toLowerCase()
        
        if(lower == 'norte'){  
            return this.valorVenda * 0.15
        }else if(lower == 'nordeste'){
            return this.valorVenda * 0.17
            }else if(lower == 'centro-oeste'){
                return this.valorVenda * 0.14
                }else if(lower == 'sul'){
                    return this.valorVenda * 0.10
                    }else if(lower == 'sudeste'){
                        return this.valorVenda * 0.12
                    }
        return this.comissaoVendedor();
    }

    public salTot(){
        return this.salario + this.comissaoVendedor() 
    }
}

class PJ extends Vendedores{
    constructor(
        nome:string,
        salario:number,
        valorVenda:number,
        private _nomeEmpresa: string,
        private _Funcionarios:number,
        
    ){ super(nome, salario, valorVenda)}

    get nomeEmpresa(){
        return this._nomeEmpresa
    }

    get Funcionarios(){
        return this._Funcionarios
    }

    set nomeEmpresa(nomeEmpresa:string){
        if(nomeEmpresa == ''){
            throw new Error('Nome da empresa não pode ser inválido')
        }
        this._nomeEmpresa = nomeEmpresa
    }

    set Funcionarios(Funcionarios:number){
        if(Funcionarios <=0){
            throw new Error('Total de funcionários não pode ser 0')
        }
        this._Funcionarios = Funcionarios
    }

    public comissaoEmpresa():number{
        if(this.valorVenda < 5000){
            return this.valorVenda * 0.02
        }else if(this.valorVenda >= 5000 && this.valorVenda < 10000){
            return this.valorVenda * 0.04
        }else
            return this.valorVenda * 0.06
        
    }
    
    

    public salTotEmp(){
        if(this.Funcionarios < 100){
            return this.salario + this.comissaoEmpresa() + 200
        }else {
            return this.salario + this.comissaoEmpresa() + 300
        }
    }

}

let pessoa2 = new VendedorDePessoaFisica('José',6000, 300,'Sudeste')

let e = new PJ ('Maria', 2000, 600, 'Mitsubishi', 20 )

try{
    // pessoa2.nome='João'
    // pessoa2.salario= 3000
    // pessoa2.valorVenda= 300
    // pessoa2.regiao='Sul'
    
    // console.log(pessoa2)
    // console.log(pessoa2.salTot())

    e.nome='Alex'
    e.salario= 10000
    e.valorVenda= 5000
    e.nomeEmpresa= 'Pichau'
    e.Funcionarios= 300

    console.log(e)
    console.log(e.salTotEmp())


 }catch(error:any){
     console.log(error.message)
 }