
function myfunction()
{
let name= document.getElementById("input_name");
 let surname= document.getElementById("input_surname");
let h1_name = document.getElementById ("name"); 
let age = document.getElementById ("input_age"); 
 
h1_name.innerText = "hello, "+ name.value + " " + surname.value ;
alert( name.value + " is " + age.value + "y.o.");

if (age.value <= 0)
 {
    alert("error:incorret age!"); 
 }
}