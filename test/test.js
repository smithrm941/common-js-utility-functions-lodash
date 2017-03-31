// {
//   convertedNumberArray = [];
// if (numberValue >= 0 && numberValue <= 999) {//999 b/c we want hundreds
//   var integerString = numberValue.toString();
//   if(integerString.length == 1){
//     switch (integerString){
//         case '0':
//           return 'zero';
//         case '1':
//           return 'one';
//         case '2':
//           return 'two';
//         case '3':
//           return 'three';
//         case '4':
//           return 'four';
//         case '5':
//           return 'five';
//         case '6':
//           return 'six';
//         case '7':
//           return 'seven';
//         case '8':
//           return 'eight';
//         case '9':
//           return 'nine';
//       }
//     } else if(integerString.length == 2){
//     if (integerString[0] == 1) {
//       switch(integerString){
//         case '11':
//           return 'eleven';
//         case '12':
//           return 'twelve';
//         case '13':
//           return 'thirteen';
//         case '14':
//           return 'fourteen';
//         case '15':
//           return 'fifteen';
//         case '16':
//           return 'sixteen';
//         case '17':
//           return 'seventeen';
//         case '18':
//           return 'eighteen';
//         case '19':
//           return 'nineteen';
//       }
//     } else if (integerString[0] > 1) {
//       switch(integerString[0]){
//         case '2':
//           convertedNumberArray.push('twenty');
//           break;
//         case '3':
//           convertedNumberArray.push('thirty');
//           break;
//         case '4':
//           convertedNumberArray.push('forty');
//           break;
//         case '5':
//           convertedNumberArray.push('fifty');
//           break;
//         case '6':
//           convertedNumberArray.push('sixty');
//           break;
//         case '7':
//           convertedNumberArray.push('seventy');
//           break;
//         case '8':
//           convertedNumberArray.push('eighty');
//           break;
//         case '9':
//           convertedNumberArray.push('ninety');
//           break;
//       }
//       switch(integerString[1]){
//         case '0':
//           var englishNumber = convertedNumberArray.join();
//           return englishNumber;
//         case '1':
//           convertedNumberArray.push('-one');
//           break;
//         case '2':
//           convertedNumberArray.push('-two');
//           break;
//         case '3':
//           convertedNumberArray.push('-three');
//           break;
//         case '4':
//           convertedNumberArray.push('-four');
//           break;
//         case '5':
//           convertedNumberArray.push('-five');
//           break;
//         case '6':
//           convertedNumberArray.push('-six');
//           break;
//         case '7':
//           convertedNumberArray.push('-seven');
//           break;
//         case '8':
//           convertedNumberArray.push('-eight');
//           break;
//         case '9':
//           convertedNumberArray.push('-nine');
//           break;
//       }
//         englishNumber = convertedNumberArray.join('');
//         return englishNumber;
//
//       }
//     } else if(integerString.length == 3) {
//         switch (integerString[0]){
//           case '1':
//             convertedNumberArray.push('one hundred');
//             break;
//           case '2':
//             convertedNumberArray.push('two hundred');
//             break;
//           case '3':
//             convertedNumberArray.push('three hundred');
//             break;
//           case '4':
//             convertedNumberArray.push('four hundred');
//             break;
//           case '5':
//             convertedNumberArray.push('five hundred');
//             break;
//           case '6':
//             convertedNumberArray.push('six hundred');
//             break;
//           case '7':
//             convertedNumberArray.push('seven hundred');
//             break;
//           case '8':
//             convertedNumberArray.push('eight hundred');
//             break;
//           case '9':
//             convertedNumberArray.push('nine hundred');
//             break;
//         }
//
//
//     }
//   }
//     return 'The damn number is out of range!';
// }
