const toggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

// abrir / cerrar
toggle.addEventListener("click", () => {

    toggle.classList.toggle("active");
    mobileMenu.classList.toggle("active");

    document.body.classList.toggle("menu-open");

});

// cerrar al hacer click en links
document.querySelectorAll(".mobile-links a").forEach(link => {

    link.addEventListener("click", () => {

        toggle.classList.remove("active");
        mobileMenu.classList.remove("active");

        document.body.classList.remove("menu-open");

    });

});

// BOTÓN
const iniciarProyectoBtns = document.querySelectorAll(".btn-iniciarProyecto");

iniciarProyectoBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        window.location.href = "Iniciar-Proyecto";

    });

});