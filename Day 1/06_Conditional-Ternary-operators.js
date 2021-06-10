var temperature;

temperature = 19;

//if condition

if (temperature < 20) {
  console.log("it's very cold outside"); //true 
}

temperature = 39;

if (temperature < 30) {
  console.log("It's moderate outside");
} else {
  console.log("It's really HOT outside"); //true
}


// Ternary Operator in JS

// Show user a signout button if he is authenticated,
// other wise show him option to Login/Signup

var authenticated = true;

// normal way
// if (authenticated) {
//   console.log("Show signout button"); true
// } else {
//   console.log("Show login option");
// }

//Another way to using conditional Operator

// Condition            if part                      else part
authenticated ? console.log("SignOut Button") : console.log("LOGIN"); //SignOut Button
