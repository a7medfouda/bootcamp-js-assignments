// assign 1 -----------
let job = 'manager' //(window.prompt('enter your job: ')); // manager
let salary = 0;
switch (job) {
  case 'manager':
    salary = 8000;
    console.log(`salary is ${salary}`)
    break;
  case 'it':
    salary = 6000;
    console.log(`salary is ${salary}`)
    break;
  case 'support':
    salary = 6000;
    console.log(`salary is ${salary}`)
    break;
  case 'developer':
    salary = 7000;
    console.log(`salary is ${salary}`)
    break;
  case 'designer':
    salary = 7000;
    console.log(`salary is ${salary}`)
    break;
  
  default:
    salary;
    console.log(`salary is ${salary || 'unknown'}`)
    break;
}
console.log('###########')
// assign 2 -----------
let holidays = 0 //Number((window.prompt('enter your holidays: ')));
let money = 0;
// ----------- make this switch case to if condition --------
// switch (holidays) {
//   case 0:
//     money = 5000;
//     console.log(`money is ${money}`)
//     break;
//   case 1:
//   case 2:
//     money = 3000;
//     console.log(`money is ${money}`)
//     break;
//   case 3:
//     money = 2000;
//     console.log(`money is ${money}`)
//     break;
//   case 4:
//     money = 1000;
//     console.log(`money is ${money}`)
//     break;
//   case 5:
//     money = 0;
//     console.log(`money is ${money}`)
//     break;

//   default:
//     money = 0;
//     console.log(`money is ${money}`)
//     break;
// }
if (holidays == 0) {
  money = 5000;
  console.log(`money is ${money}`)
} else if (holidays == 1 || holidays == 2) {
  money = 3000;
  console.log(`money is ${money}`)
}
 else if (holidays == 3) {
  money = 2000;
  console.log(`money is ${money}`)
}
 else if (holidays == 4) {
  money = 1000;
  console.log(`money is ${money}`)
}
 else if (holidays == 5) {
  money = 0;
  console.log(`money is ${money}`)
} else {
  money = 0;
  console.log(`money is ${money}`)
}