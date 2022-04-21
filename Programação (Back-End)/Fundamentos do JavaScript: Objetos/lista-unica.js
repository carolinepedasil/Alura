const clientes = [
  {
    nome: "Carol",
    cpf: "12345678910",
    dependentes: [{
      nome: "Caroline",
      parentesco: "filha",
      dataNasc: "01/01/2011"
     },
     {
      nome: "Carolzinha",
      parentesco: "filha",
      dataNasc: "02/02/2022"
     }],
  },
  {
    nome: "Cacá",
    cpf: "10987654321",
    dependentes: [{
      nome: "Carolzita",
      parentesco: "filha",
      dataNasc: "05/05/2005"
     }],
  } 
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDependentes)