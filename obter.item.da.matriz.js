// EXEMPLO DE USO DA PROPRIEDADE .LENGTH. PARA OBTER O ULTIMO ITEM DE UMA MATRIZ EX: notas[notas.length -1]. para descobrir sua posição. ex: notas.length -1.
// PROJETO QUE RETORNA PARA UM PROF. A QUANTIDADE DE NOTAS SUBMETIDAS, A PRIMEIRA E ULTIMA NOTA SUBMTIDA.
function obterNumeroTotalDeNotas(notas) {
    return notas.length
  }
  
  function obterPrimeiraNota(notas) {
    return notas[0]
  }
  
  function obterUltimaNota(notas) {
    return notas[notas.length -1]
  }

  function obterPosicaoUltimaNota(notas) {
    return notas.length -1
  }


  console.log(obterNumeroTotalDeNotas([5, 10, 7, 5, 10, 6, 7]))
  console.log(obterPrimeiraNota([5, 10 ,7, 5, 10, 6, 7]))
  console.log(obterUltimaNota([5, 10, 7, 5, 10, 6, 7]))
  console.log(obterPosicaoUltimaNota([5, 10, 7, 5, 10, 6, 7]))