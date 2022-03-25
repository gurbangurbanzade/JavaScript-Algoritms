//Aşağıdakı tələbələrin orta qiymətlərini hesablayan JavaScript proqramı yazın. Sonra bu ortalama müvafiq qiyməti müəyyən etmək üçün istifadə olunur.
let a = 80;
let b = 77;
let c = 88;
let d = 95;
let e = 68;

let orta = (a + b + c + d + e) / 5;
console.log(orta);

if (orta < 100 && orta > 90) {
  console.log("A");
} else if (orta < 90 && orta > 80) {
  console.log("B");
} else if (orta < 80 && orta > 70) {
  console.log("C");
} else if (orta < 70 && orta > 60) {
  console.log("D");
} else if (orta < 60 && orta > 50) {
  console.log("E");
}
