use desafioaldair;

CREATE TABLE carros_aluguel
(
    marca VARCHAR(25) NOT NULL,
    modelo VARCHAR(25) NOT NULL,
    ano INT,
    cor VARCHAR(25),
    transmissao VARCHAR(15)
    cilindrada INT,
    preco_diaria DECIMAL(6, 2)
);

INSERT INTO carros_aluguel (marca, modelo, ano, cor, transmissao, cilindrada, preco_diaria)
VALUES
('Toyota', 'Corolla', 2020, 'Prata', 'Automática', 2000, 150.00),
('Honda', 'Civic', 2019, 'Branco', 'Automática', 1800, 140.00),
('Ford', 'Focus', 2018, 'Preto', 'Manual', 1600, 130.00),
('Chevrolet', 'Cruze', 2021, 'Azul', 'Automática', 1800, 160.00),
('Volkswagen', 'Golf', 2017, 'Vermelho', 'Automática', 1600, 120.00),
('Hyundai', 'HB20', 2022, 'Prata', 'Manual', 1400, 110.00),
('Nissan', 'Sentra', 2019, 'Cinza', 'Automática', 2000, 140.00),
('Kia', 'Sportage', 2020, 'Verde', 'Automática', 2200, 170.00),
('BMW', '320i', 2021, 'Preto', 'Automática', 2500, 200.00),
('Mercedes-Benz', 'C200', 2018, 'Prata', 'Automática', 1800, 180.00);

CREATE TABLE clientes
(
    nome VARCHAR(100) NOT NULL,
    endereco VARCHAR(255), NOT NULL,
    telefone INT NOT NULL,
    doc_identificacao INT NOT NULL,
    data_nascimento DATE
);

INSERT INTO clientes (nome, endereco, telefone, doc_identificacao, data_nascimento)
VALUES
('João da Silva', 'Rua das Flores, 123, São Paulo - SP', 1122334455, 123456789, '1990-05-15'),
('Maria Oliveira', 'Avenida Principal, 456, Rio de Janeiro - RJ', 9988776655, 987654321, '1985-11-20'),
('Pedro Santos', 'Rua das Palmeiras, 789, Belo Horizonte - MG', 3344556677, 456789012, '1982-07-10'),
('Ana Costa', 'Travessa dos Pinheiros, 321, Porto Alegre - RS', 7766554433, 789012345, '1995-03-25'),
('Lucas Pereira', 'Alameda das Acácias, 567, Brasília - DF', 5544332211, 234567890, '1988-09-03');

ALTER TABLE clientes
ADD cliente_id INT AUTO_INCREMENT PRIMARY KEY FIRST;

ALTER TABLE carros_aluguel
ADD carro_id INT AUTO_INCREMENT PRIMARY KEY FIRST;

CREATE TABLE alugueis_carros
(
    carro_id INT,
    cliente_id INT,
    data_inicio DATE,
    data_fim DATE,
    valor_total DECIMAL(10, 2)
)

ALTER TABLE alugueis_carros
ADD aluguel_ID INT PRIMARY KEY AUTO_INCREMENT FIRST;

