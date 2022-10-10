// If the number is divisible by 3, print a "multiple of 3"

let num = 9;
if(num%3==0){
  console.log( "multiple of 3")
}

//  If a person is allowed to drive in India print "Apply for a license" or "NA"

let age = 21;
if(age>=18){
  console.log("Apply for a license")
} else{
   console.log("NA")
}

//  Given 2 numbers a and b print which is greater or "both equal"

let a = 10;
let b = 9;
if(a>b){
  console.log("a is greater")
} else if(a<b){
  console.log("b is greater")
} else{
  console.log("both equal")
}


// Given stored username and password and input username and password, Print if the user can login or not

let stored_username = "yashraj@gmail";
let stored_password = "raj121";

let input_username = "yashraj@gmail";
let input_password = "raj121";

if(stored_username==input_username){
  if(stored_password==input_password){
    console.log("You can login")
  } else{
    console.log("You can not login")
  }
}

