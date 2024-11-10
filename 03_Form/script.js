const fullName = document.querySelector("#fname");
const passWord = document.querySelector("#pword");
const myBtn = document.querySelector("#myButton");

myBtn.addEventListener("mouseenter", () => {
  if (fullName.value == "" || passWord.value == "") {
    if (fullName.value != "") {
      myBtn.textContent = "Ab Password 🧐";
    } else {
      myBtn.textContent = "Naam toh bhar 🤨";
    }
    myBtn.style.backgroundColor = "red";
    myBtn.style.color = "white";
    myBtn.style.top = Math.random() * 300 + "px";
    myBtn.style.left = Math.random() * 600 + "px";
  } else {
    myBtn.textContent = "Sabassh Bhai! 😍";
    myBtn.style.top = "40px";
    myBtn.style.left = "60px";
    myBtn.style.backgroundColor = "cornflowerblue";
    myBtn.style.color = "white";
  }
});
