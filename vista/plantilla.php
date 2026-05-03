<?php

include_once "vista/modulos/1cabesera.php";
include_once "vista/modulos/Nav.php";
if (isset($_GET["ruta"])) {

    $listaRutas = array("Inicio", "Contacto", "Trabajos");
    if (isset($_GET["ruta"]) && in_array($_GET["ruta"], $listaRutas)) {
        include_once "vista/modulos/" . $_GET["ruta"] . ".php";
    }else{

    }

} else {
    include_once "vista/modulos/Inicio.php";
}

include_once "vista/modulos/zpie.php";
