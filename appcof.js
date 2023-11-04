dinero1 = prompt("¿Cuánto dinero tienes?");

if (dinero1 >= 0.6 && dinero1 < 1) {
  console.log(`Comprate el de agua y te sobra ${dinero1} - 0.6`);
} else if (dinero1 >= 1 && dinero1 < 1.6) {
  console.log("Comprate el de crema");
} else if (dinero1 >= 1.6 && dinero1 < 1.7) {
  console.log("Comprate el bombom helado");
} else if (dinero1 >= 1.7 && dinero1 < 1.8) {
  console.log("Comprate el bombom helado xl");
} else if (dinero1 >= 1.8 && dinero1 < 2.9) {
  console.log("Comprate un Chomp");
} else if (dinero1 >= 2.9) {
  console.log("Comprate 1/4 o con confites");
} else {
  console.log("No te alcanza");
}
