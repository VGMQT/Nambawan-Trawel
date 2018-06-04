$(document).ready(function () {

    //----------------------<<svg for ie>>----------------------\\
    (function () {
        svg4everybody();
    }());

    //----------------------<<one page scroll>>----------------------\\
    (function () {
        $('#fullpage').fullpage({

            anchors:['first', 'second', 'third'],
            navigation: true,
            scrollBar: true,

            afterLoad: function(anchorLink){
                if(anchorLink == 'third'){
                    $.fn.fullpage.setAutoScrolling(false);
                } else {
                    $.fn.fullpage.fitToSection();
                }
            }
        });

        $("[href='#first'], [href='#second']").on('click', function () {
            $.fn.fullpage.setAutoScrolling(true);
        });

    }());

    //----------------------<<swiper>>----------------------\\
    (function () {

        var mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-nx',
                prevEl: '.swiper-button-pr'
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
                clickable: true,
                formatFractionCurrent: function (number) {
                    return '0' + number;
                },
                formatFractionTotal: function (number) {
                    return '0' + number;
                }
            }
        })

    }());

});