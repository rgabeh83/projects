"use strict";

var _require = require('../util/admin'),
    db = _require.db,
    admin = _require.admin;

var config = require('../util/config');

var firebase = require('firebase');

firebase.initializeApp(config);

var _require2 = require('../util/validators'),
    validateSignupData = _require2.validateSignupData,
    validateLoginData = _require2.validateLoginData,
    reduceUserDetails = _require2.reduceUserDetails;

exports.signup = function (req, res) {
  var newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    handle: req.body.handle
  };

  var _validateSignupData = validateSignupData(newUser),
      valid = _validateSignupData.valid,
      errors = _validateSignupData.errors;

  if (!valid) return res.status(400).json(errors);
  var noImg = 'no-img.png';
  var token, userId;
  db.doc("/user/".concat(newUser.handle)).get().then(function (doc) {
    if (doc.exists) {
      return res.status(400).json({
        handle: 'This handle has already been taken.'
      });
    } else {
      return firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
    }
  }).then(function (data) {
    userId = data.user.uid;
    return data.user.getIdToken();
  }).then(function (idToken) {
    token = idToken;
    var userCredentials = {
      handle: newUser.handle,
      email: newUser.email,
      createdAt: new Date().toISOString(),
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/".concat(config.storageBucket, "/o/").concat(noImg, "?alt=media"),
      userId: userId
    };
    return db.doc("/user/".concat(newUser.handle)).set(userCredentials);
  }).then(function () {
    return res.status(201).json({
      token: token
    });
  })["catch"](function (err) {
    console.error(err);

    if (err.code === "auth/email-already-in-use") {
      return res.status(400).json({
        email: "email is already in use."
      });
    }

    return res.status(500).json({
      general: "Something went wrong, please try again."
    });
  });
};

exports.login = function (req, res) {
  var user = {
    email: req.body.email,
    password: req.body.password
  };

  var _validateLoginData = validateLoginData(user),
      valid = _validateLoginData.valid,
      errors = _validateLoginData.errors;

  if (!valid) return res.status(400).json(errors);
  firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(function (data) {
    return data.user.getIdToken();
  }).then(function (token) {
    return res.json({
      token: token
    });
  })["catch"](function (err) {
    console.error(err);

    if (err.code === 'auth/wrong-password') {
      return res.status(403).json({
        general: 'Wrong credentials, please try again'
      });
    } else return res.status(500).json({
      error: "err.code"
    });
  });
}; // Add user details


exports.addUserDetails = function (req, res) {
  var userDetails = reduceUserDetails(req.body);
  db.doc("/user/".concat(req.user.handle)).update(userDetails).then(function () {
    return res.json({
      message: 'Details added successfully.'
    });
  })["catch"](function (err) {
    return res.status(500).json({
      error: ''
    });
  });
}; // Get any user's details


exports.getUserDetails = function (req, res) {
  var userData = {};
  db.doc("/user/".concat(req.params.handle)).get().then(function (doc) {
    if (doc.exists) {
      userData.user = doc.data();
      return db.collection('posts').where('userHandle', '==', req.params.handle).orderBy('createdAt', 'desc').get();
    } else {
      return res.status(404).json({
        error: 'User not found.'
      });
    }
  }).then(function (data) {
    userData.posts = [];
    data.forEach(function (doc) {
      userData.posts.push({
        body: doc.data().body,
        createdAt: doc.data().createdAt,
        userHandle: doc.data().userHandle,
        userImage: doc.data().userImage,
        likeCount: doc.data().likeCount,
        commentCount: doc.data().commentCount,
        postId: doc.id
      });
    });
    return res.json(userData);
  })["catch"](function (err) {
    console.error(err);
    return res.status(500).json({
      error: err.code
    });
  });
}; // Get own user details


exports.getAuthenticatedUser = function (req, res) {
  var userData = {};
  db.doc("/user/".concat(req.user.handle)).get().then(function (doc) {
    if (doc.exists) {
      userData.credentials = doc.data();
      return db.collection('likes').where('userHandle', '==', req.user.handle).get();
    }
  }).then(function (data) {
    userData.likes = [];
    data.forEach(function (doc) {
      userData.likes.push(doc.data());
    });
    return db.collection('notifications').where('recipient', '==', req.user.handle).orderBy('createdAt', 'desc').limit(10).get();
  }).then(function (data) {
    userData.notifications = [];
    data.forEach(function (doc) {
      userData.notifications.push({
        recipient: doc.data().recipient,
        createdAt: doc.data().createdAt,
        sender: doc.data().sender,
        type: doc.data().type,
        read: doc.data().read,
        postId: doc.data().postId,
        notificationId: doc.id
      });
    });
    return res.json(userData);
  })["catch"](function (err) {
    console.err(err);
    return res.status(500).json({
      error: err.code
    });
  });
};

exports.uploadImage = function (req, res) {
  var BusBoy = require('BusBoy');

  var path = require('path');

  var os = require('os');

  var fs = require('fs');

  var busboy = new BusBoy({
    headers: req.headers
  });
  var imageFileName;
  var imageToBeUploaded = {};
  busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
    if (mimetype !== 'image/png' && mimetype !== 'image/jpeg') {
      return res.status(400).json({
        error: 'Wrong file type submitted.'
      });
    }

    console.log(filename);
    console.log(mimetype);
    console.log(filename); //my.image.png

    var imageExtension = filename.split('.')[filename.split('.').length - 1];
    var imageFileName = "".concat(Math.round(Math.random() * 10000000000), ".").concat(imageExtension);
    var filepath = path.join(os.tmpdir(), imageFileName);
    imageToBeUploaded = {
      filepath: filepath,
      mimetype: mimetype
    };
    file.pipe(fs.createWriteStream(filepath));
  });
  busboy.on('finish', function () {
    admin.storage().bucket().upload(imageToBeUploaded.filepath, {
      resumable: false,
      metadata: {
        metadata: {
          contentType: imageToBeUploaded.mimetype
        }
      }
    }).then(function () {
      var imageUrl = "https://firebasestorage.googleapis.com/v0/b/".concat(config.storageBucket, "/o/").concat(imageFileName, "?alt=media");
      return db.doc("/user/".concat(req.user.handle)).update({
        imageUrl: imageUrl
      });
    }).then(function () {
      return res.json({
        message: 'Image uploaded successfully.'
      });
    })["catch"](function (err) {
      console.error(err);
      return res.status(500).json({
        error: err.code
      });
    });
  });
  busboy.end(req.rawBody);
};

exports.markNotificationsRead = function (req, res) {
  var batch = db.batch();
  req.body.forEach(function (notificationId) {
    var notification = db.doc("/notifications/".concat(notificationId));
    batch.update(notification, {
      read: true
    });
  });
  batch.commit().then(function () {
    return res.json({
      message: "Notification marked read."
    });
  })["catch"](function (err) {
    console.error(err);
    return res.status(500);
  });
}; // Delete a post