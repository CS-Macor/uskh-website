<?php
if($_SERVER['REQUEST_METHOD']=='POST'){
  $name=$_POST['name'];
  $email=$_POST['email'];
  $phone=$_POST['phone'];
  $subject=$_POST['subject'];
  $comment=$_POST['comment'];


$con=new mysqli('localhost','root','','formcomment');
if($con){
  //echo"Connection successfully";
  $sql="insert into `data`(name, email, phone, subject, comment)
  values('$name','$email','$phone','$subject','$comment')";

  $result=mysqli_query($con,$sql);
  if($result){
    echo"Data inserted sucessful";

  }else{
    die(mysqli_error($con));
  }

}else{
  die(mysqli_error($con));
}
}
?>
