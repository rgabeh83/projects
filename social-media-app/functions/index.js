const functions = require("firebase-functions");

const { db } = require('/util/admin')

const { 
    getAllPosts,
    post,
    getPost,
    commentOnPost,
    likePost,
    unlikePost,
    deletePost
    } = require('./handlers/posts')

const {
    signup,
    login,
    uploadImage,
    addUserDetails,
    getAuthenticatedUser
} = require('./handlers/users')

const FBAuth = require('./util/fbAuth')

const app = require('express')()




// posts routes

app.get('/posts', getAllPosts)

app.post('/posts', FBAuth, post)
app.get('/posts/:postId', getPost)
app.delete('/posts/:postId', FBAuth, deletePost)
app.get('/posts/:postId/like', FBAuth, likePost)
app.get('/posts/:postId/unlike', FBAuth, unlikePost)
app.post('/posts/:postId/comment', FBAuth, commentOnPost)



//delete post


//like post

//unlike post

//comment on scream
// users routes

app.post('/signup', signup)

app.post('/login', login)
app.post('/user/image', FBAuth, uploadImage)
app.post('/user', FBAuth, addUserDetails)
app.get('/user', FBAuth, getAuthenticatedUser)






exports.api = functions.https.onRequest(app) 

exports.createNotificationOnLike = functions.firestore.document('likes/{id}')
    .onCreate((snapshot) =>  {
        db.doc(`/posts/${snapshot.data().postId}`).get()
            .then(doc => {
                if(doc.exists){
                    return db.doc(`/notifications/${snapshot.id}`).set({
                        createdAt: new Date().toISOString,
                        recipient: doc.data().userHandle,
                        sender: snapshot.data().userHandle,
                        type: 'like',
                        read: false,
                        postId: doc.id
                     } )
                    
                }
            })
            .then(() => {
                return
            })
            .catch(err => {
                console.error(err)
                return
            })
    })

    exports.deleteNotificationOnUnlike = functions
    .firestore.document('likes/{id}')
    .onDelete((snapshot) => {
        db.doc(`/notifications/${snapshot.id}`)
        .delete()
        .then(() => {
            return 
        })
        .catch((err) => {
            console.error(err)
            return
        })
    })

    exports.createNotificationOnComment = functions.firestore.document('comments/{id}')
    .onCreate((snapshot) =>  {
        db.doc(`/posts/${snapshot.data().postId}`).get()
            .then(doc => {
                if(doc.exists){
                    return db.doc(`/notifications/${snapshot.id}`).set({
                        createdAt: new Date().toISOString,
                        recipient: doc.data().userHandle,
                        sender: snapshot.data().userHandle,
                        type: 'comment',
                        read: false,
                        postId: doc.id
                     } )
                    
                }
            })
            .then(() => {
                return
            })
            .catch(err => {
                console.error(err)
                return
            })
    })