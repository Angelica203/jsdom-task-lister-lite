// document.addEventListener("DOMContentLoaded", () => {
//   const tasklist = newTask();
//   // your code here

// });
const main = document.querySelector("main-content")
console.log(main)
//defer gets the scr  downloads it, at the end of the html  is goig to excute(speed)
const taskForm = document.querySelector("#create-task-form")
const taskList = document.querySelector("#tasks")

taskForm.addEventListener("submit", function(e) {
  e.preventDefault()
  //have the user input
const newTask = document.querySelector("#new-task-description").value
//slap it on the documen
//where
taskList.innerHTML += `<li>${newTask}
<button data-action="delete"> x for delete </button>
</li>`


// const taskItem = document.createElement("li")
// taskItem.innerText = newTask

// taskList.appendChild(taskItem)
//reset the form if you have alot input

taskForm.reset()
}) 

taskList.addEventListener("click", function(e) {
console.log(e.target)
e.target
})