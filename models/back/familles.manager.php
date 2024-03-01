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
    public function compterAnimaux($idFamille)
    {
        $req = "SELECT COUNT(*) AS 'nb' FROM famille f INNER JOIN animal a ON a.famille_id = f.famille_id WHERE f.famille_id =:idFamille";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->bindValue("idFamille", $idFamille, PDO::PARAM_INT);
        $stmt->execute();
        $resultat = $stmt->fetch(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $resultat['nb'];
    }
}
