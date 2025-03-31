<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hotel";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

function displayServices() {
    global $conn;

    $sql = "SELECT * FROM services";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        
        while ($row = $result->fetch_assoc()) {
            $uppercaseName = strtoupper($row['name']);
            echo "<tr>
                    <td>$uppercaseName</td>
                    <td>{$row['facility']}</td>
                    <td>
                        <form method='post' action='services.php'>
                            <input type='hidden' name='name' value='{$row['facility']}'>
                            <input type='text' name='updatedName' placeholder='New name' required>
                            <input type='text' name='updatedFacility' placeholder='New facility' required>
                            <button type='submit' name='updateService'>Update</button>
                        </form>
                        <form method='post' action='services.php'>
                            <input type='hidden' name='facility' value='{$row['facility']}'>
                            <button type='submit' name='removeService'>Remove</button>
                        </form>
                    </td>
                </tr>";
        }
    }
}
if (isset($_POST['addService'])) {
    $name = $_POST['name'];
    $facility= $_POST['facility'];


    $sql = "INSERT INTO services (name,facility) VALUES ('$name','$facility')";
    $conn->query($sql);
}

if (isset($_POST['updateService'])) {
    $nameToUpdate = $_POST['name'];
    $updatedName = $_POST['updatedName'];
    $updatedFacility = $_POST['updatedFacility'];

    
    $updateSql = "UPDATE services SET name = '$updatedName', facility = '$updatedFacility' WHERE facility = '$nameToUpdate'";
    
    if ($conn->query($updateSql) === TRUE) {
        echo "Service updated successfully!";
    } else {
        echo "Error updating service: " . $conn->error;
    }
}

if (isset($_POST['removeService'])) {
    $facilityToRemove = $_POST['facility'];

    
    $removeSql = "DELETE FROM services WHERE facility = '$facilityToRemove'";
    
    if ($conn->query($removeSql) === TRUE) {
        echo "Service removed successfully!";
    } else {
        echo "Error removing service: " . $conn->error;
    }
}

// $conn->close();
?>


