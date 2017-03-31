const toUpper = (stringToConvert) => {
  if (typeof stringToConvert === 'string') {
    let stringArray = stringToConvert.split('')
    for (let i = 0; i < stringArray.length; i++) {
      switch (stringToConvert[i]) {
        case 'a':
          stringArray.splice(i, 1, 'A')
          break;
        case 'b':
          stringArray.splice(i, 1, 'B')
          break;
        case 'c':
          stringArray.splice(i, 1, 'C')
          break;
        case 'd':
          stringArray.splice(i, 1, 'D')
          break;
        case 'e':
          stringArray.splice(i, 1, 'E')
          break;
        case 'f':
          stringArray.splice(i, 1, 'F')
          break;
        case 'g':
          stringArray.splice(i, 1, 'G')
          break;
        case 'h':
          stringArray.splice(i, 1, 'H')
          break;
        case 'i':
          stringArray.splice(i, 1, 'I')
          break;
        case 'j':
          stringArray.splice(i, 1, 'J')
          break;
        case 'k':
          stringArray.splice(i, 1, 'K')
          break;
        case 'l':
          stringArray.splice(i, 1, 'L')
          break;
        case 'm':
          stringArray.splice(i, 1, 'M')
          break;
        case 'n':
          stringArray.splice(i, 1, 'N')
          break;
        case 'o':
          stringArray.splice(i, 1, 'O')
          break;
        case 'p':
          stringArray.splice(i, 1, 'P')
          break;
        case 'q':
          stringArray.splice(i, 1, 'Q')
          break;
        case 'r':
          stringArray.splice(i, 1, 'R')
          break;
        case 's':
          stringArray.splice(i, 1, 'S')
          break;
        case 't':
          stringArray.splice(i, 1, 'T')
          break;
        case 'u':
          stringArray.splice(i, 1, 'U')
          break;
        case 'v':
          stringArray.splice(i, 1, 'V')
          break;
        case 'w':
          stringArray.splice(i, 1, 'W')
          break;
        case 'x':
          stringArray.splice(i, 1, 'X')
          break;
        case 'y':
          stringArray.splice(i, 1, 'Y')
          break;
        case 'z':
          stringArray.splice(i, 1, 'Z')
          break;
      }
    }
    return stringArray.join('');
  }
    return 'ERROR USE A STRING';

}

export { toUpper }
