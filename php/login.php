
<?php

// Iniciar la sesión si no está iniciada
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

// Verificar si el usuario ha cerrado sesión
if (isset($_GET["logout"])) {
     // Limpiar todas las variables de sesión
     $_SESSION = array();
    // Destruir todas las variables de sesión
    session_destroy();
     // Limpiar la caché del navegador
     header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
     header("Pragma: no-cache"); // HTTP 1.0.
     header("Expires: 0"); // Proxies.
    // Redirigir a la página de inicio de sesión después de cerrar sesión
    header("Location: ../login.html");
    exit(); // Finalizar el script después de la redirección
}

// Verificar si el formulario ha sido enviado y la contraseña es correcta
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener la contraseña ingresada por el usuario
    $password = $_POST["password"];

    // Verificar la contraseña (aquí puedes cambiar "password123" por la contraseña correcta que desees)
    if ($password === "CHEQUESDOS") {
        // Inicio de sesión exitoso, establecer una variable de sesión para indicar que el usuario ha iniciado sesión
        $_SESSION["loggedin"] = true;
        // Devolver una respuesta JSON indicando el éxito del inicio de sesión
        echo json_encode(array("success" => true));
        exit(); // Finalizar el script después de enviar la respuesta JSON
    } else {
        // Contraseña incorrecta, devolver una respuesta JSON indicando el fallo del inicio de sesión
        echo json_encode(array("success" => false, "message" => "Error de inicio de sesión. Por favor, verifica tu contraseña."));
        exit(); // Finalizar el script después de enviar la respuesta JSON
    }
}

// Si el usuario ha iniciado sesión, establecer una variable de JavaScript para indicar que ha iniciado sesión
if (isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true) {
    echo '<script>var isLoggedIn = true;</script>';
} else {
    echo '<script>var isLoggedIn = false;</script>';
}

?>