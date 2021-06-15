const addTaskLs = (task) => {
  let tasks;
  if( localStorage.getItem("tasks") === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

const getTasksLs = () => {
  const tasksUl = document.querySelector(".container");

  let tasks;
  if( localStorage.getItem("tasks") === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
    tasks.forEach((task) => {
       const li = document.createElement("li");
       li.className = "li-task text-center m-2 ";
       li.appendChild(document.createTextNode(task));
       const link = document.createElement("button");
       link.type = "submit";
       link.className = "btn delete-task float-end btn-danger ";
       link.innerHTML = 'Delete';
       li.appendChild(link); 
       tasksUl.appendChild(li);       
    });
}
const removeTaskLs = (taskItem) => {
  let tasks;
  if(localStorage.getItem("tasks") === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  } 
  tasks.forEach((task, index) => {
    if(taskItem.textContent == task +"Delete" ){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
 
}

export {addTaskLs, getTasksLs, removeTaskLs}