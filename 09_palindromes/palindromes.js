const palindromes = function (string) {
// split the string
// remove the spaces
// convert everything to lowercase
// set left to 0
// set right to len(string) - 1
// WHILE left < right
//  IF string[left] !== string[right]
//    RETURN false
//    left++
//    right++
  const ALPHANUMERIC = "abcdefghijklmnopqrstuvwxyz0123456789"
  const lowerString = string.toLowerCase().split('').filter((char) => ALPHANUMERIC.includes(char)).join('');

  const reversedString = lowerString.split('').reverse().join('');

  return lowerString === reversedString;
}

// Do not edit below this line
module.exports = palindromes;
