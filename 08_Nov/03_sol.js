// 3. Find the Largest Number: Write a program that accepts three numbers as input and determines which one is the largest. Display the largest number with a message.

const num_01 = prompt("Enter the first number");
const num_02 = prompt("Enter the second number");
const num_03 = prompt("Enter the third number");
if (num_01 > num_02 && num_01 > num_03) {
  alert(` Congrats! ${num_01} is greater.`);
} else if (num_02 > num_03 && num_02 > num_01) {
  alert(` Kudos! ${num_02} is greater.`);
} else {
  alert(`Congratulations! ${num_03} is greater.`);
}
