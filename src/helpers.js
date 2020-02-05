function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getTotalPoints(listToCheck, field){
  const reducer = (accumulator, currentValue) => accumulator + currentValue[field];
  return field.flat().reduce(reducer, field)
}

export {
  getRandomInt,
  getTotalPoints
}
