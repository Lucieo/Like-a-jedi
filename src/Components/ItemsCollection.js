import React from 'react';
import ItemSliderCollection from 'Components/Collections/ItemSliderCollection';
import ItemListCollection from 'Components/Collections/ItemListCollection';
import ItemThumbnailCollection from 'Components/Collections/ItemThumbnailCollection';
import ItemPanelCollection from 'Components/Collections/ItemPanelCollection';
import {Store} from 'Store';
import {Grid, Typography} from '@material-ui/core';

const actions={
  'ship':'TOGGLE_SHIP',
  'equipment':'TOGGLE_EQUIPMENT'
}

export default function ItemsCollection ({
  collectionType,
  collectionName,
  inventoryMode}
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

    if(['ship', 'equipment'].includes(collectionName)){
      if(!isItemSelected && item.price>state.credits){
        errorMessage='Insufficient credits!';
      }
      else{
        return dispatch({
          type:actions[collectionName],
          payload:item})
      }
    }
    if(errorMessage){
      return dispatch({
        type:'ADD_INFO',
        payload:errorMessage,
        field:'message'})
    }
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
