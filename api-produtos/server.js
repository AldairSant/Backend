const bodyParser = require('body-parser');
const mysql = require('mysql2');
const express = require ('express');

const app = express()
app.use(bodyParser.json())

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "catalogo_produtos"
})

connection.connect(error => {
    if(error){
        throw new Error("Não foi possível conectar com o banco de dados.")
    } else {
        console.log(`Conectado com sucesso ao banco ${connection.database}`) // ver isso depois
    }
})

app.post('/produtos', (req, res) => {
    const { nome, descricao, preco } = req.body
    const sql = `INSERT INTO produtos (nome, descricao, preco) VALUES (?, ?, ?)`

    connection.query(sql, [nome, descricao, preco], (error) => {
        if(error) {
            res.status(500).send("Não foi possível cadastrar o produto.")
            return
        }
        res.status(201).send('Produto cadastrado com sucesso.')
    })
})

app.get('/produtos', (req, res) => {
    const sql = 'SELECT * FROM produtos'
    connection.query(sql, (error, result) => {
        if(error) {
            res.status(500).send('Erro ao exibir os produtos.')
            return
        }
        res.json(result)
    })
})

app.listen(3000)