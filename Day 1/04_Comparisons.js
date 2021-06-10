//Comparisons in JS

var user = "2"; // Normal Check(only value)

if (2 == user) {
  console.log("Condition is true"); //true
}

// We can use === (Triple equals) is a strict equality comparison operator

var user = "2";
// its also check the type
if (2 === user) {
  console.log("Condition is true"); 
}
else{
    console.log("Condition is false"); //false (Because its type is not same)
}


var user = "2";

if (String(2) === user) {
  console.log("Condition is true"); //true (Because type of 'user' variable is string)
}
else{
    console.log("Condition is false"); 
}