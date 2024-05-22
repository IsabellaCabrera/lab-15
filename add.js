const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
let task = ""; 
const taskList = JSON.parse(localStorage.getItem('tasks')) || []; 

taskInput.addEventListener("input", (e) => {
    task = e.target.value.trim();
});


taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    if (task) {
        
        taskList.push({
            name: task,
            completed: false
        });

        
        window.localStorage.setItem("tasks", JSON.stringify(taskList));

        
        document.querySelector("#message").textContent = 'TAREA guardada correctamente';
        
       
        taskInput.value = '';
        task = ''; 
    }
});

