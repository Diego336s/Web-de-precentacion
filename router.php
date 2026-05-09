<?php

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
$file = __DIR__ . $path;

if ($path !== "/" && is_file($file)) {
    return false;
}

$route = trim($path, "/");

if ($route !== "" && preg_match("/^[-a-zA-Z0-9]+$/", $route)) {
    $_GET["ruta"] = $route;
}

require __DIR__ . "/index.php";
