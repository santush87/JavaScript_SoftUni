function printNthElement(arr, num) {
  let n_El = Number(num);
  let newArr = [];
  for (let index = 0; index < arr.length; index += n_El) {
    newArr.push(arr[index]);
  }
  return newArr;
}
printNthElement(["5", "20", "31", "4", "20"], 2);
