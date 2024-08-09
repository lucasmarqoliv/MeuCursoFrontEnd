// USO DO METODO JOIN PARA TRANFORMAR NUMEROS DA MATRIZ EM STRING, ACRESCENTANDO UMA STRING ENTRE ELES.
// ESSE METODO SE UTILIZA PARA TRANSFORMAR A MATRIZ PARA O FORMATO CSV.

let numeros = [5,0,7,8,9]
numeros = numeros.join(';')
console.log(numeros) // RETORNA 5;0;7;8;9

function testeJoin(numeros) {
    numeros = numeros.join(',')
    return numeros
}
console.log(testeJoin([5, 4, 8, 9, 7])) // RETORNA 5,4,8,9,7