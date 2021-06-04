import React, { Fragment, useContext, useState } from 'react'
import MyButton from '../../util/myButton'
import { Context } from '../../context/context'

//Mui 
import withStyles from '@material-ui/core/styles/withStyles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import DeleteOutline from '@material-ui/icons/DeleteOutline'



const styles = {
    deleteButton: {
        top: '10%',
        left: '90%',
        position: 'absolute'
    }
}

function DeletePost(props) {
    const [ state, setState ] = useState({
        open: false
    })

    function handleOpen(){
        setState({
            open: true
        })
        console.log('open')
    }
    console.log(state.open)
    function handleClose(){
        setState({
            open: false
        })

        console.log(state)
    }
    const { classes, postId } = props

    function deleteThisPost(){
            deletePost(postId)
            setState({open: false})
    }

    const { deletePost } = useContext(Context)
    
    return (
       <Fragment>
            <MyButton tip="Delete Post"
            onClick={handleOpen}
            btnClassName={classes.deleteButton}>
               <DeleteOutline color="secondary"/>
            </MyButton>
            <Dialog
                open={state.open}
                // onClose={handleClose}
                fullWidthmaxWidth="sm"
                >
                    <DialogTitle>
                        Are your sure you want to delete post?
                    </DialogTitle>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={deleteThisPost} color="primary">
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
       </Fragment>
            
        
    )
}

export default withStyles(styles)(DeletePost)

