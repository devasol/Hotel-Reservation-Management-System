<?php
include_once 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $id = $_POST['id'];
    $gender = $_POST['gender'];
    $age = $_POST['age'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $salary = $_POST['salary'];
    $entrydate = $_POST['entrydate'];
    $workingposition = $_POST['workingposition'];

 
    $namePattern = "/^[a-zA-Z]+$/";
    $idPattern = "/^[0-9]+$/";
    $genderPattern = "/^(male|female)$/i";
    $phonePattern = "/^\d+$/";
    $emailPattern = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/";
    $salaryPattern = "/^\d+$/";
    $entrydatePattern = "/^\d{4}-\d{2}-\d{2}$/";
    $workingpositionPattern = "/^[a-zA-Z]+$/";

  
    if (!preg_match($namePattern, $name)) {
        echo "<script>alert('Invalid name format!');</script>";
    } elseif (!preg_match($idPattern, $id)) {
        echo "<script>alert('Invalid employee id format!');</script>";
    } elseif (!preg_match($genderPattern, $gender)) {
        echo "<script>alert('Invalid gender format!');</script>";
    } elseif ($age != '' && !is_numeric($age)) {
        echo "<script>alert('Invalid age format!');</script>";
    } elseif (!preg_match($phonePattern, $phone)) {
        echo "<script>alert('Invalid phone format!');</script>";
    } elseif (!preg_match($emailPattern, $email)) {
        echo "<script>alert('Invalid email format!');</script>";
    } elseif (!preg_match($salaryPattern, $salary)) {
        echo "<script>alert('Invalid salary format!');</script>";
    } elseif (!preg_match($entrydatePattern, $entrydate)) {
        echo "<script>alert('Invalid entry date format!');</script>";
    } elseif (!preg_match($workingpositionPattern, $workingposition)) {
        echo "<script>alert('Invalid working position format!');</script>";
    } else {
        
        $sql = "INSERT INTO employees (name, uid, gender, age, phonenumber, email, salary, entrydate, workingposition) 
                VALUES ('$name', '$id', '$gender', '$age', '$phone', '$email', '$salary', '$entrydate', '$workingposition')";

        if ($conn->query($sql) === TRUE) {
            echo "<script>alert('Employee added successfully!');</script>";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Admin Add Employee</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        h2 {
            color: #333;
            text-align:center;
        }

        form {
            max-width: 400px;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        label {
            display: block;
            margin-bottom: 8px;
            color: #333;
        }

        input {
            width: 100%;
            padding: 8px;
            margin-bottom: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }

        button {
            background-color: #4CAF50;
            color: #fff;
            padding: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        button:hover {
            background-color: #45a049;
        }
        #adminLink {
            display: block;
            margin-top: 10px;
            text-align: center;
        }

        #adminLink a {
            color: #007bff;
            text-decoration: none;
        }

        #adminLink a:hover {
            text-decoration: underline;
        }
    </style>
</head>

<body>
    <h2>Admin Add Employee</h2>
    <form action="" method="post">
        <label for="name">Name:</label>
        <input type="text" name="name" required>
        <label for="id">employee id:</label>
        <input type="text" name="id" required>

        <label for="gender">Gender:</label>
        <input type="text" name="gender" required>

        <label for="age">Age:</label>
        <input type="number" name="age">

        <label for="phone">Phone:</label>
        <input type="text" name="phone" required>
        <label for="email">Email:</label>
        <input type="email" name="email" required>

        <label for="salary">Salary:</label>
        <input type="text" name="salary">

        <label for="entrydate">Entry Date:</label>
        <input type="date" name="entrydate">

        <label for="workingposition">Working Position:</label>
        <input type="text" name="workingposition" required>

        <button type="submit">Add Employee</button>
        <div id="adminLink">
        <a href="admin.php">Back to Admin Panel</a>
    </div>

    </form>
</body>

</html>
