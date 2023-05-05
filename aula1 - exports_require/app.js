// Fazendo um require por desestruturação
const { Pessoa,nome,sobrenome } = require('./mod')
const p1 = new Pessoa('luiz');

console.log(nome);
console.log(sobrenome);
console.log(p1);
