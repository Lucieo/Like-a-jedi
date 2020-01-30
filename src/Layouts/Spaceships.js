import React from 'react';
import ItemCollection from 'Components/ItemCollection';
import {Grid} from '@material-ui/core';


export default function Spaceships(){
  return(
    <div style={{padding:20}}>
      <Grid container justify="center" spacing={2}>
        <ItemCollection collectionType='ships'/>
      </Grid>
    </div>
  )

}
