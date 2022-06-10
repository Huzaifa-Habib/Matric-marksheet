
// var userName = prompt('Enter your full name')
// document.getElementById("namee").innerText = userName;


// var userSubject = prompt('Enter your father name')
// document.getElementById("sub").innerText = userSubject;


var marks1= parseInt (prompt("Write your marks that you get in Maths"));
var marks2= parseInt (prompt("Write your marks that you get in Science"));
var marks3=parseInt (prompt("Write your marks that you get in English"));





document.getElementById("maths").innerText = marks1;
document.getElementById("sci").innerText = marks2;
document.getElementById("eng").innerText = marks3;




var result=(marks1 + marks2 + marks3);
document.getElementById("total").innerText = result;


var totalMarks=300;







var par1 = marks1/100*100;
var par2 = marks2/100*100;
var par3 = marks3/100*100;















document.getElementById("per1").innerText = par1 + "%";
document.getElementById("per2").innerText = par2 + "%";
document.getElementById("per3").innerText = par3+ "%";


if (marks1 >= 80 ) {
    document.getElementById("a-one").innerText = "A-One";
}

if (marks2 >= 80) {
    document.getElementById("two").innerText = "A-One";

 }

if (marks1 >= 70 && marks1 < 80  ) {
    document.getElementById("a-one").innerText = "A";

}

if (marks2 >= 70 && marks2 < 80) {
    document.getElementById("two").innerText = "A";

}

if (marks3 >= 80) {
    document.getElementById("three").innerText = "A-One";

 }

 if (marks3 >= 70 && marks3 < 80) {
    document.getElementById("three").innerText = "A";

}

if (marks1 >= 60 && marks1 < 70 ) {
    document.getElementById("a-one").innerText = "B";

}

if (marks2 >= 60 && marks2 < 70 ) {
    document.getElementById("two").innerText = "B";

}

if (marks3 >= 60 && marks3 < 70 ) {
    document.getElementById("three").innerText = "B";

}


if (marks1 >= 50 && marks1 < 60 ) {
    document.getElementById("a-one").innerText = "C";

}

if (marks2 >= 50 && marks2 < 60 ) {
    document.getElementById("two").innerText = "C";

}

if (marks3 >= 50 && marks3 < 60 ) {
    document.getElementById("three").innerText = "C";

}




var percentage = result/totalMarks*100;
document.getElementById("perr").innerText = percentage + "%";




var k =  document.getElementById("zoco");



if (percentage <= 49 ) {
    document.getElementById("zoco").innerText = "Fail"
    k.style.color = "red"
    
}

else{
    document.getElementById("zoco").innerText = "Pass"
    k.style.color = "green"


}


if (marks1 > 100 ) {
    alert("Your number must not be greater than 100")
    
}

else if (marks2 > 100 ) {
    alert("Your number must not be greater than 100")
    
}

 if( marks3 > 100 ) {
    alert("Your number must not be greater than 100")
    
    
}







Math.round(percentage);
Math.round(par1);
Math.round(par2);
Math.round(par3);











