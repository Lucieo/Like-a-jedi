import React from 'react';
import {Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Grid} from '@material-ui/core';
import {Store} from 'Store';
import {OutlinedButton} from 'Components/Buttons';
import {WinDamaged, LoseDamaged, Cup, Dead, Lose} from 'media/icons';
import CancelIcon from '@material-ui/icons/Cancel';
import { withRouter } from 'react-router';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const styles={
  title:{
    color:'gray'
  },
  body:{
    fontFamily:"'Montserrat', sans-serif",
    color:'gray',
    textAlign:'center'
  },
  dialog:{
    maxWidth:350,
    padding:20
  }
}

const getIcon = (type, color, size)=>{
  console.log(color)
  switch (type) {
    case 'win':
      return <Cup style={{maxWidth:(size || 60)}} fill={color}/>
    case 'winDamage':
      return <WinDamaged style={{maxWidth:(size || 60)}} fill={color}/>
    case 'loseDamage':
      return <LoseDamaged style={{maxWidth:(size || 60)}} fill={color}/>
    case 'loser':
      return <Lose style={{maxWidth:(size || 60)}} fill={color}/>
    case 'dead':
      return <Dead style={{maxWidth:(size || 60)}}fill={color} />
    case 'error':
      return <CancelIcon style={{color:color, fontSize:'xxx-large'}}/>
    default:
      return false
  }
}


const MessageDialog = withRouter((props)=>{
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

  const restartGame = ()=>{
    dispatch({type:'RESTART_GAME'});
    props.history.push('/')
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
          disableBackdropClick={state.dead}
        >
          <DialogTitle id="alert-dialog-slide-title">
            <Typography align='center'>{getIcon(state.dialog.type, "rgb(77, 212, 195)")}</Typography>
            <Typography align='center' style={styles.title}>{state.dialog.title}</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText
            id="alert-dialog-slide-description"
            style={styles.body}
            >
             {state.dialog.text}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Grid container justify='center'>
            {
              state.dead
              ?<OutlinedButton
                text='Restart Game'
                clickAction={()=>restartGame()}
              />
              :<OutlinedButton
                text='close'
                clickAction={()=>handleClose()}
              />
            }
            </Grid>
          </DialogActions>
        </Dialog>

    }
    </>

  );
})

export{
  MessageDialog,
  getIcon
}
