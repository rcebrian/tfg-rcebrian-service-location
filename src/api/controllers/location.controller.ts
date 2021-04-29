import httpStatus from 'http-status';
import { Request, Response } from 'express';

import * as jwt from 'jsonwebtoken';
import { firebaseRepository, GeoPoint, Timestamp } from '../repository/firebase/firebase.repository';

export const registerLocation = (req: Request, res: Response) => {
  const bearer = req.headers.authorization;

  // @ts-ignore: the validation is on middleware
  const token = bearer.replace('Bearer ', '');

  const { location, timestamp } = req.body;

  const jwtSecret: any = process.env.JWT_SECRET;

  const payload: any = jwt.verify(token, jwtSecret);
  const userId = String(payload.id);

  const docRef = firebaseRepository.collection('dev-devices').doc(userId).collection('locations').doc();
  docRef.set({
    location: new GeoPoint(location.latitude, location.longitude),
    timestamp: Timestamp.fromDate(new Date(timestamp * 1000)),
  }).then(() => {
    res.status(httpStatus.CREATED).json();
  });
};
