// cl
console.log("es 6 syntax");

// c  constant / Scope Block
const fname = "Mahesh";

// object and array const declared variables can be mutated.
const person = { name: "Mahesh" };
person.name = "hseham";
console.log(person.name);

const personList = [];
personList.push("Harsh");
personList.push("Varsha");
console.log(personList);

// l  let can be updated but not re-declared  / Scope Block
let lname = "Patel";
console.log(lname);

// v  variable   / Scope Function
var fullName = fname + " " + lname;
console.warn(fullName);

/**Arrow Functions */
//Traditional Way
function double(x) {
  return x * 2;
}
console.log(double(2));

// f ,  af , fd ,  fr
const dou = x => x * 2;
console.log(dou(9));

const getPerson = () => ({ name: "Patel", age: 24 });
console.log(getPerson());

// Function default parameter
function defaultFunc(x = 10) {
  return x;
}
console.log(defaultFunc()) // 10 -- no value is provided so x default value 10 is assigned to x in myFunc
console.log(defaultFunc(5))


// Destructuring objects and arrays
// Destructuring is a convenient way of creating new variables by extracting some values from data stored in objects or arrays.






/**
 *  https://mbeaudru.github.io/modern-js-cheatsheet/#tdz_sample 
 * 
*   https://github.com/capaj/vscode-standardjs-snippets


*/
