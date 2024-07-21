document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('button');
    const taskInput = document.querySelector('.text');
    const taskList = document.querySelector('.list');

    // Function to add a new task
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement('li');

            // Create task text span
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            taskSpan.addEventListener('click', () => {
                taskSpan.classList.toggle('completed');
            });

            // Create delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete';
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(li);
            });

            li.appendChild(taskSpan);
            li.appendChild(deleteButton);
            taskList.appendChild(li);
            taskInput.value = '';
        }
    };

    addButton.addEventListener('click', addTask);

    // Add task when 'Enter' key is pressed
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
