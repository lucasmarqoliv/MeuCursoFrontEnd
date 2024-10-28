// O método de redução recebe dois parâmetros: o reducer (redutor) e o valor inicial.
// O total sempre se refere ao último valor calculado pela função de redução.
// E o atual está se referindo a um único item na matriz. 

let notas = [10, 5, 15, 20];

let soma = notas.reduce((total, atual) => {
     console.log(`Total é ${total}`);
     console.log(`Atual é ${atual}`);
     console.log("---");
     return total + atual;
}, 0);

console.log(`Soma é ${soma}`); 
// saidas
// Total é 0
// Atual é 10
// ---
// Total é 10
// Atual é 5
// ---
// Total é 15
// Atual é 15
// ---
// Total é 30
// Atual é 20
// ---
// Soma é 50

