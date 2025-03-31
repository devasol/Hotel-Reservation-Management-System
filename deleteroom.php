<?php
include_once 'db_connection.php'; 


$sql = "SELECT roomname FROM room_category";
$result = $conn->query($sql);


if (!$result) {
    die("Error: " . $conn->error);
}


if (isset($_POST['delete'])) {
    $selectedRoom = $_POST['roomname'];

   
    $deleteSql = "DELETE FROM room_category WHERE roomname = '$selectedRoom'"; 
    
    if ($conn->query($deleteSql)) {
        echo "<script>alert('Row deleted successfully.');</script>";
    } else {
        echo "<script>alert('Error deleting row: " . $conn->error . "');</script>";
    }
}


$conn->close();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delete Room</title>
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

form {
    width: 50%;
    margin: 50px auto;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
}

label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
}

select {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    box-sizing: border-box;
}

button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}


#backLink {
    margin-top: 20px;
}

#backLink a {
    color: #007bff;
    text-decoration: none;
    font-size: 16px;
    padding: 5px;
    border: 1px solid #007bff;
    border-radius: 3px;
    transition: background-color 0.3s;
}

#backLink a:hover {
    background-color: #007bff;
    color: #fff;
}

    </style>
</head>

<body>
    <h2>Delete Room</h2>

    <form method="post" action="">
        <label for="roomname">Select Room to Delete:</label>
        <select name="roomname" required>
            <?php
           
            while ($row = $result->fetch_assoc()) {
                echo "<option value='" . $row['roomname'] . "'>" . $row['roomname'] . "</option>";
            }
            ?>
        </select>

        <br>
        <br>

        <button type="submit" name="delete">Delete Room</button>
        <div id="backLink">
            <a href="admin.php">Back to Admin Panel</a>
        </div>
    </form>
</body>

</html>
