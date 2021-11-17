import Claw from './claw';

class BackPaw {
  constructor(first, second, third, fourth) {
    this.first = new Claw(first.status, first.outcome, first.behaviour);
    this.second = new Claw(second.status, second.outcome, second.behaviour);
    this.third = new Claw(third.status, third.outcome, third.behaviour);
    this.fourth = new Claw(fourth.status, fourth.outcome, fourth.behaviour);
  }
}

export default BackPaw;