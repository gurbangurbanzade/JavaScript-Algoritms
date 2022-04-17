// 2den cox tam ededin en boyuk bolenini tapin
let arr = [4, 4, 8];
let i;
let j;
let z;
let ebob = 1;

for (i = 0; i <= arr.length; i++) {
  for (j = 0; j <= arr.length; j++) {
    if (arr[i] < arr[j]) {
      if (arr[j] % arr[i] == 0) {
        tap();
      } else {
        break;
      }
    }
  }
}

function tap() {
  for (z = 0; z <= arr.length; z++)
    if (arr[z] % arr[i] !== 0) {
      ebob = 1;
      return console.log("ebob ebob 1");
    } else if (arr[z] < arr[i]) {
      ebob = arr[z];
      return console.log(`ebob ${arr[z]}`);
    } else if (arr[z] > arr[i]) {
      ebob = arr[i];
      return console.log(`ebob ${arr[i]}`);
    } else {
      if (arr[i] == arr[z]) {
        if (i == z) {
          break;
        } else {
          ebob = arr[i];
          return console.log(`ebob ${arr[i]}`);
        }
      }
    }
  console.log(ebob);
}
