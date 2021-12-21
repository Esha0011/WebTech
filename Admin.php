<?php 

$hostname="localhost";
$username="root";
$password="";
$database="JobPortal"

$conn.mysqli($hostname,$username,$password,$database){
    if($conn->connect_error){
        die("Connection failed!!");
    }
}

$Cname=$_POST['Cname'];
$Cage=$_POST['Cage'];
$Cdob=$_POST['Cdob'];
$Cqua=$_POST['Cqua'];

$sql="SELECT * from Enroll";

if mysqli_query($conn,$sql,$result){
    include 'Admindata.html'
    echo $result;
    echo ("Fetched data from database");
}
else{
    echo "Something went wrong somewhere! please Check! "
}

$conn->close();


?>                                                                                                                                                                                                  