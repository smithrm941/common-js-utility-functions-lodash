const isArray = (value) => {
  if (typeof value === 'object' && value.length) {
    return true;
  }
    return false;
}

export { isArray }
