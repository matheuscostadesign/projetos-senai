/*Criação do banco de dados*/
CREATE DATABASE copa_mundo;

/*Utilizando o banco*/
USE copa_mundo;

/*Criação da tabela pais*/
CREATE TABLE pais (
idpais INTEGER PRIMARY KEY,
selecao VARCHAR(45),
continente VARCHAR(45),
tecnico VARCHAR(45),
pontos INTEGER, 
vitorias INTEGER,
empates INTEGER,
derrotas INTEGER,
golspro INTEGER,
golscontra INTEGER,
grupo_idgrupo CHAR(1)
);

/*Criação da tabela jogos*/
CREATE TABLE jogos (
idrodada INTEGER PRIMARY KEY,
data DATETIME,
estadio_idestadio INTEGER,
pais_idpais_1 INTEGER,
pais_idpais_2 INTEGER,
gols_idpais_1 INTEGER,
gols_idpais_2 INTEGER,
publico INTEGER
);

/*Criação da tabela estadio*/
CREATE TABLE estadio (
idestadio INTEGER PRIMARY KEY,
descricao VARCHAR(45),
localizacao VARCHAR(45),
capacidade INTEGER
);

/*Criação da tabela jogador*/
CREATE TABLE jogador (
idjogador INTEGER PRIMARY KEY,
nome VARCHAR(45),
camisa INTEGER,
posicao VARCHAR(45),
pais_idpais INTEGER,
situacao CHAR(1)
);

/*Criação da tabela gols*/
CREATE TABLE gols (
jogo_idrodada INTEGER,
jogador_idjogador INTEGER,
tempo VARCHAR(45)
);

/*Criação da tabela substituicao*/
CREATE TABLE substituicao (
jogos_idrodada INTEGER,
jogador_idjogador_sai INTEGER,
jogador_idjogador_entra INTEGER,
tempo VARCHAR(45)
);

/*Criação da tabela cartao*/
CREATE TABLE cartao (
jogos_idrodada INTEGER,
jogador_idjogador INTEGER,
amarelo TINYINT,
vermelho TINYINT,
tempo VARCHAR(45)
);

/*Criação da tabela grupo*/
CREATE TABLE grupo (
idgrupo CHAR(1) PRIMARY KEY,
descricao VARCHAR(45)
);