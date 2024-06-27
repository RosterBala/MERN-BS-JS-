function calculate() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
  
    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers.");
      return;
    }
  
    let multiplyResult = num1 * num2;
    let divideResult = num1 / num2;
  
    document.getElementById("multiplyResult").textContent = "Multiplication: " + multiplyResult;
    document.getElementById("divideResult").textContent = "Division: " + divideResult;
  }