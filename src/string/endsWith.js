const endsWith = (origString, targetString, endPosition) => {
    let substringOfOrigString = origString.substring(0, endPosition);
    if (targetString.length === 1) {
        return substringOfOrigString[substringOfOrigString.length - 1] ===
            targetString;
    }
    if (endPosition !== undefined) {
        return substringOfOrigString.substring(
            endPosition - targetString.length,
            endPosition + 1
        ) === targetString;
    }
    return origString.substring(
        origString.length - targetString.length,
        origString.length
    ) === targetString;
};

export { endsWith };
