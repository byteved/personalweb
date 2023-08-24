<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "vednakum1@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $headers = "From: $email\r\n";
    
    $mailContent = "Name: $name\n";
    $mailContent .= "Email: $email\n\n";
    $mailContent .= "Message:\n$message";
    
    mail($to, $subject, $mailContent, $headers);
    
    // Redirect the user after successful submission
    header("Location: thank_you.html"); // Replace with your thank you page
    exit;
}
?>
