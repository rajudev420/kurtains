jQuery(document).ready(function () {
    jQuery(document).on('click', ".image-video-block .image-video-block-video-container", function () {
        var $el = jQuery(this);
        var $video = $el.find(".video")[0];

        if ($el.hasClass('active')) {
            $el.removeClass('active');
            $el.find(".playbutton").animate({
                opacity: 1
            }, 100);
            $video.pause();
        } else {
            $el.addClass('active');
            $el.find(".playbutton").animate({
                opacity: 0
            }, 500);
            $video.play();
        }
    });

    if (jQuery(window).width() < 990 || jQuery('.image-video-block-items .image-video-block-item').length > 5) {
        jQuery('.image-video-block-items').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            centerMode: false,
            variableWidth: true,
            responsive: [{
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    variableWidth: false,
                    centerMode: false,
                }
            }]
        });
    }
});