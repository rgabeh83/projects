import React from 'react'
import NoImg from '../img/no-img.png'
import PropTypes from 'prop-types'

//MUI

import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'

import withStyles from '@material-ui/core/styles/withStyles'

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
export default function postSkeleton(props) {
    const { classes } = props
    return (
        <div>
            Post Skeleton
        </div>
    )
}


