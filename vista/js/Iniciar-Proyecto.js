const form = document.getElementById("contact-form");
const btn = document.getElementById("submit-btn");
const status = document.getElementById("form-status");
btn.addEventListener("click", ()=>{

Swal.fire({
  title: "Disculpa 😅",
  text: "Esta opcion esta en desarrollo por el momento puedes ir al panel de contacto.",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Ir a contacto!"
}).then((result) => {
  if (result.isConfirmed) Swal.fire({
    title: "Contacto",
    text: "Redirigiendo...",
    icon: "success"
  });
  setTimeout(() => {
      window.location.href = "/Contacto";
    }, 1000);
});
});
// if(form){

//     form.addEventListener("submit", async (e) => {
//         e.preventDefault();

//         // obtener datos
//         const formData = new FormData(form);

//         const data = {
//             nombre: formData.get("nombre"),
//             email: formData.get("email"),
//             empresa: formData.get("empresa"),
//             mensaje: formData.get("mensaje")
//         };

//         // validación básica
//         if(!data.nombre || !data.email || !data.mensaje){
//             status.textContent = "Completa los campos obligatorios";
//             status.className = "form-status error";
//             return;
//         }

//         try {
//             btn.disabled = true;
//             btn.textContent = "Enviando...";

//             const res = await fetch("/backend/api/contacto.php", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(data)
//             });

//             const result = await res.json();

//             if(res.ok){
//                 status.textContent = "Mensaje enviado correctamente";
//                 status.className = "form-status success";
//                 form.reset();
//             } else {
//                 throw new Error(result.message || "Error");
//             }

//         } catch (error) {
//             status.textContent = "Ocurrió un error, intenta de nuevo";
//             status.className = "form-status error";
//         }

//         btn.disabled = false;
//         btn.textContent = "Iniciar proyecto";
//     });
// }
