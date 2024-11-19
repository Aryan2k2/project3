/*WHY US*/
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const openContent = document.querySelector('.accordion-content.show');
        const currentContent = header.nextElementSibling;
        const isOpen = currentContent.classList.contains('show');

        if (openContent && openContent !== currentContent) {
            openContent.classList.remove('show');
            openContent.previousElementSibling.querySelector('.toggle-icon').textContent = '+';
        }

        if (isOpen) {
            currentContent.classList.remove('show');
            header.querySelector('.toggle-icon').textContent = '+';
        } else {
            currentContent.classList.add('show');
            header.querySelector('.toggle-icon').textContent = '-';
        }
    });
});






/* INDEX ANIMINATION*/document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.header-section');
    const totalSlides = slides.length / 2; // Adjust based on duplication
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let currentIndex = 0;

    function addAnimations(slide) {
        slide.querySelector('h1').classList.add('zoom-in');
        slide.querySelector('p').classList.add('zoom-in');
        slide.querySelector('.btn').classList.add('slide-in-up');
    }

    function removeAnimations(slide) {
        slide.querySelector('h1').classList.remove('zoom-in');
        slide.querySelector('p').classList.remove('zoom-in');
        slide.querySelector('.btn').classList.remove('slide-in-up');
    }

    function showSlide(index) {
        if (index >= totalSlides) {
            slider.style.transition = 'none'; // Remove transition for instant jump
            slider.style.transform = `translateX(0%)`; // Jump to the start
            currentIndex = 0;
            setTimeout(() => {
                slider.style.transition = 'transform 0.5s ease'; // Restore transition
                showSlide(currentIndex + 1); // Continue sliding
            }, 50); // Small delay to ensure the transition reactivates
            return;
        } else if (index < 0) {
            slider.style.transition = 'none'; // Remove transition for instant jump
            slider.style.transform = `translateX(-${(totalSlides - 1) * 100}%)`; // Jump to the end
            currentIndex = totalSlides - 1;
            setTimeout(() => {
                slider.style.transition = 'transform 0.5s ease'; // Restore transition
                showSlide(currentIndex - 1); // Continue sliding
            }, 50); // Small delay to ensure the transition reactivates
            return;
        }

        slides.forEach((slide, i) => {
            if (i === index) {
                addAnimations(slide);
            } else {
                removeAnimations(slide);
            }
        });

        const offset = -index * 100;
        slider.style.transform = `translateX(${offset}%)`;
        currentIndex = index;
    }

    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000); // Change the interval as needed (in milliseconds)

    // Initial setup to display the first slide
    showSlide(currentIndex);
});


/*     SERVICE ANIMINATION  */

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.service-section h1').classList.add('slow-fade-in-up');
    document.querySelector('.service-section .app-card').classList.add('slow-fade-in-up');
    document.querySelector('.service-section .infra-card').classList.add('slow-fade-in-up');
    document.querySelector('.service-section .hard-card').classList.add('slow-fade-in-up');
    document.querySelector('.service-section .atm-card').classList.add('slow-fade-in-up');
    document.querySelector('.service-section .erp-card').classList.add('slow-fade-in-up');

    document.querySelector('.navbar-brand img').classList.add('fade-in');
});


/*   PORTFOLIO  ENLARGE */




// JavaScript to handle filtering of portfolio items
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            filterItems(filter);

            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');
        });
    });

    function filterItems(filter) {
        portfolioItems.forEach(item => {
            const category = item.getAttribute('data-category');
            if (filter === 'all' || filter === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Initially display all items
    filterItems('all');
});

/*JavaScript to handle image enlargement
function enlargeImage(element) {
    const imageSrc = element.closest('.portfolio-item').querySelector('img').src;
    const enlargedImageContainer = document.getElementById('enlargedImageContainer');
    const enlargedImage = document.getElementById('enlargedImage');

    enlargedImage.src = imageSrc;
    enlargedImageContainer.style.display = 'block';
}

function closeEnlargedImage() {
    const enlargedImageContainer = document.getElementById('enlargedImageContainer');
    enlargedImageContainer.style.display = 'none';
}*/

function enlargeImage(button) {
    const portfolioItem = button.closest('.portfolio-item');
    const imageSrc = portfolioItem.querySelector('img').src;
    const enlargedImageContainer = document.getElementById('enlargedImageContainer');
    const enlargedImage = document.getElementById('enlargedImage');

    enlargedImage.src = imageSrc;
    enlargedImageContainer.style.display = 'flex';
}

function closeEnlargedImage() {
    const enlargedImageContainer = document.getElementById('enlargedImageContainer');
    enlargedImageContainer.style.display = 'none';
}
// portfolio ANIMINATION
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.portfolio h2').classList.add('slow-fade-in-up');
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.classList.add('slow-fade-in-up');
    });
    document.querySelectorAll('.portfolio .portfolio-item').forEach(item => {
        item.classList.add('slow-fade-in-down');
    });

    document.querySelector('.navbar-brand img').classList.add('fade-in');
});

/* ABOUT US */
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('#about h2').classList.add('slow-fade-in-up');
    // document.querySelector('#about p').classList.add('fade-in');
    // document.querySelectorAll('.filter-btn').forEach(button => {
    //    button.classList.add('fade-in');
    // });
    document.querySelector('#about .mission-card').classList.add('slow-fade-in-left');
    document.querySelector('#about .vision-card').classList.add('slow-fade-in-up');
    document.querySelector('#about .commitment-card').classList.add('slow-fade-in-right');
    /*
        const imagesToAnimate = document.querySelectorAll('#goal');
    
        function checkScroll() {
            imagesToAnimate.forEach(img => {
                const imgTop = img.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
    
                if (imgTop < windowHeight) {
                    img.classList.add('fade-in-up');
                }
            });
        }
    
        checkScroll(); // Check on initial load
    
        window.addEventListener('scroll', checkScroll);*/

    document.querySelector('.navbar-brand img').classList.add('fade-in');
});


