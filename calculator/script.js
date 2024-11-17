const btns = document.querySelectorAll(".btn");
const input = document.querySelector(".input");

let newInp = "";
let currentOperator = null; 
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    try {
      const clickedValue = e.target.innerHTML;

      // "Error" message on new input
      if (newInp === "Error" && !["C", "="].includes(clickedValue)) {
        newInp = "";
      }

      if (clickedValue === "=") {
        newInp = eval(newInp);
        input.value = newInp;
        currentOperator = null; // Reset operator after evaluation
      } else if (clickedValue === "C") {
        newInp = "";
        input.value = newInp;
        currentOperator = null; // Reset operator
      } else if (clickedValue === "--") {
        newInp = newInp - 1;
        input.value = newInp;
        currentOperator = null; // Reset operator
      } else if (clickedValue === "%") {
        newInp = newInp / 100;
        input.value = newInp;
        currentOperator = null; // Reset operator
      } else if (["+", "-", "*", "/"].includes(clickedValue)) {
        // Handle operators
        if (currentOperator) {
          // Replace the last operator with the new one
          newInp = newInp.slice(0, -1) + clickedValue;
        } else {
          // Append the operator
          newInp += clickedValue;
        }
        currentOperator = clickedValue; // Update the current operator
        input.value = newInp;
      } else {
        // Handle numbers or other inputs
        console.log("Button is clicked.");
        newInp += clickedValue;
        input.value = newInp;
        currentOperator = null; // Reset operator on number input
      }
    } catch (error) {
      console.error("Error:", error.message);
      newInp = "Error";
      input.value = newInp;
      alert(error.message);
    }
  });
});
