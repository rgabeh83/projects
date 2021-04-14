"use strict";

var _require = require('../util/admin'),
    db = _require.db,
    admin = _require.admin;

exports.getAllPosts = function (req, res) {
  db.collection('posts').orderBy('createdAt', 'desc').get().then(function (data) {
    var post = [];
    data.forEach(function (doc) {
      post.push({
        postId: doc.id,
        body: doc.data().body,
        userHandle: doc.data().userHandle,
        createdAt: doc.data().createdAt,
        commentCount: doc.data().commentCount,
        likeCount: doc.data().likeCount,
        userImage: doc.data().userImage
      });
    });
    return res.json(post);
  })["catch"](function (err) {
    return console.error(error);
  });
};

exports.post = function (req, res) {
  if (req.body.body.trim() === '') {
    return res.status(400).json({
      body: 'Body must not be empty '
    });
  }

  var newPost = {
    body: req.body.body,
    userHandle: req.user.handle,
    userImage: req.user.imageUrl,
    createdAt: new Date().toISOString(),
    likeCount: 0,
    commentCount: 0
  };
  db.collection('posts').add(newPost).then(function (doc) {
    var resPost = newPost;
    resPost.postId = doc.id;
    res.json(resPost);
  })["catch"](function (err) {
    res.status(500).json({
      error: 'something went wrong'
    });
    console.error(err);
  });
};

exports.getPost = function (req, res) {
  var postData = {};
  db.doc("/posts/".concat(req.params.postId)).get().then(function (doc) {
    if (!doc.exists) {
      return res.status(404).json({
        error: 'Post not found.'
      });
    }

    postData = doc.data();
    postData.postId = doc.id;
    return db.collection('comments').orderBy('createdAt', 'desc').where('postId', '==', req.params.postId).get();
  }).then(function (data) {
    postData.comments = [];
    data.forEach(function (doc) {
      postData.comments.push(doc.data());
    });
    return res.json(postData);
  })["catch"](function (err) {
    console.error(err);
    res.status(500).json({
      error: err.code
    });
  });
}; //Comment on a post


exports.commentOnPost = function (req, res) {
  if (req.body.body.trim() === '') return res.status(400).json({
    comment: 'Must not be empty.'
  });
  var newComment = {
    body: req.body.body,
    createdAt: new Date().toISOString(),
    postId: req.params.postId,
    userHandle: req.user.handle,
    userImage: req.user.imageUrl
  };
  db.doc("/posts/".concat(req.params.postId)).get().then(function (doc) {
    if (!doc.exists) {
      return res.status(404).json({
        error: 'Post does not exist.'
      });
    }

    return doc.ref.update({
      commentCount: doc.data().commentCount + 1
    });
  }).then(function () {
    return db.collection('comments').add(newComment);
  }).then(function () {
    res.json(newComment);
  })["catch"](function (err) {
    res.status(500).json({
      error: 'something went wrong'
    });
  });
}; //Like post


exports.likePost = function (req, res) {
  var likeDocument = db.collection('likes').where('userHandle', '==', req.user.handle).where('postId', '==', req.params.postId).limit(1);
  var postDocument = db.doc("/posts/".concat(req.params.postId));
  var postData;
  postDocument.get().then(function (doc) {
    if (doc.exists) {
      postData = doc.data();
      postData.postId = doc.id;
      return likeDocument.get();
    } else {
      return res.status(404).json({
        error: 'Post not found'
      });
    }
  }).then(function (data) {
    if (data.empty) {
      return db.collection('likes').add({
        postId: req.params.postId,
        userHandle: req.user.handle
      }).then(function () {
        postData.likeCount++;
        return postDocument.update({
          likeCount: postData.likeCount
        });
      }).then(function () {
        return res.json(postData);
      });
    } else {
      return res.status(400).json({
        error: 'Post already liked'
      });
    }
  })["catch"](function (err) {
    console.error(err);
    res.status(500).json({
      error: err.code
    });
  });
}; //Unlike post 


exports.unlikePost = function (req, res) {
  var likeDocument = db.collection('likes').where('userHandle', '==', req.user.handle).where('postId', '==', req.params.postId).limit(1);
  var postDocument = db.doc("/posts/".concat(req.params.postId));
  var postData;
  postDocument.get().then(function (doc) {
    if (doc.exists) {
      postData = doc.data();
      postData.postId = doc.id;
      return likeDocument.get();
    } else {
      return res.status(404).json({
        error: 'Post not found'
      });
    }
  }).then(function (data) {
    if (data.empty) {
      return res.status(400).json({
        error: 'Post not liked'
      });
    } else {
      return db.doc("/likes/".concat(data.docs[0].id))["delete"]().then(function () {
        postData.likeCount--;
        return postDocument.update({
          likeCount: postData.likeCount
        });
      }).then(function () {
        res.json(postData);
      });
    }
  })["catch"](function (err) {
    console.error(err);
    res.status(500).json({
      error: err.code
    });
  });
}; // Delete a post


exports.deletePost = function (req, res) {
  var document = db.doc("/posts/".concat(req.params.postId));
  document.get().then(function (doc) {
    if (!doc.exists) {
      return res.status(404).json({
        error: 'Post not found'
      });
    }

    if (doc.data().userHandle !== req.user.handle) {
      return res.status(403).json({
        error: "Unauthorized"
      });
    } else {
      return document["delete"]();
    }
  }).then(function () {
    res.json({
      message: "Post deleted successfully"
    });
  })["catch"](function (err) {
    console.error(err);
    return res.status(500).json({
      error: err.code
    });
  });
};