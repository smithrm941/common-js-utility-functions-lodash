const max = (numArray) => {
let currentHighNumber = 0;
  if(numArray[0] > numArray[1]) {
    currentHighNumber =numArray[0];
  } else if (numArray[1] > numArray[0]) {
    currentHighNumber = numArray[1];
    }

  for(let i = 2; i < numArray.length; i++) {
    if(numArray[i] > currentHighNumber) {
      currentHighNumber = numArray[i];
    } else {
      currentHighNumber = currentHighNumber;
      }
  }
  return currentHighNumber;
}
export { max }
