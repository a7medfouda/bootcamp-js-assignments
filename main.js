// assign 1 --------------------
function getNames(names) {
    let message =[];
    for (let i = 0; i < names.length; i++) {
        
        //  console.log(`[${names[i]}]`)
         message.push(`[${names[i]}]`)
        //  console.log('###################3')
        }
    return message.join(', ');
}
// console.log(getNames(['ahmed', 'rahma', 'fouda']))

let names = (...names) => `String ${getNames(names)} => Done !`;

console.log(names('osama', 'mohamed', 'ali', 'ibrahim'))
console.log('###########')
// assign 2 --------------------
function add(numbers) {
    let cartona = 0;
    for (let i = 0; i < numbers.length; i++) {
    cartona += numbers[i];
}
return cartona;
}
// console.log(add(numbers))
// let givenNumbers = [20, 50, 10, 60];

let calc = (one, two, ...numbers) => {
    let result = 0;
    result = one + two; 
    return result + add(numbers)
};
console.log(calc(10, 20, 50)); // 80

// -------- by regular function ------------ 
/*

function calc(one, two, ...numbers) {
    let result = 0;
    result = one + two; 
    return result + add(numbers)
}
console.log(calc(10, 20, 50)); // 80

*/
