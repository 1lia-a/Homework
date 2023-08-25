export const getPositive = (array) => {
  let summ = 0;
  let arrayPositive = [];
  array.forEach((element) => {
    if (element > 0) {
      summ += element;
      arrayPositive.push(element);
    }
  });
  console.log(`Positive elements: ${arrayPositive}`);
  console.log(`Sum: ${summ}`);
};

export const getMin = (array) => {
  let index = 0;
  let arrayMin = Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < arrayMin) {
      arrayMin = array[i];
      index = i;
    }
  }
  console.log(`MinValue: ${arrayMin}`);
  console.log(`index: ${index}`);
};

export const getMax = (array) => {
  let index = 0;
  let arrayMax = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > arrayMax) {
      arrayMax = array[i];
      index = i;
    }
  }
  console.log(`MaxValue: ${arrayMax}`);
  console.log(`index: ${index}`);
};

export const getNegative = (array) => {
  let summ = 0;
  let arrayNegative = [];
  array.forEach((element) => {
    if (element < 0) {
      summ += element;
      arrayNegative.push(element);
    }
  });
  console.log(`Negative elements: ${arrayNegative}`);
  console.log(`Sum: ${summ}`);
};

export const getOddPositive = (array) => {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 !== 0) {
      counter++;
    }
  }
  console.log(`Positive odds: ${counter}`);
};

export const getEvenPositive = (array) => {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 == 0) {
      counter++;
    }
  }
  console.log(`Positive odds: ${counter}`);
};

export const getOddPositiveSum = (array) => {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 !== 0) {
      result += array[i];
    }
  }
  console.log(`Positive odds sum: ${result}`);
};

export const getEvenPositiveSum = (array) => {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 == 0) {
      result += array[i];
    }
  }
  console.log(`Positive Evens sum: ${result}`);
};

export const getEvenPositiveMult = (array) => {
  let result = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      result *= array[i];
    }
  }
  console.log(`Positive Evens sum: ${result}`);
};

export const getMaxZero = (array) => {
  let arrayMax = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > arrayMax) {
      arrayMax = array[i];
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== arrayMax) {
      array[i] = 0;
    }
  }

  console.log(`MaxArrayToZero: ${array}`);
};
