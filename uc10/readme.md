# UC 10 - Criação e Manipulação de Banco de Dados

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