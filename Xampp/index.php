<?php
    
    // Connexion à la BDD
    $host = 'localhost';
    $dbname = 'concessionnaire';
    $user = 'root';
    $password = '';
    
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Requête SQL
    $sql = "SELECT * FROM `vehicule`";
    
    // Préparation + Execution de la requête
    $stmt = $pdo->prepare($sql);
    $stmt->execute();

    // Réponse - Exploitation des données
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);


    // Manière 1

    // foreach ($results as $key => $value) {
        
    //     echo 'idPersonnage : ' . $value['idPersonnage'] . '<br>';
    //     echo 'nom : ' . $value['nom'] . '<br>';
    //     echo 'surnom : ' . $value['surnom'] . '<br>';
    //     echo 'level : ' . $value['level'] . '<br>';
    //     echo 'idArmeUtilise : ' . $value['idArmeUtilise'] . '<br>';
    //     echo 'idClasse : ' . $value['idClasse'] . '<br>';

        // foreach ($value as $key2 => $value2) {
        //     echo $key2 . " : " . $value2;
        //     echo '<br>';
        // }
        
    //     echo "<br>";
    //     echo "<br>";
    // }


    // Manière 2
    //     foreach ($results as $key => $value) {
        
    //     foreach ($value as $key2 => $value2) {
    //         echo $key2 . " : " . $value2;
    //         echo '<br>';
    //     }
        
    //     echo "<br>";
    //     echo "<br>";
    // }


?>
<input type="sumbmit" name="submitVehicule">


<form method="POST">
    <?php
    foreach($resultsAll as $key => $value){
        foreach($value as $key => $value2){
            echo $key . " : " . $value2 . " - ";
        }
        echo '<input type="hidden" name="idDelete" value="$idASuprimer"';
        echo '<input type="submit" name"submitDelete" value="Surrpimer"><br>';
        echo "</form>";
    }

    if (isset($_POST['submitDelete'])){
        echo "bonjour";
    }

    ?>

    