import app from 'firebase/app';

const prodConfig = {
    apiKey: process.env.FIREBASE_BARBERYHOME_PROD_API_KEY,
    authDomain: process.env.FIREBASE_BARBERYHOME_PROD_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_BARBERYHOME_PROD_DATABASE_URL,
    projectId: process.env.FIREBASE_BARBERYHOME_PROD_PROJECT_ID,
    storageBucket: process.env.FIREBASE_BARBERYHOME_PROD_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_BARBERYHOME_PROD_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_BARBERYHOME_PROD_APP_ID,
    measurementId: process.env.FIREBASE_BARBERYHOME_PROD_MEASUREMENT_ID,
};
   
const devConfig = {
    apiKey: process.env.FIREBASE_BARBERYHOME_DEV_API_KEY,
    authDomain: process.env.FIREBASE_BARBERYHOME_DEV_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_BARBERYHOME_DEV_DATABASE_URL,
    projectId: process.env.FIREBASE_BARBERYHOME_DEV_PROJECT_ID,
    storageBucket: process.env.FIREBASE_BARBERYHOME_DEV_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_BARBERYHOME_DEV_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_BARBERYHOME_DEV_APP_ID,
    measurementId: process.env.FIREBASE_BARBERYHOME_DEV_MEASUREMENT_ID,
};
   
const config = process.env.FIREBASE_BARBERYHOME_ENV_ID === 'PRD' ? prodConfig : devConfig;

class Firebase {
    constructor() {
        app.initializeApp(config);
        /* moar code */
    }
}

export default Firebase;