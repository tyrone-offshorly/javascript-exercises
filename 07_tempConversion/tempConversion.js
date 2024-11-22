const convertToCelsius = function(num) {
  const toCelcius = (num - 32) * 5 / 9;
  return Math.round(toCelcius * 10) / 10;
};

const convertToFahrenheit = function(num) {
  const toFahrenheit = (num * 9 / 5) + 32;
  return Math.round(toFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
