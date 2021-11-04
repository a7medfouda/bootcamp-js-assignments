// assign 1 -----------------
let num1 = 9;
let num2 = 20;
let num3 = 110;
num1 < 10 ? console.log(`00${num1}`): '';
num2 > 10 && num2 < 100 ? console.log(`0${num2}`) : '';
num3 >= 100 ? console.log(`${num3}`) : '';
console.log('###########');
// assign 2 -----------------
let num = 9;
let str = "9";
let str2 = "20";
num == str ? console.log('{num1} Is The Same Value As {str}'): '';
num !== str ? console.log('{num1} Is The Same Value As {str} But Not The Same Type') : '';
num === str ? '' : console.log('{num1} Is Not The Same Value Or The Same Type As {str2}');
str != str2 && typeof str === typeof str2 ? console.log('{str} Is The Same Type As {str2} But Not The Same Value') : '';
console.log('###########');
// assign 3 -----------------
let num11 = 10;
let num22 = 30;
let num33 = "30";
if (num33 > num11 && typeof num33 != typeof num22 && num33 > num11 && num33 == num22 && typeof num33 !== typeof num22 && num33 !== num11 && typeof num33 != typeof num22 ) {
    console.log('30 Is Larger Than 10 And Type string Not The Same Type As number');
    console.log('30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number');
    console.log('{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}');
    
}
console.log('###########');
// assign 4 -----------------
let num111 = 10;
let num222 = 10;
let num333 = "10";
let num444 = 20;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num111+10 > num222) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num111+10 > num222 && num111 < num444) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num111+10 > num222 && `${num111}` === num333) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num111 + num222)-10 < num444) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num111 + +(num333))-10 < num444) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num111 + num222 + +(num333))-20 < num444) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num444 - (num111 + +(num333)) + num222+11 === 21) {
  console.log("True");
} else {
  console.log("False");
}