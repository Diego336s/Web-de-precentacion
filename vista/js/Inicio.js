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

const btnTrabajemosJuntos = document.getElementById("btnTrabajemosJuntos");
btnTrabajemosJuntos.addEventListener("click", () => {
    window.location.href = "Contacto";
});