const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('open');
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index, direction) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'next', 'prev');

        if (i === index) {
            slide.classList.add('active');
        } else if (i === (index - 1 + slides.length) % slides.length) {
            slide.classList.add(direction === 'left' ? 'prev' : 'next');
        } else if (i === (index + 1) % slides.length) {
            slide.classList.add(direction === 'right' ? 'next' : 'prev');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide, 'right');
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide, 'left');
}

showSlide(currentSlide, 'right');

document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger");
    const nav = document.getElementById("nav");
    const servicesBtn = document.getElementById("services-btn");
    const servicesMenu = document.getElementById("services-menu");

    // Ouvrir/fermer le menu burger
    burger.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    // Ouvrir/fermer le sous-menu Services
    servicesBtn.addEventListener("click", function (event) {
        event.preventDefault();
        servicesMenu.classList.toggle("active");
    });

    // Fermer le menu si on clique ailleurs
    document.addEventListener("click", function (event) {
        if (!nav.contains(event.target) && !burger.contains(event.target)) {
            nav.classList.remove("active");
            servicesMenu.classList.remove("active");
        }
    });
});
