<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin - Write Report</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
        }

        .container {
            max-width: 600px;
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

        form {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        label {
            font-size: 18px;
            color: #333;
        }

        input, textarea {
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        textarea {
            resize: vertical;
        }

        button {
            width: 100%;
            padding: 10px;
            background-color: #3498db;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #2980b9;
        }
        .link{
            text-align:Center;
            margin-top:10px;
        }
        a{
            text-decoration: none;
        }
        a:hover{
            text-decoration:underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Admin - Write Report</h1>

        <form action="report.php" method="post">
            <label for="reportTitle">Report Title:</label>
            <input type="text" id="reportTitle" name="reportTitle" required>

            <label for="reportContent">Report Content:</label>
            <textarea id="reportContent" name="reportContent" rows="5" required></textarea>

            <button type="submit" name="submitReport">Submit Report</button>
        </form>
        <div class="link">
            <a href="../admin.php">Back to Admin panel</a>
        </div>
    </div>
</body>
</html>

<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hotel";

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if (isset($_POST['submitReport'])) {
    $reportTitle = $_POST['reportTitle'];
    $reportContent = $_POST['reportContent'];

    $sql = "INSERT INTO reports (title, content) VALUES ('$reportTitle', '$reportContent')";

    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Report submitted successfully!');</script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}


$conn->close();
?>
