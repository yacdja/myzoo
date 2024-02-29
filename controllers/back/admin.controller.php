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
}
