// CHAMANDO FUNÇÃO TROCANCO PARAMETROS

function soma(a, b) {
    console.log(a + b)
    return a + b
}

function multiplica(a, b) {
    console.log(a + b)
    return a * b
}

function subtrai(a, b) {
    console.log(a - b)
    return a - b
}

function divide(a, b) {
    console.log(a / b)
    return a / b
}

function executa(operacao, x, y) {
    console.log(operacao)
    console.log(x, y)
    // Escreva seu código abaixo
    if (operacao === "soma") {
        return soma(x, y)
    }
    else if (operacao === "multiplica") {
        return multiplica(x, y)
    }
    else if (operacao === "subtrai") {
        return subtrai(x, y)
    }
    else if (operacao === "divide") {
        return divide(x, y)
    }
}

// Não modifique a linha abaixo
executa("soma", 10, 20) 