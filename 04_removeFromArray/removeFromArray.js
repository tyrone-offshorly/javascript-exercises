const removeFromArray = function(array, ...args) {
  for(const arg of args) {
    let argExist;
    do {
      argExist = array.indexOf(arg);
      if(argExist == -1) {
        break;
      }
      array.splice(argExist, 1);
    } while (argExist != -1)
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
