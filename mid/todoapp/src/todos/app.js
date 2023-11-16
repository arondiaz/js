import html from "./app.html?raw"

export const App = (elementId) => {
  //funcion anonima autoinvocada
  (() => {
  
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
   
  })();
};
