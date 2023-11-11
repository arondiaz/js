const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async () => {
  throw new console.error("no implementado");
};

const loadPreviousPage = async () => {
  throw new console.error("no implementado");
};

const onUserChanged = () => {
  throw new console.error("no implementado");
};

const reloadPage = async () => {
  throw new console.error("no implementado");
};

export default {
  loadNextPage,
  loadPreviousPage,
  onUserChanged,
  reloadPage,

  getUser: () => [...state.users],
  getCurrentPage: () => state.currentPage,
};
