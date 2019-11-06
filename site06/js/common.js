$(document).ready(function() {
 
	var count_option = 4;
	var speed_option = 200;
	var width_option = 960;
	var product_option = $('ul.picture li').length;

	slideReady();

	function slideReady(){
		$('div.contents').css('width', width_option);
		var li_width = Math.ceil(width_option / count_option); 
		var ul_width = li_width * product_option;
		$('ul.picture').css('width', ul_width);
		$('ul.picture li').css('width', li_width);
	}


	$('div.button > div').click(function(){
		var check = $(this).attr('class');
		var distance = $('ul.picture li').width();
		if (check == 'prev') {
			prevSlide(distance);
		}else{nextSlide(distance); }
	
	});

	

	function prevSlide(a){
			$('ul.picture').animate({left:'+=' + a}, speed_option, slidePosition );
		}
	
	function nextSlide(a){
			$('ul.picture').animate({left:'-=' + a}, speed_option, slidePosition );
		}


		function slidePosition(){ 
			var product = $('div.contents').width(); 
			var rolling = $('ul.picture').width(); 
			var move = -(rolling - product) 
			var end = $('ul.picture').position().left; 
			if (end > 0) {
				$('ul.picture').animate({left : 0}, speed_option);
			}else if (end < move) {
				$('ul.picture').animate({left : move}, speed_option);
			}
		}




	$('ul.picture li img').mouseover(function(){
		//var idName = $(this).attr('id');
		//$('div.movie img').attr('src','img/' + idName + '.jpg');	
        var idsrc = $(this).attr('src');
		$('div.movie img').attr('src',idsrc);	
	});





	$('div.menu a').click(function(){
			event.preventDefault();
			var nav = $(this).parent().index();
			var sec = $('.scroll_start').eq(nav);
			var position = sec.position().top; 
			$('html, body').animate({scrollTop : position });
		});
	

		
		$(window).on('scroll', function(){
			var now = $(window).scrollTop();
			if (now >= 80) { $('div.menu').addClass('fixed'); 
			}else { $('div.menu').removeClass('fixed'); 
					$('div.menu a').removeClass('active'); }
			if (now >= 80 && now < 900) { $('div.menu li').eq(0).children('a').addClass('active');
								                       $('div.menu li').eq(0).siblings().children('a').removeClass('active');
			
			}
			if (now >= 900 && now < 1800) {$('div.menu li').eq(1).children('a').addClass('active');
								 $('div.menu li').eq(1).siblings().children('a').removeClass('active'); 
								 }
			if (now >= 1800 && now < 2800) {$('div.menu li').eq(2).children('a').addClass('active');
								 $('div.menu li').eq(2).siblings().children('a').removeClass('active'); 
								 }
			if (now >= 2800 && now < 3700) {$('div.menu li').eq(3).children('a').addClass('active');
								 $('div.menu li').eq(3).siblings().children('a').removeClass('active'); 
								 }
		
		});





	
});


