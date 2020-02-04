import React from 'react';
import {Button, makeStyles} from '@material-ui/core';


const OutlinedButton=(props)=> {

  return (
     <Button
      variant="outlined"
      style={{
        color:props.active? 'white' : props.color,
        fontFamily:'Audiowide, sans-serif',
        borderColor:props.color,
        borderRadius:20,
        margin:5,
        background:props.active? props.color: 'transparent'
      }}
      onClick={()=>props.clickAction()}
    >{props.text}</Button>
  );
}



export {
  OutlinedButton
}
