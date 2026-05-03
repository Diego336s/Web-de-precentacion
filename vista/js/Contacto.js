const form = document.getElementById("contact-form");
const btn = document.getElementById("submit-btn");
const status = document.getElementById("form-status");

if(form){

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // obtener datos
        const formData = new FormData(form);

        const data = {
            nombre: formData.get("nombre"),
            email: formData.get("email"),
            empresa: formData.get("empresa"),
            mensaje: formData.get("mensaje")
        };

        // validación básica
        if(!data.nombre || !data.email || !data.mensaje){
            status.textContent = "Completa los campos obligatorios";
            status.className = "form-status error";
            return;
        }

        try {
            btn.disabled = true;
            btn.textContent = "Enviando...";

            const res = await fetch("/backend/api/contacto.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await res.json();

            if(res.ok){
                status.textContent = "Mensaje enviado correctamente";
                status.className = "form-status success";
                form.reset();
            } else {
                throw new Error(result.message || "Error");
            }

        } catch (error) {
            status.textContent = "Ocurrió un error, intenta de nuevo";
            status.className = "form-status error";
        }

        btn.disabled = false;
        btn.textContent = "Iniciar proyecto";
    });
}