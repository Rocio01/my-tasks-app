import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const taskForm = document.querySelector(".task-form");
const tasksUl = document.querySelector(".container");
const taskInput = document.querySelector(".task");

const loadEventListeners = () => {

  taskForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const li = document.createElement("li");
    li.className = "li-task text-center m-2 ";
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement("button");
    link.type = "submit";
    link.className = "btn delete-task float-end btn-danger ";
    link.innerHTML = 'Delete';
    li.appendChild(link);
    tasksUl.appendChild(li);
    taskInput.value = "";
     
  });


  tasksUl.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete-task")) {
      e.target.parentElement.remove();
    }
    
  })


  
}

loadEventListeners();