INSERT INTO alugueis_carros
SELECT 1, 2, '2024-04-25', '2024-04-26', DATEDIFF('2024-04-26', '2024-04-25') * preco_diaria FROM carros_aluguel WHERE carro_id = 1;
INSERT INTO alugueis_carros
SELECT 2, 2, '2024-04-27', '2024-04-28', DATEDIFF('2024-04-28', '2024-04-27') * preco_diaria FROM carros_aluguel WHERE carro_id = 2;
INSERT INTO alugueis_carros
SELECT 6, 2, '2024-04-29', '2024-04-30', DATEDIFF('2024-04-30', '2024-04-29') * preco_diaria FROM carros_aluguel WHERE carro_id = 6;
INSERT INTO alugueis_carros
SELECT 5, 2, '2024-04-30', '2024-05-01', DATEDIFF('2024-05-01', '2024-04-30') * preco_diaria FROM carros_aluguel WHERE carro_id = 5;
INSERT INTO alugueis_carros
SELECT 4, 2, '2024-04-05', '2024-04-06', DATEDIFF('2024-04-06', '2024-04-05') * preco_diaria FROM carros_aluguel WHERE carro_id = 4;
INSERT INTO alugueis_carros
SELECT 2, 2, '2024-04-07', '2024-04-08', DATEDIFF('2024-04-08', '2024-04-07') * preco_diaria FROM carros_aluguel WHERE carro_id = 2;
INSERT INTO alugueis_carros
SELECT 2, 1, '2024-05-01', '2024-05-05', DATEDIFF('2024-05-05', '2024-05-01') * preco_diaria FROM carros_aluguel WHERE carro_id = 2;
INSERT INTO alugueis_carros
SELECT 5, 1, '2024-05-10', '2024-05-15', DATEDIFF('2024-05-15', '2024-05-10') * preco_diaria FROM carros_aluguel WHERE carro_id = 5;
INSERT INTO alugueis_carros
SELECT 2, 1, '2024-05-20', '2024-05-25', DATEDIFF('2024-05-25', '2024-05-20') * preco_diaria FROM carros_aluguel WHERE carro_id = 2;
INSERT INTO alugueis_carros
SELECT 5, 1, '2024-05-26', '2024-05-27', DATEDIFF('2024-05-27', '2024-05-26') * preco_diaria FROM carros_aluguel WHERE carro_id = 5;
INSERT INTO alugueis_carros
SELECT 10, 1, '2024-05-28', '2024-05-30', DATEDIFF('2024-05-30', '2024-05-28') * preco_diaria FROM carros_aluguel WHERE carro_id = 10;
INSERT INTO alugueis_carros
SELECT 3, 1, '2024-06-01', '2024-06-05', DATEDIFF('2024-06-05', '2024-06-01') * preco_diaria FROM carros_aluguel WHERE carro_id = 3;
INSERT INTO alugueis_carros
SELECT 3, 3, '2024-06-01', '2024-06-05', DATEDIFF('2024-06-05', '2024-06-01') * preco_diaria FROM carros_aluguel WHERE carro_id = 3;
INSERT INTO alugueis_carros
SELECT 4, 3, '2024-06-10', '2024-06-15', DATEDIFF('2024-06-15', '2024-06-10') * preco_diaria FROM carros_aluguel WHERE carro_id = 4;
INSERT INTO alugueis_carros
SELECT 5, 3, '2024-07-01', '2024-07-05', DATEDIFF('2024-07-05', '2024-07-01') * preco_diaria FROM carros_aluguel WHERE carro_id = 5;
INSERT INTO alugueis_carros
SELECT 6, 3, '2024-07-10', '2024-07-15', DATEDIFF('2024-07-15', '2024-07-10') * preco_diaria FROM carros_aluguel WHERE carro_id = 6;
INSERT INTO alugueis_carros
SELECT 7, 4, '2024-06-01', '2024-06-04', DATEDIFF('2024-06-04', '2024-06-01') * preco_diaria FROM carros_aluguel WHERE carro_id = 7;
INSERT INTO alugueis_carros
SELECT 8, 4, '2024-06-10', '2024-06-13', DATEDIFF('2024-06-13', '2024-06-10') * preco_diaria FROM carros_aluguel WHERE carro_id = 8;
INSERT INTO alugueis_carros
SELECT 9, 4, '2024-07-01', '2024-07-04', DATEDIFF('2024-07-04', '2024-07-01') * preco_diaria FROM carros_aluguel WHERE carro_id = 9;
INSERT INTO alugueis_carros
SELECT 10, 4, '2024-07-10', '2024-07-13', DATEDIFF('2024-07-13', '2024-07-10') * preco_diaria FROM carros_aluguel WHERE carro_id = 10;
INSERT INTO alugueis_carros
SELECT 1, 5, '2024-02-01', '2024-02-10', DATEDIFF('2024-02-10', '2024-02-01') * preco_diaria FROM carros_aluguel WHERE carro_id = 1;
INSERT INTO alugueis_carros
SELECT 5, 5, '2024-03-15', '2024-03-20', DATEDIFF('2024-03-20', '2024-03-15') * preco_diaria FROM carros_aluguel WHERE carro_id = 5;
INSERT INTO alugueis_carros
SELECT 3, 5, '2024-04-05', '2024-04-25', DATEDIFF('2024-04-25', '2024-04-05') * preco_diaria FROM carros_aluguel WHERE carro_id = 3;
INSERT INTO alugueis_carros
SELECT 2, 5, '2024-05-10', '2024-05-30', DATEDIFF('2024-05-30', '2024-05-10') * preco_diaria FROM carros_aluguel WHERE carro_id = 2;
INSERT INTO alugueis_carros
SELECT 4, 5, '2024-06-01', '2024-06-10', DATEDIFF('2024-06-10', '2024-06-01') * preco_diaria FROM carros_aluguel WHERE carro_id = 4;

SELECT clientes.nome, SUM(alugueis_carros.valor_total) AS total_gasto_com_locaçoes
FROM clientes
INNER JOIN alugueis_carros ON clientes.cliente_id = alugueis_carros.cliente_id
GROUP BY clientes.nome
ORDER BY clientes.nome ASC;

SELECT carros_aluguel.marca, carros_aluguel.modelo, COUNT(carros_aluguel.carro_id) AS vezes_que_foi_alugado
FROM carros_aluguel
LEFT JOIN alugueis_carros ON carros_aluguel.carro_id = alugueis_carros.carro_id
GROUP BY carros_aluguel.carro_id
ORDER BY carros_aluguel.marca;