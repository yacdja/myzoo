<?php
class AdminController
{
    public function _construct()
    {
    }
    public function getPageLogin()
    {
        require_once "views/login.view.php";
    }
    public function connexion()
    {
        if (!empty($_POST['login']) && !empty($_POST['password'])) {
            $login = Securite::secureHTML($_POST['login']);
            $password = Securite::secureHTML($_POST['password']);
        }
    }
}
