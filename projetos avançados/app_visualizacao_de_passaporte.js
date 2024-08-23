// Implemente a Classe Passaporte
class Passaporte {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    obterNome() { // obterNome(), que retorna o primeiro nome em letras minúsculas.
        return `${this.nome.toLowerCase()}`
    }
    obterSobrenome() { // obterSobrenome(), que retorna o sobrenome em letras maiúsculas.
        return `${this.sobrenome.toUpperCase()}`
    }
    obterNomeCompleto() { // obterNomeCompleto(), que retorna o nome e o sobrenome separados por um caractere de espaço.
        return `${this.nome} ${this.sobrenome}`
    }
    obterIniciais() { // obterIniciais(), que retorna o primeiro caractere do primeiro nome seguido por um caractere de ponto (.), seguido pelo primeiro caractere do sobrenome e seguido por um caractere de ponto (.).
        return `${this.nome[0]}. ${this.sobrenome[0]}.`
    }
    obterEhNomeValido() { // obterEhNomeValido(), que retorna a string "Sim" quando o primeiro nome tem pelo menos 1 caractere e o sobrenome tem pelo menos 1 caractere e o sobrenome NÃO termina com um caractere de ponto (.). Em todos os outros casos, deve retornar a string "Não".
        if (this.nome.length > 0 && this.sobrenome.length > 0 && this.sobrenome[this.sobrenome.length - 1] !== "."){
            return `Sim`
        }
        else {
            return `Não`
        }
    }
}

// Uso da classe
let mario = new Passaporte("Mario", "Borges");
console.log(mario.obterNome());
console.log(mario.obterSobrenome());
console.log(mario.obterNomeCompleto());
console.log(mario.obterIniciais());
console.log(mario.obterEhNomeValido());

console.log("---");

// ---- Modifique apenas o código que está acima desta linha ----
document.write(`
<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
    <h2>App de Passaporte</h2>   
    <div>
        <div>
            <label for="dv-nome ">Seu nome</label>
            <input type="text" placeholder="Seu nome:" 
                    id="dv-nome" autocomplete="off">
        </div>
        <div>
            <label for="dv-sobrenome">Seu sobrenome:</label>
            <input type="text" placeholder="Seu sobrenome" 
                    id="dv-sobrenome" autocomplete="off">
        </div>
    </div>

    <div>
        <table border="1">
            <thead>
                <tr>
                    <th width="200px"></th>
                    <th>Seus dados</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Nome</td>
                    <td id="dv-resposta-1"></td>
                </tr>
                <tr>
                    <td>Sobrenome</td>
                    <td id="dv-resposta-2"></td>
                </tr>
                <tr>
                    <td>Nome Completo</td>
                    <td id="dv-resposta-3"></td>
                </tr>
                <tr>
                    <td>Iniciais</td>
                    <td id="dv-resposta-4"></td>
                </tr>
                <tr>
                    <td>Nome Válido?</td>
                    <td id="dv-resposta-5"></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`);

let nome = document.querySelector("#dv-nome");
let sobrenome = document.querySelector("#dv-sobrenome");

let dvResposta1 = document.querySelector("#dv-resposta-1");
let dvResposta2 = document.querySelector("#dv-resposta-2");
let dvResposta3 = document.querySelector("#dv-resposta-3");
let dvResposta4 = document.querySelector("#dv-resposta-4");
let dvResposta5 = document.querySelector("#dv-resposta-5");

function formatar() {
    let devPassaporte = new Passaporte(nome.value, sobrenome.value);

    dvResposta1.textContent = devPassaporte.obterNome();
    dvResposta2.textContent = devPassaporte.obterSobrenome();
    dvResposta3.textContent = devPassaporte.obterNomeCompleto();
    dvResposta4.textContent = devPassaporte.obterIniciais();
    dvResposta5.textContent = devPassaporte.obterEhNomeValido();
}

nome.addEventListener("keyup", formatar);
sobrenome.addEventListener("keyup", formatar);