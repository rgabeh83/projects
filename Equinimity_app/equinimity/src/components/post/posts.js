import React, { useContext } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link }  from 'react-router-dom'
import LikeButton from '../../util/likeButton'
import MyButton from '../../util/myButton'
import { Context } from '../../context/context'
import DeletePost from '../../components/post/deletePost'
//MUI stuff
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { Typography } from '@material-ui/core'
import dayjs from 'dayjs'

//Mui Icon
import ChatIcon from '@material-ui/icons/Chat'

var relativeTime = require('dayjs/plugin/relativeTime')

const styles = {
    card: {
        position: 'relative',
        display: 'flex',
        margin: 20,

    },
        image: {
            minWidth: 150,
        },
    content: {
        padding: 25,
        objectFit: 'cover'
    }


}

function Posts(props){
   
        const { classes, post : { body, createdAt, userImage, userHandle, postId, likeCount, commentCount } } = props

        const { state: { authenticated, credentials: { handle }} } = useContext(Context)


        dayjs.extend(relativeTime)

        const deleteButton = authenticated && userHandle === handle ? (
            <DeletePost postId={postId}/>
        ) : null
    return (
        <Card className={classes.card}>
        <CardMedia 
            image={userImage}
            title="Profile image"
            className={classes.image}
            />
        <CardContent className={classes.content}>
            <Typography
                variant="h5"
                component={Link}
                to={`/users/${userHandle}`}
                color="primary"
                >
                    {userHandle}
                </Typography>
                {deleteButton}
            <Typography variant="body2" color="textSecondary">
                {dayjs(createdAt).fromNow()}
            </Typography>
            <Typography variant="body1">{body}</Typography>
            <LikeButton postId={postId}/>
            <span>{likeCount} Likes</span>
            <MyButton tip="comments">
                <ChatIcon color="primary"/>
            </MyButton>
            <span>{commentCount} Comments</span>
        </CardContent>
    </Card>
)
}

export default withStyles(styles)(Posts)