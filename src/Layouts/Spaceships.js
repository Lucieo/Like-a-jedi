import React from 'react';
import PageBase from 'Components/PageBase';
import ItemsCollection from 'Components/ItemsCollection';


export default function SpaceShips(){
  return(
    <PageBase title="SpaceShips">
      <ItemsCollection
        collectionType='slider'
        collectionName='ship'
      />
    </PageBase>
  )
}
