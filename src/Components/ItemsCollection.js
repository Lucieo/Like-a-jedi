import React from 'react';
import {SliderCollection, PanelCollection, ListCollection, ThumbnailCollection} from 'Components/Collections';
import {Store} from 'Store';
import {launchMission} from 'helpers';

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
    const isItemSelected = isSelected(item);
    if(clickAction){
      return clickAction
    }
    else if(['ship', 'equipment'].includes(collectionName)){
      return toggleItem(item, isItemSelected);
    }
    else if(collectionName==='mission'){
      return launchMission(item, state, dispatch);
    }
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
        return <SliderCollection
                collection={getCollection()}
                clickAction={(item)=>getClickAction(item)}
                selected={state[collectionName]}
              />
      case 'thumbnails':
        return <ThumbnailCollection
                collection={getCollection()}
                clickAction={(item)=>getClickAction(item)}
                selected={state[collectionName]}
              />
      case 'cardList':
        return <ListCollection
                collection={getCollection()}
                clickAction={(item)=>getClickAction(item)}
                selected={state[collectionName]}
              />

      case 'panel':
        return <PanelCollection
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
