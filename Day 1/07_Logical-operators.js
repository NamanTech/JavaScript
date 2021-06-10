//Logical Operators
// User is only allowed to make a purchase when he is:
// logged in
// email verified
// cardInfo - valid
// If any one is missing, stop purchase

var isLoggedIn = true;
var isEmailVerified = false;
var cardInfo = true;

// way to check all conditions with the help of if-else
// if (isLoggedIn) {
//   console.log("Logged IN Success");
//   if (isEmailVerified) {
//     console.log("Email is verified");
//     if (cardInfo) {
//       console.log("You can make a purchase");
//     }
//   }
// }

// way to check all conditions with the help of Logical Operators

//logical or operator

if (isLoggedIn || isEmailVerified || cardInfo) {
    console.log("Allow user to make a purchase"); //true(Atleast one condition should be true)
  } else {
    console.log("You are NOT allowed to do that");
  }
  
  
  //logical and operator
  
  if (isLoggedIn && isEmailVerified && cardInfo) {
    console.log("Allow user to make a purchase");
  } else {
    console.log("You are NOT allowed to do that");//true (All conditions must be true)
  }