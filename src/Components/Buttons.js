import React from 'react';
import {Button, makeStyles} from '@material-ui/core';
import {Luck} from 'media/icons';


const OutlinedButton=(props)=> {

  return (
     <Button
      variant="outlined"
      style={{
        color:props.active? 'white' : (props.color || "rgb(77, 212, 195)"),
        fontFamily:'Audiowide, sans-serif',
        borderColor:(props.color || "rgb(77, 212, 195)"),
        borderRadius:20,
        margin:5,
        background:props.active? (props.color || "rgb(77, 212, 195)"): 'transparent',
      }}
      onClick={()=>props.clickAction()}
    >{props.text}</Button>
  );
}



export {
  OutlinedButton
}
