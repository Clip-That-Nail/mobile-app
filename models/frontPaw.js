import Claw from './claw';

class FrontPaw {
  constructor(firstClaw, secondClaw, thirdClaw, fourthClaw, dewClaw) {
    this.firstClaw = new Claw(firstClaw.status, firstClaw.outcome, firstClaw.behaviour);
    this.secondClaw = new Claw(secondClaw.status, secondClaw.outcome, secondClaw.behaviour);
    this.thirdClaw = new Claw(thirdClaw.status, thirdClaw.outcome, thirdClaw.behaviour);
    this.fourthClaw = new Claw(fourthClaw.status, fourthClaw.outcome, fourthClaw.behaviour);
    this.dewClaw = new Claw(dewClaw.status, dewClaw.outcome, dewClaw.behaviour);
  }
}

export default FrontPaw;