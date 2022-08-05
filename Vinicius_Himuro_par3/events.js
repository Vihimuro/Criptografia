var inputSubstituicao = document.getElementById("substituicao")
var btnSubstituicao = document.getElementById("btnSubstituicao")
var inputDesubstituicao = document.getElementById("desubstituicao")
var btnDesubstituicao = document.getElementById("btnDesubstituicao")

var inputTransposicao = document.getElementById("transposicao")
var btnTransposicao = document.getElementById("btnTransposicao")
var inputDetransposicao = document.getElementById("detransposicao")
var btnDetransposicao = document.getElementById("btnDetransposicao")

inputSubstituicao.addEventListener("keyup", (event) => {
    if(event.key === 'Enter'){
      btnSubstituicao.click()
    }
})

inputDesubstituicao.addEventListener("keyup", (event) => {
  if(event.key === 'Enter'){
    btnDesubstituicao.click()
  }
})

inputTransposicao.addEventListener("keyup", (event) => {
  if(event.key === 'Enter'){
    btnTransposicao.click()
  }
})

inputTransposicao.addEventListener("keyup", (event) => {
  if(event.key === 'Enter'){
    btnDetransposicao.click()
  }
})