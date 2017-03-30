const floor = (number, precision) => {
    let numberString = number.toString();
    let decimalIndex = numberString.indexOf('.');
    let beforeDecimal = numberString.substring(0, decimalIndex);
    let afterDecimal = numberString.substring(decimalIndex, numberString.length);
  if (Number.isInteger(number)){
    return number;
  }
      if (precision === undefined || precision  === 0) {
        for(let i = 0; i < afterDecimal.length; i++){
          if(numberString[i] > 0){
            let roundDown = parseInt(beforeDecimal);
            return roundDown;
          }
        }
      } else if (precision > 0) {
          let roundedFloat = numberString.substring(0, decimalIndex + precision + 1)
          return parseFloat(roundedFloat);
        }
}

export { floor }
