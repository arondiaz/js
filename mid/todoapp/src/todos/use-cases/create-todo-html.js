export const createTodoHTML = (todo) => {
  if (!todo) throw new Error("A todo object is required");

  const html = ` <h1> ${todo.description} </h1>`;

  const liElement = document.createElement("li");
  liElement.innerHTML = html;
  return liElement;
};
