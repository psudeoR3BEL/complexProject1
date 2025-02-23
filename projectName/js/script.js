document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const listItem = document.createElement('li');

            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            taskSpan.addEventListener('click', toggleComplete);
            listItem.appendChild(taskSpan);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', deleteTask);
            listItem.appendChild(deleteBtn);

            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    }

    function deleteTask(event) {
        event.target.parentNode.remove();
    }

    function toggleComplete(event) {
      event.target.classList.toggle('completed');
    }
});