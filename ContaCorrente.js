import { Cliente } from './Cliente.js'
export class ContaCorrente {
 static numeroDeContas = 0;//atributo estatico

  agencia;
  _cliente;


  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {//se meu novo valor for uma isntancia de cliente se sim faça a atribuição se não não faça nada para não atribuir um valor errado
      this._cliente = novoValor;
    }

  }
  get cliente() {
    return this._cliente;
  }

  _saldo = 0;
  get saldo() { //get é um acessor publico
    this._saldo;
  }

  constructor(agencia, cliente) {
    this.agencia = agencia;
    this.cliente = cliente;
    ContaCorrente.numeroDeContas += 1;
  }

  sacar(valor) {//é uma operação com valor
    if (this._saldo >= valor) {
      this._saldo -= valor
      return valor;// se não tiver o return vai me devolver undefined
    }

  }
  depositar(valor) {
    if (valor <= 0) { //pegar o valor verificar se não está negativo
      return;// o retorno de um método (return) pode ter duas funções: parar a execução antecipadamente ao nos depararmos com uma condição indesejada, algo que chamamos de early return; ou realmente retornar um valor para que o sistema continue trabalhando com ele de alguma forma.        
    }
    this._saldo += valor;// fazer a soma do valor só se for positivo
  }

  transferir(valor, conta) {
    conta.cidade = "São Paulo";//adicionando dinamicamente um atributo
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);

  }
}
