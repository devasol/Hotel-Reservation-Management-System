<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hotel";

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


function displayReports() {
    global $conn;

    
    $sql = "SELECT * FROM reports";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "<div class='report-card' onclick='showReportContent(\"{$row['title']}\", \"{$row['content']}\")'>
                    <p class='report-title'>{$row['title']}</p>
                    <p class='report-content'>{$row['content']}</p>
                </div>";
        }
    } else {
        echo "<p>No reports available.</p>";
    }
}


?>