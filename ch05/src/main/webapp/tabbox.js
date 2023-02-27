var TabBox = {
	//관례: 외부에서 사용xx -> _붙이기
	_onTabClicked: function() {
		$('.tab-box li.selected').removeClass("selected");
		$(this).addClass("selected");
	},
	_init: function() {
		$('.tab-box li').click(TabBox._onTabClicked);
	},
	init: function() {
		//$(function() {
		//	$('.tab-box li').click(this._onTabClicked);
		//}.bind(this));
		
		//$(function() {
		//	$('.tab-box li').click(TabBox._onTabClicked);
		//});
		$(TabBox._init);
	}
}