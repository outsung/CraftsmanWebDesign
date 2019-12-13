/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Initializations of plugins
 */


var power = false;


function resize(){
	var size = window.innerWidth
	var fontsize = size/1000*13+5;
	var top = size*408/1220-84;
	//console.log("top : ",top,size);
	$("#banner1 .bora h1").css("fontSize" , fontsize+"px");
	$("#banner1 .bora h1").css("lineHeight" , fontsize*2+"px");
	$("#banner1 .bora").css("top" , top+"px");


	//var skilltop = size;
	//console.log(((size/100*-9)-76),"top");
	$(".habilidades").css("top",((size/100*-9)-76) +"px");


	//console.log(size/100*26+119,"width");
	$("#codeconSkills").css("width", size/100*26+119+"px");
	$("#codeconSkills").next().css("width", size/100*26+119+"px");
	$("#codeconSkills").next().next().css("width", size/100*26+119+"px");
	//$(".codeconSkillbar").css("width", size/100*26+119+"px");

	var h = size/10000*65+25;
	//console.log(h,"top");
	$("#codeconSkills p").css("lineHeight", h+"px");
	$("#codeconSkills p").css("fontSize", size/610+13+"px");


	$(".skillBar").css("height", h+"px");
	$(".codeconSkillbar").css("height", h+"px");


	if(size <= 770)
		$("#name").css("display", "none");
	else
		$("#name").css("display", "block");


   // ID = Home
   // size change 에 맞게 [candy] scale 수정한다.
   // 
   var main_x = $("#main").width();
   var main_y = $("#main").height();
   
   console.log("size : " + main_x + ", " + main_y);

   $("#candyRoom").css("width", main_x + "px");
   $("#candyRoom").css("height", main_y + "px");
}


window.onload = function () {
 resize();
};

var powerClick = function(){
	if(power){
		power = !power;
		//console.log("turn off");
		$("#main").attr("src", "img/main.png");
		$("#candyRoom img").attr("src", "img/switch.png");

		$("body").css("backgroundColor", "#ffffff");
		$("body").css("color", "#333333");
		$("h1").css("color", "#333333");
		$("h2").css("color", "#333333");
		$("h4").css("color", "#333333");


	
		$(".codeconSkillbar").css("backgroundColor", "rgba(17, 17, 17, .3)");

	}
	else{
		power = !power;
		//console.log("turn on");
		$("#main").attr("src", "img/main_.png");
		$("#candyRoom img").attr("src", "img/switch_.png");

		$("body").css("backgroundColor", "#0B0500");
		$("body").css("color", "#ffffff");
		$("h1").css("color", "#ffffff");
		$("h2").css("color", "#ffffff");
		$("h4").css("color", "#ffffff");


		$(".codeconSkillbar").css("backgroundColor", "rgba(180, 180, 180, .3)");

	}
};




(function($){
	$(document).ready(function(){

		$(".banner-image").backstretch('img/banner.jpg');

		// Fixed header
		//-----------------------------------------------
		$(window).scroll(function() {
			if (($(".header.fixed").length > 0)) {
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		$(window).load(function() {
			if (($(".header.fixed").length > 0)) {
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		//Scroll Spy
		//-----------------------------------------------
		if($(".scrollspy").length>0) {
			$("body").addClass("scroll-spy");
			$('body').scrollspy({
				target: '.scrollspy',
				offset: 152
			});
		}

		//Smooth Scroll
		//-----------------------------------------------
		if ($(".smooth-scroll").length>0) {
			$('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top-151
						}, 1000);
						return false;
					}
				}
			});
		}

		// Animations
		//-----------------------------------------------
		if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
			$("[data-animation-effect]").each(function() {
				var $this = $(this),
				animationEffect = $this.attr("data-animation-effect");
				if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					$this.appear(function() {
						setTimeout(function() {
							$this.addClass('animated object-visible ' + animationEffect);
						}, 400);
					}, {accX: 0, accY: -130});
				} else {
					$this.addClass('object-visible');
				}
			});
		};

		// Isotope filters
		//-----------------------------------------------
		if ($('.isotope-container').length>0) {
			$(window).load(function() {
				$('.isotope-container').fadeIn();
				var $container = $('.isotope-container').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.6s',
					filter: "*"
				});
				// filter items on button click
				$('.filters').on( 'click', 'ul.nav li a', function() {
					var filterValue = $(this).attr('data-filter');
					$(".filters").find("li.active").removeClass("active");
					$(this).parent().addClass("active");
					$container.isotope({ filter: filterValue });
					return false;
				});
			});
		};

		//Modal
		//-----------------------------------------------
		if($(".modal").length>0) {
			$(".modal").each(function() {
				$(".modal").prependTo( "body" );
			});
		}

	}); // End document ready
})(this.jQuery);
