<?php
session_start();
include_once 'include/class.user.php';
$user = new User();

if (isset($_REQUEST['submit'])) {
    $emailusername = $_POST['emailusername'];
    $password = $_POST['password'];

    
    $conn = new mysqli("localhost", "root", "", "hotel");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    
    $stmt = $conn->prepare("SELECT * FROM manager WHERE uemail = ? AND upass = ?");
    $stmt->bind_param("ss", $emailusername, $password);
    $stmt->execute();
    $result = $stmt->get_result();
    $user_data = $result->fetch_assoc();
    $stmt->close();

    $conn->close();

    if ($user_data) {
        echo "<script>location='../admin.php'</script>";
    } else {
        echo "<script type='text/javascript'>
            document.getElementById('wrong_id').innerHTML = 'Wrong username or password';
        </script>";
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Admin Panel</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/login.css" type="text/css">

    <script language="javascript" type="text/javascript">
        function submitlogin() {
            var form = document.login;
            if (form.emailusername.value == "") {
                alert("Enter email or username.");
                return false;
            } else if (form.password.value == "") {
                alert("Enter Password.");
                return false;
            }
        }
    </script>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-image: linear-gradient(to top left, #753682 0%, #bf2e34 100%);
        }

        .container {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        .jumbotron {
            width: 300px;
            padding: 20px;
            background-image: linear-gradient(to top left, #39b385, #9be15d);
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        }

        h2 {
            text-align: center;
            color: #333;
        }

        hr {
            border-top: 1px solid #333;
        }

        .form-group {
            font-size: 16px;
            margin-bottom: 15px;
        }

        input {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        button {
            width: 100%;
            padding: 10px;
            background-color: #4CAF50;
            border: none;
            border-radius: 5px;
            color: #fff;
            cursor: pointer;
            margin-top: 15px;
        }

        button:hover {
            opacity: 0.8;
        }

        #wrong_id {
            color: red;
            font-size: 14px;
            text-align: center;
        }

        p {
            text-align: center;
            font-size: 14px;
            margin-top: 20px;
        }

        a {
            color: #333;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="jumbotron">
            <h2>Log In</h2>
            <hr>
            <form action="" method="post" name="login">
                <div class="form-group">
                    <label for="emailusername">Username or Email:</label>
                    <input type="text" name="emailusername" class="form-control" value="admin" required>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" name="password" class="form-control" value="1234" required>
                </div>
                
                <p id="wrong_id"></p>

                <button type="submit" name="submit" value="Login" onclick="return submitlogin();">Submit</button>
                <p><a href="../empinfo.php">Employee Info</a></p>
                <p><a href="../index.php">Back To Home</a></p>

                <?php if (isset($_REQUEST['submit'])) {
                    extract($_REQUEST);
                    $login = $user->check_login($emailusername, $password);
                    if ($login) {
                        echo "<script>location='../admin.php'</script>";
                    } else {
                ?>

                        <script type="text/javascript">
                            document.getElementById("wrong_id").innerHTML = "Wrong username or password";
                        </script>

                <?php }
                } 
                ?>

            </form>
        </div>
    </div>
</body>

</html>
