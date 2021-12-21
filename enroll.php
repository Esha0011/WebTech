<?php 

$hostname="localhost";
$username="root";
$password="";
$database="JobPortal";

$conn=new mysqli($hostname, $username, $password, $database);
    if($conn->connect_error){
        die("Connection failed!!");
    }


$Cname=$_POST['Cname'];
$Cage=$_POST['Cage'];
$Cdob=$_POST['Cdob'];
$Cqua=$_POST['Cqua'];

$sql="INSERT into Enroll(Cname,Cage,Cdob,Cqua) VALUES('$Cname','$Cage','$Cdob','$Cqua')";

if (mysqli_query($conn,$sql)){
    echo "Data inserted into database !!";
}
else{
    echo "Something went wrong somewhere! please Check! ";
}

$conn->close();


?>