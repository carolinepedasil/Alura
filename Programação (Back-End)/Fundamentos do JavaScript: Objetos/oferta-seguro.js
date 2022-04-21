const cliente = {
  nome: 'Carol',
  idade: 24,
  cpf: '12345678910',
  email: 'carol@email.com',
  fones: ['19987654321', '191234567890'],
  dependentes: [
    {
      nome: 'Carolzinha Silva',
      parentesco: 'filha',
      dataNasc: '01/01/2011' },
    {
      nome: 'Caroline Pereira',
      parentesco: 'filha',
      dataNasc: '02/02/2022'
    }
  ],
  saldo:100,
  depositar:function(valor){
    this.saldo += valor
  }
}

function oferecerSeguro(obj){
  const propsClientes = Object.keys(obj);
  if(propsClientes.includes("dependentes"))
  {
    console.log(`Oferta de seguro de vida para ${obj.nome}`);
  }
}
console.log(Object.values(cliente))
console.log(Object.entries(cliente))
oferecerSeguro(cliente)