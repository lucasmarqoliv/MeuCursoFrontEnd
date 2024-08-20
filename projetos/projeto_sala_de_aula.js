// Complete a classe Estatistica, de forma que ela contenha os seguintes métodos de instância:

// obterNumeroTotalDeNotas() que retorna o número de notas.
// obterPrimeiraNota(), que retorna a primeira nota enviada (a primeira enviada, não a mais alta).
//  obterUltimaNota(), que retorna a última nota enviada (a última enviada, não a mais baixa).
//  obterSomaDasNotas(), que retorna a soma de todas as notas.
//  obterNotaMedia(), que retorna a nota média.
//  exportarCsv(), que retorna a string CSV das notas.
//  A classe Estatistica é instanciada com uma matriz de notas.

// Definição da classe
class Estatistica {
    constructor(notas) { // metodo constructor que recebe como parametro notas
        this.notas = notas; // variavel de instância que recebe o parametro notas
    }

obterNumeroTotalDeNotas() { // metodo de instância, onde é feito o tratamento de cada solução separadamente. 
    return this.notas.length; // metodo para retornar o comprimenta da matriz notas apartir da variavel de instancia
}

obterPrimeiraNota() {
    return this.notas[0]

}

obterUltimaNota() {
    return this.notas[this.notas.length-1]

}

obterSomaDasNotas() {
    let soma = 0;
    this.notas.forEach(function(nota){
        soma = soma + nota
    })
return soma
}

obterNotaMedia() {
    let soma = 0;
    this.notas.forEach(function(nota){
        soma = soma + nota
    })
    let media = soma / this.notas.length;
    return media;
}

exportarCsv() {
    let numeros = this.notas.join(', ')
    return numeros;
}
}

// Uso da classe
let notas = [8, 9, 5, 2, 9];
let suasNotas = new Estatistica(notas);

console.log(suasNotas.obterNumeroTotalDeNotas());
console.log(suasNotas.obterPrimeiraNota());
console.log(suasNotas.obterUltimaNota());
console.log(suasNotas.obterSomaDasNotas());
console.log(suasNotas.obterNotaMedia());
console.log(suasNotas.exportarCsv());

console.log("---");

// ---- Modifique apenas o código que está acima desta linha ----
document.write(`
<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
    <h2>Aplicativo Sala de Aula</h2>   
    <form id="dv-form-de-notas">
        <label for="dv-sua-nota">Sua nota:</label> <input type="number" min="0" max="10"
               required placeholder="Nota (0 a 10)" id="dv-sua-nota">&nbsp;
        <input type="submit" value="Adicionar" /><br><br>
    </form>
 
    <table border="1" id="dv-tabela-estatistica" center>
        <thead>
            <tr>
                <th width="33%">Número de provas realizadas</th>
                <th width="33%">Primeira nota enviada</th>
                <th>Última nota enviada</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table><br><br>
    <table border="1" id="dv-tabela-estatistica-2" center>
        <thead>
            <tr>
                <th width="33%">Soma</th>
                <th width="33%">Nota Média</th>
                <th>Exportar para CSV</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
</div>
`);


let dvFormDeNotas = document.querySelector("#dv-form-de-notas");
let dvSuaNota = document.querySelector("#dv-sua-nota");

let dvNotas = [10, 9, 3, 5, 8];

function formatar(dvNotas) {
    let dvEstatistica = new Estatistica(dvNotas);
    console.log("Notas: " + dvNotas.join(', '));
    let tbody = document.querySelector("#dv-tabela-estatistica tbody");
    tbody.innerHTML = `<tr>
    <td>${dvEstatistica.obterNumeroTotalDeNotas()}</td>
    <td>${dvEstatistica.obterPrimeiraNota()}</td>
    <td>${dvEstatistica.obterUltimaNota()}</td>
    </tr>`;

    let tbody2 = document.querySelector("#dv-tabela-estatistica-2 tbody");
    tbody2.innerHTML = `<tr>
    <td>${dvEstatistica.obterSomaDasNotas()}</td>
    <td>${dvEstatistica.obterNotaMedia()}</td>
    <td>${dvEstatistica.exportarCsv()}</td>
    </tr>`;
}

dvFormDeNotas.addEventListener("submit", event => {
    event.preventDefault();
    let newGrade = Number.parseInt(dvSuaNota.value, 10);
    dvNotas.push(newGrade);
    dvSuaNota.value = "";
    formatar(dvNotas);
})

formatar(dvNotas);