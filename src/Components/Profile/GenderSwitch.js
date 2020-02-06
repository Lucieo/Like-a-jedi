import React from 'react';
import {OutlinedButton} from 'Components/Buttons';
import {Store} from 'Store';

export default function GenderSwitch(){
  const {state, dispatch} = React.useContext(Store);

  return(
    <>
      <OutlinedButton variant='outlined' clickAction={()=>dispatch({type:'ADD_INFO', field:'gender', payload:'female'})} text='Female' color='#4dd4c3' active={state.gender==='female'}/>
      <OutlinedButton variant='outlined' clickAction={()=>dispatch({type:'ADD_INFO', field:'gender', payload:'male'})} text='Male' color='#4dd4c3' active={state.gender==='male'}/>
    </>
  )
}
