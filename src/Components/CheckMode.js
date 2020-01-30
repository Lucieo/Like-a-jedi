import React from 'react';
import {Store} from 'Store';

export default ChildComponent =>{
  const CheckMode= (props)=>{
    const {state, dispatch} = React.useContext(Store);
    React.useEffect(()=>{
      if(state.mode!=='jedi'){
        props.history.push('/')
      }
    })

    return <ChildComponent {...props}/>;
  }
  return CheckMode;
}
