const paises = [];

const nuevoPais = (pais) =>
  new Promise((resolve) => {
    setTimeout(() => {
      paises.push(pais);
      resolve(`agregado ${pais}`);
    }, 3000);
  });

// lo que se pasa como parametro en el .then() es lo que esta en el resolve()
nuevoPais("Peru")
  .then((result) => {
    console.log(result);
    console.log(paises);
    return nuevoPais("Bolivia");
  })
  .then((result) => {
    console.log(result);
    console.log(paises);
  });
