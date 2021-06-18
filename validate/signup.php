<?php 

require("../db/dbh.php");

if(isset($_POST['lname']) && isset($_POST['fname']) && isset($_POST['email']) && isset($_POST['pnumber']) && isset($_POST['pwd']) &&  isset($_POST['name']) && isset($_POST['size']) && isset($_POST['type'])){
    
    $lname = mysqli_reql_escape_string($conn, $_POST['type']);
    $fname = mysqli_reql_escape_string($conn, $_POST['type']);
    $email = mysqli_reql_escape_string($conn, $_POST['type']);
    $pnumber = mysqli_reql_escape_string($conn, $_POST['type']);
    $pwd = mysqli_reql_escape_string($conn, $_POST['type']);
    $name = mysqli_reql_escape_string($conn, $_POST['type']);
    $size = mysqli_reql_escape_string($conn, $_POST['type']);
    $type = mysqli_reql_escape_string($conn, $_POST['type']);

}  
else{
    header("location: ../index.html");
    die;
}

?>