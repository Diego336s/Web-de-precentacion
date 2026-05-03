
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

const iniciarProyecto = document.getElementById("iniciarProyecto");
iniciarProyecto.addEventListener("click", () => {
    window.location.href = "Contacto";
});