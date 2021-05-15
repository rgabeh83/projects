const functions = require("firebase-functions");

const { db } = require('./util/admin')

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
    getAuthenticatedUser,
    getUserDetails,
    markNotificationsRead
} = require('./handlers/users')

const FBAuth = require('./util/fbAuth')

const app = require('express')()




// posts routes

app.get('/allposts', getAllPosts)

app.post('/post', FBAuth, post)
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
app.post('/users', FBAuth, addUserDetails)
app.get('/user', FBAuth, getAuthenticatedUser)
app.get('/user/:handle', getUserDetails)
app.post('/notifications', FBAuth, markNotificationsRead)






exports.api = functions.https.onRequest(app) 

exports.createNotificationOnLike = functions
    .firestore.document('likes/{id}')
    .onCreate((snapshot) =>  {
        return db.doc(`/posts/${snapshot.data().postId}`)
            .get()
            .then((doc) => {
                if(doc.exists && doc.data.userHandle !== snapshot.data().userHandle){
                    return db.doc(`/notifications/${snapshot.id}`).set({
                        createdAt: new Date().toISOString(),
                        recipient: doc.data().userHandle,
                        sender: snapshot.data().userHandle,
                        type: 'like',
                        read: false,
                        postId: doc.id
                     } )
                    
                }
            })
            .catch(err => {
                console.error(err)
            })
    })

    exports.deleteNotificationOnUnlike = functions
    .firestore.document('likes/{id}')
    .onDelete((snapshot) => {
       return  db
        .doc(`/notifications/${snapshot.id}`)
        .delete()
        .catch((err) => {
            console.error(err)
            return
        })
    })

    exports.createNotificationOnComment = functions.firestore.document('comments/{id}')
    .onCreate((snapshot) =>  {
        return db.doc(`/posts/${snapshot.data().postId}`)
            .get()
            .then((doc) => {
                if(doc.exists && doc.data.userHandle !== snapshot.data().userHandle){
                    return db.doc(`/notifications/${snapshot.id}`).set({
                        createdAt: new Date().toISOString(),
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

    exports.onUserImageChange = functions
    .firestore.document('/user/{userid}')
        .onUpdate((change) => {
            console.log(change.before.data())
            console.log(change.after.data())
            if(change.before.data().imageUrl !== change.after.data().imageUrl) {
                console.log('Image has changed')
            const batch = db.batch()
            return db.collection('posts')
                .where('userHandle', '==', change.before.data().handle)
                .get()
                .then((data) => {
                    data.forEach((doc) => {
                    const post = db.doc(`/posts/${doc.id}`)
                    batch.update(post, { userImage: change.after.data().imageUrl})
                })
                return batch.commit()
            })
        } else return true
        })

    exports.onPostDelete = functions.firestore
        .document('/posts/{postId}')
        .onDelete((snapshot, context) => {
        const postId = context.params.postId;
        const batch = db.batch()
        return db.collection('comments').where('postId', '==', postId).get()
            .then(data => {
                data.forEach(doc => {
                    batch.delete(db.doc(`/comments/${doc.id}`))
                })
                return db.collection('likes').where('postId', '==', postId).get()
            })
            .then(data => {
                data.forEach(doc => {
                    batch.delete(db.doc(`/likes/${doc.id}`))
                })
                return db.collection('notifications').where('postId', '==', postId).get
            })
            .then(data => {
                data.forEach(doc => {
                    batch.delete(db.doc(`/notifications/${doc.id}`))
                })
                return batch.commit()
            })
            .catch(err => console.error(err))
            
            
    })