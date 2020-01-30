const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
admin.initializeApp();
const db = admin.database();


app.use(bodyParser.urlencoded({extended: true})); // allows me to parse post data as a json object
app.use(cookieParser());


app.get('/api/events/:category/:eventKey', async (req, res) => {
  let event;
  try {
    await db.ref(`/events/${req.params.category}/${req.params.eventKey}`).once('value', (data) => {
      event = data.val();
    });
  }
  catch(error)
  {
    console.log(error.message);
  }
  res.send(event);
});


app.post('/api/actions/addEvent', async (req, res) => { 
  try {
    await db.ref(`/events/${req.params.category}`).push({
      name: req.body.eventName.toString(),
      category: req.body.eventCategory.toString(),
      activity: req.body.eventActivity.toString(),
      date: req.body.eventDate.toString() + checkTime,
      location: req.body.location.toString(),
      description: req.body.eventDescription.toString(),
      isSpecial: (req.body.isSpecial) ? true : false,
      updatedOn: today.toDateString()
    })
  }
  catch(error) {
    console.log(error.message);
  }
  res.end();
});

app.put('/api/actions/editEvent', async (req, res) => {
  try {
    db.ref('/events/' + req.body.ogCategory + '/' + req.body.key).remove();
    updateRef.push().set({
        name: req.body.name.toString(),
        category: req.body.category.toString(),
        activity: req.body.activity.toString(),
        date: req.body.date.toString() + timeString,
        location: req.body.location.toString(),
        isSpecial: (req.body.isSpecial) ? true : false,
        description: req.body.description.toString(),
        updatedOn: today.toDateString()
    });
  }
  catch(error) {
    console.log(error.message);
  }
});

app.get('/api/test', (req, res) => {
  res.send({test: 'this is some test data'});
})
app.get('/**', (req, res) => {
  res.send('404 Page');
})

exports.app = functions.https.onRequest(app);
