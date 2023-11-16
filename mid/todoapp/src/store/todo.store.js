import { Todo } from "../todos/models/todo.models";

const Filters = {
  All: "all",
  Completed: "Completed",
  Pending: "Pending",
};

const state = {
  todos: [new Todo("learn css"), new Todo("learn js")],
  filter: Filters.All,
};

const initStore = () => {
  console.log(state);
  console.log("init store :)");
};

const loadStore = () => {
  throw new Error("Not implemented");
};

const getTodo = (filter = Filters.All) => {
  throw new Error("Not implemented");
};

const addTodo = (description) => {
  throw new Error("Not implemented");
};

const changeTodo = (todoId) => {
  throw new Error("Not implemented");
};

const deleteTodo = (todoId) => {
  throw new Error("Not implemented");
};

const deleteCompleted = () => {
  throw new Error("Not implemented");
};

const setFilter = (newFilter = Filters.All) => {
  throw new Error("Not implemented");
};

const getCurrentFilter = () => {
  throw new Error("Not implemented");
};

export default {
  initStore,
  loadStore,
  getTodo,
  addTodo,
  changeTodo,
  deleteTodo,
  deleteCompleted,
  setFilter,
  getCurrentFilter,
};
