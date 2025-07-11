<?php
session_start();

// Vérification si l'utilisateur est connecté
if (!isset($_SESSION['user'])) {
    header("Location: connexion.php");
    exit();
}

$host = 'localhost';
$dbname = 'bdddemo';
$user = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion à la base de données : " . $e->getMessage());
}

// Récupérer les informations de l'utilisateur connecté
$user = $_SESSION['user'];

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Si le formulaire est soumis, mettre à jour les informations
    $new_nom = $_POST['nom'];
    $new_prenom = $_POST['prenom'];
    $new_email = $_POST['email'];

    // Requête SQL pour mettre à jour les informations de l'utilisateur
    $sql = "UPDATE user SET nom_user = :nom, prenom_user = :prenom, adresse_mail_user = :email WHERE id_user = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':nom', $new_nom);
    $stmt->bindParam(':prenom', $new_prenom);
    $stmt->bindParam(':email', $new_email);
    $stmt->bindParam(':id', $user['id_user']);

    if ($stmt->execute()) {
        // Mise à jour des informations dans la session
        $_SESSION['user']['nom_user'] = $new_nom;
        $_SESSION['user']['prenom_user'] = $new_prenom;
        $_SESSION['user']['adresse_mail_user'] = $new_email;
        echo "<p style='color: green;'>Informations mises à jour avec succès!</p>";
    } else {
        echo "<p style='color: red;'>Erreur lors de la mise à jour des informations.</p>";
    }
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panneau de Configuration</title>
</head>
<body>
    <h1><u>Panneau de Configuration</u></h1>

    <form method="POST">
        <label>Nom</label>
        <input type="text" name="nom" value="<?php echo $user['nom_user']; ?>" required>

        <label>Prénom</label>
        <input type="text" name="prenom" value="<?php echo $user['prenom_user']; ?>" required>

        <label>Email</label>
        <input type="email" name="email" value="<?php echo $user['adresse_mail_user']; ?>" required>

        <input type="submit" value="Mettre à jour">
    </form>

    <form method="POST">
        <input type="submit" name="Deconnexion" value="Se Déconnecter">
    </form>
</body>
</html>
