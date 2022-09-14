export class ContaCorrente {
  agencia;
  cliente;

  _saldo = 0;

  sacar(valor){//é uma operação com valor
   if(this._saldo >= valor){
     this._saldo -= valor
     return valor;// se não tiver o return vai me devolver undefined
   }

  }
  depositar(valor){
     if(valor <= 0){ //pegar o valor verificar se não está negativo
      return;// o retorno de um método (return) pode ter duas funções: parar a execução antecipadamente ao nos depararmos com uma condição indesejada, algo que chamamos de early return; ou realmente retornar um valor para que o sistema continue trabalhando com ele de alguma forma.        
     }
   this._saldo += valor;// fazer a soma do valor só se for positivo
  }

  transferir(valor, conta){
    conta.cidade = "São Paulo";//adicionando dinamicamente um atributo
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
   
  }
}
