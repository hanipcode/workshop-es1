"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

console.log("test another");

function penjumlahan(a, b) {
  return a + b;
}

function kuadrat(a) {
  return a * a;
}

var filterNegatif = [1, 2, -3, 4].filter(function (nilai, index) {
  console.log(nilai, index);
  return nilai > 0;
});

var Mathematic = function Mathematic() {
  _classCallCheck(this, Mathematic);

  _defineProperty(this, "x", 5);

  _defineProperty(this, "y", 6);

  _defineProperty(this, "arrayKu", [1, 2, 3]);
};

var mat = new Mathematic();
console.log(mat.arrayKu);