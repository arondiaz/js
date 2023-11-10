dinero1 = prompt("¿Cuánto dinero tienes?");

console.log(dinero1);

if (dinero1 >= 0.6 && dinero1 < 1) {
  console.log(`Comprate el de agua y te sobra ${dinero1 - 0.6} `);
} else if (dinero1 >= 1 && dinero1 < 1.6) {
  console.log(`Comprate el de crema y te sobra ${dinero1 - 1} `);
} else if (dinero1 >= 1.6 && dinero1 < 1.7) {
  console.log(`Comprate el bombom helado y te sobra ${dinero1 - 1.6} `);
} else if (dinero1 >= 1.7 && dinero1 < 1.8) {
  console.log(`Comprate el bombom helado xl y te sobra ${dinero1 - 1.7} `);
} else if (dinero1 >= 1.8 && dinero1 < 2.9) {
  console.log(`Comprate un Chomp y te sobra ${dinero1 - 1.8}`);
} else if (dinero1 >= 2.9) {
  console.log(`Comprate 1/4 o con confites y te sobra ${dinero1 - 2.9} `);
} else {
  console.log(`No te alcanza`);
}
