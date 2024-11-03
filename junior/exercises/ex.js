function createMagicPotion(potions, target) {
  const best = [];

  for (let i = 0; i < potions.length; i++) {
    for (let j = i + 1; j < potions.length; j++) {
      if (potions[i] + potions[j] === target && potions[i] != potions[j]) {
        best.push([i, j]);
      }
    }
  }
  const [option1, option2] = best;
  if (best.length < 2) {
    return option1;
  } else {
    return option1[1] < option2[1] ? option1 : option2;
  }
}
//  const potions = [10, 20, 30, 40];
//  const target = 50;
const potions = [1, 2, 3, 4];
const target = 5;

console.log(createMagicPotion(potions, target));
