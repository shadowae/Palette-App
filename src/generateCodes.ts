export default () => {
  /*
  We have 3 components to each colour set. So we run the recursion 3 level deep.
  */
  const colours = [...getColours(3)];
  return colours;
}

const stepCount = 32;

const colourRange = (() => {
  const array1 = [];

  for (let i = 1; i <= stepCount; ++i) {
    array1.push(i * 8)
  }

  return array1;
})();

const getColours = (number: number, set: any = new Set(colourRange)) => {
  if (number == 1) {
    return set;
  }
  else {
    const updatedSet = new Set();
    for (let existingColour of set) {
      for (let colour of colourRange) {
        updatedSet.add(existingColour + ', ' + colour);
      }
    }
    return getColours(number - 1, updatedSet);
  }
}