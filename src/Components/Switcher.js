import React from 'react';
import {Switch, Grid} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
import {Store} from 'Store';
import {RebelAlliance, GalacticEmpire} from 'media/icons';


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


export default function Switcher() {
  const {state, dispatch} = React.useContext(Store);

  return (
    <>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <RebelAlliance fill={state.mode==='jedi'?'#f1ebd5':'gray'}
          style={{minWidth:30}}
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
          <GalacticEmpire fill={state.mode==='dark'?'#f1ebd5':'gray'}
          style={{minWidth:30}}
          />

        </Grid>
      </Grid>
    </>
  );
}
