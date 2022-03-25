//1-dən 100-ə qədər tam ədədləri təkrarlayan JavaScript proqramı yazın. Lakin üçə qatlar üçün rəqəm əvəzinə "Fizz" və beşin qatları üçün "Buzz" yazın. Həm üç, həm də beşin qatları olan nömrələr üçün "FizzBuzz" yazın
let i;

for (i = 1; i < 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
    continue;
  } else if (i % 3 == 0) {
    console.log("Fizz");
    continue;
  } else if (i % 5 == 0) {
    console.log("Buuzz");
    continue;
  }
  console.log(i);
}
