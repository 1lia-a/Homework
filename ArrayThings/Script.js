// Дано масив з елементами різних типів.
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

let array = ["ba", "was", "23", "24", "12"];

let sum = 0;
let count = 0;

for (let item of array) {
  if (!isNaN(item)) {
    sum += parseInt(item);
    count++;
  }
}

let average = sum / count;

console.log(average.toFixed(2));

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y,
//  рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

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

// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач.
//  Значення всіх елементів всіх масивів задає користувач.

// не понял

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])'
//  поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

function func(input, remove) {
  let array = input.split("");
  let filteredArray = array.filter((char) => !remove.includes(char));
  let result = filteredArray.join("");
  return result;
}

let inputString = "hello world";
let remove = ["l", "d"];

let result = func(inputString, remove);
console.log(result);
