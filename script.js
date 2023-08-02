let CheckIsNaN = (Input) => {
  if (Input == null || isNaN(parseFloat(Input))) {
    alert("Error");
    return false;
  }
  return true;
};

let CheckIsAction = (input) => {
  const pattern = /^[*/+-]*$/;
  if (input !== null && pattern.test(input)) {
    return true;
  } else {
    alert("Error");
    return false;
  }
};

let Calculate = (a, b, c) => {
  let result;
  switch (c) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    default:
      alert("Error");
      result = 0;
  }
  return result;
};

let Input = () => {
  let userInput;
  userInput = prompt("First num: ");
  if (userInput === null || !CheckIsNaN(userInput)) {
    return false;
  } else {
    const num1 = parseFloat(userInput);
    userInput = prompt("Second num: ");
    if (userInput === null || !CheckIsNaN(userInput)) {
      return false;
    } else {
      const num2 = parseFloat(userInput);
      userInput = prompt("Enter action [*,/,+,-]: ");
      if (userInput === null || CheckIsAction(userInput)) {
        const operator = userInput;
        const result = Calculate(num1, num2, operator);
        alert("Result: " + num1 + operator + num2 + " = " + result);
        return result;
      }
    }
  }
};
