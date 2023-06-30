(function ($) {
    "use strict";

    $(document).ready(function () {
        /*---------------------------------------------------
            Portfolio Filter
        ----------------------------------------------------*/
        var Container = $('#portfolio-area');
        Container.imagesLoaded(function () {
            var portfolio = $('.portfolio-menu');
            portfolio.on('click', 'button', function () {
                $(this).addClass('active').siblings().removeClass('active');
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            var $grid = $('.portfolio-grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-sizer'
                }
            });

        });

        /*---------------------------------------------------
            Testimonial Carousel
        ----------------------------------------------------*/
        $('.testimonial-carousel').owlCarousel({
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                991: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        });

        /*---------------------------------------------------
            Counter
        ----------------------------------------------------*/
        $('.counter-single h2 span').counterUp({
            delay: 10,
            time: 1000
        });

        /*---------------------------------------------------
                Magnific PopUp
        ----------------------------------------------------*/
        $('.popup-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            disableOn: 300
        });

        /*---------------------------------------------------
            Smooth Scroll
        ----------------------------------------------------*/
        $('a[href*="#"]:not([href="#"]):not([data-toggle])').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });

        /*---------------------------------------------------
            Accordian
        ----------------------------------------------------*/
        $('.collapse').on('shown.bs.collapse', function () {
            $(this).prev().addClass('active');
        });

        $('.collapse').on('hidden.bs.collapse', function () {
            $(this).prev().removeClass('active');
        });

    });


    $(window).on('scroll', function () {
        /*---------------------------------------------------
            Sticky Header
        ----------------------------------------------------*/
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $("#header").removeClass("sticky");
        } else {
            $("#header").addClass("sticky");
        }

        /*---------------------------------------------------
            Scroll Menu Active
        ----------------------------------------------------*/
        var sections = $('section'),
            nav = $('nav'),
            nav_height = nav.outerHeight();

        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    /*---------------------------------------------------
        Site Preloader
    ----------------------------------------------------*/
    $(window).on('load', function () {
        $('.preloader').fadeOut(500);
    });


}(jQuery));
