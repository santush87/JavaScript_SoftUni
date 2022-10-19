function argInfo(...arr) {
  let containerMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    let theType = typeof el;
    console.log(`${theType}: ${el}`);

    if (!containerMap.has(theType)) {
      containerMap.set(theType, 1);
    } else {
      containerMap.set(theType, containerMap.get(theType) + 1);
    }
  }

  containerMap.forEach((key, value) => console.log(`${value} = ${key}`));
}

argInfo("cat", 42, 8.8, function () {
  console.log("Hello world!");
});
