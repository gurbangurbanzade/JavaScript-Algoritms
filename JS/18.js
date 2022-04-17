let arr = [1, 2, 3, 4, 5];

function randomArrTap(arr) {
  let newAr = [];
  for (let i = 0; i < arr.length; i++) {
    newAr[i] = arr[Math.floor(Math.random() * arr.length)];
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        if (newAr[i] == newAr[j]) return randomArrTap(arr);
      }
    }
  }
  console.log(newAr);
}
randomArrTap(arr);
