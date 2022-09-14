class Cliente { //campos e atributos
   nome;
   cpf;
    }

class ContaCorrente {
   agencia;
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
}


const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309; 

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;


contaCorrenteRicardo.depositar(-100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);

const valorSacado = contaCorrenteRicardo.sacar(50)
console.log(valorSacado)


console.log(contaCorrenteRicardo);

