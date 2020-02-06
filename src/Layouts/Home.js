import React from 'react';
import {Store} from 'Store';
import {Typography, Grid, Button} from '@material-ui/core';
import logo from 'media/starwarslogo.png';
import TextForm from 'Components/TextForm';
import {OutlinedButton} from 'Components/Buttons';
import StarsMovie from 'media/Stars.mp4';
import StarsBg from 'media/spacebg.jpg';
import styles from 'Style/AppStyle';

export default function Home(props){
  const {state, dispatch} = React.useContext(Store);

  const getWelcomeMessage=()=>{
    if(state.mode==='jedi'){
      return state.name
      ? `May the force be with you ${state.name}`
      : 'Welcome Rebel'
    }
    else{
      return state.name
      ? `Stormtrooper ${state.name} report for duty`
      : 'Welcome Stormtrooper'
    }
  }

  const getAction=()=>{
    return state.name
    ? <OutlinedButton
      color='yellow'
      text='Check your profile'
      clickAction={()=>props.history.push('/profile')}
      />
    : <>
      <Typography>
      What's your name?
      </Typography>
      <TextForm fieldname='name'/>
    </>
  }

    return(
      <div>
          <video autoPlay loop muted poster={StarsBg} style={styles.videoBg} src={StarsMovie}/>
        <Grid
          container
          justify='center'
          alignItems='center'
          direction='column'
          style={{...styles.contentWrapper,...styles.fullHeight}}>
          <img src={logo} alt='logo star wars' style={{width:'100%', maxWidth:400}}/>
          <div>
          <Typography variant='h2' align='center' style={styles.breakWord}>
            {getWelcomeMessage()}
          </Typography>
          </div>
            {getAction()}
        </Grid>
      </div>

    )
}
