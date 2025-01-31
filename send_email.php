<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Filtrar y validar entradas
    $nombre = htmlspecialchars(strip_tags(trim($_POST["nombre"])));
    $apellido = htmlspecialchars(strip_tags(trim($_POST["apellido"])));
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $whatsapp = htmlspecialchars(strip_tags(trim($_POST["whatsapp"])));
    $servicio = htmlspecialchars(strip_tags(trim($_POST["servicio"])));
    $detalles = htmlspecialchars(strip_tags(trim($_POST["detalles"])));
    $fecha = htmlspecialchars(strip_tags(trim($_POST["fecha"])));
    $zona_evento = htmlspecialchars(strip_tags(trim($_POST["zona-evento"])));
    $mensaje = htmlspecialchars(strip_tags(trim($_POST["mensaje"])));
    $anti_robot = htmlspecialchars(strip_tags(trim($_POST["anti-robot"])));
    $respuesta_correcta = htmlspecialchars(strip_tags(trim($_POST["correct-answer"])));

    // Verificar si todos los campos requeridos están completos
    if (empty($nombre) || empty($apellido) || empty($email) || empty($whatsapp) || empty($servicio) || 
        empty($detalles) || empty($fecha) || empty($zona_evento) || empty($mensaje) || empty($anti_robot)) {
        echo "Error: Todos los campos son obligatorios.";
        exit();
    }

    // Validar formato de email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Error: Correo electrónico inválido.";
        exit();
    }

    // Validar la pregunta anti-robot
    if ($anti_robot !== $respuesta_correcta) {
        echo "Error: Respuesta incorrecta en la pregunta anti-robot.";
        exit();
    }

    // Construir el correo
    $to = "info@universobellotas.com.ar";  // Dirección de correo destino
    $subject = "Consulta desde el formulario de contacto";
    
    $body = "Nombre: $nombre $apellido\n";
    $body .= "Email: $email\n";
    $body .= "WhatsApp: $whatsapp\n";
    $body .= "Servicio a consultar: $servicio\n";
    $body .= "Detalles: $detalles\n";
    $body .= "Fecha y hora estimada: $fecha\n";
    $body .= "Zona del Evento: $zona_evento\n";
    $body .= "Mensaje:\n$mensaje\n";

    // Encabezados de seguridad para evitar problemas con filtros de SPAM
    $headers = "From: info@universobellotas.com.ar\r\n";
    $headers .= "Reply-To: " . filter_var($email, FILTER_SANITIZE_EMAIL) . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        header("Location: confirmacion.html"); // Redirige a la página de confirmación
        exit();
    } else {
        echo "Error al enviar el correo.";
    }
} else {
    echo "Acceso no permitido.";
}
?>
