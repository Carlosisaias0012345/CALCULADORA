function addToScreen(value) {
  document.getElementById("screen").value += value;
}

function clearScreen() {
  document.getElementById("screen").value = "";
}

function calculate() {
  var input = document.getElementById("screen").value;
  var result = eval(input);
  document.getElementById("screen").value = result;
}
