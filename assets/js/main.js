$(document).ready(function(){
	
	setTimeout(docReady, 5000);


	var is_mobile = false;
    if( $('#desktop').css('display')=='none') {
        is_mobile = true;       
		}
    if (!is_mobile) {
		$('article').mouseenter(function(){
			$(this).find('.ico').addClass('show');
			});
		$('article').mouseleave(function(){
			$(this).find('.ico').removeClass('show');
			});

		$('.fa-film').mouseenter(function(){
			$(this).parent().parent().find('.m__title').removeClass('off');
			});
		$('.fa-film').mouseleave(function(){
			$(this).parent().parent().find('.m__title').addClass('off');
			});
		
		$('.fa-info').mouseenter(function(){
			$(this).parent().parent().find('.m__info').removeClass('off');
			});
		$('.fa-info').mouseleave(function(){
			$(this).parent().parent().find('.m__info').addClass('off');
			});
	} else {
		$('.ico').addClass('show');
		
		$('.fa-film').click(function(){
			$(this).parent().parent().find('.m__title').toggleClass('off');
			});

		
		$('.fa-info').click(function(){
			$(this).parent().parent().find('.m__info').toggleClass('off');
			});
		
	}


	$('.fa-youtube-play').click(function(){
		var tr = $(this).children()[0].innerHTML;
		$('.trailer').removeClass('off');
		$('<iframe>', {
			src: 'https://www.youtube.com/embed/' + tr,
			id: 'trframe',
			frameborder: 0,
			scrolling: 'no'
		}).appendTo('.trailer');
	});
	$('.trailer').click(function(){
		$('#trframe').remove();
		$('.trailer').addClass('off');
	});
	

});


function docReady() {
	$('#loader').remove();
	$('.wrapper').removeClass('off');
	}