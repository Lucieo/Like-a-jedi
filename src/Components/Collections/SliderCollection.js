import React from 'react';
import ThumbnailCard from 'Components/Cards/ThumbnailCard';
import SlideCard from 'Components/Cards/SlideCard';
import {Typography, Grid} from '@material-ui/core';

export default function SliderCollection({collection, clickAction, selected}){
  const [current, setCurrent]=React.useState(0);
  const prevCollection = React.useRef(collection);


  React.useEffect(() => {
    if(collection.toString()!==prevCollection.current.toString()){
      setCurrent(0);}
  }, [collection]);

  const nextAction = ()=>{
    current<collection.length-1 && setCurrent(current+1)
  }
  const prevAction = ()=>{
    current>0 && setCurrent(current-1)
  }

  return(
    <>
      <Grid container alignItems='center' justify='center'>
      {collection.length>0 && collection.map((element, key)=>{
        return(
          <ThumbnailCard
            item={element}
            key={key}
            clickAction={()=>setCurrent(key)}
            focus={key===current}
          />
        )
      })}
      </Grid>
      <Grid container alignItems='center' justify='center'>
      {
        collection[current] &&
        <SlideCard
          item={collection[current]}
          prevAction={prevAction}
          nextAction={nextAction}
          selected={selected.includes(collection[current])}
          clickAction={clickAction}
          isFirst={current===0}
          isLast={current===collection.length-1}

        />
      }
      </Grid>
    </>
  )
}
