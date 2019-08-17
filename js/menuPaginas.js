$(document).ready(function(){
	$('.menu-toggle').click(function(){
        $('.links').toggleClass('active');
	})
    $('ul li').click(function(){
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active')
    })
});
$("#menuPrincipal").addClass("change");