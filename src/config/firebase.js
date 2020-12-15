var admin = require("firebase-admin");
require('firebase/database');
var serviceAccount = require("./firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://crud-bf7c1.firebaseio.com"
});

module.exports =admin;