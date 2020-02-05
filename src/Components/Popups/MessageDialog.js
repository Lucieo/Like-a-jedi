import React from 'react';
import {Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide} from '@material-ui/core';
import {Store} from 'Store';
import {OutlinedButton} from 'Components/Buttons';
import {Lucky, Loser} from 'media/icons';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const styles={
  svgIcon:{
    maxWidth:60
  },
  title:{
    color:'gray'
  },
  body:{
    fontFamily:"'Montserrat', sans-serif",
    color:'gray'
  },
  dialog:{
    maxWidth:350,
    padding:20
  }
}


export default function MessageDialog() {
  const {state, dispatch} = React.useContext(Store);
  const [open, setOpen] = React.useState(false);

  React.useEffect(()=>{
    if(state.dialog!==undefined){
      setOpen(true);
    }
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    dispatch({
      type:'ADD_INFO',
      payload:undefined,
      field:'dialog'});
    setOpen(false);
  };

  const getIcon = ()=>{
    switch (state.dialog.type) {
      case 'lucky':
        return <Lucky style={styles.svgIcon} fill="rgb(77, 212, 195)"/>
      case 'loser':
        return <Loser style={styles.svgIcon} fill="rgb(77, 212, 195)"/>

      default:
        return false
    }
  }

  return (
    <>
    {state.dialog &&
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          PaperProps={{
            style: styles.dialog
          }}
        >
          <DialogTitle id="alert-dialog-slide-title">
            <Typography align='center'>{getIcon()}</Typography>
            <Typography align='center' style={styles.title}>{state.dialog.title}</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
            <Typography
             style={styles.body}
             align='center'
             >
             {state.dialog.text}
             </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <OutlinedButton
              text='close'
              color=''
              clickAction={()=>handleClose()}
            />
          </DialogActions>
        </Dialog>

    }
    </>

  );
}
