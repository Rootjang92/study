const todoForm = document.querySelector('.js-toDoForm'),
      todoInput = todoForm.querySelector('input'),
      todoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

let toDos = [];

function deleteTodo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  todoList.removeChild(li);
  const cleanTodos = toDos.filter(todo => {
    return todo.id !== parseInt(li.id);
  })
  toDos = cleanTodos;
  saveTodos();
}

function saveTodos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintTodo(text) {
  const li = document.createElement("li");
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = "❌";
  deleteBtn.addEventListener('click', deleteTodo);
  const span = document.createElement('span');
  const newId = toDos.length + 1;
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(deleteBtn);
  li.id = newId
  todoList.appendChild(li);
  const todoObj = {
    text: text,
    id: newId,
  };
  toDos.push(todoObj);
  saveTodos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = todoInput.value;
  paintTodo(currentValue);
  todoInput.value = "";
}

function loadTodo() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedTodos = JSON.parse(loadedToDos);
    parsedTodos.forEach(todo => {
      paintTodo(todo.text);
    })
  }
}

function init() {
  loadTodo();
  todoForm.addEventListener("submit", handleSubmit);
}

init();