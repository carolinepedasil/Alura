const cliente = {
  nome: 'Carol',
  idade: 24,
  cpf: '12345678910',
  email: 'carol@email.com',
  fones: [ '19987654321', '19123456789' ],
  dependentes: [
    {
      nome: 'Caroline Silva',
      parentesco: 'filha',
      dataNasc: '01/01/2011' },
    {
      nome: 'Carolzinha Pereira',
      parentesco: 'filha',
      dataNasc: '02/02/2022'
    }
  ],
  saldo:100,
  depositar:function(valor){
    this.saldo += valor
  }
}

let relatorio="";

for ( let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue
    }else{
        relatorio += `
        ${info} ==> ${cliente[info]}
        `
    }    
}
console.log(relatorio)