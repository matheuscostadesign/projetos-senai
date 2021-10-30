create view visualizarJogadores as
select p.selecao, j.nome, j.distancia, j.saltos, j.giros, j.impactos
from jogador j
inner join pais p on j.pais_idpais = p.idpais
where j.distancia is not null
order by p.selecao, j.distancia asc;

select * from visualizarJogadores;