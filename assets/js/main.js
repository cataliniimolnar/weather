$(function() {
	$('#i__1').click(function(){
		$('.trailer__z').removeClass('hidden');
		var tr = document.getElementById('tr__1').innerHTML;
		$('<iframe>', {
			src: 'https://www.youtube.com/embed/' + tr,
			id: 'trframe',
			frameborder: 0,
			scrolling: 'no'
		}).appendTo('.trailer__z');
	});
	
	$('#i__2').click(function(){
		$('.trailer__z').removeClass('hidden');
		var tr = document.getElementById('tr__2').innerHTML;
		$('<iframe>', {
			src: 'https://www.youtube.com/embed/' + tr,
			id: 'trframe',
			frameborder: 0,
			scrolling: 'no'
		}).appendTo('.trailer__z');
	});
	
	$('#i__3').click(function(){
		$('.trailer__z').removeClass('hidden');
		var tr = document.getElementById('tr__3').innerHTML;
		$('<iframe>', {
			src: 'https://www.youtube.com/embed/' + tr,
			id: 'trframe',
			frameborder: 0,
			scrolling: 'no'
		}).appendTo('.trailer__z');
	});

	$('.fa-times').click(function(){
		$('#trframe').remove();
		$('.trailer__z').addClass('hidden');
	});

});

