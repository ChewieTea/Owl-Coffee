<?php
$name = $_post['name']
$visitor_email = $_post['email']
$subject = $_post['subject']
$message = $_post['message']

$enauk_from = 'info@yourwebsite.com';

$email_subject = 'Form Submission';

$email_body = "User Name: $name.\n"
                "User email: $visitor_email.\n"
                "User Name: $subject.\n"
                "User Name: $message.\n"

$to = 'your.email@email.com';

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";


mail($to,$email_subject,$email_body,$headers);

header("Location: contact.html")
?>