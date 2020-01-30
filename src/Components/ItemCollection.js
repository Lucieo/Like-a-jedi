import React from 'react';
import ItemCard from 'Components/ItemCard';
import {Store} from 'Store';


export default (props)=>{
  const {state, dispatch} = React.useContext(Store);

  const filterByMode=(collection)=>{
    return collection.filter(element => element.type === state.mode)
  }

  const getCollectionData =()=>{
    switch (props.collectionType) {
      case 'gear':
        return{
          items : filterByMode(state.gearCollection),
          selectedMethod : item => state.gear.findIndex(el=> el.name===item.name)>-1,
          actionMethod : element=>({type:'TOGGLE_GEAR', payload:element})
        }
        case 'ships':
          return {
            items : filterByMode(state.shipCollection),
            selectedMethod : item=>(state.ship && state.ship.name===item.name),
            actionMethod :element=>({type:'TOGGLE_SHIP', payload:element})
          }
        break;
      default:
        return false
    }
  }


  const renderCollection = ()=>{
    const data = getCollectionData();
    return data
    ? data.items.map((element,key)=>
      <ItemCard
      key={key}
      element={element}
      selected={data.selectedMethod(element)}
      clickAction={()=>dispatch(data.actionMethod(element))}
      />)
    : <p>Sorry our store is currently empty in this section!</p>
    }


  return(
    renderCollection()
  )
}
