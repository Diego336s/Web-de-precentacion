document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-slide");
    let current = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
        });

        slides[index].classList.add("active");
    }

    function nextSlide() {
        current++;
        if (current >= slides.length) {
            current = 0;
        }
        showSlide(current);
    }

    // Mostrar el primero
    showSlide(current);

    // Cambio automático cada 4 segundos
    setInterval(nextSlide, 4000);
});

const toggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

// abrir / cerrar
toggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

// cerrar al hacer click en links
document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});