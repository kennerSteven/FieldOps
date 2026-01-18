import * as admin from 'firebase-admin';
import * as dotenv from 'dotenv';

dotenv.config();

function getFirebaseAdmin() {
  if (admin.apps.length === 0) {

    admin.initializeApp();
  }
  return admin;
}

export const firebaseAdmin = getFirebaseAdmin();
export const db = firebaseAdmin.firestore();