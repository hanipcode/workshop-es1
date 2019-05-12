import { perkalian } from "./Matematik";
console.log(perkalian);

console.log("test another");

function penjumlahan(a, b) {
  return a + b;
}

function kuadrat(a) {
  return a * a;
}

const filterNegatif = [1, 2, -3, 4].filter((nilai, index) => {
  console.log(nilai, index);
  return nilai > 0;
});

class Mathematic {
  x = 5;
  y = 6;
  arrayKu = [1, 2, 3];
}

const mat = new Mathematic();

console.log(mat.arrayKu);
