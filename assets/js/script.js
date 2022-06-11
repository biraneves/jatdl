const form = document.getElementById('task-input');
const tasksList = document.getElementById('tasks-list');
const taskInput = document.getElementById('task');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask(taskInput.value);
    form.reset();
});

function addTask(description) {
    const taskContainer = document.createElement('div');
    const newTask = document.createElement('input');
    const taskLabel = document.createElement('label');
    const taskDescription = document.createTextNode(description);

    newTask.setAttribute('type', 'checkbox');
    newTask.setAttribute('name', description);
    newTask.setAttribute('id', description);

    taskLabel.setAttribute('for', description);
    taskLabel.appendChild(taskDescription);

    taskContainer.classList.add('task-item');
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(taskLabel);

    tasksList.appendChild(taskContainer);
}