const addBtn = document.getElementById("add");
const input = document.getElementById("input");
const error = document.getElementById("error");
const result = document.getElementById("todoList");

let todos = [];

window.addEventListener("load", () => {

    todos = JSON.parse(localStorage.getItem("todos")) || [];
    console.log("loaded: ", todos);
    todos.forEach(element => addTodo(element));
})

addBtn.addEventListener("click", () => {
    let todo = input.value;
    console.log("todo: ", todo);

    if (todo === '') {
        
        // alert("Todos should not br empty.");
        error.innerHTML = "Todos should not be empty.";
    } else {
        
        if (todos.includes(todo)) {
            
            // alert(`Todo already exists ${todo}`);
            error.innerHTML = `Todo already exists ${todo}`;
        } else {
            
            error.innerHTML = "";

            todos.push(todo);
            localStorage.setItem("todos", JSON.stringify(todos));
            addTodo(todo);

            input.value = "";
        }
    }
})

function addTodo(todo) {
    
    let paragraph = document.createElement("p");
    paragraph.innerText = todo;

    console.log("paragraph: ", paragraph);
    result.appendChild(paragraph);

    paragraph.addEventListener("click", () => {

        paragraph.style.textDecoration = "line-through";
        removeTodo(paragraph.innerText);
    })

    paragraph.addEventListener("dblclick", () => {

        removeTodo(paragraph.innerText);
        paragraph.remove();
    })
}

function removeTodo(todo) {
    
    let todoIndex = todos.indexOf(todo);
    console.log("todoIndex: ", todoIndex);

    if (todoIndex > -1) {
         
        todos.splice(todoIndex, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
    }
}