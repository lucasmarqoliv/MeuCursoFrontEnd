
function criarTarefa(dados) { // Recebe um objeto dados e retorna um objeto com a estrutura de uma tarefa.
    return {
        titulo: dados.tarefaTitulo, // titulo da tarefa
        estaCompleta: dados.completa, // booleano indicando se a tarefa esta completa
        categoria: dados.categoriaEscolhida, // categoria da tarefa
        autor: { // objeto aninhado contendo os dados do autor
            nome: dados.usuario.nome,
            sobrenome: dados.usuario.sobrenome
        }
    }
}

function adicionarTarefa(tarefas, tarefa) { //  Adiciona a nova tarefa à matriz de tarefas e retorna a matriz atualizada.
    tarefas.push(tarefa)
    return tarefas
}

function conteTarefa(tarefas) { // Retorna o número de tarefas na matriz.
    return tarefas.length
}

function primeiraTarefaTitulo(tarefas) { // Retorna o título da primeira tarefa.
    if (tarefa.length > 0) {
        return tarefas[0].titulo
    }
}

function ultimaTarefaTitulo(tarefas) { // Retorna o título da última tarefa.
    if (tarefas.length > 0){
        return tarefas[tarefas.length -1].titulo
    }
}

function exportacaoDeTitulos(tarefas) { // Retorna uma matriz contendo os títulos das tarefas na matriz.
    let titulos = tarefas.map(function(tarefa){
        return tarefa.titulo
    })
return titulos
}

// ---- Modifique apenas o código que está acima desta linha ----
document.write(`
<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
    <h2>App lista de tarefas II</h2>
    <form id="dv-form-lista-tarefa">
        <div>
            <label for="dv-titulo-tarefa">Adicione a tarefa</label>
            <input type="string" required placeholder="Título da tarefa" id="dv-titulo-tarefa">
            <br><br>
        </div>
        <label>
            <input type="checkbox" id="dv-tarefa-completa" value="" /> Está completa?<br><br>
        </label>
        <select required id="dv-categoria-tarefa">
            <option value="">Selecione a categoria</option>
            <option value="trabalho">Trabalho</option>
            <option value="pessoal">Pessoal</option><br><br>
        </select>
        <input type="submit" value="Adicionar" />
    </form>
    <ul id="dv-lista-tarefa"></ul>
</div>
`);

let dvForm = document.querySelector("#dv-form-lista-tarefa");
let dvTitulo = document.querySelector("#dv-titulo-tarefa");
let dvcompleta = document.querySelector("#dv-tarefa-completa");
let dvCategoria = document.querySelector("#dv-categoria-tarefa");
let dvLista = document.querySelector("#dv-lista-tarefa");

let tarefas = [];

function formatar(tarefas) {
    dvLista.innerHTML = `<h3>Tarefas (${conteTarefa(tarefas)})</h3>`;
    tarefas.forEach(function(tarefa) {
        console.log(tarefa.estaCompleta)
        let titulo = ''
        titulo = (tarefa.estaCompleta)? `<del>${tarefa.titulo}</del>`: tarefa.titulo;
        
        let complemento = (tarefa.estaCompleta)? "finalizada":"iniciada";

        dvLista.insertAdjacentHTML("beforeend", `<li><div class="card">&nbsp;<strong>${titulo}</strong> - ${complemento}, criada por ${tarefa.autor.nome} ${tarefa.autor.sobrenome}</strong> e está na categoria ${tarefa.categoria}</div></li>`);
    });
}

dvForm.addEventListener("submit", event => {
    event.preventDefault();
    let autor = {
        nome: "Lídia",
        sobrenome: "Messias"
    };
    let valores = {
        tarefaTitulo: dvTitulo.value,
        completa: dvcompleta.checked,
        categoriaEscolhida: dvCategoria.value,
        usuario: autor
    };
  
    let tarefa = criarTarefa(valores);
    tarefas = adicionarTarefa(tarefas, tarefa);
    formatar(tarefas);
    //reset do formulário
    dvTitulo.value = "";
    dvcompleta.checked = false;
    // Log o resultado de primeiraTarefaTitulo(), ultimoTarefaTitulo() e exportacaoDeTitulos()
    console.log("Primeiro título de tarefas: " + primeiraTarefaTitulo(tarefas));
    console.log("Último título de tarefas: " + ultimaTarefaTitulo(tarefas));
    console.log("Títulos exportados: ", exportacaoDeTitulos(tarefas));
});