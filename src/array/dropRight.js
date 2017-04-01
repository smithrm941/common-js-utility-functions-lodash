const dropRight = (dropArray, n) => {
    if (n === undefined || n === 0) {
        dropArray.pop();
        return dropArray;
    } else if (n > 0) {
        while (n > 0) {
            dropArray.pop();
            n--;
        }
        return dropArray;
    }
};

export { dropRight };
