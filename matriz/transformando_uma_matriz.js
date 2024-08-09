// FUNÇÃO PARA ALTERAR TODOS OS ITENS DA MATRIZ NUMEROS 
// USANDO O METODO .MAP (QUE APLICA UMA TRANSFORMAÇÃO PARA CADA ITEM DE UMA MATRIZ)

function multiplicandoNumerosPorDois(numeros){
    let numerosMultiplicados = numeros.map(function(numero){
        return numero * 2 // OBRIGATORIO O USO DO RETURN PARA FAZER O PROCESSO DE TRANSFORMAÇÃO
    })
    return numerosMultiplicados
}
console.log(multiplicandoNumerosPorDois([10, 5, 8, 9])) // RETORNA [20, 10, 16, 18]