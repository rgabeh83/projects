"use strict";

var functions = require("firebase-functions");

var _require = require('./util/admin'),
    db = _require.db;

var _require2 = require('./handlers/posts'),
    getAllPosts = _require2.getAllPosts,
    post = _require2.post,
    getPost = _require2.getPost,
    commentOnPost = _require2.commentOnPost,
    likePost = _require2.likePost,
    unlikePost = _require2.unlikePost,
    deletePost = _require2.deletePost;

var _require3 = require('./handlers/users'),
    signup = _require3.signup,
    login = _require3.login,
    uploadImage = _require3.uploadImage,
    addUserDetails = _require3.addUserDetails,
    getAuthenticatedUser = _require3.getAuthenticatedUser,
    getUserDetails = _require3.getUserDetails,
    markNotificationsRead = _require3.markNotificationsRead;

var FBAuth = require('./util/fbAuth');

var app = require('express')(); // posts routes


app.get('/allposts', getAllPosts);
app.post('/post', FBAuth, post);
app.get('/posts/:postId', getPost);
app["delete"]('/posts/:postId', FBAuth, deletePost);
app.get('/posts/:postId/like', FBAuth, likePost);
app.get('/posts/:postId/unlike', FBAuth, unlikePost);
app.post('/posts/:postId/comment', FBAuth, commentOnPost); //delete post
//like post
//unlike post
//comment on scream
// users routes

app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);
app.post('/user', FBAuth, addUserDetails);
app.get('/user', FBAuth, getAuthenticatedUser);
app.get('/user/:handle', getUserDetails);
app.post('/notifications', FBAuth, markNotificationsRead);
exports.api = functions.https.onRequest(app);
exports.createNotificationOnLike = functions.firestore.document('likes/{id}').onCreate(function (snapshot) {
  return db.doc("/posts/".concat(snapshot.data().postId)).get().then(function (doc) {
    if (doc.exists && doc.data.userHandle !== snapshot.data().userHandle) {
      return db.doc("/notifications/".concat(snapshot.id)).set({
        createdAt: new Date().toISOString(),
        recipient: doc.data().userHandle,
        sender: snapshot.data().userHandle,
        type: 'like',
        read: false,
        postId: doc.id
      });
    }
  })["catch"](function (err) {
    console.error(err);
  });
});
exports.deleteNotificationOnUnlike = functions.firestore.document('likes/{id}').onDelete(function (snapshot) {
  return db.doc("/notifications/".concat(snapshot.id))["delete"]()["catch"](function (err) {
    console.error(err);
    return;
  });
});
exports.createNotificationOnComment = functions.firestore.document('comments/{id}').onCreate(function (snapshot) {
  return db.doc("/posts/".concat(snapshot.data().postId)).get().then(function (doc) {
    if (doc.exists && doc.data.userHandle !== snapshot.data().userHandle) {
      return db.doc("/notifications/".concat(snapshot.id)).set({
        createdAt: new Date().toISOString(),
        recipient: doc.data().userHandle,
        sender: snapshot.data().userHandle,
        type: 'comment',
        read: false,
        postId: doc.id
      });
    }
  }).then(function () {
    return;
  })["catch"](function (err) {
    console.error(err);
    return;
  });
});
exports.onUserImageChange = functions.firestore.document('/user/{userid}').onUpdate(function (change) {
  console.log(change.before.data());
  console.log(change.after.data());

  if (change.before.data().imageUrl !== change.after.data().imageUrl) {
    console.log('Image has changed');
    var batch = db.batch();
    return db.collection('posts').where('userHandle', '==', change.before.data().handle).get().then(function (data) {
      data.forEach(function (doc) {
        var post = db.doc("/posts/".concat(doc.id));
        batch.update(post, {
          userImage: change.after.data().imageUrl
        });
      });
      return batch.commit();
    });
  } else return true;
});
exports.onPostDelete = functions.firestore.document('/posts/{postId}').onDelete(function (snapshot, context) {
  var postId = context.params.postId;
  var batch = db.batch();
  return db.collection('comments').where('postId', '==', postId).get().then(function (data) {
    data.forEach(function (doc) {
      batch["delete"](db.doc("/comments/".concat(doc.id)));
    });
    return db.collection('likes').where('postId', '==', postId).get();
  }).then(function (data) {
    data.forEach(function (doc) {
      batch["delete"](db.doc("/likes/".concat(doc.id)));
    });
    return db.collection('notifications').where('postId', '==', postId).get;
  }).then(function (data) {
    data.forEach(function (doc) {
      batch["delete"](db.doc("/notifications/".concat(doc.id)));
    });
    return batch.commit();
  })["catch"](function (err) {
    return console.error(err);
  });
});