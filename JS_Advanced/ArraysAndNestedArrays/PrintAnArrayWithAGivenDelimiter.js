function printAnArray(arr, separator) {
  let inputArr = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    inputArr.push(element);
  }
  console.log(inputArr.join(separator));
}

printAnArray(["How about no?", "I", "will", "not", "do", "it!"], "_");
