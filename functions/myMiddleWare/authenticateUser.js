const admin = require('firebase-admin');
module.exports = async function authenticateUser(req, res, next) {
    try{
      await admin.auth().verifyIdToken(req.query.key);
    }
    catch(error) {
      res.status(404).redirect('/login');
    }
    next();
  }