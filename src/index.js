
document.addEventListener("DOMContentLoaded", () => {

  const newTaskForm = document.getElementById("create-task-form");
  newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
  event.preventDefault();
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskUl = document.getElementById("tasks");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  let btn = document.createElement("button")
  btn.addEventListener("click", handleDelete)
  btn.textContent = "x" 
  newTask.appendChild(btn)

  appendNewTask(newTask);
  event.target.reset();
  
  console.log(newTask)
  document.getElementById("task").appendChild(newTask)
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};

function handleDelete (e){
    e.target.parentNode.remove}