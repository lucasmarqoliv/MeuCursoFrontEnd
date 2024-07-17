// NESTE PROJETO FAÇO USO DO ENCADEAMENTO NA SEGUNDA FUNÇÃO 
// PARA APLICAR MAIS DE UM METODO DENTRO DE UMA FUNÇÃO 
// SEM PRECISAR CRIAR VARIAVEIS INTERMEDIARIAS. 

function adicionarItemNaLista(itens, item){
    itens.push(item)
        return itens
}

function exportarMinusculasCSV(itens){
    let minusculas = itens.map(function(item){
        return item.toLowerCase()
    }).join(', ')
    return minusculas
}

console.log(adicionarItemNaLista(['ARROZ', 'FEIJÃO', 'PÃO'], 'CARNE')) // RETORNA [ 'ARROZ', 'FEIJÃO', 'PÃO', 'CARNE' ]
console.log(exportarMinusculasCSV(['ARROZ', 'FEIJÃO', 'PÃO'])) // RETORNA arroz, feijão, pão