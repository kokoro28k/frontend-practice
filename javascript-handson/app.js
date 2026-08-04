const tooInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

addButton.addEventListener("click", function () {
  // テキストの取得
  const todoText = todoInput.value;

  // 入力が空の場合は何もしない
  if (todoList === "") return;

  const newTodoItem = document.createElement("li");

  newTodoItem.textContent = todoText;

  todoList.appendChild(newTodoItem);

  todoInput.value = "";
});
