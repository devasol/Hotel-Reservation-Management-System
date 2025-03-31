<?php
include_once 'admin/include/class.user.php'; 
$user = new User(); 

if (isset($_REQUEST['submit'])) { 
    extract($_REQUEST); 
    $result = $user->check_available($checkin, $checkout);
    if (!($result)) {
        echo $result;
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hotel Booking</title>

    <style>
        body {
            background-image: url('images/home_bg.jpg');
            background-repeat: no-repeat;
            background-attachment: fixed;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #fff;
        }

        .container {
            text-align: center;
            margin: 0 auto;
            max-width: 1000px;
        }

        img {
            max-width: 100%;
            height: auto;
        }

        .jumbotron {
            background: rgba(0, 0, 0, 0.7);
            padding: 20px;
            margin: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            color: #fff;
        }

        .form-group {
            font-family: sans-serif;
            font-size: 20px;
            padding-top: 20px;
        }

        label {
            color: #ffbb2b;
            font-size: 13px;
            font-weight: 100;
        }

        button {
            width: 200px;
            height: 50px;
            border-radius: 30px;
            background: #ffbb2b;
            border: none;
            cursor: pointer;
            transition: background 0.3s ease;
            margin-top: 20px;
        }

        button:hover {
            background: #e59500;
        }

        .room-details {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
            font-size: 20px;
        }

        .room-details .well {
            width: 60%;
            background: rgba(0, 0, 0, 0.7);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }

        .room-details img {
            width: 30%;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }

        h4 {
            color: #ffbb2b;
            text-align: center;
        }

        h6 {
            color: navajowhite;
            font-family: monospace;
        }

        a:hover {
            text-decoration: underline;
        }
        input{
            width:200px;
            height:30px;
        }
    </style>

</head>

<body>
    <div class="container">
        <img class="img-responsive" src="images/home_banner.jpg" alt="Banner Image" style="width: 100%; height: 180px;">

        <div class='row'>
            <div class=''></div>
            <div class='jumbotron'>
                <form action="" method="post" name="room_category">
                    <div class="form-group">
                        <label for="checkin">Check In:</label>&nbsp;&nbsp;&nbsp;
                        <input type="date" class="datepicker" name="checkin">
                    </div>
                    <div class="form-group">
                        <label for="checkout">Check Out:</label>&nbsp;&nbsp;
                        <input type="date" class="datepicker" name="checkout">
                    </div>
                    <button type="submit" name="submit">Check Availability</button>
                </form>
            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6 well">
                    <h4>Back</h4>
                    <hr>
                    <ul>
                        <li><a href="index.php" style="color:white; text-decoration:none;">Back To Home</a></li>
                    </ul>
                </div>
                <div class="col-md-3"></div>
            </div>
            <div class=""></div>
        </div>

        <?php
        if (isset($_REQUEST['submit'])) {
            if (mysqli_num_rows($result) > 0) {
                while ($row = mysqli_fetch_array($result)) {
                    $roomname = $row['roomname'];
                    $sql = "SELECT * FROM room_category WHERE roomname='$roomname'";
                    $query = mysqli_query($user->db, $sql);
                    $row2 = mysqli_fetch_array($query);

                    echo "
                    <div class='row'>
                        <div class='col-md-4'></div>
                        <div class='room-details'>
                            <div class='well'>
                                <h4>" . $row2['roomname'] . "</h4><hr>
                                <h6>No of Beds: " . $row2['no_bed'] . " " . $row2['bedtype'] . " bed.</h6>
                                <h6>Available Rooms: " . $row2['available'] . "</h6>
                                <h6>Facilities: " . $row2['fac'] . "</h6>
                                <h6>Price: " . $row2['price'] . " tk/night.</h6>
                            </div>
                            <a href='./booknow.php?roomname=" . $row2['roomname'] . "'><button>Book Now</button></a>
                        </div>
                        <div class='col-md-4'></div>
                    </div>";
                }
            }
        }
        ?>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            document.querySelectorAll('.datepicker').forEach(function (datepicker) {
                new Pikaday({ field: datepicker });
            });
        });
    </script>
</body>

</html>
