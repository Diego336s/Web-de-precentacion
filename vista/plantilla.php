<?php

include_once "vista/modulos/1cabesera.php";
include_once "vista\modulos\Nav.php";
if (isset($_GET["ruta"])) {

    $listaRutas = array("Incio", "Contacto");
    if (isset($_GET["ruta"]) && in_array($_GET["ruta"], $listaRutas)) {
        include_once "vista/modulos/" . $_GET["ruta"] . ".php";
    }else{

    }

} else {
    include_once "vista/modulos/Incio.php";
}

include_once "vista/modulos/zpie.php";
