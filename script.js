const pattern = /^[*/+-]*$/;

const CheckIsNaN = (Input) => {
  if (Input == null || isNaN(parseFloat(Input))) {
    alert("Error");
    return false;
  }
  return true;
};

const CheckIsAction = (input) => {
  if (input !== null && pattern.test(input)) {
    return true;
  } else {
    alert("Error");
    return false;
  }
};

const Calculate = (a, b, c) => {
  switch (c) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      alert("Error");
      return 0;
  }
};

const Input = () => {
  const firstNum = prompt("First num: ");

  if (!CheckIsNaN(firstNum)) {
    return;
  } else {
    const secondNum = prompt("Second num: ");

    if (!CheckIsNaN(secondNum)) {
      return;
    } else {
      const operator = prompt("Enter action [*,/,+,-]: ");

      if (CheckIsAction(operator)) {
        const result = Calculate(
          parseFloat(firstNum),
          parseFloat(secondNum),
          operator
        );

        alert("Result: " + firstNum + operator + secondNum + " = " + result);
        return result;
      }
    }
  }
};
