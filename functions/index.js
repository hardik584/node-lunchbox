const functions = require('firebase-functions');
var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Mirinda!");
});

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://all-unit-converter-cedbc.firebaseio.com"
});

