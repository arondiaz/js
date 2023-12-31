import html from "./app.html?raw";
import todoStore from "../store/todo.store";
import { renderTodos } from "./use-cases";

const ElementIDs = {

TodoList: ".todo-list",

}

export const App = (elementId) => {
  const displayTodos = () => {
    const todos = todoStore.getTodo(todoStore.getCurrentFilter());
    renderTodos(ElementIDs.TodoList, todos)

  };

  //funcion anonima autoinvocada
  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodos();
  })();
};
