const filterBtns = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project");
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {

        document.querySelector(".filter-btn.active").classList.remove("active");
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        projects.forEach(project => {

            const category = project.dataset.category;

            if(filter === "all" || filter === category){
                
                project.style.display = "block";

                setTimeout(() => {
                    project.classList.remove("hide");
                }, 10);

            } else {

                project.classList.add("hide");

                setTimeout(() => {
                    project.style.display = "none";
                }, 300); // espera animación

            }

        });

    });
});