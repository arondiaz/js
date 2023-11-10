//Function

// function saludar() {
//   answer = prompt("Hi, how was your day?");
//   if (answer == "fine") {
//     alert("Nice");
//   } else {
//     alert("Come on!");
//   }
//   return answer
// }

// console.log(saludar());

function age() {
  age = prompt("How old are you?");
  if (age < 18) {
    return alert(`Tienes ${age} eres menor`);
  } else if (age > 18) {
    return alert(`Tienes ${age} eres mayor`);
  } else {
    return alert(`Eres un crack`);
  }
}

age();

//

function sum(num, num2) {
  let result = num + num2;
  console.log(result);
}

sum(15, 2);
sum(6, 4);
sum();


// funcion flecha
const rest = (num, num2) =>{
    let result = num - num2;
    console.log(result);

}

rest(10,4)