// Switch Case in JS
// Create an application with following roles:
// admin  - gets full access
// subadmin - gets access to create/delete courses
// testprep - gets access to create/delete tests
// user - gets access to consume content

var user = "admin"; // when you are changing the value of user. You will get different Result

switch (user) { 
  case "admin":
    console.log("You get full access");// true
    break; // when condition is true, it will stop the switch case
  case "subadmin":
    console.log("gets access to create/delete courses");
    break;
  case "testprep":
    console.log("gets access to create/delete tests");
    break;
  case "user":
    console.log("gets access to consume content");
    break;
  default:
    console.log("Trial user");
    break;
}
