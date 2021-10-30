/* 1. Consulta o nome de todos os jogadores titulares, por seleção */
select p.selecao, j.nome from jogador j
inner join pais p on j.pais_idpais = p.idpais
where j.situacao = "T"
order by p.selecao, j.nome;

/* 2. Consulta a seleção, o nome do jogador e número de vezes que ele foi substituído */
select p.selecao, j.nome, count(s.jogador_idjogador_sai) as substituicao
from substituicao s
inner join jogador j on s.jogador_idjogador_sai = j.idjogador
inner join pais p on j.pais_idpais = p.idpais
group by p.selecao, j.nome;

/* 3. Número total de cartões amarelos e vermelhos por seleção */
select p.selecao, sum(amarelo) as amarelo, sum(vermelho) as vermelho
from cartao c 
inner join jogador j on c.jogador_idjogador = j.idjogador
inner join pais p on j.pais_idpais = p.idpais
group by p.selecao;