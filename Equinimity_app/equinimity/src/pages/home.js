import React, { useEffect, useState, useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import propTypes from 'prop-types'
// import Posts from '../components/post/post'
import axios from 'axios'

import PostSkeleton from '../util/postSkeleton'
import Posts from '../components/post/posts'
import Profile from '../components/profile/profile'
import PropTypes from 'prop-types'
import { Context } from '../context/context'





//Material UI

function Home({children}) {
 
    
    // useEffect(() => {
    //     axios.get('/allposts')
    //        .then((res) => {
    //            console.log(res.data)
    //            setPosts(res.data)
    //            console.log(posts)
    //        })
    //        .catch((err) => {
    //            console.log('err=', err)
    //        })
    // }, [])

    useEffect(() => {
        getPosts()
    }, [])
    
   const { getPosts, state: { posts, loading,  }} = useContext(Context)
  // axios.get('/allposts')
        //    .then((res) => {
        //        console.log(res.data)
        //        setPosts(res.data)
        //    })
        //    .catch((err) => {
        //        console.log('err=', err)
        //    })
let allPosts = !loading ? posts.map(post => (<Posts key={post.postId}post={post}/>)) : <PostSkeleton/>
return (
       <Grid container spacing={16}>
           <Grid item sm={8} xs={12}>
    {allPosts}
           </Grid>
           <Grid item sm={4} xs={12}>
             <Profile />
            </Grid>
       </Grid>
    )
}
 
  
  export default Home
