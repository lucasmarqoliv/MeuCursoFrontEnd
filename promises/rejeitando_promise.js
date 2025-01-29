// 📘 Rejeitando com dados

// O reject() também pode passar alguns dados para o callback .catch(). Por exemplo:

// A função executora de promise (a função passada para a chamada new Promise(...)), na verdade, recebe dois argumentos. 
// O primeiro chamamos de resolver e vimos anteriormente.
//  O segundo é a função que você pode chamar para mover a promise de pending para rejected.
//  Chamaremos este de reject. Confira:

const sempreFalha = () => {
    return new Promise((resolve, reject) => {
        reject("Falhou. Essa é a única coisa que faço.")
    });
}

sempreFalha()
  .then(() => {
    // nunca será chamado
  })
  .catch(data => {
    console.error(data); // "Falhou. Essa é a única coisa que faço."
  });