import httpStatus from 'http-status';
import { Request, Response } from 'express';

import * as jwt from 'jsonwebtoken';
import { firebaseRepository, GeoPoint, Timestamp } from '../repository/firebase/firebase.repository';

import { FIREBASE } from '../../config/env.config';

export const registerLocation = (req: Request, res: Response) => {
  const bearer = req.headers.authorization;

  // @ts-ignore: the validation is on middleware
  const token = bearer.replace('Bearer ', '');

  const { location, timestamp } = req.body;

  const jwtSecret: any = process.env.JWT_SECRET;

  const payload: any = jwt.verify(token, jwtSecret);
  const userId = payload.id;

  const firebaseDb = FIREBASE.baseCollection || 'dev-devices';

  const docRef = firebaseRepository.collection(firebaseDb).doc();
  docRef.set({
    userId,
    location: new GeoPoint(location.latitude, location.longitude),
    timestamp: Timestamp.fromDate(new Date(timestamp * 1000)),
  }).then(() => {
    res.status(httpStatus.CREATED).json();
  });
};
