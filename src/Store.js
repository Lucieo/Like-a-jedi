import React from 'react';
import equipment from 'Data/equipment';
import ships from 'Data/ships';

export const Store = React.createContext();

const initialState = {
  name:undefined,
  ship: undefined,
  equipment:[],
  missions:[],
  mode:'jedi',
  shipCollection:ships,
  equipmentCollection:equipment,
  message:undefined,
  mobileMenuOpen:false,
  gender:'female'
};

let newState;


function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_MODE':
      const mode = (state.mode === 'jedi' ? 'dark' : 'jedi');
      return {...state, mode}

    case 'TOGGLE_SHIP':
      if(state.ship && action.payload.name === state.ship.name){
        return {...state, ship:undefined}
      }
      return {...state, ship:action.payload}

    case 'TOGGLE_EQUIPMENT':
      if(state.equipment.findIndex(el=>el.name===action.payload.name)>-1){
        return {...state, equipment:state.equipment.filter(el=>el.name!==action.payload.name)}
      }
      return {...state, equipment:[...state.equipment, action.payload]}

    case 'ADD_MESSAGE':
      return {...state, message:action.payload}

    case 'ADD_INFO':
      newState={...state}
      newState[action.field]=action.payload
      return newState

    case 'TOGGLE_INFO':
      newState={...state}
      if(action.field in newState){
        newState[action.field]=(!state[action.field])
      }
      else{
        newState[action.field]=true
      }
      return newState

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}
</Store.Provider>
};
