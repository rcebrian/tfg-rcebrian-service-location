import httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';
import { getPropertyFromBearerToken, TokenPropertiesEnum } from '@rcebrian/tfg-rcebrian-common';
import { firebaseRepository, GeoPoint, Timestamp } from '../repository/firebase/firebase.repository';
import { FIREBASE } from '../../config/env.config';

/**
 * Upload a new GeoPoint to firebase database
 * @param req with bearer auth and GeoPoint
 * @param res 201 - Created
 * @param next call
 */
export const registerLocation = (req: Request, res: Response, next: NextFunction) => {
  const userId = getPropertyFromBearerToken(req.headers, TokenPropertiesEnum.ID);

  const { location, timestamp } = req.body;

  const firebaseDb = FIREBASE.baseCollection || 'dev-devices';

  const docRef = firebaseRepository.collection(firebaseDb).doc();
  docRef.set({
    userId,
    location: new GeoPoint(location.latitude, location.longitude),
    timestamp: Timestamp.fromDate(new Date(timestamp * 1000)),
  }).then(() => {
    res.status(httpStatus.CREATED).json();
  }).catch((err) => {
    next(err);
  });
};
