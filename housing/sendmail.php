<?php
if ($_SERVER["REQUEST_METHOD"] === "POST"){
    $to = "alabielisha68@gmail.com";  // change this if needed
    $subject = "Message from Iconic Housing Website";

    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        header("Location: thank.html");
        exit();
    } else {
        echo "Message sending failed.";
    }
} else {
    echo "Invalid Request.";
}
?>
