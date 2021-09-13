import Claw from './claw';

class BackPaw {
  constructor(firstClaw, secondClaw, thirdClaw, fourthClaw) {
    this.firstClaw = new Claw(firstClaw.status, firstClaw.outcome, firstClaw.behaviour);
    this.secondClaw = new Claw(secondClaw.status, secondClaw.outcome, secondClaw.behaviour);
    this.thirdClaw = new Claw(thirdClaw.status, thirdClaw.outcome, thirdClaw.behaviour);
    this.fourthClaw = new Claw(fourthClaw.status, fourthClaw.outcome, fourthClaw.behaviour);
  }
}

export default BackPaw;