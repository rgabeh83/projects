import React, { useContext, Fragment } from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'
import dayJs from 'dayjs'
import { Context } from '../../context/context'

//MUI 
import MyButton from '../../util/myButton'
import ProfileSkeleton from '../../util/profileSkeleton'
import { Profiler } from 'react'
import MuiLink from '@material-ui/core/Link'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'

//Icons
import LocationOn from '@material-ui/icons/LocationOn'
import LinkIcon from '@material-ui/icons/Link'
import CalendarToday from '@material-ui/icons/CalendarToday'

const styles = (theme) => ({
    palette: {
        primary: {
          main: '#f48fb1',
        },
        secondary: {
          main: '#f44336',
        },
      },
      typography: {
        useNextVariants: true
      },
      form: {
        textAlign: 'center'
      },
      image: {
        margin: '20px auto 20px auto'
      },
      pageTitle: {
        margin: '10px auto 10px auto'
      },
      textField: {
        margin: '10px auto 10px auto'
      },
      button: {
        marginTop: 20,
        position: 'relative'
      },
      customError: {
        color: 'red',
        fontSize: '0.8rem',
        marginTop: 10
      },
      progress: {
        position: 'absolute'
      },
      invisibleSeparator: {
        border: 'none',
        margin: 4
      },
      visibleSeparator: {
        width: '100%',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        marginBottom: 20
      },
      paper: {
        padding: 20
      },
      profile: {
        '& .image-wrapper': {
          textAlign: 'center',
          position: 'relative',
          '& button': {
            position: 'absolute',
            top: '80%',
            left: '70%'
          }
        },
        '& .profile-image': {
          width: 200,
          height: 200,
          objectFit: 'cover',
          maxWidth: '100%',
          borderRadius: '50%'
        },
        '& .profile-details': {
          textAlign: 'center',
          '& span, svg': {
            verticalAlign: 'middle'
          },
          '& a': {
            color: '#00bcd4'
          }
        },
        '& hr': {
          border: 'none',
          margin: '0 0 10px 0'
        },
        '& svg.button': {
          '&:hover': {
            cursor: 'pointer'
          }
        }
      },
      buttons: {
        textAlign: 'center',
        '& a': {
          margin: '20px 10px'
        }
      }
    });

function Profile(props) {
const { state:  { credentials: { handle, createdAt, imageUrl, bio, website, location }, loading, authenticated }} = useContext(Context)
const { classes } = props

let profileMarkup = !loading ? (authenticated ? (
    <Paper className={classes.paper}>
        <div className={classes.profile}>
            <div className="profile-image">
                <img src={imageUrl} alt="profile"/>
            </div>
            <hr/>
            <div className="profile-details">
                <MuiLink component={Link} to={`/users/${handle}`} color="primary" variant="h5">
                    @{handle}
                </MuiLink>
            <hr/>
            {bio && <Typography variant="body2">{bio}</Typography>}
            <hr/>
            {location && (
                <Fragment>
                <LocationOn color="primary"/><span>{location}</span>
                <hr/>
                </Fragment>
            )}
            {website && (
                <Fragment>
                    <LinkIcon color="primary"/>
                    <a href={website} target="_blank" rel="noopener noreferrer">
                        {''}
                        {website}
                    </a>
                    <hr/>
                </Fragment>
            )}
            <CalendarToday color="primary"/>{''}
            <span>Joined {dayJs(createdAt).format('MMM YYYY')}</span>
         
            </div>
        </div>
    </Paper>
) : (
    <Paper className={classes.paper}>
        <Typography variant="body2" align="center">
            No profile found, please login again.
        </Typography>
        <div className={classes.buttons}>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/login"
                >
                Login
            </Button>
            <Button
                variant="contained"
                color="secondary"
                component={Link}
                to="/signup"
                >
               Signup
            </Button>
        </div>
    </Paper>
)) : (
    <ProfileSkeleton/>
)
    return (
            profileMarkup
    )
    }
export default withStyles(styles)(Profile)