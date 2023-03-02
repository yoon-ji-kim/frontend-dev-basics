<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script>
	var render = function(vo, mode) {
		var htmls = "<li data-no='"+vo.no+"'>" +
			" <strong>" + vo.name + "</strong>" +
			" <p>" + vo.message + "</p>" +
			" <strong></strong>" +
			" <a href='' data-no='"+ vo.no +"'>삭제</a>" + 
			"</li>";

		$('#list-guestbook')[mode? "prepend" : "append"](htmls);
		
 	}
	var fetch = function() {
		$.ajax({
											//처음에 없으면 sno 0또는 없이
			url: "${pageContext.request.contextPath}/guestbook/api?sno=0"
			,type: "get"
			,dataType: "json"
			,success: function(response) {
				if(response.result === 'fail'){
					console.error(response.message);
					return;
				}
					
				console.log(response);
				
				response.data.forEach(function(vo) {
					render(vo);
				})
				
			}
		})
	}
	
	$(function() {
		//삭제 dialog jQuery 객체 미리 생성(element를 골라야해서 안에 만들어야함)
		var $dialogDelete = $('#dialog-delete-form').dialog({
			autoOpen: false //자동으로 안뜸
			,modal: true
			,buttons: {
				"삭제" : function() {
					console.log("삭제하기")
					/*
					$.ajax({
											//처음에 없으면 sno 0또는 없이
						url: "${pageContext.request.contextPath}/guestbook/api/10"
						,type: "delete"
						,dataType: "json"
						,success: function(response) {
							//응답: 삭제된 번호
							//$('li[data-no=받은 응답값]').remove();
							//삭제 안 된 경우: -1
							//
							if(response.result === 'fail'){
								console.error(response.message);
								return;
							}
								
							console.log(response);
							
							response.data.forEach(function(vo) {
								render(vo);
							})
							
						}
					});
					*/
				},
				"취소" : function() {
					//기본 입력 값 리셋
					console.log("삭제 다이얼로그 폼 데이터 리셋");
					$(this).dialog('close');
				}
			}
		})
		//메세지 삭제 버튼 click 이벤트 처리(Live Event)
		$(document).on('click', '#list-guestbook li a', function() {
			event.preventDefault();
			//삭제 할 방명록 번호 얻기
			// console.log(this);
			//console.log($(this).data('no'));
			console.log($(this).data('no'));
			$('#hidden-no').val($(''))
			$dialogDelete.dialog('open'); //미리 생성한 dialog open
		
		})
		fetch();
	})
</script>
</head>
<body>
	<div id="guestbook">
		<h1>방명록</h1>
		<form id="add-form" action="" method="post">
			<input type="text" id="input-name" placeholder="이름">
			<input type="password" id="input-password" placeholder="비밀번호">
			<textarea id="tx-content" placeholder="내용을 입력해 주세요."></textarea>
			<input type="submit" value="보내기" />
		</form>
		<ul id="list-guestbook"></ul>
	</div>
	<!-- 삭제시 dialog -->
	<div id="dialog-delete-form" title="메세지 삭제" style="display:none">
  		<p class="validateTips normal">작성시 입력했던 비밀번호를 입력하세요.</p>
  		<!-- 응답이 0으로 오면 display하기 -->
  		<p class="validateTips error" style="display:none">비밀번호가 틀립니다.</p>
  		<form>
 			<input type="password" id="password-delete" value="" class="text ui-widget-content ui-corner-all">
			<input type="hidden" id="hidden-no" value="">
			<input type="submit" tabindex="-1" style="position:absolute; top:-1000px">
  		</form>
	</div>
	<div id="dialog-message" title="" style="display:none">
  		<p></p>
	</div>
</body>
</html>