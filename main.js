// assign 1 ------------------
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(false,num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length = num;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

console.log('###########');
// assign 2 ------------------

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends = ["Ahmed", "Eman", "Osama"];
friends.shift('ahmed');

console.log(friends); // ["Eman", "Osama"]

console.log('###########');
// assign 3 ------------------

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
// Write One Single Line Of Code
finalArr = finalArr.concat(arrOne, arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

console.log('###########');
// assign 4 ------------------

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0].slice(2).toUpperCase()); // ZERO

console.log('###########');
// assign 5 ------------------

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
console.log(haystack.includes('JS')); // true, then it's found
console.log(haystack.indexOf('JS')); // it returns a number that represents it's index in this case 1, then it's found
console.log(haystack.lastIndexOf('JS')); // it returns a number that represents it's index in this case 1, then it's found
if (haystack.indexOf('JS') != -1) {
    console.log('Found');
}

console.log('###########');
// assign 6 ------------------

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = allArrs.concat(arr1, arr2).sort()

console.log(allArrs.slice(allArrs.indexOf('F')).join('').toLocaleLowerCase()); // fxy