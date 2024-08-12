const { json } = require("body-parser")

const submitBtn = document.getElementById('submitBtn')


submitBtn.addEventListener('click', cadastrarProduto)


async function cadastroBanco(produto) {
    await fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(produto)
    })
    console.log(produto)
}

async function cadastrarProduto() {
    const nomeForm = document.getElementById('nome-form').value
    const descricaoForm = document.getElementById('descricao-form').value
    const precoForm = document.getElementById('preco-form').value
    const produto = {
        nome: nomeForm,
        descricao: descricaoForm,
        preco: precoForm
    }
    alert('sdf')
    //console.log(produto)
    //await cadastroBanco(produto)
}
