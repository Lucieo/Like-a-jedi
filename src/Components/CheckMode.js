import React from 'react';
import {Store} from 'Store';

export default ChildComponent =>{
  const CheckMode = (props)=>{
    const {state, dispatch} = React.useContext(Store);

    console.log(state)

    React.useEffect(()=>{
      if(state.mode!=='jedi'){
        props.history.push('/');
        dispatch({type:'ADD_INFO', payload:'This section is not allowed to galactic empire members!', field:'message'})
      }
    })

    return <ChildComponent {...props}/>;
  }
  return CheckMode;
}
