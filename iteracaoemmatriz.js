//EXEMPLO DE USO DE ITERAR COM ITENS DE MATRIZ (SOMAR CADA ITEM SEPARADAMENTE).
// NESTE EXEMPLO SE OBTEM O TOTAL DAS NOTAS ATRAVES DE ITERAÇÃO COM A MATRIZ NOTAS.
// USANDO O METODO .forEach() PARA ITERAR COM CADA ITEM SEPARADAMENTE.
// E NA SEGUNDA FUNÇÃO SE OBTEM A MEDIA CHAMANDO A FUNÇÃO QUE CONTEM O TOTAL DAS NOTAS.

function obterSomaDeTodasAsNotas(notas) {
let soma = 0
  notas.forEach(function(nota){
    soma = soma + nota
})
return soma
}


function obterMediaDeTodasAsNotas(notas) {
let soma = obterSomaDeTodasAsNotas(notas)
let media = soma/notas.length
  return media
}
console.log(obterSomaDeTodasAsNotas([10, 5, 8, 9, 2]))// RETORNA 34 (total das notas)
console.log(obterMediaDeTodasAsNotas([10, 5, 8, 9, 2])) // RETORNA 6.8 A MEDIA