const btns = document.querySelectorAll(".btn");
const input = document.querySelector(".input");

let newInp = "";
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    try {
      if (e.target.innerHTML == "=") {
        newInp = eval(newInp);
        input.value = newInp;
      } else if (e.target.innerHTML == "C") {
        newInp = "";
        input.value = newInp;
      } else if (e.target.innerHTML == "--") {
        newInp = newInp - 1;
        input.value = newInp;
      } else if (e.target.innerHTML == "%") {
        newInp = newInp / 100;
        input.value = newInp;
      } else {
        console.log(e.target);
        console.log("Button is clicked.");
        newInp += e.target.innerHTML;
        input.value = newInp;
      }
    } catch (error) {
      console.error("Error:", error.message);
      newInp = "Error";
      input.value = newInp;
      alert(error.message);
    }
  });
});
