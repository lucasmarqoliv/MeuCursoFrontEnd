
let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];
    
   for (let i = 0; i < atletas.length; i++) {
    let atleta = atletas[i];
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas obtidas: ${atleta.notas}`);
  }
 

let notas_organizadas = atletas.map(function(tarefa){
    return tarefa.notas.sort((a, b) => b - a)
})

notas_organizadas = notas_organizadas.map(function(nota_organizada){
    return nota_organizada.slice(1,4)
})

// Novo bloco para calcular a média das notas organizadas
notas_organizadas.forEach((notas) => {
  let soma = 0;
  
  // Soma as notas organizadas usando forEach
  notas.forEach((nota) => {
      soma += nota;
  });
  
  // Calcula a média
  let media = soma / notas.length;
  
  // Exibe a média com duas casas decimais
  console.log(`Média valida: ${media}`)
});



   