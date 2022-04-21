class Cliente {
  constructor(nome,email,cpf,saldo){
   this.nome = nome
   this.email = email
   this.cpf = cpf
   this.saldo = saldo
  }

  depositar(valor){
      this.saldo += valor
  }

  exibirSaldo(){
      console.log(this.saldo)
  }
}

class ClientePoupanca extends Cliente{
  constructor(nome,email,cpf,saldo,saldoPoupanca){
    super(nome,email,cpf,saldo)
    this.saldoPoupanca = saldoPoupanca
  }

  depositarPoupanca(valor){
    this.saldoPoupanca += valor
  }
}

const carol = new ClientePoupanca("Carol","carol@email.com","12345678910",100,200)

console.log(carol)

carol.depositar(50)
carol.depositarPoupanca(50)

console.log(carol)