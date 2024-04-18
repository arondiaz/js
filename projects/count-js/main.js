const sum = document.querySelector("#increment");
const dec = document.querySelector("#decrement");
const count = document.querySelector("#counter");

let counter = 0;
sum.addEventListener("click", () => {
  counter++;
  count.innerText = "Count " + counter;
});

dec.addEventListener("click", () => {
  counter--;
  count.innerText = "Count " + counter;
});
