<link rel='stylesheet' type='text/css' media='screen' href='vista\css\Contacto.css'>
<title>Contacto - Weblify</title>
<section class="contact">

    <div class="contact-container">

        <h2>Inicia tu proyecto</h2>
        <p class="contact-sub">
            Cuéntanos tu idea. Nosotros la convertimos en sistema.
        </p>

        <form id="contact-form">

            <input type="text" name="nombre" placeholder="Nombre" required>
            <input type="email" name="email" placeholder="Email" required>
            <input type="text" name="empresa" placeholder="Empresa">
            <textarea name="mensaje" placeholder="Cuéntanos tu proyecto..." required></textarea>

            <button type="submit" id="submit-btn" class="btn-primary">
                Iniciar proyecto
            </button>

        </form>

        <p id="form-status" class="form-status"></p>

    </div>

</section>

<script src='vista\js\Contacto.js'></script>