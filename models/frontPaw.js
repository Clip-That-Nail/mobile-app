import Claw from './claw';

class FrontPaw {
  constructor(first, second, third, fourth, dew) {
    this.first = new Claw(first.status, first.outcome, first.behaviour);
    this.second = new Claw(second.status, second.outcome, second.behaviour);
    this.third = new Claw(third.status, third.outcome, third.behaviour);
    this.fourth = new Claw(fourth.status, fourth.outcome, fourth.behaviour);
    this.dew = new Claw(dew.status, dew.outcome, dew.behaviour);
  }
}

export default FrontPaw;