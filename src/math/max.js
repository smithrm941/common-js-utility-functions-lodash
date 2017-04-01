const max = numArray => {
    let currentHighNumber = -Infinity;
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > currentHighNumber) {
            currentHighNumber = numArray[i];
        }
    }
    return currentHighNumber;
};
export { max };
