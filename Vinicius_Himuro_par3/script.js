const clicou = (idInput, idResp) =>{
  let texto = document.getElementById(idInput).value
  if(!texto) {
    document.getElementById(idResp).value = texto
    alert("Insira um valor")
    return
  }
  let textoTratado = idInput === ("tranposicao" || "detransposicao") ? transposicao(texto) : substituicao(texto, idInput)
  document.getElementById(idResp).value = textoTratado
}

const substituicao = (texto, idInput) => {
  let resposta = ""
  for(let i = 0; i<texto.length; i++){
    let codeAtual = texto.charCodeAt(i)
    let charAtual = texto.charAt(i)
    let novoCode
    let novoChar
    if(naoMuda(codeAtual)){ 
      resposta = resposta + charAtual
      continue
    } 
    novoCode = idInput === "substituicao" ? codeAtual + 1 : codeAtual - 1
    if ((codeAtual === 90 || codeAtual === 122) && idInput === "substituicao") novoCode = codeAtual - 25
    if ((codeAtual === 65 || codeAtual === 97) && idInput === "desubstituicao") novoCode = codeAtual + 25
    novoChar = String.fromCharCode(novoCode)
    resposta = resposta + novoChar
  }
  return resposta
}

const naoMuda = (codeAtual) => {
  if(codeAtual < 65) return true  //menor que A
  if(codeAtual > 122) return true //maior que z
  if(codeAtual > 90 && codeAtual < 97) return true //entre Z e a
  return false
} 
