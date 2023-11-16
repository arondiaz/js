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

export default {
  initStore,
};
