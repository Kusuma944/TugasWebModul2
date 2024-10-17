let todoList = [];

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const task = todoInput.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    todoList.push(task);
    todoInput.value = ''; // Clear the input field
    renderTodoList();
}

function renderTodoList() {
    const todoListElement = document.getElementById('todo-list');
    todoListElement.innerHTML = ''; // Clear the current list

    todoList.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task}
            <div>
                <button class="edit-button" onclick="editTodo(${index})">Edit</button>
                <button class="delete-button" onclick="deleteTodo(${index})">Delete</button>
            </div>
        `;
        todoListElement.appendChild(li);
    });
}

function deleteTodo(index) {
    todoList.splice(index, 1); // Remove the task from the list
    renderTodoList();
}

function editTodo(index) {
    const newTask = prompt("Edit your task:", todoList[index]);

    if (newTask !== null && newTask.trim() !== "") {
        todoList[index] = newTask.trim(); // Update the task
        renderTodoList();
    } else {
        alert("Task cannot be empty.");
    }
}
