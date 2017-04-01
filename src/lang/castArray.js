const castArray = value => {
    let resultArray = [];

    if (Array.isArray(value)) {
        return value;
    }
    resultArray.push(value);
    return resultArray;
};

export { castArray };
