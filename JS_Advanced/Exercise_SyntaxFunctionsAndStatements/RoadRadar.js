function roadRadar(inputSpeed, place) {
  const motorway = 130;
  const interstate = 90;
  const city = 50;
  const residential = 20;
  let limitStatus;

  let currSpeed = Number(inputSpeed);
  switch (place) {
    case "motorway":
      if (currSpeed <= motorway) {
        console.log(`Driving ${currSpeed} km/h in a ${motorway} zone`);
      } else {
        let higherSpeed = currSpeed - motorway;
        if (higherSpeed <= 20) {
          limitStatus = `speeding`;
        } else if (higherSpeed > 20 && higherSpeed <= 40) {
          limitStatus = `excessive speeding`;
        } else {
          limitStatus = `reckless driving`;
        }
        console.log(
          `The speed is ${higherSpeed} km/h faster than the allowed speed of ${motorway} - ${limitStatus}`
        );
      }
      break;
    case "interstate":
      if (currSpeed <= interstate) {
        console.log(`Driving ${currSpeed} km/h in a ${interstate} zone`);
      } else {
        let higherSpeed = currSpeed - interstate;
        if (higherSpeed <= 20) {
          limitStatus = `speeding`;
        } else if (higherSpeed > 20 && higherSpeed <= 40) {
          limitStatus = `excessive speeding`;
        } else {
          limitStatus = `reckless driving`;
        }
        console.log(
          `The speed is ${higherSpeed} km/h faster than the allowed speed of ${interstate} - ${limitStatus}`
        );
      }
      break;
    case "city":
      if (currSpeed <= city) {
        console.log(`Driving ${currSpeed} km/h in a ${city} zone`);
      } else {
        let higherSpeed = currSpeed - city;
        if (higherSpeed <= 20) {
          limitStatus = `speeding`;
        } else if (higherSpeed > 20 && higherSpeed <= 40) {
          limitStatus = `excessive speeding`;
        } else {
          limitStatus = `reckless driving`;
        }
        console.log(
          `The speed is ${higherSpeed} km/h faster than the allowed speed of ${city} - ${limitStatus}`
        );
      }
      break;
    case "residential":
      if (currSpeed <= residential) {
        console.log(`Driving ${currSpeed} km/h in a ${residential} zone`);
      } else {
        let higherSpeed = currSpeed - residential;
        if (higherSpeed <= 20) {
          limitStatus = `speeding`;
        } else if (higherSpeed > 20 && higherSpeed <= 40) {
          limitStatus = `excessive speeding`;
        } else {
          limitStatus = `reckless driving`;
        }
        console.log(
          `The speed is ${higherSpeed} km/h faster than the allowed speed of ${residential} - ${limitStatus}`
        );
      }
      break;
  }
}

roadRadar(120, "interstate");
