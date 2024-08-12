const express = require('express')
const mysql = require('mysql2')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())

const connection = mysql.createConnection({ // cria a conexão com o banco de dados
    host: "localhost",
    user: "root",
    password: "",
    database: "catalogo_produtos"
})

connection.connect(err => { // efetua a conexão
    if(err) {
        console.error(err.stack)
        return;
    }
    console.log('conectado ao banco de dados com o ID: ' + connection.threadId)
})

 // cria novo produto --------------------
app.post('/produtos', (req, res) => {
    const {nome, descricao, preco} = req.body

    if(!nome || !descricao || !preco) { // valida se todos os dados foram inseridos corretamente.
        res.status(400).send("Erro ao cadastrar produto. Dados incompletos.")
        return
    }

    const sql = 'INSERT INTO produtos (nome, descricao, preco) VALUES (?, ?, ?)'

    connection.query(sql, [nome, descricao, preco], (err, result) => {
        if(err) {
            res.status(500).send("Erro ao cadastrar produto.")
            return
        }
        res.status(201).send('Produto cadastrado com sucesso.')
    })
})

 // retorna todos os produtos ------------------------
app.get('/produtos', (req, res) => {
    const sql = "SELECT * FROM produtos"
    connection.query(sql, (err, results) => {
        if(err){
            res.status(500).send("Não foi possível obter os produtos.")
            return;
        }
        res.status(200).json(results)
    })
})


 // retorna o produto de acordo com o id ---------------------------
app.get('/produtos/:id', (req, res) => {
    const sql = 'SELECT * FROM produtos WHERE id = ?'
    connection.query(sql, [req.params.id], (error, results) => {
        if(error) {
            res.status(500).send("Erro ao obter produto.")
            console.log('erro')
            return
        } else if(results == "") { // valida se o produto existe
            res.status(400).send("Produto não encontrado.")
            return
        }
        res.status(200).json(results)
    })
})

 // atualiza produto -------------------------------
app.put('/produtos/:id', (req, res) => {
    const {nome, descricao, preco} = req.body

    if(!nome || !descricao || !preco) { // valida se todos os dados foram inseridos corretamente.
        res.status(400).send("Erro ao cadastrar produto. Dados incompletos.")
        return
    }

    const sql = 'UPDATE produtos SET nome = ?, descricao = ?, preco = ? WHERE id = ?'

    connection.query(sql, [nome, descricao, preco, req.params.id], err => {
        if(err) {
            res.status(500).send("Erro ao atualizar produto.")
            return
        }
        res.status(200).send("Produto atualizado com sucesso.")
    })

})

 // deleta um produto ------------------------
app.delete('/produtos/:id', (req, res) => {
    const sql = 'DELETE FROM produtos WHERE id = ?'
    connection.query(sql, [req.params.id], (err) => {
        if(err) {
            res.status(500).send("Erro ao deletar produto.")
            return
        }
        res.status(200).send("Produto deletado com sucesso.")
    })
})

app.listen(3000);