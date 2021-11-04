// assign 1 -----------
console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(! -50 === ! +"-40"); // true
console.log(! 10 === ! -"-40"); // true
console.log(! "10" === ! 10); // true
console.log(! 20 === false); // true
// assign 2 -----------
console.log('###########')
let num1 = 10;
let num2 = 20;
console.log(num2 > num1);
console.log(num1 < num2);
console.log(num2 != num1);
console.log(num2 >= num1);
console.log(num1 <= num2);
console.log(num2 !== num1);
console.log('###########')
// assign 3 -----------
let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a != b); // true
console.log(a < b || a != c); // true
console.log(!(a == b) && !(a > b) && !(a < c) && !(a == c)); // true
// ============
document.querySelector('div').style.cssText = `
color: blue;
text-transform: capitalize;
font-size: 30px;
text-align: center;
margin-top: 50px;
`