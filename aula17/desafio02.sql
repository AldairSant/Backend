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

