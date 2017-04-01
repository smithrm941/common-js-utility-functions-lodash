const drop = (dropArray, n) => {
    if (n === undefined || n === 0) {
        dropArray.shift();
        return dropArray;
    } else if (n > 0) {
        while (n > 0) {
            dropArray.shift();
            n--;
        }
        return dropArray;
    }
};

export { drop };
