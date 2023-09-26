function myFunction(){
let string1 = "Thank you ";
let user = document.getElementById("fname").value;
let string2 =" for visiting my website!"
let msg = string1 + user + string2;
const output =document.getElementById("msgOutput");
output.style.display ="block";
output.innerHTML= msg;
}