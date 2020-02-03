import React from 'react';
import ItemCollection from 'Components/ItemCollection';
import {Grid, Typography} from '@material-ui/core';

const styles={
  pad20:{
    padding:20
  },
  partWrapper:{
    maxWidth:1000,
    padding:20,
    margin:'0 auto'
  }
}

export default function Equipment(){
  return(
    <div style={styles.partWrapper}>
      <Typography variant='h3' style={styles.pad20}>Equipment</Typography>
      <Grid container spacing={2}>
        <ItemCollection collectionType='equipment'/>
      </Grid>
    </div>
  )

}
