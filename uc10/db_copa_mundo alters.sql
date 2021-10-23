/*Alteração da tabela pais*/
ALTER TABLE pais ADD CONSTRAINT FK_pais_2
FOREIGN KEY (grupo_idgrupo)
REFERENCES grupo (idgrupo);

/*Alteração da tabela jogos*/
ALTER TABLE jogos ADD CONSTRAINT FK_jogos_2
FOREIGN KEY (estadio_idestadio)
REFERENCES estadio (idestadio);

/*Alteração da tabela jogos*/
ALTER TABLE jogos ADD CONSTRAINT FK_jogos_3
FOREIGN KEY (pais_idpais_1)
REFERENCES pais (idpais);

/*Alteração da tabela jogos*/
ALTER TABLE jogos ADD CONSTRAINT FK_jogos_4
FOREIGN KEY (pais_idpais_2)
REFERENCES pais (idpais);

/*Alteração da tabela gols*/
ALTER TABLE gols ADD CONSTRAINT FK_gols_1
FOREIGN KEY (jogo_idrodada)
REFERENCES jogos (idrodada);

/*Alteração da tabela gols*/
ALTER TABLE gols ADD CONSTRAINT FK_gols_2
FOREIGN KEY (jogador_idjogador)
REFERENCES jogador (idjogador);

/*Alteração da tabela substituicao*/
ALTER TABLE substituicao ADD CONSTRAINT FK_substituicao_1
FOREIGN KEY (jogos_idrodada)
REFERENCES jogos (idrodada);

/*Alteração da tabela substituicao*/
ALTER TABLE substituicao ADD CONSTRAINT FK_substituicao_2
FOREIGN KEY (jogador_idjogador_sai)
REFERENCES jogador (idjogador);

/*Alteração da tabela substituicao*/
ALTER TABLE substituicao ADD CONSTRAINT FK_substituicao_3
FOREIGN KEY (jogador_idjogador_entra)
REFERENCES jogador (idjogador);

/*Alteração da tabela cartao*/
ALTER TABLE cartao ADD CONSTRAINT FK_cartao_1
FOREIGN KEY (jogos_idrodada)
REFERENCES jogos (idrodada);

/*Alteração da tabela cartao*/
ALTER TABLE cartao ADD CONSTRAINT FK_cartao_2
FOREIGN KEY (jogador_idjogador)
REFERENCES jogador (idjogador);