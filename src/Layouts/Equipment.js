import React from 'react';
import PageBase from 'Components/PageBase';
import ItemsCollection from 'Components/ItemsCollection';

const styles={
  pad20:{
    padding:20
  },
  partWrapper:{
    maxWidth:800,
    padding:20,
    margin:'0 auto'
  }
}

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
