//İki tam ədədi qəbul edən və daha böyük olanı göstərən JavaScript proqramı yazın.
let a = prompt("1-ci ededi daxil edin");
let b = prompt("2-ci ededi daxil edin");
if (a > b) {
  alert(`${a} ededi ${b} ededinden boyukdur`);
} else if (b > a) {
  alert(`${b} ededi ${a} ededinden boyukdur`);
} else {
  alert(`daxil etdiyiniz ededler bir birine beraberdir`);
}
