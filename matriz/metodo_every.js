// Esse método verifica se todos os elementos de um array atendem a uma determinada condição. 
// Ele retorna true se todos os elementos passarem no teste e false caso contrário.

const numeros = [2, 4, 6, 8, 10];

const todosSaoPositivos = numeros.every(numero => numero > 0);
console.log(todosSaoPositivos); // Saída: true

// Esse método verifica se pelo menos um elemento de um array atende a uma condição. 
// Ele retorna true se ao menos um elemento passar no teste e false se nenhum atender à condição.

const numeros2 = [2, 4, -6, 8, 10];

const algumNegativo = numeros2.some(numero => numero < 0);
console.log(algumNegativo); // Saída: true
