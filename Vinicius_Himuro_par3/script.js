const clicou = (idInput, idResp) =>{
  let texto = document.getElementById(idInput).value
  if(!texto) {
    document.getElementById(idResp).value = texto
    alert("Insira um valor")
    return
  }
  let textoTratado
  if(idInput === "transposicao") textoTratado = encriptTransposicao(texto)
  else textoTratado = substituicao(texto,idInput)
  document.getElementById(idResp).value = textoTratado
}

const dencriptSubstituicao = (texto) =>{
  let resposta = ""
  for(let i = 0; i<texto.length; i++){
    let codeAtual = texto.charCodeAt(i)
    let charAtual = texto.charAt(i)
    if(codeAtual < 65 || codeAtual > 122){ //fora de A-z
      resposta = resposta + charAtual
      continue
    } 
    if(codeAtual > 90 && codeAtual < 97){ //entre Z e a
      resposta = resposta + charAtual
      continue
    }
    if(codeAtual === 65 || codeAtual === 97){  //Z ou z
      let novoCode = codeAtual + 25
      let novoChar = String.fromCharCode(novoCode)
      resposta = resposta + novoChar
      continue
    }
    let novoCode = codeAtual - 1
    let novoChar = String.fromCharCode(novoCode)
    resposta = resposta + novoChar
  }
  return resposta
}

const encriptSubstituicao = (texto) =>{
  let resposta = ""
  for(let i = 0; i<texto.length; i++){
    let codeAtual = texto.charCodeAt(i)
    let charAtual = texto.charAt(i)
    if(codeAtual < 65 || codeAtual > 122){ //fora de A-z
      resposta = resposta + charAtual
      continue
    } 
    if(codeAtual > 90 && codeAtual < 97){ //entre Z e a
      resposta = resposta + charAtual
      continue
    }
    if(codeAtual === 90 || codeAtual === 122){  //Z ou z
      let novoCode = codeAtual - 25
      let novoChar = String.fromCharCode(novoCode)
      resposta = resposta + novoChar
      continue
    }
    let novoCode = codeAtual + 1
    let novoChar = String.fromCharCode(novoCode)
    resposta = resposta + novoChar
  }
  return resposta
}