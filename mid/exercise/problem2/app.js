alumnos = [
  {
    nombre: "PEpe Juarez",
    mail: "pepej@gmail.com",
    materia: "Fisica",
  },
  {
    nombre: "C Michael",
    mail: "michj@gmail.com",
    materia: "Ingles",
  },
  { nombre: "Jorge Teo", mail: "jorgtj@gmail.com", materia: "Historia" },
  { nombre: "Kevin Powell", mail: "kpowellj@gmail.com", materia: "Fisica" },
  { nombre: "Mark Tower", mail: "markj@gmail.com", materia: "Literatura" },
  { nombre: "Katty Pea", mail: "katpj@gmail.com", materia: "Matematica" },
];

const boton = document.querySelector(".boton-confirmar")

boton.addEventListener("click", () => {
    let elementos = document.querySelectorAll(".semana");
    let semanasElegidas = document.querySelectorAll(".semana-elegida");

    elementos.forEach((semana, index) => {
        console.log(semana);
        console.log(semanasElegidas);
        semana.innerHTML = semanasElegidas[index].value;
    });
});

for (alumno of alumnos) {
    let nombre = alumno["nombre"];
    let email = alumno["mail"];
    let materia = alumno["materia"];
    let html = `    
      <div class="grid-item nombre">${nombre}</div>
      <div class="grid-item mail">${email}</div>
      <div class="grid-item materia">${materia}</div>
      <div class="grid-item semana">
          <select class="semana-elegida" name="" id="">
              <option value="1">Semana 1</option>
              <option value="2">Semana 2</option>
          </select>
      </div>
    `;

    document.querySelector(".container").innerHTML += html;
}