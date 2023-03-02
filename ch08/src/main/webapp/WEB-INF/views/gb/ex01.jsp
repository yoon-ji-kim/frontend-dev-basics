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
 //DOM 완료하고 통신 뒤 실행
	var render = function(vo) {
		var html = ("<li data-no=''>" +
				" <strong>이름</strong>" +
				" <p>메세지</p>" +
				" <strong></strong>" +
				" <a href='' data-no=''>삭제</a>" + 
				"</li>");

		$('#list-guestbook').prepend(htmls);
 	}
	$(function() {
		$('#add-form').submit(function(event) {
			event.preventDefault();
			
			//form serialization :폼에 있는 데이터 가져오기 
			var vo = {}; //과제할 땐 이렇게 말고 validation 해야함
			vo.name = $('#input-name').val();
			vo.email = $('#input-password').val();
			vo.message = $('#tx-content').val();
			//validation & messagebox
			
			//ajax form
			$.ajax({
				url: "${pageContext.request.contextPath}/guestbook/api"
				,type: "post"
				,dataType: "json"
				,contentType: "application/json"
				,data: JSON.stringify(vo)
				,success: function(response) {
					if(response.result === 'fail'){
						console.error(response.message);
						return;
					}
					render(response.data);
				}
			})
		})
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
				<ul id="list-guestbook">

					<li data-no=''>
						<strong>지나가다가</strong>
						<p>
							별루입니다.<br>
							비번:1234 -,.-
						</p>
						<strong></strong>
						<a href='' data-no=''>삭제</a> 
					</li>
					
					<li data-no=''>
						<strong>둘리</strong>
						<p>
							안녕하세요<br>
							홈페이지가 개 굿 입니다.
						</p>
						<strong></strong>
						<a href='' data-no=''>삭제</a> 
					</li>

					<li data-no=''>
						<strong>주인</strong>
						<p>
							아작스 방명록 입니다.<br>
							테스트~
						</p>
						<strong></strong>
						<a href='' data-no=''>삭제</a> 
					</li>
					
									
				</ul>
			</div>
			
				<div id="dialog-delete-form" title="메세지 삭제" style="display:none">
  				<p class="validateTips normal">작성시 입력했던 비밀번호를 입력하세요.</p>
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