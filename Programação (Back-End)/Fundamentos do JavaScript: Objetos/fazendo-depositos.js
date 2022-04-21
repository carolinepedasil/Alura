const cliente = {
  nome: 'Carol',
  idade: 24,
  cpf: '12345678910',
  email: 'carol@email.com',
  fones: [ '19987654321', '19123456789' ],
  dependentes: [
    {
      nome: 'Carol Silva',
      parentesco: 'filha',
      dataNasc: '02/02/202022' },
    {
      nome: 'Carolzinha Pereira',
      parentesco: 'filha',
      dataNasc: '01/01/2011'
    }
  ],
  saldo:100,
  depositar:function(valor){
    this.saldo += valor
  }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)