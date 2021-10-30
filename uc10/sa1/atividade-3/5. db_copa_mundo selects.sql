/* Mostra as colunas da tabela */
desc pais;

/* Mostra todos os dados da tabela */
select * from pais;

/* Atalho MySQL para executar script (Ctrl + Enter) */

/* ---------------------------------------- */;

/* Nome de todos os jogadores titulares, por seleção */
select p.selecao, j.nome from jogador j
inner join pais p on j.pais_idpais = p.idpais
where j.situacao = "T"
order by p.selecao, j.nome;

/* Seleção, o nome do jogador e número de vezes que ele foi substituído */
select p.selecao, j.nome, count(s.jogador_idjogador_sai) as substituicao
from substituicao s
inner join jogador j on s.jogador_idjogador_sai = j.idjogador
inner join pais p on j.pais_idpais = p.idpais
group by p.selecao, j.nome;

select * from substituicao;