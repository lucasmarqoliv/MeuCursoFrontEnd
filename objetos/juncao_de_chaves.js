// Object.keys(objeto) retorna uma matriz com todas as chaves do objeto. e apartir disso voce pode iterar sobre eles.

const pessoa = {
    nome: "Alice",
    idade: 25,
    cidade: "São Paulo"
};

const chaves = Object.keys(pessoa);
console.log(chaves); // Saída: ["nome", "idade", "cidade"]