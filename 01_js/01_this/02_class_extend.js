// https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12302774#overview

class Player {
  constructor(name, type) {
    // what is this here?
    console.log("Player", this);
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(this.name, this.type);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("Wizard", this);
  }

  play() {
    console.log(this.type);
  }
}

const wizard1 = new Wizard("Jack", "Healer");
const wizard2 = new Wizard("Rebecca", "Dark Magic");
