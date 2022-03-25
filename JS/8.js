//İki müsbət tam ədədin ən böyük ortaq bölənini (GCD) hesablamaq üçün JavaScript proqramını yazın
let a = 80;
let b = 96;
let i;
let c;

for (i = 1; i < a; i++) {
  if (a % i == 0 && b % i == 0) {
    //onsole.log(i);
    c = i;
  }
}
console.log(c);
