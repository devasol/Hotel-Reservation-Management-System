<?php

$host = "localhost";
$username = "root"; 
$password = ""; 
$database = "hotel"; 


$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$selectQuery = "SELECT * FROM customers";
$result = $conn->query($selectQuery);


$conn->close();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Customer Data</title>


    <style>
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }
        h2{
            text-align:Center;
        }
        .back-link {
            display: block;
            margin-top: 20px;
            text-align: center;
            text-decoration: none;
            color: #007bff;
        }

        .back-link:hover {
            text-decoration: underline;
        }
    </style>
</head>

<body>


    <h2>Customer Data</h2>
    <table>
        <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Room Name</th>
            <th>Room ID</th>
            <th>Check In</th>
            <th>Check Out</th>
        </tr>
        <?php
        
        while ($row = $result->fetch_assoc()) {
            echo "<tr>";
            echo "<td>" . $row['name'] . "</td>";
            echo "<td>" . $row['phone'] . "</td>";
            echo "<td>" . $row['roomname'] . "</td>";
            echo "<td>" . $row['room_id'] . "</td>";
            echo "<td>" . $row['checkin'] . "</td>";
            echo "<td>" . $row['checkout'] . "</td>";
            echo "</tr>";
        }
        ?>
    </table>
    <a href="admin.php" class="back-link">Back to Admin Panel</a>

   

</body>

</html>
