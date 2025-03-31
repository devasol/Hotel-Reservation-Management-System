<?php
include_once 'admin/include/class.user.php'; 
$user=new User();


?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hotel Booking</title>

   
    <
    
    
    <style>
          
        .well {
            background: rgba(0, 0, 0, 0.7);
            border: none;
            height: 300px;
        }
        .container{
            text-align:Center;
        }
        body {
            background-image: url('images/home_bg.jpg');
            background-repeat: no-repeat;
            background-attachment: fixed;
        }
        
        h4 {
            color: #ffbb2b;
        }
        h6
        {
            color: navajowhite;
            font-family:  monospace;
            font-size:15px;
            font-weight:bold;
        }
        button{
            margin-top:20px;
            width:150px;
            height:50px;
            border-radius:30px;
            background:black;
            color:white;
        }
        a{
            color:white;
            font-size:16px;
            margin-top:20px;
            padding-top:30px;
            text-decoration:none;

        }
        a:hover{
            text-decoration:underline;
        }
    </style>
    
    
</head>

<body>
    <div class="container">
      
      
       <img class="img-responsive" src="images/home_banner.jpg" style="width:100%; height:180px;">      
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
             
            </div>
        </nav>
        
        
        
        <?php
        
        $sql="SELECT * FROM room_category";
        $result = mysqli_query($user->db, $sql);
        if($result)
        {
            if(mysqli_num_rows($result) > 0)
            {
              
                while($row = mysqli_fetch_array($result))
                {
                    
                    echo "
                            <div class='row'>
                            <div class='col-md-2'></div>
                            <div class='col-md-6 well'>
                                <h4>".$row['roomname']."</h4><hr>
                                <h6>No of Beds: ".$row['no_bed']." ".$row['bedtype']." bed.</h6>
                                <h6>Facilities: ".$row['fac']."</h6>
                                <h6>Price: ".$row['price']." birr/night.</h6>
                            </div>
                            &nbsp;&nbsp;
                            <a href='admin/edit_room_cat.php?roomname=".$row['roomname']."'><button class='btn btn-primary button'>Edit</button></a>
                            </div>
                            
                        
                    
                         ";
                    
                    
                }
                
                
                          
            }
            else
            {
                echo "NO Data Exist";
            }
        }
        else
        {
            echo "Cannot connect to server".$result;
        }
        
        
        
        
        
        ?>
<a href="admin.php">Back</a>

    </div>
    
    
    
    
    





 
</body>

</html>