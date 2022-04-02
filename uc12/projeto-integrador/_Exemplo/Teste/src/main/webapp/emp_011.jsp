<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ page import="classes.usuarios"%>
<%
String nm = request.getParameter("nm");
String em = request.getParameter("em");
String sen = request.getParameter("sen");
//---- Back-End -----------------------
usuarios v = new usuarios();
v.setNome(nm);
v.setEmail(em);
v.setSenha(sen);
v.Incluir();
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>cadastro de usuario</title>
<link rel="stylesheet" type="text/css" href="estilos.css">
</head>
<body>
	<div>Sistema de Controle de cadastro de usuario</div>
	<br>
	<div>
		<table>
			<tr>
				<td>Nome</td>
				<td style="color: blue"><%=nm%></td>
			</tr>
			<tr>
				<td>E-mail</td>
				<td style="color: blue"><%=em%></td>
			</tr>
			<tr>
				<td>Senha</td>
				<td style="color: blue"><%=sen%></td>
			</tr>
					
				<th colspan=2 style="color: green">Cadastro feito com sucesso.</th>
			</tr>
		</table>
	</div>
	<br>
	<div>
		<form action="index.jsp" method="get">
			<input type="submit" value="Voltar">
		</form>
	</div>
</body>
</html>