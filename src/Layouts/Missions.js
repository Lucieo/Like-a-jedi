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
