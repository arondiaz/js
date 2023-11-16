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

//especifica que tipo de filtro y sino usa todos como defecto.
const getTodo = (filter = Filters.All) => {
  switch (filter) {
    case Filters.All:
      return [...state.todos];

    case Filters.Completed:
      return state.todos.filter((todo) => todo.done);

    case Filters.Pending:
      return state.todos.filter((todo) => !todo.done);

    default:
      throw new Error(`${filter} is not valid`);
  }
};

const addTodo = (description) => {
  if (!description) throw new Error("Not implemented");

  state.todos.push(new Todo(description));
};

const changeTodo = (todoId) => {
  state.todos = state.todos.map((todo) => {
    if (todo.id === todoId) {
      todo.done = !todo.done;
    }
    return todo;
  });
};

const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.id !== todoId);
};

const deleteCompleted = () => {
  state.todos = state.todos.filter((todo) => todo.done);
};

const setFilter = (newFilter = Filters.All) => {
  state.filter = newFilter;
};

const getCurrentFilter = () => {
  return state.filter;
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
