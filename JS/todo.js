$(function () {
  const todoForm = $(".todo_form");
  const todoInput = $("#todo_input");
  const listBox = $("#list_container");

  const TODO_KEY = "todo_items";

  let todo_items = JSON.parse(localStorage.getItem(TODO_KEY)) || [];

  function saveTodo() {
    localStorage.setItem(TODO_KEY, JSON.stringify(todo_items));
  }

  function deleteTodo(index) {
    todo_items.splice(index, 1);
    saveTodo();
  }

  function handleDeleteBtn() {
    const list = $(this).parent();
    const index = todo_items.findIndex((todo) => todo.id === list.attr("id"));
    deleteTodo(index);
    list.remove();
  }

  function createTodo(todoValue) {
    const id = Date.now().toString();
    const listItem = $("<li>").attr("id", id);
    const listValue = $("<span>").text(todoValue);
    const deleteBtn = $("<button>").text("🗑️").click(handleDeleteBtn);

    listItem.append(listValue);
    listItem.append(deleteBtn);
    listBox.append(listItem);

    const newTodo = { id, value: todoValue };
    todo_items.push(newTodo);
    saveTodo();
  }

  function handleTodoSubmit(e) {
    e.preventDefault();
    const todoValue = todoInput.val().trim();
    if (todoValue === "") return;
    createTodo(todoValue);
    todoInput.val("");
    todoInput.focus();
  }

  function loadTodo() {
    todo_items.forEach((todo) => createTodo(todo.value));
  }

  todoForm.submit(handleTodoSubmit);

  if (todo_items.length !== 0) {
    loadTodo();
  }
});
