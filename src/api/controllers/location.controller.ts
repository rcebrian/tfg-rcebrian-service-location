import httpStatus from 'http-status';
import { Request, Response } from 'express';

export const registerLocation = (req: Request, res: Response) => {
  res.status(httpStatus.NOT_IMPLEMENTED)
    .json({ message: 'NOT IMPLEMENTED' });
};
