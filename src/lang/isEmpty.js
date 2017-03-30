
const isEmpty = (value) => {
  if(typeof value === 'number'){
    return true;
  } else if (typeof value === 'string' || typeof value === 'object'){
    if(Object.keys(value).length === 0){
      return true;
    }
      return false;
  }
}

export { isEmpty }
