import { Request, Response } from 'express';
import users from '../../modules/database.js';

const donateController = (req: Request<{userId: string}>, res: Response) => {
  const { userId } = req.params;
  users.addUserDonation(userId);
  const userDonationCount = users.getDonationCount(userId);
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

export default donateController;
