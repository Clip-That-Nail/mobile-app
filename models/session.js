import Dog from './dog';
import FrontPaw from './frontPaw';
import BackPaw from './backPaw';

class Session {
  constructor(id, createDate, dog, frontLeft, frontRight, backLeft, backRight) {
    this.id = id.toString();
    this.createDate = createDate;
    this.dog = new Dog(dog.id.toString(), dog.name, dog.breed, dog.imageUri);
    this.frontLeft = new FrontPaw(frontLeft.firstClaw, frontLeft.secondClaw, frontLeft.thirdClaw, frontLeft.fourthClaw, frontLeft.dewClaw);
    this.frontRight = new FrontPaw(frontRight.firstClaw, frontRight.secondClaw, frontRight.thirdClaw, frontRight.fourthClaw, frontRight.dewClaw);
    this.backLeft = new BackPaw(backLeft.firstClaw, backLeft.secondClaw, backLeft.thirdClaw, backLeft.fourthClaw);
    this.backRight = new BackPaw(backRight.firstClaw, backRight.secondClaw, backRight.thirdClaw, backRight.fourthClaw);
  }
}

export default Session;