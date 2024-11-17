let n = 5;

for (let i = n; i > 0; i--) {
  let spaces = " ".repeat(n - i);
  let stars = "*".repeat(2 * i - 1);
  console.log(spaces + stars);
}

for (let i = 2; i <= n; i++) {
  let spaces = " ".repeat(n - i);
  let stars = "*".repeat(2 * i - 1);
  console.log(spaces + stars);
}
