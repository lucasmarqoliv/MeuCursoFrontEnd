let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas: [8, 10, 10, 7, 9.33]
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

// Loop para processar cada atleta
for (let i = 0; i < atletas.length; i++) {
    let atleta = atletas[i];
    console.log(`Atleta: ${atleta.nome}`);
    
    // Ordena as notas em ordem decrescente
    let notas_organizadas = atleta.notas.sort((a, b) => b - a).slice(1, 4);
    
    // Converte as notas para uma string separada por vírgulas
    let notas_str = notas_organizadas.join(',');

    console.log(`Notas obtidas: ${notas_str}`);

    // Calcula a soma das notas organizadas
    let soma = 0;
    notas_organizadas.forEach((nota) => {
        soma += nota;
    });

    // Calcula a média
    let media = soma / notas_organizadas.length;

    // Exibe a média sem formatação adicional
    console.log(`Média válida: ${media}`);
}
