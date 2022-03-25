//0-dan 15-ə qədər təkrarlanan JavaScript for loop yazın. Hər iterasiya üçün o, cari nömrənin tək və ya cüt olduğunu yoxlayacaq və ekrana mesaj göstərəcək.
let i;

for (i = 0; i < 15; i++) {
  let a = i % 2;

  if (a == 1) {
    console.log(i + " -tek ededdir");
  } else {
    console.log(i + " - cut ededdir");
  }
}
