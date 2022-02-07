export class Friend {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bestFriend: boolean

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    bestFriend: boolean
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.bestFriend = bestFriend;
  }
}
