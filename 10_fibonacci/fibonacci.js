const fibonacci = function(input) {
  const num = Number(input); 

  if(num === NaN) {
    throw('Input is not a number');
  }
  if(num < 0) {
    return "OOPS"
  }
  if(num === 0 || num === 1) {
    return num;
  }
  const arr = [0, 1];

  for(let i = 2; i <= num; i++) {
    const sum = arr[0] + arr[1];
    arr.shift();
    arr.push(sum);
  }
  return arr[1];
};

// Do not edit below this line
module.exports = fibonacci;
