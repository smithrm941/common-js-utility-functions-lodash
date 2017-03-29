const min = (numArray) => {
let currentLowNumber = 0;
  if(numArray[0] < numArray[1]) {
    currentLowNumber =numArray[0];
  } else if (numArray[1] < numArray[0]) {
    currentLowNumber = numArray[1];
    }

  for(let i = 2; i < numArray.length; i++) {
    if(numArray[i] < currentLowNumber) {
      currentLowNumber = numArray[i];
    } else {
      currentLowNumber = currentLowNumber;
      }
  }
  return currentLowNumber;
}
export { min }
