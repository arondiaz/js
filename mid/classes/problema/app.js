//Necesidad de clases
//Esto no tiene sentido ya que todos los usuarios tienen las mimas claves y metodos.
//

usuario = {
  nombre: "Pepe",
  apellido: "Juarez",
  mail: "pepejs@gmail.com",
  imprimir() {
    //CORRECTO: cuando hacemos referencia al mismo objeto usamos this.
    console.log(`Nomber ${this.nombre} - Mail ${this.apellido}`);

    //NO RECOMENDABLE: funciona, pero no es recomendable ya que el nombre del objeto y las claves pueden cambiar.
    console.log(`Nomber ${usuario.nombre} - Mail ${usuario.apellido}`);

    //ERROR: usar las variables de esta forma no funciona, ya que nombre y apellido no estan en el mismo scope. estan fuera de las {}
    // console.log(`Nomber ${nombre} - Mail ${apellido}`);
  },
};

usuario2 = {
  nombre: "Kevin",
  apellido: "Powell",
  mail: "kevincss@gmail.com",
  imprimir() {
    console.log(`Nomber ${this.nombre} - Mail ${this.apellido}`);
  },
};

usuario3 = {
  nombre: "Arón",
  apellido: "Díaz",
  mail: "ad@gmai.com",
  imprimir() {
    console.log(`Nomber ${this.nombre} - Mail ${this.apellido}`);
  },
};

usuario.imprimir();
