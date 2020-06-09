import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
import UserActions from './user-actions';


export const user = functions.https.onRequest(UserActions); //endpoint for creating, reading, updating, and deleting users