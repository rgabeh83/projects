import React from 'react'
import PropTypes from 'prop-types'
import  NoImg  from '../img/no-img.png'
//MUI
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/paper'
//Icons
import LocationOn from '@material-ui/icons/LocationOn'
import LinkIcon from '@material-ui/icons/Link'
import CalendarToday from '@material-ui/icons/CalendarToday'
import { Context } from '../context/context'

const styles = (theme) => (
    {
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
    }
)

function ProfileSkeleton(props) {
    const { classes } = props
    
    return (
        <Paper className={classes.paper}>
            <div className={classes.profile}>
                <div className="image-wrapper">
                    <img src={NoImg} alt="profile" className="profile-image"/>
                </div>
           
            <hr/>
            <div className="profile-details">
                <div className={classes.handle}/>
                <hr/>
                <div className={classes.fullLine}/>
                <div className={classes.fullLine}/>
                <hr/>
                <LocationOn color="primary"/><span>Location</span>
                <hr/>
                <LinkIcon color="primary"/>www.website.com
                <hr/>
                <CalendarToday color="primary"/>Joined date
            </div>
            </div>
        </Paper>
    )
}

// ProfileSkeleton.propTypes = {
//     classes: PropTypes.object.isRequired
// }

export default withStyles(styles)(ProfileSkeleton)