class Fatura{
    constructor(
        private _numeros:number, 
        private _desc:string,
        private _quantidadeComprada:number,
        private _preco:number
   ){ }
   

   get numeros(){
      return this._numeros 
   }
    
   get desc(){
      return this._desc 
   }
    
   get quantidadeComprada(){
      return this._quantidadeComprada 
   }
    
   get preco(){
      return this._preco 
   }
   

   set numeros(numeros:number){
      this.numeros = numeros
   }

   set desc(desc:string){
     this._desc = desc
   }

   set quantidadeComprada(quantidadeComprada:number){
      this._quantidadeComprada = quantidadeComprada 
   }

   set preco(preco:number){
      this._preco = preco
   }
   
   public fatura(){
        return this.quantidadeComprada * this.preco
    }
}

let f = new Fatura(537, 'Doce de Leite', 2, 15)
console.log(f)
console.log(f.fatura())