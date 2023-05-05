class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}

const nome = 'luiz'
const sobrenome = 'garrido'

// Exportando a classe Pessoa e os nomes
module.exports = {
    nome,sobrenome,Pessoa
}
