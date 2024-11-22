const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  const result =  array.reduce((accumulator, current) => {
    return accumulator += current;
  }, 0);
  return result;
};

const multiply = function(array) {
  const result =  array.reduce((accumulator, current) => {
    return accumulator *= current;
  }, 1);
  return result;
};

const power = function(a, b) {
  return a ** b; 
};

const factorial = function(num) {
  if(num === 0) {
    return 1;
  }
  let result = 1;
  for(let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
  

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
