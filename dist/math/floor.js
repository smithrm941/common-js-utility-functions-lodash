'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var floor = function floor(number, precision) {
  var numberString = number.toString();
  var decimalIndex = numberString.indexOf('.');
  var beforeDecimal = numberString.substring(0, decimalIndex);
  var afterDecimal = numberString.substring(decimalIndex, numberString.length);
  if (Number.isInteger(number)) {
    return number;
  } else if (Number.isInteger(number) === false) {
    if (precision === undefined || precision === 0) {
      for (var i = 0; i < afterDecimal.length; i++) {
        if (numberString[i] > 0) {
          var roundDown = parseInt(beforeDecimal);
          return roundDown;
        }
      }
    } else if (precision > 0) {
      var beforeDecimalArray = [];
      beforeDecimalArray.push(beforeDecimal);
      var afterDecimalArray = afterDecimal.split('');
      for (var j = 1; j < afterDecimalArray.length; j++) {
        if (j === precision) {
          afterDecimalArray.splice(j, 1, parseInt(afterDecimalArray[j]));
          afterDecimalArray.splice(j, 1, afterDecimalArray[j].toString());
        }
      }
      afterDecimalArray.unshift(beforeDecimalArray[0]);
      var newNumberString = afterDecimalArray.join('');
      var roundedFloat = newNumberString.substring(0, decimalIndex + precision);
      return parseFloat(roundedFloat);
    }
  }
};

exports.floor = floor;