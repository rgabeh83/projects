import React, { Fragment, useContext, useState, useEffect } from 'react';
import { Context } from '../context/context'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import MyButton from '../util/myButton'


//Mui Icons
import  EditIcon  from '@material-ui/icons/Edit';
import ToolTip from '@material-ui/core/ToolTip'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton'
;


const styles = (theme) => ({
    palette: {
        primary: {
          main: '#f48fb1',
        },
        secondary: {
          main: '#f44336',
        },
      },
      button: {
        float: 'right'
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
      button: {
        float: 'right'
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
          borderRadius: '50%',
          margin: '0 auto'
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



    function EditDetails(props) {
        const [ editUserInfo, setEditUserInfo ]  = useState({
            bio: '',
            website: '',
            location: '',
            open: false
        })

        const { editUserDetails }= useContext(Context)

        
        function mapUserDetailsToState(credentials){
            setEditUserInfo({
                ...editUserInfo,
                bio: credentials.bio ? credentials.bio : '',
                website: credentials.website ? credentials.website : '',
                location: credentials.location ? credentials.location : ''
            })
        }


        function handleOpen() {
            setEditUserInfo({
                ...editUserInfo,
                open: true
            })
            // mapUserDetailsToState(props.credentials)
        }
        function handleClose(){
            setEditUserInfo({
                open: false})
        }
      

        // useEffect(() => {
        //     const { credentials } = props
        //     mapUserDetailsToState(credentials)
        // }, [])

        function handleChange (event) {
            setEditUserInfo({
                // ...editUserInfo,
                [event.target.name] : event.target.value
            })
        }

        function handleSubmit() {
            // con

            console.log('handleSubmit')
            
            handleClose()
        }


     ////PUT 

       
        const { classes } = props
        return (
            <div>

                Edit User
                <Fragment>
                    <ToolTip title="Edit Details" placement="bottom">
                        <IconButton onClick={handleOpen} >
                            <EditIcon color="primary"/>
                        </IconButton>
                        </ToolTip>
                    
                    <Dialog
                        open={editUserInfo.open}
                        onClose={handleClose}
                        fullWidth
                        maxWidth="sm">
                            <DialogTitle>Edit your details</DialogTitle>
                            <DialogContent>
                                <forn>
                                    <TextField
                                        name="bio"
                                        type="text"
                                        label="Bio"
                                        multiline
                                        rows="3"
                                        placeholder="A short bio about yourself"
                                        className={classes.textField}
                                        value="{editUserInfo.bio}"
                                        onChange={handleChange}
                                        fullWidth
                                    >
                                    </TextField>
                                    <TextField
                                        name="website"
                                        type="text"
                                        label="Website"
                                        multiline
                                        rows="3"
                                        placeholder="Your personal/professional website"
                                        className={classes.textField}
                                        value=""
                                        onChange={handleChange}
                                        fullWidth
                                    >
                                    </TextField>
                                    <TextField
                                        name="location"
                                        type="text"
                                        label="Location"
                                        multiline
                                        rows="3"
                                        placeholder="Your location"
                                        className={classes.textField}
                                        value="{editUserInfo.location}"
                                        onChange={handleChange}
                                        fullWidth
                                    >
                                    </TextField>
                                </forn>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={handleSubmit} color="primary">
                                    Save
                                    </Button> 
                                </DialogActions>
                        </Dialog>
                </Fragment> 
            </div>
        )
    }




    export default withStyles(styles)(EditDetails)