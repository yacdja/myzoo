<?php ob_start(); ?>


<?php
$content = ob_get_clean();
$titre = "Page administration";
require "views/commons/template.php";
