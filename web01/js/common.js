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