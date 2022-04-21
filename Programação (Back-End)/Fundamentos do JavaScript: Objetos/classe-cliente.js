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

const carol = new Cliente("Carol","carol@email.com","12345678910",100)

carol.exibirSaldo()

console.log(carol)