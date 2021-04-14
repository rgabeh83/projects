import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'

import Posts from '../pages/posts'

const axios = require('axios')
//Material UI



function Home() {
    const [posts, setPosts] = useState(null)
    
    useEffect(() => {
        axios.get('/allposts')
           .then((res) => {
               console.log(res.data)
               setPosts(res.data)
    }, )

    }, [])
let allThePosts = posts ? posts.map(post => <Posts key={post.postId} post={post}/>) : <p>is loading...</p>

return (
       <Grid container spacing={16}>
           <Grid item sm={8} xs={12}>
    {allThePosts}
           </Grid>
           <Grid item sm={4} xs={12}>
              <p>Profile</p>
            </Grid>
       </Grid>
    )
}

export default Home