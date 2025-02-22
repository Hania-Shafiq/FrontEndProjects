let todoList = JSON.parse(localStorage.getItem("todoList"))||[
    {item:'Buy Milk',dueDate: '4/10/2023'}, 
    {item:'Go to College', dueDate:'5/10/23'}
];

let displayElement = document.querySelector(".todo-container");
let inputElement = document.querySelector("#todo-input");
let dateElement = document.querySelector("#todo-date");

displayItems();

function addTodo() {
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    
    if (todoItem.trim() !== '') {  // Empty input handle
        todoList.push({item:todoItem,dueDate:todoDate});
        localStorage.setItem("todoList",JSON.stringify(todoList));
        inputElement.value = '';
        dateElement.value='';

        displayItems();
    }
}

function displayItems() {
    displayElement.innerHTML = '';  // innerHtml → innerHTML fix

    let newHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        // let item=todoList[i].item;
        // let dueDate=todoList[i].dueDate;
        //object destructuting
        let{item,dueDate}=todoList[i];
        newHtml += `
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class="btn-delete" onclick="deleteTodo(${i})"; displayItems()">Delete</button>
  
        `;
    }

    displayElement.innerHTML = newHtml;  // containerElement → displayElement
}

function deleteTodo(index){
    todoList.splice(index,1);
    localStorage.setItem("todoList",JSON.stringify(todoList));
    displayItems();
}
