import React from 'react';
import {Grid, Typography, Button} from '@material-ui/core';
import {OutlinedButton} from 'Components/Buttons';

export default function EmptyCategory({errorMessage, clickAction, btnMessage}){
  return(
    <div style={{marginTop:10}}>
      <Typography style={{color:'#4dd4c3'}}>
        {errorMessage}
      </Typography>
      <OutlinedButton
      variant='outlined'
      clickAction={()=>clickAction()}
      text={btnMessage}
      color='#4dd4c3'
      />
    </div>
  )
}
