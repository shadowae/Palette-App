export default () => {
  console.log('asdds')
  const colours = [...getColours(3)];
  console.log(colours);
  return colours;
}


/*
We have 2 layers to each colour set
*/

const colourRange = (() => {
  const array1 = [];

  for (let i = 1; i <= 32; ++i) {
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
      // console.log(existingColour)
      for (let colour of colourRange) {
        // console.log(colour)
        updatedSet.add(existingColour + ', ' + colour);
      }
    }
    return getColours(number - 1, updatedSet);
  }
}