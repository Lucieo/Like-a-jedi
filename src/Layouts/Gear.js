import React from 'react';
import ItemCollection from 'Components/ItemCollection';
import {Grid} from '@material-ui/core';


export default function Gear(){
  return(
    <Grid container justify="center" spacing={2} style={{padding:20}}>
      <ItemCollection collectionType='gear'/>
    </Grid>
  )

}
