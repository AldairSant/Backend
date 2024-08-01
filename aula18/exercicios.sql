-- ex 01

SELECT departamentos.nome, SUM(cargos.salario)
FROM departamentos INNER JOIN cargos
ON departamentos.departamento_id = cargos.departamento_id
GROUP BY departamentos.nome
HAVING SUM(cargos.salario) > 12000;

-- ex 02

select titulo, COUNT(*) AS total_empregados_por_titulo
from EMPREGADOS
GROUP BY titulo
having COUNT(*) > 1;

-- ex 03

SELECT departamentos.nome, AVG(cargos.salario) AS Media_Salarial
FROM departamentos INNER JOIN cargos
ON departamentos.departamento_id = cargos.departamento_id
GROUP BY departamentos.nome
HAVING AVG(cargos.salario) > 4500.00;

-- ex 04

SELECT departamentos.nome, MAX(cargos.salario) AS Maior_salario
FROM departamentos INNER JOIN cargos
ON departamentos.departamento_id = cargos.departamento_id
GROUP BY departamentos.nome
HAVING MAX(cargos.salario) > 6000.00;

-- ex 05

SELECT departamentos.nome, MIN(cargos.salario) AS Menor_salario
FROM departamentos INNER JOIN cargos
ON departamentos.departamento_id = cargos.departamento_id
GROUP BY departamentos.nome
HAVING MIN(cargos.salario) > 2500.00;
