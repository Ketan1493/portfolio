$(window).load(function() {
    if ($(window).width() > 1000) {
        $(".navbar").css("display", "none");
        $(".navlinks").css("display", "none");
        if ($(window).width() > 1000) {
            $(".navbar").delay(100).slideDown(300);
            $(".navlinks").delay(100).fadeIn(300);
            $(".footer").delay(100).fadeIn(300);
        }
    }
});