/* CONTACT ANIMINATION */
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.contact-section h2').classList.add('slow-fade-in-up');
    document.querySelector('.contact-section p').classList.add('slow-fade-in-up');
    document.querySelectorAll('.contact-section .btn').forEach(button => {
        button.classList.add('slow-fade-in-up');
    });
    document.querySelectorAll('.contact-section .form-group').forEach(item => {
        item.classList.add('slow-fade-in-up');
    });
    document.querySelectorAll('.contact-section .contact-card').forEach(item => {
        item.classList.add('slow-fade-in-up');
    });

    document.querySelector('.navbar-brand img').classList.add('fade-in');
});


/* CLIENT ANIMINATION */
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.clients-section h2').classList.add('slow-fade-in-up');
    document.querySelector('.clients-section p').classList.add('slow-fade-in-up');
    document.querySelector('.clients-section blockquote').classList.add('slow-fade-in-up');
    document.querySelector('.clients-section .clients-carousel').classList.add('slow-fade-in-up');
    document.querySelector('.clients-section .client-carousel').classList.add('slow-fade-in-up');

    document.querySelector('.clients-section .type').classList.add('slow-fade-in-up');


    document.querySelector('.navbar-brand img').classList.add('fade-in');
});


/* CLIENTS  */

$(document).ready(function () {
    $('.clients-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: true, // Enable dots navigation
        autoplay: true, // Enable autoplay
        autoplayTimeout: 2000, // Set autoplay interval (in milliseconds)
        autoplayHoverPause: true, // Pause autoplay on hover
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});
$(document).ready(function () {
    $('.client-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: true, // Enable dots navigation
        autoplay: true, // Enable autoplay
        autoplayTimeout: 2000, // Set autoplay interval (in milliseconds)
        autoplayHoverPause: true, // Pause autoplay on hover
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
});


/* atms*/

$(document).ready(function () {
    $('.atms-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: true, // Enable dots navigation
        autoplay: true, // Enable autoplay
        autoplayTimeout: 2000, // Set autoplay interval (in milliseconds)
        autoplayHoverPause: true, // Pause autoplay on hover
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
});


$(document).ready(function () {
    $('.erp-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: true, // Enable dots navigation
        autoplay: true, // Enable autoplay
        autoplayTimeout: 2000, // Set autoplay interval (in milliseconds)
        autoplayHoverPause: true, // Pause autoplay on hover
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
    });
});


/* PARTNER ANIMIANTION*/
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.partners-section h2').classList.add('slow-fade-in-up');
    document.querySelectorAll('.partners-section .row').forEach(item => {
        item.classList.add('slow-fade-in-up');
    });

    document.querySelector('.navbar-brand img').classList.add('fade-in');
});

/*APPLICATION ANIMINATION 

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('#application-service h2').classList.add('fade-in-up');
    document.querySelector('#application-service #services img').classList.add('slide-in-up');
    document.querySelector('#application-service #sql-server-consultancy img').classList.add('slide-in-up');
    document.querySelector('#application-service #web-site-web-portals img').classList.add('slide-in-up');
   // document.querySelectorAll('.filter-btn').forEach(button => {
    //    button.classList.add('fade-in-up');
   // });
   // document.querySelectorAll('.portfolio .portfolio-item').forEach(item => {
   //     item.classList.add('fade-in-down');
  //  });

    document.querySelector('.navbar-brand img').classList.add('fade-in');
});*/

/* animination for scrolling down*//*
document.addEventListener("DOMContentLoaded", function () {
    const imagesToAnimate = document.querySelectorAll('#application-service #services img, #application-service #sql-server-consultancy img, #application-service #web-site-web-portals img, #technology,#service-offered, #cloud-based,#application-service #mobile-service,#goal,#about,#why-us,#service-section,#contact-section #contact-card');

    function checkScroll() {
        imagesToAnimate.forEach(img => {
            const imgTop = img.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (imgTop < windowHeight) {
                img.classList.add('slow-fade-in-up');
            }
        });
    }

    checkScroll(); // Check on initial load

    window.addEventListener('scroll', checkScroll);
});
*/

document.addEventListener("DOMContentLoaded", function () {
    const sectionsToAnimate = document.querySelectorAll('#application-service, #sql-server-consultancy, #web-site-web-portals, #technology, #service-offered, #cloud-based, #mobile-service, #goal, #about, #why-us, #service-section, #contact-section');

    function checkScroll() {
        sectionsToAnimate.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Adjust the threshold as needed. Here, 100px before entering viewport.
            if (sectionTop < windowHeight - 100) {
                section.classList.add('slow-fade-in-up');
            }
        });
    }

    checkScroll(); // Check on initial load

    window.addEventListener('scroll', checkScroll);
});


/* hardware animination*/
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.jumbotron h1').classList.add('fade-in-up');
    document.querySelector('.jumbotron p').classList.add('fade-in');
    document.querySelectorAll('.partners-section .row').forEach(item => {
        item.classList.add('fade-in-up');
    });

    document.querySelector('.navbar-brand img').classList.add('fade-in');
});






document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.jumbotron h1').classList.add('fade-in-up');
    document.querySelector('.jumborton p').classList.add('fade-in');
    document.querySelectorAll('.partners-section .row').forEach(item => {
        item.classList
    })
});
