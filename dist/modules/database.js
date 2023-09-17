"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Users {
    usersData;
    constructor() {
        this.usersData = {};
    }
    // check user id exist or not
    isUserExist(userId) {
        if (this.usersData[userId] !== undefined)
            return true;
        return false;
    }
    addUserDonation(userId) {
        // if user exist increment donation count else donate = 1
        if (this.isUserExist(userId)) {
            this.usersData[userId].donationCount += 1;
        }
        else {
            this.usersData[userId] = {
                donationCount: 1,
            };
        }
    }
    // get donation count with id
    getDonationCount(userId) {
        if (this.isUserExist(userId))
            return this.usersData[userId].donationCount;
        return -1;
    }
}
// initializing users instance
const users = new Users();
exports.default = users;
