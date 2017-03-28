const floor = (number, precision) => {
    let numberString = number.toString();
    let decimalIndex = numberString.indexOf('.');
    let beforeDecimal = numberString.substring(0, decimalIndex);
    let afterDecimal = numberString.substring(decimalIndex, numberString.length);
  if (Number.isInteger(number)){
    return number;
  } else if (Number.isInteger(number) === false) {
      if (precision === undefined || precision  === 0) {
        for(let i = 0; i < afterDecimal.length; i++){
          if(numberString[i] > 0){
            let roundDown = parseInt(beforeDecimal) -1;
            return roundDown;
          }
        }
      } else if (precision > 0) {
          let beforeDecimalArray = [];
          beforeDecimalArray.push(beforeDecimal);
          let afterDecimalArray = afterDecimal.split('');
          for(let j = 1; j < afterDecimalArray.length; j++){
            if(j === precision){
              afterDecimalArray.splice(j, 1, parseInt(afterDecimalArray[j])+1);
              afterDecimalArray.splice(j, 1, afterDecimalArray[j].toString());
            }
          }
          afterDecimalArray.unshift(beforeDecimalArray[0]);
          let newNumberString = afterDecimalArray.join('');
          let roundedFloat = newNumberString.substring(0, decimalIndex + precision + 1);
          return parseFloat(roundedFloat);
        }
    }

}

export { floor }
