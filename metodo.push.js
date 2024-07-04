// MÉTODO PUSH() PARA ADICIONAR ITEM A MATRIZ. E PARA TRAZER O COMPRIMENTO DA MATRIZ.


let diasTrabalhados = []
diasTrabalhados.push(10)
console.log(diasTrabalhados) // RETORNA 10
console.log(diasTrabalhados.push()) // RETORNA 1 (COMPRIMENTO DA MATRIZ)


let mesesTrabalhados = [1,2,3]
mesesTrabalhados.push(4)
console.log(mesesTrabalhados) // RETORNA 1, 2, 3, 4
console.log(mesesTrabalhados.push()) // RETORNA 4 (COMPRIMENTO DA MATRIZ)


function adicionandoItem(itens) {
    itens.push(1)
    console.log(itens.push()) // RETORNA 1 (COMPRIMENTO DA MATRIZ)
    return itens
}
console.log(adicionandoItem([])) // RETORNA 1


function diasFaltados(dias) {
    dias.push(30)
    console.log(dias.push()) // RETORNA 6 (COMPRIMENTO DA MATRIZ)
    return dias
}
console.log(diasFaltados([1, 5, 9, 20, 10])) // RETORNA 1, 5, 9, 20, 10, 30