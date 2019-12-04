// JavaScript Document

// JavaScript Document


$(function () {
 $('header nav > ul > li > ul').hide();
 $('header nav > ul > li > a ').on('mouseenter', function(){
  $(this).addClass('on').next().stop().slideDown();
 });
 $('header nav > ul > li').on('mouseleave', function(){
  $(this).children('a').removeClass('on').next().stop().slideUp(200);
 });
})


$(function () {
    $('.popuplink').on('click', function () {
        $('.popup').fadeIn();
    })
    $('.popup button').on('click', function () {
        $('.popup').fadeOut();
    })
})

$(function () {
	var now = 1;
	setInterval(function() {
	if (now == 3) {
	now = 1;
	} else {
	 now += 1;
	}
	$('.slide ul li').hide();
	$('.slide ul li').eq(now-1).fadeIn();
	}, 3000)
})


$(function () {
	$('.c1 h2').on('click', function () {
        $(this).addClass('on').next().show();
        $(this).parent('div').siblings('div')
            .children('h2').removeClass('on')
            .next().hide();
    })
})