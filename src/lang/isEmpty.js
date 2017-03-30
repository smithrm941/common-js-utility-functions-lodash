const isEmpty = (value) => {
  if(typeof value === 'number'){
    return true;
  } else if (typeof value === 'string' || Array.isArray(value)){
    if(value.length === 0){
      return true;
    }
      return false;
  } else if (typeof value === 'object'){
    if(Object.keys(value).length === 0){
      return true;
    }
      return false;
  }
}


export { isEmpty }
