// assign 1 ----------------------
// ------------this code ruin the code after it so i commented it-----------.
/*
let resultFromUser = window.prompt('enter the range', '10-20');
console.log(resultFromUser);

let num1 = Number(resultFromUser.slice(0,resultFromUser.indexOf('-')));
let num2 = Number(resultFromUser.slice(resultFromUser.indexOf('-')+1));
if (num1 > num2) {
  for (let start = num2; start < num1; start++) {
    console.log(start)
  }
}
else {
  for (let start = num1; start <= num2; start++) {
    console.log(start)
  }
}
*/

console.log('###########')
// assign 2 ----------------------
let pop = document.querySelector('.pop-up');
let closeItem = document.querySelector('.close');
pop.style.display = 'none';

function displayPopUp() {
  pop.style.display = 'flex';
}
setTimeout(displayPopUp, 5000);

closeItem.addEventListener('click', ()=>{
  pop.style.display = 'none';
})

// assign 3 ----------------------
let number = document.querySelector('.number');
let counter = setInterval(countDown, 1000);

function countDown() {
  number.innerHTML -=1;
  if (number.innerHTML == 0) {
    clearInterval(counter)
    /**
    ---- this is for assign 4 & 5 ---- if you remove the comment it will run and open elzero site at 0 second in the same page
     */

    window.open('https://elzero.org/','_blank', 'width = 500, height = 500') // change _blank to _slef if you want .......
  }
}

