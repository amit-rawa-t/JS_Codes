//Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

//Symbol is used to make a value unique

// BigInt == long long

const score = 100;

//JavaScript is a dynamically typed language. 
// This means that types are associated with values
// rather than variables, allowing a single 
// variable to hold different data types throughout its lifecycle. 

const islogged = false;
let userEmail;

const id = Symbol('123');
const anotherid = Symbol('123');

// console.log(id == anotherid);


//Non Primitive(Reference)

//Array, Objects, Functions

const heros = ["Superman", "Spiderman", "Hulk"];

let myObj = {
    name : "Amit",
    age : 22
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof(myObj));
console.log(typeof(myFunction));