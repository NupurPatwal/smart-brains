// Hollow Left truangle;
let num = 5;
let pattern = "";
if (num > 1) {
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      if (j == 1 || j == i || i == num) {
        pattern += "* ";
      } else {
        pattern += "  ";
      }
    }
    pattern += "\n";
  }
  console.log(pattern);
} else {
  pattern = "Number must be greater than 1 to print star pattern.";
}
