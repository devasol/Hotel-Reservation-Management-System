<?php
    include_once 'db_connection.php';

    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST['name'];
        $id = $_POST['id'];

        if (!preg_match("/^[a-zA-Z]+$/", $name)) {
            echo "<script>alert('Invalid name Only uppercase or lowercase letters are allowed.');</script>";
           
        }
    
        
        if (!preg_match("/^[0-9]+$/", $id)) {
            echo "<script>alert('Invalid ID. Only numbers are allowed.');</script>";
           
        }
        setcookie('employee_name', $name, time() + 3600, '/');
        setcookie('employee_id', $id, time() + 3600, '/');
    } else {
       
        $name = isset($_COOKIE['employee_name']) ? $_COOKIE['employee_name'] : '';
        $id = isset($_COOKIE['employee_id']) ? $_COOKIE['employee_id'] : '';
    }

    $sql = "SELECT * FROM employees WHERE name = ? AND uid = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $name, $id);
$stmt->execute();
$result = $stmt->get_result();
  

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            
            echo "<h2>Employee Information</h2>";
            echo "<strong>Name:</strong> " . $row['name'] . "<br>";
            echo "<strong>ID:</strong> " . $row['uid'] . "<br>";
            echo "<strong>Gender:</strong> " . $row['gender'] . "<br>";
            echo "<strong>Age:</strong> " . $row['age'] . "<br>";
            echo "<strong>Phone:</strong> " . $row['phonenumber'] . "<br>";
            echo "<strong>Salary:</strong> $" . $row['salary'] . "<br>";
            echo "<strong>Entry Date:</strong> " . $row['entrydate'] . "<br>";
            echo "<strong>Working Position:</strong> " . $row['workingposition'] . "<br>";
        }
    }
     else {
        // echo "Employee not found!";
    }
    $stmt->close();
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Employee Information</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            text-align: center;
        }

        h2 {
            color: #333;
        }

        strong {
            color: #4CAF50;
        }
    </style>
</head>

<body>
    <h2>Employee Information</h2>
    <form action="" method="post">
        <label for="name">Name:</label>
        <input type="text" name="name" required>

        <label for="id">ID:</label>
        <input type="text" name="id" required>

        <button type="submit">View My Info</button>
    </form>
</body>

</html>
