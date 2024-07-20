

document.addEventListener("DOMContentLoaded", function() {

    
    const addButton = document.getElementById("add-task-btn");

    const taskInput = document.getElementById("task-input");

    const taskList  = document.getElementById("task-list");
    
    
    function addTask() {
        
        let taskText = taskInput.value.trim();

        if (taskText === ""){
            
            window.alert("PLS Enter A Task.")
        }else {

            const listItem = document.createElement("li");
            
            listItem.textContent =taskText;

            const newButton = document.createElement("button");

            newButton.textContent = "Remove";

            newButton.classList.add("remove-btn");

            newButton.addEventListener("click", ()=> {
                
                taskList.removeChild(listItem);
            })

            listItem.appendChild(newButton);

            taskList.appendChild(listItem);

            taskInput.value = " ";
        }
    }

    addButton.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", (event)=> {
        if(event.key === "Enter"){
            addTask();
        }else {
            return
        }
    });
})