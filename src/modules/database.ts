class Users {
  usersData: {[userId: string]: {donationCount: number}};

  constructor() {
    this.usersData = {};
  }

  isUserExist(userId: string) {
    if (this.usersData[userId] !== undefined) return true;
    return false;
  }

  addUserDonation(userId: string) {
    // if user exist increment donation count else donate = 1
    if (this.isUserExist(userId)) {
      this.usersData[userId].donationCount += 1;
    } else {
      this.usersData[userId] = {
        donationCount: 1,
      };
    }
  }

  getDonationCount(userId: string) {
    if (this.isUserExist(userId)) return this.usersData[userId].donationCount;
    return -1;
  }
}

const users = new Users();

export default users;
