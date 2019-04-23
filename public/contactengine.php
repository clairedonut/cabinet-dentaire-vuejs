<?php

$EmailFrom = "clairee.jacquet@gmail.com";
$EmailTo = "clairee.jacquet@gmail.com";

$Subject = "Formulaire de contact ";
$Name = Trim(stripslashes($_POST['Name']));
$Email = Trim(stripslashes($_POST['Email']));
$Message = Trim(stripslashes($_POST['Message']));

// validation
$validationOK=true;
if (!$validationOK) {
  // print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  echo "<script>alert('fail');</script>";
  print "<meta http-equiv=\"refresh\" content=\"0;URL=contact.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page
if ($success){
  echo "<script>alert('Votre message a été envoyé');</script>";
  print "<meta http-equiv=\"refresh\" content=\"0;URL=contact.html\">";


}
else{
  echo "<script>alert('fail');</script>";
  print "<meta http-equiv=\"refresh\" content=\"0;URL=contact.html\">";

}
?>
