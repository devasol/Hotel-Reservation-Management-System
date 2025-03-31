<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reports</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
            color: #333;
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
            color: #3498db;
        }

        .reports-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
        }

        .report-card {
            padding: 15px;
            background-color: #ecf0f1;
            border-radius: 5px;
            transition: background-color 0.3s;
            cursor: pointer;
        }

        .report-card:hover {
            background-color: #bdc3c7;
        }

        .report-title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .report-content {
            font-size: 14px;
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
        <h1>Reports</h1>

        <div class="reports-container">
            <?php include 'reports.php'; displayReports(); ?>
        </div>
        <div class="link">
            <a href="../admin.php">Back to Admin panel</a>
        </div>
    </div>
</body>
</html>
