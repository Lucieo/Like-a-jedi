import React from 'react';
import {Grid} from '@material-ui/core';
import PanelCard from 'Components/Cards/PanelCard';


export default function PanelCollection({
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
          realized={selected.find(el=>el.title===item.title)}
          clickAction={()=>clickAction(item)}
          key={key}
          />
        )
      })
    }
    </Grid>
  )
}
