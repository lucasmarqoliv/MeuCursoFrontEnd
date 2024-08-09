
function trabalhando_com_objetos(Alunos) { // função recebe como parametro uma matriz de objetos.
    let somente_nomes = Alunos.map(function(Aluno){ // uso do metodo .map para obter da matriz de objs apenas os nomes e armazenar em uma VAR.
        return Aluno.nome
    })
return `Aqui está o nome dos Alunos: ${somente_nomes}` // retorna Aqui está o nome dos Alunos: Lucas,Carlos 

}
let Alunos = [
    {
        nome: 'Lucas', // chave: nome, e valor: Lucas.
        idade: 17,
        curso: 'ADS'
    },
    {
        nome: 'Carlos',
        idade: 18,
        curso: 'Direito'
    }
]

console.log(trabalhando_com_objetos(Alunos))
