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

//pagination
document.addEventListener("DOMContentLoaded", function () {
    const itemsPerPage = 6;
    const productItems = document.querySelectorAll(".product-item");
    const totalPages = Math.ceil(productItems.length / itemsPerPage);

    function showPage(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        productItems.forEach((item, index) => {
            item.style.display = (index >= start && index < end) ? "block" : "none";
        });
    }

    function setPageLinks() {
        for (let i = 1; i <= totalPages; i++) {
            const pageLink = document.getElementById(`page-${i}`);
            if (pageLink) {
                pageLink.addEventListener("click", function (event) {
                    event.preventDefault();
                    showPage(i);
                });
            }
        }

        document.getElementById("prev-page").addEventListener("click", function (event) {
            event.preventDefault();
            const currentPage = parseInt(document.querySelector(".pagination .active .page-link").textContent);
            if (currentPage > 1) showPage(currentPage - 1);
        });

        document.getElementById("next-page").addEventListener("click", function (event) {
            event.preventDefault();
            const currentPage = parseInt(document.querySelector(".pagination .active .page-link").textContent);
            if (currentPage < totalPages) showPage(currentPage + 1);
        });
    }

    showPage(1); // Show the first page initially
    setPageLinks(); // Set up the page links
});


//pagination
document.addEventListener("DOMContentLoaded", function () {
    const itemsPerPage = 4;
    const productItems = document.querySelectorAll(".gallery-item");
    const totalPages = Math.ceil(productItems.length / itemsPerPage);

    function showPage(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        productItems.forEach((item, index) => {
            item.style.display = (index >= start && index < end) ? "block" : "none";
        });
    }

    function setPageLinks() {
        for (let i = 1; i <= totalPages; i++) {
            const pageLink = document.getElementById(`page-${i}`);
            if (pageLink) {
                pageLink.addEventListener("click", function (event) {
                    event.preventDefault();
                    showPage(i);
                });
            }
        }

        document.getElementById("prev-page").addEventListener("click", function (event) {
            event.preventDefault();
            const currentPage = parseInt(document.querySelector(".pagination .active .page-link").textContent);
            if (currentPage > 1) showPage(currentPage - 1);
        });

        document.getElementById("next-page").addEventListener("click", function (event) {
            event.preventDefault();
            const currentPage = parseInt(document.querySelector(".pagination .active .page-link").textContent);
            if (currentPage < totalPages) showPage(currentPage + 1);
        });
    }

    showPage(1); // Show the first page initially
    setPageLinks(); // Set up the page links
});


$(document).ready(function() {
    var images = [
        './img/gallery-img1.png',
        './img/gallery-img-2.png',
        './img/gallery-img3.png',
        './img/gallery-img4.png',
        './img/gallery-img5.png',
        './img/gallery-img6.png',
        './img/gallery-img7.png',
        './img/gallery-img8.png'
    ];

    $('.gallery-item img').on('click', function() {
        var currentIndex = $(this).parent().index();
        var carouselInner = $('#carousel-inner');
        carouselInner.empty();

        images.forEach((image, index) => {
            var activeClass = index === currentIndex ? 'active' : '';
            carouselInner.append(`
                <div class="carousel-item ${activeClass}">
                    <img src="${image}" class="d-block w-100">
                </div>
            `);
        });

        $('#galleryModal').modal('show');
    });
});

function initMap() {
    console.log('ffff');
    
    var location = {lat: 6.9802378, lng: 80.2209766};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: location
    });
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });
  }

  
