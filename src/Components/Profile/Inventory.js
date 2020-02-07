import React from 'react';
import {EmptyCategory} from 'Components/Profile';
import AttributesList from 'Components/AttributesList';
import {Typography, Grid, List, ListItem, ListItemText} from '@material-ui/core';
import {Store} from 'Store';
import { withRouter } from "react-router";
import ItemsCollection from 'Components/ItemsCollection';
import styles from 'Style/AppStyle.js';
import {getIcon} from 'Components/Popups/MessageDialog';

export default withRouter(function Inventory(props){
  const {state}= React.useContext(Store);

  const displayMission = (mission, key)=>{
    return(
      <List key={key}>
        <ListItem>
          <ListItemText
            primary={<Typography>{getIcon(mission.status, '#f1ebd5', 30)}{mission.title}</Typography>}
          />
        </ListItem>
      </List>
    )
  }

  return(
    <>
    <div style={styles.inventoryBox}>
      <Typography>Ship</Typography>
      {
        state.ship.length>0
        ?
        <Grid container alignItems='center'>
          <Grid item sm={6} xs={12}>
            <img src={state.ship[0].image} style={{width:'100%'}} alt='ship'/>
          </Grid>
          <Grid item sm={6} xs={12} style={styles.contentWrapper}>
            <Typography>{state.ship[0].name}</Typography>
            <AttributesList attributes={['attack','armor']} item={state.ship[0]}/>
          </Grid>
        </Grid>
        :<EmptyCategory
          clickAction={()=>props.history.push('/spaceships')}
          btnMessage="Select ship"
          errorMessage="You did not select any ship!"/>
      }
    </div>

    <div style={styles.inventoryBox}>
      <Typography>Equipment</Typography>
      {
        state.equipment.length>0
        ?<ItemsCollection
            collectionType='thumbnails'
            collectionName='equipment'
            inventoryMode={true}
          />
        :<EmptyCategory
          clickAction={()=>props.history.push('/equipment')}
          btnMessage="Select equipment"
          errorMessage="You did not select any equipment!"/>
      }
    </div>

    <div style={styles.inventoryBox}>
      <Typography>Missions</Typography>
      {
        state.mission.length>0
        ?state.mission.map((element, key)=>displayMission(element, key))
        :<EmptyCategory
          clickAction={()=>props.history.push('/missions')}
          btnMessage="Select mission"
          errorMessage="You did not realize any missions!"/>
      }
    </div>
    </>
  )
})
