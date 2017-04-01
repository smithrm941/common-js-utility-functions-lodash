const isArray = value => {
    return typeof value === "object" && value.length !== undefined;
};

export { isArray };
