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



document.addEventListener('DOMContentLoaded', function() {
    fetch('./common/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
});

document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    console.log('Current Path:', path);
    const navLinks = {
        '/our-story.html': 'our-story',
        '/our-team.html': 'our-team',
        '/process.html': 'process',
        '/products.html': 'products',
        '/gallery.html': 'gallery'
    };

    fetch('./common/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;

            Object.keys(navLinks).forEach(key => {
                const element = document.getElementById(navLinks[key]);
                if (element) {
                    if (path.includes(key)) {
                        element.classList.add('nav-active');
                    } else {
                        element.classList.remove('nav-active');
                    }
                }
            });
        })
        .catch(error => console.error('Error loading navbar:', error));
});

window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset >= 10) {
      console.log('Navbar is sticky');
      navbar.classList.add("sticky");
    } else {
      console.log('Navbar is stickm m y');
      navbar.classList.remove("sticky");
    }
})