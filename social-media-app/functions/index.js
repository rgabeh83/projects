const functions = require("firebase-functions");

const { getAllPosts, post} = require('./handlers/posts')
const { signup, login, uploadImage, addUserDetails } = require('./handlers/users')

const FBAuth = require('./util/fbAuth')

const app = require('express')()




// posts routes

app.get('/posts', getAllPosts)

app.post('/post', FBAuth, post)
// users routes

app.post('/signup', signup)

app.post('/login', login)
app.post('/user/image', FBAuth, uploadImage)
app.post('/user', FBAuth, addUserDetails)





exports.api = functions.https.onRequest(app) 