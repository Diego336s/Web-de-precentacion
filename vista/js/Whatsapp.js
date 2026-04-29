const whatsapp = document.querySelector(".whatsapp-container");

let lastScroll = 0;

// APARECER DESPUÉS DE 3 SEGUNDOS
setTimeout(() => {
    whatsapp.classList.remove("hidden");
}, 3000);

// CONTROL SCROLL
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        // bajando → oculta
        whatsapp.classList.add("hidden");
    } else {
        // subiendo → muestra
        whatsapp.classList.remove("hidden");
    }

    lastScroll = currentScroll;
});