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

window.addEventListener("keydown", function(e){
  const keyActive = document.querySelector(`.erase[data-key="${e.keyCode}"]`);
  if(e.keyCode == "8"){
    display.eraseNumber();
    keyActive.classList.add("active-sign");
    setTimeout(function() {
      keyActive.classList.remove("active-sign");
    }, 80);
  };
});

window.addEventListener("keyup", function(e){
  const keysNumber = [96,97,98,99,100,101,102,103,104,105,110];
  const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
  const keyActive = document.querySelector(`.number[data-key="${e.keyCode}"]`);
 
  if(keysNumber.includes(e.keyCode)){
    display.addNumber(key.innerHTML);
    keyActive.classList.add("active-number");
    setTimeout(function() {
      keyActive.classList.remove("active-number");
    }, 80);
  };
});

window.addEventListener("keyup", function(e){
  const keysSign = [13,106,107,109,111];
  const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
  const keyActive = document.querySelector(`.sign[data-key="${e.keyCode}"]`);
 
  if(keysSign.includes(e.keyCode)){
    display.doCalculation(key.value);
    keyActive.classList.add("active-sign");
    setTimeout(function() {
      keyActive.classList.remove("active-sign");
    }, 80);
  };
  
});


