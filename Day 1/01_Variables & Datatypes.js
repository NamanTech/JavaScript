// variables are define with the help of 'var', 'let' & 'const' Keywords

var firstName = "Naman"; // variables are containers for storing data values
let lastNaman = "Garg"; // let keyword to define a variable with restricted scope
const city = "Indore"; // const keyword to define a variable that cannot be reassigned
var state ="Madhya Pradesh"; // string
var email = "naman123@abc.xyz";
var password = "123456"; // string (Everything written in "codes" is treated as a String)
var courseCount = 4; // number
var isLoggedwithGoogle = true; // boolean
var isLoggedwithFacebook = false;
var Test; //Undefined (Because we are not initialize the value of 'Test' variable)


// We use console.log() to print anything on console
console.log("Hello World!");

/*
 Here, we are using `backticks` for following reasons:-
 In Template strings linebreaks are allowed and thus can be multiline
 Normal string literals (declared with '' or "") are not allowed to have linebreaks
 We can easily interpolate variable values to the string with the ${myVariable} syntax
*/

console.log(`
    Hii there! This is ${firstName} ${lastNaman}. 
    I am living in ${city}, ${state}.
    My Email address is ${email} and My Password is ${password}.
    I opt ${courseCount} Courses.
    I Logged in with facebook : ${isLoggedwithFacebook}
    I Logged in with Google : ${isLoggedwithGoogle}
`);
