jQuery(document).ready(function () {

    if (jQuery(window).width() > 990) {
        jQuery('.blinds-value-section .blinds-value-items').on('init', function (event, slick) {
            jQuery('[data-slick-index="0"] > div').css({
                'padding-right': '15px'
            });
        });
    }

    jQuery('.blinds-value-section .blinds-value-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        centerMode: false,
        responsive: [{
            breakpoint: 990,
            settings: {
                slidesToShow: 1.1,
                slidesToScroll: 1,
                focusOnSelect: true,
                arrows: false,
                centerMode: true,
                infinite: false,
                dots: true,
            }
        }]
    });
});