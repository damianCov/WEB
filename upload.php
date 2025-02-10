<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = htmlspecialchars($_POST["nombre"]);
    $email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);

    if (!$email) {
        echo "Correo electrónico no válido.";
        exit;
    }

    $uploadDir = "uploads/";
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true); // Crear carpeta si no existe
    }

    if (isset($_FILES["comprobante"]) && $_FILES["comprobante"]["error"] === UPLOAD_ERR_OK) {
        $fileTmpPath = $_FILES["comprobante"]["tmp_name"];
        $fileName = basename($_FILES["comprobante"]["name"]);
        $fileSize = $_FILES["comprobante"]["size"];
        $fileType = $_FILES["comprobante"]["type"];
        $fileExt = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

        $allowedExtensions = ["jpg", "jpeg", "png", "pdf"];
        if (!in_array($fileExt, $allowedExtensions)) {
            echo "Error: Formato de archivo no permitido.";
            exit;
        }

        if ($fileSize > 10 * 1024 * 1024) {
            echo "Error: El archivo excede el límite de 10MB.";
            exit;
        }

        $newFileName = uniqid("pago_", true) . "." . $fileExt;
        $destPath = $uploadDir . $newFileName;

        if (move_uploaded_file($fileTmpPath, $destPath)) {
            // Ahora guardamos la info en Google Sheets
            $googleScriptURL = "https://script.google.com/macros/s/AKfycbylYM9pz2Fn_XCtuvThj5ZReL5eI_S4BR7ziw_CR4qDExXuDd-rnUGUS0pNQiEXbHsU/exec"; // Reemplaza con tu script
            $postData = [
                "nombre" => $nombre,
                "email" => $email,
                "archivo" => $newFileName
            ];

            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $googleScriptURL);
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $response = curl_exec($ch);
            curl_close($ch);

            echo "Reserva enviada correctamente. Archivo guardado.";
        } else {
            echo "Error al subir el archivo.";
        }
    } else {
        echo "Error: No se ha subido ningún archivo.";
    }
} else {
    echo "Acceso denegado.";
}
?>
