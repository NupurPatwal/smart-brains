//  Vowel Counter: Write a program that takes a string as input and counts the total number of vowels in it. Display the vowel count along with the input string.

let Vowels = "Nupur ";
let vowelsCount = 0;
for (let i = 0; i <= Vowels.length - 1; i++) {
  if (Vowels.charAt(i) == "u") {
    vowelsCount += 1;
  }
}
console.log(vowelsCount);
