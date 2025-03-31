<?php

include_once 'admin/include/class.user.php'; 
$user = new User(); 
$error="";
$roomname = $_GET['roomname'];
if (isset($_REQUEST['submit'])) {
    extract($_REQUEST);

    
    if (!preg_match("/^[a-zA-Z\s]+$/", $name)) {
        $error = "Invalid name. Only alphabets and spaces are allowed.";
    }

   
    if (!preg_match("/^\+?[0-9]+$/", $phone)) {
        $error = "Invalid phone number. Only digits are allowed, \n optionally preceded by '+'";
    }

    if (!$error) {
        $result = $user->booknow($checkin, $checkout, $name, $phone, $roomname);

        if ($result) {
            echo "<script type='text/javascript'>
                  alert('".$result."');
             </script>";
        }
    } else {
        echo "<script type='text/javascript'>
                  alert('".$error."');
             </script>";
    }
    if (isset($_POST['remember'])) {
        setcookie('remember_checkin', $checkin, time() + 86400 * 30, '/'); 
        setcookie('remember_checkout', $checkout, time() + 86400 * 30, '/'); 
        setcookie('remember_name', $name, time() + 86400 * 30, '/'); 
        setcookie('remember_phone', $phone, time() + 86400 * 30, '/');
    }else {
   
    if (isset($_COOKIE['remember_checkin']) && isset($_COOKIE['remember_checkout']) &&
        isset($_COOKIE['remember_name']) && isset($_COOKIE['remember_phone'])) {
        
       
        $remember_checkin = $_COOKIE['remember_checkin'];
        $remember_checkout = $_COOKIE['remember_checkout'];
        $remember_name = $_COOKIE['remember_name'];
        $remember_phone = $_COOKIE['remember_phone'];
    }
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

    <link rel="stylesheet" href="admin/css/reg.css" type="text/css">

    <script>
        $(function () {
            $(".datepicker").datepicker({
                dateFormat: 'yy-mm-dd'
            });
        });
    </script>
    <style>
        body {
            font-family: sans-serif;
            margin: 0;
            padding: 0;
            
        }

        label {
            font-size: 20px;
            font-family: sans-serif;
        }

        input {
            height: 30px;
            margin-top: 20px;
            width: 100%;
            box-sizing: border-box;
            padding: 5px;
        }

        .container {
            width: 100%;
            text-align: center;
        }

        button {
            text-align: center;
            margin-top:15px;
            width: 100%;
            background-color: #007BFF;
            color: #fff;
            padding: 10px;
            border: none;
            cursor: pointer;
        }

        a {
            color: black;
            font-size: 20px;
            font-family: sans-serif;
            text-decoration: none;
            text-align:center;
            margin-top:10px;
           
        }

        a:hover {
            text-decoration: underline;
        }

        .well {
           
            background-color: #f8f9fa;
            width:500px;
            border-radius: 5px;
            padding: 20px;
            margin-top: 20px;
            margin-left:auto;
            margin-right:auto;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        #click_here {
            margin-top: 20px;
        }
    </style>

</head>

<body>
  
    <div class="container">
   
        <img class="img-responsive" src="images/home_banner.jpg" style="width: 100%; height: 180px;">

        <div class="well">
         
            <h2>Book Now: <?php echo $roomname; ?></h2>
            <hr>
            <form action="" method="post" name="room_category">

            <div class="form-group">
                <label for="checkin">Check In :</label>&nbsp;&nbsp;&nbsp;
                <input type="date" class="datepicker" name="checkin" value="<?php echo isset($remember_checkin) ? $remember_checkin : ''; ?>">
            </div>

            <div class="form-group">
                <label for="checkout">Check Out:</label>&nbsp;
                <input type="date" class="datepicker" name="checkout" value="<?php echo isset($remember_checkout) ? $remember_checkout : ''; ?>">
            </div>

            <div class="form-group">
                <label for="name">Enter Your Full Name:</label>
                <input type="text" class="form-control" name="name" placeholder="Jhon Wicky" value="<?php echo isset($remember_name) ? $remember_name : ''; ?>" required>
            </div>

            <div class="form-group">
                <label for="phone">Enter Your Phone Number:</label>
                <input type="text" class="form-control" name="phone" placeholder="018XXXXXXX" value="<?php echo isset($remember_phone) ? $remember_phone : ''; ?>" required>
            </div>
             <div class="form-group">
                <input type="checkbox" name="remember" <?php echo isset($remember_checkin) ? 'checked' : ''; ?>> Remember Me
            </div>

            <button type="submit" class="button" name="submit">Book Now</button>

            <br>
            <div id="click_here">
                <a href="index.php">Back to Home</a>
            </div>
        </div>
    </div>

</body>

</html>
