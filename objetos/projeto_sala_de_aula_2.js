
function obterSomaDasNotas(notas) {
  let atual = 0
  let soma = notas.reduce(function(total, atual){  // TRANSFORMA A MATRIZ EM UM ITEM
    return total + atual
  })
  return soma
}

function obterMediaDasNotas(notas) {
  let soma = obterSomaDasNotas(notas)
  let media = soma / notas.length
    return media
}

function obterNotasAumentadasEm2(notas) {
  notas = notas.map(function(nota){ // RETORNA CADA ITEM DA MATRIZ COM UMA NOVA TRANSFORMAÇÃO
    return nota + 2
  })
  return notas
}


console.log(obterSomaDasNotas([10, 5, 7, 9])) // RETORNA 31 (SOMA DOS ITENS DA MATRIZ)
console.log(obterMediaDasNotas([10, 5, 7, 9])) // RETORNA A MEDIA APARTIR DA FUNÇÃO ANTERIOR QUE CALCULA AS NOTAS
console.log(obterNotasAumentadasEm2([10, 5, 7, 9])) // RETORNA CADA ITEM DA MATRIZ ACRESCENTADO DOIS


