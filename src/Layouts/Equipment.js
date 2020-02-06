import React from 'react';
import PageBase from 'Components/PageBase';
import ItemsCollection from 'Components/ItemsCollection';

export default function Equipment(){
  return(
    <PageBase title="Equipment">
      <ItemsCollection
        collectionType='cardList'
        collectionName='equipment'
      />
    </PageBase>
  )

}
