
<?php

// session_start();

$host = 'localhost';
$dbname = 'bdddemo';
$user = 'root';
$password = '';

    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Ok Ca marche ! : ";
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Système Connection</title>
</head>
<body>
    <h1><u>Connection-Système</u></h1>
    
    <?php

    if(isset($_SESSION['user'])){
        echo '    <form method="POST"> 
        <label for="">Identifiant</label>
        <input type="text" name="identifiant">
        <label>Password</label>
        <input type="password" name="password">
        <input type="submit" name="submitConnection" value="Se Connecter"
        
    </form>';




    };





    ?>
    <!-- <form method="POST"> 
        <label for="">Identifiant</label>
        <input type="text" name="identifiant">
        <label>Password</label>
        <input type="password" name="password">
        <input type="submit" name="submitConnection">
    </form> -->

    <?php
    if (isset($_POST['submitConnection'])){
        $id = $_POST['identifiant'];
        $password = $_POST['password'];
        $sql = "SELECT * FROM `users` WHERE adresse_mail_user = '$id'";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // echo $sql;
        // echo '      ';
        // echo $id . '   --   ' . $password;
        // echo '      ';
        // echo "bjr !";
        // echo '      ';
        // var_dump($results);
        if($password == $results[0]["password_user"]){
            $_SESSION['user'] = [
                "id_user" => $results[0]["id_user"],
                "nom_user" => $results[0]["nom_user"],
                "prenom_user" => $results[0]["prenom_user"],
                "age_user" => $results[0]["age_user"],
                "adresse_mail_user" => $results[0]["adresse_mail_user"],
            ];
            echo "<strong>UTILISATEUR CONNECTÉ</strong> - <span style='color: green;'>MOT DE PASSE VALIDÉ !</span>" . $_SESSION['user'];
        }
        else{
            echo "<strong>UTILISATEUR NON CONNECTÉ</strong> - <span style='color: red;'>MOT DE PASSE INCORRECT !</span>";
        }
    }

    // var_dump($_SESSION);
    ?>
</body>
</html>