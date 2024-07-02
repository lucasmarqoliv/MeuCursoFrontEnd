// INTERPOLAÇÃO 
let nome = "Lucas"
let idade = 28
console.log(`Olá ${nome} vi que você tem ${idade} anos.`)



// INTERPOLAÇÃO DENTRO DO RETURN
function teste(nome, idade) {
    return `Olá ${nome} vi que você tem ${idade}, e vai fazer 29 em Março.`
}
console.log(teste("Lucas", 28))