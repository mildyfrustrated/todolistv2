const taskButton = document.getElementById('taskButton');
const inputField = document.getElementById('infield');
const list = document.getElementById('list');

loadingtasks();

// for those who want to sneak into inspect element
console.log("javascript is pretty annoying, setting up the saving function needed a tutorial alone");
console.log("i do not enjoy the syntax very much and at times it becomes a mess of parenthesis and brackets with functions inside functions inside parenthesis.");
console.log("or i just suck at coding");



function addNewTask() {
    const text = inputField.value.trim();

    if (text) {
        MakeElement(text);

        inputField.value = '';

        savingtasks()

    } else {
        alert("input a task");
    }
}

taskButton.addEventListener('click', addNewTask);

function MakeElement(text) {
    const item = document.createElement('li');
    item.textContent = text;
    list.appendChild(item);

    item.addEventListener('click', function() {
        list.removeChild(item);
        savingtasks();
    });
}

function savingtasks() {
    let tasklist = [];
    list.querySelectorAll('li').forEach(function(itemstuff) {
        tasklist.push(itemstuff.textContent.trim());
    });

    localStorage.setItem('tasklist', JSON.stringify(tasklist));
}

function loadingtasks() {
    const tasklist = JSON.parse(localStorage.getItem('tasklist')) || [];

    tasklist.forEach(MakeElement);
}

