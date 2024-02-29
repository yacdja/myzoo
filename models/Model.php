<?php
abstract class Model
{
    private static $pdo;

    private static function setBdd()
    {
        self::$pdo = new Pdo("mysql:host=localhost;dbname=dbanimaux;charset=utf8", "root", "");
        self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    }

    protected function getBdd()
    {
        if (self::$pdo === null) {
            self::setBdd();
        }
        return self::$pdo;
    }

    public static function sendJSON($info)
    {
        header("Access-Control-Allow-Origin: *");
        header("content-type: application/json");
        echo json_encode($info);
    }
}
