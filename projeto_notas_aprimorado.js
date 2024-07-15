function adicionarNota(notas, nota) {
    notas.push(nota) // ADICIONA O ITEM DA MATRIZ NOTA A MATRIZ NOTAS
    return notas
  }
  
  function obterNumeroDeTestes(notas) {
    return notas.push() // RETORNA O COMPRIMENTO DA MATRIZ
  }
  
  function obterPrimeiraNota(notas) {
    return notas[0] // RETORNA O PRIMEIRO ITEM DA MATRIZ
  }
  
  function obterUltimaNota(notas) {
    return notas[notas.length -1] // RETORNA O ULTIMO ITEM DA MATRIZ
  }
  
  function aProvaEhMuitoFacil(notas) {
    return notas.includes(20) // VERIFICA SE NA MATRIZ CONTEM O NUMERO 20
  }
  
  function aNotaExiste(notas, nota) {
    return notas.includes(nota) // VERIFICA SE NA MATRIZ NOTAS CONTEM O ITEM DA MATRIZ NOTA
  }
  
  function exportarCSV(notas) {
    notas = notas.join(",") // SEPARA CADA ITEM DA MATRIZ POR VIRGULA
    return notas
  }
  console.log(adicionarNota([9,6,15,13,20], 13)) // RETORNA [ 9, 6, 15, 13, 20, 13 ]
  console.log(obterNumeroDeTestes([9,6,15,13,20])) // RETORNA 5
  console.log(obterPrimeiraNota([9,6,15,13,20])) // RETORNA 9
  console.log(obterUltimaNota([9,6,15,13,20])) // RETORNA 20
  console.log(aProvaEhMuitoFacil([9,6,15,13,20])) // RETORNA TRUE
  console.log(aNotaExiste([9,6,15,13,20], 13)) // RETORNA TRUE
  console.log(exportarCSV([9,6,15,13,20])) // RETORNA 9,6,15,13,20
