document.addEventListener('DOMContentLoaded', function() {
    const taskList = document.getElementById('task-list');
    const completedTasks = document.getElementById('completed-tasks');
    const pendingTasks = document.getElementById('pending-tasks');

    function loadTasks() {
        return JSON.parse(localStorage.getItem('tasks')) || [];
    }

    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function renderTasks() {
        const tasks = loadTasks();
        taskList.innerHTML = '';
        let completedCount = 0;

        tasks.forEach((task, index) => {
            const taskElement = document.createElement('li');
            taskElement.textContent = task.name;

            if (task.completed) {
                taskElement.classList.add('completed');
                completedCount++;
            }

            taskElement.addEventListener('click', () => {
                tasks[index].completed = !tasks[index].completed;
                saveTasks(tasks);
                renderTasks();
            });

            taskList.appendChild(taskElement);
        });

        completedTasks.textContent = completedCount;
        pendingTasks.textContent = tasks.length - completedCount;
    }

    renderTasks();
});
