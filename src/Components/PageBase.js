import React from 'react';
import {Store} from 'Store';
import {Typography, Grid} from '@material-ui/core'

const styles={
  pad20:{
    padding:'20px 0px'
  },
  partWrapper:{
    maxWidth:800,
    padding:20,
    margin:'0 auto'
  }
}

export default function BuyingPagesBase(props){
  const {state, dispatch} = React.useContext(Store);

  return(
    <div style={styles.partWrapper}>
      <Grid container justify='space-between' alignItems='center'>
        <Grid item>
          <Typography variant='h3' style={styles.pad20}>
            {props.title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography>{state.credits} GC available</Typography>
        </Grid>
      </Grid>
        {props.children}
    </div>
  )
}
