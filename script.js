document.addEventListener("DOMContentLoaded", function() {

    
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Initialize tasks from local storage or set to an empty array
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Function to render tasks from the array
    function loadTasks() {
        tasks.forEach(taskText => addTask(taskText, false));
    }

    // Function to add a task
    function addTask(taskText = taskInput.value.trim(), save = true) {
        if (taskText === "") {
            window.alert("Please enter a task.");
            return; // Exit the function if no task text
        }

        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        const newButton = document.createElement("button");
        newButton.textContent = "Remove";
        newButton.classList.add("remove-btn");

        // Remove the task from both the DOM and the array
        newButton.addEventListener("click", () => {
            taskList.removeChild(listItem);
            tasks = tasks.filter(task => task !== taskText);
            updateLocalStorage();
        });

        listItem.appendChild(newButton);
        taskList.appendChild(listItem);
        taskInput.value = ""; // Clear the input field

        if (save) {
            tasks.push(taskText);
            updateLocalStorage();
        }
    }

    // Function to update local storage with the current tasks array
    function updateLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Add event listeners for adding tasks
    addButton.addEventListener("click", () => addTask());

    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Load tasks from local storage when the page loads
    loadTasks();
});
