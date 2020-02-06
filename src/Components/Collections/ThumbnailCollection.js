import React from 'react';
import {Grid} from '@material-ui/core';
import ThumbnailCard from 'Components/Cards/ThumbnailCard';


export default function ThumbnailCollection({
  collection,
  clickAction,
  selected
}){
  return(
    <Grid container>
    {
      collection.map((item, key)=>{
        return(
          <ThumbnailCard
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
