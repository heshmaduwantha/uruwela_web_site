$(document).ready(function () {
    $('.carousel_se_01_carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: [
            '<img src="./img/carousel-brn-next.svg" alt="Previous">',
            '<img src="./img/carousel-brn-prv.svg" alt="Next">'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })


});

$(document).ready(function () {
    $('.carousel_se_02_carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: [
            '<img src="./img/carousel_se_02_carousel-next-arrow.svg" alt="Previous">',
            '<img src="./img/carousel_se_02_carousel-prv-arrow.svg" alt="Next">'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })


});

$(document).ready(function () {
    $('.carousel_se_03_carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        navText: [
            '<img src="./img/carousel_se_02_carousel-next-arrow.svg" alt="Previous">',
            '<img src="./img/carousel_se_02_carousel-prv-arrow.svg" alt="Next">'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


});

