'use strict';

/* 

### **Project: Interactive To-Do List**

**Objective**: Build a web-based to-do list application that allows users to add tasks, mark them as complete, and delete them.

#### **Features to Implement**:
1. **Add Tasks**: Implement a feature where users can enter a task in an input field and add it to the list by clicking an 'Add' button or pressing 'Enter'.
2. **Mark Tasks as Complete**: Allow users to click on a task to mark it as complete, changing its appearance to indicate its status.
3. **Delete Tasks**: Add a 'Delete' button to each task that, when clicked, will remove the task from the list.
4. **Filter Tasks**: Create buttons to filter tasks by all, active, or completed.

#### **Steps to Follow**:

**Step 1: HTML Structure**
- Create a basic HTML page with an input field, an 'Add' button, and an empty list for the tasks.
- Add buttons for filtering tasks.

**Step 2: JavaScript Interactivity**
- Write JavaScript to handle the 'Add' button click and 'Enter' keypress events to add tasks to the list.
- Implement event listeners for tasks to toggle their completed state when clicked.
- Write the logic for the 'Delete' button to remove tasks from the list.

**Step 3: Task Filtering**
- Add event listeners to filter buttons to show different sets of tasks based on their status.

**Step 4: Styling**
- Use CSS to style the completed tasks differently from the active ones.

**Step 5: Testing**
- Test each feature thoroughly to ensure it works as expected.

By following these steps, you'll be able to practice DOM manipulation and event handling. Start with the HTML structure, then gradually add interactivity with JavaScript, and finally, style your application with CSS. If you get stuck or need further guidance on a specific step, feel free to ask. Happy coding! 🚀
*/

document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('addTask');
  const newTaskInput = document.getElementById('newTask');
  const taskList = document.getElementById('taskList');

  addButton.addEventListener('click', addTask);
  newTaskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addTask();
    }
  });
});

function addTask() {
  const taskText = newTaskInput.value.trim();
  if (taskText) {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;
    listItem.addEventListener('click', toggleTask);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', deleteTask);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    newTaskInput.value = '';
  }
}

function toggleTask(e) {
  e.target.classList.toggle('completed');
}

function deleteTask(e) {
  e.stopPropagation();
  taskList.removeChild(e.target.parentElement);
}

document.getElementById('filterAll').addEventListener('click', function () {
  filterTasks('all');
});
document.getElementById('filterActive').addEventListener('click', function () {
  filterTasks('active');
});
document
  .getElementById('filterCompleted')
  .addEventListener('click', function () {
    filterTasks('completed');
  });

function filterTasks(filter) {
  const tasks = taskList.childNodes;
  tasks.forEach(task => {
    switch (filter) {
      case 'all':
        task.style.display = '';
        break;
      case 'active':
        if (task.classList.contains('completed')) {
          task.style.display = 'none';
        } else {
          task.style.display = '';
        }
        break;
      case 'completed':
        if (!task.classList.contains('completed')) {
          task.style.display = 'none';
        } else {
          task.style.display = '';
        }
        break;
    }
  });
}
