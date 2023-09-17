import { Request, Response } from 'express';

const donateController = (req: Request, res: Response) => {
  res.send('Donated!!');
};

export default donateController;
