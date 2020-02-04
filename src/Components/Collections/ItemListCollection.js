import React from 'react';
import {Grid} from '@material-ui/core';
import ListCard from 'Components/Cards/ListCard';


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
          <ListCard
          item={item}
          selected={selected.includes(item)}
          clickAction={()=>clickAction(item)}
          />
        )
      })
    }
    </Grid>
  )
}
