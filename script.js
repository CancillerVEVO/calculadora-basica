const numberButtons = document.getElementsByClassName("calculator-number");
// Referencia a los botones de operadores

const operatorButtons = document.getElementsByClassName("calculator-operator");

// Referencia a los botones de funciones
const clearButton = document.getElementById("calculator-clear-sign");
const equalsButton = document.getElementById("calculator-equals-sign");

// Referencia a la pantalla
const inputScreen = document.getElementById("calculator-input-screen");

// ASIGNAMOS EVENTO A CADA NUMERO
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", (event) => {
    const number = event.target.value;
    inputScreen.innerText += number;
  });
}

// ASIGNAMOS EVENTO A CADA OPERADOR
for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", (event) => {
    const operator = event.target.value;
    inputScreen.innerText += operator;
  });
}

// FUNCION PARA LIMPIAR INPUT
clearButton.addEventListener("click", () => {
  inputScreen.innerText = " ";
});

equalsButton.addEventListener("click", () => {
  try {
    const input = inputScreen.innerText;
    const result = parseInput(input);
    inputScreen.innerText = result;
  } catch (error) {
    inputScreen.innerText = "Error";
  }
});


function parseInput(input) {
  return eval(input);
}
