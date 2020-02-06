import React from 'react';
import equipment from 'Data/equipment';
import ships from 'Data/ships';
import missions from 'Data/missions';

export const Store = React.createContext();

const initialState = {
  name:undefined,
  ship: [],
  equipment:[],
  mission:[],
  mode:'jedi',
  shipCollection:ships,
  equipmentCollection:equipment,
  missionCollection:missions,
  message:undefined,
  mobileMenuOpen:false,
  gender:'female',
  credits:500,
  points:0,
  dialog:undefined,
  life:80,
  location:'thyferra',
  dead:false
};

let newState;


function reducer(state, action) {
  switch (action.type) {
    case 'RESTART_GAME':
      return initialState

    case 'INCREASE_VALUE':
      newState={...state}
      let newValue = state[action.field]+action.value
      action.max && (newValue = Math.min(newValue, action.max))
      newState[action.field] = newValue
      action.price && (newState['credits']=newState.credits-action.price)
      return newState

    case 'DECREASE_VALUE':
      newState={...state}
      newState[action.field] = Math.max(newState[action.field]-action.value, 0)
      return newState

    case 'TOGGLE_MODE':
      const mode = (state.mode === 'jedi' ? 'dark' : 'jedi');
      return {...state, mode}

    case 'TOGGLE_SHIP':
      if(state.ship.length>0 && action.payload.name === state.ship[0].name){
        return {...state, ship:[], credits:state.credits+action.payload.price}
      }
      return {...state, ship:[action.payload], credits:state.credits-action.payload.price}

    case 'TOGGLE_EQUIPMENT':
      if(state.equipment.findIndex(el=>el.name===action.payload.name)>-1){
        return {
          ...state, equipment:state.equipment.filter(el=>el.name!==action.payload.name),
          credits:state.credits + action.payload.price
        }
      }
      return {
        ...state,
        equipment:[...state.equipment, action.payload],
        credits:state.credits - action.payload.price
      }

    case 'ADD_INFO':
      newState={...state}
      newState[action.field]=action.payload
      return newState

    case 'ADD_TO_LIST':
      newState={...state}
      newState[action.field]=[...newState[action.field], action.value]
      return newState

    case 'TOGGLE_INFO':
      newState={...state}
      action.field in newState
      ? newState[action.field]=(!state[action.field])
      :newState[action.field]=true
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
