// Get references to the DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to create a new task
function createTask(taskText) {
    const li = document.createElement('li');

    // Create a span to display the task text
    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.onclick = function() {
        li.remove();  // Remove the task from the list when clicked
    };
    li.appendChild(deleteButton);

    // Add the task to the list
    taskList.appendChild(li);
}

// Event listener to add a new task when the button is clicked
addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        createTask(taskText);  // Create a new task
        taskInput.value = "";  // Clear the input field
    } else {
        alert("Please enter a task!");  // Alert if input is empty
    }
});

// Optional: Allow the user to press Enter to add a task
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTaskButton.click();
    }
});
