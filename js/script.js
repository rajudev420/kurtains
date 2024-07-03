

function fixedHeader() {
    var height = jQuery('.site-header-container').height();
    jQuery('.site-header-container-shadow').height(height);
}

function setHeightImage() {
    var max_height = 0;
    jQuery('.different-cutrain-materials-body .different-cutrain-material img').css('min-height', '');
    jQuery('.different-cutrain-materials-body .different-cutrain-material').each(function () {
        if (jQuery(this).find('img').height() > max_height) {
            max_height = jQuery(this).find('img').height();
        }
    });
    jQuery('.different-cutrain-materials-body .different-cutrain-material img').css('min-height', max_height + 'px');
}

function setHeightProductDescription() {
    setTimeout(function () {
        var max_height = 0;
        jQuery('.pricing-product-description').css('min-height', '');
        jQuery('.pricing-product-description').each(function () {
            if (jQuery(this).height() > max_height) {
                max_height = jQuery(this).height();
            }
        });
        jQuery('.pricing-product-description').css('min-height', max_height + 'px');
    }, 300);
}

function addRadioButtons() {
    if (jQuery('.wpbc_structure_form #iwanttopay1').length > 0) {
        var controls = jQuery('.wpbc_structure_form #iwanttopay1').closest('.controls');
        controls.append('<div class="select-to-radio"></div>');
        var container = controls.find('.select-to-radio');
        jQuery('.wpbc_structure_form #iwanttopay1 option').each(function (i) {

            var checked = '';
            if (jQuery(this).is(':selected')) {
                checked = 'checked="checked"';
            }

            container.append('<div class="radio-block"><input type="radio" ' + checked + ' id="iwanttopay1-' + i + '" value="' + jQuery(this).val() + '" name="radi_iwanttopay"><label for="iwanttopay1-' + i + '">' + jQuery(this).html() + '</label></div>');
            jQuery('#iwanttopay1-' + i).change(function () {
                jQuery('#iwanttopay1 option[value="' + jQuery(this).val() + '"]').prop('selected', 'selected').change();
            });
        })
    }
}

function createReadMore() {

    jQuery('readmore').each(function () {
        var text = jQuery(this).html();
        jQuery(this).html(
            '<span class="read-more-show">Read more</span>' +
            '<span class="read-more-body"></span>' +
            '<span class="read-more-hide"> Less</span>'
        );
        jQuery(this).find('.read-more-body').html(text);
        jQuery(this).addClass('show');
    });

    jQuery('.read-more').each(function () {
        var text = jQuery(this).html();
        jQuery(this).html(
            '<span class="read-more-show">Read more</span>' +
            '<span class="read-more-body"></span>' +
            '<span class="read-more-hide"> Less</span>'
        );
        jQuery(this).find('.read-more-body').html(text);
        jQuery(this).addClass('show');
    });

    jQuery('.read-more-show').on('click', function () {
        var parent = jQuery(this).parent();
        parent.find('.read-more-body').show();
        parent.find('.read-more-hide').show();
        jQuery(this).hide();
    })

    jQuery('.read-more-hide').on('click', function () {
        var parent = jQuery(this).parent();
        parent.find('.read-more-body').hide();
        parent.find('.read-more-show').show();
        jQuery(this).hide();
    })
}

