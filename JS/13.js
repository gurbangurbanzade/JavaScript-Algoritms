// rəqəm təxmin etmə oyunu
let req = Math.floor(Math.random() * 10);
let bal;
console.log(req);
alert(
  "Oyuna Xoş Gəlmisiniz. Kompüterin 1-dən 10-a kimi təxmin etdiyi rəqəmi tap və 100 AZN qazan. Başlamaq üçün OK düyməsini sıxın"
);
let i;
for (i = 0; i < 5; i++) {
  reqem = prompt(
    "Rəqəmi daxil edin. Səhv təxmin etsəniz mükafat 20 AZN azalacaq "
  );

  if (reqem == req) {
    alert(
      `   Təbrik edirik! Kompüterin təxmin etdiyi rəqəmi ${
        i + 1
      } dəfəyə taparaq.          
    <${(bal = 100 - i * 20)} AZN> QAZANDINIZ! 
    Kompüterin təxmin etdiyi rəqəm: ${req} idi`
    );

    break;
  } else if (reqem !== req) {
    if (i == 4) {
      alert(
        `Çox təəssüf. Şansınız Bitdi. Uduş məbləği <${(bal =
          100 - (i + 1) * 20)} AZN> Kompüterin təxmin etdiyi rəqəm: ${req} idi`
      );
    } else {
      alert(
        `Səhv tapdınız ${4 - i} şansınız qaldı. Uduş məbləği <${(bal =
          100 - (i + 1) * 20)} AZN>`
      );
    }
  }
}
