const cliente = {
  nome:"Carol",
  idade:23,
  cpf:"12345678910",
  email:"carol@email.com"
}

                //0     //1
const chaves = ["nome","idade","cpf","email"]

// console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))

console.log(cliente["conta"])