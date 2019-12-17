// const functions = require('firebase-functions');
// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Mirinda!");
// });

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://all-unit-converter-cedbc.firebaseio.com"
// });

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv/config');

app.use(bodyParser.json());

//Import Routes
const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comments');

//MIDDLEWARES
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

//ROUTES
app.get('/', (req, res) => {
  res.send('We are on home');
});

mongoose.set('useUnifiedTopology', true);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => console.log('Connect successfully to DB!..........')
);

app.listen(3000);
