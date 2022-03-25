//Üç ədədin hasilinin işarəsini tapmaq üçün JavaScript şərti ifadəsini yazın. Göstərilən işarə ilə xəbərdarlıq qutusunu göstərin.

let a = prompt("1-ci ededi daxil edin");
let b = prompt("2-ci ededi daxil edin");
let c = prompt("3-cu ededi daxil edin");
let hasil = a * b * c;
0;
if (hasil > 0) {
  alert("hasilin isaresi: + ");
} else if (hasil < 0) {
  alert("hasilin isaresi: - ");
} else {
  alert("hasil 0-a beraberdir");
}
