import React from 'react';
import PageBase from 'Components/PageBase';
import ItemsCollection from 'Components/ItemsCollection';

export default function Missions(){
  return(
    <PageBase title="Missions">
      <ItemsCollection
        collectionType='panel'
        collectionName='mission'
      />
    </PageBase>
  )

}
