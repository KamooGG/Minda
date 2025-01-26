<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Obtén los datos del formulario
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $country = htmlspecialchars($_POST['country']);
    $category = htmlspecialchars($_POST['category']);
    $companyName = htmlspecialchars($_POST['companyName']);
    $companyWebsite = htmlspecialchars($_POST['companyWebsite']);
    $message = htmlspecialchars($_POST['message']);

    // Configuración del correo
    $to = "ccamiloblanco@gmail.com"; // correo de destino
    $subject = "Nuevo mensaje desde el formulario";
    $body = "
        <h3>Detalles del formulario:</h3>
        <p><b>Nombre:</b> $name</p>
        <p><b>Email:</b> $email</p>
        <p><b>País:</b> $country</p>
        <p><b>Categoría:</b> $category</p>
        <p><b>Nombre de la empresa:</b> $companyName</p>
        <p><b>Sitio web de la empresa:</b> $companyWebsite</p>
        <p><b>Mensaje:</b> $message</p>
    ";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: $email" . "\r\n";

    // Envía el correo
    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado con éxito.";
    } else {
        echo "Hubo un error al enviar el mensaje.";
    }
} else {
    echo "Método de solicitud no válido.";
}
?>
