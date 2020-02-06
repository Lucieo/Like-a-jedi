import React from 'react';
import {Typography, Grid} from '@material-ui/core';
import TextForm from 'Components/TextForm';
import {GenderSwitch} from 'Components/Profile';
import {Store} from 'Store';
import MalePicture from 'media/characters/male.jpg';
import FemalePicture from 'media/characters/female.jpg';
import StromTrooperPicture from 'media/characters/stormtrooper.jpg';
import {OutlinedButton} from 'Components/Buttons';
import styles from 'Style/AppStyle.js';


export default function CharacterInfos(){
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
      <>
      <Grid
        container
        justify='center'
        direction='column'
        alignItems='center'>
        <img src={getProfileImage()} style={styles.profilePicture}/>
        {
          state.name
          ? <Typography
              variant='h4'
              style={styles.contentWrapper}>
          {state.name}
          </Typography>
          : <TextForm
              fieldname='name'
              placeholder='Your name'
              color='transparent'/>
        }
      </Grid>

      <div style={styles.contentWrapper}>
        <Typography style={styles.partTitle}>
          Gender
        </Typography>
        <GenderSwitch/>
      </div>

      <div style={styles.contentWrapper}>
        <Typography style={styles.partTitle}>Credits</Typography>
        <Typography variant='body2'>{state.credits} GC available</Typography>
      </div>

      <div style={styles.contentWrapper}>
        <Typography style={styles.partTitle}>Experience</Typography>
        <Typography variant='body2'>{state.points} points earned</Typography>
      </div>

      <div style={styles.contentWrapper}>
        <Typography style={styles.partTitle}>Life</Typography>
        <Typography variant='body2'>{state.life}%</Typography>
        {
          (state.life<100 && state.credits>10) &&
          <OutlinedButton
            text='BUY HEALTH KIT (10GC)'
            clickAction={()=>dispatch({type:'INCREASE_VALUE', value:10, field:'life', price:10, max:100})}
          />
        }
      </div>
      </>
  )
}
