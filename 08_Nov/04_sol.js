// Reverse a String: Create a program that takes a string as input and returns the reverse of that string. For example, if the input is "JavaScript", the output should be "tpircSavaJ".

let input = "javascript";
let newString = "";
for (let i = input.length - 1; i >= 0; i--) {
  newString += input[i];
}
// console.log(newString);
document.write(newString)
