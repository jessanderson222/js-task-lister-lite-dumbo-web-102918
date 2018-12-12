
// selecting the DOM elements that I need
let allTasks = document.querySelector("#tasks")
let taskForm = document.getElementById('create-task-form')

// adding a submit handler to the form
taskForm.addEventListener('submit', addTaskToList)

function addTaskToList(event) {
  event.preventDefault();
  const newTask = document.createElement("li")
  newTask.className = "task"
  newTask.innerHTML = `<p>${document.querySelector('#new-task-description').value} <button type="button">X</button></p>`
  let deleteButton = newTask.querySelector('button')
  deleteButton.addEventListener('click', function(event) {
    event.target.parentNode.parentNode.remove()
  })
  allTasks.prepend(newTask)
};
























//
// function getInput(){
//   const input = document.querySelector('#new-task-description').value
//   return input
// };
//

// function submit(){
//   document.getElementById('create-task-form').addEventListener("submit", addTaskToList);
//   //add event addEventListener
//   //callback function to do whatever
// };
// allTasks.addEventListener("click", function(event){
//   if (event.target.className === "delete"){
//     deleteElement(event)
//   }
// })
// submit()

//document.getElementsByTagName('input')[1].addEventListener("click", addTaskToList);
