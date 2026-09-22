// Prática: Crie uma variável dia com um número de 1 a 7 e use switch para exibir o nome do dia da semana, com default para valores inválidos. Depois:
// - Remova os break e observe o que acontece.
// - Reescreva o código para exibir "Dia útil" para 1 a 5 e "Fim de semana" para 6 e 7, agrupando os case.
// - Troque dia por "1" (string) e veja se algum case é acionado.

//Teste 1: estrutura padrão do switch

let dia = 3
switch (dia) {
  case 1:
    console.log("Domingo")
    break
  case 2:
    console.log("Segunda-feira")
    break
  case 3:
    console.log("Terça-feira")
    break
  case 4:
    console.log("Quarta-feira")
    break
  case 5:
    console.log("Quinta-feira")
    break
  case 6:
    console.log("Sexta-feira")
    break
  case 7:
    console.log("Sábado")
    break
  default:
    console.log("Dia inválido")
}

//Teste 2: sem break

switch (dia) {
  case 1:
    console.log("Domingo")
  case 2:
    console.log("Segunda-feira")
  case 3:
    console.log("Terça-feira")
  case 4:
    console.log("Quarta-feira")
  case 5:
    console.log("Quinta-feira")
  default:
    console.log("Dia inválido")
}

//Teste 3: dia útil

let diaAgrupado = 2

switch (diaAgrupado) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Dia útil")
    break
  case 6:
  case 7:
    console.log("Fim de semana")
    break
  default:
    console.log("Dia inválido")
}

//Teste 4: string

let diaString = "1"

switch (diaString) {
  case 1:
    console.log("Domingo")
    break
  default:
    console.log("Dia inválido")
}