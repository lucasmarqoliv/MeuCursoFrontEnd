// promise é um recurso JavaScript que nos permite agendar o trabalho no futuro e,
// em seguida, executar callbacks com base no resultado da promise (seja ela bem-sucedida ou não).

const espera = milisegundos => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milisegundos);
    });
}

const init = () => {
    console.log("Programa iniciou");
    espera(1000).then(()=>{ // Você só pode chamar .then() em funções que retornam uma new Promise().
    console.log("Espere 1 segundo");
    });
}
 
// Não altere
init();