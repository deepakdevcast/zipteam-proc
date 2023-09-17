"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_js_1 = __importDefault(require("../../modules/database.js"));
const donateController = (req, res) => {
    const { userId } = req.params;
    database_js_1.default.addUserDonation(userId);
    const userDonationCount = database_js_1.default.getDonationCount(userId);
    if (userDonationCount >= 2) {
        return res.status(200).send({
            message: 'Special Donor! Thank you for donating frequently!!',
            donationCount: userDonationCount,
        });
    }
    return res.status(200).send({
        message: 'Thank you! For Donating',
        donationCount: userDonationCount,
    });
};
exports.default = donateController;
