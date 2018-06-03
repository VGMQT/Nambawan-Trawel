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

});