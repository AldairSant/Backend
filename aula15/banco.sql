
-- PRIMEIRO DE TUDO SEMPRE SELECIONAR O BANCO DE DADOS
USE ti3k5791_aldairjose -- NO MEU CASO

-- COMO CRIAR UMA TABELA

CREATE TABLE clientes (
    id_cliente INT PRIMARY KEY,
    nome VARCHAR(100),
    telefone VARCHAR(100)
)

-- ALTERAR UMA TABELA DEPOIS DE JÁ CRIADA

ALTER TABLE clientes
ADD email VARCHAR(100);

-- ALTERAR O TIPO OU QUALQUER COISA DEPOIS DE JA TER SIDO CRIADO A COLUNA

ALTER TABLE clientes
MODIFY email TEXT; -- OU VARCHAR(50) POR EXEMPLO

-- RENOMEAR UMA COLUNA E SE QUISER TAMBÉM ALTERAR O TIPO DE DADOS

ALTER TABLE clientes
CHANGE COLUMN email email_cliente VARCHAR(255)

-- remover coluna
ALTER TABLE clientes
DROP COLUMN telefone;

-- DELETAR TABELA

DROP TABLE clientes;

-- INSERIR DADOS EM UMA TABELA

INSERT INTO clientes (id_cliente, nome, email_cliente) 
VALUES (1, 'João da Silva', 'joaodasilva@gmail.com');
       (1, 'Pedro da Fonseca', 'pedrodafonseca@gmail.com');
       (1, 'Fulano de Tal', 'fulanodetal@gmail.com');

-- ATUALIZAR VALORES EM UMA TABELA -- TODO UPDATE TEM WHERE--- SE NÃO COLOCAR A CONDIÇÃO, TODOS OS CAMPOS EMAIL SERÃO ATUALIZADOS.
UPDATE clientes
SET email = 'novoemail@gmail.com'
WHERE id_cliente = 1 -- ESSA É A CONDIÇÃO

-- DELETAR DADOS DE TABELA

DELETE FROM clientes
WHERE id_cliente = 1;

-- ORDENAR ITENS PRA SEREM EXIBIDOS NA TELA
SELECT * FROM clientes
ORDER BY nome ASC -- OU DESC PRA ORDENAR DE FORMA DESCENDENTE

-- CONSULTA COM LIMITE DE RESULTADOS.
SELECT * FROM clientes
WHERE id_cliente > 1
LIMIT 3;

-- MOSTRAR A SOMA DOS ITENS
SELECT SUM(valor_total) as total das vendas FROM pedidos

-- valor minimo entre os itens
SELECT MIN(valor_total) as total das vendas FROM pedidos -- MAX pra valor mais alto

SELECT clientes.id_cliente, clientes.nome, clientes.email_cliente, pedidos.numero_pedido
FROM clientes
INNER JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente;

-- pode se usar WHERE junto para filtrar apenas os resultados desejados
SELECT clientes.id_cliente, clientes.nome, clientes.email_cliente, pedidos.numero_pedido
FROM clientes
INNER JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente
WHERE valor_total > 200; -- mostra apenas pedidos que sejam superiores a 200 reais.

-- agrupa
SELECT nome, GROUP_CONCAT(email_cliente SEPARATOR ', ') AS emails
FROM clientes
GROUP BY nome;

-- OCNTAR TOTAL DE PEDIDOS
SELECT COUNT(*)
FROM pedidos;

-- EXEMPLO DE GROUP BY COM COUNT
SELECT clientes.nome, COUNT(pedidos.id_pedido) AS total_pedido
FROM clientes
LEFT JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente -- LEFT JOIN MOSTRA TAMBÉM QUEM NÃO FEZ PEDIDOS
GROUP BY clientes.nome;