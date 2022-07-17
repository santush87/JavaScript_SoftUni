function sortByTwoCriteria(input) {
  input.sort((a, b) => a.localeCompare(b));
  input.sort((a, b) => a.length - b.length);

  for (let i = 0; i < input.length; i++) {
    console.log(input[i]);
  }
}

sortByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
