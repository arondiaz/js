//
let ninety = 90;

// for(let i = 0; i <= ninety; i++){
//     console.log(i);
// }

// for(ninety; ninety >= 0; ninety-- ){
//     console.log(ninety);
// }

//Se ejecuta hasta que la variable ninety sea 100 y la variable usuario queda en 2 porque se esta declarando dentro del bucle y en cada iteracion vuelve a inicializar con 1.
// while(ninety < 100){
//     ninety++
//     let usuario = 1
//     usuario++
//     console.log(ninety);
//     console.log(usuario);
// }

// do {
//   ninety--;
//   console.log(ninety);
// } while (ninety > 50);



let lenguages = ["JavaScript", "Python", "Java", "C"];
let frameworks = ["React", "Laravel", "Vue", "Spring", lenguages];

for (let index in frameworks) {
  if (index == 4) {
    for (let lenguagesNames of lenguages) {
      console.log(lenguagesNames);
    }
  } else {
    console.log(frameworks[index]);
  }
}
