import React from 'react';
import ItemSliderCollection from 'Components/Collections/ItemSliderCollection';
import ItemListCollection from 'Components/Collections/ItemListCollection';
import ItemThumbnailCollection from 'Components/Collections/ItemThumbnailCollection';
import ItemPanelCollection from 'Components/Collections/ItemPanelCollection';
import {Store} from 'Store';
import {Grid, Typography} from '@material-ui/core';
import {getRandomInt, getTotalPoints} from 'helpers';

const actions={
  'ship':'TOGGLE_SHIP',
  'equipment':'TOGGLE_EQUIPMENT'
}

export default function ItemsCollection ({
  collectionType,
  collectionName,
  inventoryMode,
  clickAction}
){
  const {state, dispatch} = React.useContext(Store);

  const getCollection = ()=>{
    return inventoryMode
    ? state[collectionName]
    : state[collectionName+'Collection'].filter(item=>item.mode===state.mode)
  }

  const getClickAction = (item)=>{
    let errorMessage=undefined;
    const isItemSelected = isSelected(item);
    if(clickAction){
      return clickAction
    }
    else if(['ship', 'equipment'].includes(collectionName)){
      return toggleItem(item, isItemSelected);
    }
    else if(collectionName==='mission'){
      return selectMission(item);
    }
  }

  const selectMission =(item)=>{
    const luck = getRandomInt(20);
    const totalArmor = getTotalPoints([state.equipment, state.ship], 'armor');
    const totalAttack = getTotalPoints([state.equipment, state.ship], 'attack');

  }

  const toggleItem=(item, selected)=>{
    if(!selected && item.price>state.credits){
      return sendMessage('Insufficient credits!', 'message')
    }
    return dispatch({
          type:actions[collectionName],
          payload:item})
  }


  const sendMessage=(message, field)=>{
    return dispatch({
        type:'ADD_INFO',
        payload:message,
        field})
  }

  const isSelected = (item)=>{
    return state[collectionName]
    ?state[collectionName].findIndex(element=> element.name===item.name)>-1
    :false
  }


  const renderCollection = ()=>{
    switch (collectionType) {
      case 'slider':
        return <ItemSliderCollection
                collection={getCollection()}
                clickAction={(item)=>getClickAction(item)}
                selected={state[collectionName]}
              />
      case 'thumbnails':
        return <ItemThumbnailCollection
                collection={getCollection()}
                clickAction={(item)=>getClickAction(item)}
                selected={state[collectionName]}
              />
      case 'cardList':
        return <ItemListCollection
                collection={getCollection()}
                clickAction={(item)=>getClickAction(item)}
                selected={state[collectionName]}
              />

      case 'panel':
        return <ItemPanelCollection
                collection={getCollection()}
                clickAction={(item)=>getClickAction(item)}
                selected={state[collectionName]}
              />


      default:
        return <p>No collection of this type available.</p>
    }
  }

  return(
  <>
    {renderCollection()}
  </>
  )
}
