//Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
let i;
let sum = 0;
for (i = 3; i < 1000; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    //console.log(i);
    sum = sum + i;
  }
}
console.log(sum);
