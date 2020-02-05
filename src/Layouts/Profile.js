import React from 'react';
import {Grid, Typography, Button} from '@material-ui/core';
import ItemsCollection from 'Components/ItemsCollection';
import {Store} from 'Store';
import MalePicture from 'media/characters/male.jpg';
import FemalePicture from 'media/characters/female.jpg';
import StromTrooperPicture from 'media/characters/stormtrooper.jpg';
import {OutlinedButton} from 'Components/Buttons';
import TextForm from 'Components/TextForm';
import GenderSwitch from 'Components/Profile/GenderSwitch';
import EmptyCategory from 'Components/Profile/EmptyCategory';
import AttributesList from 'Components/AttributesList';


const styles ={
  profilePicture:{
    maxHeight:200,
    borderRadius:'50%'
  },
  content:{
    maxWidth:1000,
    margin:'0 auto'
  },
  inventoryWrapper:{
    border:'1px solid #4dd4c3',
    padding:20,
    borderRadius:5,
    minHeight:200,
    marginTop:20,
    textAlign:'left'
  },
  partWrapper:{
    padding:20
  },
  emptyMessage:{
    marginTop:10,
  },
  blueColor:{
    color:'#4dd4c3'
  },
  textCenter:{
    textAlign:'center'
  },
  partTitle:{
    paddingBottom:10
  }
}

export default (props)=>{
  const {state, dispatch}= React.useContext(Store);

  const getProfileImage =()=>{
    if(state.mode==='jedi'){
      return state.gender==='female'
      ?FemalePicture
      :MalePicture
    }
    return StromTrooperPicture
  }

  return(
    <Grid container style={styles.content} direction="row"
  justify="center">
      <Grid item sm={4} style={styles.partWrapper}>
        <div style={styles.textCenter}>
          <img src={getProfileImage()} style={styles.profilePicture}/>
        </div>

        <div style={styles.textCenter}>
          {
            state.name
            ? <Typography style={styles.partTitle}>{state.name}</Typography>
            : <TextForm fieldname='name' placeholder='Your name' color='transparent'/>
          }
        </div>

        <div style={styles.partWrapper}>
          <Typography style={styles.partTitle}>Gender</Typography>
          <GenderSwitch/>
        </div>

        <div style={styles.partWrapper}>
          <Typography style={styles.partTitle}>Credits</Typography>
          <Typography>{state.credits} GC available</Typography>
        </div>

        <div style={styles.partWrapper}>
          <Typography style={styles.partTitle}>Experience</Typography>
          <Typography>{state.points} points earned</Typography>
        </div>

      </Grid>

      <Grid item sm={8} style={styles.partWrapper}>
        <div style={styles.inventoryWrapper}>
          <Typography>Ship</Typography>
          {
            state.ship.length>0
            ?
            <Grid container alignItems='center'>
              <Grid item sm={6} xs={12}>
                <img src={state.ship[0].image} style={{width:'100%'}}/>
              </Grid>
              <Grid item sm={6} xs={12} style={styles.partWrapper}>
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

        <div style={styles.inventoryWrapper}>
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

        <div style={styles.inventoryWrapper}>
          <Typography>Missions</Typography>
          {
            state.mission.length>0
            ?<ItemsCollection
              collectionType='missions'
              inventoryMode={true}/>
            :<EmptyCategory
              clickAction={()=>props.history.push('/missions')}
              btnMessage="Select mission"
              errorMessage="You did not realize any missions!"/>
          }
        </div>
      </Grid>
    </Grid>
  )
}
