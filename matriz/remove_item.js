// O método splice em JavaScript permite adicionar, remover ou substituir elementos em um array.
// array.splice(índiceInicial, númeroDeItensRemovidos, item1, item2, ..., itemN);


const frutas = ["maçã", "banana", "laranja", "uva"];
frutas.splice(1, 2); // Começa no índice 1 e remove 2 elementos

console.log(frutas); // Saída: ["maçã", "uva"]
