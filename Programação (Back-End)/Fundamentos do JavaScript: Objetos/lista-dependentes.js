const cliente = {
  nome: 'Carol',
  idade: 24,
  cpf: '12345678910',
  email: 'carol@email.com',
  fones: [ '19987654321', '19123456789' ],
  dependentes: [{
    nome: 'Caroline Silva',
    parentesco: 'filha',
    dataNasc: '01/01/2011'
  }]
}

cliente.dependentes.push({
    nome:"Carolzinha Pereira",
    parentesco:"filha",
    dataNasc:"02/02/2022"
})

// console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="01/01/2011")

console.log(filhaMaisNova)
console.log(filhaMaisNova[0].nome)