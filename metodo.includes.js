// PRATICA DO METODO INCLUDES () PARA PROCURAR UM ITEM NA MATRIZ.

let nomes = ['Lucas', 'Carlos', 'Maria']
console.log(nomes.includes('Lucas',)) // RETORNA TRUE, POIS CONTEM A STRING LUCAS.


function testeMetodo(numeros) {
    return numeros.includes(10)
}
console.log(testeMetodo([5, 4, 7, 1])) // RETORNA FALSE, POIS NÃO TEM NUMERO 10 NA MATRIZ