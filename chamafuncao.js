// CHAMANDO FUNÇÃO COM A CONDICIONAL IF

function dobro(x) {
    console.log(x * 2)
    return x * 2
}

function triplo(x) {
    console.log(x * 3)
    return x * 3
}

function teste(operacao, x) {
    if (operacao === 'dobro') {
        return dobro(x)
    }

    if (operacao === 'triplo') {
        return triplo(x)
    }
}

teste('dobro', 10)
teste('triplo', 30)
