import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link }  from 'react-router-dom'

//MUI stuff
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { Typography } from '@material-ui/core'
import dayjs from 'dayjs'
var relativeTime = require('dayjs/plugin/relativeTime')

const styles = {
    card: {
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
   
        const { classes, post : { body, createdAt, userImage, userHandle, postId, likeCount, commentCount }} = props
        dayjs.extend(relativeTime)
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.image} image={userImage}
                title="Profile Image" />
                <CardContent className={classes.content}>
                    <Typography 
                        variant="h5" 
                        component={Link}
                        to={`/users/${userHandle}`}>{userHandle}
                        </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary">{dayjs(createdAt).fromNow()}
                        </Typography>
                    <Typography 
                        variant="body1">{body}
                        </Typography>
                    <Typography
                        variant="body2">{likeCount}
                        </Typography>
                </CardContent>
        </Card>

    )
}

export default withStyles(styles)(Posts)