$(document).ready(function(){
	$('section').slick({
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		lazyLoad: 'ondemand',
		autoplay: true,
		  responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				arrows: false,
				slidesToShow: 3,
				slidesToScroll: 1,
				lazyLoad: 'ondemand',
				autoplay: true,
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				slidesToShow: 2,
				slidesToScroll: 1,
				lazyLoad: 'ondemand',
				autoplay: true,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				lazyLoad: 'ondemand',
				autoplay: true,
			  }
			}
		  ]
	});
	$('.fa-youtube-play').click(function(){
		var tr = $(this).children()[0].innerHTML;
		$('.trailer').removeClass('hidden');
		$('<iframe>', {
			src: 'https://www.youtube.com/embed/' + tr,
			id: 'trframe',
			frameborder: 0,
			scrolling: 'no'
		}).appendTo('.trailer');
	});
	$('.trailer').click(function(){
		$('#trframe').remove();
		$('.trailer').addClass('hidden');
	});
});