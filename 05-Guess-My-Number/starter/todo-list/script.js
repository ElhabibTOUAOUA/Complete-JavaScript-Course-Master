'use strict';

// Selecting elements
const input = document.querySelector('.input');
const addBtn = document.querySelector('.add-btn');
const deleteBtn = document.querySelectorAll('.delete-btn');
let todoList = document.querySelector('.todos-list');

addBtn.addEventListener('click', function () {
  let todoInputValue = input.value;
  let todoItem = `<li class="todo-item">
  <p>${todoInputValue}</p>
  <button class="btn delete-btn">
    <i class="fa fa-trash"></i>
  </button>
  </li>`;
  todoList.insertAdjacentHTML('beforeend', todoItem);
  input.value = '';
});

todoList.addEventListener('click', function (event) {
  let todoItem = event.target.closest('.todo-item');
  console.log(todoItem);
  todoList.removeChild(todoItem);
});
