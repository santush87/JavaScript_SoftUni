function demo(fruit, weightInGrams, moneyCost) {
  let weight = weightInGrams / 1000;
  let money = weight * moneyCost;

  console.log(
    `I need $${money.toFixed(2)} to buy ${weight.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

demo(`orange`, 2500, 1.8);
//Expected : I need $4.50 to buy 2.50 kilograms orange.
