const cliente = {
  nome:"Carol",
  idade:24,
  cpf:"12345678910",
  email:"carol@email.com",
  fones:["19987654321","19123456789"]
}

cliente.dependentes = {
    nome:"Carolzinha",
    parentesco:"filha",
    dataNasc:"02/02/2022"
}

console.log(cliente)

cliente.dependentes.nome = "Carolzinha Carol Caroline"

console.log(cliente)