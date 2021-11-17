import Pet from './pet';
import FrontPaw from './frontPaw';
import BackPaw from './backPaw';

class Session {
  constructor(id, status, createDate, pet, frontLeft, frontRight, backLeft, backRight) {
    this.id = id.toString();
    this.status = status;
    this.createDate = createDate;
    this.pet = new Pet(pet.id.toString(), pet.name, pet.breed, pet.imageUri);
    this.frontLeft = new FrontPaw(frontLeft.first, frontLeft.second, frontLeft.third, frontLeft.fourth, frontLeft.dew);
    this.frontRight = new FrontPaw(frontRight.first, frontRight.second, frontRight.third, frontRight.fourth, frontRight.dew);
    this.backLeft = new BackPaw(backLeft.first, backLeft.second, backLeft.third, backLeft.fourth);
    this.backRight = new BackPaw(backRight.first, backRight.second, backRight.third, backRight.fourth);
  }
}

export default Session;