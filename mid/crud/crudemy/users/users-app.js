export const UserApp = async (element) => {
  element.innerHTML = "LOADING...";
  await usersStore.loadNextPage();
};
