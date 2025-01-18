// a herança prototípica é mais poderosa porque nos permite escolher quais métodos gostaríamos de herdar.

// Função construtora para Gorila
function Gorila() {}

// Adicionando o método comer() ao protótipo de Gorila
Gorila.prototype.comer = function () {
  console.log("O gorila está comendo a banana!");
};

// Função construtora para Banana
function Banana() {}

// Adicionando o método descascar() ao protótipo de Banana
Banana.prototype.descascar = function () {
  console.log("A banana foi descascada!");
};

// Função construtora para GorilaBanana (não usamos 'extends' aqui)
function GorilaBanana() {}

// Escolhemos os métodos um a um para adicionar ao protótipo de GorilaBanana
GorilaBanana.prototype.comer = Gorila.prototype.comer; // Método do Gorila
GorilaBanana.prototype.descascar = Banana.prototype.descascar; // Método da Banana

// Agora, criamos uma instância de GorilaBanana
const gorilaBanana = new GorilaBanana();

// Chamando os métodos que foram "herdados"
gorilaBanana.descascar(); // Saída: A banana foi descascada!
gorilaBanana.comer();     // Saída: O gorila está comendo a banana!

// Comparando os protótipos para verificar a herança
console.log(gorilaBanana.__proto__.comer === Gorila.prototype.comer); // true
console.log(gorilaBanana.__proto__.descascar === Banana.prototype.descascar); // true
