import React from 'react';
import gear from 'Data/gear';
import ships from 'Data/ships';

export const Store = React.createContext();

const initialState = {
  ship: undefined,
  gear:[],
  mode:'jedi',
  shipCollection:ships,
  gearCollection:gear
};


function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_MODE':
      const mode = (state.mode === 'jedi' ? 'dark' : 'jedi');
      return {...state, mode}

    case 'TOGGLE_SHIP':
      console.log('TOGGLE_SHIP');
      if(state.ship && action.payload.name === state.ship.name){
        return {...state, ship:undefined}
      }
      return {...state, ship:action.payload}


    case 'TOGGLE_GEAR':
      console.log('TOGGLE_GEAR')
      if(state.gear.findIndex(el=>el.name===action.payload.name)>-1){
        return {...state, gear:state.gear.filter(el=>el.name!==action.payload.name)}
      }
      return {...state, gear:[...state.gear, action.payload]}

    default:
      console.log('default')
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}
</Store.Provider>
};
