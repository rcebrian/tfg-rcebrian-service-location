import * as admin from 'firebase-admin';
import { firestore } from 'firebase-admin/lib/firestore';
import { FIREBASE } from '../../../config/env.config';
import GeoPoint = firestore.GeoPoint;
import Timestamp = firestore.Timestamp;

admin.initializeApp({
// @ts-ignore
  credential: admin.credential.cert(FIREBASE.serviceAccount),
});

const firebaseRepository = admin.firestore();

export { firebaseRepository, GeoPoint, Timestamp };
