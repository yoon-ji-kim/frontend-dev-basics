<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js"></script>
<script>
	$(function(){
		$("#create").click(function(){
			var vo = {
				name: "둘리",
				email: "dooly@gmail.com",
				password: "1234",
				gender: "male"
			};
			
			$.ajax({
				url: "${pageContext.request.contextPath}/api/user",
				type: "post",
				dataType: "json",		//dataType: 받는 타입, contentsType: 보내는 타입
				contentType: "application/json",
				data: JSON.stringify(vo),
				success: function(response) {
					console.log(response);
				}
			});
		});
		$("#read").click(function(){
			$.ajax({
				url: "${pageContext.request.contextPath}/api/user/10",
				type: "get",
				success: function(response) {
					console.log(response);
				}
			});
		})
		
		$("#update").click(function(){
			var vo = {
					name: "둘리",
					password: "12345",
					gender: "male"
				};
				
			$.ajax({
				url: "${pageContext.request.contextPath}/api/user/10",
				type: "put",
				dataType: "json",
				contentType: "application/json",
				data: JSON.stringify(vo),
				success: function(response) {
					console.log(response);
				}
			});
		});
		
		$("#delete").click(function(){
			$.ajax({
				url: "${pageContext.request.contextPath}/api/user/10",
				type: "delete",
				dataType: "json",
				contentType: "application/x-www-form-urlencoded",
				data: "password=1234",
				success: function(response) {
					console.log(response);
				}
			});
		});
	});
</script>
</head>
<body>
	<h1>AJAX Test: Restful API</h1>
	
	<button id="create">Create(POST)</button>
	<button id="read">Read(GET)</button>
	<button id="update">Update(PUT)</button>
	<button id="delete">Delete(DELETE)</button>
</body>
</html>