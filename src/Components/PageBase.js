import React from 'react';
import {Store} from 'Store';
import {Typography, Grid} from '@material-ui/core';
import styles from 'Style/AppStyle';


export default function PageBase(props){
  const {state, dispatch} = React.useContext(Store);

  return(
    <div style={styles.pageWrapper}>
      <Grid container justify='space-between' alignItems='center'>
        <Grid item>
          <Typography variant='h3' style={styles.partTitle}>
            {props.title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography>{state.credits} GC available / {state.life}% health</Typography>
        </Grid>
      </Grid>
        {props.children}
    </div>
  )
}
