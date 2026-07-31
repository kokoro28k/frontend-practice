// 1.ToDoリストのデータ構造
let todos = [
  { id: 1, text: "JavaScriptを学ぶ", completed: true },
  { id: 2, text: "Reactを学ぶ", completed: false },
  { id: 3, text: "Next.jsを学ぶ", completed: false },
];

// 2. 未完了のToDoだけをフィルタリングする関数
function getIncompleteTodos(todoList) {
  return todoList.filter((todo) => !todo.completed);
}

console.log("未完了のToDo:", getIncompleteTodos(todos));

// 出力
未完了のToDo: [
  { id: 2, text: "Reactを学ぶ", completed: false },
  { id: 3, text: "Next.jsを学ぶ", completed: false },
];

// 3.指定されたIDのToDoを完了済みにする関数
function completetodo(todoList, todoId) {
  return todoList.map((todo) => {
    if (todo.id === todoId) {
      return { ...todo, completed: true };
    }
    return todo;
  });
}

todos = completeTodo(todos, 2);
console.log("更新後のToDoリスト:", todos);

// 出力
更新後のToDoリスト: [
  { id: 1, text: "JavaScriptを学ぶ", completed: true },
  { id: 2, text: "Reactを学ぶ", completed: true },
  { id: 3, text: "Next.jsを学ぶ", completed: false },
];
