import React, { useState, useContext } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Context } from '../../src/context/context'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import MyButton from '../util/myButton'


//Mui
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

//icons 
import ChatIcon from '@material-ui/icons/Chat'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import { FormatColorReset } from '@material-ui/icons'
import { FormatListBulleted } from '@material-ui/icons'

const styles = {
    card: {
        position: 'relative',
        display: 'flex',
        marginBottom: 20
    },
    image: {
        minWidth: 200
    },
    content: {
        padding: 25,
        objectFit: 'cover'
    }
}

function LikeButton(props) {
    const checkIfPostLiked = () => {
        if(likes && likes.find((like) => like.postId === postId))
        return true
            else return false
    }
  
    
    const { postId } = props
    function clickTolikePost(){
        likePost(postId)
    }

    function clickToUnlikePost() {
        unlikePost(postId)
    }
    const { likePost, unlikePost, state: { authenticated, credentials, likes  } } = useContext(Context)
    console.log(likes)

  console.log(postId)

    const likeButton = !authenticated ? (
        <MyButton tip="like">
            <Link to="/login">
                <FavoriteBorder color="primary"/>
            </Link>
        </MyButton>
    ) :  (
        checkIfPostLiked() ? (
            <MyButton tip="Undo Like" onClick={clickToUnlikePost}>
                <FavoriteIcon color="primary" />
            </MyButton>
        ) : (
            <MyButton tip="Like" onClick={clickTolikePost}>
                <FavoriteBorder color="primary"/>
            </MyButton>
        )
    )

   return ( <div>
            {likeButton}
                </div>
   )   
   }

export default withStyles(styles)(LikeButton)