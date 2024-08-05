function obterNomesCompletos(usuarios) {
    return usuarios.map(function(usuario){
        return `${usuario.nome} ${usuario.sobrenome}` // retorna [ 'Bárbara Silva', 'Carlos Bonaparte' ]
    })
}

// Não modifique as linhas abaixo
let usuarios = [
  {
    nome: "Bárbara",
    sobrenome: "Silva",
    idade: 21,
  },
  {
    nome: "Carlos",
    sobrenome: "Bonaparte",
    idade: 38,
  }
];

console.log(obterNomesCompletos(usuarios));