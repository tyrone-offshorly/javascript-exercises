const sumAll = function(num1, num2) {
  
  const checks = checkType(num1) && checkType(num2) && checkPositive(num1) && checkPositive(num2) && checkInteger(num1) && checkInteger(num2);
  if(checks){
    if(num2 < num1) {
      const temp = num1;
      num1 = num2;
      num2 = temp;
    }
    let sum = 0
    for(let i = num1; i <= num2; i++) {
      sum += i
    }
    return sum;
  }
  return "ERROR"
};

function checkInteger(num) {
  return Math.floor(num) === num;
}

function checkPositive(num) {
  return num >= 0;
}
function checkType(num) {
  return typeof num === 'number';
}

// Do not edit below this line
module.exports = sumAll;
