const mean = (numbers) => {
  let total = 0;
  let numOfElements = numbers.length
  for (let i = 0; i < numbers.length; i++) {
    total+=numbers[i]
  }
    return total/numOfElements;

}
export { mean }
