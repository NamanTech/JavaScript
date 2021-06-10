//Functions in JS

function sayHello(name) { //declaration of function with 'function' Keyword
    console.log("Hello there, Naman"); // defination of function in the scope{}
    console.log(`Hello there, ${name}. How are you?`);
  }
  
  sayHello("Naman"); //Fucntion calling
  sayHello("Mitansh");
  
  function namstey() {
    return "Hello in India"; //return Nothing
  }
  
  var greetings = namstey();
  
  //for print function
  console.log(greetings);
  console.log(namstey());
  