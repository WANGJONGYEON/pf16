$(function () {
    const mvs = new Swiper('.main_visual_slide', {
        loop: true,
        navigation: {
            nextEl: ".main_visual .arrows .next",
            prevEl: ".main_visual .arrows .prev",
        },
    })
})

$(function () {
    const mbs = new Swiper('.main_box_slide', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,

        breakpoints: {

            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },

        },
        navigation: {
            nextEl: ".main_box .arrows_01 .next01",
            prevEl: ".main_box .arrows_01 .prev01",
        },
    })
})

$(function () {
    const mts = new Swiper('.main_trap_slide', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,

        breakpoints: {

            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },

        },
        navigation: {
            nextEl: ".main_trap .arrows .next",
            prevEl: ".main_trap .arrows .prev",
        },
    })
})

$(function () {
    $('.header .mbtn').on('click', function () {
        $(this).toggleClass('on');
        $('.header .gnb').toggleClass('on');
    });

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul ul').stop().slideUp();
            $(this).next().stop().slideDown()

        }
    })

    $(window).on('resize', function () {
        $('.header .mbtn').removeClass('on')
        $('.header .gnb').removeClass('on')
        $('.header .gnb>ul ul').removeAttr('style')
    });


    $('.header .gnb').on('wheel touchmove', function (e) {
        e.preventDefault();
    })
})