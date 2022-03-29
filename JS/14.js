// 2den cox tam ededin en boyuk bolenini tapin
let arr = [2, 8, 4];
let i;
let j;
let ebob;
for (i = 0; i < arr.length; i++) {
  for (j = 0; j < arr.length; j++) {
    if (arr[i] % arr[j] == 0) {
      ebob = arr[j];
      console.log(` ${ebob}`);
    }
  }
}
console.log(`ebob ${ebob}`);
