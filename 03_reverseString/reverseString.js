const reverseString = function(input) {
  const inputLen = input.length;
  let returnString = "";
  for(let i = input.length - 1; i >= 0; i--) {
    returnString +=  input[i];
  }
  return returnString;
};

// Do not edit below this line
module.exports = reverseString;
