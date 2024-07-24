use desafioaldair;

CREATE TABLE Produtos (
    ProdutoID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Categoria VARCHAR(25),
    Preco DECIMAL(10,2),
    Cor VARCHAR(15),
    Material VARCHAR(25),
    Tamanho VARCHAR(2),
    Estilo VARCHAR(15)
);

INSERT INTO Produtos (Nome, Categoria, Preco, Cor, Material, Tamanho, Estilo)
VALUES  ('Camiseta Básica', 'Roupas', 29.99, 'Branco', 'Algodão', 'M', 'Casual'),
        ('Calça Jeans Skinny', 'Roupas', 89.99, 'Azul', 'Denim', '38', 'Casual'),
        ('Vestido Floral', 'Roupas', 79.99, 'Verde', 'Seda', 'P', 'Feminino'),
        ('Blazer Preto', 'Roupas', 129.99, 'Preto', 'Poliéster', 'M', 'Formal'),
        ('Moletom Cinza', 'Roupas', 49.99, 'Cinza', 'Algodão', 'G', 'Esportivo'),
        ('Jaqueta de Couro', 'Roupas', 199.99, 'Marrom', 'Couro', 'M', 'Feminino'),
        ('Camisa Social Branca', 'Roupas', 59.99, 'Branco', 'Algodão', 'P', 'Formal'),
        ('Shorts Jeans', 'Roupas', 39.99, 'Azul', 'Denim', '42', 'Casual'),
        ('Vestido de Festa', 'Roupas', 149.99, 'Vermelho', 'Seda', 'G', 'Feminino'),
        ('Moletom com Capuz', 'Roupas', 54.99, 'Preto', 'Algodão', 'M', 'Esportivo');

DELETE FROM Produtos
WHERE ProdutoID IN (4, 7);

ALTER TABLE Produtos
ADD SemEstoque BOOLEAN DEFAULT TRUE;

UPDATE Produtos
SET SemEstoque = FALSE
WHERE ProdutoID != 2;

SELECT * FROM Produtos
WHERE ProdutoID <= 5 AND SemEstoque = FALSE;

SELECT * FROM Produtos
WHERE ProdutoID AND SemEstoque = FALSE
ORDER by ProdutoID ASC
LIMIT 5;