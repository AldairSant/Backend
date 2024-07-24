use livrariaaldair;

CREATE TABLE Autores (
    AutorID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(100) NOT NULL,
    Nacionalidade VARCHAR(50)
);

CREATE TABLE Livros (
    LivroID INT PRIMARY KEY, AUTO_INCREMENT,
    Titulo VARCHAR(200) NOT NULL,
    Genero VARCHAR(15),
    AnoPublicacao INT,
    AutorID INT,
    FOREIGN KEY (AutorID) REFERENCES Autores(AutorID)
);

CREATE TABLE Clientes (
    ClienteID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(100) NOT NULL,
    Endereco VARCHAR(100),
    Telefone VARCHAR(15)
);

CREATE TABLE Emprestimos (
    EmprestimoID INT PRIMARY KEY AUTO_INCREMENT,
    LivroID INT,
    ClienteID INT,
    DataEmprestimo DATE,
    DataDevolucao DATE,
    FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID),
    FOREIGN KEY (LivroID) REFERENCES Livros (LivroID)
);

-- INSERINDO OS LIVROS

INSERT INTO Autores(Nome, Nacionalidade)
VALUES  ('William Shakespeare', 'Inglaterra'),
        ('Jane Austen', 'Inglaterra'),
        ('Gabriel García Márquez', 'Colômbia');

INSERT INTO Livros(Titulo, Genero, AnoPublicacao, AutorID)
VALUES  ('Hamlet', 'Tragédia', 1623, 1),
        ('Romeu e Julieta', 'Tragédia', 1597, 1),
        ('Macbeth', 'Tragédia', 1623, 1),
        ('Orgulho e Preconceito', 'Drama', 1813, 2),
        ('Emma', 'Romance', 1815, 2),
        ('Cem Anos de Solidão', 'Ficção Épica', 1967, 3),
        ('O Amor nos Tempos do Cólera', 'Romance', 1985, 3);

INSERT INTO Clientes(Nome, Endereco, Telefone)
VALUES  ('Ana Silva', 'Rua das Flores, 123', '(11) 98765-4321'),
        ('João Santos', 'Avenida Principal, 456', '(22) 87654-3210'),
        ('Maria Oliveira', 'Travessa das Árvores, 789', '(33) 76543-2109'),
        ('Pedro Almeida', 'Rua das Palmeiras, 567', '(44) 65432-1098');

INSERT INTO Emprestimos(LivroID, ClienteID, DataEmprestimo, DataDevolucao)
VALUES  (1, 2, '2024-03-21', '2024-03-27'),
        (2, 2, '2024-03-22', '2024-03-28'),
        (5, 1, '2024-03-21', '2024-03-27'),
        (6, 4, '2024-03-27', '2024-04-02'),
        (4, 3, '2024-04-05', '2024-04-12');

-- Adicione novas colunas às tabelas Autores, Livros, Clientes e Emprestimos.

-- AUTORES
ALTER TABLE Autores
ADD DataNascimento DATE,
ADD Biografia TEXT;

-- LIVROS
ALTER TABLE Livros
ADD Editora VARCHAR(50),
ADD NumeroPaginas INT,
ADD Idioma VARCHAR(15);

-- CLIENTES
ALTER TABLE Clientes
ADD Email VARCHAR(100),
ADD DataNascimento DATE;

-- EMPRESTIMOS
ALTER TABLE Emprestimos
ADD DataPrevistaDevolucao DATE,
ADD Status VARCHAR(25);

UPDATE Autores
SET DataNascimento = '1564-04-23',
Biografia = 'William Shakespeare é amplamente reconhecido como um dos maiores dramaturgos e poetas da história da literatura mundial.'
WHERE AutorID = 1;

UPDATE Autores
SET DataNascimento = '1775-04-23',
Biografia = 'Jane Austin bla bla bla'
WHERE AutorID = 2;

UPDATE Autores
SET DataNascimento = '1842-04-23',
Biografia = 'Gabriel García Márquez Bla bla bla'
WHERE AutorID = 3;

UPDATE Clientes
SET email = 'pessoa1@gmail.com',
DataNascimento = '1991-12-02'
WHERE ClienteID = 1;

UPDATE Clientes
SET email = 'pessoa2@gmail.com',
DataNascimento = '1991-10-02'
WHERE ClienteID = 2;

UPDATE Clientes
SET email = 'pessoa3@gmail.com',
DataNascimento = '1991-11-02'
WHERE ClienteID = 3;

UPDATE Clientes
SET email = 'pessoa4@gmail.com',
DataNascimento = '1991-12-12'
WHERE ClienteID = 4;

UPDATE Livros
SET Editora = 'Editora1',
NumeroPaginas = 827,
Idioma = 'Inglês'
WHERE LivroID = 1;

UPDATE Livros
SET Editora = 'Editora1',
NumeroPaginas = 612,
Idioma = 'Alemão'
WHERE LivroID = 2;

UPDATE Livros
SET Editora = 'Editora2',
NumeroPaginas = 400,
Idioma = 'Espanhol'
WHERE LivroID = 3;

UPDATE Livros
SET Editora = 'Editora3',
NumeroPaginas = 925,
Idioma = 'Inglês'
WHERE LivroID = 4;

UPDATE Livros
SET Editora = 'Editora4',
NumeroPaginas = 369,
Idioma = 'Espanhol'
WHERE LivroID = 5;

UPDATE Livros
SET Editora = 'Editora2',
NumeroPaginas = 427,
Idioma = 'Inglês'
WHERE LivroID = 6;

UPDATE Livros
SET Editora = 'Editora1',
NumeroPaginas = 526,
Idioma = 'Inglês'
WHERE LivroID = 7;

UPDATE Emprestimos
SET LivroID = 7,
ClienteID = 2,
DataEmprestimo = '2024-07-23',
DataDevolucao = NULL,
DataPrevistaDevolucao = '2024-07-29',
Status = 'No Acervo'
WHERE EmprestimoID = 4;
