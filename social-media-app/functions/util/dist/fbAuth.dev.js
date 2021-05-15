"use strict";

var _require = require('./admin'),
    admin = _require.admin,
    db = _require.db;

module.exports = function (req, res, next) {
  var idToken;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    idToken = req.headers.authorization.split('Bearer ')[1];
  } else {
    console.error('No token found');
    return res.status(403).json({
      error: 'Unauthorized'
    });
  }

  admin.auth().verifyIdToken(idToken).then(function (decodedToken) {
    req.user = decodedToken;
    console.log(decodedToken);
    return db.collection('user').where('userId', '==', req.user.uid).limit(1).get();
  }).then(function (data) {
    req.user.handle = data.docs[0].data().handle;
    req.user.imageUrl = data.docs[0].data().imageUrl;
    return next();
  })["catch"](function (err) {
    console.error('Error while verifying token.', err);
    return res.status(403).json(err);
  });
};