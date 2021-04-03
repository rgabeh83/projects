const db = {    
    users: [
        {
            userId: 'raQikOhI7uhWT2jGVahREFGi96p1',
            email: 'r.gabehernandez@gmail.com',
            handle: 'user',
            createdAt: '2021-03-23T00:16:51.299Z',
            imageUrl: "https://firebasestorage.googleapis.com/v0/b/wellness-social.appspot.com/o/undefined?alt=media",
            bio: "Hello, I am your mom.",
            website: "www.yourmom.com",
            location: 'Visalia, Ca'
        }
    ],
    posts:  [
        {
            userHandle: 'user',
            body: 'this is the post vent',
            createAt: '2021-03-18T16:19:21.403Z',
            likeCount: 5,
            commentCount: 2,
        }
    ],
    likes: [
        {
            userHandle: "user",
            postId: "HmmXD2MLKp1ETYZWlAKO"
        },
        {
            userHandle: "user",
            postId: "nNtPfXO4jixWZVTtcPMf"
        }
    ],
    notifications: [
        {
            recipient: 'user',
            sender: 'your momma',
            read: 'true | false',
            postId: 'ugiugububuuibiuohohbioil',
            type: 'like | comment',
            createdAt: "2021-03-31T16:14:35.737Z"
        }
    ]
}
