let displayVal = "0";
let currentopt = "";
let storedVal = 0;

function screen() {
  document.getElementById("display").innerText = displayVal;
}

function appendtoScreen(value) {
  if (displayVal === "0" || displayVal === "-0") {
    displayVal = value;
  } else {
    displayVal += value;
  }
  screen();
}

function operate(operator) {
  currentopt = operator;
  storedVal = parseFloat(displayVal);
  displayVal = "0";
  screen();
}

function calResult() {
  const currentVal = parseFloat(displayVal);
  let result;

  switch (currentopt) {
    case "+":
      result = storedVal + currentVal;
      break;
    case "-":
      result = storedVal - currentVal;
      break;
    case "*":
      result = storedVal * currentVal;
      break;
    case "/":
      result = storedVal / currentVal;
      break;
  }

  displayVal = result.toString();
  currentopt = "";
  screen();
}

function clearScreen() {
  displayVal = "0";
  currentopt = "";
  screen();
}

// Event listeners
document
  .getElementById("btn7")
  .addEventListener("click", () => appendtoScreen("7"));
document
  .getElementById("btn8")
  .addEventListener("click", () => appendtoScreen("8"));
document
  .getElementById("btn9")
  .addEventListener("click", () => appendtoScreen("9"));
document
  .getElementById("btnDivide")
  .addEventListener("click", () => operate("/"));
document
  .getElementById("btn4")
  .addEventListener("click", () => appendtoScreen("4"));
document
  .getElementById("btn5")
  .addEventListener("click", () => appendtoScreen("5"));
document
  .getElementById("btn6")
  .addEventListener("click", () => appendtoScreen("6"));
document
  .getElementById("btnMultiply")
  .addEventListener("click", () => operate("*"));
document
  .getElementById("btn1")
  .addEventListener("click", () => appendtoScreen("1"));
document
  .getElementById("btn2")
  .addEventListener("click", () => appendtoScreen("2"));
document
  .getElementById("btn3")
  .addEventListener("click", () => appendtoScreen("3"));
document
  .getElementById("btnSubtract")
  .addEventListener("click", () => operate("-"));
document
  .getElementById("btn0")
  .addEventListener("click", () => appendtoScreen("0"));
document.getElementById("btnClear").addEventListener("click", clearScreen);
document.getElementById("btnEqual").addEventListener("click", calResult);
document.getElementById("btnAdd").addEventListener("click", () => operate("+"));
