const path = require('path')
const filePath = path.resolve(__dirname,'teste.json');
const write = require('./modules/write')
const read = require('./modules/read')

// Objeto que vai ser convertido em json
const pessoas = [
    {nome: 'Joao'},
    {nome: 'Luiz'},
    {nome: 'Pedro'},
    {nome: 'Carlos'},
    {nome: 'Arthur'},
];
// Convertendo o objeto em json
const json = JSON.stringify(pessoas, '', 2);
// Escrevendo o json
write(filePath,json);

// lendo o json
async function readFile(path){
    const data = await read(path);
    renderData(data);
};

// Exibe os nomes do json
function renderData(data){
    data = JSON.parse(data);
    data.forEach(element => {
        console.log(element.nome);
    });
}

readFile(filePath)
