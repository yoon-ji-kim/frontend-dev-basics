var _jQuery = function(elements) {
	this.length = elements.length;
	for(var i=0; i< this.length; i++){
		this[i] = elements[i];
	}
}
_jQuery.prototype.css = function(name, value) {
	for(var i=0; i< this.length; i++) {
		this[i].style[name] = value;
	}
}
_jQuery.prototype.click = function(handler) {
	for(var i=0; i< this.length; i++) {
		this[i].addEventListener('click', handler);
	}
}
var jQuery = function(param) {
	if(typeof(param) === 'function') {
		window.addEventListener('load', param);
		return;
	}
	
	var elements;
	if(typeof(param) === 'string') {
		elements = document.querySelectorAll(param);
	}
		//jQuery object만드는 생성자 함수(elements가 false면 빈 배열)
	return new _jQuery(elements || []);
}

var $ = jQuery;