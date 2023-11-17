import { createTodoHTML } from "./create-todo-html";

export const renderTodos = (elementId, todos = []) => {
  //todo referencia
  const element = document.querySelector(elementId);
  todos.forEach((todo) => {
    element.append(createTodoHTML(todo));
  });
};
