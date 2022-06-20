$(window).load(function() {
        $(".navbar").css("display", "none");
        $(".main").css("display", "none");
        $(".navlinks").css("display", "none");
        $(".info-card").css("left", "-100%");
        if ($(window).width() > 1000) {
            $(".navbar").delay(100).slideDown(300);
            $(".main").delay(300).fadeIn(300, function(){
                $(".info-card").animate({
                    left: "30%"
                }, 500, function(){
                });
                $(".footer").delay(100).fadeIn(300);
            });
            $(".navlinks").delay(100).fadeIn(300);
        }
        else{
            $(".navbar").delay(100).slideDown(300);
            $(".main").delay(300).fadeIn(300, function(){
                $(".footer").delay(100).fadeIn(300);
            });
        }
});