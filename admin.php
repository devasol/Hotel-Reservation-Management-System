<?php
session_start();
include_once 'admin/include/class.user.php';
$user = new User();
$uid = $_SESSION['uid'];
if (!$user->get_session()) {
    header("location:admin/login.php");
}
if (isset($_GET['q'])) {
    $user->user_logout();
    header("location:index.php");
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Admin Panel</title>

    <style>
        body {
            background-image: url('images/home_bg.jpg');
            background-repeat: no-repeat;
            background-attachment: fixed;
            margin: 0;
            padding: 0;
            font-family: sans-serif;
        }

        .container {
            width: 100%;
        }

        img {
            width: 100%;
            height: 200px;
        }

        ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        li {
            display: inline-block;
            margin-right: 10px;
        }

        a {
            text-decoration: none;
            color: white;
            font-family: sans-serif;
            padding: 10px;
            border-radius: 5px;
        }

        a:hover {
            background-color: #555;
        }

        h4 {
            color: #ffbb2b;
            text-align: center;
            padding-top: 10px;
        }

        .well {
            background: rgba(0, 0, 0, 0.7);
            border: none;
            height: 300px;
            margin: 20px;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }

        .btn {
            width: 100px;
            /* height: 30px; */
            border: none;
            border-radius: 30px;
            float: right;
            margin-top: -15px;
            cursor: pointer;
            background-color: #d9534f;
            color: #fff;
            text-align:Center;
            margin-top:20px;
            margin-left:20px;
            /* padding-top:30px; */

        }

        .row {
            display: flex;
            justify-content: center;
        }
    </style>
</head>

<body>
    <div class="container">
        <img class="img" src="images/home_banner.jpg" alt="Banner Image">

        <nav>
            <ul>
                <li>
                    <a href="admin.php?q=logout" class="btn">Logout</a>
                </li>
            </ul>
        </nav>

        <div class="row">
            <div class="well">
                <h4>Room Category</h4>
                <hr>
                <ul>
                    <li><a href="admin/addroom.php">Add Room Category</a></li>
                    <li><a href="show_room_cat.php">Show All Room Category</a></li>
                    <li><a href="show_room_cat.php">Edit Room Category</a></li>
                    <li><a href="deleteroom.php">Delete Room Category</a></li>
                    <li><a href="delete_customer.php">Delete Customer</a></li>
                </ul>
            </div>
        </div>

        <div class="row">
            <div class="well">
                <h4>Bookings</h4>
                <hr>
                <ul>
                    <li><a href="room.php">Book Now</a></li>
                    <li><a href="show_all_room.php">Show All Booked Rooms</a></li>
                    <li><a href="show_all_room.php">Edit Booked Room</a></li>
                    <li><a href="customer.php">Customers</a></li>

                </ul>
            </div>
        </div>

        <div class="row">
            <div class="well">
                <h4>Add Manager</h4>
                <hr>
                <ul>
                    <li><a href="admin/registration.php">Add Manager</a></li>
                    <li><a href="service.php">Services</a></li>
                    <li><a href="employee.php">Add Employee</a></li>
                    <li><a href="report/report.php">Write Report</a></li>
                    <li><a href="report/report2.php">See Report</a></li>
                </ul>
            </div>
        </div>

        <div class="row">
            <div class="well">
                <h4>Back</h4>
                <hr>
                <ul>
                    <li><a href="admin/login.php">Back To Login</a></li>
                </ul>
            </div>
        </div>
    </div>
</body>

</html>
