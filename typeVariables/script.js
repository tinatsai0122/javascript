console.log("--------avec typeof------------")
console.log(typeof "John"); //String
console.log(typeof 3.14); //number
console.log(typeof NaN); //number
console.log(typeof false); //Boolean
console.log(typeof [1,2,3,4]); //Array
console.log(typeof {name:"John", age:34}); //object
console.log(typeof new Date()); //date
console.log(typeof function(){}); //function
console.log(typeof null); //object

console.log("--------avec constructeur------------")
console.log("John".constructor); //String
console.log(3.14.constructor); //number
console.log(NaN.constructor); //number
console.log(false.constructor); //Boolean
console.log([1,2,3,4].constructor); //Array
console.log({name:"John", age:34}.constructor); //object
console.log(new Date().constructor); //Date
console.log(function(){}.constructor); //function
console.log(null.constructor); //

