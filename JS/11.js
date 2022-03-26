let a = 1010000011110011111111;
let b;
let arr;
let eded = 0;
b = a.toString();
arr = b.split("");
console.log(arr);
arr = arr.reverse();
console.log(arr);
console.log(arr.length + "uzunluqdu");
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 1) {
    eded = eded + Math.pow(2, i);
  }
}
console.log(eded + "---ededidir");
