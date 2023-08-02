let A = 0;
let B = 0;
let C = 0;
let userInput;

let CheckIsNaN = (Input) => {
  if (Input == null || isNaN(Input)) {
    alert("Error");
    return false;
  }
  return true;
};

let CheckIsAction = (input, c) => {
  let pattern = /^[*/+-]*$/;
  if (input !== null) {
    if (pattern.test(input)) {
      if (userInput.length === 1) {
        return true;
      } else {
        alert("Error");
        return 0;
      }
    } else {
      alert("Error");
      return 0;
    }
  } else {
    alert("Error");
    return 0;
  }
};

let Calculate = (a, b, c) => {
  if (c == "+") {
    const Sum = a + b;
    return Sum;
  } else if (c == "-") {
    const Min = a - b;
    return Min;
  } else if (c == "*") {
    const Mult = a * b;
    return Mult;
  } else if (c == "/") {
    const Div = a / b;
    return Div;
  } else {
    alert("Error");
    return 0;
  }
};

let Input = () => {
  userInput = prompt("First num: ");
  if (CheckIsNaN(userInput) == false) {
    return 0;
  } else {
    A = userInput;
    userInput = prompt("Second num: ");
    if (CheckIsNaN(userInput) == false) {
      return 0;
    } else {
      B = userInput;
      userInput = prompt("Enter action [*,/,+,-]: ");
      if (CheckIsAction(userInput, C) == true) {
        C = userInput;
        let result = Calculate(A, B, C);
        alert("Result: " + A + C + B + " = " + result);
        return result;
      }
    }
  }
};
