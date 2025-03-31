<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Services</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
            color: #333;
        }

        .container {
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            text-align: center;
            color: #3498db;
        }

        .services-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 20px;
        }

        .service-card {
            width:300px;
            text-align:Center;
            background-color: #ecf0f1;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        .service-card:hover {
            background-color: #bdc3c7;
        }

        .service-name {
            font-size: 18px;
            font-weight: bold;
            /* margin-bottom: 10px; */
        }

        .service-id {
            color: #7f8c8d;
            font-size:20px;
            text-align:center;
        }
        .back-link {
            display: block;
            margin-top: 20px;
            text-align: center;
            text-decoration: none;
            color: #3498db;
            font-weight: bold;
            font-size: 16px;
            transition: color 0.3s;
        }

        .back-link:hover {
            color: #2980b9;
        }
    </style>
</head>
<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hotel";

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


function displayServicesUserCards() {
    global $conn;

   
    $sql = "SELECT * FROM services";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $uppercaseName = strtoupper($row['name']);
            echo "<div class='service-card'>
                    <p class='service-id'>$uppercaseName </p>
                    <br>
                    <p class='service-name'>{$row['facility']}</p>
                </div>";
        }
    }
}


$conn->close();
?>

<body>
    <div class="container">
        <h1>Our Services</h1>

        <div class="services-container">
            <?php include 'services.php'; displayServicesUserCards(); ?>
        </div>
        <a href="index.php" class="back-link">Back to Home</a>

    </div>
</body>
</html>
