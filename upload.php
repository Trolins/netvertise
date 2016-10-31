<?php
if (move_uploaded_file($_FILES["fil"]["tmp_name"], 'download/'.$_FILES["fil"]["name"])) {
  print "File uploaded";
} else {
  print "There some errors!";
}
?>

