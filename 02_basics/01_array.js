// array

const myArray = [0, 1, 2, 3, 4]
const myHeros = ["Spiderman", "Superman"]

// console.log(myHeros);
// console.log(typeof(myHeros));

const myArr2 = new Array(1,2,3,4,5,6,7)
// console.log(myArr2);

// myArr2.push(5);
// console.log(myArr2);

myArr2.pop();
// console.log(myArr2);


// myArr2.unshift(0); //Adds an element at the start
// console.log(myArr2);

// myArr2.shift(0); // removes it from the starting
// console.log(myArr2);

// console.log(myArr2.includes(3));

const newArr = myArr2.join();

// console.log(typeof newArr);

//Slice and Splice

console.log("A", myArr2);

const myn1 = myArr2.slice(1, 3);
console.log(myn1);

console.log("B", myArr2);

const myn2 = myArr2.splice(1, 3);
console.log("C", myArr2);

console.log(myn2);
