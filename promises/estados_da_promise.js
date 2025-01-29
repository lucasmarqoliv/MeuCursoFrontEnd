// Uma promise pode ter 3 estados:
// pending (pendente), fulfilled (realizada), rejected (rejeitada)
// Quando você cria uma promise, ela começa no estado pending.
// Quando for concluído com sucesso, ele terá p estado fullfiled.

const esperar = milissegundos => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(); // A promise mostra pending, que é o estado que ela assume quando é criada. 
        }, milissegundos);
    });
}
console.log(esperar(1000)); // Promise {<pending>}



// Observe como o resultado começa como pending e então se torna fulfilled dentro do callback .then().

const espera = milisegundos => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milisegundos);
    });
}

const esperaPromise = espera(1000);
console.log(esperaPromise); // pending nesta fase

esperaPromise.then(() => {
    console.log("espera 1 segundo");
    console.log(esperaPromise); // fulfilled nesta fase
});

console.log(esperaPromise); // pending nesta fase

// As coisas nem sempre saem como planejado. Às vezes, o código falha. É por isso que temos o estado de rejected.
// O .catch(callback) permite que você manipule o estado rejected de uma promise. Aqui está um exemplo:

// Criamos uma função que retorna uma Promise
const minhaPromise = (deveFalhar) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (deveFalhar) {
                // Se a condição for verdadeira, rejeitamos a Promise
                reject("A Promise foi rejeitada! Algo deu errado.");
            } else {
                // Caso contrário, resolvemos a Promise normalmente
                resolve("A Promise foi resolvida com sucesso!");
            }
        }, 2000); // Simulamos um atraso de 2 segundos
    });
};

// Chamamos a função passando "true" para que ela falhe
minhaPromise(true)
    .then((mensagem) => {
        console.log(mensagem); // Este bloco NÃO será executado se a Promise for rejeitada
    })
    .catch((erro) => {
        console.error(erro); // Exibe o erro no console quando a Promise é rejeitada
    });
// .then() e .catch() que agem de forma semelhante à instrução try...catch.


// O callback de .finally() será executado sempre que o estado da promise mudar de pending para fulfilled ou rejected.
// Isso significa que .finally() será executado para ambos os estados de sucesso e erro. Vamos dar um exemplo:

obterTemperaturaEm("Florianópolis")
    .then(dados => {
        console.log(dados);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log("Concluída a busca do clima");
    });

    // O código acima registra Concluída a busca do clima em ambos os cenários (sucesso e erro).
    //  Podemos refatorá-lo para evitar duplicação com .finally():