import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import porg from 'media/porg.png';
import {Store} from 'Store';

export default function MessageSnackbar() {
  const {state, dispatch} = React.useContext(Store);
  const [open, setOpen] = React.useState(false);

  React.useEffect(()=>{
    if(state.message!==undefined){
      setOpen(true);
    }
  })

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({type:'ADD_INFO', payload:undefined, field:'message'});
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={state.message}
        action={
          <React.Fragment>
            <img src={porg}/>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
