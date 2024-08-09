function votoDemocratico (idade) {
    if (idade <= 17) {
        return 'Não pode votar!'
    }
    if (idade >= 18) {
        return 'Pode votar!'
    }
}
console.log(votoDemocratico(10))
console.log(votoDemocratico(20))