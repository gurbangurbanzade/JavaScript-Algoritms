//3 rəqəmdən ibarət armstrong ədədlərini tapmaq üçün JavaScript proqramı yazın. Redaktora gedin Qeyd: Üç rəqəmli Armstronq nömrəsi elə tam ədəddir ki, onun rəqəmlərinin kublarının cəmi ədədin özünə bərabər olsun. Məsələn, 371 Armstronq nömrəsidir, çünki 3**3 + 7**3 + 1**3 = 371.
let i;
let d;

for (i = 100; i < 999; i++) {
  i = i.toString();
  d = i.split("");
  if (Math.pow(d[0], 3) + Math.pow(d[1], 3) + Math.pow(d[2], 3) == i) {
    console.log(i);
  }
}
