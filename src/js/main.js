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

    //----------------------<<menu>>----------------------\\
    (function () {

        var flag = true;

        $('.menu__btn').on('click', function (e) {
            e.preventDefault();

            var
                $this = $(this),
                menu = $this.closest('.menu'),
                wrapper = $('.fullpage-wrapper'),
                list = menu.find('.menu__list'),
                btnShow = $this.find('.svg_menu'),
                btnHide = $this.find('.svg_hide'),
                textShow = $this.find('.menu__btn-menu'),
                textHide = $this.find('.menu__btn-hide'),
                socials = menu.find('.menu__socials'),
                socialsCol = menu.find('.menu__socials_col-wrapper'),
                durationWrap = 300,
                durationList = 1500,
                duration = 500;

            if(flag){
                flag = false;
                if(!$this.hasClass('pressed')) {

                    $this.addClass('pressed');

                    menu.animate({
                        width : 180
                    }, durationWrap);
                    wrapper.animate({
                        marginLeft : 180
                    }, durationWrap);

                    btnShow.fadeOut(duration, function () {
                        btnHide.fadeIn(duration);
                    });
                    textShow.fadeOut(duration, function () {
                        textHide.fadeIn(duration);
                    });

                    list.fadeIn(durationList);

                    socials.fadeOut(duration, function () {
                        socialsCol.fadeIn(duration,  function () {
                            flag = true;
                        });
                    });
                } else {

                    $this.removeClass('pressed');

                    menu.animate({
                        width : 80
                    }, durationWrap);
                    wrapper.animate({
                        marginLeft : 80
                    }, durationWrap);

                    btnHide.fadeOut(duration, function () {
                        btnShow.fadeIn(duration);
                    });
                    textHide.fadeOut(duration, function () {
                        textShow.fadeIn(duration);
                    });

                    list.fadeOut(duration);

                    socialsCol.fadeOut(duration, function () {
                        socials.fadeIn(duration,  function () {
                            flag = true;
                        });
                    });
                }
            }
        });
    }());

});