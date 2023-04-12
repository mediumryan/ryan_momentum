'use strict';

const todoForm = document.querySelector('.todo_form');
const todoInput = document.querySelector('#todo_input');
const listBox = document.querySelector('#list_container');

const TODO_KEY = 'todos';

// 로컬스토리지에서 할 일 리스트 불러오기
let todos = JSON.parse(localStorage.getItem(TODO_KEY)) || [];

// 할 일 삭제 후 로컬스토리지에 저장하기
function saveTodos() {
localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

// 할 일 삭제하기
function deleteTodo (index) {
todos.splice(index, 1);
saveTodos();
}

// 할 일 삭제 버튼 핸들러
function handleDeleteBtn (e) {
const list = e.target.parentNode;
const index = todos.findIndex(todo => todo.id === list.id);
deleteTodo (index);
list.remove();
}

// 할 일 생성하기
function createTodo (todoValue) {
const listItem = document.createElement('li');
const listValue = document.createElement('span');
const deleteBtn = document.createElement('button');
const id = Date.now().toString();

listValue.textContent = todoValue;
deleteBtn.textContent = '🗑️';
deleteBtn.addEventListener('click', handleDeleteBtn);

listItem.appendChild(listValue);
listItem.appendChild(deleteBtn);
listItem.id = id;
listBox.appendChild(listItem);

const newTodo = { id, value: todoValue };
todos.push(newTodo);
saveTodos();
}

// 서브밋 핸들러
function handleTodoSubmit (e) {
e.preventDefault();
const todoValue = todoInput.value.trim();
if (todoValue === '') return;
createTodo (todoValue);
todoInput.value = '';
todoInput.focus();
}

// 초기 할 일 목록 불러오기
function loadTodos () {
todos.forEach(todo => createTodo (todo.value));
}

// 이벤트 리스너
todoForm.addEventListener('submit', handleTodoSubmit);

// 새로고침 방지
if (todos.length !== 0) {
loadTodos();
}