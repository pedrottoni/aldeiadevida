$(document).ready(function(){
	$('.menu-toggle').click(function(){
        $('.links').toggleClass('active');
	})
    $('ul li').click(function(){
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active')
    })
});
$("main").scroll(function() {    
    var scroll = $("main").scrollTop();
    var objectSelect = $("#change_header");
    var objectPosition = objectSelect.offset().top;
    if (scroll > objectPosition) {
        $("#menuPrincipal").addClass("change");
    } else {
        $("#menuPrincipal").removeClass("change");
    }
});