// um bloco try...catch nos permite se recuperar do erro sem parar a execução do nosso código.

const showData = () => {
    try {
        const data = obterData(); // Tenta obter a data
        return data; // Retorna a data, caso não ocorra erro
    } catch (error) {
        return "Não foi possível obter a data"; // Mensagem de erro em caso de falha
    }
};

// Exemplo de uso - não altere
console.log(showData());
