//Beş ədəddən ən böyüyü tapmaq üçün JavaScript şərti ifadəsini yazın. Nəticəni göstərmək üçün xəbərdarlıq qutusunu göstərin.
let a = prompt("1-ci ededi daxil edin");
let b = prompt("2-ci ededi daxil edin");
let c = prompt("3-cu ededi daxil edin");
let d = prompt("3-cu ededi daxil edin");
let e = prompt("3-cu ededi daxil edin");

let arr = [];
arr[0] = a;
arr[1] = b;
arr[2] = c;
arr[3] = d;
arr[4] = e;
console.log("en boyuk eded " Math.max.apply(Math, arr));
