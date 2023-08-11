class Display {
  constructor(displayPreValue, displayCurrValue){
    this.displayCurrValue = displayCurrValue;
    this.displayPreValue = displayPreValue;
    this.calculator = new Calculator();
    this.operatorType = undefined;
    this.preValue = "";
    this.currValue = "";
    this.signs = {
      add: "+",
      substract: "-",
      divide: "/",
      multiply:"*",
    }
  }

  addNumber(number) {
    if(number === "." && this.currValue.includes(".")) return
    this.currValue = this.currValue.toString() + number.toString();
    this.printValues();
  }

  eraseNumber(){
    this.currValue = this.currValue.toString().slice(0,-1);
    this.printValues();
  }
  
  clearAll(){
    this.operatorType = undefined;
    this.preValue = "";
    this.currValue = "";
    this.printValues();
  }

  doCalculation(type){
    this.operatorType !== "equal" && this.calculate();
    this.operatorType = type;
    this.preValue = this.currValue || this.preValue;
    this.currValue = "";
    this.printValues();
  }

  printValues(){
    this.displayCurrValue.textContent = this.currValue;
    this.displayPreValue.textContent = `${this.preValue} ${this.signs[this.operatorType] || ""} `;
  }

  calculate(){
    const preValue = parseFloat(this.preValue);
    const currValue = parseFloat(this.currValue);


    if(isNaN(currValue) || isNaN(preValue)) return
    this.currValue = this.calculator[this.operatorType](preValue, currValue).toString();
  }
}