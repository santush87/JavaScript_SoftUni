function carFactory(input) {
  let resultCar = {};
  let thePower = Number(input.power);
  resultCar.model = input.model;

  let engine = {};
  if (thePower <= 90) {
    engine.power = 90;
    engine.volume = 1800;
  } else if (thePower <= 120) {
    engine.power = 120;
    engine.volume = 2400;
  } else if (thePower <= 200) {
    engine.power = 200;
    engine.volume = 3500;
  }

  resultCar.engine = engine;

  let carriage = {};
  carriage.type = input.carriage;
  carriage.color = input.color;

  resultCar.carriage = carriage;

  let theWheels = [];
  let oneWheel = Number(input.wheelsize);

  if (oneWheel % 2 === 0) {
    oneWheel -= 1;
  }
  theWheels.push(oneWheel);
  theWheels.push(oneWheel);
  theWheels.push(oneWheel);
  theWheels.push(oneWheel);

  resultCar.wheels = theWheels;

  return resultCar;
}

carFactory({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
});
