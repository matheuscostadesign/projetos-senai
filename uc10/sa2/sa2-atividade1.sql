select * from jogador;

alter table jogador
add distancia INTEGER,
add saltos INTEGER,
add giros INTEGER,
add impactos INTEGER;

update jogador set distancia = 23472, saltos = 17, giros = 11, impactos = 5 where idjogador = 2200;
update jogador set distancia = 24851, saltos = 16, giros = 19, impactos = 2 where idjogador = 2205;
update jogador set distancia = 45214, saltos = 27, giros = 9, impactos = 9 where idjogador = 2210;
update jogador set distancia = 59154, saltos = 41, giros = 12, impactos = 1 where idjogador = 2215;
update jogador set distancia = 98152, saltos = 37, giros = 18, impactos = 3 where idjogador = 2220;
update jogador set distancia = 74154, saltos = 65, giros = 19, impactos = 6 where idjogador = 2225;
update jogador set distancia = 96315, saltos = 48, giros = 24, impactos = 7 where idjogador = 2230;
update jogador set distancia = 59815, saltos = 12, giros = 13, impactos = 8 where idjogador = 2235;
update jogador set distancia = 14854, saltos = 4, giros = 17, impactos = 4 where idjogador = 2240;
update jogador set distancia = 24845, saltos = 32, giros = 70, impactos = 11 where idjogador = 2245;
update jogador set distancia = 67821, saltos = 49, giros = 41, impactos = 25 where idjogador = 2250;