<?php
require_once "models/Model.php";

class FamillesManager extends Model
{
    public function getFamilles()
    {
        $req = "SELECT * FROM famille";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->execute();
        $familles = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $familles;
    }
    public function deleteDBfamille($idFamille)
    {
        $req = "DELETE FROM famille WHERE famille_id = :idFamille";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->bindValue("idFamille", $idFamille, PDO::PARAM_INT);
        $stmt->execute();
        $stmt->closeCursor();
    }
}
