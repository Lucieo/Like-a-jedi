import React from 'react';
import ItemCard from 'Components/ItemCard';
import InventoryCard from 'Components/InventoryCard';
import {Store} from 'Store';


export default (props)=>{
  const {state, dispatch} = React.useContext(Store);

  const filterByMode=(collection)=>{
    if(props.inventoryMode){
      return props.collectionType==='equipment'
      ?  state.equipment
      : [state.ship]
    }
    else{
      return collection.filter(element => element.type === state.mode)
    }
  }

  const getCollectionData =()=>{
    switch (props.collectionType) {
      case 'equipment':
        return{
          items : filterByMode(state.equipmentCollection),
          selectedMethod : item => state.equipment.findIndex(el=> el.name===item.name)>-1,
          actionMethod : element=>({type:'TOGGLE_EQUIPMENT', payload:element})
        }
      case 'ships':
        return {
          items : filterByMode(state.shipCollection),
          selectedMethod : item=>(state.ship && state.ship.name===item.name),
          actionMethod :element=>({type:'TOGGLE_SHIP', payload:element})
        }
      default:
        return false
    }
  }


  const renderCollection = ()=>{
    const data = getCollectionData();
    if(data){
      if(props.inventoryMode){
        return data.items.map((element,key)=>
          <InventoryCard
          key={key}
          element={element}
          selected={data.selectedMethod(element)}
          clickAction={()=>dispatch(data.actionMethod(element))}
          inventoryMode={props.inventoryMode}
          />)
      }
      else{
        return data.items.map((element,key)=>
          <ItemCard
          key={key}
          element={element}
          selected={data.selectedMethod(element)}
          clickAction={()=>dispatch(data.actionMethod(element))}
          inventoryMode={props.inventoryMode}
          />)
      }
    }
    return <p style={{color:"white"}}>O items</p>
    }


  return(
    renderCollection()
  )
}
