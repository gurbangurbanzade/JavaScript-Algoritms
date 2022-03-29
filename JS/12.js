function yasHesabla(dogumili) {
  return 2022 - dogumili;
}

let yas = yasHesabla(1993);
//console.log(yas);

function pensiyaHesabla(dogumili, ad) {
  yas = yasHesabla(dogumili);
  let pen = 65 - yas;
  if (pen > 0) {
    console.log(`${ad} pensiyaya cixmaga ${pen} il qalib`);
  } else {
    console.log(`${ad} artiq pensiyaya cixmisiniz`);
  }
}

pensiyaHesabla(1997, "Gülşən");
