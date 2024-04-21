//# 2
/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function anagram(text, text2) {
  if (text.length !== text2.length) {
    return false;
  }
  if (text === text2) {
    return false;
  }
  let diccionario1 = crearDiccionario(text);
  let diccionario2 = crearDiccionario(text2);

  if (sonDiccionariosIguales(diccionario1, diccionario2)) {
    return true;
  } else {
    return false;
  }
}

function crearDiccionario(texto) {
  let dic = {};
  for (let i = 0; i <= texto.length; i++) {
    let letra = texto[i];
    dic[letra] = (dic[letra] || 0) + 1;
  }
  console.log(dic);

  return dic;
}

function sonDiccionariosIguales(dic1, dic2) {
  // Obtener las claves de los diccionarios
  const keys1 = Object.keys(dic1);
  const keys2 = Object.keys(dic2);

  // Si los diccionarios tienen diferentes claves, no son iguales
  if (keys1.length !== keys2.length) {
    return false;
  }
  // Verificar que los valores asociados a cada clave sean iguales en ambos diccionarios
  for (let key of keys1) {
    if (dic1[key] !== dic2[key]) {
      return false;
    }
  }
  // Si pasó todas las verificaciones, los diccionarios son iguales
  return true;
}

console.log(anagram("amor", "amro"));
