function timeToWalk(first, second, third) {
  let steps = Number(first);
  let totalDistanceInKm = (steps * Number(second)) / 1000;
  let kmPerHour = Number(third);
  let distDividedKm = totalDistanceInKm / kmPerHour;
  let restSec = Math.floor((totalDistanceInKm * 1000) / 500) * 60;

  let totalSeconds = distDividedKm * 3600 + restSec;
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.round(totalSeconds % 60);

  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  seconds = ("0" + seconds).slice(-2);

  console.log(`${hours}:${minutes}:${seconds}`);
}

timeToWalk(2564, 0.7, 5.5);
