<?php
// 1. Connexion à la base de données
$host = 'localhost';
$dbname = 'concession';
$user = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODEEXCEPTION);
    echo "Connexion réussie à la base de données.<br><br>";
} catch (PDOException $e) {
    echo "Erreur de connexion : " . $e->getMessage();
}
$sqlCouleur = "SELECT * FROM `couleur";
$stmtCouleur = $pdo->prepare($sqlCouleur);
$stmtCouleur->execute();

$resultsCouleur = $stmtCouleur->fetchAll(PDO::FETCH_ASSOC);

$sqlType = "SELECT * FROM type_vehicule`";
$stmtType = $pdo->prepare($sqlType);
$stmtType->execute();

$resultsType = $stmtType->fetchAll(PDO::FETCHASSOC);

?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="POST">

        <input type="text" name="colorName">
        <input type="submit" name="submitColor" value="Couleur pour la BDD">
        <br>
        <input type="text" name="typeName">
        <input type="submit" name="submitType" value="Type pour la BDD">

    </form>

    <form method="POST">
        <input type="text" name="immatriculation">
        <select name="selectAddCouleur">
            <?php
                foreach ($resultsCouleur as $key => $value) {
                   echo "<option value='" . $value['IdCouleur'] . "'>". $value['nomCouleur'] ." </option>";
                }
            ?>
        </select>
        <select name="selectAddType">
            <?php
                foreach ($resultsType as $key => $value) {
                   echo "<option value='" . $value['IdType'] . "'>". $value['nomType'] ." </option>";
                }
            ?>
        </select>
        <input type ="submit" name="submitVehicule" value="Ajouter un vehicule">
    </form>
</body>
</html>
<?php
    if(isset($_POST['submitVehicule'])){
        $color = $_POST['selectAddCouleur'];
        $immatriculation = $_POST['immatriculation'];
        $type = $POST['selectAddType'];
        echo $immatriculation;
        echo $color;
        echo $type;

        $sql = "INSERT INTO vehicule( `immatriculation, IdType, IdCouleur_) VALUES ('$immatriculation','$type','$color]')";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();

        echo "data Vehicule envoyées en bdd";
       
    }

    if(isset($_POST['submitColor'])){

        $color = $_POST['colorName'];
        $sql = "INSERT INTO couleur_( nomCouleur) VALUES ('$color')";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
    
    echo "data couleur envoyées en bdd";
    }

    if (isset($_POST['submitType'])){

        $type = $_POST['typeName'];
        $sql = "INSERT INTO type_vehicule( nomType`) VALUES ('$type')";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();

    echo "date type vehicule envoyées en bdd";
    }
?>
