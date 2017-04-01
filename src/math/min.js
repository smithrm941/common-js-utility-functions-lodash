const min = numArray => {
    let currentLowNumber = Infinity;
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] < currentLowNumber) {
            currentLowNumber = numArray[i];
        }
    }
    return currentLowNumber;
};
export { min };
