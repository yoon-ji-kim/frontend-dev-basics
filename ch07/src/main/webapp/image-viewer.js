var imageViewer = {
	init: function() {
		$(function() {
			$('.image-viewer #btn-change').click(this._changeImage.bind(this));
			$('.image-viewer #btn-slideshow').click(this._slideImage.bind(this));
		}.bind(this))
	},
	_changeImage: function() {
		var index = Math.floor(Math.random() * this._images.length);
		var image = this._images[index];
		$("img").replaceWith("<img src='images/"+image.file+"' title='"+ image.name+"' />");
	},
	_slideImage: function() {
		if(this._intervalId){
			$('#btn-slideshow').text('슬라이드쇼 시작');
			clearInterval(this._intervalId);
		} else {
			$('#btn-slideshow').text('슬라이드쇼 종료');
			this._intervalId = setInterval(function() {
				this._changeImage();
			}.bind(this), 1000);
		}
	},
	_intervalId: null,
	_images: [{
			name: '국화',
			file: 'Chrysanthemum.jpg'
		}, {
			name: '사막',
			file: 'Desert.jpg'	
		}, {
			name: '수국',
			file: 'Hydrangeas.jpg'
		}, {
			name: '젤리피쉬',
			file: 'Jellyfish.jpg'
		}, {
			name: '코알라',
			file: 'Koala.jpg'
		}, {
			name: '등대',
			file: 'Lighthouse.jpg'
		}, {
			name: '펭귄',
			file: 'Penguins.jpg'
		}, {
			name: '튤립',
			file: 'Tulips.jpg'
		}]
}