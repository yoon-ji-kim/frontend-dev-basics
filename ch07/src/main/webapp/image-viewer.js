var imageViewer = {
	init: function() {
		//$('.image-viewer .buttons #btn-change').click(imageViewer._changeImage);
		$(imageViewer._init);
	},
	_init: function() {
		$('.image-viewer #btn-change').click(imageViewer._changeImage);
		$('.image-viewer #btn-slideshow').click(imageViewer._slideImage);
	},
	_changeImage: function() {
		var index = Math.floor(Math.random() * imageViewer._images.length);
		var image = imageViewer._images[index];
		$("img").replaceWith("<img src='images/"+image.file+"' title='"+ image.name+"' />");
		imageViewer._imageIndex = index;
	},
	_slideImage: function() {
		if(imageViewer._isSlide){
			$('#btn-slideshow').html('<button id="btn-slideshow">슬라이드쇼  시작</button>');
			clearInterval(imageViewer._intervalId);
		} else {
			$('#btn-slideshow').html('<button id="btn-slideshow">슬라이드쇼 종료</button>');
			imageViewer._intervalId = setInterval(function() {
				var image = imageViewer._images[imageViewer._imageIndex];
				$("img").replaceWith("<img src='images/"+image.file+"' title='"+ image.name+"' />");
				imageViewer._imageIndex =(imageViewer._imageIndex == (imageViewer._images.length-1)) ? 0 : imageViewer._imageIndex+1;
			}, 1000);
		}
		imageViewer._isSlide = !imageViewer._isSlide;
	},
	_imageIndex: 6,
	_isSlide : false,
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