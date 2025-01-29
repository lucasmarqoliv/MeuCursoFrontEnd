const buscaSimulada = endpoint => {
    // TODO: implemente buscaSimulada()
    return new Promise((resolve, reject)=>{
        if (endpoint === "status-voo"){
            setTimeout(()=>{
                resolve({
                    partiu: false,
                    atrasado: true
                });
            },1000)
        } else {
            reject("endpoint não suportado")
        }
    })
}

// Não altere
buscaSimulada("status-voo")
  .then((dados) => {
    console.log(dados);
  })
  .catch(error => {
    console.error(error);
  });

buscaSimulada("detalhes-usuarios")
  .then((dados) => {
    console.log(dados);
  })
  .catch(error => {
    console.error(error);
  });