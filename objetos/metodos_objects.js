// Object.keys(objeto) retorna uma matriz com todas as chaves do objeto. e apartir disso voce pode iterar sobre eles.
// Object.values(ojt) retorna os valores das chaves
// Object.entries(obj) retorna as chaves e valores

const pessoa = {
    nome: "Alice",
    idade: 25,
    cidade: "São Paulo"
};

const chaves = Object.keys(pessoa);
console.log(chaves); // Saída: ["nome", "idade", "cidade"]