jQuery(document).ready(function () {

    var _tmpa = false;
    jQuery('#menu-main-menu li a').on('click', function (event) {
        if (jQuery(this).closest('li').find('li').length == 0) {
            _tmpa = true;
        } else {
            return false;
        }
    });

    jQuery('#menu-main-menu li').on('click', function (event) {
        if (jQuery(window).width() < 992 && _tmpa == false) {

            if (jQuery(this).find('li').length > 0) {
                event.preventDefault();
                event.stopPropagation();
            }

            if (jQuery(this).hasClass('selected')) {
                jQuery(this).removeClass('selected');
            } else {
                jQuery(this).closest('ul').find('li').removeClass('selected');
                jQuery(this).addClass('selected');
            }
        }
    })

    createReadMore();

    addRadioButtons();

    setHeightImage();
    jQuery(window).resize(setHeightImage);

    fixedHeader();
    jQuery(window).resize(fixedHeader);

    setHeightProductDescription();
    jQuery(window).resize(setHeightProductDescription);

    if (jQuery('.homepage-services').length > 0) {
        jQuery('.homepage-services').slick({
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            focusOnSelect: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 790,
                    settings: {
                        slidesToShow: 1.5,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1.2,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 393,
                    settings: {
                        infinite: false,
                        slidesToShow: 1.1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }
            ]
        });
    }

    if (jQuery('.related.products .products').length > 0) {
        jQuery('.related.products .products').slick({
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            centerPadding: '50px',
            centerMode: false,
            responsive: [
                {
                    breakpoint: 9999,
                    settings: "unslick"
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1.2,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 393,
                    settings: {
                        slidesToShow: 1.1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }
            ]
        });
    }


    /**
    jQuery('.product-gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    jQuery('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-gallery',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
    /**/

    if (jQuery('.our-partners-old').length > 0) {
        jQuery('.our-partners-old').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            centerMode: true,
            focusOnSelect: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1500,
            // cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }
            ]
        });
    }

    if (jQuery('.pricing-product-card-container').length > 0) {
        jQuery('.pricing-product-card-container').slick({
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1.2,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 393,
                    settings: {
                        infinite: false,
                        slidesToShow: 1.1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }
            ]
        });
    }

    if (window.matchMedia("(max-width: 768px)").matches) {
        if (jQuery('.our-partners-old').length > 0) {
            jQuery('.our-partners-old').slick({
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: true,
                centerMode: true,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            arrows: false,
                            centerMode: false,
                            focusOnSelect: false,
                        }
                    }
                ]
            });
        }
    }

    jQuery('.form-pay-product').submit(function () {
        var valid = true;
        jQuery('.required-false').removeClass('required-false');
        jQuery('.required-fields').each(function () {
            var count = 0;
            jQuery(this).find('input[type="radio"]').each(function () {
                if (jQuery(this).is(':checked')) {
                    count++;
                }
            });
            jQuery(this).find('input[type="checkbox"]').each(function () {
                if (jQuery(this).is(':checked')) {
                    count++;
                }
            });
            if (count == 0) {
                // jQuery(this).addClass('required-false');
                valid = false;
            }
        });

        if (jQuery('#dimensions_1').is(':checked')) {
            jQuery('#dimension').val(jQuery('.select-dimensions').val());
        } else {
            jQuery('#dimension').val(
                jQuery('.custom-dimensions-width').val() + 'x' + jQuery('.custom-dimensions-height').val()
            );
        }
        return true;
        //        if (valid != true) {
        //            alert('Error validation!');
        //        }
        //        return valid;
    });

    document.addEventListener('wpcf7mailsent', function (event) {
        jQuery('.book-thankyou-block').show();
        setTimeout(function () {
            location = '/thankyou/';
        }, 2000);
    }, false);

    jQuery('.pricing-product-card').on('click', function () {
        jQuery('.pricing-product-card-current').removeClass('pricing-product-card-current');
        jQuery('input[name="bundle_id"]').prop('checked', false);
        jQuery(this).addClass('pricing-product-card-current');
        jQuery(this).find('input[name="bundle_id"]').prop('checked', true);
    })
});



(function ($) {

    $(document).on('click', '.single_add_to_cart_button', function (e) {
        e.preventDefault();

        var $thisbutton = $(this),
            $form = $thisbutton.closest('form.cart'),
            id = $thisbutton.val(),
            id = 899,
            product_qty = $form.find('input[name=quantity]').val() || 1,
            product_id = $form.find('input[name=product_id]').val() || id,
            variation_id = $form.find('input[name=variation_id]').val() || 0;

        var data = {
            action: 'woocommerce_ajax_add_to_cart',
            product_id: product_id,
            product_sku: '',
            quantity: product_qty,
            variation_id: variation_id,
        };

        $(document.body).trigger('adding_to_cart', [$thisbutton, data]);

        $.ajax({
            type: 'post',
            url: wc_add_to_cart_params.ajax_url,
            data: data,
            beforeSend: function (response) {
                $thisbutton.removeClass('added').addClass('loading');
            },
            complete: function (response) {
                $thisbutton.addClass('added').removeClass('loading');
            },
            success: function (response) {

                if (response.error && response.product_url) {
                    window.location = response.product_url;
                    return;
                } else {
                    $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, $thisbutton]);
                }
            },
        });

        return false;
    });
})(jQuery);


var _mask_phone1_state = '';
jQuery(document).ready(function () {

    jQuery(document).on("input", "#mask_phone1", function (event) {
        handleMask(event, "999-9999");
        changePhone();
    });

    jQuery(document).on("change", "#mask_phone1", function (event) {
        changePhone();
    });

    jQuery(document).on("keydown", "#mask_phone1", function(event) {
        if (event.which >= 48 && event.which <= 57) {
            _mask_phone1_state = '';
        } else {
            _mask_phone1_state = 'paste';
        }
    });

    jQuery(document).on("keyup", "#mask_phone1", function (event) {
        handleMask(event, "999-9999");
        changePhone();
    });

    jQuery('.operator').change(function() {
        changePhone();
    });
});

function my_customPlaceholder(placeholder, selectedCountryData) {
    if (placeholder == '050 123 4567') {
        placeholder = '50 123 4567';
    }
    return placeholder;
}

