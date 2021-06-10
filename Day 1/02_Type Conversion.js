// Type conversion 

let myVar;
myVar = String(34); //To convert number into a string
// We can use the typeof operator to find the data type of a variable
console.log(myVar, (typeof myVar)); // string

let booleanVar = String(true); //To convert boolean into a string
console.log(booleanVar, (typeof booleanVar)); // string

let date = String(new Date()); //To convert date into a string
console.log(date, (typeof date)); // string

let arr =  String([1,2,3,4,5]); //To convert array into a string
console.log(arr.length, (typeof arr)); // 9, string

//Another way to convert any datatype into a string 
let i = 75;
console.log(i.toString());

let stri = Number("3434"); //To convert string into a number
stri = Number("343d4"); //Nan(not a number)
stri = Number(true); // 1 (the value of true is 1)
stri = Number([1,2,3,4,5,6,7,8,9]); //Nan
console.log(stri, (typeof stri));

let num = parseInt('34.098'); //To convert number into int
console.log(num, (typeof num)); // 34, number

let number = parseFloat('34.098'); //To convert number into float
console.log(number.toFixed(2), (typeof number)); //34.09, number

