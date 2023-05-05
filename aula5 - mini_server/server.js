const express = require('express');
// Inicializando o express
const app = express();

// Enviando um formulário para a requisição "/"
app.get('/', (req,res) => {
    res.send(`
    <form action ='/' method='GET'>
        Nome: <input name='nome' type='text'>
        <button>Enviar</button>
    </form>
    `)
});

// Recebendo o envio do formulário
app.post('/', (req,res) => {
    res.send('Recebi o formulário')
})

// Enviando a mensagem para a requisição "/contato"
app.get('/contato', (req,res)=>{
    res.send('Obrigado pelo contato!')
})

// Definindo que o app escutará as requisições na porta 3000
app.listen(3000, _ =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando')
});
