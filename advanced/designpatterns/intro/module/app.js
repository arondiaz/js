//Module - Patron de organización de código
// es el mas usado en js, dividir los archivos por funcionalidad y exportarlos.
// antes de es6 se usaba de otra forma ya que no se podia exportar. Accedian de otro archivo: mostrarCliente.deudor  y en la funcion se ponia return deudor.
const mostrarCliente = (nombre) => {
    let deudor = "Pepe"
  console.log(nombre);
};

export default mostrarCliente;
