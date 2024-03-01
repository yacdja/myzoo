<?php
require_once "./controllers/back/Securite.class.php";
require_once "./models/back/familles.manager.php";

class FamillesController
{
    private $famillesManager;

    public function __construct()
    {
        $this->famillesManager = new FamillesManager();
    }
    public function visualisation()
    {
        if (Securite::verifAccessSession()) {
            $familles = $this->famillesManager->getFamilles();
            require_once "views/famillesVisualisation.view.php";
        } else {
            throw new Exception("vous n'avez pas le droit d'etre la !!!");
        }
    }

    public function suppression()
    {
        if (Securite::verifAccessSession()) {
            $idFamille = (int)Securite::secureHTML($_POST['famille_id']);
            if ($this->famillesManager->compterAnimaux($idFamille) > 0) {
                $_SESSION['alert'] = [
                    "message" => "La famille n'a pas été supprimée",
                    "type" => "alert-danger"
                ];
            } else {

                $this->famillesManager->deleteDBfamille($idFamille);
                $_SESSION['alert'] = [
                    "message" => "La famille est supprimée",
                    "type" => "alert-success"
                ];
            }
            header('Location:' . URL . 'back/familles/visualisation');
        } else {
            throw new Exception("vous n'avez pas le droit d'etre la !!!");
        }
    }
}
