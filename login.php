<?php
  
  // Connect to database
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "tracker";
  
  $conn = mysqli_connect($servername, $username, $password, $dbname);
  
  // Check connection
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }
  
  // Check if form is submitted
  if (isset($_POST['submit'])) {
    // Get form data
    $username = $_POST['name1'];
    $email = $_POST['email1'];
    $password = $_POST['password1'];
   
    // Prepare and execute SQL statement
    $stmt = $conn->prepare("INSERT INTO login (`name`, `email`, `password`) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $username, $email, $password);
    $stmt->execute();
    
    // Close statement and connection
    $stmt->close();
    $conn->close();
    
    // echo "Registration has been completed successfully.";
  }
      
?>
