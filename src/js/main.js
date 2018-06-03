$(document).ready(function () {

    //----------------------<<svg for ie>>----------------------\\
    (function () {
        svg4everybody();
    }());

    //----------------------<<one page scroll>>----------------------\\
    (function () {
        $(".main").onepage_scroll({
            sectionContainer: "section",
            easing: "ease",
            animationTime: 1000,
            pagination: true,
            updateURL: false,
            beforeMove: function(index) {},
            afterMove: function(index) {},
            loop: false,
            keyboard: true,
            responsiveFallback: false,
            direction: "vertical"
        });

        $('.anchor__btn').on('click', function (e) {
            e.preventDefault();
            $('.main').moveDown();
        });
    }());

});