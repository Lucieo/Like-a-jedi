import React from 'react';
import {Switch, Grid} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
import {Store} from 'Store';
import rebel from 'media/icons/rebel-alliance.png';
import galactic from 'media/icons/galactic-empire.png';


const CustomSwitch = withStyles({
  switchBase: {
    color: green[500],
    '&$checked': {
      color: red[500],
    },
    '&$checked + $track': {
      backgroundColor: red[500],
    },
  },
  track:{
    backgroundColor:green[500]
  }
})(Switch);

const styles = {
  disabledIcon:{
    opacity:0.4
  }
}

export default function Switcher() {
  const {state, dispatch} = React.useContext(Store);

  return (
    <>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <img
            src={rebel}
            alt='rebel alliance'
            style={state.mode==='jedi'?{}:styles.disabledIcon}
          />
        </Grid>
        <Grid item>
          <CustomSwitch
            checked={state.mode==='dark'}
            onChange={()=>dispatch({type:'TOGGLE_MODE'})}
            value="right"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </Grid>
        <Grid item>
          <img
            src={galactic}
            alt='galactic empire'
            style={state.mode==='dark'?{}:styles.disabledIcon}
          />
        </Grid>
      </Grid>
    </>
  );
}
