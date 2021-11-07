let zero = 0;
let counter = 3;
let my = ['Ahmed', 'Mazero', 'Elham', 'Osama', 'Gamal', 'Ameer'];
my.splice(-2, 2);
my.reverse();
console.log(my); // ['Osama', 'Elham', 'Mazero', 'Ahmed']
console.log(my.slice(zero + true, counter)); // ['Elham', 'Mazero']
let newArr = my.slice(zero + true, counter);
console.log(`${newArr[0].slice(0,2)}${newArr[1].slice(2)}`) //Elzero
let newStr = `${newArr[0].slice(0,2)}${newArr[1].slice(2)}`;
console.log(`${newStr[4]}${newStr[5].toUpperCase()}`); //rO