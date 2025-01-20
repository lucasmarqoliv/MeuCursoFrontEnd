const exemploConcatenacaoDeMatriz = (array1, array2) => {
    const numerosConcatenados = [...array1, ...array2];
    return numerosConcatenados;
};

console.log(exemploConcatenacaoDeMatriz([1, 2, 3], [4, 5, 6]));
// Saída: [1, 2, 3, 4, 5, 6]
