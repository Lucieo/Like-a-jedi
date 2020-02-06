import React from 'react';
import {Grid} from '@material-ui/core';
import {CharacterInfos, Inventory} from 'Components/Profile';
import styles from 'Style/AppStyle.js';

export default ()=>{
  return(
    <Grid
    container
    style={styles.pageWrapper}
    direction="row"
    justify="center">
      <Grid item sm={4} xs={12} style={styles.partWrapper}>
        <CharacterInfos/>
      </Grid>

      <Grid item sm={8} xs={12} style={styles.partWrapper}>
        <Inventory/>
      </Grid>
    </Grid>
  )
}
