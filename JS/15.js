// arreyin en boyuk elementinin tapilmasi
let arr = [-12, -34, 0, 9, -56, -1, 1, 9, 6, 3];
let maxi;
let maxj;
let max;
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      console.log(`maximum ${arr[i]}`);
      maxi = arr[i];
      break;
    } else {
      console.log(`maximum ${arr[j]}`);
      maxj = arr[j];
      break;
    }
  }
}
if (maxi > maxj) {
  alert(`Ən böyük ədəd - ${maxi}`);
} else {
  alert(`Ən böyük ədəd - ${maxj}`);
}