function changePhone(el) {
    const phone_country = jQuery('#phone_country').val();
    const operator = jQuery('.operator').val();
    let number = jQuery("#mask_phone1").val().replace('-', '');
    var phone = '';
    if (number.length == 7) {
        phone = phone_country + operator + number;
    }

    if (jQuery("#username").length > 0) {
        jQuery("#username").val(phone);
        jQuery("#username").attr('value', phone);
    } else {
        jQuery("#phone1").val(phone);
        jQuery("#phone1").attr('value', phone);
    }
}

function setDefaultMask(el, mask) {
    var val = el.val();
    var pos = 1;

    var nan = tcount(val, /\D/, pos); // nan va calcolato prima di eliminare i separatori
    val = val.replace(/\D/g, '');

    var mask = mask.match(/^(\D*)(.+9)(\D*)$/);
    if (!mask) return; // meglio exception?

    if (_mask_phone1_state != 'paste') {
        if (val.length > tcount(mask[2], /9/)) {
            return;
        }
    }

    for (var txt = '', im = 0, iv = 0; im < mask[2].length && iv < val.length; im += 1) {
        var c = mask[2].charAt(im);
        txt += c.match(/\D/) ? c : val.charAt(iv++);
    }

    el.val(txt);
    el.attr('value', txt);
}

function handleMask(event, mask) {

    if (event.charCode) {
        with (event) {
            stopPropagation()
            preventDefault()
            if (!charCode) return
            var c = String.fromCharCode(charCode)
            if (c.match(/\D/)) return
            with (target) {
                var val = value.substring(0, selectionStart) + c + value.substr(selectionEnd)
                var pos = selectionStart + 1
            }
        }
    } else {
        // if mobile enter
        with (event) {
            var inputValue = target.value;
            var lastCharacter = inputValue.charAt(inputValue.length - 1);
            var charCode = lastCharacter.charCodeAt(0);
            target.value = target.value.slice(0, -1);

            stopPropagation()
            preventDefault()
            if (!charCode) return
            var c = String.fromCharCode(charCode)
            if (c.match(/\D/)) return
            with (target) {
                var val = value.substring(0, selectionStart) + c + value.substr(selectionEnd)
                var pos = selectionStart + 1
            }
        }

    }

    var nan = tcount(val, /\D/, pos) // nan va calcolato prima di eliminare i separatori
    val = val.replace(/\D/g, '')

    var mask = mask.match(/^(\D*)(.+9)(\D*)$/)
    if (!mask) return // meglio exception?

    if (_mask_phone1_state != 'paste') {
        if (val.length > tcount(mask[2], /9/)) {
            return;
        }
    }

    if (val.length > 7) {
        var pattern = /^(?:(\d{1,3})|(\+\d{1,3}))?(\d{1,3})(\d{7})$/;
        var match = val.match(pattern);
        if (match) {
            var countryCode = match[1] || match[2];
            var operatorCode = match[3];
            var phoneNumber = match[4];

            if (operatorCode.length == 1 && countryCode.length == 1) {
                operatorCode = countryCode+operatorCode;
            }
            jQuery('.operator').val(operatorCode);
        } else {
            var phoneNumber = val.substring(val.length - 7);
        }

        val = phoneNumber;
    }

    for (var txt = '', im = 0, iv = 0; im < mask[2].length && iv < val.length; im += 1) {
        var c = mask[2].charAt(im)
        txt += c.match(/\D/) ? c : val.charAt(iv++)
    }

    with (event.target) {
        value = mask[1] + txt + mask[3]
        selectionStart = selectionEnd = pos + (pos == 1 ? mask[1].length : tcount(value, /\D/, pos) - nan)
    }
}


function tcount(str, c, e) {
    e = e || str.length
    for (var n = 0, i = 0; i < e; i += 1) if (str.charAt(i).match(c)) n += 1
    return n
}

jQuery(document).ready(function () {
    jQuery('.navbar-toggler').click(function () {
        jQuery('.navbar-collapse').slideToggle('slow');
    });
});

jQuery(document).ready(function() {
    jQuery('body .booking_form .form-group .controls select').focus(function() {
        jQuery(this).parent().addClass('focus');
    }).blur(function() {
        jQuery(this).parent().removeClass('focus');
    });
});

jQuery(document).ready(function() {
    jQuery(".video-container").click(changePlay);
});

function changePlay() {
    var video = jQuery("#product_video")[0];
    if (jQuery(".video-container").hasClass('active')) {
        jQuery(".video-container").removeClass('active');
        jQuery("#playbutton").animate({ opacity: 1 }, 100);
        video.pause();
    } else {
        jQuery(".video-container").addClass('active');
        jQuery("#playbutton").animate({ opacity: 0 }, 500);
        video.play();
    }
}

function openTab(el) {
    let $parent = jQuery(el).closest('.tab-block');
    let index = jQuery(el).data("index");
    $parent.find(".tab-pane").hide();
    $parent.find(".tab-"+index).show();
    $parent.find(".nav-item").removeClass("active");
    jQuery(el).addClass("active");
}
