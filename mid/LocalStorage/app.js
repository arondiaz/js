// localStorage
// persisten los datos en el navegador, solamente se almacenan strings (aunque si declaramos un objeto o array y usamos stringify se convierte en string)
// setItem, añadir
//nombre: key, Aron: value
localStorage.setItem("nombre", "Aron");

//almacenar objeto en localStorage
const user = {
  name: "Pepe",
  mail: "pepe@mail.com",
};

const usuarioString = JSON.stringify(user);

//usuario: key, usuarioString: value
localStorage.setItem("usuario", usuarioString);





//sessionStorage
// al cerrar el navegador los datos se pierden

sessionStorage.setItem("frame", "Astro");






//obtener datos de localStorage, getItem
// usar la "key"
const data = localStorage.getItem("nombre");
console.log(data);


const dataUser = localStorage.getItem("usuario");
//parse le da formato
console.log(JSON.parse(dataUser));