const { db, admin } = require('../util/admin')

const config = require('../util/config')

const firebase = require('firebase')
firebase.initializeApp(config)

const { validateSignupData, validateLoginData, reduceUserDetails } = require('../util/validators')


exports.signup = (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        handle: req.body.handle,
    }

    const { valid, errors } = validateSignupData(newUser)

    if(!valid) return res.status(400).json(errors)

    const noImg = 'no-img.png'
   
    let token, userId

    db.doc(`/user/${newUser.handle}`).get()
        .then(doc => {
            if (doc.exists) {
                return res.status(400).json({ handle: 'This handle has already been taken.'})
            } else {
                return firebase
            .auth()
            .createUserWithEmailAndPassword(newUser.email, newUser.password)
            }
        })
        .then(data => {
            userId = data.user.uid
            return data.user.getIdToken()

        })
        .then((idToken) => {
            token = idToken;
            const userCredentials = {
                handle: newUser.handle,
                email: newUser.email,
                createdAt: new Date().toISOString(),
                imageUrl: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${noImg}?alt=media`,
                userId: userId,
                
            }
            return db.doc(`/user/${newUser.handle}`).set(userCredentials)
        })
        .then(() =>  {
            return res.status(201).json({ token })
        })
        .catch(err => {
            console.error(err)
            if(err.code === "auth/email-already-in-use") {
                return res.status(400).json( { email: "email is already in use."})
            }
            return res.status(500).json({ error: err.code})
        })
}

exports.login = (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password,
    }
    const { valid, errors } = validateLoginData(user)

    if(!valid) return res.status(400).json(errors)

  

    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(data => {
            return data.user.getIdToken()
        })
        .then(token => {
            return res.json({ token })
        })
        .catch(err => {
            console.error(err)
            if(err.code === 'auth/wrong-password') {
                return res.status(403).json({ general: 'Wrong credentials, please try again'})
            } else return res.status(500).json({error: err.code})
        })
}

// Add user details

exports.addUserDetails = (req, res) => {
    let userDetails = reduceUserDetails(req.body)

    db.doc(`/user/${req.user.handle}`).update(userDetails)
        .then(() => {
            return res.json({ message: 'Details added successfully.'})
        })
        .catch(err => {
            return res.status(500).json({ error: ''})
        })

}

exports.uploadImage = (req, res) => {
    const BusBoy = require('BusBoy')
    const path = require('path')
    const os = require('os')
    const fs = require('fs')

    const busboy = new BusBoy({ headers: req.headers })

    let imageFileName;
    let imageToBeUploaded = {}
    

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
        if(mimetype !== 'image/png' && mimetype !== 'image/jpeg'){ 
            return res.status(400).json({ error: 'Wrong file type submitted.'});
        }
        console.log(filename);
        console.log(mimetype)
        console.log(filename)
        //my.image.png
        
        const imageExtension = filename.split('.')[filename.split('.').length - 1]
        const imageFileName = `${Math.round(Math.random()*10000000000)}.${imageExtension}`
        const filepath = path.join(os.tmpdir(), imageFileName)
        imageToBeUploaded = { filepath, mimetype}
        file.pipe(fs.createWriteStream(filepath))
    })
    busboy.on('finish', () => {
        admin.storage().bucket().upload(imageToBeUploaded.filepath, {
            resumable: false,
            metadata: {
                metadata: {
                    contentType: imageToBeUploaded.mimetype
                }
            }
        })
        .then(() => {
            const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media`
            return db.doc(`/user/${req.user.handle}`).update({ imageUrl })
        })
        .then(() => {
            return res.json({ message: 'Image uploaded successfully.' })
        })
        .catch(err => {
            console.error(err)
            return res.status(500).json({ error: err.code })
        })
    })
    busboy.end(req.rawBody)
}