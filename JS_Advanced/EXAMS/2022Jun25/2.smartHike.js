class SmartHike {
  constructor(userName) {
    this.userName = userName;
    this.goals = new Map();
    this.listOfHikes = [];
    this.resources = 100;
  }

  addGoal(peak, altitude) {
    if (this.goals.has(peak)) {
      return `${peak} has already been added to your goals`;
    } else {
      this.goals.set(peak, altitude);
      return `You have successfully added a new goal - ${peak}`;
    }
  }

  hike(peak, time, difficultyLevel) {
    if (!this.goals.has(peak)) {
      return `${peak} is not in your current goals`;
    } else {
      if (this.resources === 0) {
        return "You don't have enough resources to start the hike";
      }
      let difference = this.resources - Number(time) * 10;
      if (difference < 0) {
        return "You don't have enough resources to complete the hike";
      }

      this.resources = difference;
      this.listOfHikes.push({ peak, time, difficultyLevel });
      return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }
  }

  rest(time) {
    this.resources += Number(time) * 10;
    if (this.resources >= 100) {
      this.resources = 100;
      return `Your resources are fully recharged. Time for hiking!`;
    }
    return `You have rested for ${time} hours and gained ${
      time * 10
    }% resources`;
  }

  showRecord(criteria) {
    if (this.listOfHikes.length === 0) {
      return `${this.userName} has not done any hiking yet`;
    }
    if (criteria === "all") {
      let buff = "All hiking records:\n";
      for (let el of this.listOfHikes) {
        buff += `${this.userName} hiked ${el.peak} for ${el.time} hours\n`;
      }
      return buff;
    } else {
      let theOne = this.listOfHikes
        .filter((s) => s.difficultyLevel === criteria)
        .sort((a, b) => a.time - b.time)[0];
      if (!theOne) {
        return `${this.userName} has not done any ${criteria} hiking yet`;
      }

      return `${this.userName}'s best ${criteria} hike is ${theOne.peak} peak, for ${theOne.time} hours`;
    }
  }
}

const user = new SmartHike("Vili");
user.addGoal("Musala", 2925);
user.hike("Musala", 8, "hard");
console.log(user.showRecord("easy"));
user.addGoal("Vihren", 2914);
user.hike("Vihren", 4, "hard");
console.log(user.showRecord("hard"));
user.addGoal("Rui", 1706);
user.hike("Rui", 3, "easy");
console.log(user.showRecord("all"));
