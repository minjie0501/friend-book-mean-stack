export class Friend {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bestFriend: boolean;

  constructor(
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    bestFriend: boolean
  ) {
    this._id = _id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.bestFriend = bestFriend;
  }
}
