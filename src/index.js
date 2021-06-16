import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {
  addTaskLs, getTasksLs, removeTaskLs, clearTaskLs,
} from './storage';

const taskForm = document.querySelector('.task-form');
const tasksUl = document.querySelector('.container');
const taskInput = document.querySelector('.task');
const filter = document.querySelector('.filter-task');
const clearButton = document.querySelector('.clear-task-button');

const loadEventListeners = () => {
  window.addEventListener('DOMContentLoaded', getTasksLs);

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const li = document.createElement('li');
    li.className = 'li-task text-center m-2 ';
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('button');
    link.type = 'submit';
    link.className = 'btn delete-task float-end btn-danger ';
    link.innerHTML = 'Delete';
    li.appendChild(link);
    tasksUl.appendChild(li);
    addTaskLs(taskInput.value);
    taskInput.value = '';
  });

  tasksUl.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-task')) {
      if (confirm('Are you sure')) {
        e.target.parentElement.remove();
        removeTaskLs(e.target.parentElement);
      }
    }
  });

  clearButton.addEventListener('click', () => {
    while (tasksUl.firstChild) {
      tasksUl.removeChild(tasksUl.firstChild);
    }
    // tasksUl.innerHTML = "";
    clearTaskLs();
  });
};

filter.addEventListener('keyup', (e) => {
  const text = e.target.value.toUpperCase();

  document.querySelectorAll('.li-task').forEach((li) => {
    const input = li.firstChild.textContent;
    if (input.toUpperCase().indexOf(text) !== -1) {
      li.style.display = 'block';
    } else {
      li.style.display = 'none';
    }
  });
});

loadEventListeners();
