<?php
$host = 'localhost';
$dbname = 'concessionnaire'; // Assure-toi que la base 'concessionnaire' existe dans MySQL
$user = 'root';
$password = '';

// Connexion à la base de données avec PDO
$pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
echo "Ok Ca marche ! : ";

// REQUETE SQL pour afficher les couleurs
$sql = "SELECT * FROM `couleur`";

// Exécution de la requête
$req = $pdo->prepare($sql);
$req->execute();
$results = $req->fetchAll();

// TRAITEMENT DU FORMULAIRE (INSERTION D'UNE NOUVELLE COULEUR)
if (isset($_POST['submitColor']) && !empty($_POST['Nom_Couleur'])) {
    $Nom_Couleur = $_POST['Nom_Couleur'];

    // REQUETE SQL pour insérer la nouvelle couleur
    $insertSql = "INSERT INTO `couleur` (`Nom_Couleur`) VALUES (:Nom_Couleur)";
    $stmt = $pdo->prepare($insertSql);
    $stmt->bindParam(':Nom_Couleur', $Nom_Couleur, PDO::PARAM_STR);

    // Exécution de l'insertion
    if ($stmt->execute()) {
        echo "La couleur a été ajoutée avec succès !";
    } else {
        echo "Erreur lors de l'ajout de la couleur.";
    }
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajout de couleur</title>
</head>
<body>
    <form method="post">
        <label>Ajouter une couleur dans la BDD</label>
        <input type="text" name="Nom_Couleur" value="" required>
        <input type="submit" name="submitColor" value="Envoyer Couleur dans la BDD">
    </form>

    <h2>Liste des couleurs existantes</h2>
    <ul>
        <?php
        // Affichage des couleurs existantes dans la base
        foreach ($results as $row) {
            echo "<li>" . htmlspecialchars($row['Nom_Couleur']) . "</li>";
        }
        ?>
    </ul>
</body>
</html>
