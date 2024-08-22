// HERANÇA DE CLASSE SERVE PARA EVITAR REPETIÇÕES DE METODOS ENTRE AS CLASSES
// PARA USAR ESSE CONCEITO SE CRIA A CLASSE FILHA QUE VAI HERDAR AS FUNCIONALIDADES COMUNS ENTRE AS CLASSES.
// PARA HERDAR DE UMA CLASSE SE USA A PALAVRA CHAVE EXTENDS SEGUIDA DA CLASSE PAI (QUE POSSUI AS FUNCIONALIDADES) SEGUIDO DA CLASSE FILHA.
// UMA CLASSE FILHA TAMBEM PODE ACESSAR VARIAVES DE INSTANCIA DA CLASSE PAI.

class Funcionarios {
    constructor(nome, sobrenome, cargo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cargo = cargo;
    }

    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    cargoAtual() {
        return this.cargo;
    }
}

class Promocao extends Funcionarios {
    constructor(nome, sobrenome, cargo, CargoPromocao) {
        super(nome, sobrenome, cargo); // Chama o construtor da classe pai
        this.cargo = CargoPromocao;    // Altera o cargo para o novo cargo
    }

    novoCargo() {
        return `Novo cargo: ${this.cargo}`;
    }
}

let funcionario = new Funcionarios("Lucas", "Marques", "Estagiario");
let promocao = new Promocao("Lucas", "Marques", "Estagiario", "Desenvolvedor Junior");

console.log(funcionario.obterNomeCompleto()); // Lucas Marques
console.log(funcionario.cargoAtual()); // Estagiario

console.log(promocao.obterNomeCompleto()); // Lucas Marques
console.log(promocao.novoCargo()); // Novo cargo: Desenvolvedor Junior
console.log(promocao.cargoAtual()); // Desenvolvedor Junior
