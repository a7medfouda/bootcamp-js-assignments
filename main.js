//   assign 1 ---------------
function sayHello(theName, theGender  = '') {
  if(theGender == 'Male' || theGender == false){
      console.log(`Hello Mr. ${theName}`)
  }
  else {
      console.log(`Hello Mrs. ${theName}`)
  }
  
}


// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

console.log(`#########`)
//   assign 2 ---------------
function calculate(firstNum, secondNum, operation) {
  // console.log(secondNum);
  let result;
  if (secondNum == undefined) {
      console.log(`second number not found`)
  }

  else if(operation == 'add' || operation == undefined) {
      result = 0;
  result += firstNum + secondNum;
  console.log(result)

  }

  else if (operation == 'subtract'){
      result = 0;
  result += firstNum - secondNum;
  console.log(result)
  }
  else if (operation == 'multiply') {
      result = 0;
      result += firstNum * secondNum;
      console.log(result)
  }
}

//   Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

console.log(`#########`)
//   assign 3 ---------------

function ageInTime(theAge) {
  if (theAge > 10 && theAge <= 100) {
      let result = 0;
      // in months 
      result = theAge * 12;
      console.log(`you age in months: ${result}`);
      // in days 
      result = 0; 
      result = theAge * 365;
      console.log(`you age in days: ${result}`);
      // in hours 
      result = 0;
      result = theAge * 365 * 24;
      console.log(`you age in hours: ${result}`);
      // in mins 
      result = 0;
      result = theAge * 365 * 24 * 60;
      console.log(`you age in mins: ${result}`);
      // in sec 
      result = 0;
      result = theAge * 365 * 24 * 60 * 60;
      console.log(`you age in seconds: ${result}`);
  }
  else {
      console.log(`Age Out Of Range`)
  }
}
// Needed Output
ageInTime(110); // Age Out Of Range
console.log('---')
ageInTime(38); // Months Example => 456 Months



//   assign 4 ---------------
/*
this assign is solved in a separate file, i pushed it to github 

in a branch by this name (assigns_62 _Function_Ultimate_Practice)..... 

*/

//   assign 5 ---------------

function createSelectBox(startYear, endYear) {
  let cartona = ``;
  for (let i = startYear; i < endYear; i++) {
      cartona += `
      <option value="${i}">${i}</option>
      `
  }
  document.querySelector('select').innerHTML = cartona;
}
createSelectBox(2000, 2021);

console.log(`#########`)
//   assign 6 ---------------

function multiply(...params) {
  let sum=1;

 for (var i=0; i<params.length; i++) {
  if (typeof params[i] == 'string') {
      // console.log(`this is ${i}`)
      continue;
  }

  if (isFloat(params[i]) == true) {
      // console.log(params[i])
      params[i] = Math.floor(params[i])
      // console.log(params[i])
  }

  sum = sum * params[i];
} 
console.log(sum)
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
//this function is from stack over flow i got it by search...
function isFloat(n){
  return Number(n) === n && n % 1 !== 0;
}
//this function is from stack over flow 

