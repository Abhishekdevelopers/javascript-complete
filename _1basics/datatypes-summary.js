// Primitive
// 7 types: string, number, boolearn,null, undefined, Symbol, BigIn 
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
// let userEmail;
// const id = symbol('123')
// const anotherId = Symbole('123')
// const bigNumber = 3434364134664n
// console.log(id===anotherId);

// Reference (Non primitive)

// Array, object, functions

const heros = ["shaktiman", "abhishek", "Rishi"];

let myObj = {
    name:"abhishek",
    age:25,
}
const details = function(){
    console.log("hello abhishek");
}
// console.log(typeof anotherId);

// viste the link if you want to know about the typeof different datatype 
// https://262.ecma-international.org/5.1/#sec-11.4.3


// how to give the memory and use in Stack (Primitive), Heap (Non-Primitive)

// it give only copy of the memory and child not change the value parent 
let myYoutubename ="abhishek";
let anothername = myYoutubename;
anothername = "rishi"
console.log(anothername);
console.log(myYoutubename);

// but you can change the value because both use the same refrence 

let userOne = {
    email:"user@googl.com",
    upi:"user@qwe"
}
let userTwo = userOne
userTwo.email = "abhishek@google.com"
console.log(userOne.email);
console.log(userTwo.email);