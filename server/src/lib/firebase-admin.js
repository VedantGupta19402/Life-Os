const admin = require("firebase-admin");
const serviceAccount = require("../../lifeos-a9101-firebase-adminsdk-fbsvc-72a4818c37.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const firebaseAuth = admin.auth();

module.exports = firebaseAuth;