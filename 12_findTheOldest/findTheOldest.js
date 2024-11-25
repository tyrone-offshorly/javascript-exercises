const findTheOldest = function(people) {

  const d = new Date();
  const year = d.getFullYear();
  const oldest = people.reduce((oldestPerson, currentPerson) => {
    const oldestLatest = oldestPerson.yearOfDeath || year; 
    const currentLatest = currentPerson.yearOfDeath || year; 

    const oldestAge = oldestLatest - oldestPerson.yearOfBirth;
    const currAge = currentLatest - currentPerson.yearOfBirth;
    if (currAge > oldestAge) {
      return currentPerson;
    } else {
      return oldestPerson;
    }
  });
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
