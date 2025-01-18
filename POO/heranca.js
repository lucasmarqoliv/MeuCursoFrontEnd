class Funcionario {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    obterIniciais() {
        return this.nome[0] + this.sobrenome[0];
    }
}

class Gerente extends Funcionario { // O extends Funcionario permitirá que Gerente herde todos os métodos definidos em Funcionario
    constructor(nome, sobrenome, departamento) {
        // super, que é usada para chamar funções na classe pai.
        super(nome, sobrenome); // // super deve ser chamado primeiro
        this.departamento = departamento;
    }
    
        enviarAvaliacaoDeDesempenho() {
        console.log(`Análise de desempenho enviada para o trimestre atual`);
    }
}

const gerente = new Gerente("Samanta", "Gonçalves");
gerente.enviarAvaliacaoDeDesempenho(); // exibe "Análise de desempenho enviada para o trimestre atual"
console.log(gerente.obterNomeCompleto()); // "Samanta Gonçalves"
console.log(gerente.obterIniciais()); // "SG"

const funcionario = new Funcionario("Lucas", "Marques");
console.log(funcionario.obterNomeCompleto()); // Lucas Marques
console.log(funcionario.obterIniciais()); // LM