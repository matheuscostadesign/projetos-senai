# UC 10 - Criação e Manipulação de Banco de Dados

- SQBD: Sistema gerenciador de banco de dados
- Exemplo: MySQL Workbench

## DDL

```sql
create table <nomedatabase>
use <nomedatabase>
```

```sql
## Criação tabela
create table produto {
  codProduto integer not null primary key,
  descProduto varchar(100) not null
}

## Alteração tabela
alter table <nometable> add column <nomecoluna> <tipo tamanho> <obrigatoriedade>
alter table <nometabela> rename to <novonometabela>
alter table <nomedatabela> drop column <nomecoluna>

## Apagar tabela
drop table <nometable>
```

## DML
```sql
select * from table
```

## Triggers
- Gatilhos disparados no BD quando alguma operãção de manipulação é executada

```sql
create trigger <nome_trigger> <momento_de_execucao> <evento_disparo> on <nome_tabela> for each row
begin
<comandos>
end
```

## DQL (Data Query Language)
```sql
select * from aluno

select <coluna>
from <nometabela1, nometabela2>
where <condicoes>
```

---

### Criação do banco "COPA_DO_MUNDO"

```sql
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
```