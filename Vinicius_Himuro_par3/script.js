const isEven = (n) =>{
  return n % 2 == 0
}

const transposicao = (texto) => {
  const notCaracter = ["/", "(", ")", ".", ",", ";", ":", "\"", "'", "`", "", " ", "/", "\\", "<", ">", "!", "?", "\[", "\]", "{", "}", "-", "_"]
  let splitedTexto = texto.split(/([?.,;:/_!-\s\u0028\u0029\u005B\u005D\u007B\u007D\u0022\u0027\u0060\u003C\u003E])/g)
  let resposta = splitedTexto.reduce((resposta, palavra) => {
    if (notCaracter.includes(palavra)) return resposta + palavra
    if (palavra.length < 2) return resposta + palavra
    let lastDigit = ""
    let palavraSplit = palavra.split("")
    if(!isEven(palavra.length)) lastDigit = palavraSplit.pop()
    for(let i = 1; i<palavraSplit.length; i += 2){
      aux = palavraSplit[i]
      palavraSplit[i] = palavraSplit[i - 1]
      palavraSplit[i - 1] = aux
    }
    let auxResp = palavraSplit.reduce((resp, letra) => {
      return resp + letra
    }, "")
    auxResp = auxResp + lastDigit
    return resposta + auxResp
  },"")
  return resposta
}

const naoMuda = (codeAtual) => {
  if(codeAtual < 65) return true  //menor que A
  if(codeAtual > 122) return true //maior que z
  if(codeAtual > 90 && codeAtual < 97) return true //entre Z e a
  return false
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

const clicou = (idInput, idResp) =>{
  let texto = document.getElementById(idInput).value
  if(!texto) {
    document.getElementById(idResp).value = texto
    alert("Insira um valor")
    return
  }
  let textoTratado = idInput === ("transposicao" || "detransposicao") ? transposicao(texto) : substituicao(texto, idInput)
  document.getElementById(idResp).value = textoTratado
}