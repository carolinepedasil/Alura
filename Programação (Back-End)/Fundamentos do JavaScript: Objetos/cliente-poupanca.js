function Cliente(nome,cpf,email,saldo){
  this.nome =nome
  this.cpf=cpf
  this.email =email
  this.saldo=saldo
  this.depositar = function(valor){
      this.saldo += valor
  }
}

const carol = new Cliente("Carol","12345678910","carol@email.com",100)

function ClientePoupanca(nome,cpf,email,saldo,saldoPoup)
{
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const caroline = new ClientePoupanca("Caroline","10987654321","caroline@email.com",100,200)

console.log(caroline)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

ju.depositarPoup(30)

console.log(caroline.saldoPoup)
console.log(carol.saldoPoup)