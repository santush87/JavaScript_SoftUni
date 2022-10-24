class footballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = new Map();
  }

  newAdditions(footballPlayers) {
    let buff = [];

    for (let player of footballPlayers) {
      let name = player.split("/")[0];
      let age = Number(player.split("/")[1]);
      let playerValue = Number(player.split("/")[2]);

      if (!this.invitedPlayers.has(name)) {
        this.invitedPlayers.set(name, [name, age, playerValue]);
        buff.push(name);
      } else {
        if (playerValue > this.invitedPlayers.get(name)[2]) {
          this.invitedPlayers.get(name)[2] = playerValue;
        }
      }
    }
    return `You successfully invite ${buff.join(", ")}.`;
  }

  signContract(selectedPlayer) {
    let name = selectedPlayer.split("/")[0];
    let playerOffer = selectedPlayer.split("/")[1];
    if (!this.invitedPlayers.has(name)) {
      throw new Error(`${name} is not invited to the selection list!`);
    }
    if (playerOffer < this.invitedPlayers.get(name)[2]) {
      throw new Error(
        `The manager's offer is not enough to sign a contract with ${name}, ${
          this.invitedPlayers.get(name)[2] - playerOffer
        } million more are needed to sign the contract!`
      );
    }

    this.invitedPlayers.get(name)[2] = "Bought";
    return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
  }

  ageLimit(name, age) {
    if (!this.invitedPlayers.has(name)) {
      throw new Error(`${name} is not invited to the selection list!`);
    }
    let player = this.invitedPlayers.get(name);
    let difference = age - player[1];
    if (difference < 5 && difference > 0) {
      return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`;
    } else if (difference >= 5) {
      return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
    } else {
      return `${name} is above age limit!`;
    }
  }
  transferWindowResult() {
    let buff = "Players list:\n";
    for (let [key, value] of this.invitedPlayers) {
      buff += `Player ${key}-${value[2]}\n`;
    }
    return buff;
  }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(
  fTeam.newAdditions([
    "Kylian Mbappé/23/160",
    "Lionel Messi/35/50",
    "Pau Torres/25/52",
  ])
);
console.log(fTeam.signContract("Lionel Messi/60"));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.signContract("Barbukov/10"));
