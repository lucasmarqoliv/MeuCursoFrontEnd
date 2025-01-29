// Agora, você aprenderá como escrever uma função que retorna uma promise.


// Digamos que queremos que esta função seja resolvida o mais rápido possível. 
// Logo, você pode chamar o método resolve() diretamente dentro do executor da promise:

const esperarUmSegundo = () => {
    return new Promise((resolve) => {
        resolve();
    });
}

// Porém, para nosso caso de uso, precisamos aguardar 1 segundo antes de resolver. 
// Assim, o código ficará desta maneira:



const espereUmSegundo = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, 1000);
    });
}

// Não altere
espereUmSegundo().then(() => {
    console.log("Pronto!");
});