<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin - Services</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
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
    color: #333;
}

form {
    margin-bottom: 20px;
    text-align: center;
}

label {
    display: block;
    margin-bottom: 10px;
}

input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    box-sizing: border-box;
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

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

th, td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
}

th {
    background-color: #3498db;
    color: #fff;
}

tbody tr:hover {
    background-color: #f5f5f5;
}

tbody td:last-child {
    text-align: center;
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
        <h1>Admin - Services</h1>

        <form id="serviceForm" action="services.php" method="post">
            <label for="serviceName">Service Name:</label>
            <input type="text" id="serviceName" name="name" required>
            <label for="facility">Facilities:</label>
            <input type="text" id="serviceName" name="facility" required>
            <button type="submit" name="addService">Add Service</button>
        </form>

        <table id="servicesTable">
            <thead>
                <tr>
                    <th>Service Name</th>
                    <th>Facility</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <?php include 'services.php'; displayServices(); ?>
            </tbody>
        </table>
        <div class="link">
            <a href="admin.php">Back to Admin panel</a>
        </div>
    </div>
   

</body>
</html>
