<?php
include_once 'include/class.user.php'; 
$user=new User(); 
if(isset($_REQUEST[ 'submit'])) 
{ 
    extract($_REQUEST); 
    $register=$user->reg_user($fullname, $uname, $upass, $uemail); 
    $namePattern = '/^[A-Za-z ]+$/';  
    $usernamePattern = '/^[A-Za-z0-9_]+$/';  
    $emailPattern = '/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/'; 
   
    if (!preg_match($namePattern, $fullname)) {
        echo "<script type='text/javascript'>
              alert('Full Name should only contain uppercase and lowercase letters.');
         </script>";
        exit();
    }

   
    if (!preg_match($usernamePattern, $uname)) {
        echo "<script type='text/javascript'>
              alert('Username should only contain uppercase, lowercase letters, numbers, and underscore.');
         </script>";
        exit();
    }

    
    if (!preg_match($emailPattern, $uemail)) {
        echo "<script type='text/javascript'>
              alert('Invalid email format.');
         </script>";
        exit();
    }
    if($register) 
    { 
        echo "
<script type='text/javascript'>
    alert('Your Manager has been Added Successfully');
</script>"; 
        echo "
<script type='text/javascript'>
    window.location.href = '../admin.php';
</script>"; 
    } 
    else 
    {
        echo "
<script type='text/javascript'>
    alert('Registration failed! username or email already exists');
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
    <link rel="stylesheet" type="text/css" href="path/to/style.css">
    <script language="javascript" type="text/javascript">
        function submitreg() {
            var form = document.reg;
            if (form.name.value == "") {
                alert("Enter Name.");
                return false;
            } else if (form.uname.value == "") {
                alert("Enter username.");
                return false;
            } else if (form.upass.value == "") {
                alert("Enter Password.");
                return false;
            } else if (form.uemail.value == "") {
                alert("Enter email.");
                return false;
            }
        }
    </script>
    <style>
        body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
}

.container {
    width: 50%;
    margin: 50px auto;
}

.well {
    background: rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 5px;
}

h2 {
    color: #333;
}

hr {
    border-top: 1px solid #ddd;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
}

button {
    width: 100%;
    padding: 10px;
    border: none;
    background: #337ab7;
    color: #fff;
    cursor: pointer;
}

button:hover {
    background: #23527c;
}

#click_here {
    margin-top: 20px;
    text-align: center;
}

#click_here a {
    color: #337ab7;
    text-decoration: none;
}

#click_here a:hover {
    text-decoration: underline;
}

    </style>
</head>

<body>
    <div class="container">
        <div class="well">
            <h2>Add Your Manager</h2>
            <hr>
            <form action="" method="post" name="reg">
                <div class="form-group">
                    <label for="fullname">Full Name:</label>
                    <input type="text" class="form-control" name="fullname" placeholder="example: Jhon Wiki" required>
                </div>
                <div class="form-group">
                    <label for="uname">User Name:</label>
                    <input type="text" class="form-control" name="uname" placeholder="exmple: witchbug" required>
                </div>
                <div class="form-group">
                    <label for="uemail">Email:</label>
                    <input type="email" class="form-control" name="uemail" placeholder="example: jhon@gmail.com" required>
                </div>
                <div class="form-group">
                    <label for="upass">Password</label>
                    <input type="password" class="form-control" name="upass" placeholder="abc123" required>
                </div>
                <button type="submit" class="btn btn-lg btn-primary button" name="submit" value="Add Manager"
                    onclick="return(submitreg());">Submit</button>

                <br>
                <div id="click_here">
                    <a href="../admin.php">Back to Admin Panel</a>
                </div>
            </form>
        </div>
    </div>
</body>

</html>