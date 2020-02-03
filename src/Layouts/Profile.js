import React from 'react';
import {Grid, Typography, Button} from '@material-ui/core';
import ItemCollection from 'Components/ItemCollection';
import {Store} from 'Store';
import MalePicture from 'media/characters/male.jpg';
import FemalePicture from 'media/characters/female.jpg';
import StromTrooperPicture from 'media/characters/stormtrooper.jpg';
import {OutlinedButton} from 'Components/Buttons';
import TextForm from 'Components/TextForm';


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
            ? <Typography>{state.name}</Typography>
            : <TextForm fieldname='name' placeholder='Your name' color='transparent'/>
          }
        </div>
        <div style={styles.partWrapper}>
          <Typography>Gender</Typography>
          <OutlinedButton variant='outlined' clickAction={()=>dispatch({type:'ADD_INFO', field:'gender', payload:'female'})} text='Female' color='#4dd4c3' active={state.gender==='female'}/>
          <OutlinedButton variant='outlined' clickAction={()=>dispatch({type:'ADD_INFO', field:'gender', payload:'male'})} text='Male' color='#4dd4c3' active={state.gender==='male'}/>

        </div>
      </Grid>
      <Grid item sm={8} style={styles.partWrapper}>
        <div style={styles.inventoryWrapper}>
          <Typography>Ship</Typography>
          {
            state.ship
            ?<ItemCollection collectionType='ships' inventoryMode={true}/>
            :<div style={styles.emptyMessage}>
              <Typography style={styles.blueColor}>You did not select any ship!</Typography>
              <OutlinedButton variant='outlined' clickAction={()=>props.history.push('/spaceships')} text='Find a Ship' color='#4dd4c3'/>
            </div>
          }
        </div>
        <div style={styles.inventoryWrapper}>
          <Typography>Equipment</Typography>
          {
            state.equipment.length>0
            ?<ItemCollection collectionType='equipment' inventoryMode={true}/>
            :<div style={styles.emptyMessage}>
              <Typography style={styles.blueColor}>You did not pick any equipment!</Typography>
              <OutlinedButton variant='outlined' clickAction={()=>props.history.push('/equipment')} text='Select Equipment' color='#4dd4c3'/>
            </div>
          }
        </div>

        <div style={styles.inventoryWrapper}>
          <Typography>Missions</Typography>
          {
            state.missions.length>0
            ?<ItemCollection collectionType='missions' inventoryMode={true}/>
            :<div style={styles.emptyMessage}>
              <Typography style={styles.blueColor}>You did not realize any mission!</Typography>
              <OutlinedButton variant='outlined' clickAction={()=>props.history.push('/missions')} text='Discover Missions' color='#4dd4c3'/>
            </div>
          }
        </div>
      </Grid>
    </Grid>
  )
}
