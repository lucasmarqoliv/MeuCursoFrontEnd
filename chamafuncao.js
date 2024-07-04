// CHAMANDO FUNÇÃO COM A CONDICIONAL IF

function calculadoraSoma(a, b) {
    return a + b
}

function teste(operador, x, y) {
    if (operador === '+') {
        return calculadoraSoma(x, y)
    }
}

console.log(teste("+", 10, 10))
console.log(teste("+", 30, 30))
