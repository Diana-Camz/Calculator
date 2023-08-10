const preValue = document.getElementById("preValue");
const currValue = document.getElementById("currValue");
const buttoNumber = document.querySelectorAll("#number"); 
const buttonSign = document.querySelectorAll("#sign"); 
const erase = document.getElementsByClassName(".erase");
const clear = document.getElementsByClassName(".clear");
const display = new Display(preValue, currValue);


buttoNumber.forEach( button => {
  button.addEventListener("click", () => display.addNumber(button.innerHTML));
});

buttonSign.forEach( button => {
  button.addEventListener("click", () => display.doCalculation(button.value));
});

