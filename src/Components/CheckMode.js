import React from 'react';
import {Store} from 'Store';

export default function withCheckMode(ChildComponent){
  const WithCheckMode = (props)=>{
    const {state, dispatch} = React.useContext(Store);

    React.useEffect(()=>{
      if(state.mode!=='jedi'){
        props.history.push('/');
        dispatch({type:'ADD_INFO', payload:'This section is not allowed to galactic empire members!', field:'message'})
      }
    })

    return <ChildComponent {...props}/>;
  }
  return WithCheckMode;
}
