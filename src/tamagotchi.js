export class tamagotchi {
  constructor(name) {
    this.name = name;
    this.foodLevel = 100;
    this.playLevel = 100;
    this.sleepLevel = 100;
  }

  timePasses() {
    setInterval(() => {
      this.foodLevel--;
      this.playLevel--;
      this.sleepLevel--;
    }, 1000);
  }

  feed() {
    this.foodLevel += 20;
  }

  didTamagotchiStarve() {
    if (this.foodLevel > 0) {
      return false;
    }
    else {
      return true;
    }
  }

  play() {
    this.playLevel += 20;
  }

  didTamagotchiDieOfBoredom() {
    if (this.playLevel > 0) {
      return false;
    }
    else {
      return true;
    }
  }

  sleep() {
    this.sleepLevel += 20;
  }

  didTamagotchiDieOfSleepDeprivation() {
    if (this.sleepLevel > 0) {
      return false;
    }
    else {
      return true;
    }
  }

}
// foodDecay() {
//   setInterval(() => {
//     this.foodLevel--
//   }, 1000);
// }
// sleepDecay() {
//   setInterval(() => {
//     this.sleepLevel--;
//   }, 1000)
// }
// playDecay() {
//   setInterval(() => {
//     this.playLevel--;
//   }, 1000)
// }
