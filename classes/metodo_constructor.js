
class Usuario {
    constructor (nome, sobrenome) {  // metodo que recebe dois parametros 
        console.log(`Criando instancia de usuário`)
    console.log(nome); // retorna Lucas
    console.log(sobrenome) // retorna Marques
    }
}

let Lucas = new Usuario('Lucas', 'Marques'); // definindo os parametros passados para o metodo constructor