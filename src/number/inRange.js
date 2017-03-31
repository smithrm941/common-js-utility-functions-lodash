const inRange = (numberToCheck, firstInRange, lastInRange) => {
  if (lastInRange !== undefined) {
    return numberToCheck > firstInRange && numberToCheck < lastInRange;
  }
    return numberToCheck > 0 && numberToCheck < firstInRange;

}

export { inRange }
