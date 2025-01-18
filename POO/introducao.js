class Usuario { // Uma classe é uma fábrica capaz de criar instâncias.
  // Em caso de VAR de instacia PUBLICA não precisa de constructor.
  // em caso de VAR de instacia PRIVADA se usa o # antes do nome da VAR.
  // não pode ser acessado de fora da classe. Ele só pode ser acessado de dentro da classe com this.#idadeDeVotacao.
    constructor(nome, sobrenome, prefixo, idade) { // captura o parâmetro do construtor na variável de instância
      this.nome = nome;
      this.sobrenome = sobrenome; // this está se referindo à instância atual da classe.
      this.prefixo = prefixo;
      this.idade = idade;
    }
  
    obterNomeCompleto() { // funções que podem ser chamadas em uma instância de uma classe.
      return `${this.prefixo}. ${this.nome} ${this.sobrenome}`;
    }
  
    podeVotar() {
      return this.idade >= 18;
    }

    obterCumprimento() {
      const nomeCompleto = this.obterNomeCompleto(); // chama um método de instância
      return nomeCompleto.length; 
    }

  }
  
  // Exemplos de uso
  const usuario1 = new Usuario("Sara", "Dias", "Sra", 20);
  console.log(usuario1.obterNomeCompleto()); // "Sra. Sara Dias"
  console.log(usuario1.podeVotar()); // true
  const usuario2 = new Usuario("Alex", "Gomes", "Sr", 17);
  console.log(usuario2.obterNomeCompleto()); // "Sr. Alex Gomes"
  console.log(usuario2.podeVotar()); // false
  console.log(usuario2.obterCumprimento()); // 14 caracteres