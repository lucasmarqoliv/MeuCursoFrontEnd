// NESTE PROJETO FAÇO USO DO ENCADEAMENTO NA SEGUNDA FUNÇÃO 
// PARA APLICAR MAIS DE UM METODO DENTRO DE UMA FUNÇÃO 
// SEM PRECISAR CRIAR VARIAVEIS INTERMEDIARIAS. 

function adicionarItemNaLista(itens, item){
    itens.push(item) // METODO PUSH ADICIONA O PARAMETRO ITEM A MATRIZ ITENS
        return itens
}

function exportarMinusculasCSV(itens){
    let minusculas = itens.map(function(item){
        return item.toLowerCase() // METODO .MAP TRANSFORMA CADA ITEM DA MATRIZ E CONVERTE CADA ITEM DA MATRIZ EM MINUSCULOS
    }).join(', ') // UTILIZAÇÃO DO ENCADEAMENTO APOS O METODO .MAP
    return minusculas
}

console.log(adicionarItemNaLista(['ARROZ', 'FEIJÃO', 'PÃO'], 'CARNE')) // RETORNA [ 'ARROZ', 'FEIJÃO', 'PÃO', 'CARNE' ]
console.log(exportarMinusculasCSV(['ARROZ', 'FEIJÃO', 'PÃO'])) // RETORNA arroz, feijão, pão