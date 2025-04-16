let task = document.getElementById("task");

let addButton = document.getElementById("add");

let taskList = document.getElementById("taskList");

let tasks = [];

addButton.addEventListener("click", function () {
    if (task.value) {
        tasks.push(task.value);
        task.value = "";
        renderTasks();
    } else {
        alert("Please enter a task.");
    }
    });

function renderTasks() {
    taskList.innerHTML = ""; 
    tasks.forEach(function (task, index) {
        let li = document.createElement("li");
        li.textContent = task;
        li.style.listStyle = "number";
        li.style.fontSize = "2vw";
        li.style.fontFamily = "Arial, sans-serif";
        // li.task.style.marginRight = "5vw";
    
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.style.marginLeft = "5vw";
        deleteButton.style.color = "white";
        deleteButton.style.cursor = "pointer";
        deleteButton.style.border = "none";
        deleteButton.style.borderRadius = "50%";
        deleteButton.style.backgroundColor = "red";
        deleteButton.style.hover = " transform: scale3d(1.9, 1.9, 1.9)";
        deleteButton.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.9)";

        deleteButton.addEventListener("click", function () {
            tasks.splice(index, 1);
            renderTasks();
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

