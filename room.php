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

    

    
    
    
    <style>
          
        .well {
            background: rgba(0, 0, 0, 0.7);
            border: none;
        
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
            text-align:center;
        }
        h6
        {
            color: navajowhite;
            font-family:  monospace;
            font-size:15px;
        }
        button{
            margin-top:10px;
            margin-bottom:10px;
            width:150px;
            height:50px;
            border-radius:30px;
            background:black;
            color:white;
        }
        button:hover{
            opacity:0.5;
        }
        a{
            color:white;
            font-size:16px;
            margin-top:10px;
            padding-top:20px;
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
      
        
        
        
        <?php
        
        $sql="SELECT * FROM room_category";
        $result = mysqli_query($user->db, $sql);
        if($result)
        {
            if(mysqli_num_rows($result) > 0)
            {
//              
                while($row = mysqli_fetch_array($result))
                {
                    
                    echo "
                            <div class=''>
                            <div class=''></div>
                            <div class='well'>
                            
                                <h4>".$row['roomname']."</h4><hr>
                                <h6>No of Beds: ".$row['no_bed']." ".$row['bedtype']." bed.</h6>
                                <h6>Facilities: ".$row['fac']."</h6>
                                <h6>Price: ".$row['price']." tk/night.</h6>
                            </div>
                            <div class=''>
                                <a href='./booknow.php?roomname=".$row['roomname']."'><button class='btn btn-primary button'>Book Now</button> </a>
                            </div>   
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
        <a href="index.php">Back To Home</a>


    </div>
    
    
    
    
    





    
   
</body>

</html>