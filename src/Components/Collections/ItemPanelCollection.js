import React from 'react';
import {Grid} from '@material-ui/core';
import PanelCard from 'Components/Cards/PanelCard';


export default function ItemListCollection({
  collection,
  clickAction,
  selected
}){
  return(
    <Grid container>
    {
      collection.map((item, key)=>{
        return(
          <PanelCard
          item={item}
          selected={selected.includes(item)}
          clickAction={()=>clickAction(item)}
          key={key}
          />
        )
      })
    }
    </Grid>
  )
}
