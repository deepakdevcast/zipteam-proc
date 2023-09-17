import { Router } from 'express';
import donateController from '../controller/donationController.js';

const userRoutes = Router();

userRoutes.get('/:userId/donate', donateController);

export default userRoutes;
