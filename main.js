// select elements 
let addTask = document.querySelector('.addTask');
let inputCell = document.querySelector('.inputCell input');
let deleteBtn = document.querySelector('.delete');
let formOfTasks = document.querySelector('.formOfTasks');
// ================
// make an empty array for tasks 
let tasksArray;
// ================
// check if there are information in the local storage 
if (localStorage.tasksArray != undefined) {
  tasksArray = JSON.parse(localStorage.tasksArray)
  displayTask()
}
else {
  tasksArray = [];
}
// ===============
// make a function to put the new task to the tasksArray
addTask.addEventListener('click',   function addTasks() {
  // console.log(inputCell.value);
  tasksArray.push(inputCell.value);
  // push it to local storage 
  localStorage.setItem('tasksArray', `${JSON.stringify(tasksArray)}`);
  clearForm()
  displayTask();
})
// ===============
// the function that dispaly tasks
function displayTask() {
  let cartona = ``;
  // console.log(JSON.parse(localStorage.tasksArray).length)
  for (let i = 0; i < tasksArray.length; i++) {
    cartona += `
    <div class="task">
    <div>${tasksArray[i]}</div>
    <div>
      <button onclick="deleteElement(${i})" class="delete">Delete</button>
    </div>
  </div>
    `
  }
  // console.log(cartona);
  formOfTasks.innerHTML = cartona;
}
// ================
// the function that clear form input
function clearForm() {
  inputCell.value = '';
}
// ================
// the function that delete element
function deleteElement(index) {
  tasksArray.splice(index, 1);
  console.log(index)
  localStorage.tasksArray = JSON.stringify(tasksArray);
  displayTask()
}
