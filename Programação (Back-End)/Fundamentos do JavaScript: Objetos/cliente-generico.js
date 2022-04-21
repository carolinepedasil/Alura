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

console.log(carol)