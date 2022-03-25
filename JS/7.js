//Write a JavaScript program to construct the following pattern, using a nested for loop. Go to the editor

// *
// * *
// * * *
// * * * *
// * * * * *
let i;
let chr = "*";
for (i = 0; i < 6; i++) {
  console.log(chr);
  chr = "*" + chr;
}
