const steps = document.querySelectorAll(".reveal");
const progress = document.getElementById("process-progress");

// REVEAL
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.3 });

steps.forEach(step => observer.observe(step));


// PROGRESO (línea)
window.addEventListener("scroll", () => {
    const section = document.querySelector(".process-panel");
    const rect = section.getBoundingClientRect();

    const windowHeight = window.innerHeight;

    if(rect.top < windowHeight && rect.bottom > 0){

        const total = rect.height + windowHeight;
        const visible = windowHeight - rect.top;

        let progressValue = (visible / total) * 100;
        progressValue = Math.max(0, Math.min(100, progressValue));

        progress.style.width = progressValue + "%";
    }
});