// DOM Manipulation - Button Click: Add a button to an HTML page, and write JavaScript code that changes the background color of the page to blue when the button is clicked.

const btn = document.querySelector("button");
const body = document.querySelector("body");
btn.addEventListener("click", (event) => {
  console.log(event.target, "button is clicked");
  body.style.backgroundColor = "blue";
});
