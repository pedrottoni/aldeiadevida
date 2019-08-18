$("main").scroll(function () {
    var scroll = $("main").scrollTop();
    var objectSelectCardsOn = $("#animationCardsOn");
    var objectPositionCardsOn = objectSelectCardsOn.offset().top;
    if (scroll > objectPositionCardsOn) {
        $(".card1").addClass("animeCard1");
        $(".card2").addClass("animeCard2");
        $(".card3").addClass("animeCard3");
    } else {
        $(".card1").removeClass("animeCard1");
        $(".card2").removeClass("animeCard2");
        $(".card3").removeClass("animeCard3");
    }
});
$("main").scroll(function () {
    var scroll = $("main").scrollTop();
    var objectSelectCardsOff = $("#animationCardsOff");
    var objectPositionCardsOff = objectSelectCardsOff.offset().top;
    if (scroll > objectPositionCardsOff) {
        $(".card1").removeClass("animeCard1");
        $(".card2").removeClass("animeCard2");
        $(".card3").removeClass("animeCard3");
    }
});

$("main").scroll(function () {
    var a = 0;
    var scroll = $("main").scrollTop();
    var objectSelectCardsOn = $("#animationCounterOn");
    var objectPositionCardsOn = objectSelectCardsOn.offset().top;
    if (a === 0 && scroll > objectPositionCardsOn) {
        $('.counter-value').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {

                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        a = 1;
    }
});