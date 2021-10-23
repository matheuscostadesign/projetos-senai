/* Mostra as colunas da tabela */
desc pais;

/* Mostra todos os dados da tabela */
select * from pais;

/* Juntando duas tabelas (Inner join) */
select p.selecao, j.nome as jogador from jogador j 
inner join pais p on j.pais_idpais = p.idpais
where j.situacao = 'T'
order by p.selecao, j.nome;

select selecao, tecnico from pais 
where pontos = 0
and continente = 'Europa'

