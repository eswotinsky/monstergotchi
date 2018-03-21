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
    if (this.foodLevel < 80) {
      this.foodLevel += 20;
    }
    else {
      this.foodLevel = 100;
    }
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
    if (this.playLevel < 80) {
      this.playLevel += 20;
    }
    else {
      this.playLevel = 100;
    }
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
    if (this.sleepLevel < 80) {
      this.sleepLevel += 20;
    }
    else {
      this.sleepLevel = 100;
    }
  }

  didTamagotchiDieOfSleepDeprivation() {
    if (this.sleepLevel > 0) {
      return false;
    }
    else {
      return true;
    }
  }

  isDead() {
    return ((this.didTamagotchiStarve()) || (this.didTamagotchiDieOfBoredom()) || (this.didTamagotchiDieOfSleepDeprivation()));
  }

  deathPhrase() {
    const deathPhrases = [
      " has bought the farm.",
      " has gone to a better place.",
      " has kicked the bucket.",
      " has met their maker.",
      " has shuffled off this mortal coil.",
      " is food for worms.",
      " is pushing up daisies.",
      " is six feet under.",
      " sleeps with the fishes."
    ];
    let phrase = deathPhrases[Math.floor(Math.random() * deathPhrases.length)];
    return phrase;
  }

}
