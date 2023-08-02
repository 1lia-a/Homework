const pattern = /^[*/+-]*$/;

const checkIsNaN = (input) => {
  if (input == null || isNaN(parseFloat(input))) {
    alert("Error");
    return;
  }
  return true;
};

const checkIsAction = (input) => {
  if (input !== null && pattern.test(input)) {
    return true;
  } else {
    alert("Error");
    return;
  }
};

const calculate = (a, b, c) => {
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

const input = () => {
  const firstNum = prompt("First num: ");

  if (!checkIsNaN(firstNum)) {
    return;
  } else {
    const secondNum = prompt("Second num: ");

    if (!checkIsNaN(secondNum)) {
      return;
    } else {
      const operator = prompt("Enter action [*,/,+,-]: ");

      if (checkIsAction(operator)) {
        const result = calculate(
          parseFloat(firstNum),
          parseFloat(secondNum),
          operator
        );

        alert(`Result: ${firstNum} ${operator} ${secondNum} = ${result}`);
        return result;
      }
    }
  }
};
