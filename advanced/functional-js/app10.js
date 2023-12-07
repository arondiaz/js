//Composition
const obtenerNombre = (info) => ({
  mostrarNombre() {
    console.log(`Nombre ${info.nombre}`);
  },
});

const guardarEmail = (info) => ({
  agregarEmail(email) {
    console.log("guardar email en ${info.nombre}");
    info.email = email;
  },
});

const obtenerEmail = (info) => ({
  mostrarEmail() {
    console.log(`correo ${info.email}`);
  },
});

const obtenerEmpresa = (info) => ({
    mostrarEmpresa() {
        console.log(`Empresa ${info.empresa}`);
    },
})

const obtenerPuesto = (info) => ({
    mostrarPuesto() {
        console.log(`Puesto ${info.puesto}`);
    },
})

function Cliente(nombre, email, empresa) {
  let info = {
    nombre,
    email,
    empresa,
  };

  return Object.assign(
    info,
    obtenerNombre(info),
    guardarEmail(info),
    obtenerEmail(info),
    obtenerEmpresa(info)
  );
}

function Empleado(nombre, email, puesto) {
  let info = {
    nombre,
    email,
    puesto,
  };

  return Object.assign(
    info,
    obtenerNombre(info),
    guardarEmail(info),
    obtenerEmail(info),
    obtenerPuesto(info)
  );
}

const cliente = Cliente("Pepe", "corre@gmail.com", "IBM");
cliente.mostrarNombre();
cliente.agregarEmail("mail1@gmail.com");
cliente.mostrarEmpresa()

console.log("-------------------------");

const empleado = Empleado("Jorge", "empleado@gmail.com", "Tester");
empleado.mostrarNombre();
empleado.agregarEmail("siete@gmail.com");
empleado.mostrarPuesto()