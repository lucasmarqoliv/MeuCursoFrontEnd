
class Usuario {
    get idade() { // retorna valor
        console.log("getter de idade");
        return this._idade; // O _ aqui em _idade é uma convenção que significa que esta propriedade é interna à classe e não deve ser acessada de fora.
    }

    set idade(valor) { // modifica o valor
        console.log("setter de idade");
        this._idade = Number.parseInt(valor, 10);
    }
}

const usuario = new Usuario();
usuario.idade = "20"; // chama set idade(valor) como string
console.log(usuario.idade); // chama get idade(), que retorna 20 (como número)
console.log(typeof(usuario.idade)); //number


