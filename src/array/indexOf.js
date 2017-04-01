const indexOf = (searchArray, searchValue, searchAt) => {
    if (searchArray.length - 1 < searchAt) {
        return -1;
    } else if (
        searchArray.includes(searchValue) === false ||
        (searchValue === undefined && searchAt === undefined)
    ) {
        return -1;
    }

    if (searchArray.includes(searchValue)) {
        if (searchAt === undefined) {
            for (let i = 0; i < searchArray.length; i++) {
                if (searchArray[i] === searchValue) {
                    return i;
                }
            }
        }
        if (searchAt !== undefined) {
            for (let i = searchAt; i < searchArray.length; i++) {
                if (searchArray[i] === searchValue) {
                    return i;
                }
            }
        }
    }
};

export { indexOf };
