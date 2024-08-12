// Variaveis de instâncias sãos acessíveis apenas dentro da classe.
// sintaxe:
// this.nome_Variavel = "valor";

class Usuario {
    constructor() {
        this.nome = "Lucas"; // aqui se faz uso do hard code, inserindo os valores diretamente.
        this.idade = 28;
    }
}

let usuario = new Usuario();
console.log(usuario); // retorna: Usuario { nome: 'Lucas', idade: 28 }

// utilização de VAR de instancia recebida como parametro do constructor:

class Usuario_01 {
    constructor(nome, sobrenome, idade) {
        this.nome = nome; // a VAR de instancia recebe o parametro passado para o metodo constructor. (mais recomendável)
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
}
let usuario_01 = new Usuario_01("Lucas", "Marques", 28);
console.log(usuario_01);// retorna: Usuario_01 { nome: 'Lucas', sobrenome: 'Marques', idade: 28 }

