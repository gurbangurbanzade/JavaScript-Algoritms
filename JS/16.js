// 2den cox tam ededin ekobunu tapmaq

function ekob(a, b) {
  if (a < b) {
    for (let i = b; i <= a * b; i++) if (i % a == 0 && i % b == 0) return i;
  } else
    for (let i = a; i <= a * b; i++) if (i % a == 0 && i % b == 0) return i;
}

console.log(ekob(35, 48));
