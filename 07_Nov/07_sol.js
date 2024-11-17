function printInvertedTriangle(rows) {
  for (let i = rows; i >= 1; i--) {
    let pattern = "";

    // Add spaces
    for (let j = 0; j < rows - i; j++) {
      pattern += " ";
    }

    // Add stars
    for (let k = 0; k < 2 * i - 1; k++) {
      pattern += "*";
    }

    console.log(pattern);
  }
}

printInvertedTriangle(5);